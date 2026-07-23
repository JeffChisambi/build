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
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-semibold text-gray-700">Recent Deliveries</h3>
              <button onClick={() => router.push("/dashboard/warehouse")} className="text-xs font-semibold text-green-700 hover:underline">
                View Register
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 rounded-tl-lg">ID</th>
                    <th className="px-4 py-3">Origin</th>
                    <th className="px-4 py-3">Commodity</th>
                    <th className="px-4 py-3">Weight</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3 rounded-tr-lg">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {recentDeliveries.map((delivery, i) => (
                    <tr key={i} className="border-b last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 font-medium text-gray-900">{delivery.id}</td>
                      <td className="px-4 py-4 text-gray-600">{delivery.origin}</td>
                      <td className="px-4 py-4 text-gray-600">{delivery.commodity}</td>
                      <td className="px-4 py-4 font-bold text-gray-900">{delivery.weight}</td>
                      <td className="px-4 py-4">
                        <span className={`text-xs font-medium px-2.5 py-0.5 rounded border ${
                          delivery.status === "Unloaded" ? "bg-green-100 text-green-800 border-green-200" :
                          delivery.status === "Unloading" ? "bg-blue-100 text-blue-800 border-blue-200" :
                          "bg-amber-100 text-amber-800 border-amber-200"
                        }`}>
                          {delivery.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-xs text-gray-500">{delivery.time}</td>
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
