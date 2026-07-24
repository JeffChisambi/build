"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { purchasesService } from "@/lib/api/purchases";

function MetricWidget({ icon, label, value, trend, trendUp = true }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-500">
          {icon}
          <p className="text-sm font-semibold text-gray-700">{label}</p>
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

function RowMenu({ purchaseId }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen((v) => !v)} className="p-1 rounded hover:bg-gray-100 text-gray-500 transition-colors">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-4 top-10 z-20 bg-white border border-gray-100 rounded-lg shadow-lg w-36 overflow-hidden">
          <Link href={`/dashboard/purchasing/${purchaseId}`} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">View</Link>
        </div>
      )}
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

export default function PurchasingPage() {
  const [purchases, setPurchases] = useState([]);
  const [stats, setStats]         = useState({ totalPurchases: 0, totalWeight: 0, totalValue: 0, pendingPayment: 0 });
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState(null);
  const [statusFilter, setStatusFilter]       = useState("All");
  const [commodityFilter, setCommodityFilter] = useState("All");

  const fetchPurchases = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = {};
      if (statusFilter   !== "All") params.status    = statusFilter;
      if (commodityFilter !== "All") params.commodity = commodityFilter;
      const res = await purchasesService.list({ ...params, limit: 200 });
      setPurchases(res.data ?? []);
      if (res.stats) setStats(res.stats);
    } catch (err) {
      setError(err.message ?? "Failed to load purchases.");
    } finally {
      setLoading(false);
    }
  }, [statusFilter, commodityFilter]);

  useEffect(() => { fetchPurchases(); }, [fetchPurchases]);

  const statuses   = ["All", "Completed", "Pending Payment", "Draft", "Rejected"];
  const commodities = useMemo(() => ["All", ...new Set(purchases.map((p) => p.commodity).filter(Boolean))], [purchases]);

  const filtered = useMemo(() =>
    purchases.filter((p) => {
      const matchStatus    = statusFilter    === "All" || p.status    === statusFilter;
      const matchCommodity = commodityFilter === "All" || p.commodity === commodityFilter;
      return matchStatus && matchCommodity;
    }),
  [purchases, statusFilter, commodityFilter]);

  return (
    <div className="space-y-6">
      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <MetricWidget
          label="Total Purchases"
          value={stats.totalPurchases.toLocaleString()}
          icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
        />
        <MetricWidget
          label="Total Volume (kg)"
          value={(stats.totalWeight ?? 0).toLocaleString()}
          icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>}
        />
        <MetricWidget
          label="Pending Payment"
          value={stats.pendingPayment ?? 0}
          trendUp={false}
          icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="flex gap-1 flex-wrap">
          {statuses.map((s) => (
            <button key={s} onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${statusFilter === s ? "bg-[#1a5c2a] text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}>
              {s}
            </button>
          ))}
        </div>
        <select value={commodityFilter} onChange={(e) => setCommodityFilter(e.target.value)}
          className="px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-[#1a5c2a] bg-white">
          {commodities.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
          {error} — <button onClick={fetchPurchases} className="underline font-semibold">Retry</button>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                {["Receipt #", "Date", "Farmer", "IPC", "Commodity", "Weight (kg)", "Status", "Payment", ""].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                Array.from({ length: 6 }).map((_, i) => <SkeletonRow key={i} />)
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={9} className="px-4 py-12 text-center text-sm text-gray-500">
                    {statusFilter !== "All" || commodityFilter !== "All" ? "No purchases match your filters." : "No purchase records found. Connect a backend to load purchasing data."}
                  </td>
                </tr>
              ) : (
                filtered.map((p) => (
                  <tr key={p.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">{p.receiptNumber}</td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{p.purchaseDate}</td>
                    <td className="px-4 py-3">
                      <p className="font-semibold text-gray-900">{p.farmerName}</p>
                      <p className="text-xs text-gray-400">{p.farmerVillage}</p>
                    </td>
                    <td className="px-4 py-3 text-gray-500">{p.ipc}</td>
                    <td className="px-4 py-3 text-gray-600">{p.commodity}</td>
                    <td className="px-4 py-3 text-gray-900 font-medium">{(p.totalWeight ?? 0).toLocaleString()}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center gap-1 text-xs font-semibold ${p.status === "Completed" ? "text-[#1a5c2a]" : "text-amber-600"}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${p.status === "Completed" ? "bg-[#1a5c2a]" : "bg-amber-400"}`} />
                        {p.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-semibold ${p.paymentStatus === "Paid" ? "text-[#1a5c2a]" : "text-gray-400"}`}>{p.paymentStatus}</span>
                    </td>
                    <td className="px-4 py-3"><RowMenu purchaseId={p.id} /></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
