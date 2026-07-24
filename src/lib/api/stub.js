import { NextResponse } from "next/server";

/**
 * Shared helper for stub API route handlers.
 *
 * When BACKEND_API_URL is set every route proxies the request there.
 * When not set, routes return a structured empty response so the UI
 * renders with empty states rather than crashing.
 */

export async function proxyOrStub(request, backendPath, { stubData = [], stubMeta = {} } = {}) {
  const backendUrl = process.env.BACKEND_API_URL;

  if (backendUrl) {
    const url = new URL(backendPath, backendUrl);
    // Forward original query string
    const origSearch = new URL(request.url).search;
    if (origSearch) url.search = origSearch;

    const upstream = await fetch(url.toString(), {
      method: request.method,
      headers: {
        "Content-Type": "application/json",
        ...(request.headers.get("x-session-user")
          ? { "x-session-user": request.headers.get("x-session-user") }
          : {}),
      },
      body: ["GET", "HEAD"].includes(request.method)
        ? undefined
        : await request.text().catch(() => undefined),
    });

    const data = await upstream.json().catch(() => ({}));
    return NextResponse.json(data, { status: upstream.status });
  }

  // Stub response
  const isArray = Array.isArray(stubData);
  return NextResponse.json({
    success: true,
    data: stubData,
    ...(isArray ? { total: stubData.length, page: 1, limit: 20 } : {}),
    ...stubMeta,
    _stub: true,
  });
}

/** Return 501 Not Implemented for write operations that need a real backend. */
export function notImplemented(operation = "This operation") {
  return NextResponse.json(
    {
      success: false,
      error: `${operation} requires a connected backend. Set BACKEND_API_URL in environment variables.`,
      code: "NOT_IMPLEMENTED",
    },
    { status: 501 }
  );
}
