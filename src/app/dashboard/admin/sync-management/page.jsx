"use client";

import { useState, useEffect, useCallback } from "react";
import { syncService } from "@/lib/api/sync";

// ── Icons ─────────────────────────────────────────────────────
const Icons = {
  sync: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.29 7.29 7 13.58l-2.29-2.29L3.3 12.7l3 3c.2.2.45.29.71.29s.51-.1.71-.29l7-7-1.41-1.41Zm-.29 6.3-.79-.79-1.41 1.41 1.5 1.5c.2.2.45.29.71.29s.51-.1.71-.29l7-7-1.41-1.41-6.29 6.29Z" /></svg>,
  cloud: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>,
  checkCircle: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  alertCircle: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11 8h2v4.5h-2zm0 6h2v2h-2z"></path><path d="M12 2C6.49 2 2 6.49 2 12c0 2.12.68 4.19 1.93 5.9l-1.75 2.53c-.21.31-.24.7-.06 1.03.17.33.51.54.89.54h9c5.51 0 10-4.49 10-10S17.51 2 12 2m0 18H4.91L6 18.43c.26-.37.23-.88-.06-1.22A7.98 7.98 0 0 1 4.01 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8Z"></path></svg>,
  server: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>,
};

function SyncStatusBadge({ status }) {
  const colors = { Synced: "text-[#1a5c2a]", Failed: "text-red-600", Pending: "text-amber-600" };
  const dots = { Synced: "bg-[#1a5c2a]", Failed: "bg-red-500", Pending: "bg-amber-500" };
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${colors[status] || "text-gray-400"}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dots[status] || "bg-gray-300"}`} />
      {status}
    </span>
  );
}

function MetricCard({ label, value, icon, trend, trendUp = true }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-3 flex-1 min-w-[200px]">
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

function DeviceCard({ device }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-bold text-gray-900">{device.officerName}</p>
        <SyncStatusBadge status={device.syncStatus} />
      </div>
      <div className="space-y-2 text-xs">
        <div className="flex justify-between"><span className="text-gray-500">Last Sync</span><span className="font-semibold text-gray-900">{device.lastSync ? new Date(device.lastSync).toLocaleTimeString() : "—"}</span></div>
        <div className="flex justify-between"><span className="text-gray-500">Pending</span><span className="font-semibold text-gray-900">{device.pendingRecords ?? 0}</span></div>
        <div className="flex justify-between"><span className="text-gray-500">Failed</span><span className={`font-semibold ${(device.failedRecords ?? 0) > 0 ? "text-red-600" : "text-gray-900"}`}>{device.failedRecords ?? 0}</span></div>
        <div className="flex justify-between"><span className="text-gray-500">Device</span><span className="font-semibold text-gray-900 truncate max-w-[120px]">{device.deviceModel}</span></div>
        <div className="flex justify-between"><span className="text-gray-500">App Ver.</span><span className="font-semibold text-gray-900">{device.appVersion}</span></div>
      </div>
    </div>
  );
}

export default function SyncManagementPage() {
  const [metrics, setMetrics] = useState(null);
  const [devices, setDevices] = useState([]);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [syncing, setSyncing] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [metricsRes, devicesRes, historyRes] = await Promise.all([
        syncService.getMetrics(),
        syncService.listDevices(),
        syncService.listHistory(),
      ]);
      setMetrics(metricsRes.data ?? null);
      setDevices(devicesRes.data ?? []);
      setHistory(historyRes.data ?? []);
    } catch (err) {
      setError(err.message ?? "Failed to load sync data.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  const handleManualSync = async () => {
    setSyncing(true);
    try {
      await syncService.trigger();
      showToast("Manual sync triggered successfully.");
      setTimeout(fetchData, 1500);
    } catch (err) {
      showToast(err.message ?? "Sync trigger failed.", "error");
    } finally {
      setTimeout(() => setSyncing(false), 2000);
    }
  };

  const tabs = ["All", "Synced", "Failed"];
  const filteredDevices = activeTab === "All"
    ? devices
    : devices.filter((d) => d.syncStatus === activeTab);

  return (
    <div className="space-y-6">
      {toast && (
        <div className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-md shadow-lg text-sm font-semibold text-white ${toast.type === "error" ? "bg-red-600" : "bg-gray-900"}`}>
          {toast.msg}
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Administration</p>
          <h1 className="text-xl font-bold text-gray-900">Sync Management</h1>
          <p className="text-sm text-gray-500 mt-0.5">Monitor mobile device synchronisation with the central system.</p>
        </div>
        <button
          onClick={handleManualSync}
          disabled={syncing}
          className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg transition-all ${
            syncing ? "bg-gray-100 text-gray-500 cursor-not-allowed" : "bg-[#1a5c2a] text-white hover:bg-[#134520]"
          }`}
        >
          <span className={`w-4 h-4 ${syncing ? "animate-spin" : ""}`}>{Icons.sync}</span>
          {syncing ? "Syncing…" : "Trigger Manual Sync"}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
          {error} — <button onClick={fetchData} className="underline font-semibold">Retry</button>
        </div>
      )}

      {/* Metrics */}
      <div className="flex flex-wrap gap-4">
        <MetricCard label="Synced Farmers" value={loading ? "—" : (metrics?.totalSyncedFarmers ?? 0).toLocaleString()} icon={Icons.checkCircle} />
        <MetricCard label="Pending Syncs" value={loading ? "—" : metrics?.pendingSynchronizations ?? 0} icon={Icons.cloud} trendUp={false} />
        <MetricCard label="Failed Syncs" value={loading ? "—" : metrics?.failedSynchronizations ?? 0} icon={Icons.alertCircle} trendUp={false} />
        <MetricCard label="Devices Online" value={loading ? "—" : metrics?.devicesOnline ?? 0} icon={Icons.server} />
      </div>

      {/* Device tabs */}
      <div className="flex gap-2 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-semibold transition-colors border-b-2 -mb-px ${
              activeTab === tab ? "border-[#1a5c2a] text-[#1a5c2a]" : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Device cards */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-4 h-36 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-3" />
              <div className="space-y-2">{Array.from({ length: 3 }).map((_, j) => <div key={j} className="h-3 bg-gray-100 rounded" />)}</div>
            </div>
          ))}
        </div>
      ) : filteredDevices.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <p className="text-sm text-gray-500">No devices found{activeTab !== "All" ? ` with status "${activeTab}"` : ""}.</p>
          <p className="text-xs text-gray-400 mt-1">Connect a backend to see live device sync status.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDevices.map((d) => <DeviceCard key={d.id} device={d} />)}
        </div>
      )}

      {/* History */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
          <h2 className="text-sm font-bold text-gray-900">Recent Sync Activity</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                {["Timestamp", "Officer", "Action", "Records", "Status", "Device"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {history.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-10 text-center text-sm text-gray-500">
                    No sync history available. Connect a backend to see synchronisation events.
                  </td>
                </tr>
              ) : (
                history.map((h) => (
                  <tr key={h.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-xs text-gray-500 whitespace-nowrap">{new Date(h.timestamp).toLocaleString()}</td>
                    <td className="px-4 py-3 font-medium text-gray-900">{h.officerName}</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">{h.action}</td>
                    <td className="px-4 py-3 text-gray-600">{h.recordsCount}</td>
                    <td className="px-4 py-3"><SyncStatusBadge status={h.status === "Success" ? "Synced" : h.status} /></td>
                    <td className="px-4 py-3 text-gray-500">{h.device}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
