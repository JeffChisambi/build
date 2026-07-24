import { proxyOrStub } from "@/lib/api/stub";

/**
 * GET /api/v1/dashboard/metrics
 * Returns aggregated KPIs for role-based dashboard cards.
 * Response: {
 *   success,
 *   data: {
 *     totalUsers, activeUsers, totalRoles, totalIPCs,
 *     devicesSynced, devicesOnline, totalFarmers, activeFarmers,
 *     totalPurchases, totalWarehouseWeight, pendingSyncs, failedSyncs
 *   }
 * }
 */
export async function GET(request) {
  return proxyOrStub(request, "/dashboard/metrics", {
    stubData: {
      totalUsers: 0,
      activeUsers: 0,
      totalRoles: 0,
      totalIPCs: 0,
      devicesSynced: 0,
      devicesOnline: 0,
      totalFarmers: 0,
      activeFarmers: 0,
      totalPurchases: 0,
      totalWarehouseWeight: 0,
      pendingSyncs: 0,
      failedSyncs: 0,
    },
  });
}
