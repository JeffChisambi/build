// ─────────────────────────────────────────────────────────────
// NASFAM GTMS — Mock Roles & Permissions
// Web Application roles + Mobile Application roles
// ─────────────────────────────────────────────────────────────

export const MODULES = [
  "Dashboard",
  "Farmers",
  "Purchasing",
  "Warehouse",
  "Inventory",
  "Traceability",
  "Customers",
  "Reports",
  "Analytics",
  "Administration",
];

export const ACTIONS = ["View", "Create", "Edit", "Delete", "Approve", "Export", "Manage"];

// Permissions: { [Module]: { [Action]: boolean } }
const fullAccess = Object.fromEntries(
  MODULES.map((m) => [m, Object.fromEntries(ACTIONS.map((a) => [a, true]))])
);

const noAccess = Object.fromEntries(
  MODULES.map((m) => [m, Object.fromEntries(ACTIONS.map((a) => [a, false]))])
);

function perms(grants) {
  const base = structuredClone(noAccess);
  for (const [mod, actions] of Object.entries(grants)) {
    for (const action of actions) {
      if (base[mod]) base[mod][action] = true;
    }
  }
  return base;
}

export const DEFAULT_PERMISSIONS = {
  "role-sysadmin": fullAccess,

  "role-warehouse-officer": perms({
    Dashboard: ["View"],
    Warehouse: ["View", "Create", "Edit", "Approve", "Export"],
    Inventory: ["View", "Create", "Edit", "Export"],
    Traceability: ["View", "Export"],
    Reports: ["View", "Export"],
  }),

  "role-ipc-manager": perms({
    Dashboard: ["View"],
    Farmers: ["View", "Export"],
    Purchasing: ["View", "Export"],
    Warehouse: ["View", "Export"],
    Inventory: ["View", "Export"],
    Traceability: ["View", "Export"],
    Reports: ["View", "Create", "Export"],
    Analytics: ["View", "Export"],
  }),

  "role-head-office": perms({
    Dashboard: ["View"],
    Farmers: ["View", "Export"],
    Purchasing: ["View", "Export"],
    Warehouse: ["View", "Export"],
    Inventory: ["View", "Export"],
    Traceability: ["View", "Export"],
    Customers: ["View", "Export"],
    Reports: ["View", "Create", "Export"],
    Analytics: ["View", "Export"],
  }),
};

// ── Mobile Application — Default Permission Sets ──────────────
// Mobile permissions are flat named capabilities, not module×action.
// Stored as { [permissionName]: boolean } in role.mobilePermissions.
export const MOBILE_PERMISSIONS = {
  "role-registration-officer": {
    "Register Farmers": true,
    "Edit Farmer Information": true,
    "View Farmer Records": true,
    "Capture GPS Coordinates": true,
    "Synchronize Farmer Data": true,
  },

  "role-extension-officer": {
    "View Farmer Records": true,
    "Update Crop Information": true,
    "Record Farm Visits": true,
    "Monitor Production": true,
    "Farmer Advisory Activities": true,
  },

  "role-marketing-officer": {
    "Search Farmers": true,
    "Record Commodity Purchases": true,
    "Record Commodity Quantities": true,
    "Record Purchase Prices": true,
    "Recover Seed Loans": true,
    "Generate Purchase Receipts": true,
  },
};

export const SEED_ROLES = [
  {
    id: "role-sysadmin",
    name: "System Administrator",
    type: "System",
    platform: "Web Application",
    status: "Active",
    description:
      "Full administrative access. Responsible for user management, system configuration, security, and audit monitoring.",
    responsibilities: [
      "Create and manage user accounts.",
      "Assign user roles and permissions.",
      "Reset user passwords.",
      "Configure system settings.",
      "Monitor audit logs.",
      "Maintain system security.",
    ],
    usersAssigned: 1,
    lastModified: "2024-01-10",
    permissions: DEFAULT_PERMISSIONS["role-sysadmin"],
  },
  {
    id: "role-warehouse-officer",
    name: "Warehouse Officer",
    type: "System",
    platform: "Web Application",
    status: "Active",
    description:
      "Manages day-to-day warehouse operations including receiving commodities, generating GRNs, and maintaining stock records.",
    responsibilities: [
      "Receive commodities into the warehouse.",
      "Generate Goods Received Notes (GRNs).",
      "Update inventory records.",
      "Monitor warehouse stock.",
      "Record stock movement.",
    ],
    usersAssigned: 0,
    lastModified: "2024-01-10",
    permissions: DEFAULT_PERMISSIONS["role-warehouse-officer"],
  },
  {
    id: "role-ipc-manager",
    name: "IPC Manager",
    type: "System",
    platform: "Web Application",
    status: "Active",
    description:
      "Oversees IPC-level operations including farmer registrations, purchasing, and operational reporting.",
    responsibilities: [
      "Monitor farmer registrations.",
      "Review commodity purchases.",
      "Monitor warehouse activities.",
      "Generate operational reports.",
      "Supervise staff activities.",
    ],
    usersAssigned: 0,
    lastModified: "2024-01-10",
    permissions: DEFAULT_PERMISSIONS["role-ipc-manager"],
  },
  {
    id: "role-head-office",
    name: "Head Office Manager",
    type: "System",
    platform: "Web Application",
    status: "Active",
    description:
      "Organization-wide oversight including performance monitoring, IPC comparison, and executive reporting.",
    responsibilities: [
      "Monitor organizational performance.",
      "Compare IPC performance.",
      "Review traceability reports.",
      "Analyze production statistics.",
      "Generate management reports.",
    ],
    usersAssigned: 0,
    lastModified: "2024-01-10",
    permissions: DEFAULT_PERMISSIONS["role-head-office"],
  },
  {
    id: "role-registration-officer",
    name: "Registration Officer",
    type: "System",
    platform: "Mobile Application",
    status: "Active",
    description:
      "Field-based role responsible for registering new farmers, capturing GPS coordinates, and synchronizing farmer data with the central system.",
    responsibilities: [
      "Register new farmers in the field.",
      "Edit and update farmer profile information.",
      "View existing farmer records.",
      "Capture GPS coordinates for farm locations.",
      "Synchronize farmer data with the central system.",
    ],
    usersAssigned: 0,
    lastModified: "2024-01-10",
    permissions: null,
    mobilePermissions: MOBILE_PERMISSIONS["role-registration-officer"],
  },
  {
    id: "role-extension-officer",
    name: "Extension Officer",
    type: "System",
    platform: "Mobile Application",
    status: "Active",
    description:
      "Provides agronomic and advisory support to farmers in the field, monitoring crop production and recording farm visits.",
    responsibilities: [
      "View farmer records and farm details.",
      "Update crop and production information.",
      "Record field visit notes and outcomes.",
      "Monitor crop production progress.",
      "Conduct and document farmer advisory activities.",
    ],
    usersAssigned: 0,
    lastModified: "2024-01-10",
    permissions: null,
    mobilePermissions: MOBILE_PERMISSIONS["role-extension-officer"],
  },
  {
    id: "role-marketing-officer",
    name: "Marketing Officer",
    type: "System",
    platform: "Mobile Application",
    status: "Active",
    description:
      "Commodity Buying Officer responsible for recording farmer purchases, quantities, prices, seed loan recovery, and generating purchase receipts in the field.",
    responsibilities: [
      "Search and identify registered farmers.",
      "Record commodity purchases from farmers.",
      "Record commodity quantities bought.",
      "Record and confirm purchase prices.",
      "Process and recover seed loan repayments.",
      "Generate purchase receipts for farmers.",
    ],
    usersAssigned: 0,
    lastModified: "2024-01-10",
    permissions: null,
    mobilePermissions: MOBILE_PERMISSIONS["role-marketing-officer"],
  },
];
