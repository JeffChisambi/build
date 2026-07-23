"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { SEED_FARMERS, SEED_HISTORY, SEED_TRACEABILITY, SEED_DOCUMENTS } from "@/lib/mockFarmers";

// ── Stat widget — mirrors admin MetricWidget ───────────────────
function StatWidget({ label, value }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-3">
      <p className="text-sm font-semibold text-gray-700">{label}</p>
      <p className="text-xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

// ── Section card — mirrors admin card style ────────────────────
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

// ── Label / value pair ─────────────────────────────────────────
function Field({ label, value }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-semibold text-gray-400">{label}</span>
      <span className="text-sm font-medium text-gray-900">{value || "—"}</span>
    </div>
  );
}

// ── Inline row (used in Organisation) ─────────────────────────
function Row({ label, value, mono }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0">
      <span className="text-xs font-semibold text-gray-400">{label}</span>
      <span className={`text-sm font-medium text-gray-900 text-right ${mono ? "font-mono text-[#1a5c2a]" : ""}`}>
        {value || "—"}
      </span>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────
export default function FarmerProfilePage() {
  const { id } = useParams();
  const router = useRouter();

  const farmer = SEED_FARMERS.find((f) => f.id === id);
  const traceability = SEED_TRACEABILITY.filter((t) => t.farmerId === id);
  const documents = SEED_DOCUMENTS.filter((d) => d.farmerId === id);
  const history = SEED_HISTORY
    .filter((h) => h.farmerId === id)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  if (!farmer) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] gap-3">
        <p className="text-sm font-semibold text-gray-900">Farmer not found</p>
        <p className="text-xs text-gray-500">No record for ID {id}.</p>
        <button
          onClick={() => router.push("/dashboard/farmers/profiles")}
          className="mt-2 px-4 py-2 bg-[#1a5c2a] text-white text-sm font-semibold rounded-lg hover:bg-[#134520] transition-colors"
        >
          Back to Profiles
        </button>
      </div>
    );
  }

  const totalVolume = traceability.reduce((s, t) => s + t.quantity, 0);
  const totalValue  = traceability.reduce((s, t) => s + t.purchaseValue, 0);
  const lastSale    = traceability.length > 0
    ? new Date(Math.max(...traceability.map(t => new Date(t.purchaseDate)))).toISOString().split("T")[0]
    : "—";

  return (
    <div className="space-y-5 pb-12 max-w-5xl mx-auto">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
        <Link href="/dashboard/farmers/profiles" className="hover:text-gray-700 transition-colors">Profiles</Link>
        <span>/</span>
        <span className="text-gray-700">{farmer.fullName}</span>
      </div>

      {/* ── Profile header ── */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col sm:flex-row items-start gap-6">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
          <span className="text-lg font-bold text-gray-400">
            {farmer.fullName.split(" ").map(n => n[0]).slice(0, 2).join("")}
          </span>
        </div>

        {/* Identity */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5 flex-wrap">
            <h1 className="text-lg font-bold text-gray-900">{farmer.fullName}</h1>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500">
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${farmer.status === "Active" ? "bg-[#1a5c2a]" : "bg-gray-300"}`} />
              {farmer.status}
            </span>
          </div>
          <p className="text-xs font-mono text-gray-400 mt-0.5">{farmer.id}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3 text-xs text-gray-500">
            <span>Registered {farmer.registrationDate}</span>
            <span>By {farmer.registrationOfficer}</span>
            <span>{farmer.district}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 flex-shrink-0">
          <button className="flex items-center gap-1.5 px-4 py-2 bg-[#1a5c2a] text-white text-sm font-semibold rounded-lg hover:bg-[#134520] transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Edit
          </button>
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

          {/* Basic information */}
          <SectionCard title="Basic Information">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-4">
              <Field label="Full Name"    value={farmer.fullName} />
              <Field label="Gender"       value={farmer.gender} />
              <Field label="Date of Birth" value={farmer.dob} />
              <Field label="National ID"  value={farmer.nationalId} />
              <Field label="Phone"        value={farmer.phone} />
              <Field label="Alt Phone"    value={farmer.altPhone} />
            </div>
          </SectionCard>

          {/* Location */}
          <SectionCard title="Location">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-4">
              <Field label="District"    value={farmer.district} />
              <Field label="T/A"         value={farmer.ta} />
              <Field label="EPA"         value={farmer.epa} />
              <Field label="Section"     value={farmer.section} />
              <Field label="Village"     value={farmer.village} />
              <Field label="GPS"         value={farmer.gps} />
            </div>
          </SectionCard>

          {/* Farm information */}
          <SectionCard title="Farm Information">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-4">
              <Field label="Farm Size"         value={`${farmer.farmSize || 0} ${farmer.unit}`} />
              <Field label="Primary Crops"     value={farmer.primaryCrops?.join(", ")} />
              <Field label="Secondary Crops"   value={farmer.secondaryCrops?.join(", ")} />
              <Field label="Production Season" value={farmer.productionSeason} />
              <Field label="Irrigation"        value="Rain-fed" />
            </div>
          </SectionCard>

          {/* Traceability */}
          <SectionCard
            title="Traceability"
            action={
              <button className="text-xs font-semibold text-[#1a5c2a] hover:underline">
                View All
              </button>
            }
          >
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              <StatWidget label="Purchases"   value={traceability.length} />
              <StatWidget label="Volume (MT)" value={totalVolume} />
              <StatWidget label="Value (MWK)" value={totalValue.toLocaleString()} />
            </div>

            {/* Table */}
            {traceability.length > 0 ? (
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <table className="w-auto min-w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="px-4 py-3 text-xs font-semibold text-gray-700">Batch</th>
                      <th className="px-4 py-3 text-xs font-semibold text-gray-700">Commodity</th>
                      <th className="px-4 py-3 text-xs font-semibold text-gray-700 text-right">Qty</th>
                      <th className="px-4 py-3 text-xs font-semibold text-gray-700">Date</th>
                      <th className="px-4 py-3 text-xs font-semibold text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {traceability.map((t) => (
                      <tr key={t.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3.5">
                          <p className="text-xs font-semibold text-gray-900">{t.batchNumber}</p>
                          <p className="text-[10px] font-mono text-gray-400 mt-0.5">{t.bagNumber}</p>
                        </td>
                        <td className="px-4 py-3.5 text-xs text-gray-400">{t.commodity}</td>
                        <td className="px-4 py-3.5 text-xs text-gray-400 text-right">{t.quantity}</td>
                        <td className="px-4 py-3.5 text-xs text-gray-400">{t.purchaseDate}</td>
                        <td className="px-4 py-3.5">
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                            {t.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-sm text-gray-400 text-center py-6">No traceability records.</p>
            )}
          </SectionCard>

          {/* Documents */}
          <SectionCard
            title="Documents"
            action={
              <button className="text-xs font-semibold text-[#1a5c2a] hover:underline">
                + Upload
              </button>
            }
          >
            {documents.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {documents.map((doc) => (
                  <div key={doc.id} className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 bg-white">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-900 truncate">{doc.name}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">{doc.type} · {doc.uploadDate}</p>
                      <div className="flex gap-3 mt-2">
                        <button className="text-xs font-semibold text-[#1a5c2a] hover:underline">View</button>
                        <button className="text-xs font-semibold text-gray-400 hover:text-red-500 transition-colors">Remove</button>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-gray-400 flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                      {doc.status}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400 text-center py-6">No documents uploaded.</p>
            )}
          </SectionCard>
        </div>

        {/* Right — sidebar */}
        <div className="space-y-5">

          {/* Organisation */}
          <SectionCard title="Organisation">
            <Row label="Association"   value={farmer.association} />
            <Row label="Club"          value={farmer.club} />
            <Row label="Farmer Group"  value={farmer.group} />
            <Row label="Member No."    value={farmer.memberNo} mono />
          </SectionCard>

          {/* Last sale — single stat */}
          <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-3">
            <p className="text-sm font-semibold text-gray-700">Last Sale</p>
            <p className="text-xl font-bold text-gray-900">{lastSale}</p>
          </div>

          {/* Activity timeline */}
          <SectionCard
            title="Activity"
            action={
              <button className="text-xs font-semibold text-[#1a5c2a] hover:underline">
                View All
              </button>
            }
          >
            {history.length > 0 ? (
              <div className="flex flex-col gap-3">
                {history.slice(0, 5).map((item) => (
                  <div key={item.id} className="flex items-start gap-3 border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-gray-300 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-800">{item.type}</p>
                      <p className="text-[10px] text-gray-500 mt-0.5">{item.description}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">{item.officer}</p>
                    </div>
                    <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap">
                      {new Date(item.date).toLocaleDateString([], { month: "short", day: "numeric" })}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400 text-center py-4">No recent activity.</p>
            )}
          </SectionCard>

        </div>
      </div>
    </div>
  );
}
