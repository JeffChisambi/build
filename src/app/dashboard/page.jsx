"use client";

import { useAuth } from "@/auth/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import HeadOfficeDashboard from "./_components/HeadOfficeDashboard";
import IPCManagerDashboard from "./_components/IPCManagerDashboard";
import WarehouseOfficerDashboard from "./_components/WarehouseOfficerDashboard";

// ── Main Page ─────────────────────────────────────────────────────────
export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();
  const firstName = user?.name?.split(" ")[0] ?? "System Administrator";

  useEffect(() => {
    if (user?.roleId === "role-sysadmin") {
      router.replace("/dashboard/admin");
    }
  }, [user, router]);

  // Role-based rendering
  if (user?.roleId === "role-head-office") {
    return <HeadOfficeDashboard firstName={firstName} />;
  }

  if (user?.roleId === "role-ipc-manager") {
    return <IPCManagerDashboard firstName={firstName} />;
  }

  if (user?.roleId === "role-warehouse-officer") {
    return <WarehouseOfficerDashboard firstName={firstName} />;
  }

  // Fallback for any other non-sysadmin roles (if any) or while loading
  return (
    <div className="p-6 flex items-center justify-center min-h-[50vh]">
      <div className="text-center animate-pulse">
        <p className="text-gray-500 dark:text-gray-400">Loading your customized dashboard...</p>
      </div>
    </div>
  );
}
