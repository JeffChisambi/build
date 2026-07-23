"use client";

import { useState, useMemo } from "react";
import { SEED_GROUPS, SEED_FARMERS } from "@/lib/mockFarmers";

function StatusBadge({ status }) {
  const colors = {
    "Active": "bg-gray-100 text-gray-600",
    "Inactive": "bg-gray-50 text-gray-400",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${colors[status] || "bg-gray-100 text-gray-600"}`}>
      {status}
    </span>
  );
}

function GroupDetailModal({ group, onClose }) {
  const groupMembers = SEED_FARMERS.filter(f => f.group === group.name);
  
  const totalFarmSize = groupMembers.reduce((sum, f) => sum + (f.farmSize || 0), 0);
  const mainCrops = [...new Set(groupMembers.flatMap(f => f.primaryCrops))].join(", ");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl border border-gray-200 flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 flex-shrink-0">
          <div>
            <h2 className="text-lg font-bold text-gray-900">{group.name}</h2>
            <p className="text-xs text-gray-400 mt-0.5">
              {group.association} &middot; {group.district}
            </p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto p-6 space-y-6">
          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-center">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Members</p>
                <p className="text-xl font-bold text-gray-900">{group.members}</p>
             </div>
             <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-center">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Total Land</p>
                <p className="text-xl font-bold text-gray-900">{totalFarmSize} <span className="text-xs font-medium text-gray-500">Ha</span></p>
             </div>
             <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-center">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Chairperson</p>
                <p className="text-sm font-bold text-gray-900 truncate" title={group.chairperson}>{group.chairperson}</p>
             </div>
             <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-center">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Status</p>
                <div className="mt-1"><StatusBadge status={group.status} /></div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-bold text-gray-900 border-b border-gray-100 pb-2 mb-3">Location & Org</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-500">District:</span> <span className="font-medium text-gray-900">{group.district}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Village:</span> <span className="font-medium text-gray-900">{group.village}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Club:</span> <span className="font-medium text-gray-900">{group.club}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Association:</span> <span className="font-medium text-gray-900">{group.association}</span></div>
              </div>
            </div>
            <div>
               <h3 className="text-sm font-bold text-gray-900 border-b border-gray-100 pb-2 mb-3">Production Summary</h3>
               <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-500">Main Crops:</span> <span className="font-medium text-gray-900 text-right">{mainCrops || "—"}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Formed:</span> <span className="font-medium text-gray-900">{group.createdAt}</span></div>
              </div>
            </div>
          </div>

          {/* Member List */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 border-b border-gray-100 pb-2 mb-3">Group Members</h3>
            <div className="bg-white border border-gray-100 rounded-lg overflow-hidden">
               <table className="w-full text-left text-sm">
                 <thead className="bg-gray-50 border-b border-gray-100">
                   <tr>
                     <th className="px-4 py-2.5 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Farmer</th>
                     <th className="px-4 py-2.5 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Farmer ID</th>
                     <th className="px-4 py-2.5 text-[11px] font-semibold text-gray-500 uppercase tracking-wider text-right">Farm Size</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-50">
                   {groupMembers.length === 0 ? (
                      <tr><td colSpan={3} className="px-4 py-6 text-center text-xs text-gray-400">No members found in system.</td></tr>
                   ) : groupMembers.map(m => (
                      <tr key={m.id} className="hover:bg-gray-50">
                        <td className="px-4 py-2 text-gray-900 font-medium">{m.fullName}</td>
                        <td className="px-4 py-2 text-gray-500 text-xs">{m.id}</td>
                        <td className="px-4 py-2 text-gray-500 text-right text-xs">{m.farmSize} Ha</td>
                      </tr>
                   ))}
                 </tbody>
               </table>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-100 flex-shrink-0 bg-gray-50 rounded-b-xl">
          <button onClick={onClose}
            className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function FarmerGroupsPage() {
  const [groups] = useState(SEED_GROUPS);
  const [search, setSearch] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(null);

  const filteredGroups = useMemo(() => {
    return groups.filter((g) => {
      const s = search.toLowerCase();
      return (
        g.name.toLowerCase().includes(s) ||
        g.association.toLowerCase().includes(s) ||
        g.village.toLowerCase().includes(s) ||
        g.district.toLowerCase().includes(s)
      );
    });
  }, [groups, search]);

  return (
    <div className="space-y-6 relative pb-10">
      {selectedGroup && (
        <GroupDetailModal group={selectedGroup} onClose={() => setSelectedGroup(null)} />
      )}

      {/* Header */}
      <div className="flex justify-end">
        <button className="flex items-center gap-2 px-4 py-2 bg-[#1a5c2a] text-white text-sm font-semibold rounded-lg hover:bg-[#134520] transition-colors shadow-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Create Group
        </button>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white">
          <div className="relative w-full sm:w-96">
            <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" placeholder="Search groups, associations..." value={search} onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg outline-none focus:border-gray-500 bg-white transition-colors" />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                {["Group Name", "Association", "Location", "Members", "Chairperson", "Status", "Actions"].map((col) => (
                  <th key={col} className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredGroups.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-5 py-12 text-center text-sm text-gray-400">
                    No farmer groups found matching your search.
                  </td>
                </tr>
              ) : filteredGroups.map((g) => (
                <tr key={g.id} className="hover:bg-gray-50/50 transition-colors group cursor-pointer" onClick={() => setSelectedGroup(g)}>
                  <td className="px-5 py-4">
                    <span className="font-bold text-gray-900 block">{g.name}</span>
                    <span className="text-[10px] font-medium text-gray-400 block mt-0.5">{g.id}</span>
                  </td>
                  <td className="px-5 py-4 text-gray-600">{g.association}</td>
                  <td className="px-5 py-4">
                    <span className="block text-gray-900">{g.village}</span>
                    <span className="block text-xs text-gray-500">{g.district}</span>
                  </td>
                  <td className="px-5 py-4 font-semibold text-gray-900">{g.members}</td>
                  <td className="px-5 py-4 text-gray-600">{g.chairperson}</td>
                  <td className="px-5 py-4"><StatusBadge status={g.status} /></td>
                  <td className="px-5 py-4 text-right">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setSelectedGroup(g); }}
                      className="text-xs font-semibold text-[#1a5c2a] hover:underline opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      View Details
                    </button>
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
