"use client";

import WorkspaceLayout from "@/components/WorkspaceLayout";

const ANALYTICS_ICON = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
  </svg>
);

const TABS = [
  { label: "KPIs", href: "/dashboard/analytics/kpis" },
  { label: "Warehouse Performance", href: "/dashboard/analytics/warehouse-performance" },
  { label: "Production Trends", href: "/dashboard/analytics/production-trends" },
  { label: "IPC Comparison", href: "/dashboard/analytics/ipc-comparison" },
  { label: "Forecasts", href: "/dashboard/analytics/forecasts" },
];

export default function AnalyticsLayout({ children }) {
  return (
    <WorkspaceLayout
      icon={ANALYTICS_ICON}
      module="Analytics"
      moduleHref="/dashboard/analytics/kpis"
      title="Analytics"
      description="Operational intelligence, performance metrics, and data-driven insights."
      tabs={TABS}
      hideTitleBlock={true}
      hideHeader={true}
    >
      {children}
    </WorkspaceLayout>
  );
}
