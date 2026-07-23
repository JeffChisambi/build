"use client";

import { useState } from "react";
import { SEED_FARMERS } from "@/lib/mockFarmers";

// ── Main Page ─────────────────────────────────────────────────
export default function UsersPage() {
  const [search, setSearch] = useState("");

  const filtered = SEED_FARMERS.filter((f) =>
    `${f.fullName} ${f.district} ${f.association}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 relative">

      {/* Farmer Table */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        {/* Card header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-sm font-bold text-gray-900">Farmers</h2>
          <div className="flex items-center gap-3">
            <div className="relative">
              <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search farmers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-gray-400 w-52 bg-white"
              />
            </div>
            <button className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors rounded-md hover:bg-gray-50">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="5" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="12" cy="19" r="1.5" />
              </svg>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-5 py-3 text-xs font-medium text-gray-400 w-12">Sl</th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400">Name</th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400">Member No</th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400">District</th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400">Association</th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400">Status</th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400">Registered</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-5 py-12 text-center text-sm text-gray-400">No farmers found.</td>
                </tr>
              ) : filtered.map((f, idx) => {
                const isLast = idx === filtered.length - 1;
                return (
                  <tr
                    key={f.id}
                    className="border-b border-gray-50 transition-colors"
                    style={isLast ? { backgroundColor: "#eef9f1" } : undefined}
                    onMouseEnter={(e) => { if (!isLast) e.currentTarget.style.backgroundColor = "#f9fafb"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = isLast ? "#eef9f1" : ""; }}
                  >
                    {/* SI */}
                    <td className="px-5 py-3.5 text-xs font-medium text-gray-500">
                      {String(idx + 1).padStart(2, "0")}
                    </td>

                    {/* Name + avatar */}
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#1a5c2a]/10 flex items-center justify-center flex-shrink-0 border border-[#1a5c2a]/20">
                          <span className="text-xs font-bold text-[#1a5c2a]">
                            {f.fullName.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-800 max-w-[120px] truncate" title={f.fullName}>
                          {f.fullName.length > 13 ? f.fullName.slice(0, 12) + "…" : f.fullName}
                        </span>
                      </div>
                    </td>

                    {/* Member No */}
                    <td className="px-4 py-3.5 text-xs text-gray-500">{f.memberNo}</td>

                    {/* District */}
                    <td className="px-4 py-3.5 text-xs text-gray-500">{f.district}</td>

                    {/* Association */}
                    <td className="px-4 py-3.5 text-xs text-gray-500 max-w-[150px] truncate" title={f.association}>
                      {f.association.length > 18 ? f.association.slice(0, 17) + "…" : f.association}
                    </td>

                    {/* Status */}
                    <td className="px-4 py-3.5">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${f.status === "Active" ? "text-emerald-600" : "text-amber-500"}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${f.status === "Active" ? "bg-emerald-500" : "bg-amber-400"}`} />
                        {f.status}
                      </span>
                    </td>

                    {/* Registered */}
                    <td className="px-4 py-3.5 text-gray-400 text-xs whitespace-nowrap">{f.registrationDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
