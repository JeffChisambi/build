"use client";

import { useState, useMemo } from "react";
import { useNotifications } from "@/auth/notificationContext";

const TYPE_OPTIONS = ["All Types", "System", "Purchasing", "Inventory", "Traceability", "Farmers"];
const STATUS_OPTIONS = ["All", "Unread", "Read"];

// Removed colourful typeColor mappings to align with enterprise design standards

export default function NotificationsPage() {
  const { notifications, markRead, markAllRead } = useNotifications();

  const filtered = useMemo(() => {
    return notifications;
  }, [notifications]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="p-6 space-y-6">
      {/* Notifications content */}

      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-gray-500">Notifications</p>
          <p className="text-xs text-gray-400">{filtered.length} result{filtered.length !== 1 ? "s" : ""}</p>
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllRead}
            className="px-4 py-2 text-sm font-medium text-[#1a5c2a] border border-[#1a5c2a] rounded-lg hover:bg-green-50 transition-colors"
          >
            Mark all as read
          </button>
        )}
      </div>

      {/* Table */}
      <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100">
          <p className="text-sm font-bold text-gray-900">All Notifications</p>
          <p className="text-xs text-gray-400">{filtered.length} result{filtered.length !== 1 ? "s" : ""}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-5 py-3 w-4"></th>
                {["Notification", "Type", "Date", "Status", ""].map((h) => (
                  <th key={h} className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center">
                    <svg className="w-8 h-8 text-gray-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <p className="text-sm text-gray-400">No notifications match your filters.</p>
                  </td>
                </tr>
              ) : (
                filtered.map((n) => (
                  <tr key={n.id} className={`hover:bg-gray-50 transition-colors ${!n.read ? "bg-gray-50/50" : ""}`}>
                    <td className="px-5 py-4">
                      <div className={`mt-0.5 w-1.5 h-1.5 rounded-full ${n.read ? "bg-gray-300" : "bg-[#1a5c2a]"}`} />
                    </td>
                    <td className="px-5 py-4">
                      <p className={`font-medium ${n.read ? "text-gray-700" : "text-gray-900"}`}>{n.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5 max-w-xs truncate">{n.message}</p>
                    </td>
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">
                        {n.type}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-xs text-gray-500 whitespace-nowrap">{n.createdAt}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${n.read ? "bg-gray-100 text-gray-500" : "bg-gray-200 text-gray-700"}`}>
                        {n.read ? "Read" : "Unread"}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      {!n.read && (
                        <button onClick={() => markRead(n.id)} className="text-xs text-[#1a5c2a] font-medium hover:underline">
                          Mark read
                        </button>
                      )}
                    </td>
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
