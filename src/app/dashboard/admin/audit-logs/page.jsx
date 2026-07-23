"use client";

import { useMemo, useRef, useState } from "react";

function formatAction(action) {
  if (!action || action === "All") return "All Actions";
  return action
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

function ActionDropdown({ value, options, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  if (typeof window !== "undefined") {
    // handled via onBlur pattern below
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors min-w-[160px] justify-between"
      >
        <span>{formatAction(value)}</span>
        <svg className={`w-4 h-4 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 z-20 mt-1 w-52 rounded-xl border border-gray-100 bg-white shadow-lg overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                value === opt
                  ? "bg-gray-100 text-gray-900 font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {formatAction(opt)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const Icons = {
  search: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  filter: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>
  ),
};

// Mock audit data
const mockAuditLogs = [
  { id: 1, timestamp: "2024-07-13T14:32:00Z", user: "admin@nasfam.org", action: "USER_LOGIN", module: "Authentication", details: "Successful login", severity: "Info" },
  { id: 2, timestamp: "2024-07-13T14:15:00Z", user: "admin@nasfam.org", action: "USER_CREATED", module: "User Management", details: "Created user: warehouse.lilongwe@nasfam.org", severity: "Info" },
  { id: 3, timestamp: "2024-07-13T13:45:00Z", user: "admin@nasfam.org", action: "ROLE_UPDATED", module: "Roles & Permissions", details: "Updated IPC Manager permissions", severity: "Info" },
  { id: 4, timestamp: "2024-07-13T13:20:00Z", user: "ipc.lilongwe@nasfam.org", action: "SYNC_COMPLETED", module: "Synchronization", details: "45 farmer records synchronized", severity: "Success" },
  { id: 5, timestamp: "2024-07-13T12:55:00Z", user: "admin@nasfam.org", action: "FAILED_LOGIN_ATTEMPT", module: "Authentication", details: "Failed login attempt from invalid user", severity: "Warning" },
  { id: 6, timestamp: "2024-07-13T12:30:00Z", user: "warehouse.lilongwe@nasfam.org", action: "INVENTORY_UPDATED", module: "Warehouse", details: "Updated stock for Lilongwe warehouse", severity: "Info" },
  { id: 7, timestamp: "2024-07-13T11:45:00Z", user: "admin@nasfam.org", action: "DATA_EXPORT", module: "Reports", details: "Exported farmer records to CSV", severity: "Info" },
  { id: 8, timestamp: "2024-07-13T11:20:00Z", user: "admin@nasfam.org", action: "PASSWORD_RESET", module: "User Management", details: "Reset password for warehouse.mchinji@nasfam.org", severity: "Warning" },
  { id: 9, timestamp: "2024-07-13T10:30:00Z", user: "headoffice@nasfam.org", action: "REPORT_GENERATED", module: "Reports", details: "Generated monthly performance report", severity: "Info" },
  { id: 10, timestamp: "2024-07-13T09:15:00Z", user: "admin@nasfam.org", action: "SYSTEM_CONFIGURATION", module: "System Settings", details: "Updated system configuration settings", severity: "Info" },
];

function SeverityBadge({ severity }) {
  const styles = {
    Info: "bg-gray-100 text-gray-600",
    Success: "bg-gray-100 text-gray-600",
    Warning: "bg-gray-100 text-gray-600",
    Error: "bg-gray-100 text-gray-600",
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${styles[severity] || "bg-gray-100 text-gray-700"}`}>
      {severity}
    </span>
  );
}

export default function AuditLogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterAction, setFilterAction] = useState("All");

  const uniqueActions = useMemo(() => ["All", ...new Set(mockAuditLogs.map((log) => log.action))], []);

  const filteredLogs = useMemo(() => mockAuditLogs.filter((log) => {
    const matchesSearch =
      log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.module.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.details.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesAction = filterAction === "All" || log.action === filterAction;

    return matchesSearch && matchesAction;
  }), [filterAction, searchTerm]);

  const exportAuditLogs = () => {
    const headers = ["Timestamp", "User", "Action", "Module", "Details", "Severity"];
    const rows = filteredLogs.map((log) => [
      new Date(log.timestamp).toLocaleString(),
      log.user,
      log.action,
      log.module,
      log.details,
      log.severity,
    ]);
    const content = [headers.join("\t"), ...rows.map((row) => row.join("\t"))].join("\n");
    const blob = new Blob([content], { type: "application/vnd.ms-excel;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "audit-logs.xls";
    link.click();
    URL.revokeObjectURL(url);
  };

  const printAuditLogs = () => {
    const printWindow = window.open("", "_blank", "width=900,height=700");
    if (!printWindow) return;

    const rowsMarkup = filteredLogs
      .map((log) => `
        <tr>
          <td>${new Date(log.timestamp).toLocaleString()}</td>
          <td>${log.user}</td>
          <td>${log.action}</td>
          <td>${log.module}</td>
          <td>${log.details}</td>
          <td>${log.severity}</td>
        </tr>
      `)
      .join("");

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Audit Logs</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 24px; color: #111827; }
            h1 { font-size: 20px; margin-bottom: 8px; }
            p { color: #4b5563; margin-bottom: 16px; }
            table { width: 100%; border-collapse: collapse; font-size: 12px; }
            th, td { border: 1px solid #d1d5db; padding: 8px; text-align: left; }
            th { background: #f3f4f6; }
          </style>
        </head>
        <body>
          <h1>Audit Logs</h1>
          <p>${filteredLogs.length} matching audit records</p>
          <table>
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>User</th>
                <th>Action</th>
                <th>Module</th>
                <th>Details</th>
                <th>Severity</th>
              </tr>
            </thead>
            <tbody>${rowsMarkup}</tbody>
          </table>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      <div className="bg-white rounded-xl border border-gray-200">

        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 flex-1 min-w-[200px] max-w-sm">
            <span className="text-gray-400">{Icons.search}</span>
            <input
              type="text"
              placeholder="Search audit logs"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 outline-none text-sm text-gray-700"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <ActionDropdown value={filterAction} options={uniqueActions} onChange={setFilterAction} />
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
                <th className="px-5 py-3 text-xs font-semibold text-gray-500">Timestamp</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-500">User</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-500">Action</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-500">Module</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-500">Severity</th>
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
                    <td className="px-5 py-3.5">
                      <SeverityBadge severity={log.severity} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-5 py-8 text-center text-gray-500 text-sm">
                    No logs found matching your filters.
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
