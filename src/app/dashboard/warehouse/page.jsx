"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import WorkspaceLayout from "@/components/WorkspaceLayout";
import { warehousesService } from "@/lib/api/warehouses";

const ICON = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

function StatCard({ title, value, icon, trend, trendUp = true }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-500">
          {icon}
          <p className="text-sm font-semibold text-gray-700">{title}</p>
        </div>
        {trend && (
          <div className="flex items-center gap-1">
            <svg className={`w-3.5 h-3.5 ${trendUp ? "text-[#1a5c2a]" : "text-red-500"}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={trendUp ? "M7 17L17 7M17 7H7M17 7v10" : "M7 7l10 10M17 17H7M17 17V7"} />
            </svg>
            <span className={`text-xs font-semibold ${trendUp ? "text-[#1a5c2a]" : "text-red-600"}`}>{trend}</span>
          </div>
        )}
      </div>
      <p className="text-xl font-bold text-gray-900">{value ?? "—"}</p>
    </div>
  );
}

function SkeletonRow() {
  return (
    <tr className="border-b border-gray-100 animate-pulse">
      {Array.from({ length: 8 }).map((_, i) => <td key={i} className="px-4 py-3"><div className="h-3.5 bg-gray-200 rounded w-3/4" /></td>)}
    </tr>
  );
}

export default function WarehousePage() {
  const [records, setRecords]           = useState([]);
  const [stats, setStats]               = useState({ totalStored: 0, totalWeight: 0, pendingGRNs: 0, activeWarehouses: 0 });
  const [loading, setLoading]           = useState(true);
  const [error, setError]               = useState(null);
  const [warehouseFilter, setWarehouseFilter] = useState("All");
  const [grnStatusFilter, setGrnStatusFilter] = useState("All");

  const fetchRecords = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = {};
      if (warehouseFilter !== "All") params.warehouse  = warehouseFilter;
      if (grnStatusFilter !== "All") params.grnStatus  = grnStatusFilter;
      const res = await warehousesService.listRecords(params);
      setRecords(res.data ?? []);
      if (res.stats) setStats(res.stats);
    } catch (err) {
      setError(err.message ?? "Failed to load warehouse records.");
    } finally {
      setLoading(false);
    }
  }, [warehouseFilter, grnStatusFilter]);

  useEffect(() => { fetchRecords(); }, [fetchRecords]);

  const warehouses  = useMemo(() => ["All", ...new Set(records.map((r) => r.warehouseName).filter(Boolean))], [records]);
  const grnStatuses = useMemo(() => ["All", ...new Set(records.map((r) => r.grnStatus).filter(Boolean))],     [records]);

  return (
    <WorkspaceLayout
      icon={ICON}
      module="Warehouse"
      moduleHref="/dashboard/warehouse"
      title="Warehouse"
      description="GRN-based stock records and inventory tracking."
      tabs={[]}
    >
      <div className="space-y-6">
        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Stored Records" value={loading ? "…" : stats.totalStored} icon={ICON} />
          <StatCard title="Total Weight (kg)" value={loading ? "…" : (stats.totalWeight ?? 0).toLocaleString()} icon={ICON} />
          <StatCard title="Pending GRNs" value={loading ? "…" : stats.pendingGRNs} trendUp={false} icon={ICON} />
          <StatCard title="Active Warehouses" value={loading ? "…" : stats.activeWarehouses} icon={ICON} />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          <select value={warehouseFilter} onChange={(e) => setWarehouseFilter(e.target.value)}
            className="px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-[#1a5c2a] bg-white">
            {warehouses.map((w) => <option key={w} value={w}>{w}</option>)}
          </select>
          <select value={grnStatusFilter} onChange={(e) => setGrnStatusFilter(e.target.value)}
            className="px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-[#1a5c2a] bg-white">
            {grnStatuses.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
            {error} — <button onClick={fetchRecords} className="underline font-semibold">Retry</button>
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  {["GRN #", "Warehouse", "Commodity", "Grade", "Bags", "Weight (kg)", "GRN Status", "Batch #", ""].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  Array.from({ length: 6 }).map((_, i) => <SkeletonRow key={i} />)
                ) : records.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="px-4 py-12 text-center text-sm text-gray-500">
                      No warehouse records found. Connect a backend to load stock data.
                    </td>
                  </tr>
                ) : (
                  records.map((r) => (
                    <tr key={r.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-mono text-xs text-gray-600">{r.grnNumber}</td>
                      <td className="px-4 py-3">
                        <p className="font-semibold text-gray-900 text-xs">{r.warehouseName}</p>
                        <p className="text-xs text-gray-400">{r.location}</p>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{r.commodity}</td>
                      <td className="px-4 py-3 text-gray-500">{r.grade}</td>
                      <td className="px-4 py-3 text-gray-900 font-medium">{r.bags}</td>
                      <td className="px-4 py-3 text-gray-900 font-medium">{(r.weight ?? 0).toLocaleString()}</td>
                      <td className="px-4 py-3">
                        <span className={`text-xs font-semibold ${r.grnStatus === "Verified" ? "text-[#1a5c2a]" : "text-amber-600"}`}>{r.grnStatus}</span>
                      </td>
                      <td className="px-4 py-3 font-mono text-xs text-gray-500">{r.batchNumber}</td>
                      <td className="px-4 py-3">
                        <Link href={`/dashboard/warehouse/${r.id}`} className="text-xs font-semibold text-[#1a5c2a] hover:underline">
                          View
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </WorkspaceLayout>
  );
}
