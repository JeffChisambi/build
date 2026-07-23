"use client";

const mockForecasts = [
  { category: "Expected Production", prediction: "1,200,000 kg", confidence: "85%" },
  { category: "Expected Purchases", prediction: "900,000 kg", confidence: "80%" },
  { category: "Expected Storage Needs", prediction: "1,500,000 kg capacity", confidence: "95%" },
  { category: "Expected Recovery", prediction: "MWK 15,000,000", confidence: "75%" },
];

export default function ForecastsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Analytics</p>
        <h1 className="text-xl font-bold text-gray-900">Forecasts & Projections</h1>
        <p className="text-sm text-gray-500 mt-0.5">Future projections based on historical data and current trends.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockForecasts.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{item.category}</p>
            <p className="text-2xl font-bold text-[#1a5c2a] mb-1">{item.prediction}</p>
            <p className="text-xs text-gray-400">Confidence: <span className="font-medium text-gray-600">{item.confidence}</span></p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm min-h-[350px] flex flex-col">
        <h2 className="text-sm font-bold text-gray-900 mb-2">Predictive Growth Modeling (Mock Chart)</h2>
        <p className="text-xs text-gray-500 mb-4">Projected vs Actual values over the next two quarters.</p>
        <div className="flex-1 border-2 border-dashed border-gray-100 rounded-lg flex items-center justify-center bg-gray-50">
           <p className="text-gray-400 text-sm font-medium">[ Forecasting Chart Placeholder ]</p>
        </div>
      </div>
    </div>
  );
}
