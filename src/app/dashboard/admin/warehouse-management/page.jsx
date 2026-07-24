"use client";

import { useState, useEffect, useCallback } from "react";
import { adminWarehousesService } from "@/lib/api/adminWarehouses";

const emptyForm = { code: "", name: "", location: "", capacity: "", manager: "", status: "Active" };

function SkeletonRow() {
  return (
    <tr className="border-b border-gray-100 animate-pulse">
      {Array.from({ length: 6 }).map((_, i) => (
        <td key={i} className="px-4 py-3"><div className="h-3.5 bg-gray-200 rounded w-3/4" /></td>
      ))}
    </tr>
  );
}

export default function WarehouseManagementPage() {
  const [warehouses, setWarehouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [search, setSearch] = useState("");
  const [openMenu, setOpenMenu] = useState(null);
  const [toast, setToast] = useState(null);
  const [saving, setSaving] = useState(false);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchWarehouses = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await adminWarehousesService.list();
      setWarehouses(data ?? []);
    } catch (err) {
      setError(err.message ?? "Failed to load warehouses.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchWarehouses(); }, [fetchWarehouses]);

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
    setForm({ code: wh.code, name: wh.name, location: wh.location, capacity: wh.capacity, manager: wh.manager || "", status: wh.status });
    setErrors({});
    setEditId(wh.id);
    setShowForm(true);
    setOpenMenu(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSaving(true);
    try {
      if (editId) {
        const { data } = await adminWarehousesService.update(editId, form);
        setWarehouses((prev) => prev.map((wh) => wh.id === editId ? data : wh));
        showToast("Warehouse updated successfully.");
      } else {
        const { data } = await adminWarehousesService.create(form);
        setWarehouses((prev) => [...prev, data]);
        showToast("Warehouse added successfully.");
      }
      setShowForm(false);
    } catch (err) {
      showToast(err.message ?? "Operation failed.", "error");
    } finally {
      setSaving(false);
    }
  };

  const toggleStatus = async (id) => {
    try {
      const { data } = await adminWarehousesService.toggleStatus(id);
      setWarehouses((prev) => prev.map((wh) => wh.id === id ? data : wh));
      showToast("Status updated.");
    } catch (err) {
      showToast(err.message ?? "Failed to update status.", "error");
    }
    setOpenMenu(null);
  };

  const filtered = warehouses.filter((wh) =>
    `${wh.code} ${wh.name} ${wh.location} ${wh.manager ?? ""}`.toLowerCase().includes(search.toLowerCase())
  );

  const inputClass = (field) =>
    `w-full px-3 py-2 text-sm border rounded-lg outline-none transition-colors ${
      errors[field] ? "border-red-400 focus:border-red-400 bg-red-50" : "border-gray-200 focus:border-[#1a5c2a]"
    }`;

  return (
    <div className="space-y-6">
      {toast && (
        <div className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-md shadow-lg text-sm font-semibold text-white ${toast.type === "error" ? "bg-red-600" : "bg-gray-900"}`}>
          {toast.msg}
        </div>
      )}

      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Administration</p>
          <h1 className="text-xl font-bold text-gray-900">Warehouse Management</h1>
          <p className="text-sm text-gray-500 mt-0.5">Manage physical warehouse locations and capacities.</p>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#1a5c2a] text-white text-sm font-semibold rounded-lg hover:bg-[#134520] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Add Warehouse
        </button>
      </div>

      <div className="relative w-full max-w-sm">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search warehouses…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-[#1a5c2a] bg-white"
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
          {error} — <button onClick={fetchWarehouses} className="underline font-semibold">Retry</button>
        </div>
      )}

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                {["Code", "Name", "Location", "Capacity", "Manager", "Status", "Actions"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => <SkeletonRow key={i} />)
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center text-sm text-gray-500">
                    {search ? "No warehouses match your search." : "No warehouses found. Connect a backend or add your first warehouse."}
                  </td>
                </tr>
              ) : (
                filtered.map((wh) => (
                  <tr key={wh.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">{wh.code}</td>
                    <td className="px-4 py-3 font-semibold text-gray-900">{wh.name}</td>
                    <td className="px-4 py-3 text-gray-600">{wh.location}</td>
                    <td className="px-4 py-3 text-gray-500">{wh.capacity}</td>
                    <td className="px-4 py-3 text-gray-500">{wh.manager || "—"}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${wh.status === "Active" ? "text-[#1a5c2a]" : "text-gray-400"}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${wh.status === "Active" ? "bg-[#1a5c2a]" : "bg-gray-300"}`} />
                        {wh.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="relative">
                        <button
                          onClick={() => setOpenMenu(openMenu === wh.id ? null : wh.id)}
                          className="p-1.5 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <circle cx="5" cy="12" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="19" cy="12" r="1.5" />
                          </svg>
                        </button>
                        {openMenu === wh.id && (
                          <div className="absolute right-0 top-full mt-1 w-36 bg-white border border-gray-200 rounded-lg shadow-lg z-20 py-1">
                            <button onClick={() => openEdit(wh)} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Edit</button>
                            <button onClick={() => toggleStatus(wh.id)} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                              {wh.status === "Active" ? "Deactivate" : "Activate"}
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="text-base font-bold text-gray-900">{editId ? "Edit Warehouse" : "Add New Warehouse"}</h2>
              <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
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
                    <option>Active</option><option>Inactive</option>
                  </select>
                </div>
              </div>
              {[["name", "Warehouse Name *", "e.g. Dedza Main Warehouse"], ["location", "Location *", "e.g. Dedza Town"], ["capacity", "Capacity *", "e.g. 5,000 bags"], ["manager", "Manager", "Manager name"]].map(([key, label, ph]) => (
                <div key={key}>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">{label}</label>
                  <input className={inputClass(key)} value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} placeholder={ph} />
                  {errors[key] && <p className="text-xs text-red-500 mt-1">{errors[key]}</p>}
                </div>
              ))}
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowForm(false)} className="flex-1 px-4 py-2.5 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">Cancel</button>
                <button type="submit" disabled={saving} className="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-[#1a5c2a] rounded-lg hover:bg-[#134520] transition-colors disabled:opacity-60">
                  {saving ? "Saving…" : editId ? "Save Changes" : "Add Warehouse"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
