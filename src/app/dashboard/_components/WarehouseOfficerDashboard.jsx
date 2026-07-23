"use client";

import React from "react";
import { StatCard } from "./Charts";
import { Icons } from "./Icons";
import { useRouter } from "next/navigation";

export default function WarehouseOfficerDashboard({ firstName }) {
  const router = useRouter();

  const kpis = [
    { title: "Current Stock", value: "3,450 t", trend: "+120t", trendUp: true, subtext: "Total inventory", icon: Icons.warehouse },
    { title: "Available Capacity", value: "1,550 t", trend: "-120t", trendUp: false, subtext: "Remaining space", icon: Icons.data },
    { title: "Pending Dispatches", value: "2", trend: null, subtext: "Scheduled for today", icon: Icons.activity },
  ];

  const stockByCommodity = [
    { label: "Maize (White)", value: 2100, displayValue: "2,100 t", color: "bg-yellow-500" },
    { label: "Soybeans", value: 850, displayValue: "850 t", color: "bg-nasfam-green" },
    { label: "Groundnuts", value: 500, displayValue: "500 t", color: "bg-orange-500" },
  ];

  const recentDeliveries = [
    { id: "DLV-9921", origin: "Kasungu IPC", commodity: "Maize", weight: "30 t", status: "Unloaded", time: "1 hour ago" },
    { id: "DLV-9922", origin: "Mchinji IPC", commodity: "Soybeans", weight: "15 t", status: "Unloading", time: "2 hours ago" },
    { id: "DLV-9923", origin: "Dowa IPC", commodity: "Groundnuts", weight: "20 t", status: "Quality Check", time: "4 hours ago" },
  ];

  return (
    <div className="p-6">
    <div className="space-y-8 max-w-[1400px] mx-auto p-6">

      {/* ── KPI Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {kpis.map((kpi, idx) => (
          <StatCard key={idx} {...kpi} />
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col h-full">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-base font-bold text-gray-900">Recent Deliveries</h3>
              <button
                onClick={() => router.push("/dashboard/warehouse")}
                className="flex items-center gap-1.5 bg-[#1a5c2a] hover:bg-[#134520] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                Register
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="px-4 pb-3 text-sm font-medium text-gray-500 font-normal">ID</th>
                    <th className="px-4 pb-3 text-sm font-medium text-gray-500 font-normal">Origin</th>
                    <th className="px-4 pb-3 text-sm font-medium text-gray-500 font-normal">Commodity</th>
                    <th className="px-4 pb-3 text-sm font-medium text-gray-500 font-normal">Weight</th>
                    <th className="px-4 pb-3 text-sm font-medium text-gray-500 font-normal">Time</th>
                    <th className="px-4 pb-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {recentDeliveries.map((delivery, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 font-medium text-gray-900">{delivery.id}</td>
                      <td className="px-4 py-4 text-gray-500">{delivery.origin}</td>
                      <td className="px-4 py-4 text-gray-500">{delivery.commodity}</td>
                      <td className="px-4 py-4 text-gray-900">{delivery.weight}</td>
                      <td className="px-4 py-4 text-sm text-gray-500">{delivery.time}</td>
                      <td className="px-4 py-4 text-right">
                        <button className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded" aria-label="More options">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
    </div>
    </div>
  );
}
