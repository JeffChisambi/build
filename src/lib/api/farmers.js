import { api } from "./client";

/**
 * Farmers Service
 *
 * Backend contract:
 *   GET    /api/v1/farmers                       → { data: Farmer[], total, page, limit }
 *   POST   /api/v1/farmers                       → { data: Farmer }
 *   GET    /api/v1/farmers/:id                   → { data: Farmer }
 *   PUT    /api/v1/farmers/:id                   → { data: Farmer }
 *   DELETE /api/v1/farmers/:id                   → { success }
 *   GET    /api/v1/farmers/:id/history           → { data: HistoryEntry[] }
 *   GET    /api/v1/farmers/:id/traceability      → { data: TraceabilityRecord[] }
 *   GET    /api/v1/farmers/:id/documents         → { data: Document[] }
 *
 *   GET    /api/v1/farmer-groups                 → { data: Group[], total, page, limit }
 *   POST   /api/v1/farmer-groups                 → { data: Group }
 *   GET    /api/v1/farmer-groups/:id             → { data: Group }
 *   PUT    /api/v1/farmer-groups/:id             → { data: Group }
 *   DELETE /api/v1/farmer-groups/:id             → { success }
 *
 *   GET    /api/v1/farmer-history                → { data: HistoryEntry[], total }
 *
 * Farmer shape:
 *   { id, fullName, gender, dob, phone, altPhone, nationalId, district,
 *     ta, epa, section, village, gps, association, club, group, memberNo,
 *     farmSize, unit, primaryCrops, secondaryCrops, productionSeason,
 *     registrationDate, registrationOfficer, status, photoUrl }
 */

export const farmersService = {
  // Farmer profiles
  list: (params) => api.get("/farmers", params),
  get: (id) => api.get(`/farmers/${id}`),
  create: (payload) => api.post("/farmers", payload),
  update: (id, payload) => api.put(`/farmers/${id}`, payload),
  remove: (id) => api.del(`/farmers/${id}`),

  // Per-farmer sub-resources
  getHistory: (id) => api.get(`/farmers/${id}/history`),
  getTraceability: (id) => api.get(`/farmers/${id}/traceability`),
  getDocuments: (id) => api.get(`/farmers/${id}/documents`),

  // Farmer groups
  listGroups: (params) => api.get("/farmer-groups", params),
  getGroup: (id) => api.get(`/farmer-groups/${id}`),
  createGroup: (payload) => api.post("/farmer-groups", payload),
  updateGroup: (id, payload) => api.put(`/farmer-groups/${id}`, payload),
  removeGroup: (id) => api.del(`/farmer-groups/${id}`),

  // Global activity history (across all farmers)
  listHistory: (params) => api.get("/farmer-history", params),
};
