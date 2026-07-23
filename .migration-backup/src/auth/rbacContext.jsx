"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { SEED_ROLES, DEFAULT_PERMISSIONS, MOBILE_PERMISSIONS } from "./mockRoles";

const RBACContext = createContext();

const STORAGE_KEY = "nasfam_roles";

function loadRoles() {
  if (typeof window === "undefined") return SEED_ROLES;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    /* ignore */
  }
  return SEED_ROLES;
}

export function RBACProvider({ children }) {
  const [roles, setRoles] = useState(SEED_ROLES);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRoles(loadRoles());
  }, []);

  const persist = (updated) => {
    setRoles(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      /* ignore */
    }
  };

  const getRoles = () => roles;

  const getRoleById = (id) => roles.find((r) => r.id === id) ?? null;

  const updateRole = (id, updates) => {
    const updated = roles.map((r) =>
      r.id === id ? { ...r, ...updates, lastModified: new Date().toISOString().split("T")[0] } : r
    );
    persist(updated);
  };

  const createRole = (newRole) => {
    const duplicate = roles.some(
      (r) => r.name.trim().toLowerCase() === newRole.name.trim().toLowerCase()
    );
    if (duplicate) return { success: false, error: "A role with this name already exists." };
    const role = {
      ...newRole,
      id: `role-custom-${Date.now()}`,
      type: "Custom",
      platform: "Web Application",
      usersAssigned: 0,
      lastModified: new Date().toISOString().split("T")[0],
    };
    persist([...roles, role]);
    return { success: true, role };
  };

  const deleteRole = (id) => {
    const role = getRoleById(id);
    if (!role) return { success: false, error: "Role not found." };
    if (role.type === "System") return { success: false, error: "System roles cannot be deleted." };
    persist(roles.filter((r) => r.id !== id));
    return { success: true };
  };

  const toggleRoleStatus = (id) => {
    const role = getRoleById(id);
    if (!role) return;
    if (id === "role-sysadmin" && role.status === "Active") {
      return { success: false, error: "Cannot deactivate the only System Administrator role." };
    }
    updateRole(id, { status: role.status === "Active" ? "Inactive" : "Active" });
    return { success: true };
  };

  const duplicateRole = (id) => {
    const source = getRoleById(id);
    if (!source) return;
    const copy = {
      ...source,
      id: `role-custom-${Date.now()}`,
      name: `${source.name} (Copy)`,
      type: "Custom",
      usersAssigned: 0,
    };
    persist([...roles, copy]);
    return copy;
  };

  const resetPermissions = (id) => {
    if (DEFAULT_PERMISSIONS[id]) {
      updateRole(id, { permissions: DEFAULT_PERMISSIONS[id] });
    } else if (MOBILE_PERMISSIONS[id]) {
      updateRole(id, { mobilePermissions: MOBILE_PERMISSIONS[id] });
    }
  };

  const hasPermission = (role, module, action) => {
    if (!role?.permissions) return false;
    return role.permissions[module]?.[action] ?? false;
  };

  return (
    <RBACContext.Provider
      value={{
        roles,
        getRoles,
        getRoleById,
        updateRole,
        createRole,
        deleteRole,
        toggleRoleStatus,
        duplicateRole,
        resetPermissions,
        hasPermission,
      }}
    >
      {children}
    </RBACContext.Provider>
  );
}

export const useRBAC = () => useContext(RBACContext);
