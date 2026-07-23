"use client";

import { SEED_FARMERS } from "@/lib/mockFarmers";

// ── Main Page ─────────────────────────────────────────────────
export default function UsersPage() {
  const filtered = SEED_FARMERS;

  return (
    <div className="space-y-6 relative">

      {/* Farmer Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {/* Card header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-sm font-bold text-gray-900">Farmers</h2>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1a5c2a] text-white text-sm font-semibold rounded-md hover:bg-[#134520] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Add Farmer
            </button>
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
                <th className="px-4 py-3 text-xs font-medium text-gray-400">Name</th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400">District</th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400">Association</th>
                <th className="px-4 py-3 text-xs font-medium text-gray-400">Status</th>
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
                    className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
                  >
                    {/* Name + avatar */}
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 border border-gray-200">
                          <span className="text-xs font-bold text-gray-600">
                            {f.fullName.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-800 max-w-[120px] truncate" title={f.fullName}>
                          {f.fullName.length > 13 ? f.fullName.slice(0, 12) + "…" : f.fullName}
                        </span>
                      </div>
                    </td>

                    {/* District */}
                    <td className="px-4 py-3.5 text-xs text-gray-500">{f.district}</td>

                    {/* Association */}
                    <td className="px-4 py-3.5 text-xs text-gray-500 max-w-[150px] truncate" title={f.association}>
                      {f.association.length > 18 ? f.association.slice(0, 17) + "…" : f.association}
                    </td>

                    {/* Status */}
                    <td className="px-4 py-3.5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                        {f.status}
                      </span>
                    </td>


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
