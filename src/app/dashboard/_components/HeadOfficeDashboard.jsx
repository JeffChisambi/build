"use client";

import React, { useState } from "react";
import { StatCard } from "./Charts";
import { useRouter } from "next/navigation";


// ── Purchasing Revenue Chart (admin-style SVG bar chart) ──────
const ALL_YEARLY_DATA = {
  "2024": [
    { month: "Jan", value: 4200000 }, { month: "Feb", value: 2800000 },
    { month: "Mar", value: 5600000 }, { month: "Apr", value: 3900000 },
    { month: "May", value: 7200000 }, { month: "Jun", value: 6100000 },
    { month: "Jul", value: 8400000 }, { month: "Aug", value: 7800000 },
    { month: "Sep", value: 5300000 }, { month: "Oct", value: 6700000 },
    { month: "Nov", value: 9100000 }, { month: "Dec", value: 8600000 },
  ],
  "2023": [
    { month: "Jan", value: 1800000 }, { month: "Feb", value: 3500000 },
    { month: "Mar", value: 2900000 }, { month: "Apr", value: 6200000 },
    { month: "May", value: 5100000 }, { month: "Jun", value: 7800000 },
    { month: "Jul", value: 4600000 }, { month: "Aug", value: 6900000 },
    { month: "Sep", value: 8200000 }, { month: "Oct", value: 5700000 },
    { month: "Nov", value: 7100000 }, { month: "Dec", value: 6400000 },
  ],
  "2022": [
    { month: "Jan", value: 3100000 }, { month: "Feb", value: 4700000 },
    { month: "Mar", value: 2200000 }, { month: "Apr", value: 5800000 },
    { month: "May", value: 3400000 }, { month: "Jun", value: 4900000 },
    { month: "Jul", value: 6600000 }, { month: "Aug", value: 3800000 },
    { month: "Sep", value: 7400000 }, { month: "Oct", value: 5200000 },
    { month: "Nov", value: 4100000 }, { month: "Dec", value: 5900000 },
  ],
  "2021": [
    { month: "Jan", value: 2600000 }, { month: "Feb", value: 1900000 },
    { month: "Mar", value: 4300000 }, { month: "Apr", value: 2100000 },
    { month: "May", value: 5500000 }, { month: "Jun", value: 3200000 },
    { month: "Jul", value: 4800000 }, { month: "Aug", value: 2700000 },
    { month: "Sep", value: 6100000 }, { month: "Oct", value: 3900000 },
    { month: "Nov", value: 5300000 }, { month: "Dec", value: 4400000 },
  ],
};

function formatMWK(val) {
  if (val >= 1000000) return `MWK ${(val / 1000000).toFixed(1)}M`;
  if (val >= 1000)    return `MWK ${(val / 1000).toFixed(0)}K`;
  return `MWK ${val}`;
}

function PurchasingRevenueChart() {
  const [hoveredIdx, setHoveredIdx] = React.useState(null);
  const [period, setPeriod]         = React.useState("2024");
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [animatedValues, setAnimatedValues] = React.useState(
    ALL_YEARLY_DATA["2024"].map(d => d.value)
  );
  const animRef      = React.useRef(null);
  const periodOptions = ["2024", "2023", "2022", "2021"];

  React.useEffect(() => {
    const targets = ALL_YEARLY_DATA[period].map(d => d.value);
    if (animRef.current) cancelAnimationFrame(animRef.current);
    setAnimatedValues(new Array(12).fill(0));
    const duration  = 550;
    const startTime = performance.now();
    function step(now) {
      const t     = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setAnimatedValues(targets.map(v => v * eased));
      if (t < 1) animRef.current = requestAnimationFrame(step);
    }
    animRef.current = requestAnimationFrame(step);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [period]);

  const targetData = ALL_YEARLY_DATA[period];
  const maxVal     = Math.max(...targetData.map(d => d.value));
  const chartH     = 200;
  const barW       = 36;
  const gap        = 18;
  const paddingL   = 64;
  const paddingB   = 36;
  const paddingT   = 20;
  const totalW     = paddingL + targetData.length * (barW + gap) - gap + 20;
  const yLabels    = [0, 25, 50, 75, 100];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-700">Monthly Purchasing Revenue</h3>
          <p className="text-xs text-gray-400 mt-0.5">Total grain purchase spend per month</p>
        </div>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5 bg-white hover:bg-gray-50 focus:outline-none transition-colors"
          >
            {period}
            <svg className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`absolute right-0 mt-1 w-24 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden transition-all duration-200 origin-top z-10 ${dropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
            {periodOptions.map(opt => (
              <button
                key={opt}
                onClick={() => { setPeriod(opt); setDropdownOpen(false); }}
                className={`w-full text-left px-4 py-2 text-sm transition-colors ${period === opt ? "bg-green-50 text-green-700 font-semibold" : "text-gray-600 hover:bg-gray-50"}`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full">
        <svg width="100%" viewBox={`0 0 ${totalW - 20} ${chartH + paddingB + paddingT}`} className="block">
          {yLabels.map((pct) => {
            const y = paddingT + chartH - (pct / 100) * chartH;
            return (
              <g key={pct}>
                <line x1={paddingL} x2={totalW - 10} y1={y} y2={y} stroke="#f0f0f0" strokeWidth="1" />
                <text x={paddingL - 8} y={y + 4} textAnchor="end" fontSize="11" fill="#9ca3af">{pct}%</text>
              </g>
            );
          })}

          {targetData.map((d, i) => {
            const animVal  = animatedValues[i] ?? 0;
            const barH     = Math.max((animVal / maxVal) * chartH, 0);
            const x        = paddingL + i * (barW + gap);
            const y        = paddingT + chartH - barH;
            const isHovered  = hoveredIdx === i;
            const isHighest  = d.value === maxVal;
            const patternId  = `diag-${period}-${i}`;

            return (
              <g key={d.month} onMouseEnter={() => setHoveredIdx(i)} onMouseLeave={() => setHoveredIdx(null)} style={{ cursor: "pointer" }}>
                <defs>
                  <pattern id={patternId} patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                    <rect width="8" height="8" fill="#1a5c2a" />
                    <line x1="0" y1="0" x2="0" y2="8" stroke="#134520" strokeWidth="3" />
                  </pattern>
                </defs>

                <rect
                  x={x} y={y} width={barW} height={barH}
                  rx="6" ry="6"
                  fill={isHovered || isHighest ? `url(#${patternId})` : "#e8f5e9"}
                />

                {isHovered && (
                  <g>
                    <rect x={x + barW / 2 - 52} y={y - 38} width={104} height={26} rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.08))" />
                    <text x={x + barW / 2} y={y - 20} textAnchor="middle" fontSize="11" fontWeight="600" fill="#111827">{formatMWK(d.value)}</text>
                    <circle cx={x + barW / 2} cy={y} r={4} fill="white" stroke="#1a5c2a" strokeWidth="2" />
                  </g>
                )}

                <text
                  x={x + barW / 2} y={paddingT + chartH + paddingB - 12}
                  textAnchor="middle" fontSize="12"
                  fontWeight={isHovered || isHighest ? "700" : "400"}
                  fill={isHovered || isHighest ? "#1a5c2a" : "#9ca3af"}
                >
                  {d.month}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────
export default function HeadOfficeDashboard({ firstName }) {
  const router = useRouter();

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

        {/* Purchasing Revenue chart — spans 2 columns */}
        <div className="lg:col-span-2">
          <PurchasingRevenueChart />
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

    </div>
  );
}
