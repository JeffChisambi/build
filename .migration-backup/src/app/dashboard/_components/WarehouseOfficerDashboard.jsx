"use client";

import React from "react";
import { HorizontalBarChart, ProgressChart, StatCard } from "./Charts";
import { Icons } from "./Icons";
import { useRouter } from "next/navigation";

export default function WarehouseOfficerDashboard({ firstName }) {
  const router = useRouter();

  const kpis = [
    { title: "Current Stock", value: "3,450 t", trend: "+120t", trendUp: true, subtext: "Total inventory", icon: Icons.warehouse },
    { title: "Available Capacity", value: "1,550 t", trend: "-120t", trendUp: false, subtext: "Remaining space", icon: Icons.data },
    { title: "Pending Receipts", value: "4", trend: null, subtext: "Trucks en route", icon: Icons.truck },
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
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* ── Page Header ── */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Warehouse Operations</h1>
          <p className="text-sm text-gray-500 mt-1">Lilongwe Central Depot</p>
        </div>
        <div className="text-right hidden sm:block">
          <p className="text-sm font-semibold text-gray-900">{firstName}</p>
          <p className="text-xs text-gray-500 mt-0.5">Warehouse Manager</p>
        </div>
      </div>

      {/* ── KPI Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {kpis.map((kpi, idx) => (
          <StatCard key={idx} {...kpi} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="col-span-1 lg:col-span-2 space-y-6">
          
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Inventory by Commodity</h2>
            <p className="text-sm text-gray-500 mb-6">Current stock breakdown</p>
            <HorizontalBarChart data={stockByCommodity} />
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-900">Recent Deliveries</h2>
              <button onClick={() => router.push("/dashboard/warehouse")} className="text-sm font-semibold text-nasfam-green hover:underline">
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

        {/* Right Column */}
        <div className="space-y-6">
          
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Capacity Utilization</h2>
            <div className="space-y-6">
              <ProgressChart label="Silo A (Maize)" value={2100} max={2500} color="bg-yellow-500" />
              <ProgressChart label="Warehouse 1 (Bags)" value={1350} max={1500} color="bg-nasfam-green" />
              <ProgressChart label="Cold Storage" value={0} max={500} color="bg-blue-400" />
            </div>
          </div>

          <div className="bg-red-50 rounded-xl border border-red-200 p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-red-500">{Icons.alertTriangle}</div>
              <h3 className="font-bold text-red-900">Capacity Warning</h3>
            </div>
            <p className="text-sm text-red-800 mb-4">
              Warehouse 1 is at 90% capacity. Approaching maximum limits for bagged commodities. Please prepare for dispatch.
            </p>
            <button className="text-xs font-bold bg-red-100 text-red-900 px-3 py-1.5 rounded hover:bg-red-200 transition-colors">
              Schedule Dispatch
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
