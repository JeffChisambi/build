"use client";

import React, { useState } from "react";
import { BarChart, HorizontalBarChart, StatCard, ModuleActionCard, PeriodPicker } from "./Charts";
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

// ── Main Component ────────────────────────────────────────────
export default function HeadOfficeDashboard({ firstName }) {
  const router = useRouter();
  const [period, setPeriod] = useState("6M");
  const d = PERIOD_DATA[period];

  const kpis = [
    { title: "Registered Farmers",           value: "142,500",  trend: "+12%", trendUp: true,  subtext: "Nationally registered",  icon: Icons.farmer    },
    { title: "National Commodity Purchased", value: "45,200 t", trend: "+18%", trendUp: true,  subtext: "Season to date",         icon: Icons.purchase  },
    { title: "National Warehouse Stock",     value: "18,450 t", trend: "+4%",  trendUp: true,  subtext: "In all warehouses",      icon: Icons.warehouse },
    { title: "Traceability Coverage",        value: "45,200",   trend: "+18%", trendUp: true,  subtext: "Grain batches tracked",  icon: Icons.clipboard },
  ];

  const activities = [
    { action: "Large Procurement",  detail: "Mzuzu IPC purchased 450t of Maize",                time: "2 hours ago" },
    { action: "New IPC Activated",  detail: "Kasungu South is now online and operational",       time: "5 hours ago" },
    { action: "Stock Transfer",     detail: "800t moved from Mchinji to Lilongwe Central depot", time: "1 day ago"   },
    { action: "Delivery Confirmed", detail: "Shipment DEL-1240 received and verified",           time: "1 day ago"   },
    { action: "Sync Completed",     detail: "All 24 IPCs synchronised successfully",             time: "2 days ago"  },
  ];

  return (
    <div className="space-y-8 max-w-[1600px] mx-auto animate-in fade-in duration-500 pb-16 p-6 lg:p-8">

      {/* 1. Page Header */}
      <div className="flex items-center justify-between bg-white rounded-xl p-8 shadow-sm">
        <div>
          <p className="text-xs font-semibold text-[#1a5c2e] uppercase tracking-[0.2em] mb-2">NASFAM GTMS</p>
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">National Overview</h1>
          <p className="text-sm text-gray-500 mt-1.5">
            {new Date().toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
        <div className="text-right hidden sm:block">
          <p className="text-base font-bold text-gray-900">{firstName}</p>
          <p className="text-sm text-gray-500 mt-0.5">Head Office Manager</p>
        </div>
      </div>

      {/* 2. KPI Cards */}
      <section>
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Strategic Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
          {kpis.map((kpi, idx) => <StatCard key={idx} {...kpi} />)}
        </div>
      </section>

      {/* 3. Analytics Charts */}
      <section>
        {/* Section header with period picker */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Analytics</h2>
          <PeriodPicker value={period} onChange={setPeriod} options={PERIOD_OPTIONS} />
        </div>

        {/* Chart grid — key={period} remounts charts, triggering fresh bar animation */}
        <div key={period} className="grid grid-cols-1 lg:grid-cols-3 gap-6" style={{ animation: "chartFadeIn 0.35s ease-out" }}>

          {/* National Procurement Trend */}
          <div className="bg-white rounded-xl p-7 shadow-sm">
            <h3 className="text-base font-bold text-gray-900 mb-1">National Procurement Trend</h3>
            <p className="text-xs text-gray-500 mb-6">
              Total commodity purchases — <span className="font-medium text-gray-700">{d.label}</span>
            </p>
            <BarChart data={d.purchases} height="h-64" />
          </div>

          {/* IPC Performance */}
          <div className="bg-white rounded-xl p-7 shadow-sm">
            <h3 className="text-base font-bold text-gray-900 mb-1">IPC Performance Comparison</h3>
            <p className="text-xs text-gray-500 mb-6">
              Top IPC purchases — <span className="font-medium text-gray-700">{d.label}</span>
            </p>
            <HorizontalBarChart data={d.ipc} />
          </div>

          {/* Commodity Distribution */}
          <div className="bg-white rounded-xl p-7 shadow-sm">
            <h3 className="text-base font-bold text-gray-900 mb-1">Commodity Distribution</h3>
            <p className="text-xs text-gray-500 mb-6">
              Purchases by commodity — <span className="font-medium text-gray-700">{d.label}</span>
            </p>
            <HorizontalBarChart data={d.commodity} />
          </div>

        </div>
      </section>

      {/* 4. Recent Activity */}
      <section>
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Operations Feed</h2>
        <div className="bg-white rounded-xl p-7 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-base font-bold text-gray-900">National Activity</h3>
            <button onClick={() => router.push("/dashboard/reports")} className="text-xs font-bold text-[#1a5c2e] hover:underline">
              View Full Logs →
            </button>
          </div>
          <div className="space-y-6">
            {activities.map((activity, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded bg-[#1a5c2e]/10 flex items-center justify-center text-[#1a5c2e] flex-shrink-0 mt-0.5">
                  {Icons.infoCircle}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{activity.detail}</p>
                  <p className="text-xs text-gray-400 mt-1.5">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Quick Actions */}
      <section>
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <ModuleActionCard icon={Icons.document}  title="National Reports"       description="View and generate comprehensive national procurement and traceability reports." onClick={() => router.push("/dashboard/reports")} />
          <ModuleActionCard icon={Icons.clipboard} title="Traceability Overview"  description="Trace batches from origin IPC to current warehouse destination."              onClick={() => router.push("/dashboard/traceability")} />
          <ModuleActionCard icon={Icons.data}      title="Advanced Analytics"     description="Dive deep into performance metrics, yield estimates, and forecasts."           onClick={() => router.push("/dashboard/reports/national")} />
          <ModuleActionCard icon={Icons.warehouse} title="Warehouse Summary"      description="Check live stock levels and capacity across all national warehouses."         onClick={() => router.push("/dashboard/reports/warehouse-statistics")} />
        </div>
      </section>

    </div>
  );
}
