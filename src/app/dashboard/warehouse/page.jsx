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
            title="Total Weight"
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
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 11h-3V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13c0 1.65 1.35 3 3 3h14c1.65 0 3-1.35 3-3v-6c0-.55-.45-1-1-1M5 19c-.55 0-1-.45-1-1V5h12v13a3 3 0 0 0 .17 1zm15-1c0 .55-.45 1-1 1s-1-.45-1-1v-5h2z"></path><path d="M6 7h8v2H6zm0 4h8v2H6zm5 4h3v2h-3z"></path>
              </svg>
            }
          />
          <StatCard
            title="Active Warehouses"
            value={activeWarehouses}
            trend="5.12%"
            trendUp={true}
            icon={
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3C6.49 3 2 7.49 2 13v6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-6c0-5.51-4.49-10-10-10m4 12H8v-2h8zm-8 4v-2h8v2zm12 0h-2v-6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v6H4v-6c0-4.41 3.59-8 8-8s8 3.59 8 8z"></path>
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
                  <th className="text-xs font-semibold text-gray-700 px-4 py-3">Weight (kg)</th>
                </tr>
              </thead>
              <tbody>
                {filteredRecords.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-4 py-12 text-center text-sm text-gray-400">
                      No GRN records found matching your filters.
                    </td>
                  </tr>
                ) : (
                  filteredRecords.map(r => (
                    <tr key={r.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      {/* Date */}
                      <td className="px-4 py-3.5">
                        <p className="text-xs text-gray-900">{r.receivingDate}</p>
                      </td>
                      {/* Warehouse */}
                      <td className="px-4 py-3.5">
                        <p className="text-xs font-semibold text-gray-900">{r.warehouseName}</p>
                      </td>
                      {/* Commodity */}
                      <td className="px-4 py-3.5">
                        <p className="text-xs font-semibold text-gray-900">{r.commodity}</p>
                      </td>
                      {/* Weight */}
                      <td className="px-4 py-3.5">
                        <p className="text-xs font-semibold text-gray-900">{r.acceptedQty.toLocaleString()} kg</p>
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
