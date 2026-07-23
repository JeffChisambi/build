"use client";

import { useState } from "react";
import { mockSyncDevices, mockSyncHistory, mockSyncMetrics, SYNC_STATUSES } from "@/auth/mockSync";

const Icons = {
  sync: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
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
  clock: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  server: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  trendUp: (
    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
};

// Sync Status Badge
function SyncStatusBadge({ status }) {
  const dot = {
    "Synced": "bg-green-500",
    "Failed": "bg-red-500",
  };

  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400">
      <span className={`w-1.5 h-1.5 rounded-full ${dot[status] || "bg-gray-300"}`} />
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
      <p className="text-xs text-gray-400">Compared to last month</p>
    </div>
  );
}

// Device Status Card
function DeviceCard({ device }) {
  return (
    <div className="bg-white rounded-md border border-gray-200 p-5 transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-bold text-gray-900">{device.officerName}</p>
          <p className="text-xs text-gray-500 mt-1">{device.deviceModel}</p>
        </div>
        <SyncStatusBadge status={device.syncStatus} />
      </div>

      <div className="space-y-2.5 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-600">Last Sync:</span>
          <span className="font-semibold text-gray-900">
            {new Date(device.lastSync).toLocaleTimeString()}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Records Uploaded:</span>
          <span className="font-semibold text-gray-700">{device.recordsUploaded}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Pending:</span>
          <span className={`font-semibold ${device.pendingRecords > 0 ? "text-amber-600" : "text-gray-600"}`}>
            {device.pendingRecords}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Failed:</span>
          <span className={`font-semibold ${device.failedRecords > 0 ? "text-red-600" : "text-gray-600"}`}>
            {device.failedRecords}
          </span>
        </div>
        <div className="flex justify-between pt-2 border-t border-gray-100">
          <span className="text-gray-600">Battery:</span>
          <span className="font-semibold text-gray-900">{device.batteryLevel}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Connection:</span>
          <span className={`font-semibold ${device.connectivity === "No Connection" ? "text-red-600" : "text-gray-700"}`}>
            {device.connectivity}
          </span>
        </div>
      </div>
    </div>
  );
}

// Main Page
export default function SyncManagementPage() {
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredDevices = filterStatus === "All" 
    ? mockSyncDevices 
    : mockSyncDevices.filter(d => d.syncStatus === filterStatus);

  return (
    <div className="p-6 space-y-8 max-w-[1400px] mx-auto">
      {/* ── Key Metrics ── */}
      <div className="flex flex-wrap gap-4">
        <MetricCard 
          label="Total Synced Farmers" 
          value={mockSyncMetrics.totalSyncedFarmers.toLocaleString()} 
          icon={Icons.checkCircle}
          sub="Successfully synchronized"
        />
        <MetricCard 
          label="Failed Syncs" 
          value={mockSyncMetrics.failedSynchronizations} 
          icon={Icons.alertCircle}
          sub="Requires manual intervention"
        />
        <MetricCard 
          label="Success Rate" 
          value={`${mockSyncMetrics.successRate}%`}
          icon={Icons.sync}
          sub="Overall synchronization health"
          trend="+1.2%"
        />
      </div>

      {/* ── Sync Information ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-md border border-gray-200 bg-white p-4">
          <div className="flex gap-3">
            <div className="flex-shrink-0 p-2 bg-gray-100 text-gray-500 rounded-lg">
              {Icons.cloud}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">Last Synchronization</p>
              <p className="text-sm text-gray-600 mt-1">
                {new Date(mockSyncMetrics.lastSynchronizationTime).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-md border border-gray-200 bg-white p-4">
          <div className="flex gap-3">
            <div className="flex-shrink-0 p-2 bg-gray-100 text-gray-500 rounded-lg">
              {Icons.server}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">Devices Connected</p>
              <p className="text-sm text-gray-600 mt-1">
                {mockSyncMetrics.devicesOnline} online, {mockSyncMetrics.devicesOffline} offline
              </p>
            </div>
          </div>
        </div>
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
                  <td className="px-4 py-3.5 text-sm font-medium text-gray-400">{record.officerName}</td>
                  <td className="px-4 py-3.5 text-xs text-gray-400">{record.recordType}</td>
                  <td className="px-4 py-3.5 text-xs text-gray-400">{record.recordsCount}</td>
                  <td className="px-4 py-3.5 text-xs text-gray-400">{record.device}</td>
                  <td className="px-4 py-3.5">
                    <SyncStatusBadge status={record.status} />
                  </td>
                  <td className="px-4 py-3.5 text-xs text-gray-400">
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
