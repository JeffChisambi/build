"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { dashboardService } from "@/lib/api/dashboard";
import { auditService } from "@/lib/api/audit";

const Icons = {
  users: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  roles: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
  warehouse: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  ipc: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
  sync: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
  audit: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
  settings: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /></svg>,
  arrowRight: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>,
};

function ModuleCard({ icon, title, description, stats, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-xl border border-gray-200 p-5 transition-all text-left group hover:-translate-y-0.5 hover:shadow-sm"
    >
      <div className="flex items-start gap-4">
        <div className="text-gray-500 group-hover:text-gray-700 transition-colors mt-0.5">{icon}</div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          {stats && (
            <div className="flex gap-4 mt-3">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-xs">
                  <p className="font-bold text-gray-900">{stat.value ?? "—"}</p>
                  <p className="text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="text-gray-400 group-hover:text-gray-600 transition-colors mt-1">{Icons.arrowRight}</div>
      </div>
    </button>
  );
}

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
            <svg className={`w-3.5 h-3.5 ${trendUp ? "text-[#1a5c2a]" : "text-red-500"}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={trendUp ? "M7 17L17 7M17 7H7M17 7v10" : "M7 7l10 10M17 17H7M17 17V7"} />
            </svg>
            <span className={`text-xs font-semibold ${trendUp ? "text-[#1a5c2a]" : "text-red-600"}`}>{trend}</span>
          </div>
        )}
      </div>
      <p className="text-xl font-bold text-gray-900">{value ?? "—"}</p>
    </div>
  );
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [metrics, setMetrics] = useState(null);
  const [recentLogs, setRecentLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [metricsRes, logsRes] = await Promise.all([
        dashboardService.getMetrics(),
        auditService.list({ limit: 5 }),
      ]);
      setMetrics(metricsRes.data ?? null);
      setRecentLogs(logsRes.data?.slice(0, 5) ?? []);
    } catch {
      /* non-critical — page still renders with empty stats */
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  const m = metrics ?? {};

  const modules = [
    {
      icon: Icons.users,
      title: "User Management",
      description: "Manage system users, farmers, and account access.",
      href: "/dashboard/admin/users",
      stats: [
        { value: loading ? "…" : m.totalUsers ?? 0, label: "Total Users" },
        { value: loading ? "…" : m.activeUsers ?? 0, label: "Active" },
      ],
    },
    {
      icon: Icons.roles,
      title: "Roles & Permissions",
      description: "Define roles and control access across the platform.",
      href: "/dashboard/admin/roles",
      stats: [{ value: loading ? "…" : m.totalRoles ?? 0, label: "Roles" }],
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
      stats: [{ value: loading ? "…" : m.totalIPCs ?? 0, label: "IPCs" }],
    },
    {
      icon: Icons.sync,
      title: "Sync Management",
      description: "Monitor mobile device synchronization and data health.",
      href: "/dashboard/admin/sync-management",
      stats: [{ value: loading ? "…" : m.devicesSynced ?? 0, label: "Devices Synced" }],
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

      {/* KPI strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricWidget
          icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
          label="Total Farmers"
          value={loading ? "…" : (m.totalFarmers ?? 0).toLocaleString()}
        />
        <MetricWidget
          icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
          label="Total Purchases"
          value={loading ? "…" : (m.totalPurchases ?? 0).toLocaleString()}
        />
        <MetricWidget
          icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
          label="Devices Online"
          value={loading ? "…" : m.devicesOnline ?? 0}
        />
      </div>

      {/* Module grid + recent logs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {modules.map((mod) => (
            <ModuleCard
              key={mod.href}
              icon={mod.icon}
              title={mod.title}
              description={mod.description}
              stats={mod.stats}
              onClick={() => router.push(mod.href)}
            />
          ))}
        </div>

        {/* Recent audit log sidebar */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold text-gray-700">Recent Audit Logs</h3>
            <button onClick={() => router.push("/dashboard/admin/audit-logs")} className="text-xs text-[#1a5c2a] font-semibold hover:underline">View All</button>
          </div>
          <div className="flex flex-col gap-3 flex-1">
            {loading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="animate-pulse flex items-start gap-3 border-b border-gray-50 pb-3 last:border-0">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-gray-200 flex-shrink-0" />
                  <div className="flex-1 space-y-1.5">
                    <div className="h-3 bg-gray-200 rounded w-3/4" />
                    <div className="h-2.5 bg-gray-100 rounded w-1/2" />
                  </div>
                </div>
              ))
            ) : recentLogs.length === 0 ? (
              <p className="text-xs text-gray-400 text-center pt-8">No audit logs available.<br />Connect a backend to stream events.</p>
            ) : (
              recentLogs.map((log) => (
                <div key={log.id} className="flex items-start gap-3 border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                  <div className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0 bg-gray-300" />
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-800">{(log.action ?? "").replace(/_/g, " ")}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{log.user ?? log.userName}</p>
                  </div>
                  <span className="text-xs text-gray-400 font-medium whitespace-nowrap">
                    {log.timestamp ? new Date(log.timestamp).toLocaleTimeString() : ""}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

    </div>
  );
}
