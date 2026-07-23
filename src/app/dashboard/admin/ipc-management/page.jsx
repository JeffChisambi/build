"use client";

import { useState } from "react";

const INITIAL_IPCS = [
  { id: "IPC001", name: "Lilongwe IPC", district: "Lilongwe", manager: "Jane Doe", status: "Active", createdAt: "2024-01-15" },
  { id: "IPC002", name: "Mchinji IPC", district: "Mchinji", manager: "John Smith", status: "Active", createdAt: "2024-01-20" },
  { id: "IPC003", name: "Kasungu IPC", district: "Kasungu", manager: "Peter Banda", status: "Active", createdAt: "2024-02-10" },
  { id: "IPC004", name: "Mzimba IPC", district: "Mzimba", manager: "Grace Phiri", status: "Active", createdAt: "2024-03-05" },
];

const emptyForm = { id: "", name: "", district: "", manager: "", status: "Active" };

export default function IPCManagementPage() {
  const [ipcs, setIpcs] = useState(INITIAL_IPCS);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingCode, setEditingCode] = useState(null); // original IPC code being edited
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [openMenu, setOpenMenu] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const validate = () => {
    const e = {};
    if (!form.id.trim()) e.id = "IPC code is required";
    if (!form.name.trim()) e.name = "IPC name is required";
    if (!form.district.trim()) e.district = "District is required";
    // On add, check for duplicate code
    if (!editingCode && ipcs.some((ipc) => ipc.id === form.id.trim())) {
      e.id = "IPC code already exists";
    }
    return e;
  };

  const openAdd = () => {
    setForm(emptyForm);
    setErrors({});
    setEditingCode(null);
    setShowForm(true);
  };

  const openEdit = (ipc) => {
    setForm({ id: ipc.id, name: ipc.name, district: ipc.district, manager: ipc.manager || "", status: ipc.status });
    setErrors({});
    setEditingCode(ipc.id);
    setShowForm(true);
    setOpenMenu(null);
  };

  const handleToggleStatus = (ipcId) => {
    setIpcs((prev) =>
      prev.map((ipc) =>
        ipc.id === ipcId ? { ...ipc, status: ipc.status === "Active" ? "Inactive" : "Active" } : ipc
      )
    );
    setOpenMenu(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length) { setErrors(err); return; }

    if (editingCode) {
      // Edit existing
      setIpcs((prev) =>
        prev.map((ipc) =>
          ipc.id === editingCode
            ? { ...ipc, id: form.id.trim(), name: form.name.trim(), district: form.district.trim(), manager: form.manager.trim(), status: form.status }
            : ipc
        )
      );
      showToast("IPC updated successfully.");
    } else {
      // Add new
      setIpcs((prev) => [
        ...prev,
        {
          id: form.id.trim(),
          name: form.name.trim(),
          district: form.district.trim(),
          manager: form.manager.trim(),
          status: form.status,
          createdAt: new Date().toISOString().slice(0, 10),
        },
      ]);
      showToast("IPC added successfully.");
    }
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
      {/* Toast */}
      {toast && (
        <div className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-md shadow-lg text-sm font-semibold text-white ${toast.type === "error" ? "bg-red-600" : "bg-gray-900"}`}>
          {toast.msg}
        </div>
      )}

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
          Add IPC
        </button>
      </div>

      {/* Add / Edit Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="text-base font-bold text-gray-900">{editingCode ? "Edit IPC" : "Add New IPC"}</h2>
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
                  <input
                    className={inputClass("id")}
                    value={form.id}
                    onChange={(e) => setForm({ ...form, id: e.target.value })}
                    placeholder="e.g. IPC005"
                    readOnly={!!editingCode}
                  />
                  {errors.id && <p className="text-xs text-red-500 mt-1">{errors.id}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Status</label>
                  <select
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-[#1a5c2a]"
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                  >
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
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Manager Name</label>
                <input className={inputClass("manager")} value={form.manager} onChange={(e) => setForm({ ...form, manager: e.target.value })} placeholder="e.g. Jane Banda" />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 text-sm font-semibold text-white bg-[#1a5c2a] rounded-md hover:bg-[#134520] transition-colors">
                  {editingCode ? "Save Changes" : "Add IPC"}
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
                    <td className="px-5 py-3.5 text-gray-600">{ipc.manager || <span className="text-gray-300">—</span>}</td>
                    <td className="px-5 py-3.5 text-gray-500 text-xs">{ipc.createdAt}</td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${ipc.status === "Active" ? "text-[#1a5c2a]" : "text-gray-400"}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${ipc.status === "Active" ? "bg-[#1a5c2a]" : "bg-gray-300"}`} />
                        {ipc.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 relative">
                      <button
                        onClick={() => setOpenMenu(openMenu === ipc.id ? null : ipc.id)}
                        className="p-1 rounded hover:bg-gray-100 text-gray-500 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/>
                        </svg>
                      </button>
                      {openMenu === ipc.id && (
                        <div className="absolute right-5 top-10 z-20 bg-white border border-gray-100 rounded-lg shadow-lg w-36 overflow-hidden">
                          <button
                            onClick={() => openEdit(ipc)}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleToggleStatus(ipc.id)}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            {ipc.status === "Active" ? "Deactivate" : "Activate"}
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
        <div className="px-5 py-3 border-t border-gray-50 text-xs text-gray-400">
          {filtered.length} of {ipcs.length} IPCs
        </div>
      </div>
    </div>
  );
}
