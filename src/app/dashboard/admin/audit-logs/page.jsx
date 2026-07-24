"use client";

import { useMemo, useRef, useState, useEffect, useCallback } from "react";
import { auditService } from "@/lib/api/audit";

function formatAction(action) {
  if (!action || action === "All") return "All Actions";
  return action.split("_").map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ");
}

const LOG_TYPES = [
  { value: "all",       label: "All Logs",             modules: null,                                        showActionFilter: true  },
  { value: "auth",      label: "Authentication Logs",  modules: ["Authentication"],                          showActionFilter: false },
  { value: "ipc",       label: "IPC Logs",             modules: ["Synchronization", "IPC Management"],       showActionFilter: false },
  { value: "warehouse", label: "Warehouse Logs",       modules: ["Warehouse"],                               showActionFilter: false },
  { value: "users",     label: "User Management Logs", modules: ["User Management", "Roles & Permissions"],  showActionFilter: false },
  { value: "reports",   label: "Report Logs",          modules: ["Reports"],                                 showActionFilter: false },
  { value: "system",    label: "System Logs",          modules: ["System Settings"],                         showActionFilter: false },
];

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
              <button key={opt} type="button" onMouseDown={() => { onChange(opt); setOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors whitespace-nowrap ${value === opt ? "bg-gray-100 text-gray-900 font-semibold" : "text-gray-700 hover:bg-gray-50"}`}>
                {label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function SeverityBadge({ severity }) {
  const map = {
    Info:    "bg-blue-50 text-blue-700",
    Warning: "bg-amber-50 text-amber-700",
    Success: "bg-green-50 text-green-700",
    Error:   "bg-red-50 text-red-700",
  };
  return <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${map[severity] || "bg-gray-100 text-gray-600"}`}>{severity}</span>;
}

export default function AuditLogsPage() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeType, setActiveType] = useState(LOG_TYPES[0]);
  const [activeAction, setActiveAction] = useState("All");

  const actionOptions = useMemo(() => {
    const actions = ["All", ...new Set(logs.map((l) => l.action).filter(Boolean))];
    return actions;
  }, [logs]);

  const fetchLogs = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = {};
      if (activeType.value !== "all") params.type = activeType.value;
      const { data } = await auditService.list(params);
      setLogs(data ?? []);
    } catch (err) {
      setError(err.message ?? "Failed to load audit logs.");
    } finally {
      setLoading(false);
    }
  }, [activeType]);

  useEffect(() => { fetchLogs(); }, [fetchLogs]);

  const filteredLogs = useMemo(() => {
    if (!activeType?.modules && activeAction === "All") return logs;
    return logs.filter((l) => {
      const matchModule = !activeType?.modules || activeType.modules.includes(l.module);
      const matchAction = activeAction === "All" || l.action === activeAction;
      return matchModule && matchAction;
    });
  }, [logs, activeType, activeAction]);

  const handleExport = async () => {
    try {
      const params = {};
      if (activeType.value !== "all") params.type = activeType.value;
      await auditService.export(params);
    } catch (err) {
      alert(err.message ?? "Export failed.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Administration</p>
          <h1 className="text-xl font-bold text-gray-900">Audit Logs</h1>
          <p className="text-sm text-gray-500 mt-0.5">System-wide activity trail for compliance and security monitoring.</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export Excel
          </button>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#1a5c2a] rounded-lg hover:bg-[#134520] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print Report
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-3 flex-wrap">
        <StyledDropdown
          value={activeType.value}
          options={LOG_TYPES.map((t) => t.value)}
          onChange={(v) => { setActiveType(LOG_TYPES.find((t) => t.value === v)); setActiveAction("All"); }}
          getLabel={(v) => LOG_TYPES.find((t) => t.value === v)?.label ?? v}
          minWidth="200px"
        />
        {activeType.showActionFilter && (
          <StyledDropdown
            value={activeAction}
            options={actionOptions}
            onChange={setActiveAction}
            getLabel={formatAction}
            minWidth="180px"
          />
        )}
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
          {error} — <button onClick={fetchLogs} className="underline font-semibold">Retry</button>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                {["Timestamp", "User", "Action", "Module", "Severity"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                Array.from({ length: 8 }).map((_, i) => (
                  <tr key={i} className="border-b border-gray-100 animate-pulse">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <td key={j} className="px-4 py-3"><div className="h-3.5 bg-gray-200 rounded w-3/4" /></td>
                    ))}
                  </tr>
                ))
              ) : filteredLogs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-12 text-center text-sm text-gray-500">
                    No audit logs found. Connect a backend to stream real audit events.
                  </td>
                </tr>
              ) : (
                filteredLogs.map((log) => (
                  <tr key={log.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-xs text-gray-500 whitespace-nowrap">{new Date(log.timestamp).toLocaleString()}</td>
                    <td className="px-4 py-3 text-gray-700">{log.user ?? log.userName}</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">{log.action}</td>
                    <td className="px-4 py-3 text-gray-600">{log.module}</td>
                    <td className="px-4 py-3"><SeverityBadge severity={log.severity} /></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {!loading && (
          <div className="px-4 py-3 border-t border-gray-100 text-xs text-gray-500">
            Showing {filteredLogs.length} {filteredLogs.length !== logs.length ? `of ${logs.length} ` : ""}audit logs
          </div>
        )}
      </div>
    </div>
  );
}
