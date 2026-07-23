"use client";

import { useAuth } from "@/auth/authContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ROLE_REPORTS = {
  "role-sysadmin": {
    title: "System Reports",
    description:
      "Reports for system monitoring, security, synchronization, and audit review.",
    cards: [
      {
        title: "User Reports",
        description:
          "Review active user accounts, role assignments, access levels, and system access patterns.",
        bullets: [
          "Active vs inactive accounts",
          "Role distribution and access scope",
          "Recent login and access trends",
        ],
      },
      {
        title: "Audit Reports",
        description:
          "Inspect administrative actions, configuration changes, and security audit events.",
        bullets: [
          "Admin activity and changes",
          "System configuration history",
          "Security and compliance audit logs",
        ],
      },
      {
        title: "System Health",
        description:
          "Track platform uptime, performance warnings, and overall system stability.",
        bullets: [
          "Current service availability",
          "Operational alerts and warnings",
          "Sync and system health indicators",
        ],
      },
    ],
  },
  "role-ipc-manager": {
    title: "IPC Business Reports",
    description:
      "Operational and business reports for IPC managers, focused on farmers, purchases, and traceability.",
    cards: [
      {
        title: "Farmer Reports",
        description:
          "Farmer registration, demographic summaries, onboarding metrics, and active farmer counts.",
      },
      {
        title: "Purchase Reports",
        description:
          "Commodity purchases, procurement trends, price summaries, and purchase history.",
      },
      {
        title: "Seed Loan Reports",
        description:
          "Loan disbursements, repayment progress, outstanding balances, and recovery performance.",
      },
      {
        title: "Warehouse Reports",
        description:
          "Goods received, inventory balances, stock movement, and warehouse utilization.",
      },
      {
        title: "Traceability Reports",
        description:
          "Batch tracking, origin verification, supply chain visibility, and trace history.",
      },
      {
        title: "Performance Reports",
        description:
          "IPC operational KPIs, staff activity, and efficiency metrics.",
      },
    ],
  },
  "role-head-office": {
    title: "Executive Reports",
    description:
      "Organization-wide reports for head office oversight, analytics, and strategic decision making.",
    cards: [
      {
        title: "National Reports",
        description:
          "Country-level summaries, regional performance, and national trends.",
      },
      {
        title: "IPC Performance",
        description:
          "IPC scorecards, benchmarking, and efficiency comparisons.",
      },
      {
        title: "Commodity Analytics",
        description:
          "Commodity volume, pricing trends, and analytics for key produce categories.",
      },
      {
        title: "Farmer Statistics",
        description:
          "Farmer participation, segmentation, adoption rates, and retention metrics.",
      },
      {
        title: "Warehouse Statistics",
        description:
          "Warehouse utilization, throughput, capacity, and stock health.",
      },
      {
        title: "Traceability Reports",
        description:
          "Supply chain visibility, provenance, batch reconciliation, and audit trails.",
      },
      {
        title: "Executive Dashboard",
        description:
          "High-level KPIs, strategic indicators, and performance summaries for leadership.",
      },
    ],
  },
  default: {
    title: "Reports",
    description:
      "This reports module will be tailored based on your role. System administrators see system monitoring reports, while business roles see operational report categories.",
    cards: [
      {
        title: "Reports Module",
        description:
          "This page is under construction. The appropriate report categories will be shown once your role is recognized.",
      },
    ],
  },
};

export default function ReportsPage() {
  const { user } = useAuth();
  const router = useRouter();
  const roleId = user?.roleId || "default";
  const tabs = ROLE_REPORTS[roleId]?.cards || ROLE_REPORTS.default.cards;

  useEffect(() => {
    if (tabs.length > 0) {
      const firstTitle = tabs[0].title;
      const pageMap = {
        "User Reports": "/dashboard/reports/user-reports",
        "Audit Reports": "/dashboard/reports/audit-reports",
        "System Health": "/dashboard/reports/system-health",
        "National Reports": "/dashboard/reports/national",
        "IPC Performance": "/dashboard/reports/ipc-performance",
        "Farmer Statistics": "/dashboard/reports/farmer-statistics",
        "Warehouse Statistics": "/dashboard/reports/warehouse-statistics",
        "Traceability Reports": "/dashboard/reports/traceability-reports",
        "Executive Dashboard": "/dashboard/reports/national",
      };
      const target = pageMap[firstTitle] || "/dashboard/reports";
      router.replace(target);
    }
  }, [router, tabs]);

  return null;
}
