"use client";

import React from "react";
import { BarChart, HorizontalBarChart, StatCard, ModuleActionCard } from "./Charts";
import { Icons } from "./Icons";
import { useRouter } from "next/navigation";
import TodayWorkflow from "./TodayWorkflow";

// ── Main Component ───────────────────────────────────────────────────────

export default function IPCManagerDashboard({ firstName }) {
  const router = useRouter();

  // ── 2. KPI Data (Max 4 for premium spacing) ─────────────────────────
  const kpis = [
    { title: "Registered Farmers",    value: "4,250",  trend: "+5%",   trendUp: true,  subtext: "Total in IPC",           icon: Icons.farmer    },
    { title: "Today's Purchases",     value: "24.5 t", trend: "+12%",  trendUp: true,  subtext: "Volume today",           icon: Icons.purchase  },
    { title: "Warehouse Stock",       value: "850 t",  trend: "-2%",   trendUp: false, subtext: "Ready for dispatch",     icon: Icons.warehouse },
    { title: "Commodity Value Today", value: "MK 4.2M",trend: "+8%",   trendUp: true,  subtext: "Estimated intake value", icon: Icons.data      },
  ];

  // ── 3. Chart Data (Max 2, Green/Grey only) ──────────────────────────
  const weeklyPurchasesData = [
    { label: "Mon", value: 12, color: "bg-[#1a5c2e]" },
    { label: "Tue", value: 18, color: "bg-[#1a5c2e]" },
    { label: "Wed", value: 24, color: "bg-[#1a5c2e]" },
    { label: "Thu", value: 15, color: "bg-[#1a5c2e]" },
    { label: "Fri", value: 28, color: "bg-[#1a5c2e]" },
    { label: "Sat", value: 35, color: "bg-[#1a5c2e]" },
    { label: "Sun", value: 20, color: "bg-[#1a5c2e]" },
  ];

  const commodityDistributionData = [
    { label: "Maize",      value: 8500, displayValue: "8,500 t", color: "bg-[#1a5c2e]" },
    { label: "Groundnuts", value: 5200, displayValue: "5,200 t", color: "bg-[#1a5c2e]/[0.85]" },
    { label: "Soybeans",   value: 3100, displayValue: "3,100 t", color: "bg-[#1a5c2e]/[0.70]" },
    { label: "Rice",       value: 1650, displayValue: "1,650 t", color: "bg-[#1a5c2e]/[0.55]" },
  ];

  // ── Workflow Steps (Integrated into Analytics) ────────────────────────
  const workflowSteps = [
    { label: "Farmer Registration",   value: 22, status: "done"    },
    { label: "Farm Registration",     value: 18, status: "done"    },
    { label: "Commodity Purchases",   value: 36, status: "active"  },
    { label: "Warehouse Receipts",    value: 14, status: "done"    },
    { label: "Inventory Updated",     value: 14, status: "done"    },
    { label: "Deliveries Completed",  value: 9,  status: "pending" },
    { label: "Traceability Records",  value: 9,  status: "pending" },
    { label: "Reports Generated",     value: 3,  status: "pending" },
  ];

  // ── 4. Recent Activity ────────────────────────────────────────────────
  const recentPurchases = [
    { id: "RCP-8012", farmer: "John Banda",       commodity: "Maize",       weight: "2,500 kg", time: "10:30 AM" },
    { id: "RCP-8013", farmer: "Mary Phiri",        commodity: "Soybeans",    weight: "850 kg",   time: "11:45 AM" },
    { id: "RCP-8014", farmer: "Chikwawa Coop",     commodity: "Groundnuts",  weight: "4,200 kg", time: "1:15 PM"  },
    { id: "RCP-8015", farmer: "Peter Zulu",        commodity: "Maize",       weight: "1,200 kg", time: "2:30 PM"  },
    { id: "RCP-8016", farmer: "Banda Cooperative", commodity: "Rice",        weight: "3,000 kg", time: "3:45 PM"  },
  ];

  // ── Render ────────────────────────────────────────────────────────────
  return (
    <div className="space-y-8 max-w-[1600px] mx-auto animate-in fade-in duration-500 pb-16 p-6 lg:p-8">

      {/* 1. Page Header */}
      <div className="flex items-center justify-between bg-white rounded-xl p-8 shadow-sm">
        <div>
          <p className="text-xs font-semibold text-[#1a5c2e] uppercase tracking-[0.2em] mb-2">NASFAM GTMS</p>
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Lilongwe Central IPC</h1>
          <p className="text-sm text-gray-500 mt-1.5">
            {new Date().toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
        <div className="text-right hidden sm:block">
          <p className="text-base font-bold text-gray-900">{firstName}</p>
          <p className="text-sm text-gray-500 mt-0.5">IPC Manager</p>
        </div>
      </div>

      {/* 2. KPI Cards */}
      <section>
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Operations Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
          {kpis.map((kpi, idx) => (
            <StatCard key={idx} {...kpi} />
          ))}
        </div>
      </section>

      {/* 3. Analytics & Workflow */}
      <section>
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Analytics & Flow</h2>
        
        {/* Today's Workflow spans full width here to keep its value without breaking layout */}
        <div className="mb-6">
          <TodayWorkflow
            steps={workflowSteps}
            currentStage="Commodity Purchases"
            completion={72}
            nextAction="Record 14 pending commodity purchases before close of business today"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Purchase Trend */}
          <div className="bg-white rounded-xl p-7 shadow-sm">
            <h3 className="text-base font-bold text-gray-900 mb-1">Weekly Purchase Trend</h3>
            <p className="text-xs text-gray-500 mb-6">Daily procurement volume (Tonnes)</p>
            <BarChart data={weeklyPurchasesData} height="h-64" />
          </div>
          
          {/* Commodity Performance */}
          <div className="bg-white rounded-xl p-7 shadow-sm">
            <h3 className="text-base font-bold text-gray-900 mb-1">Commodity Performance</h3>
            <p className="text-xs text-gray-500 mb-6">Total IPC stock by commodity type</p>
            <HorizontalBarChart data={commodityDistributionData} />
          </div>
        </div>
      </section>

      {/* 4. Recent Activity */}
      <section>
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Recent Activity</h2>
        <div className="bg-white rounded-xl p-7 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-base font-bold text-gray-900">Latest IPC Operations</h3>
            <button
              onClick={() => router.push("/dashboard/purchasing")}
              className="text-xs font-bold text-[#1a5c2e] hover:underline"
            >
              View Full Logs →
            </button>
          </div>
          <div className="space-y-6">
            {recentPurchases.map((purchase, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded bg-[#1a5c2e]/10 flex items-center justify-center text-[#1a5c2e] flex-shrink-0 mt-0.5">
                  {Icons.purchase}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-900">Purchase: {purchase.commodity}</p>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    {purchase.farmer} supplied {purchase.weight} ({purchase.id})
                  </p>
                  <p className="text-xs text-gray-400 mt-1.5">{purchase.time}</p>
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
          <ModuleActionCard
            icon={Icons.farmer}
            title="Register Farmer"
            description="Create a new farmer profile and link their farm data."
            onClick={() => router.push("/dashboard/farmers/registration")}
          />
          <ModuleActionCard
            icon={Icons.purchase}
            title="Purchase Commodity"
            description="Record a new commodity intake from a registered farmer."
            onClick={() => router.push("/dashboard/purchasing")}
          />
          <ModuleActionCard
            icon={Icons.warehouse}
            title="Update Inventory"
            description="Manage live stock levels and create tracking batches."
            onClick={() => router.push("/dashboard/warehouse")}
          />
          <ModuleActionCard
            icon={Icons.document}
            title="Generate Reports"
            description="View procurement, logistics, and traceability reports."
            onClick={() => router.push("/dashboard/reports")}
          />
        </div>
      </section>

    </div>
  );
}
