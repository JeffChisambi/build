"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { useRBAC } from "@/auth/rbacContext";
import { MODULES, ACTIONS } from "@/lib/constants";
import { usersService } from "@/lib/api/users";

// ── Create Custom Role Modal ──────────────────────────────────
function CreateRoleModal({ onClose, onCreate }) {
  const [name, setName]        = useState("");
  const [description, setDesc] = useState("");
  const [error, setError]      = useState("");
  const [saving, setSaving]    = useState(false);

  const handleCreate = async () => {
    if (!name.trim()) { setError("Role name is required."); return; }
    const blankPerms = Object.fromEntries(
      MODULES.map((m) => [m, Object.fromEntries(ACTIONS.map((a) => [a, false]))])
    );
    setSaving(true);
    const r = await onCreate({
      name: name.trim(), description: description.trim(),
      status: "Active", permissions: blankPerms, responsibilities: [],
    });
    setSaving(false);
    if (r?.error) setError(r.error);
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
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Finance Officer"
              className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg outline-none focus:border-gray-500 bg-white" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Description</label>
            <textarea value={description} onChange={(e) => setDesc(e.target.value)} rows={3}
              placeholder="Describe the responsibilities of this role…"
              className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg outline-none focus:border-gray-500 bg-white resize-none" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Platform</label>
            <p className="text-sm text-gray-600 bg-gray-50 px-3 py-2.5 rounded-lg border border-gray-100">Web Application</p>
          </div>
        </div>
        <div className="flex gap-3 px-6 py-4 border-t border-gray-100">
          <button onClick={onClose} className="flex-1 px-4 py-2.5 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            Cancel
          </button>
          <button onClick={handleCreate} disabled={saving} className="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-[#1a5c2a] rounded-lg hover:bg-[#134520] transition-colors disabled:opacity-60">
            {saving ? "Creating…" : "Create Role"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function RolesPermissionsPage() {
  const {
    roles, updateRole, createRole, deleteRole,
    toggleRoleStatus, duplicateRole, resetPermissions, getRoleById,
    loading: rolesLoading,
  } = useRBAC();

  const [userCounts, setUserCounts] = useState({}); // { [roleId]: count }
  const [search, setSearch]         = useState("");
  const [filterType, setFilterType] = useState("All");
  const [selectedId, setSelectedId] = useState(null);
  const [showCreate, setShowCreate] = useState(false);
  const [toast, setToast]           = useState(null);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  // Fetch user counts per role for the "users assigned" badge
  useEffect(() => {
    usersService.list({ limit: 500 }).then(({ data }) => {
      if (!data) return;
      const counts = {};
      data.forEach((u) => {
        counts[u.roleId] = (counts[u.roleId] ?? 0) + 1;
      });
      setUserCounts(counts);
    }).catch(() => { /* non-critical */ });
  }, []);

  // Auto-select first role after load
  useEffect(() => {
    if (!selectedId && roles.length > 0) setSelectedId(roles[0].id);
  }, [roles, selectedId]);

  const withCount = (role) => {
    if (!role) return null;
    return { ...role, usersAssigned: userCounts[role.id] ?? role.usersAssigned ?? 0 };
  };

  const filteredRoles = useMemo(() =>
    roles
      .map(withCount)
      .filter((r) => {
        const matchSearch = r.name.toLowerCase().includes(search.toLowerCase());
        const matchType   = filterType === "All" || r.type === filterType;
        return matchSearch && matchType;
      }),
  [roles, search, filterType, userCounts]);

  const selected = withCount(getRoleById(selectedId));

  const handleToggle = async (id) => {
    const role = withCount(getRoleById(id));
    if (role?.status === "Active" && role.usersAssigned > 0 &&
      !window.confirm(`${role.name} has ${role.usersAssigned} user(s) assigned. Deactivating will restrict their access. Continue?`))
      return;
    const r = await toggleRoleStatus(id);
    if (r?.error) showToast(r.error, "error");
    else showToast("Role status updated.");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this custom role? This cannot be undone.")) return;
    const r = await deleteRole(id);
    if (r?.error) showToast(r.error, "error");
    else { showToast("Role deleted."); if (selectedId === id) setSelectedId(roles[0]?.id ?? null); }
  };

  const handleDuplicate = async (id) => {
    const r = await duplicateRole(id);
    if (r?.error) { showToast(r.error, "error"); return; }
    showToast(`Duplicated as "${r.role?.name}".`);
    setSelectedId(r.role?.id);
  };

  const handleReset = async () => {
    if (!window.confirm("Reset to default permissions? Custom changes will be overwritten.")) return;
    const r = await resetPermissions(selectedId);
    if (r?.error) showToast(r.error, "error");
    else showToast("Permissions reset to defaults.");
  };

  return (
    <div className="space-y-6 relative">
      {toast && (
        <div className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-md shadow-lg text-sm font-semibold text-white ${toast.type === "error" ? "bg-red-600" : "bg-gray-900"}`}>
          {toast.msg}
        </div>
      )}

      {showCreate && (
        <CreateRoleModal
          onClose={() => setShowCreate(false)}
          onCreate={async (d) => {
            const r = await createRole(d);
            if (r?.success) { showToast(`Role "${r.role?.name}" created.`); setSelectedId(r.role?.id); }
            return r;
          }}
        />
      )}

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Administration</p>
          <h1 className="text-xl font-bold text-gray-900">Roles & Permissions</h1>
          <p className="text-sm text-gray-500 mt-0.5">Define and manage role-based access across the platform.</p>
        </div>
        <button
          onClick={() => setShowCreate(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#1a5c2a] text-white text-sm font-semibold rounded-lg hover:bg-[#134520] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Create Custom Role
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Role list */}
        <div className="lg:col-span-1 space-y-3">
          <input
            type="text"
            placeholder="Search roles…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-[#1a5c2a]"
          />
          <div className="flex gap-2">
            {["All", "System", "Custom"].map((t) => (
              <button key={t} onClick={() => setFilterType(t)}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors ${filterType === t ? "bg-[#1a5c2a] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                {t}
              </button>
            ))}
          </div>

          <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
            {rolesLoading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-4 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" /><div className="h-3 bg-gray-100 rounded w-3/4" />
                </div>
              ))
            ) : filteredRoles.length === 0 ? (
              <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                <p className="text-sm text-gray-500">No roles found.</p>
                <p className="text-xs text-gray-400 mt-1">Connect a backend to load roles.</p>
              </div>
            ) : (
              filteredRoles.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setSelectedId(r.id)}
                  className={`w-full text-left bg-white rounded-xl border p-4 transition-all ${selectedId === r.id ? "border-[#1a5c2a] shadow-sm" : "border-gray-200 hover:border-gray-300"}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-bold text-gray-900">{r.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{r.platform}</p>
                    </div>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${r.status === "Active" ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                      {r.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                    <span>{r.type}</span>
                    <span>·</span>
                    <span>{r.usersAssigned ?? 0} users</span>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Role detail */}
        <div className="lg:col-span-2">
          {!selected ? (
            <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
              <p className="text-sm text-gray-500">{rolesLoading ? "Loading roles…" : "Select a role to view its permissions."}</p>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-100 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-base font-bold text-gray-900">{selected.name}</h2>
                  <p className="text-sm text-gray-500 mt-1">{selected.description}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button onClick={() => handleDuplicate(selected.id)} className="px-3 py-1.5 text-xs font-semibold text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">Duplicate</button>
                  <button onClick={() => handleToggle(selected.id)} className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${selected.status === "Active" ? "text-red-600 bg-red-50 hover:bg-red-100" : "text-green-700 bg-green-50 hover:bg-green-100"}`}>
                    {selected.status === "Active" ? "Deactivate" : "Activate"}
                  </button>
                  {selected.type !== "System" && (
                    <button onClick={() => handleDelete(selected.id)} className="px-3 py-1.5 text-xs font-semibold text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">Delete</button>
                  )}
                </div>
              </div>

              {selected.permissions ? (
                <div className="p-6 overflow-x-auto">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Module Permissions</p>
                    <button onClick={handleReset} className="text-xs text-[#1a5c2a] font-semibold hover:underline">Reset to Defaults</button>
                  </div>
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className="text-left py-2 pr-4 text-gray-500 font-semibold w-32">Module</th>
                        {ACTIONS.map((a) => <th key={a} className="text-center py-2 px-2 text-gray-500 font-semibold">{a}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {MODULES.map((mod) => (
                        <tr key={mod} className="border-b border-gray-50 last:border-0">
                          <td className="py-2 pr-4 font-medium text-gray-700">{mod}</td>
                          {ACTIONS.map((action) => {
                            const checked = selected.permissions[mod]?.[action] ?? false;
                            return (
                              <td key={action} className="text-center py-2 px-2">
                                <input
                                  type="checkbox"
                                  checked={checked}
                                  onChange={(e) => {
                                    const newPerms = JSON.parse(JSON.stringify(selected.permissions));
                                    if (!newPerms[mod]) newPerms[mod] = {};
                                    newPerms[mod][action] = e.target.checked;
                                    updateRole(selected.id, { permissions: newPerms });
                                  }}
                                  className="w-4 h-4 accent-[#1a5c2a] cursor-pointer"
                                />
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : selected.mobilePermissions ? (
                <div className="p-6 space-y-3">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Mobile Permissions</p>
                  {Object.entries(selected.mobilePermissions).map(([perm, val]) => (
                    <label key={perm} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={val}
                        onChange={(e) => {
                          const next = { ...selected.mobilePermissions, [perm]: e.target.checked };
                          updateRole(selected.id, { mobilePermissions: next });
                        }}
                        className="w-4 h-4 accent-[#1a5c2a]"
                      />
                      <span className="text-sm text-gray-700">{perm}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center text-sm text-gray-500">No permissions defined for this role.</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
