"use client";

import { useState, useMemo } from "react";
import { useRBAC } from "@/auth/rbacContext";
import { MODULES, ACTIONS } from "@/auth/mockRoles";
import { SEED_USERS } from "@/auth/mockUsers";

function loadUsers() {
  if (typeof window === "undefined") return SEED_USERS;
  try {
    const stored = localStorage.getItem("nasfam_users");
    if (stored) return JSON.parse(stored);
  } catch { /* */ }
  return SEED_USERS;
}

// ── Create Custom Role Modal ──────────────────────────────────
function CreateRoleModal({ onClose, onCreate }) {
  const [name, setName]        = useState("");
  const [description, setDesc] = useState("");
  const [error, setError]      = useState("");

  const handleCreate = () => {
    if (!name.trim()) { setError("Role name is required."); return; }
    const blankPerms = Object.fromEntries(
      MODULES.map((m) => [m, Object.fromEntries(ACTIONS.map((a) => [a, false]))])
    );
    const result = onCreate({
      name: name.trim(), description: description.trim(),
      status: "Active", permissions: blankPerms, responsibilities: [],
    });
    if (result?.error) setError(result.error);
    else onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md border border-gray-200">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <h2 className="text-base font-bold text-gray-900">Create Custom Role</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-5 space-y-4">
          {error && <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Role Name *</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Finance Officer"
              className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg outline-none focus:border-gray-500 bg-white" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Description</label>
            <textarea value={description} onChange={(e) => setDesc(e.target.value)} rows={3}
              placeholder="Describe the responsibilities of this role..."
              className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg outline-none focus:border-gray-500 bg-white resize-none" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Platform</label>
            <p className="text-sm text-gray-600 bg-gray-50 px-3 py-2.5 rounded-lg border border-gray-100">Web Application</p>
          </div>
        </div>
        <div className="flex gap-3 px-6 py-4 border-t border-gray-100">
          <button onClick={onClose}
            className="flex-1 px-4 py-2.5 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            Cancel
          </button>
          <button onClick={handleCreate}
            className="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-[#1a5c2a] rounded-lg hover:bg-[#134520] transition-colors">
            Create Role
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────
export default function RolesPermissionsPage() {
  const {
    roles, updateRole, createRole, deleteRole,
    toggleRoleStatus, duplicateRole, resetPermissions, getRoleById,
  } = useRBAC();

  const [search, setSearch]         = useState("");
  const [filterType, setFilterType] = useState("All");
  const [selectedId, setSelectedId] = useState("role-sysadmin");
  const [showCreate, setShowCreate] = useState(false);
  const [toast, setToast]           = useState(null);
  const [users]                     = useState(() => loadUsers());

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const getDynamicRole = (role) => {
    if (!role) return null;
    const count = users.filter((u) => u.roleId === role.id).length;
    return { ...role, usersAssigned: count };
  };

  const filteredRoles = useMemo(() => roles.map(getDynamicRole).filter((r) => {
    const matchSearch = r.name.toLowerCase().includes(search.toLowerCase());
    const matchType   = filterType === "All" || r.type === filterType;
    return matchSearch && matchType;
  }), [roles, search, filterType, users]);

  const selected = getDynamicRole(getRoleById(selectedId));

  const selectRole = (id) => {
    setSelectedId(id);
  };

  const handleToggle = (id) => {
    const role = getDynamicRole(getRoleById(id));
    if (role.status === "Active" && role.usersAssigned > 0 &&
      !window.confirm(`${role.name} has ${role.usersAssigned} user(s) assigned. Deactivating will restrict their access. Continue?`))
      return;
    const result = toggleRoleStatus(id);
    if (result?.error) showToast(result.error, "error");
    else showToast("Role status updated.");
  };

  const handleDelete = (id) => {
    if (!window.confirm("Delete this custom role? This cannot be undone.")) return;
    const result = deleteRole(id);
    if (result?.error) showToast(result.error, "error");
    else { showToast("Role deleted."); if (selectedId === id) setSelectedId("role-sysadmin"); }
  };

  const handleDuplicate = (id) => {
    const copy = duplicateRole(id);
    showToast(`Duplicated as "${copy.name}".`);
    selectRole(copy.id);
  };

  const handleReset = () => {
    if (!window.confirm("Reset to default permissions? Custom changes will be overwritten.")) return;
    resetPermissions(selectedId);
    showToast("Permissions reset to defaults.");
  };

  return (
    <div className="space-y-6 relative">
      {/* Toast */}
      {toast && (
        <div className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-md shadow-lg text-sm font-semibold text-white ${toast.type === "error" ? "bg-red-600" : "bg-gray-900"}`}>
          {toast.msg}
        </div>
      )}

      {showCreate && (
        <CreateRoleModal
          onClose={() => setShowCreate(false)}
          onCreate={(d) => {
            const r = createRole(d);
            if (r.success) { showToast(`Role "${r.role.name}" created.`); selectRole(r.role.id); }
            return r;
          }}
        />
      )}

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Administration</p>
          <h1 className="text-xl font-bold text-gray-900">Roles &amp; Permissions</h1>
          <p className="text-sm text-gray-500 mt-0.5">View and manage system roles and their access permissions.</p>
        </div>
        <button onClick={() => setShowCreate(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#1a5c2a] text-white text-sm font-semibold rounded-lg hover:bg-[#134520] transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Create Custom Role
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        {/* ── Role List ── */}
        <div className="xl:col-span-1 bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-100 space-y-3">
            <div className="relative">
              <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Search roles..." value={search} onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-gray-400 bg-white" />
            </div>
            <div className="flex gap-2">
              {["All", "System", "Custom"].map((f) => (
                <button key={f} onClick={() => setFilterType(f)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                    filterType === f ? "bg-[#1a5c2a] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="divide-y divide-gray-50">
            {filteredRoles.length === 0 ? (
              <p className="py-12 text-center text-sm text-gray-400">No roles found.</p>
            ) : filteredRoles.map((role) => (
              <button key={role.id} onClick={() => selectRole(role.id)}
                className={`w-full text-left px-4 py-3.5 transition-colors border-l-2 ${
                  selectedId === role.id
                    ? "bg-gray-50 border-gray-900"
                    : "border-transparent hover:bg-gray-50/60"
                }`}>
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 leading-tight">{role.name}</p>
                    <p className="text-xs text-gray-400 mt-1">{role.platform}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 flex-shrink-0 mt-0.5">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full font-medium">{role.type}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      role.status === "Active" ? "text-gray-600 bg-gray-100" : "text-gray-400 bg-gray-50"
                    }`}>{role.status}</span>
                  </div>
                </div>
                {role.usersAssigned > 0 && (
                  <p className="text-xs text-gray-400 mt-2">
                    {role.usersAssigned} user{role.usersAssigned !== 1 ? "s" : ""} assigned
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── Detail Panel ── */}
        {selected ? (
          <div className="xl:col-span-2 space-y-5">
            {/* Role Info Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-base font-bold text-gray-900">{selected.name}</h2>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {selected.platform} &middot; {selected.type} Role &middot; Last modified {selected.lastModified}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400 font-medium">Status</p>
                  <p className="text-sm font-semibold text-gray-700 mt-0.5">{selected.status}</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-5 pb-5 border-b border-gray-100">
                {selected.description}
              </p>

              {selected.responsibilities.length > 0 && (
                <div className="mb-5">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Responsibilities</p>
                  <ul className="space-y-2">
                    {selected.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <svg className="w-3.5 h-3.5 text-gray-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-gray-100 mb-5">
                {selected.usersAssigned > 0 && (
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Users Assigned</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{selected.usersAssigned}</p>
                  </div>
                )}
                <div>
                  <p className="text-xs text-gray-400 font-medium">Role Type</p>
                  <p className="text-sm font-semibold text-gray-700 mt-1">{selected.type}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Platform</p>
                  <p className="text-sm font-semibold text-gray-700 mt-1">{selected.platform}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-2">
                {selected.type === "System" && (
                  <button onClick={handleReset}
                    className="px-4 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    Reset to Defaults
                  </button>
                )}
                <button onClick={() => handleDuplicate(selectedId)}
                  className="px-4 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  Duplicate
                </button>
                <button onClick={() => handleToggle(selectedId)}
                  className="px-4 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  {selected.status === "Active" ? "Deactivate" : "Activate"}
                </button>
                {selected.type === "Custom" && (
                  <button onClick={() => handleDelete(selectedId)}
                    className="px-4 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="xl:col-span-2 flex items-center justify-center bg-white rounded-xl border border-gray-200 min-h-[300px]">
            <p className="text-sm text-gray-400">Select a role to view its details.</p>
          </div>
        )}
      </div>
    </div>
  );
}
