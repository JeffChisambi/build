"use client";

import React, { useState } from "react";
import { BarChart, HorizontalBarChart, StatCard, PeriodPicker } from "./Charts";
import { Icons } from "./Icons";
import { useRouter } from "next/navigation";

// ── Period data sets ─────────────────────────────────────────
const PERIOD_DATA = {
  "7D": {
    label: "Last 7 days",
    purchases: [
      { label: "Mon", value: 180,  color: "bg-[#1a5c2e]" },
      { label: "Tue", value: 240,  color: "bg-[#1a5c2e]" },
      { label: "Wed", value: 380,  color: "bg-[#1a5c2e]" },
      { label: "Thu", value: 520,  color: "bg-[#1a5c2e]" },
      { label: "Fri", value: 850,  color: "bg-[#1a5c2e]" },
      { label: "Sat", value: 420,  color: "bg-[#1a5c2e]" },
      { label: "Sun", value: 310,  color: "bg-[#1a5c2e]" },
    ],
    ipc: [
      { label: "Mzuzu Central",  value: 1240, displayValue: "1,240 t",  color: "bg-[#1a5c2e]" },
      { label: "Lilongwe South", value: 985,  displayValue: "985 t",    color: "bg-[#1a5c2e]/[0.85]" },
      { label: "Blantyre East",  value: 720,  displayValue: "720 t",    color: "bg-[#1a5c2e]/[0.70]" },
      { label: "Kasungu North",  value: 640,  displayValue: "640 t",    color: "bg-[#1a5c2e]/[0.55]" },
      { label: "Mchinji West",   value: 410,  displayValue: "410 t",    color: "bg-[#1a5c2e]/[0.40]" },
    ],
    commodity: [
      { label: "Maize",      value: 850,  displayValue: "850 t",   color: "bg-[#1a5c2e]" },
      { label: "Groundnuts", value: 520,  displayValue: "520 t",   color: "bg-[#1a5c2e]/[0.85]" },
      { label: "Soybeans",   value: 310,  displayValue: "310 t",   color: "bg-[#1a5c2e]/[0.70]" },
      { label: "Rice",       value: 165,  displayValue: "165 t",   color: "bg-[#1a5c2e]/[0.55]" },
    ],
  },
  "1M": {
    label: "Last 30 days",
    purchases: [
      { label: "Wk 1", value: 2200,  color: "bg-[#1a5c2e]" },
      { label: "Wk 2", value: 3800,  color: "bg-[#1a5c2e]" },
      { label: "Wk 3", value: 5100,  color: "bg-[#1a5c2e]" },
      { label: "Wk 4", value: 4600,  color: "bg-[#1a5c2e]" },
    ],
    ipc: [
      { label: "Mzuzu Central",  value: 4800, displayValue: "4,800 t",  color: "bg-[#1a5c2e]" },
      { label: "Lilongwe South", value: 3900, displayValue: "3,900 t",  color: "bg-[#1a5c2e]/[0.85]" },
      { label: "Blantyre East",  value: 2700, displayValue: "2,700 t",  color: "bg-[#1a5c2e]/[0.70]" },
      { label: "Kasungu North",  value: 2200, displayValue: "2,200 t",  color: "bg-[#1a5c2e]/[0.55]" },
      { label: "Mchinji West",   value: 1600, displayValue: "1,600 t",  color: "bg-[#1a5c2e]/[0.40]" },
    ],
    commodity: [
      { label: "Maize",      value: 3200, displayValue: "3,200 t",  color: "bg-[#1a5c2e]" },
      { label: "Groundnuts", value: 2100, displayValue: "2,100 t",  color: "bg-[#1a5c2e]/[0.85]" },
      { label: "Soybeans",   value: 1300, displayValue: "1,300 t",  color: "bg-[#1a5c2e]/[0.70]" },
      { label: "Rice",       value: 600,  displayValue: "600 t",    color: "bg-[#1a5c2e]/[0.55]" },
    ],
  },
  "3M": {
    label: "Last 3 months",
    purchases: [
      { label: "Jan", value: 1200,  color: "bg-[#1a5c2e]" },
      { label: "Feb", value: 2400,  color: "bg-[#1a5c2e]" },
      { label: "Mar", value: 3800,  color: "bg-[#1a5c2e]" },
    ],
    ipc: [
      { label: "Mzuzu Central",  value: 8500, displayValue: "8,500 t",  color: "bg-[#1a5c2e]" },
      { label: "Lilongwe South", value: 6800, displayValue: "6,800 t",  color: "bg-[#1a5c2e]/[0.85]" },
      { label: "Blantyre East",  value: 4900, displayValue: "4,900 t",  color: "bg-[#1a5c2e]/[0.70]" },
      { label: "Kasungu North",  value: 4100, displayValue: "4,100 t",  color: "bg-[#1a5c2e]/[0.55]" },
      { label: "Mchinji West",   value: 2800, displayValue: "2,800 t",  color: "bg-[#1a5c2e]/[0.40]" },
    ],
    commodity: [
      { label: "Maize",      value: 5200, displayValue: "5,200 t",  color: "bg-[#1a5c2e]" },
      { label: "Groundnuts", value: 3500, displayValue: "3,500 t",  color: "bg-[#1a5c2e]/[0.85]" },
      { label: "Soybeans",   value: 2100, displayValue: "2,100 t",  color: "bg-[#1a5c2e]/[0.70]" },
      { label: "Rice",       value: 900,  displayValue: "900 t",    color: "bg-[#1a5c2e]/[0.55]" },
    ],
  },
  "6M": {
    label: "Last 6 months",
    purchases: [
      { label: "Jan", value: 1200,  color: "bg-[#1a5c2e]" },
      { label: "Feb", value: 2400,  color: "bg-[#1a5c2e]" },
      { label: "Mar", value: 3800,  color: "bg-[#1a5c2e]" },
      { label: "Apr", value: 5200,  color: "bg-[#1a5c2e]" },
      { label: "May", value: 8500,  color: "bg-[#1a5c2e]" },
      { label: "Jun", value: 12400, color: "bg-[#1a5c2e]" },
    ],
    ipc: [
      { label: "Mzuzu Central",  value: 11000, displayValue: "11,000 t", color: "bg-[#1a5c2e]" },
      { label: "Lilongwe South", value: 8500,  displayValue: "8,500 t",  color: "bg-[#1a5c2e]/[0.85]" },
      { label: "Blantyre East",  value: 6100,  displayValue: "6,100 t",  color: "bg-[#1a5c2e]/[0.70]" },
      { label: "Kasungu North",  value: 5400,  displayValue: "5,400 t",  color: "bg-[#1a5c2e]/[0.55]" },
      { label: "Mchinji West",   value: 3600,  displayValue: "3,600 t",  color: "bg-[#1a5c2e]/[0.40]" },
    ],
    commodity: [
      { label: "Maize",      value: 7200, displayValue: "7,200 t",  color: "bg-[#1a5c2e]" },
      { label: "Groundnuts", value: 4500, displayValue: "4,500 t",  color: "bg-[#1a5c2e]/[0.85]" },
      { label: "Soybeans",   value: 2700, displayValue: "2,700 t",  color: "bg-[#1a5c2e]/[0.70]" },
      { label: "Rice",       value: 1300, displayValue: "1,300 t",  color: "bg-[#1a5c2e]/[0.55]" },
    ],
  },
  "1Y": {
    label: "Last 12 months",
    purchases: [
      { label: "Jan", value: 1200,  color: "bg-[#1a5c2e]" },
      { label: "Feb", value: 2400,  color: "bg-[#1a5c2e]" },
      { label: "Mar", value: 3800,  color: "bg-[#1a5c2e]" },
      { label: "Apr", value: 5200,  color: "bg-[#1a5c2e]" },
      { label: "May", value: 8500,  color: "bg-[#1a5c2e]" },
      { label: "Jun", value: 12400, color: "bg-[#1a5c2e]" },
      { label: "Jul", value: 9800,  color: "bg-[#1a5c2e]" },
      { label: "Aug", value: 7600,  color: "bg-[#1a5c2e]" },
      { label: "Sep", value: 5400,  color: "bg-[#1a5c2e]" },
      { label: "Oct", value: 3200,  color: "bg-[#1a5c2e]" },
      { label: "Nov", value: 1800,  color: "bg-[#1a5c2e]" },
      { label: "Dec", value: 900,   color: "bg-[#1a5c2e]" },
    ],
    ipc: [
      { label: "Mzuzu Central",  value: 12400, displayValue: "12,400 t", color: "bg-[#1a5c2e]" },
      { label: "Lilongwe South", value: 9850,  displayValue: "9,850 t",  color: "bg-[#1a5c2e]/[0.85]" },
      { label: "Blantyre East",  value: 7200,  displayValue: "7,200 t",  color: "bg-[#1a5c2e]/[0.70]" },
      { label: "Kasungu North",  value: 6400,  displayValue: "6,400 t",  color: "bg-[#1a5c2e]/[0.55]" },
      { label: "Mchinji West",   value: 4100,  displayValue: "4,100 t",  color: "bg-[#1a5c2e]/[0.40]" },
    ],
    commodity: [
      { label: "Maize",      value: 8500, displayValue: "8,500 t",  color: "bg-[#1a5c2e]" },
      { label: "Groundnuts", value: 5200, displayValue: "5,200 t",  color: "bg-[#1a5c2e]/[0.85]" },
      { label: "Soybeans",   value: 3100, displayValue: "3,100 t",  color: "bg-[#1a5c2e]/[0.70]" },
      { label: "Rice",       value: 1650, displayValue: "1,650 t",  color: "bg-[#1a5c2e]/[0.55]" },
    ],
  },
};

const PERIOD_OPTIONS = [
  { value: "7D", label: "7D" },
  { value: "1M", label: "1M" },
  { value: "3M", label: "3M" },
  { value: "6M", label: "6M" },
  { value: "1Y", label: "1Y" },
];

// ── Local ModuleCard — matches admin dashboard style ──────────
function ModuleCard({ icon, title, description, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-md border border-gray-200 p-6 transition-all text-left group"
    >
      <div className="flex items-start gap-4">
        <div className="text-gray-500 group-hover:text-gray-700 transition-colors mt-0.5">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
        <div className="text-gray-400 group-hover:text-gray-600 transition-colors mt-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </button>
  );
}

// ── Main Component ────────────────────────────────────────────
export default function HeadOfficeDashboard({ firstName }) {
  const router = useRouter();
  const [period, setPeriod] = useState("6M");
  const d = PERIOD_DATA[period];

  const kpis = [
    {
      title: "Registered Farmers",
      value: "142,500",
      trend: "+12%",
      trendUp: true,
      icon: (
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5" />
        </svg>
      ),
    },
    {
      title: "National Commodity Purchased",
      value: "45,200 t",
      trend: "+18%",
      trendUp: true,
      icon: (
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 6h-2.18c.07-.44.18-.88.18-1.34C18 2.54 15.46 0 13.34 0c-.21 0-.5.02-.68.05C11.98.17 11.29.7 10.76 1.4L9 3.5 7.24 1.4C6.71.7 6.02.17 5.34.05 5.16.02 4.87 0 4.66 0 2.54 0 0 2.54 0 4.66c0 .46.11.9.18 1.34H0v13c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-7-4c.89 0 2 1.11 2 2.66 0 .4-.14.77-.28 1.11L12 8.46l-2.72-2.7C9.14 5.43 9 5.06 9 4.66 9 3.11 10.11 2 11 2zm5 16H4V8h4.96l3.04 3 3.04-3H18z" />
        </svg>
      ),
    },
    {
      title: "National Warehouse Stock",
      value: "18,450 t",
      trend: "+4%",
      trendUp: true,
      icon: (
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3C6.49 3 2 7.49 2 13v6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-6c0-5.51-4.49-10-10-10m4 12H8v-2h8zm-8 4v-2h8v2zm12 0h-2v-6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v6H4v-6c0-4.41 3.59-8 8-8s8 3.59 8 8z" />
        </svg>
      ),
    },
    {
      title: "Traceability Coverage",
      value: "45,200",
      trend: "+18%",
      trendUp: true,
      icon: (
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 11h-3V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13c0 1.65 1.35 3 3 3h14c1.65 0 3-1.35 3-3v-6c0-.55-.45-1-1-1M5 19c-.55 0-1-.45-1-1V5h12v13a3 3 0 0 0 .17 1zm15-1c0 .55-.45 1-1 1s-1-.45-1-1v-5h2z" /><path d="M6 7h8v2H6zm0 4h8v2H6zm5 4h3v2h-3z" />
        </svg>
      ),
    },
  ];

  const activities = [
    { action: "Large Procurement",  detail: "Mzuzu IPC purchased 450t of Maize",                time: "2 hours ago" },
    { action: "New IPC Activated",  detail: "Kasungu South is now online and operational",       time: "5 hours ago" },
    { action: "Stock Transfer",     detail: "800t moved from Mchinji to Lilongwe Central depot", time: "1 day ago"   },
    { action: "Delivery Confirmed", detail: "Shipment DEL-1240 received and verified",           time: "1 day ago"   },
    { action: "Sync Completed",     detail: "All 24 IPCs synchronised successfully",             time: "2 days ago"  },
  ];

  return (
    <div className="p-6 space-y-8 max-w-[1400px] mx-auto">

      {/* ── KPI Metric Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {kpis.map((kpi, idx) => (
          <StatCard key={idx} {...kpi} />
        ))}
      </div>

      {/* ── National Procurement Chart (2/3) + Activity Feed (1/3) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* Procurement trend chart — spans 2 columns */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-700">National Procurement Trend</h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Total commodity purchases —{" "}
                <span className="font-medium text-gray-600">{d.label}</span>
              </p>
            </div>
            <PeriodPicker value={period} onChange={setPeriod} options={PERIOD_OPTIONS} />
          </div>
          <div key={period} style={{ animation: "chartFadeIn 0.35s ease-out" }}>
            <BarChart data={d.purchases} height="h-52" />
          </div>
        </div>

        {/* National Activity feed — spans 1 column */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-700">National Activity</h3>
            <button
              onClick={() => router.push("/dashboard/reports")}
              className="text-xs text-[#1a5c2e] font-semibold hover:underline"
            >
              View All
            </button>
          </div>
          <div className="flex flex-col gap-3 flex-1">
            {activities.map((activity, i) => (
              <div
                key={i}
                className="flex items-start gap-3 border-b border-gray-50 pb-3 last:border-0 last:pb-0"
              >
                <div className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0 bg-gray-300" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-gray-800">{activity.action}</p>
                  <p className="text-[10px] text-gray-500 mt-0.5 leading-relaxed">{activity.detail}</p>
                </div>
                <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── IPC Performance + Commodity Distribution ── */}
      <div key={`charts-${period}`} className="grid grid-cols-1 lg:grid-cols-2 gap-4" style={{ animation: "chartFadeIn 0.35s ease-out" }}>

        {/* IPC Performance */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="text-sm font-semibold text-gray-700 mb-1">IPC Performance Comparison</h3>
          <p className="text-xs text-gray-400 mb-5">
            Top IPC purchases — <span className="font-medium text-gray-600">{d.label}</span>
          </p>
          <HorizontalBarChart data={d.ipc} />
        </div>

        {/* Commodity Distribution */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="text-sm font-semibold text-gray-700 mb-1">Commodity Distribution</h3>
          <p className="text-xs text-gray-400 mb-5">
            Purchases by commodity — <span className="font-medium text-gray-600">{d.label}</span>
          </p>
          <HorizontalBarChart data={d.commodity} />
        </div>
      </div>

      {/* ── Quick Actions — admin ModuleCard style ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <ModuleCard
          icon={Icons.document}
          title="National Reports"
          description="View and generate comprehensive national procurement and traceability reports."
          onClick={() => router.push("/dashboard/reports")}
        />
        <ModuleCard
          icon={Icons.clipboard}
          title="Traceability Overview"
          description="Trace batches from origin IPC to current warehouse destination."
          onClick={() => router.push("/dashboard/traceability")}
        />
        <ModuleCard
          icon={Icons.data}
          title="Advanced Analytics"
          description="Dive deep into performance metrics, yield estimates, and forecasts."
          onClick={() => router.push("/dashboard/reports/national")}
        />
        <ModuleCard
          icon={Icons.warehouse}
          title="Warehouse Summary"
          description="Check live stock levels and capacity across all national warehouses."
          onClick={() => router.push("/dashboard/reports/warehouse-statistics")}
        />
      </div>

    </div>
  );
}
