import { api } from "./client";

/**
 * Dashboard Metrics Service
 *
 * Backend contract:
 *   GET    /api/v1/dashboard/metrics             → { data: DashboardMetrics }
 *
 * DashboardMetrics shape:
 *   { totalUsers, activeUsers, totalRoles, totalIPCs,
 *     devicesSynced, devicesOnline, totalFarmers, activeFarmers,
 *     totalPurchases, totalWarehouseWeight, pendingSyncs, failedSyncs }
 */

export const dashboardService = {
  getMetrics: () => api.get("/dashboard/metrics"),
};
