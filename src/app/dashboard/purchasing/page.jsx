"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { SEED_PURCHASES } from "@/lib/mockPurchases";

// ── Metric Widget (matches admin dashboard overview cards) ─────
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
            <svg
              className={`w-3.5 h-3.5 ${trendUp ? "text-[#1a5c2a]" : "text-red-500"}`}
              fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round"
                d={trendUp ? "M7 17L17 7M17 7H7M17 7v10" : "M7 7l10 10M17 17H7M17 17V7"} />
            </svg>
            <span className={`text-xs font-semibold ${trendUp ? "text-[#1a5c2a]" : "text-red-600"}`}>
              {trend}
            </span>
          </div>
        )}
      </div>
      <p className="text-xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

// ── Row action menu (matches admin users card) ─────────────────
function RowMenu({ purchaseId }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="p-1 rounded hover:bg-gray-100 text-gray-500 transition-colors"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="5" cy="12" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="19" cy="12" r="2" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-4 top-10 z-20 bg-white border border-gray-100 rounded-lg shadow-lg w-36 overflow-hidden">
          <Link
            href={`/dashboard/purchasing/${purchaseId}`}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            View
          </Link>
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

// ── Purchase Console ───────────────────────────────────────────
export default function PurchasingPage() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [commodityFilter, setCommodityFilter] = useState("All");

  const statuses = ["All", "Completed", "Pending Payment", "Draft", "Rejected"];
  const commodities = ["All", ...Array.from(new Set(SEED_PURCHASES.map((p) => p.commodity)))];

  const filtered = useMemo(() => {
    return SEED_PURCHASES.filter((p) => {
      const matchStatus = statusFilter === "All" || p.status === statusFilter;
      const matchCommodity = commodityFilter === "All" || p.commodity === commodityFilter;
      return matchStatus && matchCommodity;
    });
  }, [statusFilter, commodityFilter]);

  // Stats
  const totalPurchases = SEED_PURCHASES.length;
  const totalVolume = SEED_PURCHASES.reduce((s, p) => s + p.totalWeight, 0).toLocaleString();
  const totalValue = SEED_PURCHASES.reduce((s, p) => s + p.grossAmount, 0).toLocaleString();
  const pendingPayment = SEED_PURCHASES.filter((p) => p.paymentStatus === "Pending").length;

  return (
    <div className="space-y-6">

      {/* ── Metric Cards (matches admin overview top cards) ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricWidget
          label="Total Purchases"
          value={totalPurchases}
          trend="6.40%"
          trendUp={true}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          }
        />
        <MetricWidget
          label="Total Volume"
          value={`${totalVolume} kg`}
          trend="8.47%"
          trendUp={true}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
          }
        />
        <MetricWidget
          label="Total Gross Value"
          value={`MWK ${totalValue}`}
          trend="12.23%"
          trendUp={true}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <MetricWidget
          label="Pending Payments"
          value={pendingPayment}
          trend="3.10%"
          trendUp={false}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
      </div>

      {/* ── Purchase Records (matches admin users card) ── */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {/* Card header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div>
            <h2 className="text-sm font-bold text-gray-900">Purchase Records</h2>
            <p className="text-xs text-gray-400 mt-0.5">{filtered.length} of {totalPurchases} purchases</p>
          </div>
          <div className="flex items-center gap-3">
            {/* Status filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 focus:ring-2 focus:ring-green-100 focus:border-[#1a5c2a] outline-none"
            >
              {statuses.map((s) => <option key={s}>{s}</option>)}
            </select>
            {/* Commodity filter */}
            <select
              value={commodityFilter}
              onChange={(e) => setCommodityFilter(e.target.value)}
              className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 focus:ring-2 focus:ring-green-100 focus:border-[#1a5c2a] outline-none"
            >
              {commodities.map((c) => <option key={c}>{c}</option>)}
            </select>
            <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export CSV
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1a5c2a] text-white text-sm font-semibold rounded-md hover:bg-[#134520] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Purchase
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-auto min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-4 py-3 text-xs font-semibold text-gray-700 w-1/3">Farmer</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-700 w-1/4">Commodity</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-700">Gross Amount</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-700">Status</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-700"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-12 text-center text-sm text-gray-400">
                    No purchases match your search criteria.
                  </td>
                </tr>
              ) : (
                filtered.map((p) => (
                  <tr key={p.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 border border-gray-200">
                          <span className="text-xs font-bold text-gray-400">
                            {p.farmerName.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-400 max-w-[130px] truncate" title={p.farmerName}>
                          {p.farmerName.length > 14 ? p.farmerName.slice(0, 13) + "…" : p.farmerName}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="text-xs text-gray-400">{p.commodity}</span>
                      <p className="text-[11px] text-gray-300 mt-0.5">{p.grade}</p>
                    </td>
                    <td className="px-4 py-3.5 text-xs text-gray-400 whitespace-nowrap">
                      MWK {p.grossAmount.toLocaleString()}
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                        {p.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 relative">
                      <RowMenu purchaseId={p.id} />
                    </td>
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
