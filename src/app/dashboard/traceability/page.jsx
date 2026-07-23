"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import WorkspaceLayout from "@/components/WorkspaceLayout";
import { SEED_PURCHASES } from "@/lib/mockPurchases";

const ICON = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
  </svg>
);

// ── Stat Card ────────────────────────────────────────
function StatCard({ title, value, sub, icon }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-3">
      <div className="flex items-center gap-2 text-gray-500">
        {icon}
        <p className="text-sm font-semibold text-gray-700">{title}</p>
      </div>
      <p className="text-xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

// ── Status Badge ────────────────────────────────────────
function StatusBadge({ status }) {
  const colors = {
    "Verified": "bg-green-50 text-green-700 border border-green-100",
    "In Progress": "bg-blue-50 text-blue-700 border border-blue-100",
    "Stored": "bg-indigo-50 text-indigo-700 border border-indigo-100",
    "Pending": "bg-amber-50 text-amber-700 border border-amber-100",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${colors[status] || "bg-gray-50 text-gray-500"}`}>
      {status}
    </span>
  );
}

export default function TraceabilityPage() {
  const [selectedBatchId, setSelectedBatchId] = useState(SEED_PURCHASES[0]?.id || "");
  const [activeStep, setActiveStep] = useState("farmer");
  const [searchQuery, setSearchQuery] = useState("");
  const [commodityFilter, setCommodityFilter] = useState("All");

  // Construct batch list
  const batches = useMemo(() => {
    return SEED_PURCHASES.map(p => ({
      id: p.id,
      batchNumber: p.batch?.batchNumber || `BCH-2024-${p.id.slice(-4)}`,
      commodity: p.commodity,
      grade: p.grade,
      weight: p.totalWeight,
      bags: p.numberOfBags,
      farmerName: p.farmerName,
      farmerId: p.farmerId,
      village: p.farmerVillage,
      district: p.farmerDistrict,
      buyingCentre: p.buyingCentre,
      ipc: p.ipc,
      purchaseDate: p.purchaseDate,
      purchasingOfficer: p.purchasingOfficer,
      warehouseName: p.warehouse?.name || "Pending",
      bin: p.warehouse?.bin || "—",
      stack: p.warehouse?.stack || "—",
      grnNumber: p.grn?.grnNumber || "—",
      status: p.status === "Completed" ? "Verified" : "In Progress",
    }));
  }, []);

  // Filtered batches
  const filteredBatches = useMemo(() => {
    return batches.filter(b => {
      const matchesSearch = b.batchNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.farmerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.id.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCommodity = commodityFilter === "All" || b.commodity === commodityFilter;
      return matchesSearch && matchesCommodity;
    });
  }, [batches, searchQuery, commodityFilter]);

  const selectedBatch = useMemo(() => {
    return batches.find(b => b.id === selectedBatchId) || batches[0];
  }, [batches, selectedBatchId]);

  // Unique commodities for filter
  const commodities = useMemo(() => {
    return ["All", ...Array.from(new Set(batches.map(b => b.commodity)))];
  }, [batches]);

  // Lineage steps mapping
  const steps = [
    { id: "farmer", label: "1. Farmer Source", sub: selectedBatch?.farmerName },
    { id: "collection", label: "2. Collection", sub: selectedBatch?.buyingCentre },
    { id: "ipc", label: "3. IPC Logistics", sub: selectedBatch?.ipc },
    { id: "warehouse", label: "4. Warehouse", sub: selectedBatch?.warehouseName },
  ];

  return (
    <WorkspaceLayout
      icon={ICON}
      module="Traceability"
      moduleHref="/dashboard/traceability"
      title="Traceability"
      description="End-to-end grain traceability from field to warehouse and beyond."
      tabs={[]}
      hideTitleBlock={true}
      hideHeader={true}
    >
      <div className="space-y-6 p-6 max-w-7xl mx-auto">

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard
            title="Tracked Weight"
            value="5,420 kg"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          />
          <StatCard
            title="Active Batches"
            value={batches.length}
            icon={<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.49 10 10-4.49 10-10 10m0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8"></path><path d="M10 16c-.26 0-.51-.1-.71-.29l-3-3L7.7 11.3l2.29 2.29 5.29-5.29 1.41 1.41-6 6c-.2.2-.45.29-.71.29Z"></path></svg>}
          />
          <StatCard
            title="Registered Bags"
            value="108 bags"
            icon={<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.49 10 10-4.49 10-10 10m0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8"></path><path d="M10 16c-.26 0-.51-.1-.71-.29l-3-3L7.7 11.3l2.29 2.29 5.29-5.29 1.41 1.41-6 6c-.2.2-.45.29-.71.29Z"></path></svg>}
          />
        </div>

        {/* ── Table Card ── */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
            <div>
              <p className="text-xs text-gray-400">{filteredBatches.length} traceable batches found</p>
            </div>
            <div className="flex items-center gap-2">
              <select
                value={commodityFilter}
                onChange={e => setCommodityFilter(e.target.value)}
                className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 focus:ring-2 focus:ring-gray-100 focus:border-black outline-none"
              >
                {commodities.map(c => <option key={c} value={c}>{c === "All" ? "All Commodities" : c}</option>)}
              </select>
              <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
                Export CSV
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-t border-b border-gray-100">
                  <th className="text-[11px] font-semibold text-gray-900 uppercase tracking-wider px-4 py-3">Farmer Source</th>
                  <th className="text-[11px] font-semibold text-gray-900 uppercase tracking-wider px-4 py-3">Commodity</th>
                  <th className="text-[11px] font-semibold text-gray-900 uppercase tracking-wider px-4 py-3">Quantity</th>
                  <th className="text-[11px] font-semibold text-gray-900 uppercase tracking-wider px-4 py-3">Warehouse Depot</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredBatches.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-4 py-12 text-center text-sm text-gray-400">
                      No batches found.
                    </td>
                  </tr>
                ) : (
                  filteredBatches.map(b => (
                    <tr key={b.id} className="hover:bg-gray-50/60 transition-colors">
                      <td className="px-4 py-3">
                        <p className="text-xs font-medium text-gray-500">{b.farmerName}</p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-xs font-medium text-gray-500">{b.commodity}</p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-xs font-medium text-gray-500">{b.bags} Bags</p>
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-500 font-medium">
                        {b.warehouseName}
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

