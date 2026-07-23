"use client";

import { useMemo, useRef, useState } from "react";

// ── Helpers ────────────────────────────────────────────────────────────────

function formatAction(action) {
  if (!action || action === "All") return "All Actions";
  return action
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

// ── Log-type config ────────────────────────────────────────────────────────
// showActionFilter: whether the action dropdown makes sense for this type

const LOG_TYPES = [
  { value: "all",        label: "All Logs",             modules: null,                                          showActionFilter: true  },
  { value: "auth",       label: "Authentication Logs",  modules: ["Authentication"],                            showActionFilter: false },
  { value: "ipc",        label: "IPC Logs",             modules: ["Synchronization", "IPC Management"],         showActionFilter: false },
  { value: "warehouse",  label: "Warehouse Logs",       modules: ["Warehouse"],                                 showActionFilter: false },
  { value: "users",      label: "User Management Logs", modules: ["User Management", "Roles & Permissions"],    showActionFilter: false },
  { value: "reports",    label: "Report Logs",          modules: ["Reports"],                                   showActionFilter: false },
  { value: "system",     label: "System Logs",          modules: ["System Settings"],                           showActionFilter: false },
];

// ── Mock data ──────────────────────────────────────────────────────────────

const mockAuditLogs = [
  // Authentication
  { id: 1,  timestamp: "2024-07-13T14:32:00Z", user: "admin@nasfam.org",              action: "USER_LOGIN",            module: "Authentication",     severity: "Info"    },
  { id: 5,  timestamp: "2024-07-13T12:55:00Z", user: "admin@nasfam.org",              action: "FAILED_LOGIN_ATTEMPT",  module: "Authentication",     severity: "Warning" },
  { id: 11, timestamp: "2024-07-13T08:10:00Z", user: "ipc.kasungu@nasfam.org",        action: "USER_LOGIN",            module: "Authentication",     severity: "Info"    },
  { id: 12, timestamp: "2024-07-12T17:45:00Z", user: "unknown@external.com",          action: "FAILED_LOGIN_ATTEMPT",  module: "Authentication",     severity: "Warning" },
  // User Management
  { id: 2,  timestamp: "2024-07-13T14:15:00Z", user: "admin@nasfam.org",              action: "USER_CREATED",          module: "User Management",    severity: "Info"    },
  { id: 8,  timestamp: "2024-07-13T11:20:00Z", user: "admin@nasfam.org",              action: "PASSWORD_RESET",        module: "User Management",    severity: "Warning" },
  { id: 13, timestamp: "2024-07-13T07:30:00Z", user: "admin@nasfam.org",              action: "USER_DEACTIVATED",      module: "User Management",    severity: "Warning" },
  { id: 3,  timestamp: "2024-07-13T13:45:00Z", user: "admin@nasfam.org",              action: "ROLE_UPDATED",          module: "Roles & Permissions",severity: "Info"    },
  // IPC Logs
  { id: 4,  timestamp: "2024-07-13T13:20:00Z", user: "ipc.lilongwe@nasfam.org",       action: "SYNC_COMPLETED",        module: "Synchronization",    severity: "Success" },
  { id: 14, timestamp: "2024-07-13T11:00:00Z", user: "ipc.mzuzu@nasfam.org",          action: "SYNC_FAILED",           module: "Synchronization",    severity: "Warning" },
  { id: 15, timestamp: "2024-07-13T09:45:00Z", user: "ipc.blantyre@nasfam.org",       action: "SYNC_COMPLETED",        module: "Synchronization",    severity: "Success" },
  { id: 16, timestamp: "2024-07-13T08:00:00Z", user: "admin@nasfam.org",              action: "IPC_REGISTERED",        module: "IPC Management",     severity: "Info"    },
  // Warehouse
  { id: 6,  timestamp: "2024-07-13T12:30:00Z", user: "warehouse.lilongwe@nasfam.org", action: "INVENTORY_UPDATED",     module: "Warehouse",          severity: "Info"    },
  { id: 17, timestamp: "2024-07-13T10:15:00Z", user: "warehouse.mchinji@nasfam.org",  action: "STOCK_TRANSFERRED",     module: "Warehouse",          severity: "Info"    },
  { id: 18, timestamp: "2024-07-12T16:00:00Z", user: "warehouse.kasungu@nasfam.org",  action: "INVENTORY_DISCREPANCY", module: "Warehouse",          severity: "Warning" },
  // Reports
  { id: 7,  timestamp: "2024-07-13T11:45:00Z", user: "admin@nasfam.org",              action: "DATA_EXPORT",           module: "Reports",            severity: "Info"    },
  { id: 9,  timestamp: "2024-07-13T10:30:00Z", user: "headoffice@nasfam.org",         action: "REPORT_GENERATED",      module: "Reports",            severity: "Info"    },
  { id: 19, timestamp: "2024-07-12T14:00:00Z", user: "headoffice@nasfam.org",         action: "REPORT_PRINTED",        module: "Reports",            severity: "Info"    },
  // System
  { id: 10, timestamp: "2024-07-13T09:15:00Z", user: "admin@nasfam.org",              action: "SYSTEM_CONFIGURATION",  module: "System Settings",    severity: "Info"    },
  { id: 20, timestamp: "2024-07-12T08:00:00Z", user: "admin@nasfam.org",              action: "BACKUP_COMPLETED",      module: "System Settings",    severity: "Success" },
];

// ── Reusable dropdown ──────────────────────────────────────────────────────

function StyledDropdown({ value, options, onChange, getLabel, minWidth = "160px" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const selectedLabel = getLabel ? getLabel(value) : value;

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        style={{ minWidth }}
        className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors justify-between"
      >
        <span>{selectedLabel}</span>
        <svg className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 z-20 mt-1 rounded-xl border border-gray-100 bg-white shadow-lg overflow-hidden" style={{ minWidth }}>
          {options.map((opt) => {
            const label = getLabel ? getLabel(opt) : opt;
            return (
              <button
                key={opt}
                type="button"
                onMouseDown={() => { onChange(opt); setOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors whitespace-nowrap ${
                  value === opt
                    ? "bg-gray-100 text-gray-900 font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ── Severity badge ─────────────────────────────────────────────────────────

function SeverityBadge({ severity }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
      {severity}
    </span>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────

export default function AuditLogsPage() {
  const [logType,      setLogType]      = useState("all");
  const [filterAction, setFilterAction] = useState("All");

  const activeType = LOG_TYPES.find((t) => t.value === logType);

  // Reset action filter when switching log types
  const handleLogTypeChange = (val) => {
    setLogType(val);
    setFilterAction("All");
  };

  const logsForType = useMemo(() => {
    if (!activeType?.modules) return mockAuditLogs;
    return mockAuditLogs.filter((l) => activeType.modules.includes(l.module));
  }, [logType]);

  const uniqueActions = useMemo(
    () => ["All", ...new Set(logsForType.map((l) => l.action))],
    [logsForType]
  );

  const filteredLogs = useMemo(() => {
    if (!activeType?.showActionFilter || filterAction === "All") return logsForType;
    return logsForType.filter((l) => l.action === filterAction);
  }, [logsForType, filterAction, activeType]);

  const exportAuditLogs = () => {
    const headers = ["Timestamp", "User", "Action", "Module", "Severity"];
    const rows = filteredLogs.map((log) => [
      new Date(log.timestamp).toLocaleString(),
      log.user, log.action, log.module, log.severity,
    ]);
    const content = [headers.join("\t"), ...rows.map((r) => r.join("\t"))].join("\n");
    const blob = new Blob([content], { type: "application/vnd.ms-excel;charset=utf-8;" });
    const url  = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url; link.download = "audit-logs.xls"; link.click();
    URL.revokeObjectURL(url);
  };

  const printAuditLogs = () => {
    const win = window.open("", "_blank", "width=900,height=700");
    if (!win) return;
    const rows = filteredLogs.map((l) => `
      <tr>
        <td>${new Date(l.timestamp).toLocaleString()}</td>
        <td>${l.user}</td><td>${l.action}</td>
        <td>${l.module}</td><td>${l.severity}</td>
      </tr>`).join("");
    win.document.write(`<!DOCTYPE html><html><head><title>Audit Logs</title>
      <style>body{font-family:Arial,sans-serif;padding:24px;color:#111827}
      table{width:100%;border-collapse:collapse;font-size:12px}
      th,td{border:1px solid #d1d5db;padding:8px;text-align:left}
      th{background:#f3f4f6}</style></head><body>
      <h1>Audit Logs — ${activeType?.label ?? "All"}</h1>
      <p>${filteredLogs.length} records</p>
      <table><thead><tr><th>Timestamp</th><th>User</th><th>Action</th><th>Module</th><th>Severity</th></tr></thead>
      <tbody>${rows}</tbody></table></body></html>`);
    win.document.close(); win.focus(); win.print(); win.close();
  };

  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      <div className="bg-white rounded-xl border border-gray-200">

        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            {/* Log-type picker */}
            <StyledDropdown
              value={logType}
              options={LOG_TYPES.map((t) => t.value)}
              getLabel={(v) => LOG_TYPES.find((t) => t.value === v)?.label ?? v}
              onChange={handleLogTypeChange}
              minWidth="200px"
            />
            {/* Action filter — only for All Logs */}
            {activeType?.showActionFilter && (
              <StyledDropdown
                value={filterAction}
                options={uniqueActions}
                getLabel={(v) => v === "All" ? "All Actions" : formatAction(v)}
                onChange={setFilterAction}
                minWidth="180px"
              />
            )}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={exportAuditLogs} className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Export Excel
            </button>
            <button onClick={printAuditLogs} className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Print Report
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto overflow-hidden rounded-b-xl">
          <table className="w-auto min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-5 py-3 text-xs font-semibold text-gray-700">Timestamp</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-700">User</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-700">Action</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-700">Module</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-700">Severity</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.length > 0 ? (
                filteredLogs.map((log, idx) => (
                  <tr key={log.id} className={`border-b border-gray-50 hover:bg-gray-50 transition-colors ${idx === filteredLogs.length - 1 ? "border-b-0" : ""}`}>
                    <td className="px-5 py-3.5 text-xs text-gray-400 whitespace-nowrap">
                      {new Date(log.timestamp).toLocaleString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                    </td>
                    <td className="px-5 py-3.5 text-sm font-medium text-gray-400">{log.user}</td>
                    <td className="px-5 py-3.5 text-xs text-gray-400">{formatAction(log.action)}</td>
                    <td className="px-5 py-3.5 text-xs text-gray-400">{log.module}</td>
                    <td className="px-5 py-3.5"><SeverityBadge severity={log.severity} /></td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-5 py-8 text-center text-gray-500 text-sm">
                    No logs found for this category.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-gray-100 text-xs text-gray-400">
          Showing {filteredLogs.length} of {mockAuditLogs.length} audit logs
        </div>

      </div>
    </div>
  );
}
