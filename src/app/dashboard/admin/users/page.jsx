"use client";

import { useState, useRef, useEffect } from "react";
import { SEED_FARMERS } from "@/lib/mockFarmers";
import { SEED_USERS } from "@/auth/mockUsers";

// ── Role options available for assignment ──────────────────────
const ROLE_OPTIONS = [
  { id: "role-sysadmin",          label: "System Administrator" },
  { id: "role-warehouse-officer", label: "Warehouse Officer" },
  { id: "role-ipc-manager",       label: "IPC Manager" },
  { id: "role-head-office",       label: "Head Office Manager" },
];

const IPC_OPTIONS = [
  "Lilongwe IPC",
  "Mchinji IPC",
  "Kasungu IPC",
  "Mzimba IPC",
];

const VIEW_OPTIONS = ["Farmers", "Admin Users"];

// ── Helpers ────────────────────────────────────────────────────
function loadUsers() {
  if (typeof window === "undefined") return SEED_USERS;
  try {
    const stored = localStorage.getItem("nasfam_users");
    if (stored) return JSON.parse(stored);
  } catch { /* */ }
  return SEED_USERS;
}

function saveUsers(users) {
  try { localStorage.setItem("nasfam_users", JSON.stringify(users)); } catch { /* */ }
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
const EMPTY_USER_FORM = { name: "", email: "", phone: "", roleId: "role-warehouse-officer", role: "Warehouse Officer", assignedIPC: "", status: "Active" };

function UserModal({ user, onClose, onSave }) {
  const isEdit = !!user?.id;
  const [form, setForm] = useState(
    isEdit
      ? { name: user.name, email: user.email, phone: user.phone || "", roleId: user.roleId, role: user.role, assignedIPC: user.assignedIPC || "", status: user.status }
      : EMPTY_USER_FORM
  );
  const [errors, setErrors] = useState({});

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email.";
    return e;
  };

  const handleSave = () => {
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    onSave({ ...form, id: user?.id });
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
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name *</label>
            <input className={inputCls("name")} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="e.g. Jane Banda" />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Email Address *</label>
            <input className={inputCls("email")} value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="e.g. jane@nasfam.org" />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Phone Number</label>
            <input className={inputCls("phone")} value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+265 999 000 000" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Role *</label>
              <select
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-[#1a5c2a]"
                value={form.roleId}
                onChange={(e) => {
                  const opt = ROLE_OPTIONS.find((r) => r.id === e.target.value);
                  set("roleId", e.target.value);
                  set("role", opt?.label ?? "");
                }}
              >
                {ROLE_OPTIONS.map((r) => (
                  <option key={r.id} value={r.id}>{r.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Status</label>
              <select
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-[#1a5c2a]"
                value={form.status}
                onChange={(e) => set("status", e.target.value)}
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

          {needsIPC && (
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Assigned IPC</label>
              <select
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-[#1a5c2a]"
                value={form.assignedIPC}
                onChange={(e) => set("assignedIPC", e.target.value)}
              >
                <option value="">— None —</option>
                {IPC_OPTIONS.map((ipc) => <option key={ipc}>{ipc}</option>)}
              </select>
            </div>
          )}
        </div>

        <div className="flex gap-3 px-6 py-4 border-t border-gray-100">
          <button onClick={onClose} className="flex-1 px-4 py-2.5 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">Cancel</button>
          <button onClick={handleSave} className="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-[#1a5c2a] rounded-lg hover:bg-[#134520] transition-colors">
            {isEdit ? "Save Changes" : "Create User"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Status badge ───────────────────────────────────────────────
function StatusBadge({ status }) {
  const isActive = status === "Active";
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${isActive ? "text-[#1a5c2a]" : "text-gray-400"}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-[#1a5c2a]" : "bg-gray-300"}`} />
      {status}
    </span>
  );
}

// ── Main Page ─────────────────────────────────────────────────
export default function UsersPage() {
  const [view, setView]         = useState("Farmers");
  const [openMenu, setOpenMenu] = useState(null);
  const [users, setUsers]       = useState(() => loadUsers());
  const [search, setSearch]     = useState("");
  const [modal, setModal]       = useState(null); // null | { mode: "add" | "edit", user?: object }
  const [toast, setToast]       = useState(null);

  const isFarmers = view === "Farmers";

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSaveUser = (data) => {
    setUsers((prev) => {
      let next;
      if (data.id) {
        next = prev.map((u) => u.id === data.id ? { ...u, ...data } : u);
        showToast("User updated successfully.");
      } else {
        const newUser = { ...data, id: `usr-${Date.now()}`, createdAt: new Date().toISOString().slice(0, 10) };
        next = [...prev, newUser];
        showToast("User created successfully.");
      }
      saveUsers(next);
      return next;
    });
  };

  const handleDeactivateUser = (userId) => {
    setUsers((prev) => {
      const next = prev.map((u) =>
        u.id === userId ? { ...u, status: u.status === "Active" ? "Inactive" : "Active" } : u
      );
      saveUsers(next);
      return next;
    });
    setOpenMenu(null);
  };

  const filteredFarmers = SEED_FARMERS.filter((f) =>
    search ? `${f.fullName} ${f.district} ${f.association}`.toLowerCase().includes(search.toLowerCase()) : true
  );

  const filteredUsers = users.filter((u) =>
    search ? `${u.name} ${u.email} ${u.role}`.toLowerCase().includes(search.toLowerCase()) : true
  );

  return (
    <div className="space-y-6 relative">
      {/* Toast */}
      {toast && (
        <div className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-md shadow-lg text-sm font-semibold text-white ${toast.type === "error" ? "bg-red-600" : "bg-gray-900"}`}>
          {toast.msg}
        </div>
      )}

      {/* Modal */}
      {modal && (
        <UserModal
          user={modal.user}
          onClose={() => setModal(null)}
          onSave={handleSaveUser}
        />
      )}

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {/* Card header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <TypeDropdown value={view} onChange={(v) => { setView(v); setSearch(""); setOpenMenu(null); }} />
          </div>
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative">
              <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder={`Search ${isFarmers ? "farmers" : "users"}…`}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-4 py-1.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-gray-400 w-48"
              />
            </div>

            {!isFarmers && (
              <button
                onClick={() => setModal({ mode: "add" })}
                className="flex items-center gap-2 px-4 py-2 bg-[#1a5c2a] text-white text-sm font-semibold rounded-md hover:bg-[#134520] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                Add User
              </button>
            )}
          </div>
        </div>

        <div className="overflow-x-auto">
          {isFarmers ? (
            <table className="w-auto min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="px-4 py-3 text-xs font-semibold text-gray-700 w-1/3">Name</th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-700 w-1/4">District</th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-700">Association</th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-700">Status</th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-700"></th>
                </tr>
              </thead>
              <tbody>
                {filteredFarmers.length === 0 ? (
                  <tr><td colSpan={5} className="px-4 py-10 text-center text-sm text-gray-400">No farmers found.</td></tr>
                ) : filteredFarmers.map((f) => (
                  <tr key={f.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 border border-gray-200">
                          <span className="text-xs font-bold text-gray-400">
                            {f.fullName.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-700">{f.fullName}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-xs text-gray-500">{f.district}</td>
                    <td className="px-4 py-3.5 text-xs text-gray-500 max-w-[180px] truncate" title={f.association}>
                      {f.association}
                    </td>
                    <td className="px-4 py-3.5">
                      <StatusBadge status={f.status} />
                    </td>
                    <td className="px-4 py-3.5 relative">
                      <button
                        onClick={() => setOpenMenu(openMenu === `f-${f.id}` ? null : `f-${f.id}`)}
                        className="p-1 rounded hover:bg-gray-100 text-gray-500 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/>
                        </svg>
                      </button>
                      {openMenu === `f-${f.id}` && (
                        <div className="absolute right-4 top-10 z-20 bg-white border border-gray-100 rounded-lg shadow-lg w-36 overflow-hidden">
                          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors" onClick={() => setOpenMenu(null)}>View Details</button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="w-auto min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="px-4 py-3 text-xs font-semibold text-gray-700 w-1/3">Name</th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-700">Role</th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-700">Assigned IPC</th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-700">Status</th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-700"></th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length === 0 ? (
                  <tr><td colSpan={5} className="px-4 py-10 text-center text-sm text-gray-400">No users found.</td></tr>
                ) : filteredUsers.map((u) => (
                  <tr key={u.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#e8f1ea] flex items-center justify-center flex-shrink-0 border border-[#c6dbc9]">
                          <span className="text-xs font-bold text-[#1a5c2a]">
                            {u.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800">{u.name}</p>
                          <p className="text-xs text-gray-400">{u.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-xs text-gray-500">{u.role}</td>
                    <td className="px-4 py-3.5 text-xs text-gray-500">
                      {u.assignedIPC || <span className="text-gray-300">—</span>}
                    </td>
                    <td className="px-4 py-3.5">
                      <StatusBadge status={u.status} />
                    </td>
                    <td className="px-4 py-3.5 relative">
                      <button
                        onClick={() => setOpenMenu(openMenu === `u-${u.id}` ? null : `u-${u.id}`)}
                        className="p-1 rounded hover:bg-gray-100 text-gray-500 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/>
                        </svg>
                      </button>
                      {openMenu === `u-${u.id}` && (
                        <div className="absolute right-4 top-10 z-20 bg-white border border-gray-100 rounded-lg shadow-lg w-40 overflow-hidden">
                          <button
                            onClick={() => { setModal({ mode: "edit", user: u }); setOpenMenu(null); }}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            Edit
                          </button>
                          {u.id !== "usr-001" && (
                            <button
                              onClick={() => handleDeactivateUser(u.id)}
                              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                              {u.status === "Active" ? "Deactivate" : "Activate"}
                            </button>
                          )}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Footer count */}
        <div className="px-5 py-3 border-t border-gray-50 text-xs text-gray-400">
          {isFarmers
            ? `Showing ${filteredFarmers.length} of ${SEED_FARMERS.length} farmers`
            : `Showing ${filteredUsers.length} of ${users.length} users`}
        </div>
      </div>
    </div>
  );
}
