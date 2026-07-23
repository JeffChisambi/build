"use client";

import { useState, useRef, useEffect } from "react";
import { SEED_FARMERS } from "@/lib/mockFarmers";
import { SEED_USERS } from "@/auth/mockUsers";

const VIEW_OPTIONS = ["Farmers", "Admin Users"];

function TypeDropdown({ value, onChange }) {
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
        className="flex items-center gap-1.5 text-sm font-bold text-gray-900 hover:text-gray-600 transition-colors"
      >
        {value}
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-1.5 w-36 bg-white border border-gray-200 rounded-lg shadow-md z-20 overflow-hidden">
          {VIEW_OPTIONS.map((opt) => (
            <button
              key={opt}
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                opt === value
                  ? "bg-gray-50 text-gray-900 font-semibold"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────
export default function UsersPage() {
  const [view, setView] = useState("Farmers");

  const isFarmers = view === "Farmers";

  return (
    <div className="space-y-6 relative">

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {/* Card header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <TypeDropdown value={view} onChange={setView} />
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1a5c2a] text-white text-sm font-semibold rounded-md hover:bg-[#134520] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              {isFarmers ? "Add Farmer" : "Add User"}
            </button>
            <button className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors rounded-md hover:bg-gray-50">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="5" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="12" cy="19" r="1.5" />
              </svg>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          {isFarmers ? (
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
                {SEED_FARMERS.map((f) => (
                  <tr key={f.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
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
                    <td className="px-4 py-3.5 text-xs text-gray-500">{f.district}</td>
                    <td className="px-4 py-3.5 text-xs text-gray-500 max-w-[150px] truncate" title={f.association}>
                      {f.association.length > 18 ? f.association.slice(0, 17) + "…" : f.association}
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                        {f.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="px-4 py-3 text-xs font-medium text-gray-400">Name</th>
                  <th className="px-4 py-3 text-xs font-medium text-gray-400">Email</th>
                  <th className="px-4 py-3 text-xs font-medium text-gray-400">Role</th>
                  <th className="px-4 py-3 text-xs font-medium text-gray-400">Assigned IPC</th>
                  <th className="px-4 py-3 text-xs font-medium text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {SEED_USERS.map((u) => (
                  <tr key={u.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 border border-gray-200">
                          <span className="text-xs font-bold text-gray-600">
                            {u.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-800 max-w-[130px] truncate" title={u.name}>
                          {u.name.length > 14 ? u.name.slice(0, 13) + "…" : u.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-xs text-gray-500 max-w-[160px] truncate" title={u.email}>
                      {u.email}
                    </td>
                    <td className="px-4 py-3.5 text-xs text-gray-500">{u.role}</td>
                    <td className="px-4 py-3.5 text-xs text-gray-500">
                      {u.assignedIPC || <span className="text-gray-300">—</span>}
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                        {u.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
