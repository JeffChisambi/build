"use client";

import React, { useState } from "react";
import { BarChart, HorizontalBarChart, StatCard, ModuleActionCard, PeriodPicker } from "./Charts";
import { Icons } from "./Icons";
import { useRouter } from "next/navigation";
import TodayWorkflow from "./TodayWorkflow";

// ── Period data sets ─────────────────────────────────────────
const PURCHASE_DATA = {
  "7D": {
    label: "Last 7 days",
    data: [
      { label: "Mon", value: 12, color: "bg-[#1a5c2a]" },
      { label: "Tue", value: 18, color: "bg-[#1a5c2a]" },
      { label: "Wed", value: 24, color: "bg-[#1a5c2a]" },
      { label: "Thu", value: 15, color: "bg-[#1a5c2a]" },
      { label: "Fri", value: 28, color: "bg-[#1a5c2a]" },
      { label: "Sat", value: 35, color: "bg-[#1a5c2a]" },
      { label: "Sun", value: 20, color: "bg-[#1a5c2a]" },
    ],
  },
  "1M": {
    label: "Last 30 days",
    data: [
      { label: "Wk 1", value: 85,  color: "bg-[#1a5c2a]" },
      { label: "Wk 2", value: 124, color: "bg-[#1a5c2a]" },
      { label: "Wk 3", value: 98,  color: "bg-[#1a5c2a]" },
      { label: "Wk 4", value: 137, color: "bg-[#1a5c2a]" },
    ],
  },
  "3M": {
    label: "Last 3 months",
    data: [
      { label: "Jan", value: 380, color: "bg-[#1a5c2a]" },
      { label: "Feb", value: 520, color: "bg-[#1a5c2a]" },
      { label: "Mar", value: 445, color: "bg-[#1a5c2a]" },
    ],
  },
  "6M": {
    label: "Last 6 months",
    data: [
      { label: "Jan", value: 380, color: "bg-[#1a5c2a]" },
      { label: "Feb", value: 520, color: "bg-[#1a5c2a]" },
      { label: "Mar", value: 445, color: "bg-[#1a5c2a]" },
      { label: "Apr", value: 610, color: "bg-[#1a5c2a]" },
      { label: "May", value: 780, color: "bg-[#1a5c2a]" },
      { label: "Jun", value: 940, color: "bg-[#1a5c2a]" },
    ],
  },
  "1Y": {
    label: "Last 12 months",
    data: [
      { label: "Jan", value: 380,  color: "bg-[#1a5c2a]" },
      { label: "Feb", value: 520,  color: "bg-[#1a5c2a]" },
      { label: "Mar", value: 445,  color: "bg-[#1a5c2a]" },
      { label: "Apr", value: 610,  color: "bg-[#1a5c2a]" },
      { label: "May", value: 780,  color: "bg-[#1a5c2a]" },
      { label: "Jun", value: 940,  color: "bg-[#1a5c2a]" },
      { label: "Jul", value: 820,  color: "bg-[#1a5c2a]" },
      { label: "Aug", value: 670,  color: "bg-[#1a5c2a]" },
      { label: "Sep", value: 430,  color: "bg-[#1a5c2a]" },
      { label: "Oct", value: 290,  color: "bg-[#1a5c2a]" },
      { label: "Nov", value: 180,  color: "bg-[#1a5c2a]" },
      { label: "Dec", value: 95,   color: "bg-[#1a5c2a]" },
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
export default function IPCManagerDashboard({ firstName }) {
  const router = useRouter();
  const [period, setPeriod] = useState("7D");
  const p = PURCHASE_DATA[period];

  const kpis = [
    { title: "Registered Farmers",    value: "4,250",   trend: "+5%",  trendUp: true,  icon: Icons.farmer    },
    { title: "Today's Purchases",     value: "24.5 t",  trend: "+12%", trendUp: true,  icon: Icons.purchase  },
    { title: "Warehouse Stock",       value: "850 t",   trend: "-2%",  trendUp: false, icon: Icons.warehouse },
    { title: "Commodity Value Today", value: "MK 4.2M", trend: "+8%",  trendUp: true,  icon: Icons.data      },
  ];

  const commodityDistributionData = [
    { label: "Maize",      value: 8500, displayValue: "8,500 t", color: "bg-[#1a5c2a]" },
    { label: "Groundnuts", value: 5200, displayValue: "5,200 t", color: "bg-[#2a7a3b]" },
    { label: "Soybeans",   value: 3100, displayValue: "3,100 t", color: "bg-[#3a9a4e]" },
    { label: "Rice",       value: 1650, displayValue: "1,650 t", color: "bg-[#e8f1ea]" },
  ];

  const workflowSteps = [
    { label: "Farmer Registration",  value: 22, status: "done"    },
    { label: "Farm Registration",    value: 18, status: "done"    },
    { label: "Commodity Purchases",  value: 36, status: "active"  },
    { label: "Warehouse Receipts",   value: 14, status: "done"    },
    { label: "Inventory Updated",    value: 14, status: "done"    },
    { label: "Deliveries Completed", value: 9,  status: "pending" },
    { label: "Traceability Records", value: 9,  status: "pending" },
    { label: "Reports Generated",    value: 3,  status: "pending" },
  ];

  const recentPurchases = [
    { id: "RCP-8012", farmer: "John Banda",       commodity: "Maize",      weight: "2,500 kg", time: "10:30 AM" },
    { id: "RCP-8013", farmer: "Mary Phiri",        commodity: "Soybeans",   weight: "850 kg",   time: "11:45 AM" },
    { id: "RCP-8014", farmer: "Chikwawa Coop",     commodity: "Groundnuts", weight: "4,200 kg", time: "1:15 PM"  },
    { id: "RCP-8015", farmer: "Peter Zulu",        commodity: "Maize",      weight: "1,200 kg", time: "2:30 PM"  },
    { id: "RCP-8016", farmer: "Banda Cooperative", commodity: "Rice",       weight: "3,000 kg", time: "3:45 PM"  },
  ];

  return (
    <div className="p-6 space-y-8 max-w-[1400px] mx-auto">

      {/* 1. KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {kpis.map((kpi, idx) => <StatCard key={idx} {...kpi} />)}
      </div>

      {/* 2. Analytics & Workflow */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Analytics &amp; Flow</h2>
          <PeriodPicker value={period} onChange={setPeriod} options={PERIOD_OPTIONS} />
        </div>

        <div className="mb-4">
          <TodayWorkflow
            steps={workflowSteps}
            currentStage="Commodity Purchases"
            completion={72}
            nextAction="Record 14 pending commodity purchases before close of business today"
          />
        </div>

        {/* Chart grid — key={period} remounts charts for fresh animation */}
        <div key={period} className="grid grid-cols-1 lg:grid-cols-2 gap-4" style={{ animation: "chartFadeIn 0.35s ease-out" }}>

          {/* Purchase Trend */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-gray-700 mb-1">Purchase Trend</h3>
            <p className="text-xs text-gray-400 mb-5">
              Procurement volume — <span className="font-medium text-gray-600">{p.label}</span>
            </p>
            <BarChart data={p.data} height="h-56" />
          </div>

          {/* Commodity Performance */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-gray-700 mb-1">Commodity Performance</h3>
            <p className="text-xs text-gray-400 mb-5">Total IPC stock by commodity type</p>
            <HorizontalBarChart data={commodityDistributionData} />
          </div>

        </div>
      </div>

      {/* 3. Recent Activity */}
      <div>
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Recent Activity</h2>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-semibold text-gray-700">Latest IPC Operations</h3>
            <button onClick={() => router.push("/dashboard/purchasing")} className="text-xs font-semibold text-[#1a5c2a] hover:underline">
              View Full Logs →
            </button>
          </div>
          <div className="space-y-4">
            {recentPurchases.map((purchase, i) => (
              <div key={i} className="flex gap-4 items-start border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                <div className="w-9 h-9 rounded-lg bg-[#e8f1ea] flex items-center justify-center text-[#1a5c2a] flex-shrink-0 mt-0.5">
                  {Icons.purchase}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900">Purchase: {purchase.commodity}</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {purchase.farmer} supplied {purchase.weight} ({purchase.id})
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{purchase.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Quick Actions */}
      <div>
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ModuleActionCard icon={Icons.farmer}    title="Register Farmer"     description="Create a new farmer profile and link their farm data."      onClick={() => router.push("/dashboard/farmers/registration")} />
          <ModuleActionCard icon={Icons.purchase}  title="Purchase Commodity"  description="Record a new commodity intake from a registered farmer."    onClick={() => router.push("/dashboard/purchasing")} />
          <ModuleActionCard icon={Icons.warehouse} title="Update Inventory"    description="Manage live stock levels and create tracking batches."       onClick={() => router.push("/dashboard/warehouse")} />
          <ModuleActionCard icon={Icons.document}  title="Generate Reports"    description="View procurement, logistics, and traceability reports."      onClick={() => router.push("/dashboard/reports")} />
        </div>
      </div>

    </div>
  );
}
