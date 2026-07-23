"use client";

import { useState } from "react";

const mockIPCs = [
  { id: "IPC001", name: "Lilongwe IPC", district: "Lilongwe", manager: "Jane Doe", status: "Active", createdAt: "2024-01-15" },
  { id: "IPC002", name: "Mchinji IPC", district: "Mchinji", manager: "John Smith", status: "Active", createdAt: "2024-01-20" },
  { id: "IPC003", name: "Kasungu IPC", district: "Kasungu", manager: "Peter Banda", status: "Active", createdAt: "2024-02-10" },
  { id: "IPC004", name: "Mzimba IPC", district: "Mzimba", manager: "Grace Phiri", status: "Active", createdAt: "2024-03-05" },
];

export default function IPCManagementPage() {
  const [ipcs, setIpcs] = useState(mockIPCs);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ id: "", name: "", district: "", status: "Active" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.id.trim()) e.id = "IPC code is required";
    if (!form.name.trim()) e.name = "IPC name is required";
    if (!form.district.trim()) e.district = "District is required";
    return e;
  };

  const openAdd = () => {
    setForm({ id: "", name: "", district: "", status: "Active" });
    setErrors({});
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }

    setIpcs((prev) => [
      ...prev,
      {
        id: form.id.trim(),
        name: form.name.trim(),
        district: form.district.trim(),
        manager: "",
        status: form.status,
        createdAt: new Date().toISOString().slice(0, 10),
      },
    ]);
    setShowForm(false);
  };

  const inputClass = (field) =>
    `w-full px-3 py-2 text-sm border rounded-lg outline-none transition-colors ${
      errors[field] ? "border-red-400 focus:border-red-400 bg-red-50" : "border-gray-200 focus:border-[#1a5c2a]"
    }`;

  const filtered = ipcs.filter((ipc) =>
    `${ipc.id} ${ipc.name} ${ipc.district}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Administration</p>
          <h1 className="text-xl font-bold text-gray-900">IPC Management</h1>
          <p className="text-sm text-gray-500 mt-0.5">Manage Innovation and Productivity Centre master records.</p>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 px-4 py-2 bg-[#1a5c2a] text-white text-sm font-semibold rounded-lg hover:bg-[#134520] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          IPC
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="text-base font-bold text-gray-900">Add New IPC</h2>
              <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">IPC Code *</label>
                  <input className={inputClass("id")} value={form.id} onChange={(e) => setForm({ ...form, id: e.target.value })} placeholder="e.g. IPC005" />
                  {errors.id && <p className="text-xs text-red-500 mt-1">{errors.id}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Status</label>
                  <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-[#1a5c2a]" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">IPC Name *</label>
                <input className={inputClass("name")} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Lilongwe IPC" />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">District *</label>
                <input className={inputClass("district")} value={form.district} onChange={(e) => setForm({ ...form, district: e.target.value })} placeholder="e.g. Lilongwe" />
                {errors.district && <p className="text-xs text-red-500 mt-1">{errors.district}</p>}
              </div>
              <p className="text-sm text-gray-500">IPC managers will be assigned later through user account creation.</p>
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 text-sm font-semibold text-white bg-gray-900 rounded-md hover:bg-gray-700 transition-colors">
                  Add IPC
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-sm font-bold text-gray-900">IPC Master Registry</h2>
          <div className="relative">
            <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search IPCs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-[#1a5c2a] w-56"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                {["IPC Code", "IPC Name", "District", "Manager", "Created Date", "Status", "Actions"].map((h) => (
                  <th key={h} className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-5 py-10 text-center text-gray-400 text-sm">No IPCs found.</td>
                </tr>
              ) : (
                filtered.map((ipc) => (
                  <tr key={ipc.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5 font-mono text-xs font-semibold text-gray-700">{ipc.id}</td>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{ipc.name}</td>
                    <td className="px-5 py-3.5 text-gray-600">{ipc.district}</td>
                    <td className="px-5 py-3.5 text-gray-600">{ipc.manager}</td>
                    <td className="px-5 py-3.5 text-gray-500 text-xs">{ipc.createdAt}</td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${ipc.status === "Active" ? "bg-gray-100 text-gray-600" : "bg-gray-50 text-gray-400"}`}>
                        {ipc.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <button className="text-xs font-semibold text-gray-700 hover:underline">Edit</button>
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
