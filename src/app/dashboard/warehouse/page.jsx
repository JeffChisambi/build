"use client";

import { useState, useMemo } from "react";
import WorkspaceLayout from "@/components/WorkspaceLayout";
import { SEED_PURCHASES } from "@/lib/mockPurchases";

const ICON = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

// ── Stat Card ────────────────────────────────────────
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
      <p className="text-xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

// ── Stock Status Badge ────────────────────────────────────────
function StockBadge({ status }) {
  const colors = {
    "Stored":            "bg-gray-50 text-gray-700 border border-gray-200",
    "In Transit":        "bg-indigo-50 text-indigo-700 border border-indigo-100",
    "Dispatched":        "bg-amber-50 text-amber-700 border border-amber-100",
    "Not Yet Received":  "bg-gray-100 text-gray-500 border border-gray-200",
    "Not Received":      "bg-red-50 text-red-600 border border-red-100",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${colors[status] || "bg-gray-50 text-gray-500"}`}>
      {status}
    </span>
  );
}

export default function WarehousePage() {
  const [warehouseFilter, setWarehouseFilter] = useState("All");
  const [grnStatusFilter, setGrnStatusFilter] = useState("All");

  // Build warehouse-centric records from purchases
  const records = useMemo(() => {
    return SEED_PURCHASES.filter(p => p.warehouse).map(p => ({
      id: p.id,
      // GRN details
      grnNumber:         p.grn?.grnNumber || "—",
      grnStatus:         p.grn?.grnStatus || "Pending",
      receivingOfficer:  p.grn?.receivingOfficer || "—",
      receivingDate:     p.grn?.receivingDate || "—",
      acceptedQty:       p.grn?.acceptedQuantity ?? 0,
      rejectedQty:       p.grn?.rejectedQuantity ?? 0,
      // Warehouse location
      warehouseName:     p.warehouse.name,
      warehouseCode:     p.grn?.warehouseCode || "—",
      location:          p.warehouse.location,
      bin:               p.warehouse.bin,
      stack:             p.warehouse.stack,
      shelf:             p.warehouse.shelf || "—",
      storageCondition:  p.warehouse.storageCondition || "—",
      stockStatus:       p.warehouse.currentStockStatus || "Stored",
      // Commodity info
      commodity:         p.commodity,
      grade:             p.grade,
      bags:              p.numberOfBags,
      weight:            p.totalWeight,
      // Batch
      batchNumber:       p.batch?.batchNumber || "—",
      batchStatus:       p.batch?.batchStatus || "—",
    }));
  }, []);

  // Filter options
  const warehouses = useMemo(() =>
    ["All", ...Array.from(new Set(records.map(r => r.warehouseName)))],
    [records]
  );

  const grnStatuses = useMemo(() =>
    ["All", ...Array.from(new Set(records.map(r => r.grnStatus)))],
    [records]
  );

  // Filtered records
  const filteredRecords = useMemo(() =>
    records.filter(r => {
      const matchWarehouse  = warehouseFilter  === "All" || r.warehouseName === warehouseFilter;
      const matchGrnStatus  = grnStatusFilter  === "All" || r.grnStatus     === grnStatusFilter;
      return matchWarehouse && matchGrnStatus;
    }),
    [records, warehouseFilter, grnStatusFilter]
  );

  // KPIs — warehouse manager relevant
  const totalStored     = useMemo(() => records.filter(r => r.stockStatus === "Stored").length, [records]);
  const totalWeight     = useMemo(() => records.reduce((s, r) => s + r.acceptedQty, 0).toLocaleString(), [records]);
  const pendingGRNs     = useMemo(() => records.filter(r => r.grnStatus === "Pending").length, [records]);
  const activeWarehouses= useMemo(() => new Set(records.map(r => r.warehouseName)).size, [records]);

  return (
    <WorkspaceLayout
      icon={ICON}
      module="Warehouse"
      moduleHref="/dashboard/warehouse"
      title="Warehouse"
      description="Manage GRNs, stock locations, storage conditions, and dispatch operations."
      tabs={[]}
      hideTitleBlock={true}
      hideHeader={true}
    >
      <div className="space-y-6 p-6 max-w-7xl mx-auto">


        {/* KPI Cards — warehouse manager view */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard
            title="Total Accepted Weight"
            value={`${totalWeight} kg`}
            trend="6.34%"
            trendUp={true}
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            }
          />
          <StatCard
            title="Pending GRNs"
            value={pendingGRNs}
            trend="2.15%"
            trendUp={false}
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            }
          />
          <StatCard
            title="Active Warehouses"
            value={activeWarehouses}
            trend="5.12%"
            trendUp={true}
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            }
          />
        </div>

        {/* Main Content Area / Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <div>
              <p className="text-sm font-bold text-gray-900">GRN Inventory Register</p>
              <p className="text-xs text-gray-400 mt-0.5">{filteredRecords.length} records found</p>
            </div>
            <div className="flex items-center gap-2">
              {/* Warehouse filter */}
              <select
                value={warehouseFilter}
                onChange={e => setWarehouseFilter(e.target.value)}
                className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-xs font-medium text-gray-700 focus:ring-2 focus:ring-gray-100 focus:border-gray-400 outline-none"
              >
                {warehouses.map(w => (
                  <option key={w} value={w}>{w === "All" ? "All Warehouses" : w}</option>
                ))}
              </select>

              {/* GRN status filter */}
              <select
                value={grnStatusFilter}
                onChange={e => setGrnStatusFilter(e.target.value)}
                className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-xs font-medium text-gray-700 focus:ring-2 focus:ring-gray-100 focus:border-gray-400 outline-none"
              >
                {grnStatuses.map(s => (
                  <option key={s} value={s}>{s === "All" ? "All GRN Statuses" : s}</option>
                ))}
              </select>

              <button className="flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors border border-gray-200">
                Export CSV
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#1a5c2a] text-white text-sm font-semibold rounded-md hover:bg-[#134520] transition-colors flex-shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                GRN
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-xs font-semibold text-gray-700 px-4 py-3">Date</th>
                  <th className="text-xs font-semibold text-gray-700 px-4 py-3">Warehouse</th>
                  <th className="text-xs font-semibold text-gray-700 px-4 py-3">Commodity</th>
                  <th className="text-xs font-semibold text-gray-700 px-4 py-3">Accepted (kg)</th>
                  <th className="text-xs font-semibold text-gray-700 px-4 py-3">Stock Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredRecords.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-4 py-12 text-center text-sm text-gray-400">
                      No GRN records found matching your filters.
                    </td>
                  </tr>
                ) : (
                  filteredRecords.map(r => (
                    <tr key={r.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      {/* Date */}
                      <td className="px-4 py-3.5">
                        <p className="text-xs font-mono font-semibold text-gray-900">{r.grnNumber}</p>
                        <p className="text-[11px] text-gray-400">{r.receivingDate}</p>
                      </td>
                      {/* Warehouse */}
                      <td className="px-4 py-3.5">
                        <p className="text-xs font-semibold text-gray-900">{r.warehouseName}</p>
                      </td>
                      {/* Commodity */}
                      <td className="px-4 py-3.5">
                        <p className="text-xs font-semibold text-gray-900">{r.commodity}</p>
                      </td>
                      {/* Accepted Qty */}
                      <td className="px-4 py-3.5">
                        <p className="text-xs font-semibold text-gray-900">{r.acceptedQty.toLocaleString()} kg</p>
                        {r.rejectedQty > 0 && (
                          <p className="text-[11px] text-red-500">{r.rejectedQty} kg rejected</p>
                        )}
                      </td>
                      {/* Stock Status */}
                      <td className="px-4 py-3.5">
                        <StockBadge status={r.stockStatus} />
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
