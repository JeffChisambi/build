module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/.migration-backup/src/auth/mockUsers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ─────────────────────────────────────────────────────────────
// NASFAM GTMS — Mock Users
// Complete user registry for all roles with dummy credentials
// ─────────────────────────────────────────────────────────────
__turbopack_context__.s([
    "SEED_USERS",
    ()=>SEED_USERS,
    "mockUsers",
    ()=>mockUsers
]);
const mockUsers = [
    // ── System Administrator ──────────────────────────────────
    {
        id: "usr-001",
        name: "System Administrator",
        email: "admin@nasfam.org",
        phone: "+265 999 000 001",
        roleId: "role-sysadmin",
        role: "System Administrator",
        assignedIPC: null,
        status: "Active",
        password: "Admin@123",
        createdAt: "2024-01-10"
    },
    // ── Warehouse Officers ────────────────────────────────────
    {
        id: "usr-002",
        name: "Warehouse Officer - Lilongwe",
        email: "warehouse.lilongwe@nasfam.org",
        phone: "+265 999 000 002",
        roleId: "role-warehouse-officer",
        role: "Warehouse Officer",
        assignedIPC: "Lilongwe IPC",
        status: "Active",
        password: "Warehouse@123",
        createdAt: "2024-01-15"
    },
    {
        id: "usr-003",
        name: "Warehouse Officer - Mchinji",
        email: "warehouse.mchinji@nasfam.org",
        phone: "+265 999 000 003",
        roleId: "role-warehouse-officer",
        role: "Warehouse Officer",
        assignedIPC: "Mchinji IPC",
        status: "Active",
        password: "Warehouse@123",
        createdAt: "2024-01-15"
    },
    // ── IPC Managers ──────────────────────────────────────────
    {
        id: "usr-004",
        name: "IPC Manager - Lilongwe",
        email: "ipc.lilongwe@nasfam.org",
        phone: "+265 999 000 004",
        roleId: "role-ipc-manager",
        role: "IPC Manager",
        assignedIPC: "Lilongwe IPC",
        status: "Active",
        password: "IPCManager@123",
        createdAt: "2024-01-20"
    },
    {
        id: "usr-005",
        name: "IPC Manager - Mchinji",
        email: "ipc.mchinji@nasfam.org",
        phone: "+265 999 000 005",
        roleId: "role-ipc-manager",
        role: "IPC Manager",
        assignedIPC: "Mchinji IPC",
        status: "Active",
        password: "IPCManager@123",
        createdAt: "2024-01-20"
    },
    {
        id: "usr-006",
        name: "IPC Manager - Kasungu",
        email: "ipc.kasungu@nasfam.org",
        phone: "+265 999 000 006",
        roleId: "role-ipc-manager",
        role: "IPC Manager",
        assignedIPC: "Kasungu IPC",
        status: "Active",
        password: "IPCManager@123",
        createdAt: "2024-01-20"
    },
    // ── Head Office Manager ───────────────────────────────────
    {
        id: "usr-007",
        name: "Head Office Manager",
        email: "headoffice@nasfam.org",
        phone: "+265 999 000 007",
        roleId: "role-head-office",
        role: "Head Office Manager",
        assignedIPC: null,
        status: "Active",
        password: "HeadOffice@123",
        createdAt: "2024-02-01"
    }
];
const SEED_USERS = [
    // ── System Administrator ──────────────────────────────────
    {
        id: "usr-001",
        name: "System Administrator",
        email: "admin@nasfam.org",
        phone: "+265 999 000 001",
        roleId: "role-sysadmin",
        role: "System Administrator",
        assignedIPC: null,
        status: "Active",
        createdAt: "2024-01-10"
    },
    // ── Warehouse Officers ────────────────────────────────────
    {
        id: "usr-002",
        name: "Warehouse Officer - Lilongwe",
        email: "warehouse.lilongwe@nasfam.org",
        phone: "+265 999 000 002",
        roleId: "role-warehouse-officer",
        role: "Warehouse Officer",
        assignedIPC: "Lilongwe IPC",
        status: "Active",
        createdAt: "2024-01-15"
    },
    {
        id: "usr-003",
        name: "Warehouse Officer - Mchinji",
        email: "warehouse.mchinji@nasfam.org",
        phone: "+265 999 000 003",
        roleId: "role-warehouse-officer",
        role: "Warehouse Officer",
        assignedIPC: "Mchinji IPC",
        status: "Active",
        createdAt: "2024-01-15"
    },
    // ── IPC Managers ──────────────────────────────────────────
    {
        id: "usr-004",
        name: "IPC Manager - Lilongwe",
        email: "ipc.lilongwe@nasfam.org",
        phone: "+265 999 000 004",
        roleId: "role-ipc-manager",
        role: "IPC Manager",
        assignedIPC: "Lilongwe IPC",
        status: "Active",
        createdAt: "2024-01-20"
    },
    {
        id: "usr-005",
        name: "IPC Manager - Mchinji",
        email: "ipc.mchinji@nasfam.org",
        phone: "+265 999 000 005",
        roleId: "role-ipc-manager",
        role: "IPC Manager",
        assignedIPC: "Mchinji IPC",
        status: "Active",
        createdAt: "2024-01-20"
    },
    {
        id: "usr-006",
        name: "IPC Manager - Kasungu",
        email: "ipc.kasungu@nasfam.org",
        phone: "+265 999 000 006",
        roleId: "role-ipc-manager",
        role: "IPC Manager",
        assignedIPC: "Kasungu IPC",
        status: "Active",
        createdAt: "2024-01-20"
    },
    // ── Head Office Manager ───────────────────────────────────
    {
        id: "usr-007",
        name: "Head Office Manager",
        email: "headoffice@nasfam.org",
        phone: "+265 999 000 007",
        roleId: "role-head-office",
        role: "Head Office Manager",
        assignedIPC: null,
        status: "Active",
        createdAt: "2024-02-01"
    }
];
}),
"[project]/.migration-backup/src/auth/authContext.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$mockUsers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.migration-backup/src/auth/mockUsers.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])();
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadUser = ()=>{
            const storedUser = localStorage.getItem("nasfam_user");
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
            setLoading(false);
        };
        loadUser();
    }, []);
    const login = (email, password)=>{
        const foundUser = __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$mockUsers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockUsers"].find((u)=>u.email === email && u.password === password);
        if (foundUser) {
            const { password: _password, ...userWithoutPassword } = foundUser;
            const authenticatedUser = {
                ...userWithoutPassword,
                authenticated: true
            };
            setUser(authenticatedUser);
            localStorage.setItem("nasfam_user", JSON.stringify(authenticatedUser));
            return {
                success: true,
                user: authenticatedUser
            };
        }
        return {
            success: false,
            error: "Invalid email or password"
        };
    };
    const logout = ()=>{
        setUser(null);
        localStorage.removeItem("nasfam_user");
    };
    const updateUser = (updates)=>{
        setUser((currentUser)=>{
            const nextUser = {
                ...currentUser || {},
                ...updates
            };
            localStorage.setItem("nasfam_user", JSON.stringify(nextUser));
            if (updates.password) {
                const persistedUser = __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$mockUsers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockUsers"].find((entry)=>entry.id === nextUser.id || entry.email === nextUser.email);
                if (persistedUser) {
                    persistedUser.password = updates.password;
                }
            }
            return nextUser;
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            login,
            logout,
            updateUser,
            loading
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/auth/authContext.jsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
const useAuth = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
}),
"[project]/.migration-backup/src/auth/mockNotifications.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockNotifications",
    ()=>mockNotifications
]);
const mockNotifications = [
    {
        id: 1,
        title: "New user created",
        message: "System Administrator created a new Warehouse Officer account",
        type: "System",
        read: false,
        createdAt: "5 minutes ago",
        date: "Today"
    },
    {
        id: 2,
        title: "Warehouse updated",
        message: "Warehouse WH001 capacity information was changed",
        type: "System",
        read: false,
        createdAt: "20 minutes ago",
        date: "Today"
    },
    {
        id: 3,
        title: "Purchase transaction completed",
        message: "Purchase order PO-2026-0042 approved and completed",
        type: "Purchasing",
        read: false,
        createdAt: "1 hour ago",
        date: "Today"
    },
    {
        id: 4,
        title: "Stock level alert",
        message: "Inventory at WH003 Mzimba Depot is below minimum threshold",
        type: "Inventory",
        read: false,
        createdAt: "2 hours ago",
        date: "Today"
    },
    {
        id: 5,
        title: "Permission role updated",
        message: "IPC Manager role permissions updated by System Administrator",
        type: "System",
        read: false,
        createdAt: "3 hours ago",
        date: "Today"
    },
    {
        id: 6,
        title: "Batch traceability record created",
        message: "Batch BT-2026-0019 traceability chain of custody registered",
        type: "Traceability",
        read: true,
        createdAt: "Yesterday, 4:15 PM",
        date: "Yesterday"
    },
    {
        id: 7,
        title: "Audit log export completed",
        message: "Quarterly audit log export has been generated and is ready for download",
        type: "System",
        read: true,
        createdAt: "Yesterday, 2:00 PM",
        date: "Yesterday"
    },
    {
        id: 8,
        title: "New farmer registered",
        message: "25 new farmer profiles registered under Farmer Group FG-Mchinji-08",
        type: "Farmers",
        read: true,
        createdAt: "Yesterday, 10:30 AM",
        date: "Yesterday"
    }
];
}),
"[project]/.migration-backup/src/auth/notificationContext.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationProvider",
    ()=>NotificationProvider,
    "useNotifications",
    ()=>useNotifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$mockNotifications$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.migration-backup/src/auth/mockNotifications.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const NotificationContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])();
function NotificationProvider({ children }) {
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$mockNotifications$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockNotifications"]);
    const unreadCount = notifications.filter((n)=>!n.read).length;
    const markAllRead = ()=>{
        setNotifications((prev)=>prev.map((n)=>({
                    ...n,
                    read: true
                })));
    };
    const markRead = (id)=>{
        setNotifications((prev)=>prev.map((n)=>n.id === id ? {
                    ...n,
                    read: true
                } : n));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationContext.Provider, {
        value: {
            notifications,
            unreadCount,
            markAllRead,
            markRead
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/auth/notificationContext.jsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
const useNotifications = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(NotificationContext);
}),
"[project]/.migration-backup/src/auth/mockRoles.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ─────────────────────────────────────────────────────────────
// NASFAM GTMS — Mock Roles & Permissions
// Web Application roles + Mobile Application roles
// ─────────────────────────────────────────────────────────────
__turbopack_context__.s([
    "ACTIONS",
    ()=>ACTIONS,
    "DEFAULT_PERMISSIONS",
    ()=>DEFAULT_PERMISSIONS,
    "MOBILE_PERMISSIONS",
    ()=>MOBILE_PERMISSIONS,
    "MODULES",
    ()=>MODULES,
    "SEED_ROLES",
    ()=>SEED_ROLES
]);
const MODULES = [
    "Dashboard",
    "Farmers",
    "Purchasing",
    "Warehouse",
    "Inventory",
    "Traceability",
    "Customers",
    "Reports",
    "Analytics",
    "Administration"
];
const ACTIONS = [
    "View",
    "Create",
    "Edit",
    "Delete",
    "Approve",
    "Export",
    "Manage"
];
// Permissions: { [Module]: { [Action]: boolean } }
const fullAccess = Object.fromEntries(MODULES.map((m)=>[
        m,
        Object.fromEntries(ACTIONS.map((a)=>[
                a,
                true
            ]))
    ]));
const noAccess = Object.fromEntries(MODULES.map((m)=>[
        m,
        Object.fromEntries(ACTIONS.map((a)=>[
                a,
                false
            ]))
    ]));
function perms(grants) {
    const base = structuredClone(noAccess);
    for (const [mod, actions] of Object.entries(grants)){
        for (const action of actions){
            if (base[mod]) base[mod][action] = true;
        }
    }
    return base;
}
const DEFAULT_PERMISSIONS = {
    "role-sysadmin": fullAccess,
    "role-warehouse-officer": perms({
        Dashboard: [
            "View"
        ],
        Warehouse: [
            "View",
            "Create",
            "Edit",
            "Approve",
            "Export"
        ],
        Inventory: [
            "View",
            "Create",
            "Edit",
            "Export"
        ],
        Traceability: [
            "View",
            "Export"
        ],
        Reports: [
            "View",
            "Export"
        ]
    }),
    "role-ipc-manager": perms({
        Dashboard: [
            "View"
        ],
        Farmers: [
            "View",
            "Export"
        ],
        Purchasing: [
            "View",
            "Export"
        ],
        Warehouse: [
            "View",
            "Export"
        ],
        Inventory: [
            "View",
            "Export"
        ],
        Traceability: [
            "View",
            "Export"
        ],
        Reports: [
            "View",
            "Create",
            "Export"
        ],
        Analytics: [
            "View",
            "Export"
        ]
    }),
    "role-head-office": perms({
        Dashboard: [
            "View"
        ],
        Farmers: [
            "View",
            "Export"
        ],
        Purchasing: [
            "View",
            "Export"
        ],
        Warehouse: [
            "View",
            "Export"
        ],
        Inventory: [
            "View",
            "Export"
        ],
        Traceability: [
            "View",
            "Export"
        ],
        Customers: [
            "View",
            "Export"
        ],
        Reports: [
            "View",
            "Create",
            "Export"
        ],
        Analytics: [
            "View",
            "Export"
        ]
    })
};
const MOBILE_PERMISSIONS = {
    "role-registration-officer": {
        "Register Farmers": true,
        "Edit Farmer Information": true,
        "View Farmer Records": true,
        "Capture GPS Coordinates": true,
        "Synchronize Farmer Data": true
    },
    "role-extension-officer": {
        "View Farmer Records": true,
        "Update Crop Information": true,
        "Record Farm Visits": true,
        "Monitor Production": true,
        "Farmer Advisory Activities": true
    },
    "role-marketing-officer": {
        "Search Farmers": true,
        "Record Commodity Purchases": true,
        "Record Commodity Quantities": true,
        "Record Purchase Prices": true,
        "Recover Seed Loans": true,
        "Generate Purchase Receipts": true
    }
};
const SEED_ROLES = [
    {
        id: "role-sysadmin",
        name: "System Administrator",
        type: "System",
        platform: "Web Application",
        status: "Active",
        description: "Full administrative access. Responsible for user management, system configuration, security, and audit monitoring.",
        responsibilities: [
            "Create and manage user accounts.",
            "Assign user roles and permissions.",
            "Reset user passwords.",
            "Configure system settings.",
            "Monitor audit logs.",
            "Maintain system security."
        ],
        usersAssigned: 1,
        lastModified: "2024-01-10",
        permissions: DEFAULT_PERMISSIONS["role-sysadmin"]
    },
    {
        id: "role-warehouse-officer",
        name: "Warehouse Officer",
        type: "System",
        platform: "Web Application",
        status: "Active",
        description: "Manages day-to-day warehouse operations including receiving commodities, generating GRNs, and maintaining stock records.",
        responsibilities: [
            "Receive commodities into the warehouse.",
            "Generate Goods Received Notes (GRNs).",
            "Update inventory records.",
            "Monitor warehouse stock.",
            "Record stock movement."
        ],
        usersAssigned: 0,
        lastModified: "2024-01-10",
        permissions: DEFAULT_PERMISSIONS["role-warehouse-officer"]
    },
    {
        id: "role-ipc-manager",
        name: "IPC Manager",
        type: "System",
        platform: "Web Application",
        status: "Active",
        description: "Oversees IPC-level operations including farmer registrations, purchasing, and operational reporting.",
        responsibilities: [
            "Monitor farmer registrations.",
            "Review commodity purchases.",
            "Monitor warehouse activities.",
            "Generate operational reports.",
            "Supervise staff activities."
        ],
        usersAssigned: 0,
        lastModified: "2024-01-10",
        permissions: DEFAULT_PERMISSIONS["role-ipc-manager"]
    },
    {
        id: "role-head-office",
        name: "Head Office Manager",
        type: "System",
        platform: "Web Application",
        status: "Active",
        description: "Organization-wide oversight including performance monitoring, IPC comparison, and executive reporting.",
        responsibilities: [
            "Monitor organizational performance.",
            "Compare IPC performance.",
            "Review traceability reports.",
            "Analyze production statistics.",
            "Generate management reports."
        ],
        usersAssigned: 0,
        lastModified: "2024-01-10",
        permissions: DEFAULT_PERMISSIONS["role-head-office"]
    },
    {
        id: "role-registration-officer",
        name: "Registration Officer",
        type: "System",
        platform: "Mobile Application",
        status: "Active",
        description: "Field-based role responsible for registering new farmers, capturing GPS coordinates, and synchronizing farmer data with the central system.",
        responsibilities: [
            "Register new farmers in the field.",
            "Edit and update farmer profile information.",
            "View existing farmer records.",
            "Capture GPS coordinates for farm locations.",
            "Synchronize farmer data with the central system."
        ],
        usersAssigned: 0,
        lastModified: "2024-01-10",
        permissions: null,
        mobilePermissions: MOBILE_PERMISSIONS["role-registration-officer"]
    },
    {
        id: "role-extension-officer",
        name: "Extension Officer",
        type: "System",
        platform: "Mobile Application",
        status: "Active",
        description: "Provides agronomic and advisory support to farmers in the field, monitoring crop production and recording farm visits.",
        responsibilities: [
            "View farmer records and farm details.",
            "Update crop and production information.",
            "Record field visit notes and outcomes.",
            "Monitor crop production progress.",
            "Conduct and document farmer advisory activities."
        ],
        usersAssigned: 0,
        lastModified: "2024-01-10",
        permissions: null,
        mobilePermissions: MOBILE_PERMISSIONS["role-extension-officer"]
    },
    {
        id: "role-marketing-officer",
        name: "Marketing Officer",
        type: "System",
        platform: "Mobile Application",
        status: "Active",
        description: "Commodity Buying Officer responsible for recording farmer purchases, quantities, prices, seed loan recovery, and generating purchase receipts in the field.",
        responsibilities: [
            "Search and identify registered farmers.",
            "Record commodity purchases from farmers.",
            "Record commodity quantities bought.",
            "Record and confirm purchase prices.",
            "Process and recover seed loan repayments.",
            "Generate purchase receipts for farmers."
        ],
        usersAssigned: 0,
        lastModified: "2024-01-10",
        permissions: null,
        mobilePermissions: MOBILE_PERMISSIONS["role-marketing-officer"]
    }
];
}),
"[project]/.migration-backup/src/auth/rbacContext.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RBACProvider",
    ()=>RBACProvider,
    "useRBAC",
    ()=>useRBAC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$mockRoles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.migration-backup/src/auth/mockRoles.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const RBACContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])();
const STORAGE_KEY = "nasfam_roles";
function loadRoles() {
    if ("TURBOPACK compile-time truthy", 1) return __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$mockRoles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEED_ROLES"];
    //TURBOPACK unreachable
    ;
}
function RBACProvider({ children }) {
    const [roles, setRoles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$mockRoles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEED_ROLES"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setRoles(loadRoles());
    }, []);
    const persist = (updated)=>{
        setRoles(updated);
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        } catch  {
        /* ignore */ }
    };
    const getRoles = ()=>roles;
    const getRoleById = (id)=>roles.find((r)=>r.id === id) ?? null;
    const updateRole = (id, updates)=>{
        const updated = roles.map((r)=>r.id === id ? {
                ...r,
                ...updates,
                lastModified: new Date().toISOString().split("T")[0]
            } : r);
        persist(updated);
    };
    const createRole = (newRole)=>{
        const duplicate = roles.some((r)=>r.name.trim().toLowerCase() === newRole.name.trim().toLowerCase());
        if (duplicate) return {
            success: false,
            error: "A role with this name already exists."
        };
        const role = {
            ...newRole,
            id: `role-custom-${Date.now()}`,
            type: "Custom",
            platform: "Web Application",
            usersAssigned: 0,
            lastModified: new Date().toISOString().split("T")[0]
        };
        persist([
            ...roles,
            role
        ]);
        return {
            success: true,
            role
        };
    };
    const deleteRole = (id)=>{
        const role = getRoleById(id);
        if (!role) return {
            success: false,
            error: "Role not found."
        };
        if (role.type === "System") return {
            success: false,
            error: "System roles cannot be deleted."
        };
        persist(roles.filter((r)=>r.id !== id));
        return {
            success: true
        };
    };
    const toggleRoleStatus = (id)=>{
        const role = getRoleById(id);
        if (!role) return;
        if (id === "role-sysadmin" && role.status === "Active") {
            return {
                success: false,
                error: "Cannot deactivate the only System Administrator role."
            };
        }
        updateRole(id, {
            status: role.status === "Active" ? "Inactive" : "Active"
        });
        return {
            success: true
        };
    };
    const duplicateRole = (id)=>{
        const source = getRoleById(id);
        if (!source) return;
        const copy = {
            ...source,
            id: `role-custom-${Date.now()}`,
            name: `${source.name} (Copy)`,
            type: "Custom",
            usersAssigned: 0
        };
        persist([
            ...roles,
            copy
        ]);
        return copy;
    };
    const resetPermissions = (id)=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$mockRoles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_PERMISSIONS"][id]) {
            updateRole(id, {
                permissions: __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$mockRoles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_PERMISSIONS"][id]
            });
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$mockRoles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOBILE_PERMISSIONS"][id]) {
            updateRole(id, {
                mobilePermissions: __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$mockRoles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOBILE_PERMISSIONS"][id]
            });
        }
    };
    const hasPermission = (role, module, action)=>{
        if (!role?.permissions) return false;
        return role.permissions[module]?.[action] ?? false;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RBACContext.Provider, {
        value: {
            roles,
            getRoles,
            getRoleById,
            updateRole,
            createRole,
            deleteRole,
            toggleRoleStatus,
            duplicateRole,
            resetPermissions,
            hasPermission
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/auth/rbacContext.jsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
const useRBAC = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(RBACContext);
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0j8yorn._.js.map