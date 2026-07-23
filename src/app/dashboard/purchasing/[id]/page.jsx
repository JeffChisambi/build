"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { SEED_PURCHASES } from "@/lib/mockPurchases";
import { use } from "react";

// ── Field ─────────────────────────────────────────────────────
function Field({ label, value, mono }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-semibold text-gray-400">{label}</span>
      <span className={`text-sm font-medium text-gray-900 ${mono ? "font-mono" : ""}`}>
        {value || "—"}
      </span>
    </div>
  );
}

// ── Inline row (label left, value right) ──────────────────────
function Row({ label, value, mono }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0">
      <span className="text-xs font-semibold text-gray-400">{label}</span>
      <span className={`text-sm font-medium text-gray-900 text-right ${mono ? "font-mono" : ""}`}>
        {value || "—"}
      </span>
    </div>
  );
}

// ── Stat widget — mirrors admin MetricWidget ───────────────────
function StatWidget({ label, value }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-3">
      <p className="text-sm font-semibold text-gray-700">{label}</p>
      <p className="text-xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

// ── Section card ──────────────────────────────────────────────
function SectionCard({ title, children, action }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <h2 className="text-sm font-semibold text-gray-700">{title}</h2>
        {action && <div>{action}</div>}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────
export default function PurchaseDetailPage({ params }) {
  const { id } = use(params);
  const purchase = SEED_PURCHASES.find((p) => p.id === id);
  if (!purchase) notFound();

  const {
    receiptNumber, status, purchaseDate, buyingCentre, ipc, purchasingOfficer, approvedBy,
    farmerId, farmerName, farmerPhone, farmerAssociation, farmerDistrict,
    commodity, variety, grade, qualityGrade, moistureContent, numberOfBags, totalWeight,
    unitPrice, grossAmount, purchaseNotes,
    seedLoanDeduction, otherDeductions, netPayable, paymentStatus, paymentMethod, paymentDate, paymentReference,
    grn, warehouse, batch, bags, documents, timeline,
  } = purchase;

  const farmerInitials = farmerName.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

  return (
    <div className="space-y-5 pb-12 max-w-5xl mx-auto">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
        <Link href="/dashboard/purchasing" className="hover:text-gray-700 transition-colors">Purchasing</Link>
        <span>/</span>
        <span className="text-gray-700">{id}</span>
      </div>

      {/* ── Header ── */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col sm:flex-row items-start gap-6">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5 flex-wrap">
            <h1 className="text-lg font-bold text-gray-900">{id}</h1>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500">
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${status === "Completed" ? "bg-[#1a5c2a]" : "bg-gray-300"}`} />
              {status}
            </span>
          </div>
          <p className="text-xs font-mono text-gray-400 mt-0.5">{receiptNumber}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3 text-xs text-gray-500">
            <span>{purchaseDate}</span>
            <span>{buyingCentre}</span>
            <span>{ipc}</span>
            <span>By {purchasingOfficer}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 flex-shrink-0">
          <Link
            href={`/dashboard/farmers/profiles/${farmerId}`}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#1a5c2a] text-white text-sm font-semibold rounded-lg hover:bg-[#134520] transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Farmer
          </Link>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-white text-gray-600 text-sm font-semibold rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print
          </button>
        </div>
      </div>

      {/* ── Two-column layout ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* Left — main content */}
        <div className="lg:col-span-2 space-y-5">

          {/* Farmer */}
          <SectionCard title="Farmer">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-gray-400">{farmerInitials}</span>
              </div>
              <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-4">
                <Field label="Name"        value={farmerName} />
                <Field label="Farmer ID"   value={farmerId} mono />
                <Field label="Phone"       value={farmerPhone} />
                <Field label="Association" value={farmerAssociation} />
                <Field label="District"    value={farmerDistrict} />
              </div>
            </div>
          </SectionCard>

          {/* Commodity */}
          <SectionCard title="Commodity">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-4">
              <Field label="Commodity"       value={commodity} />
              <Field label="Variety"         value={variety} />
              <Field label="Grade"           value={grade} />
              <Field label="Quality"         value={qualityGrade} />
              <Field label="Moisture"        value={moistureContent} />
              <Field label="Bags"            value={numberOfBags} />
              <Field label="Total Weight"    value={`${totalWeight.toLocaleString()} kg`} />
              <Field label="Unit Price"      value={`MWK ${unitPrice.toLocaleString()}/kg`} />
            </div>
            {purchaseNotes && (
              <p className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500 italic">{purchaseNotes}</p>
            )}
          </SectionCard>

          {/* Financials */}
          <SectionCard title="Financials">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              <StatWidget label="Gross"       value={`MWK ${grossAmount.toLocaleString()}`} />
              <StatWidget label="Seed Loan"   value={`- MWK ${seedLoanDeduction.toLocaleString()}`} />
              <StatWidget label="Deductions"  value={`- MWK ${otherDeductions.toLocaleString()}`} />
              <StatWidget label="Net Payable" value={`MWK ${netPayable.toLocaleString()}`} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-4 pt-4 border-t border-gray-100">
              <Field label="Payment Status" value={paymentStatus} />
              <Field label="Method"         value={paymentMethod} />
              {paymentDate      && <Field label="Payment Date"      value={paymentDate} />}
              {paymentReference && <Field label="Reference"         value={paymentReference} mono />}
            </div>
          </SectionCard>

          {/* Goods Receiving */}
          <SectionCard title="Goods Receiving">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-4">
              <Field label="GRN Number"      value={grn.grnNumber} mono />
              <Field label="Warehouse"       value={grn.warehouse} />
              <Field label="Officer"         value={grn.receivingOfficer} />
              <Field label="Date"            value={grn.receivingDate} />
              <Field label="Accepted"        value={`${grn.acceptedQuantity ?? 0} kg`} />
              <Field label="Rejected"        value={`${grn.rejectedQuantity} kg`} />
            </div>
          </SectionCard>

          {/* Warehouse & Batch — side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <SectionCard title="Warehouse">
              <Row label="Name"      value={warehouse.name} />
              <Row label="Location"  value={warehouse.location} />
              <Row label="Bin"       value={warehouse.bin} />
              <Row label="Stack"     value={warehouse.stack} />
              <Row label="Status"    value={warehouse.inventoryStatus} />
            </SectionCard>

            <SectionCard title="Batch">
              <Row label="Batch No." value={batch.batchNumber} mono />
              <Row label="Status"    value={batch.batchStatus} />
              <Row label="Commodity" value={batch.commodity} />
              <Row label="Quantity"  value={batch.quantity ? `${batch.quantity} kg` : "0 kg"} />
              <Row label="Quality"   value={batch.qualityStatus} />
            </SectionCard>
          </div>

          {/* Bags */}
          {bags.length > 0 && (
            <SectionCard title="Bags">
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <table className="w-auto min-w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="px-4 py-3 text-xs font-semibold text-gray-700">Bag No.</th>
                      <th className="px-4 py-3 text-xs font-semibold text-gray-700">Weight</th>
                      <th className="px-4 py-3 text-xs font-semibold text-gray-700">Location</th>
                      <th className="px-4 py-3 text-xs font-semibold text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bags.map((bag) => (
                      <tr key={bag.bagNumber} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3.5 font-mono text-xs font-semibold text-gray-900">{bag.bagNumber}</td>
                        <td className="px-4 py-3.5 text-xs text-gray-400">{bag.weight} kg</td>
                        <td className="px-4 py-3.5 text-xs text-gray-400">{bag.location}</td>
                        <td className="px-4 py-3.5">
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                            {bag.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionCard>
          )}

          {/* Documents */}
          <SectionCard title="Documents" action={
            <button className="text-xs font-semibold text-[#1a5c2a] hover:underline">+ Upload</button>
          }>
            {documents.length > 0 ? (
              <div className="space-y-2">
                {documents.map((doc) => (
                  <div key={doc.id} className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 bg-white">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-900 truncate">{doc.name}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">{doc.type} · {doc.uploadDate}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-gray-400 flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                      {doc.status}
                    </span>
                    <div className="flex gap-2 ml-1">
                      <button className="text-xs font-semibold text-[#1a5c2a] hover:underline">View</button>
                      <button className="text-xs font-semibold text-gray-400 hover:text-red-500 transition-colors">Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400 text-center py-6">No documents attached.</p>
            )}
          </SectionCard>

        </div>

        {/* Right — sidebar */}
        <div className="space-y-5">

          {/* Summary */}
          <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-3">
            <p className="text-sm font-semibold text-gray-700">Approved by</p>
            <p className="text-xl font-bold text-gray-900">{approvedBy || purchasingOfficer}</p>
          </div>

          {/* Activity */}
          <SectionCard title="Activity">
            {timeline && timeline.length > 0 ? (
              <div className="flex flex-col gap-3">
                {timeline.map((item, i) => (
                  <div key={item.id} className="flex items-start gap-3 border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-gray-300 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-800">{item.activity}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">{item.performedBy}</p>
                    </div>
                    <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400 text-center py-4">No activity recorded.</p>
            )}
          </SectionCard>

          {/* Supply chain — completed stages only */}
          <SectionCard title="Supply Chain">
            <div className="flex flex-col gap-3">
              {[
                { label: "Purchase",       date: purchaseDate,       done: true },
                { label: "Goods Received", date: grn.receivingDate,  done: !!grn.grnNumber },
                { label: "Warehoused",     date: grn.receivingDate,  done: warehouse.inventoryStatus === "Stored" },
                { label: "Batch Created",  date: batch.batchCreationDate, done: !!batch.batchNumber },
                { label: "Bags Assigned",  date: batch.batchCreationDate, done: bags.length > 0 },
              ].map((stage) => (
                <div key={stage.label} className="flex items-center justify-between border-b border-gray-50 pb-2.5 last:border-0 last:pb-0">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${stage.done ? "bg-[#1a5c2a]" : "bg-gray-200"}`} />
                    {stage.label}
                  </span>
                  <span className="text-[10px] text-gray-400">{stage.done ? stage.date : "Pending"}</span>
                </div>
              ))}
            </div>
          </SectionCard>

        </div>
      </div>
    </div>
  );
}
