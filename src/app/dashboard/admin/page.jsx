"use client";
import React from "react";

import { useRouter } from "next/navigation";
import { mockUsers, SEED_USERS } from "@/auth/mockUsers";
import { SEED_ROLES } from "@/auth/mockRoles";
import { mockIPCs } from "@/auth/mockIPCs";
import { mockSyncMetrics, mockSyncDevices } from "@/auth/mockSync";

const Icons = {
  users: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  roles: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  warehouse: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  ipc: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  sync: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  audit: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  settings: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    </svg>
  ),
  arrowRight: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  ),
};

// Admin Module Card
function ModuleCard({ icon, title, description, stats, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-xl border border-gray-200 p-5 transition-all text-left group hover:-translate-y-0.5 hover:shadow-sm"
    >
      <div className="flex items-start gap-4">
        <div className="text-gray-500 group-hover:text-gray-700 transition-colors mt-0.5">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          {stats && (
            <div className="flex gap-4 mt-3">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-xs">
                  <p className="font-bold text-gray-900">{stat.value}</p>
                  <p className="text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="text-gray-400 group-hover:text-gray-600 transition-colors mt-1">
          {Icons.arrowRight}
        </div>
      </div>
    </button>
  );
}

// Metric Widget
function MetricWidget({ icon, label, value, trend, trendUp = true }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-500">
          {icon}
          <p className="text-sm font-semibold text-gray-700">{label}</p>
        </div>
        {trend && (
          <div className="flex items-center gap-1">
            <svg className={`w-3.5 h-3.5 ${trendUp ? 'text-[#1a5c2a]' : 'text-red-500'}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={trendUp ? "M7 17L17 7M17 7H7M17 7v10" : "M7 7l10 10M17 17H7M17 17V7"} />
            </svg>
            <span className={`text-xs font-semibold ${trendUp ? 'text-[#1a5c2a]' : 'text-red-600'}`}>{trend}</span>
          </div>
        )}
      </div>
      <p className="text-xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

// Purchasing Revenue Chart — per-year mock data
const ALL_YEARLY_DATA = {
  "2024": [
    { month: "Jan", value: 4200000 },
    { month: "Feb", value: 2800000 },
    { month: "Mar", value: 5600000 },
    { month: "Apr", value: 3900000 },
    { month: "May", value: 7200000 },
    { month: "Jun", value: 6100000 },
    { month: "Jul", value: 8400000 },
    { month: "Aug", value: 7800000 },
    { month: "Sep", value: 5300000 },
    { month: "Oct", value: 6700000 },
    { month: "Nov", value: 9100000 },
    { month: "Dec", value: 8600000 },
  ],
  "2023": [
    { month: "Jan", value: 1800000 },
    { month: "Feb", value: 3500000 },
    { month: "Mar", value: 2900000 },
    { month: "Apr", value: 6200000 },
    { month: "May", value: 5100000 },
    { month: "Jun", value: 7800000 },
    { month: "Jul", value: 4600000 },
    { month: "Aug", value: 6900000 },
    { month: "Sep", value: 8200000 },
    { month: "Oct", value: 5700000 },
    { month: "Nov", value: 7100000 },
    { month: "Dec", value: 6400000 },
  ],
  "2022": [
    { month: "Jan", value: 3100000 },
    { month: "Feb", value: 4700000 },
    { month: "Mar", value: 2200000 },
    { month: "Apr", value: 5800000 },
    { month: "May", value: 3400000 },
    { month: "Jun", value: 4900000 },
    { month: "Jul", value: 6600000 },
    { month: "Aug", value: 3800000 },
    { month: "Sep", value: 7400000 },
    { month: "Oct", value: 5200000 },
    { month: "Nov", value: 4100000 },
    { month: "Dec", value: 5900000 },
  ],
  "2021": [
    { month: "Jan", value: 2600000 },
    { month: "Feb", value: 1900000 },
    { month: "Mar", value: 4300000 },
    { month: "Apr", value: 2100000 },
    { month: "May", value: 5500000 },
    { month: "Jun", value: 3200000 },
    { month: "Jul", value: 4800000 },
    { month: "Aug", value: 2700000 },
    { month: "Sep", value: 6100000 },
    { month: "Oct", value: 3900000 },
    { month: "Nov", value: 5300000 },
    { month: "Dec", value: 4400000 },
  ],
};

function formatMWK(val) {
  if (val >= 1000000) return `MWK ${(val / 1000000).toFixed(1)}M`;
  if (val >= 1000) return `MWK ${(val / 1000).toFixed(0)}K`;
  return `MWK ${val}`;
}

function PurchasingRevenueChart() {
  const [hoveredIdx, setHoveredIdx] = React.useState(null);
  const [period, setPeriod] = React.useState("2024");
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [animatedValues, setAnimatedValues] = React.useState(
    ALL_YEARLY_DATA["2024"].map(d => d.value)
  );
  const animRef = React.useRef(null);
  const periodOptions = ["2024", "2023", "2022", "2021"];

  // Animate bars from 0 → target whenever period changes
  React.useEffect(() => {
    const targets = ALL_YEARLY_DATA[period].map(d => d.value);
    if (animRef.current) cancelAnimationFrame(animRef.current);
    setAnimatedValues(new Array(12).fill(0));
    const duration = 550;
    const startTime = performance.now();
    function step(now) {
      const t = Math.min((now - startTime) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setAnimatedValues(targets.map(v => v * eased));
      if (t < 1) animRef.current = requestAnimationFrame(step);
    }
    animRef.current = requestAnimationFrame(step);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [period]);

  const targetData = ALL_YEARLY_DATA[period];
  const maxVal = Math.max(...targetData.map(d => d.value));
  const chartH = 200;
  const barW = 36;
  const gap = 18;
  const paddingL = 64;
  const paddingB = 36;
  const paddingT = 20;
  const totalW = paddingL + targetData.length * (barW + gap) - gap + 20;
  const yLabels = [0, 25, 50, 75, 100];

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
            <svg className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
          </button>

          <div
            className={`absolute right-0 mt-1 w-24 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden transition-all duration-200 origin-top z-10 ${dropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
          >
            {periodOptions.map(opt => (
              <button
                key={opt}
                onClick={() => { setPeriod(opt); setDropdownOpen(false); }}
                className={`w-full text-left px-4 py-2 text-sm transition-colors ${period === opt ? 'bg-[#e8f1ea] text-[#1a5c2a] font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full">
        <svg
          width="100%"
          viewBox={`0 0 ${totalW - 20} ${chartH + paddingB + paddingT}`}
          className="block"
        >
          {/* Y-axis grid lines & labels */}
          {yLabels.map((pct) => {
            const y = paddingT + chartH - (pct / 100) * chartH;
            return (
              <g key={pct}>
                <line x1={paddingL} x2={totalW - 10} y1={y} y2={y} stroke="#f0f0f0" strokeWidth="1" />
                <text x={paddingL - 8} y={y + 4} textAnchor="end" fontSize="11" fill="#9ca3af">
                  {pct}%
                </text>
              </g>
            );
          })}

          {/* Bars */}
          {targetData.map((d, i) => {
            const animVal = animatedValues[i] ?? 0;
            const barH = Math.max((animVal / maxVal) * chartH, 0);
            const x = paddingL + i * (barW + gap);
            const y = paddingT + chartH - barH;
            const isHovered = hoveredIdx === i;
            const isHighest = d.value === maxVal;
            const patternId = `diag-${period}-${i}`;

            return (
              <g key={d.month}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{ cursor: "pointer" }}
              >
                <defs>
                  <pattern id={patternId} patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                    <rect width="8" height="8" fill="#1a5c2a" />
                    <line x1="0" y1="0" x2="0" y2="8" stroke="#134520" strokeWidth="3" />
                  </pattern>
                </defs>

                {/* Bar */}
                <rect
                  x={x} y={y} width={barW} height={barH}
                  rx="6" ry="6"
                  fill={isHovered || isHighest ? `url(#${patternId})` : "#e8f5e9"}
                />

                {/* Tooltip on hover */}
                {isHovered && (
                  <g>
                    <rect
                      x={x + barW / 2 - 52} y={y - 38}
                      width={104} height={26}
                      rx="6" fill="white"
                      stroke="#e5e7eb" strokeWidth="1"
                      filter="drop-shadow(0 2px 4px rgba(0,0,0,0.08))"
                    />
                    <text x={x + barW / 2} y={y - 20} textAnchor="middle" fontSize="11" fontWeight="600" fill="#111827">
                      {formatMWK(d.value)}
                    </text>
                    <circle cx={x + barW / 2} cy={y} r={4} fill="white" stroke="#1a5c2a" strokeWidth="2" />
                  </g>
                )}

                {/* X-axis label */}
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

// Main Page
export default function AdminDashboardPage() {
  const router = useRouter();

  const activeUsers = mockUsers.filter(u => u.status === "Active").length;
  const totalUsers = mockUsers.length;
  const totalRoles = SEED_ROLES.length;
  const totalIPCs = mockIPCs.length;
  const devicesSynced = mockSyncDevices.filter(d => d.syncStatus === "Synced").length;

  const modules = [
    {
      icon: Icons.users,
      title: "User Management",
      description: "Manage system users, farmers, and account access.",
      href: "/dashboard/admin/users",
      stats: [
        { value: totalUsers, label: "Total Users" },
        { value: activeUsers, label: "Active" },
      ],
    },
    {
      icon: Icons.roles,
      title: "Roles & Permissions",
      description: "Define roles and control access across the platform.",
      href: "/dashboard/admin/roles",
      stats: [
        { value: totalRoles, label: "Roles" },
      ],
    },
    {
      icon: Icons.warehouse,
      title: "Warehouse Management",
      description: "Configure and monitor warehouse locations and capacity.",
      href: "/dashboard/admin/warehouse-management",
    },
    {
      icon: Icons.ipc,
      title: "IPC Management",
      description: "Register and manage IPC master records.",
      href: "/dashboard/admin/ipc-management",
      stats: [
        { value: totalIPCs, label: "IPCs" },
      ],
    },
    {
      icon: Icons.sync,
      title: "Sync Management",
      description: "Monitor mobile device synchronization and data health.",
      href: "/dashboard/admin/sync-management",
      stats: [
        { value: devicesSynced, label: "Devices Synced" },
      ],
    },
    {
      icon: Icons.audit,
      title: "Audit Logs",
      description: "Review system events, user actions, and security alerts.",
      href: "/dashboard/admin/audit-logs",
    },
    {
      icon: Icons.settings,
      title: "System Settings",
      description: "Configure notifications, security policies, and email settings.",
      href: "/dashboard/admin/settings",
    },
  ];

  return (
    <div className="p-6 space-y-8 max-w-[1400px] mx-auto">

      {/* ── System Status ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <MetricWidget
          icon={<svg className="w-5 h-5" viewBox="0 0 267 186" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M118.439 107.25C119.517 107.196 120.674 107.171 121.767 107.195C135.872 107.505 150.342 106.235 164.347 108.003C165.522 108.139 167.017 109.436 168.047 109.713C172.531 110.916 176.557 112.422 180.668 114.604C181.893 115.254 182.896 116.55 184.096 117.353C190.35 121.538 195.527 127.647 199.856 133.745C202.146 137.204 205.27 145.928 206.671 149.899C207.988 153.639 208.696 163.149 207.212 167.09C206.658 168.559 204.82 171.86 203.937 173.526C196.005 178.454 194.695 177.249 185.818 177.306L158.795 177.257C151.449 177.158 144.048 177.343 136.701 177.291C126.197 177.215 115.799 177.138 105.295 177.223L88.3703 177.303C85.2768 177.314 81.6707 177.453 78.6504 177.083C76.911 176.684 74.2583 174.739 73.0206 173.566C66.2232 167.126 68.5184 154.423 71.1537 146.51C71.7055 144.853 72.0759 143.028 72.7779 141.414C73.4218 139.934 74.3335 138.507 75.029 137.041C76.04 135.014 77.4174 132.325 78.739 130.513C80.4655 128.354 82.4623 126.4 84.3086 124.343C84.8806 123.705 85.5122 123.068 86.1221 122.472C87.0383 121.577 88.2769 120.902 89.2011 120.057C93.205 116.397 97.5864 113.381 102.596 111.276C103.916 110.721 106.177 110.709 107.57 110.173C108.585 109.781 109.828 109.207 110.831 108.749C113.52 107.52 115.527 107.349 118.439 107.25ZM149.536 163.538L181.704 163.513C185.117 163.514 188.537 163.569 191.947 163.403C192.614 163.37 193.253 163.309 193.919 163.378C194.653 149.898 186.134 134.361 174.402 127.674C173.335 127.043 171.96 125.624 170.86 125.167C166.502 123.356 163.19 121.043 158.313 121.091C148.135 121.191 137.639 120.602 127.482 120.878C123.691 121.179 120.082 120.986 116.368 121.454C114.714 121.662 113.606 122.565 112.083 123.118C110.591 123.66 107.576 124.325 106.227 124.982C102.465 126.816 96.2034 131.296 93.6317 134.43C90.9948 137.644 88.148 142.025 86.066 145.62C85.6473 146.343 85.1178 148.313 84.7885 149.162C83.025 153.711 82.5736 157.305 82.7028 162.173C82.7115 162.497 82.7945 162.797 82.9521 163.084C85.409 164.068 106.819 163.505 111.141 163.505L149.536 163.538Z" fill="currentColor"/>
            <path d="M133.203 8.33064C156.342 5.5567 177.344 22.0746 180.101 45.2149C182.858 68.3552 166.325 89.3458 143.183 92.0864C120.065 94.8241 99.1001 78.3115 96.3455 55.1948C93.5911 32.0781 110.089 11.1017 133.203 8.33064ZM118.136 70.4442C125.118 77.281 135.107 80.0806 144.626 77.869C160.087 74.2769 169.668 58.786 165.977 43.3487C162.287 27.9116 146.735 18.4291 131.322 22.2179C121.24 24.6961 113.292 32.4412 110.554 42.4554C107.816 52.4696 110.717 63.1813 118.136 70.4442Z" fill="currentColor"/>
            <path d="M222.083 107.068C224.748 107.053 230.035 106.947 232.307 108.191C235.01 110.029 239.535 110.966 242.107 112.287C245.954 114.262 252.913 120.742 255.49 124.142C258.308 127.862 261.781 136.245 262.77 140.644C263.59 144.281 264.24 152.09 262.176 155.286C260.242 158.642 258.235 159.787 255.924 162.258C255.866 162.303 255.81 162.347 255.748 162.387C254.204 163.415 238.63 163.622 236.167 163.127C236.06 159.681 236.206 156.158 235.735 152.778C235.297 149.651 234.415 146.744 233.564 143.715C232.909 141.874 232.673 138.987 231.866 137.285C229.494 132.277 227.828 126.742 225.481 121.781C224.112 118.887 221.425 115.773 219.762 112.948C219.466 112.444 218.216 110.32 217.958 110.009C217.393 109.857 217.14 109.85 216.574 109.813C216.243 109.506 216.114 109.401 216.12 108.875C216.14 106.646 220.488 107.094 222.083 107.068Z" fill="currentColor"/>
            <path d="M53.2963 107.061C56.0885 106.945 57.7921 107.166 60.5027 107.69C59.4287 110.547 57.9154 111.432 56.259 113.812C55.0399 116.286 52.2277 118.916 51.0665 121.183C49.6052 124.037 48.224 128.189 46.7167 131.145C46.1882 132.182 44.8615 134.547 44.6567 135.487C43.3162 141.445 41.3147 146.999 40.4044 153.067C40.18 154.562 40.4939 163.16 39.3866 163.243C36.3474 163.472 23.6193 163.511 21.3626 162.393C16.4876 158.729 13.1765 156.468 12.6522 149.741C12.0956 142.598 13.6193 138.414 16.5379 132.077C17.0811 130.898 18.2664 129.548 18.7958 128.374C22.0814 121.093 29.0422 114.889 36.1471 111.428C38.5912 110.266 41.7641 109.601 44.3678 108.222C45.915 107.402 51.3627 107.177 53.2963 107.061Z" fill="currentColor"/>
            <path d="M207.254 35.9707C208.901 35.7391 216.216 36.8186 217.785 37.5397C218.252 37.754 224.125 40.4479 224.499 40.7244C228.651 43.7947 231.779 48.3315 233.895 52.9771C236 57.5959 235.993 61.4221 235.802 66.3461C235.695 69.1001 235.904 70.5302 234.872 73.1207C232.778 78.3709 230.402 82.7411 225.801 86.2352C224.141 87.4956 224.066 87.8705 221.976 88.811C220.019 89.5508 216.884 91.4661 215.415 91.8766C210.487 92.9702 203.808 92.9522 199.033 91.2492C196.061 90.1893 199.757 84.2239 200.341 82.8092C202.348 77.9322 204.2 73.1596 205.394 68.0099C205.98 65.4716 207.03 62.9635 207.31 60.3227C207.988 54.6097 207.917 48.7029 207.735 42.9555C207.664 40.7594 205.98 38.033 207.254 35.9707Z" fill="currentColor"/>
            <path d="M68.2082 36.0406L68.7637 36.0159C69.122 36.211 69.3807 36.4059 69.2904 36.8638C68.2327 42.2325 68.4278 47.8114 68.5003 53.2774C68.6645 63.465 71.4696 73.4182 75.7385 82.6239C76.6065 84.4956 80.9952 90.2832 76.8608 91.5712C72.3543 92.9749 66.1735 93.0592 61.611 92.1336C60.1866 91.8446 57.0486 89.966 55.452 89.2858C50.8083 87.4418 49.9481 86.1879 46.9176 82.4494C43.162 77.8165 41.4037 74.3855 40.841 68.1701C40.0572 59.5122 41.4542 52.7277 47.0741 45.8604C53.166 38.4164 58.9921 36.9352 68.2082 36.0406Z" fill="currentColor"/>
          </svg>}
          label="Total Farmers"
          value={248}
          trend="12.23%"
          trendUp={true}
        />
        <MetricWidget
          icon={<svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C9.24 2 7 4.24 7 7v1H4c-.55 0-1 .45-1 1v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-.55-.45-1-1-1h-3V7c0-2.76-2.24-5-5-5M9 7c0-1.65 1.35-3 3-3s3 1.35 3 3v1H9zm10 3v10H5V10z"></path></svg>}
          label="Total Bags"
          value="12,450"
          trend="8.47%"
          trendUp={true}
        />
        <MetricWidget
          icon={<svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3C6.49 3 2 7.49 2 13v6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-6c0-5.51-4.49-10-10-10m4 12H8v-2h8zm-8 4v-2h8v2zm12 0h-2v-6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v6H4v-6c0-4.41 3.59-8 8-8s8 3.59 8 8z"></path></svg>}
          label="Total Warehouses"
          value={42}
          trend="5.12%"
          trendUp={true}
        />
      </div>

      {/* ── Chart + Side Cards ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Chart takes 2/3 */}
        <div className="lg:col-span-2">
          <PurchasingRevenueChart />
        </div>

        {/* Side cards take 1/3 */}
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-semibold text-gray-700">Recent Audit Logs</h3>
              <button onClick={() => router.push("/dashboard/admin/audit-logs")} className="text-xs text-green-700 font-semibold hover:underline">View All</button>
            </div>
            <div className="flex flex-col gap-3 flex-1">
              {[
                { id: 1, action: "USER_LOGIN", user: "admin@nasfam.org", time: "10 mins ago", color: "bg-gray-300" },
                { id: 2, action: "ROLE_UPDATED", user: "admin@nasfam.org", time: "1 hour ago", color: "bg-gray-300" },
                { id: 3, action: "SYNC_COMPLETED", user: "ipc.lilongwe@nasfam.org", time: "2 hours ago", color: "bg-gray-300" },
                { id: 4, action: "USER_CREATED", user: "admin@nasfam.org", time: "5 hours ago", color: "bg-gray-300" },
                { id: 5, action: "DATA_EXPORT", user: "admin@nasfam.org", time: "1 day ago", color: "bg-gray-300" }
              ].map(log => (
                <div key={log.id} className="flex items-start gap-3 border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                  <div className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${log.color}`}></div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-800">{log.action.replace(/_/g, ' ')}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{log.user}</p>
                  </div>
                  <span className="text-xs text-gray-400 font-medium whitespace-nowrap">{log.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
