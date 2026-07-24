/**
 * Lightweight JWT utility using Node.js built-in crypto.
 * No external dependencies required.
 */

import crypto from "crypto";

const ALG_HEADER = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url");
const SESSION_EXPIRY_SECONDS = 60 * 60 * 8; // 8 hours

function getSecret() {
  const secret = process.env.SESSION_SECRET;
  if (!secret) throw new Error("SESSION_SECRET environment variable is not set.");
  return secret;
}

/**
 * Sign a JWT payload with HS256.
 * @param {object} payload
 * @param {number} [expiresInSeconds]
 * @returns {string} JWT token
 */
export function signToken(payload, expiresInSeconds = SESSION_EXPIRY_SECONDS) {
  const secret = getSecret();
  const now = Math.floor(Date.now() / 1000);
  const body = Buffer.from(
    JSON.stringify({ ...payload, iat: now, exp: now + expiresInSeconds })
  ).toString("base64url");
  const sig = crypto
    .createHmac("sha256", secret)
    .update(`${ALG_HEADER}.${body}`)
    .digest("base64url");
  return `${ALG_HEADER}.${body}.${sig}`;
}

/**
 * Verify and decode a JWT token.
 * Throws if invalid or expired.
 * @param {string} token
 * @returns {object} decoded payload
 */
export function verifyToken(token) {
  const secret = getSecret();
  const parts = token.split(".");
  if (parts.length !== 3) throw new Error("Malformed token.");

  const [header, body, sig] = parts;
  const expected = crypto
    .createHmac("sha256", secret)
    .update(`${header}.${body}`)
    .digest("base64url");

  if (sig !== expected) throw new Error("Invalid token signature.");

  const payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
  const now = Math.floor(Date.now() / 1000);
  if (payload.exp && payload.exp < now) throw new Error("Token has expired.");

  return payload;
}

export const COOKIE_NAME = "nasfam_session";

export const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  path: "/",
  maxAge: SESSION_EXPIRY_SECONDS,
};
