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
    {
      title: "Farmers",
      value: "4,250",
      trend: "+5%",
      trendUp: true,
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 267 186" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M118.439 107.25C119.517 107.196 120.674 107.171 121.767 107.195C135.872 107.505 150.342 106.235 164.347 108.003C165.522 108.139 167.017 109.436 168.047 109.713C172.531 110.916 176.557 112.422 180.668 114.604C181.893 115.254 182.896 116.55 184.096 117.353C190.35 121.538 195.527 127.647 199.856 133.745C202.146 137.204 205.27 145.928 206.671 149.899C207.988 153.639 208.696 163.149 207.212 167.09C206.658 168.559 204.82 171.86 203.937 173.526C196.005 178.454 194.695 177.249 185.818 177.306L158.795 177.257C151.449 177.158 144.048 177.343 136.701 177.291C126.197 177.215 115.799 177.138 105.295 177.223L88.3703 177.303C85.2768 177.314 81.6707 177.453 78.6504 177.083C76.911 176.684 74.2583 174.739 73.0206 173.566C66.2232 167.126 68.5184 154.423 71.1537 146.51C71.7055 144.853 72.0759 143.028 72.7779 141.414C73.4218 139.934 74.3335 138.507 75.029 137.041C76.04 135.014 77.4174 132.325 78.739 130.513C80.4655 128.354 82.4623 126.4 84.3086 124.343C84.8806 123.705 85.5122 123.068 86.1221 122.472C87.0383 121.577 88.2769 120.902 89.2011 120.057C93.205 116.397 97.5864 113.381 102.596 111.276C103.916 110.721 106.177 110.709 107.57 110.173C108.585 109.781 109.828 109.207 110.831 108.749C113.52 107.52 115.527 107.349 118.439 107.25ZM149.536 163.538L181.704 163.513C185.117 163.514 188.537 163.569 191.947 163.403C192.614 163.37 193.253 163.309 193.919 163.378C194.653 149.898 186.134 134.361 174.402 127.674C173.335 127.043 171.96 125.624 170.86 125.167C166.502 123.356 163.19 121.043 158.313 121.091C148.135 121.191 137.639 120.602 127.482 120.878C123.691 121.179 120.082 120.986 116.368 121.454C114.714 121.662 113.606 122.565 112.083 123.118C110.591 123.66 107.576 124.325 106.227 124.982C102.465 126.816 96.2034 131.296 93.6317 134.43C90.9948 137.644 88.148 142.025 86.066 145.62C85.6473 146.343 85.1178 148.313 84.7885 149.162C83.025 153.711 82.5736 157.305 82.7028 162.173C82.7115 162.497 82.7945 162.797 82.9521 163.084C85.409 164.068 106.819 163.505 111.141 163.505L149.536 163.538Z" fill="currentColor"/>
          <path d="M133.203 8.33064C156.342 5.5567 177.344 22.0746 180.101 45.2149C182.858 68.3552 166.325 89.3458 143.183 92.0864C120.065 94.8241 99.1001 78.3115 96.3455 55.1948C93.5911 32.0781 110.089 11.1017 133.203 8.33064ZM118.136 70.4442C125.118 77.281 135.107 80.0806 144.626 77.869C160.087 74.2769 169.668 58.786 165.977 43.3487C162.287 27.9116 146.735 18.4291 131.322 22.2179C121.24 24.6961 113.292 32.4412 110.554 42.4554C107.816 52.4696 110.717 63.1813 118.136 70.4442Z" fill="currentColor"/>
          <path d="M222.083 107.068C224.748 107.053 230.035 106.947 232.307 108.191C235.01 110.029 239.535 110.966 242.107 112.287C245.954 114.262 252.913 120.742 255.49 124.142C258.308 127.862 261.781 136.245 262.77 140.644C263.59 144.281 264.24 152.09 262.176 155.286C260.242 158.642 258.235 159.787 255.924 162.258C255.866 162.303 255.81 162.347 255.748 162.387C254.204 163.415 238.63 163.622 236.167 163.127C236.06 159.681 236.206 156.158 235.735 152.778C235.297 149.651 234.415 146.744 233.564 143.715C232.909 141.874 232.673 138.987 231.866 137.285C229.494 132.277 227.828 126.742 225.481 121.781C224.112 118.887 221.425 115.773 219.762 112.948C219.466 112.444 218.216 110.32 217.958 110.009C217.393 109.857 217.14 109.85 216.574 109.813C216.243 109.506 216.114 109.401 216.12 108.875C216.14 106.646 220.488 107.094 222.083 107.068Z" fill="currentColor"/>
          <path d="M53.2963 107.061C56.0885 106.945 57.7921 107.166 60.5027 107.69C59.4287 110.547 57.9154 111.432 56.259 113.812C55.0399 116.286 52.2277 118.916 51.0665 121.183C49.6052 124.037 48.224 128.189 46.7167 131.145C46.1882 132.182 44.8615 134.547 44.6567 135.487C43.3162 141.445 41.3147 146.999 40.4044 153.067C40.18 154.562 40.4939 163.16 39.3866 163.243C36.3474 163.472 23.6193 163.511 21.3626 162.393C16.4876 158.729 13.1765 156.468 12.6522 149.741C12.0956 142.598 13.6193 138.414 16.5379 132.077C17.0811 130.898 18.2664 129.548 18.7958 128.374C22.0814 121.093 29.0422 114.889 36.1471 111.428C38.5912 110.266 41.7641 109.601 44.3678 108.222C45.915 107.402 51.3627 107.177 53.2963 107.061Z" fill="currentColor"/>
          <path d="M207.254 35.9707C208.901 35.7391 216.216 36.8186 217.785 37.5397C218.252 37.754 224.125 40.4479 224.499 40.7244C228.651 43.7947 231.779 48.3315 233.895 52.9771C236 57.5959 235.993 61.4221 235.802 66.3461C235.695 69.1001 235.904 70.5302 234.872 73.1207C232.778 78.3709 230.402 82.7411 225.801 86.2352C224.141 87.4956 224.066 87.8705 221.976 88.811C220.019 89.5508 216.884 91.4661 215.415 91.8766C210.487 92.9702 203.808 92.9522 199.033 91.2492C196.061 90.1893 199.757 84.2239 200.341 82.8092C202.348 77.9322 204.2 73.1596 205.394 68.0099C205.98 65.4716 207.03 62.9635 207.31 60.3227C207.988 54.6097 207.917 48.7029 207.735 42.9555C207.664 40.7594 205.98 38.033 207.254 35.9707Z" fill="currentColor"/>
          <path d="M68.2082 36.0406L68.7637 36.0159C69.122 36.211 69.3807 36.4059 69.2904 36.8638C68.2327 42.2325 68.4278 47.8114 68.5003 53.2774C68.6645 63.465 71.4696 73.4182 75.7385 82.6239C76.6065 84.4956 80.9952 90.2832 76.8608 91.5712C72.3543 92.9749 66.1735 93.0592 61.611 92.1336C60.1866 91.8446 57.0486 89.966 55.452 89.2858C50.8083 87.4418 49.9481 86.1879 46.9176 82.4494C43.162 77.8165 41.4037 74.3855 40.841 68.1701C40.0572 59.5122 41.4542 52.7277 47.0741 45.8604C53.166 38.4164 58.9921 36.9352 68.2082 36.0406Z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      title: "Today's Purchases",
      value: "24.5 t",
      trend: "+12%",
      trendUp: true,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      title: "Warehouse Stock",
      value: "850 t",
      trend: "-2%",
      trendUp: false,
      icon: (
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3C6.49 3 2 7.49 2 13v6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-6c0-5.51-4.49-10-10-10m4 12H8v-2h8zm-8 4v-2h8v2zm12 0h-2v-6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v6H4v-6c0-4.41 3.59-8 8-8s8 3.59 8 8z" />
        </svg>
      ),
    },
    {
      title: "Commodity Value Today",
      value: "MK 4.2M",
      trend: "+8%",
      trendUp: true,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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

      {/* 4. Quick Actions removed */}

    </div>
  );
}
