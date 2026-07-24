"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { usersService } from "@/lib/api/users";
import { farmersService } from "@/lib/api/farmers";
import { ipcsService } from "@/lib/api/ipcs";

// ── Role options available for assignment ──────────────────────
const ROLE_OPTIONS = [
  { id: "role-sysadmin",          label: "System Administrator" },
  { id: "role-warehouse-officer", label: "Warehouse Officer" },
  { id: "role-ipc-manager",       label: "IPC Manager" },
  { id: "role-head-office",       label: "Head Office Manager" },
];

const VIEW_OPTIONS = ["Farmers", "Admin Users"];

// ── Skeleton row ───────────────────────────────────────────────
function SkeletonRow({ cols = 6 }) {
  return (
    <tr className="border-b border-gray-100 animate-pulse">
      {Array.from({ length: cols }).map((_, i) => (
        <td key={i} className="px-4 py-3">
          <div className="h-3.5 bg-gray-200 rounded w-3/4" />
        </td>
      ))}
    </tr>
  );
}

// ── Empty state ────────────────────────────────────────────────
function EmptyState({ message = "No records found." }) {
  return (
    <tr>
      <td colSpan={8} className="px-4 py-12 text-center">
        <p className="text-sm text-gray-500">{message}</p>
      </td>
    </tr>
  );
}

// ── TypeDropdown ───────────────────────────────────────────────
function TypeDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-sm font-bold text-gray-900 hover:text-gray-600 transition-colors"
      >
        {value}
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-1.5 w-36 bg-white border border-gray-200 rounded-lg shadow-md z-20 overflow-hidden">
          {VIEW_OPTIONS.map((opt) => (
            <button
              key={opt}
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                opt === value
                  ? "bg-gray-50 text-gray-900 font-semibold"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Add / Edit User Modal ──────────────────────────────────────
const EMPTY_USER_FORM = {
  name: "", email: "", phone: "",
  roleId: "role-warehouse-officer", role: "Warehouse Officer",
  assignedIPC: "", status: "Active",
};

function UserModal({ user, ipcOptions, onClose, onSave }) {
  const isEdit = !!user?.id;
  const [form, setForm] = useState(
    isEdit
      ? { name: user.name, email: user.email, phone: user.phone || "", roleId: user.roleId, role: user.role, assignedIPC: user.assignedIPC || "", status: user.status }
      : EMPTY_USER_FORM
  );
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email.";
    return e;
  };

  const handleSave = async () => {
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSaving(true);
    await onSave({ ...form, id: user?.id });
    setSaving(false);
    onClose();
  };

  const inputCls = (field) =>
    `w-full px-3 py-2 text-sm border rounded-lg outline-none transition-colors ${
      errors[field] ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#1a5c2a]"
    }`;

  const needsIPC = ["role-warehouse-officer", "role-ipc-manager"].includes(form.roleId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-base font-bold text-gray-900">{isEdit ? "Edit User" : "Add New User"}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-5 space-y-4">
          {["name", "email", "phone"].map((field) => (
            <div key={field}>
              <label className="block text-xs font-semibold text-gray-600 mb-1 capitalize">{field} {field !== "phone" ? "*" : ""}</label>
              <input
                type={field === "email" ? "email" : "text"}
                value={form[field]}
                onChange={(e) => set(field, e.target.value)}
                className={inputCls(field)}
                placeholder={field === "email" ? "name@nasfam.org" : ""}
              />
              {errors[field] && <p className="text-xs text-red-500 mt-1">{errors[field]}</p>}
            </div>
          ))}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Role *</label>
            <select
              value={form.roleId}
              onChange={(e) => {
                const r = ROLE_OPTIONS.find(x => x.id === e.target.value);
                set("roleId", e.target.value);
                set("role", r?.label || "");
              }}
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-[#1a5c2a]"
            >
              {ROLE_OPTIONS.map((r) => (
                <option key={r.id} value={r.id}>{r.label}</option>
              ))}
            </select>
          </div>
          {needsIPC && (
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Assigned IPC</label>
              <select
                value={form.assignedIPC}
                onChange={(e) => set("assignedIPC", e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-[#1a5c2a]"
              >
                <option value="">Select IPC</option>
                {ipcOptions.map((ipc) => (
                  <option key={ipc.id || ipc.name} value={ipc.name}>{ipc.name}</option>
                ))}
              </select>
            </div>
          )}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Status</label>
            <select
              value={form.status}
              onChange={(e) => set("status", e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-[#1a5c2a]"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>
        <div className="flex gap-3 px-6 py-4 border-t border-gray-100">
          <button onClick={onClose} className="flex-1 px-4 py-2.5 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-[#1a5c2a] rounded-lg hover:bg-[#134520] transition-colors disabled:opacity-60"
          >
            {saving ? "Saving…" : "Save User"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────
export default function UsersPage() {
  const [view, setView] = useState("Admin Users");
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [farmers, setFarmers] = useState([]);
  const [ipcOptions, setIpcOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(null); // null | { user? }
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [usersRes, farmersRes, ipcsRes] = await Promise.all([
        usersService.list(),
        farmersService.list({ limit: 200 }),
        ipcsService.list(),
      ]);
      setUsers(usersRes.data ?? []);
      setFarmers(farmersRes.data ?? []);
      setIpcOptions(ipcsRes.data ?? []);
    } catch (err) {
      setError(err.message ?? "Failed to load data.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  const handleSaveUser = async (formData) => {
    try {
      if (formData.id) {
        const { data } = await usersService.update(formData.id, formData);
        setUsers((prev) => prev.map((u) => (u.id === data.id ? data : u)));
        showToast("User updated successfully.");
      } else {
        const { data } = await usersService.create(formData);
        setUsers((prev) => [...prev, data]);
        showToast("User created successfully.");
      }
    } catch (err) {
      showToast(err.message ?? "Operation failed.", "error");
    }
  };

  const handleToggleStatus = async (userId) => {
    try {
      const { data } = await usersService.toggleStatus(userId);
      setUsers((prev) => prev.map((u) => (u.id === data.id ? data : u)));
      showToast("User status updated.");
    } catch (err) {
      showToast(err.message ?? "Failed to update status.", "error");
    }
  };

  const filteredUsers = users.filter((u) =>
    `${u.name} ${u.email} ${u.role} ${u.assignedIPC ?? ""}`.toLowerCase().includes(search.toLowerCase())
  );

  const filteredFarmers = farmers.filter((f) =>
    `${f.fullName} ${f.memberNo ?? ""} ${f.district ?? ""}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Toast */}
      {toast && (
        <div className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-md shadow-lg text-sm font-semibold text-white ${toast.type === "error" ? "bg-red-600" : "bg-gray-900"}`}>
          {toast.msg}
        </div>
      )}

      {modal && (
        <UserModal
          user={modal.user}
          ipcOptions={ipcOptions}
          onClose={() => setModal(null)}
          onSave={handleSaveUser}
        />
      )}

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Administration</p>
          <h1 className="flex items-center gap-2 text-xl font-bold text-gray-900">
            <TypeDropdown value={view} onChange={setView} />
          </h1>
          <p className="text-sm text-gray-500 mt-0.5">
            {view === "Admin Users" ? "Manage web application user accounts and access." : "View registered farmers in the system."}
          </p>
        </div>
        {view === "Admin Users" && (
          <button
            onClick={() => setModal({})}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#1a5c2a] text-white text-sm font-semibold rounded-lg hover:bg-[#134520] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Add User
          </button>
        )}
      </div>

      {/* Search */}
      <div className="relative w-full max-w-sm">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder={`Search ${view.toLowerCase()}…`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-[#1a5c2a] bg-white"
        />
      </div>

      {/* Error state */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700 flex items-center gap-2">
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error} — <button onClick={fetchData} className="underline font-semibold">Retry</button>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          {view === "Admin Users" ? (
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  {["Name", "Email", "Role", "Assigned IPC", "Status", "Created", "Actions"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  Array.from({ length: 5 }).map((_, i) => <SkeletonRow key={i} cols={7} />)
                ) : filteredUsers.length === 0 ? (
                  <EmptyState message={search ? "No users match your search." : "No users found. Connect a backend to load user data."} />
                ) : (
                  filteredUsers.map((u) => (
                    <tr key={u.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-semibold text-gray-900">{u.name}</td>
                      <td className="px-4 py-3 text-gray-600">{u.email}</td>
                      <td className="px-4 py-3 text-gray-600">{u.role}</td>
                      <td className="px-4 py-3 text-gray-500">{u.assignedIPC || "—"}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${u.status === "Active" ? "text-[#1a5c2a]" : "text-gray-400"}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${u.status === "Active" ? "bg-[#1a5c2a]" : "bg-gray-300"}`} />
                          {u.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-500">{u.createdAt?.split("T")[0] ?? "—"}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setModal({ user: u })}
                            className="text-xs font-semibold text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleToggleStatus(u.id)}
                            className={`text-xs font-semibold ${u.status === "Active" ? "text-red-500 hover:text-red-700" : "text-[#1a5c2a] hover:text-[#134520]"} transition-colors`}
                          >
                            {u.status === "Active" ? "Deactivate" : "Activate"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  {["Farmer ID", "Name", "Gender", "District", "Association", "Status"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  Array.from({ length: 5 }).map((_, i) => <SkeletonRow key={i} cols={6} />)
                ) : filteredFarmers.length === 0 ? (
                  <EmptyState message={search ? "No farmers match your search." : "No farmer records found. Connect a backend to load farmer data."} />
                ) : (
                  filteredFarmers.map((f) => (
                    <tr key={f.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-mono text-xs text-gray-600">{f.id}</td>
                      <td className="px-4 py-3 font-semibold text-gray-900">{f.fullName}</td>
                      <td className="px-4 py-3 text-gray-600">{f.gender}</td>
                      <td className="px-4 py-3 text-gray-600">{f.district}</td>
                      <td className="px-4 py-3 text-gray-500">{f.association || "—"}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${f.status === "Active" ? "text-[#1a5c2a]" : "text-gray-400"}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${f.status === "Active" ? "bg-[#1a5c2a]" : "bg-gray-300"}`} />
                          {f.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
