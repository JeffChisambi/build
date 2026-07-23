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
      <div>
        <p className="text-xl font-bold text-gray-900">{value}</p>
        {sub && <p className="text-xs text-gray-500 mt-0.5">{sub}</p>}
      </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <StatCard
            title="Tracked Weight"
            value="5,420 kg"
            sub="100% origin-verified"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          />
          <StatCard
            title="Active Batches"
            value={batches.length}
            sub="Unique tracked batches"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
          />
          <StatCard
            title="Registered Bags"
            value="108 bags"
            sub="QR tag scanned"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10M7 12h10m-8 5h6" /></svg>}
          />
          <StatCard
            title="Traceability Gaps"
            value="0"
            sub="All links verified"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m2 8H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2z" /></svg>}
          />
        </div>

        {/* ── Journey Explorer (Active Lineage Diagram) ── */}
        {selectedBatch && (
          <div className="bg-white rounded-md border border-gray-200 p-6 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-100 pb-4 gap-2">
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Currently Exploring Journey</span>
                <h2 className="text-lg font-bold text-gray-900 mt-0.5">{selectedBatch.batchNumber} ({selectedBatch.commodity})</h2>
              </div>
              <div className="flex gap-2">
                <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">ID: {selectedBatch.id}</span>
                <StatusBadge status={selectedBatch.status} />
              </div>
            </div>

            {/* Lineage flow nodes */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {steps.map((s, idx) => {
                const isActive = activeStep === s.id;
                return (
                  <div key={s.id} className="relative flex items-center">
                    <button
                      onClick={() => setActiveStep(s.id)}
                      className={`w-full text-left p-4 rounded-lg border transition-all ${
                        isActive
                          ? "bg-gray-50 border-black shadow-sm"
                          : "bg-white border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{s.label}</p>
                      <p className="text-xs font-semibold text-gray-900 truncate mt-1">{s.sub}</p>
                    </button>
                    {idx < steps.length - 1 && (
                      <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-10 text-gray-300 pointer-events-none">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Selected Node Details Card */}
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
              {activeStep === "farmer" && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <span className="block text-[11px] font-bold text-gray-400 uppercase">Farmer Name</span>
                    <span className="text-xs font-semibold text-gray-800">{selectedBatch.farmerName}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-gray-400 uppercase">Farmer ID</span>
                    <span className="text-xs font-semibold text-gray-800">{selectedBatch.farmerId}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-gray-400 uppercase">Location</span>
                    <span className="text-xs font-semibold text-gray-800">{selectedBatch.village}, {selectedBatch.district}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-gray-400 uppercase">Action</span>
                    <Link
                      href={`/dashboard/farmers/profiles/${selectedBatch.farmerId}`}
                      className="text-xs font-bold text-gray-900 hover:underline block mt-0.5"
                    >
                      View Profile →
                    </Link>
                  </div>
                </div>
              )}

              {activeStep === "collection" && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <span className="block text-[11px] font-bold text-gray-400 uppercase">Buying Centre</span>
                    <span className="text-xs font-semibold text-gray-800">{selectedBatch.buyingCentre}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-gray-400 uppercase">Purchasing Officer</span>
                    <span className="text-xs font-semibold text-gray-800">{selectedBatch.purchasingOfficer}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-gray-400 uppercase">Purchase Date</span>
                    <span className="text-xs font-semibold text-gray-800">{selectedBatch.purchaseDate}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-gray-400 uppercase">Purchase Record</span>
                    <Link
                      href={`/dashboard/purchasing/${selectedBatch.id}`}
                      className="text-xs font-bold text-gray-900 hover:underline block mt-0.5"
                    >
                      View Purchase →
                    </Link>
                  </div>
                </div>
              )}

              {activeStep === "ipc" && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <span className="block text-[11px] font-bold text-gray-400 uppercase">IPC Centre</span>
                    <span className="text-xs font-semibold text-gray-800">{selectedBatch.ipc}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-gray-400 uppercase">Status</span>
                    <span className="text-xs font-semibold text-gray-800">Aggregated & Dispatched</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-gray-400 uppercase">Bags / Net Weight</span>
                    <span className="text-xs font-semibold text-gray-800">{selectedBatch.bags} Bags / {selectedBatch.weight} kg</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-gray-400 uppercase">Logs</span>
                    <span className="text-xs text-gray-500">Logistics dispatch confirmed</span>
                  </div>
                </div>
              )}

              {activeStep === "warehouse" && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <span className="block text-[11px] font-bold text-gray-400 uppercase">Warehouse</span>
                    <span className="text-xs font-semibold text-gray-800">{selectedBatch.warehouseName}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-gray-400 uppercase">Storage Bin</span>
                    <span className="text-xs font-semibold text-gray-800">Bin {selectedBatch.bin} • Stack {selectedBatch.stack}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-gray-400 uppercase">GRN Number</span>
                    <span className="text-xs font-mono font-semibold text-gray-800">{selectedBatch.grnNumber}</span>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-gray-400 uppercase">Action</span>
                    <Link
                      href={`/dashboard/warehouse/${selectedBatch.id}`}
                      className="text-xs font-bold text-gray-900 hover:underline block mt-0.5"
                    >
                      View Inventory →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── Table Card ── */}
        <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
            <div>
              <p className="text-xs text-gray-400">{filteredBatches.length} traceable batches found</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search batch, farmer..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 focus:ring-2 focus:ring-gray-100 focus:border-black outline-none w-48"
              />
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
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">Batch Number</th>
                  <th className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">Farmer Source</th>
                  <th className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">Commodity</th>
                  <th className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">Quantity</th>
                  <th className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider px-4 py-3">Warehouse Depot</th>
                  <th className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredBatches.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-12 text-center text-sm text-gray-400">
                      No batches found.
                    </td>
                  </tr>
                ) : (
                  filteredBatches.map(b => (
                    <tr key={b.id} className="hover:bg-gray-50/60 transition-colors">
                      <td className="px-4 py-3">
                        <p className="text-xs font-mono font-bold text-gray-900">{b.batchNumber}</p>
                        <p className="text-[11px] text-gray-400">ID: {b.id}</p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-xs font-semibold text-gray-900">{b.farmerName}</p>
                        <p className="text-[11px] text-gray-400">{b.village}</p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-xs font-semibold text-gray-900">{b.commodity}</p>
                        <p className="text-[11px] text-gray-400">{b.grade}</p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-xs font-semibold text-gray-900">{b.bags} Bags</p>
                        <p className="text-[11px] text-gray-500">{b.weight.toLocaleString()} kg</p>
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-700 font-medium">
                        {b.warehouseName}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button
                          onClick={() => {
                            setSelectedBatchId(b.id);
                            setActiveStep("farmer");
                          }}
                          className="text-xs font-semibold text-gray-900 hover:underline"
                        >
                          Explore Journey
                        </button>
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

