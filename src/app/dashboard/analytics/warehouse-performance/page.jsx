"use client";

const mockPerformance = [
  { metric: "Capacity Utilization", value: "75%", description: "Average across all 5 active warehouses." },
  { metric: "Stock Movement Analysis", value: "12,000 kg/week", description: "Average weekly throughput." },
  { metric: "Receiving Trends", value: "Peak Receiving", description: "Highest intake volume occurs on Tuesdays." },
  { metric: "Dispatch Trends", value: "Steady", description: "Consistent dispatch rates to Head Office." },
];

export default function WarehousePerformancePage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Analytics</p>
        <h1 className="text-xl font-bold text-gray-900">Warehouse Performance</h1>
        <p className="text-sm text-gray-500 mt-0.5">Detailed warehouse analysis and utilization metrics.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {mockPerformance.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
            <h3 className="text-sm font-bold text-gray-900">{item.metric}</h3>
            <p className="text-2xl font-semibold text-[#1a5c2a] mt-2 mb-1">{item.value}</p>
            <p className="text-xs text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
        <h2 className="text-sm font-bold text-gray-900 mb-4">Warehouse Comparison Analysis</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Warehouse</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Capacity Used</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Turnover Rate</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Efficiency Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <tr>
                <td className="px-4 py-3 font-medium">Lilongwe Main Warehouse</td>
                <td className="px-4 py-3">82%</td>
                <td className="px-4 py-3">High</td>
                <td className="px-4 py-3 text-gray-900 font-semibold">9.2/10</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Mchinji Main Warehouse</td>
                <td className="px-4 py-3">60%</td>
                <td className="px-4 py-3">Medium</td>
                <td className="px-4 py-3 text-gray-900 font-semibold">7.5/10</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Mzimba Regional Depot</td>
                <td className="px-4 py-3">95%</td>
                <td className="px-4 py-3">Very High</td>
                <td className="px-4 py-3 text-gray-900 font-semibold">9.5/10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
