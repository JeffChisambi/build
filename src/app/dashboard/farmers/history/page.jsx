"use client";

import { useState, useMemo } from "react";
import { SEED_HISTORY, SEED_FARMERS } from "@/lib/mockFarmers";

function ActivityIcon({ type }) {
  const styles = {
    "Registration": "bg-blue-50 text-blue-600",
    "Farm Visit": "bg-green-50 text-green-600",
    "Seed Loan": "bg-orange-50 text-orange-600",
    "Commodity Purchases": "bg-purple-50 text-purple-600",
    "Warehouse Deliveries": "bg-indigo-50 text-indigo-600",
    "Profile Updates": "bg-gray-100 text-gray-600",
    "System Activity": "bg-gray-100 text-gray-600"
  };

  const className = `w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border border-white shadow-sm z-10 relative ${styles[type] || "bg-gray-100 text-gray-600"}`;

  return (
    <div className={className}>
      {type === "Registration" && <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>}
      {type === "Farm Visit" && <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>}
      {type === "Seed Loan" && <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>}
      {type === "Commodity Purchases" && <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
      {type === "Warehouse Deliveries" && <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" /></svg>}
      {["Profile Updates", "System Activity"].includes(type) && <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>}
    </div>
  );
}

export default function FarmerHistoryPage() {
  const [history] = useState(SEED_HISTORY);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    farmerId: "",
    officer: "",
    activityType: "",
    dateFrom: "",
    dateTo: ""
  });
  
  // Extract unique values for filters
  const officers = [...new Set(history.map(h => h.officer))].filter(Boolean);
  const activityTypes = [...new Set(history.map(h => h.type))].filter(Boolean);
  const farmers = SEED_FARMERS.map(f => ({ id: f.id, name: f.fullName }));

  const handleFilterChange = (field, val) => {
    setFilters(prev => ({ ...prev, [field]: val }));
  };

  const clearFilters = () => {
    setFilters({ farmerId: "", officer: "", activityType: "", dateFrom: "", dateTo: "" });
    setSearch("");
  };

  const filteredHistory = useMemo(() => {
    return history.filter(item => {
      const searchLower = search.toLowerCase();
      const matchesSearch = 
        search === "" ||
        item.farmerName.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower) ||
        item.location.toLowerCase().includes(searchLower);

      const matchesFarmer = filters.farmerId === "" || item.farmerId === filters.farmerId;
      const matchesOfficer = filters.officer === "" || item.officer === filters.officer;
      const matchesType = filters.activityType === "" || item.type === filters.activityType;
      
      let matchesDate = true;
      const itemDate = new Date(item.date).getTime();
      if (filters.dateFrom) {
        matchesDate = matchesDate && itemDate >= new Date(filters.dateFrom).getTime();
      }
      if (filters.dateTo) {
         // Add one day to include the end date fully
        matchesDate = matchesDate && itemDate <= (new Date(filters.dateTo).getTime() + 86400000);
      }

      return matchesSearch && matchesFarmer && matchesOfficer && matchesType && matchesDate;
    }).sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [history, search, filters]);

  return (
    <div className="space-y-6 relative pb-10 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Farmers</p>
          <h1 className="text-xl font-bold text-gray-900">Farmer History</h1>
          <p className="text-sm text-gray-500 mt-0.5">Chronological log of all farmer-related activities and interactions.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-200 transition-colors shadow-sm border border-gray-200">
             <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
             </svg>
             Print Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
            <h2 className="text-sm font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Filter Activity</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Search</label>
                <div className="relative">
                  <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input type="text" placeholder="Search logs..." value={search} onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:border-gray-500 bg-white" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Farmer</label>
                <select value={filters.farmerId} onChange={(e) => handleFilterChange("farmerId", e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:border-gray-500 bg-white">
                  <option value="">All Farmers</option>
                  {farmers.map(f => <option key={f.id} value={f.id}>{f.name} ({f.id})</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Activity Type</label>
                <select value={filters.activityType} onChange={(e) => handleFilterChange("activityType", e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:border-gray-500 bg-white">
                  <option value="">All Activities</option>
                  {activityTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Officer</label>
                <select value={filters.officer} onChange={(e) => handleFilterChange("officer", e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:border-gray-500 bg-white">
                  <option value="">All Officers</option>
                  {officers.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">From Date</label>
                  <input type="date" value={filters.dateFrom} onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
                    className="w-full px-2 py-2 text-xs border border-gray-300 rounded-lg outline-none focus:border-gray-500 bg-white" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">To Date</label>
                  <input type="date" value={filters.dateTo} onChange={(e) => handleFilterChange("dateTo", e.target.value)}
                    className="w-full px-2 py-2 text-xs border border-gray-300 rounded-lg outline-none focus:border-gray-500 bg-white" />
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
               <button onClick={clearFilters} className="w-full px-4 py-2 text-xs font-semibold text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  Reset All Filters
               </button>
            </div>
          </div>
        </div>

        {/* Chronological Feed */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 min-h-[500px]">
            {filteredHistory.length === 0 ? (
               <div className="flex flex-col items-center justify-center h-full py-16">
                 <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                 </div>
                 <p className="text-base font-semibold text-gray-900">No activity history found</p>
                 <p className="text-sm text-gray-500 mt-1">Try adjusting your filters or search terms.</p>
               </div>
            ) : (
               <div className="relative">
                 {/* Vertical line connecting timeline items */}
                 <div className="absolute left-5 top-4 bottom-4 w-px bg-gray-200 z-0 hidden sm:block"></div>
                 
                 <div className="space-y-8">
                   {filteredHistory.map((item, index) => (
                     <div key={item.id} className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-6 group">
                        
                        {/* Icon & Connector for Desktop */}
                        <div className="hidden sm:flex flex-col items-center mt-1">
                          <ActivityIcon type={item.type} />
                        </div>
                        
                        {/* Content Card */}
                        <div className="flex-1 bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow hover:border-gray-200">
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                            <div className="flex items-center gap-3">
                               {/* Icon for Mobile */}
                               <div className="sm:hidden"><ActivityIcon type={item.type} /></div>
                               <div>
                                 <h3 className="text-sm font-bold text-gray-900">{item.type}</h3>
                                 <p className="text-xs font-medium text-gray-500 mt-0.5">
                                   Farmer: <span className="text-gray-900 font-semibold">{item.farmerName}</span> <span className="text-gray-400">({item.farmerId})</span>
                                 </p>
                               </div>
                            </div>
                            <div className="text-left sm:text-right">
                              <span className="inline-block text-xs font-semibold text-gray-500 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                                {new Date(item.date).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })}
                              </span>
                            </div>
                          </div>
                          
                          <p className="text-sm text-gray-700 leading-relaxed mb-3 bg-gray-50/50 p-3 rounded-lg border border-gray-50">
                            {item.description}
                          </p>
                          
                          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500">
                            <div className="flex items-center gap-1.5">
                               <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                               Officer: <span className="text-gray-700">{item.officer}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                               <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                               Location: <span className="text-gray-700">{item.location}</span>
                            </div>
                          </div>
                        </div>
                     </div>
                   ))}
                 </div>
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
