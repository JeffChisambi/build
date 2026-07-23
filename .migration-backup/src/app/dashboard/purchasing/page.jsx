"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { SEED_PURCHASES } from "@/lib/mockPurchases";

// ── Status Badge ──────────────────────────────────────────
function StatusBadge({ status }) {
  const isPositive = ["Completed", "Active", "Paid", "Verified", "Accepted", "Passed", "Stored"].includes(status);
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${isPositive ? "bg-gray-100 text-gray-600" : "bg-gray-50 text-gray-400"}`}>
      {status}
    </span>
  );
}

// ── Stat Card ────────────────────────────────────────
function StatCard({ label, value, sub, icon }) {
  return (
    <div className="bg-white rounded-md border border-gray-200 p-5 transition-shadow">
      {icon && <div className="text-gray-600 mb-4">{icon}</div>}
      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
      <p className="text-sm font-semibold text-gray-700 mt-1">{label}</p>
      {sub && <p className="text-xs text-gray-500 mt-1">{sub}</p>}
    </div>
  );
}

// ── Purchase Console ──────────────────────────────────────
export default function PurchasingPage() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [commodityFilter, setCommodityFilter] = useState("All");

  const statuses = ["All", "Completed", "Pending Payment", "Draft", "Rejected"];
  const commodities = ["All", ...Array.from(new Set(SEED_PURCHASES.map(p => p.commodity)))];

  const filtered = useMemo(() => {
    return SEED_PURCHASES.filter(p => {
      const matchStatus = statusFilter === "All" || p.status === statusFilter;
      const matchCommodity = commodityFilter === "All" || p.commodity === commodityFilter;
      return matchStatus && matchCommodity;
    });
  }, [statusFilter, commodityFilter]);

  // Stats
  const totalPurchases = SEED_PURCHASES.length;
  const totalVolume = SEED_PURCHASES.reduce((s, p) => s + p.totalWeight, 0).toLocaleString();
  const totalValue = SEED_PURCHASES.reduce((s, p) => s + p.grossAmount, 0).toLocaleString();
  const pendingPayment = SEED_PURCHASES.filter(p => p.paymentStatus === "Pending").length;

  return (
    <div className="space-y-6">
      {/* ── Stat Cards ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatCard
          label="Total Purchases"
          value={totalPurchases}
          sub="This season"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>}
        />
        <StatCard
          label="Total Volume"
          value={`${totalVolume} kg`}
          sub="Commodity purchased"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>}
        />
        <StatCard
          label="Total Gross Value"
          value={`MWK ${totalValue}`}
          sub="Gross purchase value"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        />
        <StatCard
          label="Pending Payments"
          value={pendingPayment}
          sub="Awaiting disbursement"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        />
      </div>

      {/* ── Table ── */}
      <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
          <div>
            <h2 className="text-sm font-bold text-gray-900">Purchase Records</h2>
            <p className="text-xs text-gray-400 mt-0.5">{filtered.length} of {totalPurchases} purchases</p>
          </div>
          <div className="flex items-center gap-2">
            {/* Status filter */}
            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
              className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 focus:ring-2 focus:ring-green-100 focus:border-[#1a5c2a] outline-none"
            >
              {statuses.map(s => <option key={s}>{s}</option>)}
            </select>
            {/* Commodity filter */}
            <select
              value={commodityFilter}
              onChange={e => setCommodityFilter(e.target.value)}
              className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 focus:ring-2 focus:ring-green-100 focus:border-[#1a5c2a] outline-none"
            >
              {commodities.map(c => <option key={c}>{c}</option>)}
            </select>
            <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Export CSV
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-[#1a5c2a] text-white text-xs font-semibold rounded-lg hover:bg-[#134520] transition-colors shadow-sm flex-shrink-0">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              New Purchase
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                {["Farmer", "Commodity", "Gross Amount", "Status", "Actions"].map(h => (
                  <th key={h} className="text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider px-4 py-3 whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-12 text-center text-sm text-gray-400">
                    No purchases match your search criteria.
                  </td>
                </tr>
              ) : filtered.map(p => (
                <tr key={p.id} className="hover:bg-gray-50/60 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                        {p.farmerName.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase()}
                      </div>
                      <p className="text-xs font-semibold text-gray-900 leading-tight">{p.farmerName}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-xs font-semibold text-gray-800">{p.commodity}</p>
                    <p className="text-[11px] text-gray-400">{p.grade}</p>
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-700 font-semibold whitespace-nowrap">MWK {p.grossAmount.toLocaleString()}</td>
                  <td className="px-4 py-3"><StatusBadge status={p.status} /></td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/dashboard/purchasing/${p.id}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#1a5c2a] text-white text-xs font-semibold rounded-lg hover:bg-[#134520] transition-colors"
                    >
                      View
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
