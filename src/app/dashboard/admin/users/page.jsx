"use client";

import { useState } from "react";
import { useRBAC } from "@/auth/rbacContext";
import { SEED_USERS } from "@/auth/mockUsers";

const STORAGE_KEY = "nasfam_users";
const IPC_OPTIONS = ["Lilongwe IPC", "Mchinji IPC", "Kasungu IPC", "Mzimba IPC"];

function loadUsers() {
  if (typeof window === "undefined") return SEED_USERS;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch { /* */ }
  return SEED_USERS;
}

function StatusBadge({ status }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${status === "Active" ? "bg-gray-100 text-gray-600" : "bg-gray-50 text-gray-400"}`}>
      {status}
    </span>
  );
}

// ── Create / Edit Modal ───────────────────────────────────────
function UserModal({ user, roles, onSave, onClose }) {
  const editing = !!user?.id;
  const [form, setForm] = useState({
    name:        user?.name        ?? "",
    email:       user?.email       ?? "",
    phone:       user?.phone       ?? "",
    roleId:      user?.roleId      ?? roles[0]?.id ?? "",
    assignedIPC: user?.assignedIPC ?? "",
    status:      user?.status      ?? "Active",
  });
  const [error, setError] = useState("");

  const selectedRole = roles.find((r) => r.id === form.roleId);
  const needsIPC = ["role-warehouse-officer", "role-ipc-manager"].includes(form.roleId);
  const handle = (field, val) => setForm((p) => ({ ...p, [field]: val }));

  const handleSubmit = () => {
    if (!form.name.trim() || !form.email.trim()) {
      setError("Full Name and Email are required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    onSave({ ...form, role: selectedRole?.name ?? form.roleId });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white rounded-md shadow-2xl w-full max-w-lg border border-gray-200">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div>
            <h2 className="text-base font-bold text-gray-900">{editing ? "Edit User" : "Create New User"}</h2>
            <p className="text-xs text-gray-400 mt-0.5">
              {editing ? "Update user details and role assignment." : "Select a predefined role. Permissions are automatically applied."}
            </p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-5 space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-100 rounded-lg text-sm text-red-700 font-medium">{error}</div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name *</label>
              <input type="text" value={form.name} onChange={(e) => handle("name", e.target.value)}
                placeholder="e.g. John Banda"
                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg outline-none focus:border-gray-500 transition-colors bg-white" />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address *</label>
              <input type="email" value={form.email} onChange={(e) => handle("email", e.target.value)}
                placeholder="name@nasfam.org"
                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg outline-none focus:border-gray-500 transition-colors bg-white" />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone Number</label>
              <input type="tel" value={form.phone} onChange={(e) => handle("phone", e.target.value)}
                placeholder="+265 999 000 000"
                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg outline-none focus:border-gray-500 transition-colors bg-white" />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Assigned Role *</label>
              <select value={form.roleId} onChange={(e) => handle("roleId", e.target.value)}
                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg outline-none focus:border-gray-500 transition-colors bg-white">
                {roles.filter((r) => r.status === "Active").map((r) => (
                  <option key={r.id} value={r.id}>{r.name}</option>
                ))}
              </select>
              {selectedRole && (
                <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                  Permissions for <span className="font-semibold text-gray-600">{selectedRole.name}</span> will be applied automatically.
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                Assigned IPC {needsIPC ? "*" : "(Optional)"}
              </label>
              <select value={form.assignedIPC ?? ""} onChange={(e) => handle("assignedIPC", e.target.value || null)}
                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg outline-none focus:border-gray-500 transition-colors bg-white">
                <option value="">— None —</option>
                {IPC_OPTIONS.map((ipc) => <option key={ipc} value={ipc}>{ipc}</option>)}
              </select>
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-2">Status</label>
            <div className="flex gap-4">
              {["Active", "Inactive"].map((s) => (
                <label key={s} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="modal-status" value={s} checked={form.status === s}
                    onChange={() => handle("status", s)} className="accent-[#1a5c2a]" />
                  <span className="text-sm text-gray-700">{s}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-3 px-6 py-4 border-t border-gray-100">
          <button onClick={onClose}
            className="flex-1 px-4 py-2.5 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            Cancel
          </button>
          <button onClick={handleSubmit}
            className="flex-1 px-4 py-2.5 text-sm font-bold text-white bg-gray-900 rounded-md hover:bg-gray-700 transition-colors">
            {editing ? "Save Changes" : "Create User"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────
export default function UsersPage() {
  const { roles } = useRBAC();
  const [users, setUsers] = useState(() => loadUsers());
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const persist = (updated) => {
    setUsers(updated);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)); } catch { /* */ }
  };

  const filtered = users.filter((u) =>
    `${u.name} ${u.email} ${u.role}`.toLowerCase().includes(search.toLowerCase())
  );

  const handleSave = (form) => {
    if (modal.mode === "create") {
      const duplicate = users.find((u) => u.email.toLowerCase() === form.email.toLowerCase());
      if (duplicate) { showToast("A user with this email already exists.", "error"); return; }
      const newUser = { ...form, id: `usr-${Date.now()}`, createdAt: new Date().toISOString().split("T")[0] };
      persist([...users, newUser]);
      showToast(`User "${form.name}" created successfully.`);
    } else {
      persist(users.map((u) => u.id === modal.user.id ? { ...u, ...form } : u));
      showToast("User updated.");
    }
    setModal(null);
  };

  const toggleStatus = (id) => {
    if (id === "usr-001") { showToast("Cannot deactivate the primary System Administrator.", "error"); return; }
    persist(users.map((u) => u.id === id ? { ...u, status: u.status === "Active" ? "Inactive" : "Active" } : u));
    showToast("User status updated.");
  };

  return (
    <div className="space-y-6 relative">
      {toast && (
        <div className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-md shadow-lg text-sm font-semibold text-white ${toast.type === "error" ? "bg-red-600" : "bg-gray-900"}`}>
          {toast.msg}
        </div>
      )}

      {modal && (
        <UserModal
          user={modal.user}
          roles={roles}
          onSave={handleSave}
          onClose={() => setModal(null)}
        />
      )}

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Administration</p>
          <h1 className="text-xl font-bold text-gray-900">User Management</h1>
          <p className="text-sm text-gray-500 mt-0.5">Manage system user accounts and role assignments.</p>
        </div>
        <button onClick={() => setModal({ mode: "create" })}
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-md hover:bg-gray-700 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Create User
        </button>
      </div>

      {/* User Table */}
      <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-sm font-bold text-gray-900">System Users</h2>
          <div className="relative">
            <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" placeholder="Search users..." value={search} onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-gray-400 w-56 bg-white" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                {["Name", "Email", "Phone", "Assigned IPC", "Role", "Status", "Created", "Actions"].map((h) => (
                  <th key={h} className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-5 py-12 text-center text-sm text-gray-400">No users found.</td>
                </tr>
              ) : filtered.map((u) => (
                <tr key={u.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 border border-gray-200">
                        <span className="text-xs font-bold text-gray-600">
                          {u.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                        </span>
                      </div>
                      <span className="font-semibold text-gray-900">{u.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-gray-600">{u.email}</td>
                  <td className="px-5 py-3.5 text-gray-500">{u.phone || <span className="text-gray-300">—</span>}</td>
                  <td className="px-5 py-3.5 text-gray-500 text-xs">{u.assignedIPC || <span className="text-gray-300">—</span>}</td>
                  <td className="px-5 py-3.5">
                    <span className="text-xs font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full">{u.role}</span>
                  </td>
                  <td className="px-5 py-3.5"><StatusBadge status={u.status} /></td>
                  <td className="px-5 py-3.5 text-gray-400 text-xs">{u.createdAt}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <button onClick={() => setModal({ mode: "edit", user: u })}
                        className="text-xs font-semibold text-gray-700 hover:underline">Edit</button>
                      <button onClick={() => toggleStatus(u.id)}
                        className={`text-xs font-semibold hover:underline ${u.status === "Active" ? "text-gray-500" : "text-gray-900"}`}>
                        {u.status === "Active" ? "Deactivate" : "Activate"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
