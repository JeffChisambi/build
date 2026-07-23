"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { SEED_FARMERS } from "@/lib/mockFarmers";

// ── Initials avatar ──────────────────────────────────────────
function Avatar({ name }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
      <span className="text-xs font-semibold text-gray-600">{initials}</span>
    </div>
  );
}

// ── Status dot + label ───────────────────────────────────────
function StatusDot({ status }) {
  const dot = {
    Active: "bg-green-500",
    Inactive: "bg-gray-400",
    "Pending Verification": "bg-amber-400",
  }[status] || "bg-gray-400";
  return (
    <span className="flex items-center gap-1.5 text-sm text-gray-600 whitespace-nowrap">
      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${dot}`} />
      {status}
    </span>
  );
}

// ── Row "⋯" menu ─────────────────────────────────────────────
function RowMenu({ farmer }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((p) => !p)}
        className="p-1.5 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="5" cy="12" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="19" cy="12" r="1.5" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 w-36 bg-white border border-gray-200 rounded-lg shadow-lg z-20 py-1">
          <Link
            href={`/dashboard/farmers/profiles/${farmer.id}`}
            className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
            onClick={() => setOpen(false)}
          >
            View profile
          </Link>
        </div>
      )}
    </div>
  );
}

// ── Filter dropdown anchored to "Farmers ∨" ──────────────────
function FilterDropdown({ filters, onChange, onClear, districts, associations }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const hasFilters = Object.values(filters).some((v) => v !== "");

  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex items-center gap-1.5 text-base font-bold text-gray-900 hover:text-gray-700 transition-colors"
      >
        Farmers
        <svg className={`w-4 h-4 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        {hasFilters && <span className="w-2 h-2 rounded-full bg-[#1a5c2a]" />}
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-lg z-20 p-4 space-y-3">
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">District</label>
            <select
              value={filters.district}
              onChange={(e) => onChange("district", e.target.value)}
              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:ring-2 focus:ring-gray-100 focus:border-gray-400"
            >
              <option value="">All Districts</option>
              {districts.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">Association</label>
            <select
              value={filters.association}
              onChange={(e) => onChange("association", e.target.value)}
              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:ring-2 focus:ring-gray-100 focus:border-gray-400"
            >
              <option value="">All Associations</option>
              {associations.map((a) => <option key={a} value={a}>{a}</option>)}
            </select>
          </div>
          {hasFilters && (
            <button
              onClick={() => { onClear(); setOpen(false); }}
              className="w-full text-xs font-semibold text-red-600 hover:text-red-700 text-left"
            >
              Clear filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────
export default function FarmerProfilesPage() {
  const [farmers] = useState(SEED_FARMERS);
  const [filters, setFilters] = useState({ district: "", association: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleFilterChange = (field, val) => {
    setFilters((prev) => ({ ...prev, [field]: val }));
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setFilters({ district: "", association: "" });
    setCurrentPage(1);
  };

  const processedFarmers = useMemo(() =>
    farmers.filter((f) => {
      const matchesDistrict = filters.district === "" || f.district === filters.district;
      const matchesAssociation = filters.association === "" || f.association === filters.association;
      return matchesDistrict && matchesAssociation;
    }),
    [farmers, filters]
  );

  const totalPages = Math.max(1, Math.ceil(processedFarmers.length / itemsPerPage));
  const paginatedFarmers = processedFarmers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const districts = [...new Set(farmers.map((f) => f.district))];
  const associations = [...new Set(farmers.map((f) => f.association))];

  return (
    <div className="p-6 space-y-4">
      {/* Card */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">

        {/* Card header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <FilterDropdown
            filters={filters}
            onChange={handleFilterChange}
            onClear={clearFilters}
            districts={districts}
            associations={associations}
          />
          <Link
            href="/dashboard/farmers/registration"
            className="flex items-center gap-2 px-4 py-2 bg-[#1a5c2a] text-white text-sm font-semibold rounded-lg hover:bg-[#134520] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Farmer
          </Link>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-6 py-3 text-xs font-semibold text-gray-500">Name</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500">District</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500">Association</th>
                <th className="px-6 py-3" />
              </tr>
            </thead>
            <tbody>
              {paginatedFarmers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-sm text-gray-400">
                    No farmers found matching your filters.
                  </td>
                </tr>
              ) : paginatedFarmers.map((f) => (
                <tr key={f.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  {/* Name */}
                  <td className="px-6 py-3.5">
                    <div className="flex items-center gap-3">
                      <Avatar name={f.fullName} />
                      <span className="font-medium text-gray-900 truncate max-w-[160px]">{f.fullName}</span>
                    </div>
                  </td>
                  {/* District */}
                  <td className="px-6 py-3.5 text-gray-600">{f.district}</td>
                  {/* Association */}
                  <td className="px-6 py-3.5 text-gray-600 max-w-[180px]">
                    <span className="block truncate">{f.association}</span>
                  </td>
                  {/* Menu */}
                  <td className="px-6 py-3.5 text-right">
                    <RowMenu farmer={f} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-6 py-3 border-t border-gray-100">
            <p className="text-xs text-gray-500">
              {Math.min(processedFarmers.length, (currentPage - 1) * itemsPerPage + 1)}–
              {Math.min(processedFarmers.length, currentPage * itemsPerPage)} of {processedFarmers.length}
            </p>
            <div className="flex gap-1">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="px-3 py-1.5 text-xs font-semibold text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="px-3 py-1.5 text-xs font-semibold text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
