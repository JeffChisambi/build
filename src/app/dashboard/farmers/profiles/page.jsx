"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { SEED_FARMERS } from "@/lib/mockFarmers";

function StatusBadge({ status }) {
  const colors = {
    "Active": "bg-gray-100 text-gray-600",
    "Inactive": "bg-gray-50 text-gray-400",
    "Pending Verification": "bg-yellow-50 text-yellow-700",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${colors[status] || "bg-gray-100 text-gray-600"}`}>
      {status}
    </span>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-md border border-gray-200 p-5 transition-shadow\">
      {icon && (
        <div className="text-gray-600 mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
      <p className="text-sm font-semibold text-gray-700 mt-1">{title}</p>
    </div>
  );
}

export default function FarmerProfilesPage() {
  const [farmers] = useState(SEED_FARMERS);
  const [filters, setFilters] = useState({
    district: "",
    gender: "",
    status: "",
    association: "",
  });
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Sorting State
  const [sortField, setSortField] = useState("registrationDate");
  const [sortDirection, setSortDirection] = useState("desc");

  // Toggle sorting
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const handleFilterChange = (field, val) => {
    setFilters(prev => ({ ...prev, [field]: val }));
    setCurrentPage(1); // Reset to first page
  };

  const clearFilters = () => {
    setFilters({ district: "", gender: "", status: "", association: "" });
    setCurrentPage(1);
  };

  // Derived filtered & sorted data
  const processedFarmers = useMemo(() => {
    return farmers
      .filter((f) => {
        // Advanced Filters
        const matchesDistrict = filters.district === "" || f.district === filters.district;
        const matchesGender = filters.gender === "" || f.gender === filters.gender;
        const matchesStatus = filters.status === "" || f.status === filters.status;
        const matchesAssociation = filters.association === "" || f.association === filters.association;

        return matchesDistrict && matchesGender && matchesStatus && matchesAssociation;
      })
      .sort((a, b) => {
        const valA = a[sortField];
        const valB = b[sortField];
        if (valA < valB) return sortDirection === "asc" ? -1 : 1;
        if (valA > valB) return sortDirection === "asc" ? 1 : -1;
        return 0;
      });
  }, [farmers, filters, sortField, sortDirection]);

  // Pagination calculations
  const totalPages = Math.max(1, Math.ceil(processedFarmers.length / itemsPerPage));
  const paginatedFarmers = processedFarmers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Statistics
  const stats = useMemo(() => {
    const total = farmers.length;
    const active = farmers.filter(f => f.status === "Active").length;
    const inactive = farmers.filter(f => f.status === "Inactive").length;
    const pending = farmers.filter(f => f.status === "Pending Verification").length;
    
    // Simplistic 'registered this month' calculation
    const currentMonth = new Date().getMonth();
    const registeredThisMonth = farmers.filter(f => new Date(f.registrationDate).getMonth() === currentMonth).length;
    
    const male = farmers.filter(f => f.gender === "Male").length;
    const female = farmers.filter(f => f.gender === "Female").length;

    return { total, active, inactive, pending, registeredThisMonth, male, female };
  }, [farmers]);

  // Extract unique values for filters
  const districts = [...new Set(farmers.map(f => f.district))];
  const associations = [...new Set(farmers.map(f => f.association))];

  return (
    <div className="space-y-6 relative pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Farmers</h1>
          <p className="text-sm text-gray-500 mt-0.5">Manage registered farmers and view their details.</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard title="Total Farmers" value={stats.total} icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        } />
        <StatCard title="Active Farmers" value={stats.active} icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        } />
        <StatCard title="Inactive Farmers" value={stats.inactive} icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        } />
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
          <div>
            <p className="text-xs text-gray-400">{processedFarmers.length} of {stats.total} farmers</p>
          </div>
          <div className="flex items-center gap-2">
            <select value={filters.district} onChange={(e) => handleFilterChange("district", e.target.value)}
              className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 focus:ring-2 focus:ring-green-100 focus:border-[#1a5c2a] outline-none">
              <option value="">All Districts</option>
              {districts.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            <select value={filters.association} onChange={(e) => handleFilterChange("association", e.target.value)}
              className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 focus:ring-2 focus:ring-green-100 focus:border-[#1a5c2a] outline-none">
              <option value="">All Associations</option>
              {associations.map(a => <option key={a} value={a}>{a}</option>)}
            </select>
            <select value={filters.gender} onChange={(e) => handleFilterChange("gender", e.target.value)}
              className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 focus:ring-2 focus:ring-green-100 focus:border-[#1a5c2a] outline-none">
              <option value="">All Genders</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <select value={filters.status} onChange={(e) => handleFilterChange("status", e.target.value)}
              className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 focus:ring-2 focus:ring-green-100 focus:border-[#1a5c2a] outline-none">
              <option value="">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Pending Verification">Pending</option>
            </select>
            {Object.values(filters).some(x => x !== "") && (
               <button onClick={clearFilters} className="px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 border border-red-100 rounded-lg hover:bg-red-100 transition-colors">
                  Reset
               </button>
            )}
            <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
               Export CSV
            </button>
            <Link href="/dashboard/farmers/registration" className="flex items-center gap-2 px-3 py-1.5 bg-[#1a5c2a] text-white text-xs font-semibold rounded-lg hover:bg-[#134520] transition-colors shadow-sm">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Register Farmer
            </Link>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-4 py-3">
                  <input type="checkbox" className="w-4 h-4 rounded accent-[#1a5c2a] cursor-pointer" />
                </th>
                {[
                  { label: "Farmer", field: "fullName" },
                  { label: "Location", field: "district" },
                  { label: "Status", field: "status" },
                ].map((col) => (
                  <th key={col.field} onClick={() => handleSort(col.field)}
                    className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap cursor-pointer hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-1">
                      {col.label}
                      {sortField === col.field && (
                        <svg className={`w-3.5 h-3.5 text-gray-400 transition-transform ${sortDirection === 'desc' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                        </svg>
                      )}
                    </div>
                  </th>
                ))}
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {paginatedFarmers.length === 0 ? (
                <tr>
                  <td colSpan={9} className="px-5 py-12 text-center">
                    <div className="flex flex-col items-center justify-center">
                       <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-3">
                          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                       </div>
                       <p className="text-sm font-semibold text-gray-900">No farmers found</p>
                       <p className="text-sm text-gray-400 mt-1">Try adjusting your search or filters.</p>
                    </div>
                  </td>
                </tr>
              ) : paginatedFarmers.map((f) => (
                <tr key={f.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-4 py-3.5">
                    <input type="checkbox" className="w-4 h-4 rounded accent-[#1a5c2a] cursor-pointer" />
                  </td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 border border-gray-200">
                        {f.photoUrl ? (
                          <img src={f.photoUrl} alt="" className="w-full h-full rounded-full object-cover" />
                        ) : (
                          <span className="text-xs font-bold text-gray-600">
                            {f.fullName.split(" ").map(n => n[0]).slice(0,2).join("")}
                          </span>
                        )}
                      </div>
                      <div className="min-w-0">
                        <span className="font-semibold text-gray-900 block truncate">{f.fullName}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="block text-gray-900">{f.village}</span>
                    <span className="block text-xs text-gray-500">{f.district}</span>
                  </td>
                  <td className="px-4 py-3.5">
                    <StatusBadge status={f.status} />
                  </td>
                  <td className="px-4 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <Link href={`/dashboard/farmers/profiles/${f.id}`} className="text-xs font-semibold text-[#1a5c2a] hover:underline">View</Link>
                      <button className="text-xs font-semibold text-gray-500 hover:text-gray-900">Edit</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100 bg-gray-50/50">
          <p className="text-xs text-gray-500">
            Showing <span className="font-semibold text-gray-900">{Math.min(processedFarmers.length, (currentPage - 1) * itemsPerPage + 1)}</span> to{" "}
            <span className="font-semibold text-gray-900">{Math.min(processedFarmers.length, currentPage * itemsPerPage)}</span> of{" "}
            <span className="font-semibold text-gray-900">{processedFarmers.length}</span> results
          </p>
          <div className="flex gap-1">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
              className="px-3 py-1.5 text-xs font-semibold text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <button 
              disabled={currentPage === totalPages || totalPages === 0}
              onClick={() => setCurrentPage(p => p + 1)}
              className="px-3 py-1.5 text-xs font-semibold text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
