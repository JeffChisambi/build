/**
 * NASFAM GTMS — Central API Client
 *
 * All frontend code calls these helpers. They target the Next.js API route
 * layer at /api/v1/* which in turn can proxy to the real backend service.
 *
 * Set BACKEND_API_URL in environment variables to enable proxy mode.
 */

const BASE = "/api/v1";

class ApiError extends Error {
  constructor(message, status, code, data) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.data = data;
  }
}

async function request(path, options = {}) {
  const url = `${BASE}${path}`;
  const { body, params, ...rest } = options;

  const fullUrl = params
    ? `${url}?${new URLSearchParams(params)}`
    : url;

  const res = await fetch(fullUrl, {
    headers: { "Content-Type": "application/json", ...rest.headers },
    credentials: "same-origin",
    ...rest,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  let data = {};
  try {
    data = await res.json();
  } catch {
    /* non-JSON response */
  }

  if (!res.ok) {
    throw new ApiError(
      data.message || data.error || `Request failed with status ${res.status}`,
      res.status,
      data.code,
      data
    );
  }

  return data;
}

const api = {
  get: (path, params) => request(path, { method: "GET", params }),
  post: (path, body) => request(path, { method: "POST", body }),
  put: (path, body) => request(path, { method: "PUT", body }),
  patch: (path, body) => request(path, { method: "PATCH", body }),
  del: (path) => request(path, { method: "DELETE" }),
};

export { api, ApiError };
