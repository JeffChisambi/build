"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { SEED_PURCHASES } from "@/lib/mockPurchases";
import { use } from "react";

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

function Card({ title, children }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100">
        <h2 className="text-sm font-semibold text-gray-700">{title}</h2>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

const STAGES = ["Purchased", "Goods Received", "Warehoused", "Payment Settled"];

export default function PurchaseDetailPage({ params }) {
  const { id } = use(params);
  const purchase = SEED_PURCHASES.find((p) => p.id === id);
  if (!purchase) notFound();

  const {
    receiptNumber, status, purchaseDate, buyingCentre, purchasingOfficer,
    farmerId, farmerName, farmerPhone, farmerDistrict,
    commodity, variety, numberOfBags, totalWeight, unitPrice,
    grossAmount, seedLoanDeduction, otherDeductions, netPayable,
    paymentStatus, paymentMethod,
    grn, warehouse,
  } = purchase;

  const stageIndex =
    paymentStatus === "Paid" ? 3 :
    warehouse?.inventoryStatus === "Stored" ? 2 :
    grn?.grnNumber ? 1 : 0;

  return (
    <div className="space-y-5 pb-12 max-w-3xl mx-auto">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
        <Link href="/dashboard/purchasing" className="hover:text-gray-700 transition-colors">Purchasing</Link>
        <span>/</span>
        <span className="text-gray-700">{id}</span>
      </div>

      {/* Header */}
      <div className="bg-white rounded-xl border border-gray-200 px-6 py-5 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-base font-bold text-gray-900">{receiptNumber}</h1>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500">
              <span className={`w-1.5 h-1.5 rounded-full ${status === "Completed" ? "bg-[#1a5c2a]" : "bg-gray-300"}`} />
              {status}
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">{purchaseDate} · {buyingCentre} · {purchasingOfficer}</p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <Link
            href={`/dashboard/farmers/profiles/${farmerId}`}
            className="px-3.5 py-2 bg-[#1a5c2a] text-white text-xs font-semibold rounded-lg hover:bg-[#134520] transition-colors"
          >
            View Farmer
          </Link>
          <button className="px-3.5 py-2 bg-white text-gray-600 text-xs font-semibold rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            Print
          </button>
        </div>
      </div>

      {/* Key numbers */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Total Weight",  value: `${totalWeight.toLocaleString()} kg` },
          { label: "Bags",          value: numberOfBags },
          { label: "Unit Price",    value: `MWK ${unitPrice.toLocaleString()}/kg` },
          { label: "Net Payable",   value: `MWK ${netPayable.toLocaleString()}` },
        ].map(({ label, value }) => (
          <div key={label} className="bg-white rounded-xl border border-gray-200 px-5 py-4 flex flex-col gap-2">
            <p className="text-xs font-semibold text-gray-400">{label}</p>
            <p className="text-base font-bold text-gray-900">{value}</p>
          </div>
        ))}
      </div>

      {/* Farmer + Commodity */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Card title="Farmer">
          <div className="grid grid-cols-1 gap-4">
            <Field label="Name"     value={farmerName} />
            <Field label="Phone"    value={farmerPhone} />
            <Field label="District" value={farmerDistrict} />
          </div>
        </Card>

        <Card title="Commodity">
          <div className="grid grid-cols-2 gap-4">
            <Field label="Type"    value={commodity} />
            <Field label="Variety" value={variety} />
          </div>
        </Card>
      </div>

      {/* Payment */}
      <Card title="Payment">
        <div className="space-y-2.5">
          <div className="flex justify-between text-sm text-gray-700">
            <span>Gross amount</span>
            <span className="font-semibold">MWK {grossAmount.toLocaleString()}</span>
          </div>
          {seedLoanDeduction > 0 && (
            <div className="flex justify-between text-sm text-gray-500">
              <span>Seed loan deduction</span>
              <span>− MWK {seedLoanDeduction.toLocaleString()}</span>
            </div>
          )}
          {otherDeductions > 0 && (
            <div className="flex justify-between text-sm text-gray-500">
              <span>Other deductions</span>
              <span>− MWK {otherDeductions.toLocaleString()}</span>
            </div>
          )}
          <div className="flex justify-between pt-3 mt-1 border-t border-gray-100 text-sm font-bold text-gray-900">
            <span>Net payable</span>
            <span>MWK {netPayable.toLocaleString()}</span>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${paymentStatus === "Paid" ? "bg-[#1a5c2a]" : "bg-gray-300"}`} />
            <span className="text-xs font-semibold text-gray-600">{paymentStatus}</span>
          </div>
          {paymentMethod && (
            <span className="text-xs text-gray-400">{paymentMethod}</span>
          )}
        </div>
      </Card>

      {/* Supply chain progress */}
      <Card title="Progress">
        <div className="flex items-start gap-0">
          {STAGES.map((stage, i) => {
            const done = i <= stageIndex;
            const active = i === stageIndex;
            return (
              <div key={stage} className="flex-1 flex flex-col items-center gap-2 relative">
                {/* connector line */}
                {i < STAGES.length - 1 && (
                  <div className={`absolute top-2.5 left-1/2 w-full h-px ${i < stageIndex ? "bg-[#1a5c2a]" : "bg-gray-200"}`} />
                )}
                <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 z-10 flex items-center justify-center
                  ${done ? "border-[#1a5c2a] bg-[#1a5c2a]" : "border-gray-200 bg-white"}`}>
                  {done && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className={`text-[10px] font-semibold text-center leading-tight
                  ${active ? "text-[#1a5c2a]" : done ? "text-gray-500" : "text-gray-300"}`}>
                  {stage}
                </span>
              </div>
            );
          })}
        </div>
      </Card>

    </div>
  );
}
