"use client";

const mockIPCs = [
  { name: "Lilongwe IPC", farmers: "5,200", purchases: "950,000 kg", stock: "320,000 kg", rank: 1 },
  { name: "Mchinji IPC", farmers: "4,100", purchases: "820,000 kg", stock: "250,000 kg", rank: 2 },
  { name: "Mzimba IPC", farmers: "3,800", purchases: "500,000 kg", stock: "150,000 kg", rank: 3 },
  { name: "Kasungu IPC", farmers: "1,150", purchases: "180,000 kg", stock: "130,000 kg", rank: 4 },
];

export default function IPCComparisonPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Analytics</p>
        <h1 className="text-xl font-bold text-gray-900">IPC Comparison</h1>
        <p className="text-sm text-gray-500 mt-0.5">Compare performance metrics across Innovation and Productivity Centres.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
        <h2 className="text-sm font-bold text-gray-900 mb-4">IPC Performance Ranking</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Rank</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">IPC</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Farmers</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Purchases</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Stock</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {mockIPCs.map((ipc) => (
                <tr key={ipc.name}>
                  <td className="px-4 py-3 font-bold text-gray-700">#{ipc.rank}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">{ipc.name}</td>
                  <td className="px-4 py-3 text-gray-600">{ipc.farmers}</td>
                  <td className="px-4 py-3 text-gray-600">{ipc.purchases}</td>
                  <td className="px-4 py-3 text-gray-600">{ipc.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm min-h-[300px] flex flex-col">
        <h2 className="text-sm font-bold text-gray-900 mb-2">Operational Differences (Mock Chart)</h2>
        <p className="text-xs text-gray-500 mb-4">Visual comparison of key metrics per IPC.</p>
        <div className="flex-1 border-2 border-dashed border-gray-100 rounded-lg flex items-center justify-center bg-gray-50">
           <p className="text-gray-400 text-sm font-medium">[ Radar Chart Placeholder ]</p>
        </div>
      </div>
    </div>
  );
}
