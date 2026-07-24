"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import WorkspaceLayout from "@/components/WorkspaceLayout";
import { purchasesService } from "@/lib/api/purchases";

const ICON = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
  </svg>
);

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-3">
      <div className="flex items-center gap-2 text-gray-500">{icon}<p className="text-sm font-semibold text-gray-700">{title}</p></div>
      <p className="text-xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

function StatusBadge({ status }) {
  const colors = {
    Verified: "bg-green-50 text-green-700 border border-green-100",
    "In Progress": "bg-blue-50 text-blue-700 border border-blue-100",
    Stored: "bg-indigo-50 text-indigo-700 border border-indigo-100",
    Pending: "bg-amber-50 text-amber-700 border border-amber-100",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${colors[status] || "bg-gray-50 text-gray-500"}`}>
      {status}
    </span>
  );
}

export default function TraceabilityPage() {
  const [batches, setBatches]       = useState([]);
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState(null);
  const [selectedBatchId, setSelectedBatchId] = useState(null);
  const [activeStep, setActiveStep] = useState("farmer");
  const [searchQuery, setSearchQuery]       = useState("");
  const [commodityFilter, setCommodityFilter] = useState("All");
  const [dropdownOpen, setDropdownOpen]     = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setDropdownOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fetchBatches = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await purchasesService.list({ limit: 200 });
      const mapped = (data ?? []).map((p) => ({
        id: p.id,
        batchNumber: p.batch?.batchNumber || `BCH-${p.id}`,
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
      setBatches(mapped);
      if (mapped.length > 0) setSelectedBatchId(mapped[0].id);
    } catch (err) {
      setError(err.message ?? "Failed to load traceability data.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchBatches(); }, [fetchBatches]);

  const commodities = useMemo(() => ["All", ...new Set(batches.map((b) => b.commodity).filter(Boolean))], [batches]);

  const filteredBatches = useMemo(() =>
    batches.filter((b) => {
      const matchSearch = !searchQuery || `${b.batchNumber} ${b.farmerName} ${b.id}`.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCommodity = commodityFilter === "All" || b.commodity === commodityFilter;
      return matchSearch && matchCommodity;
    }),
  [batches, searchQuery, commodityFilter]);

  const selectedBatch = useMemo(() => batches.find((b) => b.id === selectedBatchId) ?? batches[0] ?? null, [batches, selectedBatchId]);

  const steps = [
    { id: "farmer",     label: "1. Farmer Source",     sub: selectedBatch?.farmerName },
    { id: "collection", label: "2. Collection",         sub: selectedBatch?.buyingCentre },
    { id: "grn",        label: "3. Goods Received",     sub: selectedBatch?.grnNumber },
    { id: "warehouse",  label: "4. Warehouse Storage",  sub: selectedBatch?.warehouseName },
  ];

  return (
    <WorkspaceLayout
      icon={ICON}
      module="Traceability"
      moduleHref="/dashboard/traceability"
      title="Batch Traceability"
      description="End-to-end chain of custody for grain batches."
      tabs={[]}
    >
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700 mx-6 mt-4">
          {error} — <button onClick={fetchBatches} className="underline font-semibold">Retry</button>
        </div>
      )}

      {loading ? (
        <div className="p-6 space-y-4 animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-64" />
          <div className="h-48 bg-gray-200 rounded-xl" />
        </div>
      ) : batches.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 gap-3">
          <p className="text-sm text-gray-500">No traceability data found.</p>
          <p className="text-xs text-gray-400">Connect a backend to stream batch records.</p>
        </div>
      ) : (
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Batch list */}
          <div className="space-y-3">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search batches…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-[#1a5c2a] bg-white"
              />
            </div>
            <select value={commodityFilter} onChange={(e) => setCommodityFilter(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-[#1a5c2a] bg-white">
              {commodities.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>

            <div className="space-y-2 max-h-[60vh] overflow-y-auto">
              {filteredBatches.map((b) => (
                <button
                  key={b.id}
                  onClick={() => { setSelectedBatchId(b.id); setActiveStep("farmer"); }}
                  className={`w-full text-left p-3 rounded-xl border transition-all ${selectedBatchId === b.id ? "border-[#1a5c2a] bg-[#e8f1ea]" : "border-gray-200 bg-white hover:border-gray-300"}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-xs font-mono font-bold text-gray-700">{b.batchNumber}</p>
                    <StatusBadge status={b.status} />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{b.farmerName} · {b.commodity}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{(b.weight ?? 0).toLocaleString()} kg · {b.purchaseDate}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-2">
            {!selectedBatch ? (
              <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                <p className="text-sm text-gray-500">Select a batch to view its traceability chain.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Stage tabs */}
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <div className="flex gap-2 flex-wrap">
                    {steps.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setActiveStep(s.id)}
                        className={`flex-1 min-w-[120px] px-3 py-2.5 rounded-lg text-left transition-all ${activeStep === s.id ? "bg-[#1a5c2a] text-white" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}`}
                      >
                        <p className="text-xs font-bold">{s.label}</p>
                        <p className={`text-xs mt-0.5 truncate ${activeStep === s.id ? "text-green-200" : "text-gray-400"}`}>{s.sub || "—"}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step detail */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  {activeStep === "farmer" && (
                    <div className="space-y-3">
                      <h3 className="text-sm font-bold text-gray-900 mb-4">Farmer Information</h3>
                      {[["Name", selectedBatch.farmerName], ["Village", selectedBatch.village], ["District", selectedBatch.district], ["Purchase Date", selectedBatch.purchaseDate], ["Purchasing Officer", selectedBatch.purchasingOfficer]].map(([label, value]) => (
                        <div key={label} className="flex justify-between py-2 border-b border-gray-50 last:border-0">
                          <span className="text-xs text-gray-400 font-semibold">{label}</span>
                          <span className="text-sm font-medium text-gray-900">{value || "—"}</span>
                        </div>
                      ))}
                      {selectedBatch.farmerId && (
                        <Link href={`/dashboard/farmers/profiles/${selectedBatch.farmerId}`} className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[#1a5c2a] hover:underline">
                          View Farmer Profile →
                        </Link>
                      )}
                    </div>
                  )}
                  {activeStep === "collection" && (
                    <div className="space-y-3">
                      <h3 className="text-sm font-bold text-gray-900 mb-4">Collection Details</h3>
                      {[["Buying Centre", selectedBatch.buyingCentre], ["IPC", selectedBatch.ipc], ["Commodity", selectedBatch.commodity], ["Grade", selectedBatch.grade], ["Weight", `${(selectedBatch.weight ?? 0).toLocaleString()} kg`], ["Bags", selectedBatch.bags]].map(([label, value]) => (
                        <div key={label} className="flex justify-between py-2 border-b border-gray-50 last:border-0">
                          <span className="text-xs text-gray-400 font-semibold">{label}</span>
                          <span className="text-sm font-medium text-gray-900">{value || "—"}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {activeStep === "grn" && (
                    <div className="space-y-3">
                      <h3 className="text-sm font-bold text-gray-900 mb-4">Goods Received Note</h3>
                      {[["GRN Number", selectedBatch.grnNumber], ["Batch Number", selectedBatch.batchNumber], ["Status", selectedBatch.status]].map(([label, value]) => (
                        <div key={label} className="flex justify-between py-2 border-b border-gray-50 last:border-0">
                          <span className="text-xs text-gray-400 font-semibold">{label}</span>
                          <span className="text-sm font-medium text-gray-900">{value || "—"}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {activeStep === "warehouse" && (
                    <div className="space-y-3">
                      <h3 className="text-sm font-bold text-gray-900 mb-4">Warehouse Storage</h3>
                      {[["Warehouse", selectedBatch.warehouseName], ["Bin", selectedBatch.bin], ["Stack", selectedBatch.stack]].map(([label, value]) => (
                        <div key={label} className="flex justify-between py-2 border-b border-gray-50 last:border-0">
                          <span className="text-xs text-gray-400 font-semibold">{label}</span>
                          <span className="text-sm font-medium text-gray-900">{value || "—"}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </WorkspaceLayout>
  );
}
