"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { SEED_FARMERS, SEED_HISTORY, SEED_TRACEABILITY, SEED_DOCUMENTS } from "@/lib/mockFarmers";

// ── Components ─────────────────────────────────────────────────────────────
function StatusBadge({ status }) {
  const colors = {
    "Active": "bg-[#1a5c2a]/10 text-[#1a5c2a]",
    "Inactive": "bg-gray-100 text-gray-500",
    "Pending Verification": "bg-yellow-100 text-yellow-700",
    "Verified": "bg-blue-50 text-blue-700",
    "Pending": "bg-orange-50 text-orange-600",
    "Stored": "bg-green-50 text-green-700",
    "In Transit": "bg-indigo-50 text-indigo-700"
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${colors[status] || "bg-gray-100 text-gray-600"}`}>
      {status}
    </span>
  );
}

function SectionCard({ title, children, action }) {
  return (
    <div className="bg-white rounded-md border border-gray-200 overflow-hidden mb-6">
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">{title}</h2>
        {action && <div>{action}</div>}
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}

function DataRow({ label, value, colSpan = 1 }) {
  return (
    <div className={`col-span-${colSpan} flex flex-col gap-1`}>
      <span className="text-xs font-semibold text-gray-500">{label}</span>
      <span className="text-sm font-medium text-gray-900">{value || "—"}</span>
    </div>
  );
}

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

  const className = `w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white shadow-sm z-10 relative ${styles[type] || "bg-gray-100 text-gray-600"}`;

  return (
    <div className={className}>
      {type === "Registration" && <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>}
      {type === "Farm Visit" && <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>}
      {type === "Seed Loan" && <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>}
      {type === "Commodity Purchases" && <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
      {type === "Warehouse Deliveries" && <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" /></svg>}
      {["Profile Updates", "System Activity"].includes(type) && <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>}
    </div>
  );
}

// ── Main Page Component ──────────────────────────────────────────────────
export default function FarmerMasterRecord() {
  const { id } = useParams();
  const router = useRouter();

  // Find farmer
  const farmer = SEED_FARMERS.find((f) => f.id === id);
  const traceability = SEED_TRACEABILITY.filter((t) => t.farmerId === id);
  const documents = SEED_DOCUMENTS.filter((d) => d.farmerId === id);
  const history = SEED_HISTORY.filter((h) => h.farmerId === id).sort((a, b) => new Date(b.date) - new Date(a.date));

  if (!farmer) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <h2 className="text-2xl font-bold text-gray-900">Farmer Not Found</h2>
        <p className="text-gray-500 mt-2">The farmer ID {id} does not exist in the system.</p>
        <button onClick={() => router.push("/dashboard/farmers/profiles")} className="mt-6 px-4 py-2 bg-[#1a5c2a] text-white rounded-lg hover:bg-[#134520]">
          Back to Profiles
        </button>
      </div>
    );
  }

  // Derived Traceability Stats
  const totalVolume = traceability.reduce((sum, t) => sum + t.quantity, 0);
  const totalValue = traceability.reduce((sum, t) => sum + t.purchaseValue, 0);
  const lastSale = traceability.length > 0 ? new Date(Math.max(...traceability.map(t => new Date(t.purchaseDate)))).toISOString().split('T')[0] : "—";

  return (
    <div className="space-y-6 pb-12 max-w-6xl mx-auto">
      
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-2">
         <Link href="/dashboard/farmers/profiles" className="hover:text-gray-900 transition-colors">Farmers</Link>
         <span>/</span>
         <Link href="/dashboard/farmers/profiles" className="hover:text-gray-900 transition-colors">Profiles</Link>
         <span>/</span>
         <span className="text-gray-900">{farmer.id}</span>
      </div>

      {/* ── PROFILE HEADER ── */}
      <div className="bg-white rounded-md border border-gray-200 overflow-hidden flex flex-col md:flex-row relative">
         {/* Left Side: Avatar & Core Info */}
         <div className="p-8 flex flex-col md:flex-row items-center md:items-start gap-6 flex-1 bg-gradient-to-br from-white to-gray-50/50">
            <div className="w-24 h-24 rounded-full bg-gray-100 border-4 border-white shadow-md flex flex-shrink-0 items-center justify-center relative">
               {farmer.photoUrl ? (
                 <img src={farmer.photoUrl} alt={farmer.fullName} className="w-full h-full rounded-full object-cover" />
               ) : (
                 <span className="text-2xl font-bold text-gray-400">{farmer.fullName.split(" ").map(n=>n[0]).slice(0,2).join("")}</span>
               )}
               {/* Status indicator dot */}
               <div className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-white ${farmer.status === 'Active' ? 'bg-[#1a5c2a]' : 'bg-yellow-400'}`}></div>
            </div>
            
            <div className="text-center md:text-left flex-1">
               <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                 <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{farmer.fullName}</h1>
                 <StatusBadge status={farmer.status} />
               </div>
               <p className="text-sm font-mono font-medium text-gray-500 mb-4">{farmer.id}</p>
               
               <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-xs font-medium text-gray-600">
                  <div className="flex items-center gap-1.5">
                     <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                     Reg: {farmer.registrationDate}
                  </div>
                  <div className="flex items-center gap-1.5">
                     <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                     By: {farmer.registrationOfficer}
                  </div>
                  <div className="flex items-center gap-1.5">
                     <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                     Synced Today
                  </div>
               </div>
            </div>
         </div>

         {/* Right Side: QR & Quick Actions */}
         <div className="border-t md:border-t-0 md:border-l border-gray-100 bg-white p-6 flex flex-col md:flex-row items-center gap-6 md:min-w-[320px]">
            {/* Mock QR Code */}
            <div className="w-20 h-20 p-2 border border-gray-200 rounded-lg bg-white flex-shrink-0">
               <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-gray-800">
                  <path d="M0,0 h30 v30 h-30 z M10,10 h10 v10 h-10 z" />
                  <path d="M70,0 h30 v30 h-30 z M80,10 h10 v10 h-10 z" />
                  <path d="M0,70 h30 v30 h-30 z M10,80 h10 v10 h-10 z" />
                  <path d="M40,0 h20 v10 h-20 z M40,20 h20 v10 h-20 z M70,40 h30 v10 h-30 z M80,60 h20 v10 h-20 z" />
                  <path d="M40,40 h20 v20 h-20 z M40,70 h10 v30 h-10 z M60,70 h30 v10 h-30 z M60,90 h40 v10 h-40 z" />
               </svg>
            </div>
            
            <div className="flex flex-col w-full gap-2">
               <button className="w-full flex justify-center items-center gap-2 px-4 py-2 bg-[#1a5c2a] text-white text-sm font-semibold rounded-lg hover:bg-[#134520] transition-colors shadow-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                  Edit Profile
               </button>
               <button className="w-full flex justify-center items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-200 transition-colors border border-gray-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                  Print Record
               </button>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Left Column */}
         <div className="lg:col-span-2 space-y-6">
            
            {/* ── SECTION 1: BASIC INFO ── */}
            <SectionCard title="1. Basic Information">
               <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                  <DataRow label="Farmer ID" value={farmer.id} />
                  <DataRow label="Full Name" value={farmer.fullName} />
                  <DataRow label="Gender" value={farmer.gender} />
                  <DataRow label="Date of Birth" value={farmer.dob} />
                  <DataRow label="National ID" value={farmer.nationalId} />
                  <DataRow label="Status" value={farmer.status} />
                  <DataRow label="Phone Number" value={farmer.phone} />
                  <DataRow label="Alt Phone" value={farmer.altPhone} />
                  <DataRow label="Email" value="—" />
               </div>
            </SectionCard>

            {/* ── SECTION 2: LOCATION ── */}
            <SectionCard title="2. Location">
               <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 grid grid-cols-2 gap-y-6 gap-x-4">
                     <DataRow label="District" value={farmer.district} />
                     <DataRow label="Traditional Authority" value={farmer.ta} />
                     <DataRow label="EPA" value={farmer.epa} />
                     <DataRow label="Section" value={farmer.section} />
                     <DataRow label="Village" value={farmer.village} />
                     <DataRow label="GPS Coordinates" value={farmer.gps} />
                  </div>
                  
                  {/* Map Preview Mock */}
                  <div className="w-full md:w-48 h-48 bg-blue-50 rounded-lg border border-blue-100 overflow-hidden relative flex-shrink-0 flex items-center justify-center">
                     {farmer.gps ? (
                        <>
                           {/* Simplified mock map background lines */}
                           <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                           <svg className="w-8 h-8 text-red-500 z-10 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                           </svg>
                           <span className="absolute bottom-2 right-2 text-[8px] font-bold text-blue-900/40 bg-white/50 px-1 rounded">MOCK MAP</span>
                        </>
                     ) : (
                        <div className="text-center p-4">
                           <svg className="w-8 h-8 text-blue-200 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                           <p className="text-xs font-semibold text-blue-800">Location Not Available</p>
                        </div>
                     )}
                  </div>
               </div>
            </SectionCard>

            {/* ── SECTION 4: FARM INFO ── */}
            <SectionCard title="4. Farm Information">
               <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                  <DataRow label="Farm Size" value={`${farmer.farmSize || 0} ${farmer.unit}`} />
                  <DataRow label="Primary Crops" value={farmer.primaryCrops?.join(", ") || "—"} />
                  <DataRow label="Secondary Crops" value={farmer.secondaryCrops?.join(", ") || "—"} />
                  <DataRow label="Production Season" value={farmer.productionSeason} />
                  <DataRow label="Number of Fields" value="—" />
                  <DataRow label="Irrigation Status" value="Rain-fed" />
               </div>
            </SectionCard>

            {/* ── SECTION 5: TRACEABILITY SUMMARY ── */}
            <SectionCard title="5. Traceability Summary" action={<button className="text-xs font-bold text-[#1a5c2a] hover:underline">View Full Traceability</button>}>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                     <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Purchases</p>
                     <p className="text-lg font-bold text-gray-900">{traceability.length}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                     <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Total Volume</p>
                     <p className="text-lg font-bold text-gray-900">{totalVolume} MT</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                     <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Value (MWK)</p>
                     <p className="text-lg font-bold text-gray-900">{totalValue.toLocaleString()}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                     <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Last Sale</p>
                     <p className="text-sm font-bold text-gray-900 mt-1">{lastSale}</p>
                  </div>
               </div>

               {traceability.length > 0 ? (
                 <div className="border border-gray-200 rounded-lg overflow-hidden">
                   <table className="w-full text-left text-sm">
                     <thead className="bg-gray-50 border-b border-gray-200">
                       <tr>
                         <th className="px-4 py-2.5 text-[11px] font-semibold text-gray-500 uppercase">Batch / Bag</th>
                         <th className="px-4 py-2.5 text-[11px] font-semibold text-gray-500 uppercase">Commodity</th>
                         <th className="px-4 py-2.5 text-[11px] font-semibold text-gray-500 uppercase text-right">Qty</th>
                         <th className="px-4 py-2.5 text-[11px] font-semibold text-gray-500 uppercase">Date</th>
                         <th className="px-4 py-2.5 text-[11px] font-semibold text-gray-500 uppercase">Status</th>
                       </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-100">
                       {traceability.map(t => (
                         <tr key={t.id} className="hover:bg-gray-50">
                           <td className="px-4 py-2.5">
                             <div className="font-semibold text-gray-900">{t.batchNumber}</div>
                             <div className="text-[10px] text-gray-500 font-mono mt-0.5">{t.bagNumber}</div>
                           </td>
                           <td className="px-4 py-2.5 text-gray-700">{t.commodity}</td>
                           <td className="px-4 py-2.5 text-gray-900 font-medium text-right">{t.quantity}</td>
                           <td className="px-4 py-2.5 text-gray-500 text-xs">{t.purchaseDate}</td>
                           <td className="px-4 py-2.5"><StatusBadge status={t.status} /></td>
                         </tr>
                       ))}
                     </tbody>
                   </table>
                 </div>
               ) : (
                 <div className="text-center py-8 bg-gray-50 rounded-lg border border-dashed border-gray-200">
                    <p className="text-sm font-semibold text-gray-900">No Traceability Records</p>
                    <p className="text-xs text-gray-500 mt-1">This farmer has no recorded commodity sales yet.</p>
                 </div>
               )}
            </SectionCard>

            {/* ── SECTION 6: DOCUMENTS ── */}
            <SectionCard title="6. Documents" action={<button className="text-xs font-bold text-[#1a5c2a] hover:underline">+ Upload</button>}>
               {documents.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                     {documents.map(doc => (
                        <div key={doc.id} className="border border-gray-200 rounded-lg p-4 flex flex-col group hover:border-[#1a5c2a]/30 transition-colors bg-white shadow-sm">
                           <div className="flex items-start justify-between mb-3">
                              <div className="w-10 h-10 rounded bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
                                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                              </div>
                              <StatusBadge status={doc.status} />
                           </div>
                           <h3 className="text-sm font-bold text-gray-900 truncate" title={doc.name}>{doc.name}</h3>
                           <p className="text-xs text-gray-500 mt-0.5">{doc.type}</p>
                           
                           <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                              <span className="text-[10px] text-gray-400 font-medium">{doc.uploadDate}</span>
                              <div className="flex gap-2">
                                 <button className="text-xs font-semibold text-[#1a5c2a] hover:underline">View</button>
                                 <button className="text-xs font-semibold text-gray-400 hover:text-red-500">Remove</button>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               ) : (
                  <div className="text-center py-10 bg-gray-50 rounded-lg border border-dashed border-gray-200">
                     <svg className="w-8 h-8 text-gray-300 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                     <p className="text-sm font-semibold text-gray-900">No Documents Uploaded</p>
                     <p className="text-xs text-gray-500 mt-1">Upload National ID, Land Certificates, etc.</p>
                  </div>
               )}
            </SectionCard>
         </div>

         {/* Right Column */}
         <div className="space-y-6">
            
            {/* ── SECTION 3: ORGANISATION ── */}
            <SectionCard title="3. Organisation">
               <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-50">
                     <span className="text-xs font-semibold text-gray-500">Association</span>
                     <span className="text-sm font-bold text-gray-900 text-right">{farmer.association || "—"}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-50">
                     <span className="text-xs font-semibold text-gray-500">Club</span>
                     <span className="text-sm font-bold text-gray-900 text-right">{farmer.club || "—"}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-50">
                     <span className="text-xs font-semibold text-gray-500">Farmer Group</span>
                     <span className="text-sm font-bold text-gray-900 text-right">{farmer.group || "—"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <span className="text-xs font-semibold text-gray-500">Member No.</span>
                     <span className="text-sm font-mono font-bold text-[#1a5c2a] text-right">{farmer.memberNo || "—"}</span>
                  </div>
               </div>
            </SectionCard>

            {/* ── SECTION 7: ACTIVITY TIMELINE ── */}
            <SectionCard title="7. Activity Timeline" action={<button className="text-xs font-bold text-[#1a5c2a] hover:underline">View All</button>}>
               {history.length > 0 ? (
                  <div className="relative">
                     <div className="absolute left-4 top-2 bottom-2 w-px bg-gray-200 z-0"></div>
                     <div className="space-y-6">
                        {history.slice(0, 5).map((item) => (
                           <div key={item.id} className="relative z-10 flex gap-4">
                              <ActivityIcon type={item.type} />
                              <div className="flex-1 pt-1">
                                 <div className="flex justify-between items-start mb-0.5">
                                    <h3 className="text-sm font-bold text-gray-900">{item.type}</h3>
                                    <span className="text-[10px] font-semibold text-gray-400">
                                       {new Date(item.date).toLocaleDateString([], { month: 'short', day: 'numeric' })}
                                    </span>
                                 </div>
                                 <p className="text-xs text-gray-600 mb-1">{item.description}</p>
                                 <p className="text-[10px] font-medium text-gray-400">By {item.officer}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               ) : (
                  <div className="text-center py-6">
                     <p className="text-sm font-semibold text-gray-900">No Recent Activity</p>
                  </div>
               )}
            </SectionCard>
         </div>
      </div>
    </div>
  );
}
