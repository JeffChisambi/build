"use client";

import React from "react";

// ── Period Picker ────────────────────────────────────────────
export function PeriodPicker({ value, onChange, options }) {
  return (
    <div className="flex items-center gap-0.5 bg-gray-100 rounded-lg p-1">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={[
            "px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200",
            value === opt.value
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-700",
          ].join(" ")}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

// ── Bar Chart ────────────────────────────────────────────────
export function BarChart({ data, height = "h-56" }) {
  const max = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className={`flex items-end gap-2 sm:gap-4 ${height} w-full pt-6`}>
      {data.map((item, i) => {
        const percentage = (item.value / max) * 100;
        return (
          <div key={i} className="flex flex-col items-center flex-1 group h-full justify-end">
            <div className="relative w-full flex justify-center items-end h-full">
              <div
                className={`w-full max-w-[48px] rounded-t-sm ${item.color || "bg-[#1a5c2e]"} group-hover:opacity-80 relative`}
                style={{
                  height: `${percentage}%`,
                  minHeight: "4px",
                  transformOrigin: "bottom center",
                  animation: `barGrowUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${i * 50}ms both`,
                }}
              >
                <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-white border border-gray-100/50 text-gray-900 text-xs px-2 py-1 rounded shadow-sm pointer-events-none transition-opacity whitespace-nowrap z-10">
                  {item.tooltip || item.value}
                </div>
              </div>
            </div>
            <span className="text-[10px] sm:text-xs text-gray-500 mt-2 truncate w-full text-center font-medium">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ── Horizontal Bar Chart ─────────────────────────────────────
export function HorizontalBarChart({ data }) {
  const max = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className="space-y-4">
      {data.map((item, i) => {
        const percentage = (item.value / max) * 100;
        return (
          <div key={i} className="group">
            <div className="flex justify-between items-end mb-1">
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
              <span className="text-sm font-bold text-gray-900">
                {item.displayValue || item.value}
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-sm h-2.5 overflow-hidden">
              <div
                className={`${item.color || "bg-[#1a5c2e]"} h-full`}
                style={{
                  width: `${percentage}%`,
                  transformOrigin: "left center",
                  animation: `barSlideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${i * 80}ms both`,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Progress Chart ───────────────────────────────────────────
export function ProgressChart({ label, value, max, color = "bg-[#1a5c2e]" }) {
  const percentage = max > 0 ? Math.min((value / max) * 100, 100) : 0;

  return (
    <div className="mb-5">
      <div className="flex justify-between items-end mb-1.5">
        <span className="text-sm font-medium text-gray-600">{label}</span>
        <span className="text-sm font-bold text-gray-900">
          {value} / {max}
        </span>
      </div>
      <div className="w-full bg-gray-100 rounded-sm h-2 overflow-hidden">
        <div
          className={`${color} h-full`}
          style={{
            width: `${percentage}%`,
            transformOrigin: "left center",
            animation: "barSlideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) both",
          }}
        />
      </div>
    </div>
  );
}

// ── Stat Card ────────────────────────────────────────────────
export function StatCard({ title, value, trend, subtext, icon, trendUp }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col h-full border border-gray-50/50">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xs font-semibold text-gray-500 tracking-wider uppercase">{title}</h3>
        <div className="w-8 h-8 rounded-md bg-[#1a5c2e]/10 flex items-center justify-center text-[#1a5c2e] flex-shrink-0">
          {icon}
        </div>
      </div>
      <div className="mb-1">
        <p className="text-3xl font-extrabold text-gray-900 tracking-tight leading-none">{value}</p>
      </div>
      <div className="flex items-center gap-2 mt-auto pt-3 border-t border-gray-50">
        {trend && (
          <div className={`flex items-center text-xs font-bold px-2.5 py-1 rounded-md ${trendUp ? "bg-[#1a5c2e]/10 text-[#1a5c2e]" : "bg-red-50 text-red-700"}`}>
            {trendUp ? (
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            )}
            <span className="ml-1">{trend}</span>
          </div>
        )}
        <p className="text-xs text-gray-400 font-medium">{subtext}</p>
      </div>
    </div>
  );
}

// ── Module Action Card ───────────────────────────────────────
export function ModuleActionCard({ icon, title, description, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-xl p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-left group flex flex-col h-full w-full"
    >
      <div className="flex items-start justify-between w-full mb-5">
        <div className="w-10 h-10 rounded-lg bg-[#1a5c2e]/8 flex items-center justify-center text-[#1a5c2e] flex-shrink-0 transition-transform group-hover:scale-110 duration-300">
          {icon}
        </div>
        <div className="text-gray-300 group-hover:text-[#1a5c2e] transition-colors mt-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      <div className="flex-1 w-full">
        <h3 className="font-bold text-gray-900 text-base group-hover:text-[#1a5c2e] transition-colors leading-tight">{title}</h3>
        <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">{description}</p>
      </div>
    </button>
  );
}
