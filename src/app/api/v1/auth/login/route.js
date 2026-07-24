import { NextResponse } from "next/server";
import { signToken, COOKIE_NAME, COOKIE_OPTIONS } from "@/lib/jwt";

/**
 * POST /api/v1/auth/login
 *
 * Request body: { email: string, password: string }
 *
 * Response 200: { success: true, user: { id, name, email, role, roleId, assignedIPC } }
 *               Sets httpOnly cookie "nasfam_session" containing a signed JWT.
 *
 * Response 401: { success: false, error: "Invalid credentials" }
 * Response 503: { success: false, error: "Backend not configured" }
 *
 * ── Backend integration ─────────────────────────────────────────────────────
 * Set BACKEND_API_URL to have requests proxied to your real backend:
 *   POST ${BACKEND_API_URL}/auth/login  →  { user, token? }
 *
 * If no backend is configured, set the following environment variables for
 * a single development administrator account:
 *   GTMS_DEV_EMAIL      (e.g. admin@nasfam.org)
 *   GTMS_DEV_PASSWORD   (plain text — dev only, never use in production)
 * ───────────────────────────────────────────────────────────────────────────
 */
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { email, password } = body ?? {};
  if (!email || !password) {
    return NextResponse.json(
      { success: false, error: "Email and password are required." },
      { status: 400 }
    );
  }

  // ── Option 1: Proxy to real backend ──────────────────────────
  const backendUrl = process.env.BACKEND_API_URL;
  if (backendUrl) {
    try {
      const upstream = await fetch(`${backendUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await upstream.json();
      if (!upstream.ok) {
        return NextResponse.json(
          { success: false, error: data.message || data.error || "Authentication failed." },
          { status: upstream.status }
        );
      }
      // Backend returned user — issue our own session cookie.
      const token = signToken({
        id: data.user.id,
        email: data.user.email,
        name: data.user.name,
        role: data.user.role,
        roleId: data.user.roleId,
        assignedIPC: data.user.assignedIPC ?? null,
      });
      const res = NextResponse.json({ success: true, user: data.user });
      res.cookies.set(COOKIE_NAME, token, COOKIE_OPTIONS);
      return res;
    } catch (err) {
      return NextResponse.json(
        { success: false, error: "Could not reach backend service." },
        { status: 502 }
      );
    }
  }

  // ── Option 2: Dev credentials via environment variables ───────
  const devEmail = process.env.GTMS_DEV_EMAIL;
  const devPassword = process.env.GTMS_DEV_PASSWORD;
  if (devEmail && devPassword) {
    if (
      email.trim().toLowerCase() === devEmail.trim().toLowerCase() &&
      password === devPassword
    ) {
      const user = {
        id: "dev-usr-001",
        name: "Development Admin",
        email: devEmail,
        role: "System Administrator",
        roleId: "role-sysadmin",
        assignedIPC: null,
      };
      const token = signToken(user);
      const res = NextResponse.json({ success: true, user });
      res.cookies.set(COOKIE_NAME, token, COOKIE_OPTIONS);
      return res;
    }
    return NextResponse.json(
      { success: false, error: "Invalid email or password." },
      { status: 401 }
    );
  }

  // ── Option 3: No backend configured ──────────────────────────
  return NextResponse.json(
    {
      success: false,
      error: "Authentication backend is not configured.",
      code: "BACKEND_NOT_CONFIGURED",
      hint: "Set BACKEND_API_URL to point to your API server, or set GTMS_DEV_EMAIL and GTMS_DEV_PASSWORD for development access.",
    },
    { status: 503 }
  );
}
