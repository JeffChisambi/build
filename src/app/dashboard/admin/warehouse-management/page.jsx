"use client";

import { useState } from "react";

const mockWarehouses = [
  { id: 1, code: "WH001", name: "Lilongwe Main Warehouse", location: "Lilongwe", capacity: "10,000 bags", manager: "James Banda", status: "Active" },
  { id: 2, code: "WH002", name: "Mchinji Main Warehouse", location: "Mchinji", capacity: "7,500 bags", manager: "Grace Phiri", status: "Active" },
  { id: 3, code: "WH003", name: "Mzimba Regional Depot", location: "Mzimba", capacity: "5,000 bags", manager: "Peter Mkandawire", status: "Active" },
  { id: 4, code: "WH004", name: "Zomba Distribution Centre", location: "Zomba", capacity: "4,000 bags", manager: "Agnes Tembo", status: "Inactive" },
  { id: 5, code: "WH005", name: "Kasungu Satellite Store", location: "Kasungu", capacity: "2,500 bags", manager: "Richard Mwale", status: "Active" },
];

const emptyForm = { code: "", name: "", location: "", capacity: "", manager: "", status: "Active" };

export default function WarehouseManagementPage() {
  const [warehouses, setWarehouses] = useState(mockWarehouses);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [search, setSearch] = useState("");
  const [openMenu, setOpenMenu] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.code.trim()) e.code = "Warehouse code is required";
    if (!form.name.trim()) e.name = "Warehouse name is required";
    if (!form.location.trim()) e.location = "Location is required";
    if (!form.capacity.trim()) e.capacity = "Capacity is required";
    return e;
  };

  const openAdd = () => {
    setForm(emptyForm);
    setErrors({});
    setEditId(null);
    setShowForm(true);
  };

  const openEdit = (wh) => {
    setForm({ code: wh.code, name: wh.name, location: wh.location, capacity: wh.capacity, manager: wh.manager, status: wh.status });
    setErrors({});
    setEditId(wh.id);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    if (editId) {
      setWarehouses((prev) => prev.map((wh) => wh.id === editId ? { ...wh, ...form } : wh));
    } else {
      setWarehouses((prev) => [...prev, { id: Date.now(), ...form }]);
    }
    setShowForm(false);
  };

  const toggleStatus = (id) => {
    setWarehouses((prev) => prev.map((wh) => wh.id === id ? { ...wh, status: wh.status === "Active" ? "Inactive" : "Active" } : wh));
  };

  const filtered = warehouses.filter((wh) =>
    `${wh.code} ${wh.name} ${wh.location}`.toLowerCase().includes(search.toLowerCase())
  );

  const inputClass = (field) =>
    `w-full px-3 py-2 text-sm border rounded-lg outline-none transition-colors ${
      errors[field] ? "border-red-400 focus:border-red-400 bg-red-50" : "border-gray-200 focus:border-[#1a5c2a]"
    }`;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-start justify-between">
        <button
          onClick={openAdd}
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-md hover:bg-gray-700 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Add Warehouse
        </button>
      </div>

      {/* Add/Edit Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="text-base font-bold text-gray-900">{editId ? "Edit Warehouse" : "Add New Warehouse"}</h2>
              <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Warehouse Code *</label>
                  <input className={inputClass("code")} value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value })} placeholder="e.g. WH006" />
                  {errors.code && <p className="text-xs text-red-500 mt-1">{errors.code}</p>}
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
                <label className="block text-xs font-semibold text-gray-600 mb-1">Warehouse Name *</label>
                <input className={inputClass("name")} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Lilongwe Main Warehouse" />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Location *</label>
                  <input className={inputClass("location")} value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="e.g. Lilongwe" />
                  {errors.location && <p className="text-xs text-red-500 mt-1">{errors.location}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Capacity *</label>
                  <input className={inputClass("capacity")} value={form.capacity} onChange={(e) => setForm({ ...form, capacity: e.target.value })} placeholder="e.g. 10,000 bags" />
                  {errors.capacity && <p className="text-xs text-red-500 mt-1">{errors.capacity}</p>}
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 text-sm font-semibold text-white bg-gray-900 rounded-md hover:bg-gray-700 transition-colors">
                  {editId ? "Save Changes" : "Add Warehouse"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-sm font-bold text-gray-900">Warehouse Registry</h2>
          <button
            onClick={openAdd}
            className="flex items-center gap-2 px-4 py-2 bg-[#1a5c2a] text-white text-sm font-semibold rounded-md hover:bg-[#154d23] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Add Warehouse
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                {["Name", "Location", "Capacity", "Manager", "Status", ""].map((h) => (
                  <th key={h} className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-5 py-10 text-center text-gray-400 text-sm">No warehouses found.</td>
                </tr>
              ) : (
                filtered.map((wh) => (
                  <tr key={wh.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5 font-medium text-gray-900">{wh.name}</td>
                    <td className="px-5 py-3.5 text-gray-600">{wh.location}</td>
                    <td className="px-5 py-3.5 text-gray-600">{wh.capacity}</td>
                    <td className="px-5 py-3.5 text-gray-600">{wh.manager || "Unassigned"}</td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${wh.status === "Active" ? "bg-gray-100 text-gray-600" : "bg-gray-50 text-gray-400"}`}>
                        {wh.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 relative">
                      <button
                        onClick={() => setOpenMenu(openMenu === wh.id ? null : wh.id)}
                        className="p-1 rounded hover:bg-gray-100 text-gray-500 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/>
                        </svg>
                      </button>
                      {openMenu === wh.id && (
                        <div className="absolute right-4 top-10 z-20 bg-white border border-gray-100 rounded-lg shadow-lg w-36 overflow-hidden">
                          <button
                            onClick={() => { openEdit(wh); setOpenMenu(null); }}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => { toggleStatus(wh.id); setOpenMenu(null); }}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            {wh.status === "Active" ? "Deactivate" : "Activate"}
                          </button>
                        </div>
                      )}
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
