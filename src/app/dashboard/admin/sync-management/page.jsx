"use client";

import { useState } from "react";
import { mockSyncDevices, mockSyncHistory, mockSyncMetrics } from "@/auth/mockSync";

const Icons = {
  sync: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13.29 7.29 7 13.58l-2.29-2.29L3.3 12.7l3 3c.2.2.45.29.71.29s.51-.1.71-.29l7-7-1.41-1.41Zm-.29 6.3-.79-.79-1.41 1.41 1.5 1.5c.2.2.45.29.71.29s.51-.1.71-.29l7-7-1.41-1.41-6.29 6.29Z" />
    </svg>
  ),
  cloud: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
  ),
  checkCircle: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  alertCircle: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11 8h2v4.5h-2zm0 6h2v2h-2z"></path><path d="M12 2C6.49 2 2 6.49 2 12c0 2.12.68 4.19 1.93 5.9l-1.75 2.53c-.21.31-.24.7-.06 1.03.17.33.51.54.89.54h9c5.51 0 10-4.49 10-10S17.51 2 12 2m0 18H4.91L6 18.43c.26-.37.23-.88-.06-1.22A7.98 7.98 0 0 1 4.01 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8Z"></path>
    </svg>
  ),
  server: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
};

// Sync Status Badge
function SyncStatusBadge({ status }) {
  const colors = {
    "Synced": "text-[#1a5c2a]",
    "Failed": "text-red-600",
    "Pending": "text-amber-600",
  };
  const dots = {
    "Synced": "bg-[#1a5c2a]",
    "Failed": "bg-red-500",
    "Pending": "bg-amber-500",
  };

  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${colors[status] || "text-gray-400"}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dots[status] || "bg-gray-300"}`} />
      {status}
    </span>
  );
}

// Metric Card
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

// Device Status Card
function DeviceCard({ device }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-bold text-gray-900">{device.officerName}</p>
        <SyncStatusBadge status={device.syncStatus} />
      </div>

      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-500">Last Sync</span>
          <span className="font-semibold text-gray-900">{new Date(device.lastSync).toLocaleTimeString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Pending</span>
          <span className="font-semibold text-gray-900">{device.pendingRecords}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Failed</span>
          <span className={`font-semibold ${device.failedRecords > 0 ? "text-red-600" : "text-gray-900"}`}>
            {device.failedRecords}
          </span>
        </div>
      </div>
    </div>
  );
}

// Main Page
export default function SyncManagementPage() {
  const [filterStatus, setFilterStatus] = useState("All");
  const [syncing, setSyncing] = useState(false);
  const [syncDone, setSyncDone] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleTriggerSync = () => {
    if (syncing) return;
    setSyncing(true);
    setSyncDone(false);
    // Simulate a 2.5s sync operation
    setTimeout(() => {
      setSyncing(false);
      setSyncDone(true);
      showToast("Manual sync completed. All devices have been instructed to synchronize.");
      setTimeout(() => setSyncDone(false), 5000);
    }, 2500);
  };

  const STATUS_FILTERS = ["All", "Synced", "Failed"];

  const filteredDevices = filterStatus === "All"
    ? mockSyncDevices
    : mockSyncDevices.filter(d => d.syncStatus === filterStatus);

  return (
    <div className="p-6 space-y-6 max-w-[1400px] mx-auto">
      {/* Toast */}
      {toast && (
        <div className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-md shadow-lg text-sm font-semibold text-white ${toast.type === "error" ? "bg-red-600" : "bg-gray-900"}`}>
          {toast.msg}
        </div>
      )}

      {/* ── Page Header with Trigger Sync ── */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Administration</p>
          <h1 className="text-xl font-bold text-gray-900">Sync Management</h1>
          <p className="text-sm text-gray-500 mt-0.5">Monitor mobile device synchronization and data health.</p>
        </div>
        <button
          onClick={handleTriggerSync}
          disabled={syncing}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
            syncDone
              ? "bg-[#e8f1ea] text-[#1a5c2a] border border-[#c6dbc9]"
              : "bg-[#1a5c2a] text-white hover:bg-[#134520] disabled:opacity-70"
          }`}
        >
          {syncing ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Syncing…
            </>
          ) : syncDone ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Sync Complete
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Trigger Manual Sync
            </>
          )}
        </button>
      </div>

      {/* ── Key Metrics ── */}
      <div className="flex flex-wrap gap-4">
        <MetricCard
          label="Total Synced Farmers"
          value={mockSyncMetrics.totalSyncedFarmers.toLocaleString()}
          icon={Icons.checkCircle}
        />
        <MetricCard
          label="Failed Syncs"
          value={mockSyncMetrics.failedSynchronizations}
          icon={Icons.alertCircle}
        />
        <MetricCard
          label="Success Rate"
          value={`${mockSyncMetrics.successRate}%`}
          icon={Icons.sync}
          trend="+1.2%"
          trendUp={true}
        />
      </div>

      {/* ── Sync Info ── */}
      <div className="flex flex-wrap gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-3 flex-1 min-w-[200px]">
          <div className="flex items-center gap-2 text-gray-500">
            {Icons.cloud}
            <p className="text-sm font-semibold text-gray-700">Last Synchronization</p>
          </div>
          <p className="text-sm text-gray-600">
            {new Date(mockSyncMetrics.lastSynchronizationTime).toLocaleString("en-GB", {
              day: "numeric", month: "short", year: "numeric",
              hour: "2-digit", minute: "2-digit"
            })}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-3 flex-1 min-w-[200px]">
          <div className="flex items-center gap-2 text-gray-500">
            {Icons.server}
            <p className="text-sm font-semibold text-gray-700">Devices Connected</p>
          </div>
          <p className="text-sm text-gray-600">
            {mockSyncMetrics.devicesOnline} online, {mockSyncMetrics.devicesOffline} offline
          </p>
        </div>
      </div>

      {/* ── Device Cards ── */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-bold text-gray-900">Device Status</h2>
          <div className="flex gap-1.5">
            {STATUS_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilterStatus(f)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                  filterStatus === f ? "bg-[#1a5c2a] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        {filteredDevices.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 px-5 py-10 text-center text-sm text-gray-400">
            No devices matching &quot;{filterStatus}&quot;.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredDevices.map((device) => (
              <DeviceCard key={device.id} device={device} />
            ))}
          </div>
        )}
      </div>

      {/* ── Sync History ── */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-sm font-bold text-gray-900">Recent Synchronization Activity</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-auto min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-4 py-3 text-xs font-semibold text-gray-700">Officer</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-700">Record Type</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-700">Records</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-700">Device</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-700">Status</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-700">Time</th>
              </tr>
            </thead>
            <tbody>
              {mockSyncHistory.map((record) => (
                <tr key={record.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3.5 text-sm font-medium text-gray-700">{record.officerName}</td>
                  <td className="px-4 py-3.5 text-xs text-gray-500">{record.recordType}</td>
                  <td className="px-4 py-3.5 text-xs text-gray-500">{record.recordsCount}</td>
                  <td className="px-4 py-3.5 text-xs text-gray-500">{record.device}</td>
                  <td className="px-4 py-3.5">
                    <SyncStatusBadge status={record.status} />
                  </td>
                  <td className="px-4 py-3.5 text-xs text-gray-500">
                    {new Date(record.timestamp).toLocaleTimeString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
