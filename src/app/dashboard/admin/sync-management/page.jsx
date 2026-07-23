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
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
  const styles = {
    "Synced": "bg-green-100 text-green-700",
    "Pending": "bg-amber-100 text-amber-700",
    "Failed": "bg-red-100 text-red-700",
    "In Progress": "bg-blue-100 text-blue-700",
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${styles[status] || "bg-gray-100 text-gray-700"}`}>
      {status}
    </span>
  );
}

// Metric Card
function MetricCard({ label, value, icon, sub, trend }) {
  return (
    <div className="bg-white rounded-md border border-gray-200 p-5 transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div className="p-2.5 bg-gray-100 text-gray-500 rounded-lg">
          {icon}
        </div>
        {trend && (
          <div className="flex items-center gap-1">
            {Icons.trendUp}
            <span className="text-xs font-semibold text-gray-500">{trend}</span>
          </div>
        )}
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm font-semibold text-gray-700 mt-1">{label}</p>
      {sub && <p className="text-xs text-gray-500 mt-0.5">{sub}</p>}
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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

      {/* ── Device Status Filter ── */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-sm font-semibold text-gray-700">Filter by Status:</span>
        {["All", "Synced", "Pending", "In Progress", "Failed"].map(status => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-colors ${
              filterStatus === status
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* ── Sync History ── */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Synchronization Activity</h2>
        <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-5 py-3 text-left font-semibold text-gray-700">Officer</th>
                <th className="px-5 py-3 text-left font-semibold text-gray-700">Action</th>
                <th className="px-5 py-3 text-left font-semibold text-gray-700">Record Type</th>
                <th className="px-5 py-3 text-left font-semibold text-gray-700">Records</th>
                <th className="px-5 py-3 text-left font-semibold text-gray-700">Device</th>
                <th className="px-5 py-3 text-left font-semibold text-gray-700">Status</th>
                <th className="px-5 py-3 text-left font-semibold text-gray-700">Time</th>
              </tr>
            </thead>
            <tbody>
              {mockSyncHistory.map((record, idx) => (
                <tr key={record.id} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${idx === mockSyncHistory.length - 1 ? "border-b-0" : ""}`}>
                  <td className="px-5 py-3 font-semibold text-gray-900">{record.officerName}</td>
                  <td className="px-5 py-3 text-gray-600">{record.action.replace(/_/g, " ")}</td>
                  <td className="px-5 py-3 text-gray-600">{record.recordType}</td>
                  <td className="px-5 py-3 font-semibold text-gray-900">{record.recordsCount}</td>
                  <td className="px-5 py-3 text-gray-600 text-xs">{record.device}</td>
                  <td className="px-5 py-3">
                    <SyncStatusBadge status={record.status} />
                  </td>
                  <td className="px-5 py-3 text-gray-600 text-xs">
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
