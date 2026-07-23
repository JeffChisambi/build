"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { SEED_PURCHASES } from "@/lib/mockPurchases";
import { use } from "react";

// ─────────────────────────────────────────────────────────────
// Utility components
// ─────────────────────────────────────────────────────────────

function StatusBadge({ status }) {
  const isPositive = ["Completed", "Active", "Paid", "Verified", "Accepted", "Passed", "Stored", "Issued"].includes(status);
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${isPositive ? "bg-gray-100 text-gray-600" : "bg-gray-50 text-gray-400"}`}>
      {status}
    </span>
  );
}

function SectionHeader({ icon, title, badge }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-8 h-8 rounded-lg bg-gray-100 text-gray-500 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <h2 className="text-sm font-bold text-gray-900">{title}</h2>
      {badge && <StatusBadge status={badge} />}
    </div>
  );
}

function Field({ label, value, mono }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-0.5">{label}</p>
      <p className={`text-sm font-semibold text-gray-900 ${mono ? "font-mono" : ""}`}>{value || "—"}</p>
    </div>
  );
}

function KpiCard({ label, value, sub }) {
  return (
    <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1">{label}</p>
      <p className="text-xl font-bold text-gray-900">{value}</p>
      {sub && <p className="text-[11px] text-gray-400 mt-0.5">{sub}</p>}
    </div>
  );
}

function ActionBtn({ href, onClick, variant = "outline", children }) {
  const base = "inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a5c2a]";
  const styles = {
    primary: `${base} bg-[#1a5c2a] text-white hover:bg-[#134520] shadow-sm`,
    outline: `${base} border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 shadow-sm`,
    ghost:   `${base} text-gray-500 hover:text-gray-900 hover:bg-gray-100`,
  };
  if (href) return <Link href={href} className={styles[variant]}>{children}</Link>;
  return <button onClick={onClick} className={styles[variant]}>{children}</button>;
}

// ─────────────────────────────────────────────────────────────
// Inline QR code SVG (stylised placeholder)
// ─────────────────────────────────────────────────────────────
function QRCode({ value }) {
  const cells = Array.from({ length: 7 }, (_, r) =>
    Array.from({ length: 7 }, (_, c) => {
      const hash = (value.charCodeAt(r) || 0) ^ (value.charCodeAt(c) || 0) ^ (r * 7 + c);
      return hash % 3 !== 0;
    })
  );
  return (
    <div className="bg-white p-2 rounded-lg border border-gray-200 inline-block">
      <svg width="56" height="56" viewBox="0 0 7 7">
        {cells.map((row, r) =>
          row.map((filled, c) =>
            filled ? <rect key={`${r}-${c}`} x={c} y={r} width="1" height="1" fill="#1a5c2a" /> : null
          )
        )}
        {/* Corner finders */}
        {[[0,0],[4,0],[0,4]].map(([x,y]) => (
          <g key={`f-${x}-${y}`}>
            <rect x={x} y={y} width="3" height="3" fill="none" stroke="#1a5c2a" strokeWidth="0.2"/>
            <rect x={x+1} y={y+1} width="1" height="1" fill="#1a5c2a"/>
          </g>
        ))}
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Timeline stage component
// ─────────────────────────────────────────────────────────────
function TraceabilityStage({ label, status, officer, date, remarks, isLast, isFuture }) {
  const dotColor = isFuture ? "bg-gray-200" : status === "Completed" ? "bg-green-500" : status === "Active" ? "bg-[#1a5c2a]" : "bg-yellow-400";
  return (
    <div className={`flex gap-4 ${isLast ? "" : ""}`}>
      {/* Dot + line */}
      <div className="flex flex-col items-center">
        <div className={`w-3.5 h-3.5 rounded-full flex-shrink-0 mt-0.5 ring-2 ring-white shadow-sm ${dotColor}`} />
        {!isLast && <div className={`w-px flex-1 mt-1 mb-1 ${isFuture ? "bg-gray-100" : "bg-gray-200"}`} style={{ minHeight: 24 }} />}
      </div>
      {/* Content */}
      <div className={`pb-5 flex-1 ${isFuture ? "opacity-40" : ""}`}>
        <div className="flex flex-wrap items-center gap-2">
          <p className={`text-sm font-bold ${isFuture ? "text-gray-400" : "text-gray-900"}`}>{label}</p>
          {isFuture && <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-400 border border-gray-200">Future Integration</span>}
          {!isFuture && status && <StatusBadge status={status} />}
        </div>
        {!isFuture && (
          <div className="mt-1 flex flex-wrap gap-x-4 gap-y-0.5 text-[11px] text-gray-500">
            {officer && <span>👤 {officer}</span>}
            {date && <span>📅 {date}</span>}
            {remarks && <span className="text-gray-400 italic">{remarks}</span>}
          </div>
        )}
        {isFuture && (
          <p className="text-[11px] text-gray-400 mt-0.5 italic">Module available in future release</p>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Activity icon
// ─────────────────────────────────────────────────────────────
function ActivityIcon({ type }) {
  const icons = {
    create:  "M12 4v16m8-8H4",
    scale:   "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
    inspect: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    approve: "M5 13l4 4L19 7",
    receive: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    store:   "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5",
    batch:   "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    payment: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    receipt: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    reject:  "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",
  };
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d={icons[type] || icons.create} />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// Future placeholder card
// ─────────────────────────────────────────────────────────────
function FuturePlaceholder({ label, icon }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-dashed border-gray-200 bg-gray-50/50 text-center">
      <div className="w-8 h-8 rounded-lg bg-gray-100 text-gray-300 flex items-center justify-center">
        {icon}
      </div>
      <p className="text-[11px] font-semibold text-gray-400">{label}</p>
      <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-400 font-medium">Future Release</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────────────────────
export default function PurchaseMasterRecord({ params }) {
  const { id } = use(params);
  const purchase = SEED_PURCHASES.find(p => p.id === id);
  if (!purchase) notFound();

  const {
    receiptNumber, status, purchaseDate, buyingCentre, ipc, purchasingOfficer, approvedBy,
    farmerId, farmerName, farmerPhone, farmerAssociation, farmerClub, farmerGroup,
    farmerVillage, farmerDistrict, farmerStatus,
    commodity, variety, grade, qualityGrade, moistureContent, numberOfBags, totalWeight,
    unitPrice, grossAmount, purchaseNotes, commodityStatus,
    seedLoanDeduction, otherDeductions, netPayable, paymentStatus, paymentMethod, paymentDate, paymentReference,
    grn, warehouse, batch, bags, documents, timeline,
  } = purchase;

  const farmerInitials = farmerName.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();

  return (
    <div className="space-y-6 pb-12 max-w-7xl mx-auto">

      {/* ── Breadcrumb ── */}
      <div className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
        <Link href="/dashboard" className="hover:text-gray-700 transition-colors">Dashboard</Link>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        <Link href="/dashboard/purchasing" className="hover:text-gray-700 transition-colors">Purchasing</Link>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        <span className="text-gray-700 font-semibold">{id}</span>
      </div>

      {/* ═══════════════════════════════════════════════════════
          PURCHASE HEADER
      ═══════════════════════════════════════════════════════ */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6 p-6">
          {/* QR + ID */}
          <div className="flex flex-col items-center gap-2 flex-shrink-0">
            <QRCode value={id} />
            <p className="text-[10px] font-mono text-gray-400">{id}</p>
          </div>

          {/* Main info */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Purchase Record</p>
                <h1 className="text-xl font-bold text-gray-900">{id}</h1>
                <p className="text-sm text-gray-500 mt-0.5">Receipt: <span className="font-mono font-semibold text-gray-700">{receiptNumber}</span></p>
              </div>
              <StatusBadge status={status} />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Field label="Purchase Date" value={purchaseDate} />
              <Field label="Buying Centre" value={buyingCentre} />
              <Field label="IPC" value={ipc} />
              <Field label="Purchasing Officer" value={purchasingOfficer} />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="border-t border-gray-50 px-6 py-4 flex flex-wrap gap-2 bg-gray-50/50">
          <ActionBtn variant="primary" href={`/dashboard/farmers/profiles/${farmerId}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            View Farmer
          </ActionBtn>
          <ActionBtn variant="outline" href="/dashboard/purchasing/receiving">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
            View GRN
          </ActionBtn>
          <ActionBtn variant="outline" href="/dashboard/warehouse">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            Warehouse
          </ActionBtn>
          <ActionBtn variant="outline" href="/dashboard/traceability">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
            Traceability
          </ActionBtn>
          <ActionBtn variant="ghost">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
            Print
          </ActionBtn>
          <ActionBtn variant="ghost">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Generate Receipt
          </ActionBtn>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          TWO-COLUMN GRID
      ═══════════════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT COLUMN (2/3) */}
        <div className="lg:col-span-2 space-y-6">

          {/* ── SECTION 1: Farmer Summary ── */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <SectionHeader
              title="Farmer Summary"
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
            />
            <div className="flex flex-col sm:flex-row gap-5">
              {/* Avatar */}
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#1a5c2a] text-white flex items-center justify-center text-xl font-bold shadow-sm">
                  {farmerInitials}
                </div>
                <StatusBadge status={farmerStatus} />
              </div>
              {/* Info */}
              <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <Field label="Farmer ID" value={farmerId} mono />
                <Field label="Full Name" value={farmerName} />
                <Field label="Phone" value={farmerPhone} />
                <Field label="Association" value={farmerAssociation} />
                <Field label="Club" value={farmerClub} />
                <Field label="Farmer Group" value={farmerGroup} />
                <Field label="Village" value={farmerVillage} />
                <Field label="District" value={farmerDistrict} />
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-gray-50">
              <Link
                href={`/dashboard/farmers/profiles/${farmerId}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a5c2a] text-white text-sm font-semibold rounded-lg hover:bg-[#134520] transition-colors shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                Open Farmer Profile
              </Link>
            </div>
          </div>

          {/* ── SECTION 2: Commodity Information ── */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <SectionHeader
              title="Commodity Information"
              badge={commodityStatus}
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>}
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-5">
              <Field label="Commodity" value={commodity} />
              <Field label="Variety" value={variety} />
              <Field label="Grade" value={grade} />
              <Field label="Quality Grade" value={qualityGrade} />
              <Field label="Moisture Content" value={moistureContent} />
              <Field label="Number of Bags" value={numberOfBags} />
              <Field label="Total Weight" value={`${totalWeight.toLocaleString()} kg`} />
              <Field label="Unit Price" value={`MWK ${unitPrice.toLocaleString()}/kg`} />
              <Field label="Gross Amount" value={`MWK ${grossAmount.toLocaleString()}`} />
            </div>
            {purchaseNotes && (
              <div className="mt-4 pt-4 border-t border-gray-50">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Purchase Notes</p>
                <p className="text-sm text-gray-600 italic">{purchaseNotes}</p>
              </div>
            )}
          </div>

          {/* ── SECTION 3: Financial Summary ── */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <SectionHeader
              title="Financial Summary"
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
              <KpiCard label="Gross Amount" value={`MWK ${grossAmount.toLocaleString()}`} />
              <KpiCard label="Seed Loan Deduction" value={`MWK ${seedLoanDeduction.toLocaleString()}`} />
              <KpiCard label="Other Deductions" value={`MWK ${otherDeductions.toLocaleString()}`} />
              <KpiCard label="Net Payable" value={`MWK ${netPayable.toLocaleString()}`} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-50">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1">Payment Status</p>
                <StatusBadge status={paymentStatus} />
              </div>
              <Field label="Payment Method" value={paymentMethod} />
              {paymentDate && <Field label="Payment Date" value={paymentDate} />}
              {paymentReference && <Field label="Payment Reference" value={paymentReference} mono />}
            </div>
          </div>

          {/* ── SECTION 4: Goods Receiving ── */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <SectionHeader
              title="Goods Receiving"
              badge={grn.grnStatus}
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>}
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-5">
              <Field label="GRN Number" value={grn.grnNumber} mono />
              <Field label="Warehouse" value={grn.warehouse} />
              <Field label="Warehouse Code" value={grn.warehouseCode} mono />
              <Field label="Receiving Officer" value={grn.receivingOfficer} />
              <Field label="Receiving Date" value={grn.receivingDate} />
              <Field label="GRN Status" value={grn.grnStatus} />
              <Field label="Accepted Quantity" value={grn.acceptedQuantity ? `${grn.acceptedQuantity} kg` : "0 kg"} />
              <Field label="Rejected Quantity" value={`${grn.rejectedQuantity} kg`} />
            </div>
            <div className="pt-4 border-t border-gray-50">
              <Link href="/dashboard/purchasing/receiving" className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 bg-white text-sm font-semibold text-gray-700 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                View Goods Receiving Note
              </Link>
            </div>
          </div>

          {/* ── SECTION 5: Warehouse ── */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <SectionHeader
              title="Warehouse Integration"
              badge={warehouse.inventoryStatus}
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-5">
              <Field label="Warehouse" value={warehouse.name} />
              <Field label="Location" value={warehouse.location} />
              <Field label="Stock Status" value={warehouse.currentStockStatus} />
              <Field label="Bin" value={warehouse.bin} />
              <Field label="Stack" value={warehouse.stack} />
              <Field label="Shelf" value={warehouse.shelf} />
              <Field label="Storage Condition" value={warehouse.storageCondition} />
              <Field label="Inventory Status" value={warehouse.inventoryStatus} />
            </div>
            <div className="pt-4 border-t border-gray-50">
              <Link href="/dashboard/warehouse" className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 bg-white text-sm font-semibold text-gray-700 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                View Warehouse Inventory
              </Link>
            </div>
          </div>

          {/* ── SECTION 6: Batch Traceability ── */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <SectionHeader
              title="Batch Traceability"
              badge={batch.batchStatus}
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>}
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-5">
              <Field label="Batch Number" value={batch.batchNumber} mono />
              <Field label="Batch Status" value={batch.batchStatus} />
              <Field label="Creation Date" value={batch.batchCreationDate} />
              <Field label="Current Warehouse" value={batch.currentWarehouse} />
              <Field label="Commodity" value={batch.commodity} />
              <Field label="Quantity" value={batch.quantity ? `${batch.quantity} kg` : "0 kg"} />
              <Field label="Quality Status" value={batch.qualityStatus} />
            </div>
            <div className="pt-4 border-t border-gray-50">
              <Link href="/dashboard/traceability" className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 bg-white text-sm font-semibold text-gray-700 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                Open Batch Record
              </Link>
            </div>
          </div>

          {/* ── SECTION 7: Bag Tracking ── */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <SectionHeader
              title="Bag Tracking"
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>}
            />
            {bags.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="w-12 h-12 rounded-xl bg-gray-50 text-gray-300 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                </div>
                <p className="text-sm font-semibold text-gray-400">Bag Management</p>
                <p className="text-xs text-gray-400 mt-1">No bags assigned to this purchase.</p>
                <span className="mt-3 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-400 border border-gray-200">Module Available in Future Release</span>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      {["Bag Number", "Weight", "Location", "Batch", "Status", "Action"].map(h => (
                        <th key={h} className="text-left text-[11px] font-semibold text-gray-500 uppercase tracking-wider px-3 py-2.5">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {bags.map(bag => (
                      <tr key={bag.bagNumber} className="hover:bg-gray-50/60 transition-colors">
                        <td className="px-3 py-2.5 font-mono text-xs font-semibold text-[#1a5c2a]">{bag.bagNumber}</td>
                        <td className="px-3 py-2.5 text-xs text-gray-700">{bag.weight} kg</td>
                        <td className="px-3 py-2.5 text-xs text-gray-700">{bag.location}</td>
                        <td className="px-3 py-2.5 font-mono text-xs text-gray-600">{bag.batch}</td>
                        <td className="px-3 py-2.5"><StatusBadge status={bag.status} /></td>
                        <td className="px-3 py-2.5">
                          <Link href="/dashboard/traceability" className="text-[#1a5c2a] text-xs font-semibold hover:underline">View</Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>{/* end LEFT COLUMN */}

        {/* RIGHT COLUMN (1/3) */}
        <div className="space-y-6">

          {/* ── Supply Chain Timeline ── */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <SectionHeader
              title="Supply Chain Timeline"
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>}
            />
            <div>
              <TraceabilityStage label="Farmer Registration" status="Completed" officer={purchasingOfficer} date={purchaseDate} remarks="Farmer registered in GTMS" />
              <TraceabilityStage label="Commodity Purchase" status="Completed" officer={purchasingOfficer} date={purchaseDate} remarks={`${totalWeight} kg ${commodity} purchased`} />
              <TraceabilityStage label="Goods Receiving" status={grn.grnStatus === "Verified" ? "Completed" : "Pending"} officer={grn.receivingOfficer} date={grn.receivingDate} remarks={`GRN: ${grn.grnNumber}`} />
              <TraceabilityStage label="Warehouse Storage" status={warehouse.currentStockStatus === "Stored" ? "Completed" : "Pending"} officer={grn.receivingOfficer} date={grn.receivingDate} remarks={`${warehouse.name} — ${warehouse.bin}`} />
              <TraceabilityStage label="Batch Creation" status={batch.batchStatus === "Active" ? "Completed" : "Pending"} officer="System" date={batch.batchCreationDate} remarks={`Batch: ${batch.batchNumber}`} />
              <TraceabilityStage label="Bag Assignment" status={bags.length > 0 ? "Completed" : "Pending"} officer="System" date={batch.batchCreationDate} remarks={bags.length > 0 ? `${bags.length} bags assigned` : "Pending"} />
              <TraceabilityStage label="Quality Inspection" isFuture />
              <TraceabilityStage label="Warehouse Dispatch" isFuture />
              <TraceabilityStage label="Transport" isFuture />
              <TraceabilityStage label="Buyer / Processor" isFuture />
              <TraceabilityStage label="Final Destination" isFuture isLast />
            </div>
          </div>

          {/* ── Activity Timeline ── */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <SectionHeader
              title="Purchase Activity"
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            />
            <div className="space-y-4">
              {timeline.map((item, i) => (
                <div key={item.id} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center flex-shrink-0">
                      <ActivityIcon type={item.icon} />
                    </div>
                    {i < timeline.length - 1 && <div className="w-px flex-1 bg-gray-100 my-1" />}
                  </div>
                  <div className="pb-4 flex-1 min-w-0">
                    <p className="text-xs font-bold text-gray-900 leading-tight">{item.activity}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">{item.date} · {item.time} · {item.performedBy}</p>
                    <p className="text-[11px] text-gray-500 mt-1">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Quick Navigation Cards ── */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <SectionHeader
              title="Quick Navigation"
              icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
            />
            <div className="space-y-2">
              {[
                { label: "Farmer Profile", href: `/dashboard/farmers/profiles/${farmerId}`, desc: farmerName },
                { label: "Goods Receiving", href: "/dashboard/purchasing/receiving", desc: grn.grnNumber },
                { label: "Warehouse Inventory", href: "/dashboard/warehouse", desc: warehouse.name },
                { label: "Batch Record", href: "/dashboard/traceability", desc: batch.batchNumber },
                { label: "Traceability", href: "/dashboard/traceability", desc: "Supply chain view" },
                { label: "Purchase History", href: "/dashboard/purchasing/history", desc: "All purchases" },
              ].map(nav => (
                <Link key={nav.label} href={nav.href} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 border border-gray-100 hover:border-gray-200 transition-all group">
                  <div>
                    <p className="text-xs font-semibold text-gray-900 group-hover:text-[#1a5c2a] transition-colors">{nav.label}</p>
                    <p className="text-[11px] text-gray-400 font-mono">{nav.desc}</p>
                  </div>
                  <svg className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#1a5c2a] transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

        </div>{/* end RIGHT COLUMN */}
      </div>{/* end TWO-COLUMN GRID */}

      {/* ═══════════════════════════════════════════════════════
          DOCUMENTS + RECEIPT PREVIEW
      ═══════════════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Documents */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <SectionHeader
            title="Documents"
            icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>}
          />
          <div className="space-y-3">
            {documents.map(doc => (
              <div key={doc.id} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 transition-all">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-gray-900 truncate">{doc.name}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <p className="text-[10px] text-gray-400">{doc.type}</p>
                    <span className="text-gray-200">·</span>
                    <p className="text-[10px] text-gray-400">{doc.uploadDate}</p>
                    <span className="text-gray-200">·</span>
                    <StatusBadge status={doc.status} />
                  </div>
                </div>
                <div className="flex gap-1">
                  <button className="p-1.5 rounded-lg text-gray-400 hover:text-[#1a5c2a] hover:bg-green-50 transition-colors" title="View">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  </button>
                  <button className="p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors" title="Download">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  </button>
                </div>
              </div>
            ))}
            <button className="w-full flex items-center justify-center gap-2 py-3 border border-dashed border-gray-300 rounded-xl text-xs font-semibold text-gray-400 hover:border-[#1a5c2a] hover:text-[#1a5c2a] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
              Upload Document
            </button>
          </div>
        </div>

        {/* Receipt Preview */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <SectionHeader
            title="Purchase Receipt"
            icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
          />
          {/* Receipt mockup */}
          <div className="border border-gray-100 rounded-xl bg-gray-50 p-5 font-mono text-xs space-y-3">
            <div className="text-center border-b border-dashed border-gray-300 pb-3">
              <p className="text-sm font-bold text-gray-900 not-italic font-sans">NASFAM IPC</p>
              <p className="text-[10px] text-gray-500 font-sans">Grain Traceability Management System</p>
              <p className="text-[10px] text-gray-400 mt-1 font-sans">{buyingCentre}</p>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between"><span className="text-gray-500">Receipt No.</span><span className="font-semibold text-gray-800">{receiptNumber}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Purchase No.</span><span className="font-semibold text-gray-800">{id}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Date</span><span className="text-gray-800">{purchaseDate}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Farmer</span><span className="text-gray-800">{farmerName}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Commodity</span><span className="text-gray-800">{commodity} ({grade})</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Weight</span><span className="text-gray-800">{totalWeight} kg</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Unit Price</span><span className="text-gray-800">MWK {unitPrice}/kg</span></div>
            </div>
            <div className="border-t border-dashed border-gray-300 pt-3 space-y-1">
              <div className="flex justify-between text-gray-600"><span>Gross Amount</span><span>MWK {grossAmount.toLocaleString()}</span></div>
              <div className="flex justify-between text-gray-600"><span>Seed Loan Deduction</span><span>- MWK {seedLoanDeduction.toLocaleString()}</span></div>
              <div className="flex justify-between text-gray-600"><span>Other Deductions</span><span>- MWK {otherDeductions.toLocaleString()}</span></div>
              <div className="flex justify-between font-bold text-[#1a5c2a] text-sm pt-1 border-t border-gray-200">
                <span>NET PAYABLE</span><span>MWK {netPayable.toLocaleString()}</span>
              </div>
            </div>
            <div className="text-center text-[10px] text-gray-400 border-t border-dashed border-gray-300 pt-3">
              Payment: {paymentMethod}<br />Status: {paymentStatus}<br />
              <span className="text-[9px]">Authorised by: {approvedBy || purchasingOfficer}</span>
            </div>
          </div>
          {/* Receipt actions */}
          <div className="flex gap-2 mt-4">
            <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 border border-gray-200 text-xs font-semibold text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
              Print
            </button>
            <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 border border-gray-200 text-xs font-semibold text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Download PDF
            </button>
            <button className="flex items-center justify-center gap-1.5 px-3 py-2 border border-gray-200 text-xs font-semibold text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
              Share
            </button>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          FUTURE-READY PLACEHOLDERS
      ═══════════════════════════════════════════════════════ */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <SectionHeader
          title="Future Integration Modules"
          icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
        />
        <p className="text-xs text-gray-400 mb-5">The following modules are reserved for upcoming GTMS releases and will integrate directly with this Purchase Record.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {[
            { label: "Offline Purchases", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 2.83a4.978 4.978 0 01-1.414-2.83m0 0a5 5 0 010-7.072m0 0l2.829 2.829M9 9l2.829 2.829" /></svg> },
            { label: "QR Scanning", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
            { label: "Barcode Scanning", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h1M4 10h1M4 14h1M4 18h1M8 6v12M12 6v12M16 6v12M20 6h1M20 10h1M20 14h1M20 18h1" /></svg> },
            { label: "SMS Notifications", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg> },
            { label: "Digital Signatures", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg> },
            { label: "Mobile Sync", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg> },
            { label: "Payment Integration", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg> },
            { label: "Warehouse Automation", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" /></svg> },
          ].map(f => <FuturePlaceholder key={f.label} {...f} />)}
        </div>
      </div>

    </div>
  );
}
