"use client";

export default function ProductionTrendsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Analytics</p>
        <h1 className="text-xl font-bold text-gray-900">Production Trends</h1>
        <p className="text-sm text-gray-500 mt-0.5">Historical production analysis and regional patterns.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Trend 1 */}
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm min-h-[300px] flex flex-col">
          <h2 className="text-sm font-bold text-gray-900 mb-2">Seasonal Production (Mock Chart)</h2>
          <p className="text-xs text-gray-500 mb-4">Comparison of production volumes across seasons.</p>
          <div className="flex-1 border-2 border-dashed border-gray-100 rounded-lg flex items-center justify-center bg-gray-50">
             <p className="text-gray-400 text-sm font-medium">[ Line Chart Placeholder ]</p>
          </div>
        </div>

        {/* Trend 2 */}
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm min-h-[300px] flex flex-col">
          <h2 className="text-sm font-bold text-gray-900 mb-2">Crop Volumes by Region (Mock Chart)</h2>
          <p className="text-xs text-gray-500 mb-4">Distribution of crop types across different regions.</p>
          <div className="flex-1 border-2 border-dashed border-gray-100 rounded-lg flex items-center justify-center bg-gray-50">
             <p className="text-gray-400 text-sm font-medium">[ Bar Chart Placeholder ]</p>
          </div>
        </div>
      </div>
    </div>
  );
}
