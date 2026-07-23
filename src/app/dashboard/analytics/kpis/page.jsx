"use client";

const mockKPIs = [
  { label: "Total Farmers Registered", value: "14,250", trend: "+12% this year" },
  { label: "Total Cumulative Purchases", value: "2,450,000 kg", trend: "+5% this season" },
  { label: "Total Stock in Warehouses", value: "850,000 kg", trend: "Stable" },
  { label: "Total Batches Processed", value: "1,204", trend: "+20% this month" },
  { label: "Loan Recovery Rate", value: "88%", trend: "-2% vs last year" },
  { label: "Farmer Growth Percentage", value: "15%", trend: "On target" },
];

export default function KPIsAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Analytics</p>
        <h1 className="text-xl font-bold text-gray-900">Key Performance Indicators</h1>
        <p className="text-sm text-gray-500 mt-0.5">Detailed performance indicators and growth analysis.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockKPIs.map((kpi, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
            <p className="text-sm font-semibold text-gray-500 mb-2">{kpi.label}</p>
            <p className="text-3xl font-bold text-gray-900 mb-1">{kpi.value}</p>
            <p className={`text-xs font-medium ${kpi.trend.includes("+") || kpi.trend.includes("target") ? "text-[#1a5c2a]" : kpi.trend.includes("-") ? "text-red-500" : "text-gray-500"}`}>
              {kpi.trend}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm min-h-[300px] flex items-center justify-center">
        <p className="text-gray-400 text-sm font-medium">Detailed KPI Trend Charts (Mock UI - Charts to be integrated)</p>
      </div>
    </div>
  );
}
