(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/.migration-backup/src/auth/mockIPCs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ─────────────────────────────────────────────────────────────
// NASFAM GTMS — Mock IPC Data
// Interprofessional Committee (IPC) operations data
// ─────────────────────────────────────────────────────────────
__turbopack_context__.s([
    "mockIPCMetrics",
    ()=>mockIPCMetrics,
    "mockIPCWarehouses",
    ()=>mockIPCWarehouses,
    "mockIPCs",
    ()=>mockIPCs
]);
const mockIPCs = [
    {
        id: "ipc-001",
        name: "Lilongwe IPC",
        district: "Lilongwe",
        region: "Central",
        registrationNumber: "IPC/LLW/001",
        establishmentDate: "2020-03-15",
        status: "Active",
        chairperson: "Alex Banda",
        chairpersonPhone: "+265 999 111 001",
        secretaryName: "Elizabeth Mwale",
        secretaryPhone: "+265 999 111 002",
        address: "Plot 234, Lilongwe City Center",
        totalFarmers: 450,
        totalWarehouses: 2,
        warehouseCapacity: "5000 MT",
        lastActivityDate: "2024-07-13",
        contactEmail: "lilongwe@nasfam.org"
    },
    {
        id: "ipc-002",
        name: "Mchinji IPC",
        district: "Mchinji",
        region: "Central",
        registrationNumber: "IPC/MCH/002",
        establishmentDate: "2019-06-20",
        status: "Active",
        chairperson: "Peter Zulu",
        chairpersonPhone: "+265 999 111 003",
        secretaryName: "Grace Nkomo",
        secretaryPhone: "+265 999 111 004",
        address: "Plot 567, Mchinji Market",
        totalFarmers: 320,
        totalWarehouses: 1,
        warehouseCapacity: "3000 MT",
        lastActivityDate: "2024-07-12",
        contactEmail: "mchinji@nasfam.org"
    },
    {
        id: "ipc-003",
        name: "Kasungu IPC",
        district: "Kasungu",
        region: "Central",
        registrationNumber: "IPC/KAS/003",
        establishmentDate: "2021-01-10",
        status: "Active",
        chairperson: "James Nkhata",
        chairpersonPhone: "+265 999 111 005",
        secretaryName: "Rebecca Lungu",
        secretaryPhone: "+265 999 111 006",
        address: "Plot 890, Kasungu Town",
        totalFarmers: 280,
        totalWarehouses: 1,
        warehouseCapacity: "2500 MT",
        lastActivityDate: "2024-07-13",
        contactEmail: "kasungu@nasfam.org"
    },
    {
        id: "ipc-004",
        name: "Mzimba IPC",
        district: "Mzimba",
        region: "Northern",
        registrationNumber: "IPC/MZB/004",
        establishmentDate: "2020-09-05",
        status: "Active",
        chairperson: "Thomas Kumwenda",
        chairpersonPhone: "+265 999 111 007",
        secretaryName: "Catherine Njolwa",
        secretaryPhone: "+265 999 111 008",
        address: "Plot 123, Mzimba Trading Centre",
        totalFarmers: 390,
        totalWarehouses: 2,
        warehouseCapacity: "4500 MT",
        lastActivityDate: "2024-07-11",
        contactEmail: "mzimba@nasfam.org"
    }
];
const mockIPCWarehouses = [
    {
        id: "wh-001",
        ipcId: "ipc-001",
        ipcName: "Lilongwe IPC",
        name: "Lilongwe Main Warehouse",
        location: "Lilongwe City",
        capacity: "3000 MT",
        currentStock: "2145 MT",
        capacity_utilization: 71.5,
        lastUpdated: "2024-07-13T10:00:00Z",
        status: "Operational",
        commodities: [
            "Maize",
            "Soybean",
            "Groundnuts"
        ]
    },
    {
        id: "wh-002",
        ipcId: "ipc-001",
        ipcName: "Lilongwe IPC",
        name: "Lilongwe Secondary Warehouse",
        location: "Lilongwe Suburbs",
        capacity: "2000 MT",
        currentStock: "890 MT",
        capacity_utilization: 44.5,
        lastUpdated: "2024-07-13T09:30:00Z",
        status: "Operational",
        commodities: [
            "Maize",
            "Sunflower"
        ]
    },
    {
        id: "wh-003",
        ipcId: "ipc-002",
        ipcName: "Mchinji IPC",
        name: "Mchinji Market Warehouse",
        location: "Mchinji Market",
        capacity: "3000 MT",
        currentStock: "1567 MT",
        capacity_utilization: 52.2,
        lastUpdated: "2024-07-13T11:15:00Z",
        status: "Operational",
        commodities: [
            "Maize",
            "Groundnuts"
        ]
    },
    {
        id: "wh-004",
        ipcId: "ipc-003",
        ipcName: "Kasungu IPC",
        name: "Kasungu Central Warehouse",
        location: "Kasungu Town",
        capacity: "2500 MT",
        currentStock: "1234 MT",
        capacity_utilization: 49.4,
        lastUpdated: "2024-07-13T12:45:00Z",
        status: "Operational",
        commodities: [
            "Maize",
            "Soybean"
        ]
    }
];
const mockIPCMetrics = {
    "ipc-001": {
        totalFarmers: 450,
        activeFarmers: 425,
        totalPurchases: 2345,
        totalWeight: "58,250 kg",
        averagePricePerKg: "MWK 3,450",
        monthlyGrowth: 8.5,
        warehouseUtilization: 58.0,
        syncStatus: "Synced"
    },
    "ipc-002": {
        totalFarmers: 320,
        activeFarmers: 298,
        totalPurchases: 1678,
        totalWeight: "42,100 kg",
        averagePricePerKg: "MWK 3,250",
        monthlyGrowth: 5.2,
        warehouseUtilization: 52.2,
        syncStatus: "Synced"
    },
    "ipc-003": {
        totalFarmers: 280,
        activeFarmers: 267,
        totalPurchases: 1234,
        totalWeight: "31,200 kg",
        averagePricePerKg: "MWK 3,100",
        monthlyGrowth: 3.8,
        warehouseUtilization: 49.4,
        syncStatus: "Synced"
    },
    "ipc-004": {
        totalFarmers: 390,
        activeFarmers: 378,
        totalPurchases: 2012,
        totalWeight: "50,450 kg",
        averagePricePerKg: "MWK 3,400",
        monthlyGrowth: 6.1,
        warehouseUtilization: 51.0,
        syncStatus: "Synced"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.migration-backup/src/auth/mockSync.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ─────────────────────────────────────────────────────────────
// NASFAM GTMS — Mock Synchronization Data
// Tracks synchronization status between mobile and web
// ─────────────────────────────────────────────────────────────
__turbopack_context__.s([
    "SYNC_STATUSES",
    ()=>SYNC_STATUSES,
    "mockFarmerSyncStatus",
    ()=>mockFarmerSyncStatus,
    "mockPurchaseSyncStatus",
    ()=>mockPurchaseSyncStatus,
    "mockSyncDevices",
    ()=>mockSyncDevices,
    "mockSyncHistory",
    ()=>mockSyncHistory,
    "mockSyncMetrics",
    ()=>mockSyncMetrics
]);
const SYNC_STATUSES = {
    SYNCED: "Synced",
    PENDING: "Pending",
    FAILED: "Failed",
    IN_PROGRESS: "In Progress"
};
const mockSyncDevices = [
    {
        id: "dev-001",
        officerId: "usr-101",
        officerName: "John Banda",
        deviceModel: "Samsung A12",
        osVersion: "Android 11",
        appVersion: "1.2.5",
        lastSync: "2024-07-13T14:32:00Z",
        recordsUploaded: 45,
        pendingRecords: 3,
        failedRecords: 1,
        syncStatus: "In Progress",
        batteryLevel: 87,
        connectivity: "WiFi"
    },
    {
        id: "dev-002",
        officerId: "usr-102",
        officerName: "Mary Mwale",
        deviceModel: "Tecno Pop 3",
        osVersion: "Android 10",
        appVersion: "1.2.4",
        lastSync: "2024-07-13T12:15:00Z",
        recordsUploaded: 28,
        pendingRecords: 0,
        failedRecords: 0,
        syncStatus: "Synced",
        batteryLevel: 42,
        connectivity: "Cellular"
    },
    {
        id: "dev-003",
        officerId: "usr-103",
        officerName: "Samuel Phiri",
        deviceModel: "Samsung A50",
        osVersion: "Android 12",
        appVersion: "1.2.5",
        lastSync: "2024-07-12T16:45:00Z",
        recordsUploaded: 67,
        pendingRecords: 8,
        failedRecords: 2,
        syncStatus: "Failed",
        batteryLevel: 15,
        connectivity: "No Connection"
    }
];
const mockSyncHistory = [
    {
        id: "sync-001",
        timestamp: "2024-07-13T14:32:00Z",
        officerId: "usr-101",
        officerName: "John Banda",
        action: "SYNC_STARTED",
        recordType: "Farmer Registration",
        recordsCount: 5,
        status: "In Progress",
        device: "Samsung A12"
    },
    {
        id: "sync-002",
        timestamp: "2024-07-13T13:15:00Z",
        officerId: "usr-102",
        officerName: "Mary Mwale",
        action: "SYNC_COMPLETED",
        recordType: "Purchase Records",
        recordsCount: 3,
        status: "Success",
        device: "Tecno Pop 3"
    },
    {
        id: "sync-003",
        timestamp: "2024-07-13T11:45:00Z",
        officerId: "usr-103",
        officerName: "Samuel Phiri",
        action: "SYNC_FAILED",
        recordType: "Farmer Registration",
        recordsCount: 2,
        status: "Failed",
        device: "Samsung A50",
        errorMessage: "Network timeout. Retrying..."
    },
    {
        id: "sync-004",
        timestamp: "2024-07-13T10:20:00Z",
        officerId: "usr-101",
        officerName: "John Banda",
        action: "SYNC_COMPLETED",
        recordType: "Farmer Registration",
        recordsCount: 8,
        status: "Success",
        device: "Samsung A12"
    }
];
const mockFarmerSyncStatus = [
    {
        farmerId: "farmer-001",
        farmerName: "Kamchitanda Phiri",
        registrationDate: "2024-07-10",
        registeredBy: "John Banda",
        syncStatus: "Synced",
        lastSyncTime: "2024-07-10T14:32:00Z",
        dataHash: "abc123def456"
    },
    {
        farmerId: "farmer-002",
        farmerName: "Zione Mtalimanja",
        registrationDate: "2024-07-12",
        registeredBy: "Mary Mwale",
        syncStatus: "Pending",
        lastSyncTime: null,
        dataHash: null
    },
    {
        farmerId: "farmer-003",
        farmerName: "Hastings Nyirongo",
        registrationDate: "2024-07-11",
        registeredBy: "Samuel Phiri",
        syncStatus: "Failed",
        lastSyncTime: "2024-07-11T15:22:00Z",
        dataHash: "xyz789uvw012",
        errorMessage: "Data validation error"
    }
];
const mockPurchaseSyncStatus = [
    {
        purchaseId: "purch-001",
        farmerName: "Kamchitanda Phiri",
        commodity: "Maize",
        weight: "50kg",
        purchaseDate: "2024-07-10",
        recordedBy: "John Banda",
        syncStatus: "Synced",
        lastSyncTime: "2024-07-10T15:45:00Z"
    },
    {
        purchaseId: "purch-002",
        farmerName: "Zione Mtalimanja",
        commodity: "Soybean",
        weight: "30kg",
        purchaseDate: "2024-07-13",
        recordedBy: "Mary Mwale",
        syncStatus: "Pending",
        lastSyncTime: null
    }
];
const mockSyncMetrics = {
    totalSyncedFarmers: 1245,
    pendingSynchronizations: 23,
    failedSynchronizations: 5,
    lastSynchronizationTime: "2024-07-13T14:32:00Z",
    successRate: 98.2,
    devicesOnline: 2,
    devicesOffline: 1,
    totalDataSyncedToday: "2.5 MB",
    averageSyncTime: "2 minutes 15 seconds"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.migration-backup/src/app/dashboard/admin/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$mockUsers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.migration-backup/src/auth/mockUsers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$mockRoles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.migration-backup/src/auth/mockRoles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$mockIPCs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.migration-backup/src/auth/mockIPCs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$mockSync$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.migration-backup/src/auth/mockSync.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const Icons = {
    users: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-6 h-6",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
            lineNumber: 13,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    roles: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-6 h-6",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
            lineNumber: 18,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    warehouse: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-6 h-6",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
            lineNumber: 23,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    ipc: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-6 h-6",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
            lineNumber: 28,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    sync: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-6 h-6",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
            lineNumber: 33,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    audit: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-6 h-6",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
            lineNumber: 38,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    settings: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-6 h-6",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
            lineNumber: 43,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    arrowRight: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-4 h-4",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M9 5l7 7-7 7"
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
            lineNumber: 48,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
        lineNumber: 47,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0))
};
// Admin Module Card
function ModuleCard({ icon, title, description, stats, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "bg-white rounded-md border border-gray-200 p-6 transition-all text-left group",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-500 group-hover:text-gray-700 transition-colors mt-0.5",
                    children: icon
                }, void 0, false, {
                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-bold text-gray-900 text-lg",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600 mt-1",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        stats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 mt-3",
                            children: stats.map((stat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-gray-900",
                                            children: stat.value
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                            lineNumber: 71,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500",
                                            children: stat.label
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                            lineNumber: 72,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                    lineNumber: 70,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-400 group-hover:text-gray-600 transition-colors mt-1",
                    children: Icons.arrowRight
                }, void 0, false, {
                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c = ModuleCard;
// Metric Widget
function MetricWidget({ icon, label, value, trend, trendUp = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-gray-500",
                        children: [
                            icon,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-gray-700",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    trend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: `w-3.5 h-3.5 ${trendUp ? 'text-[#1a5c2a]' : 'text-red-500'}`,
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.5",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: trendUp ? "M7 17L17 7M17 7H7M17 7v10" : "M7 7l10 10M17 17H7M17 17V7"
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-xs font-semibold ${trendUp ? 'text-[#1a5c2a]' : 'text-red-600'}`,
                                children: trend
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xl font-bold text-gray-900",
                children: value
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-gray-400",
                children: "Compared to last month"
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_c1 = MetricWidget;
// Purchasing Revenue Chart
const MONTHLY_DATA = [
    {
        month: "Jan",
        value: 4200000
    },
    {
        month: "Feb",
        value: 2800000
    },
    {
        month: "Mar",
        value: 5600000
    },
    {
        month: "Apr",
        value: 3900000
    },
    {
        month: "May",
        value: 7200000
    },
    {
        month: "Jun",
        value: 6100000
    },
    {
        month: "Jul",
        value: 8400000
    },
    {
        month: "Aug",
        value: 7800000
    },
    {
        month: "Sep",
        value: 5300000
    },
    {
        month: "Oct",
        value: 6700000
    },
    {
        month: "Nov",
        value: 9100000
    },
    {
        month: "Dec",
        value: 8600000
    }
];
function formatMWK(val) {
    if (val >= 1000000) return `MWK ${(val / 1000000).toFixed(1)}M`;
    if (val >= 1000) return `MWK ${(val / 1000).toFixed(0)}K`;
    return `MWK ${val}`;
}
function PurchasingRevenueChart() {
    _s();
    const [hoveredIdx, setHoveredIdx] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [period, setPeriod] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("2024");
    const [dropdownOpen, setDropdownOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const periodOptions = [
        "2024",
        "2023",
        "2022",
        "2021"
    ];
    const maxVal = Math.max(...MONTHLY_DATA.map((d)=>d.value));
    const chartH = 200;
    const barW = 36;
    const gap = 18;
    const paddingL = 64;
    const paddingB = 36;
    const paddingT = 20;
    const totalW = paddingL + MONTHLY_DATA.length * (barW + gap) - gap + 20;
    const yLabels = [
        0,
        25,
        50,
        75,
        100
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl border border-gray-200 p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold text-gray-700",
                                children: "Monthly Purchasing Revenue"
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400 mt-0.5",
                                children: "Total grain purchase spend per month"
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setDropdownOpen(!dropdownOpen),
                                className: "flex items-center gap-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5 bg-white hover:bg-gray-50 focus:outline-none transition-colors",
                                children: [
                                    period,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: `w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`,
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M19 9l-7 7-7-7"
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                            lineNumber: 162,
                                            columnNumber: 164
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute right-0 mt-1 w-24 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden transition-all duration-200 origin-top z-10 ${dropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`,
                                children: periodOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setPeriod(opt);
                                            setDropdownOpen(false);
                                        },
                                        className: `w-full text-left px-4 py-2 text-sm transition-colors ${period === opt ? 'bg-green-50 text-green-700 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`,
                                        children: opt
                                    }, opt, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "100%",
                    viewBox: `0 0 ${totalW - 20} ${chartH + paddingB + paddingT}`,
                    className: "block",
                    children: [
                        yLabels.map((pct)=>{
                            const y = paddingT + chartH - pct / 100 * chartH;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: paddingL,
                                        x2: totalW - 10,
                                        y1: y,
                                        y2: y,
                                        stroke: "#f0f0f0",
                                        strokeWidth: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                        lineNumber: 192,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: paddingL - 8,
                                        y: y + 4,
                                        textAnchor: "end",
                                        fontSize: "11",
                                        fill: "#9ca3af",
                                        children: [
                                            pct,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                        lineNumber: 193,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, pct, true, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                lineNumber: 191,
                                columnNumber: 15
                            }, this);
                        }),
                        MONTHLY_DATA.map((d, i)=>{
                            const barH = d.value / maxVal * chartH;
                            const x = paddingL + i * (barW + gap);
                            const y = paddingT + chartH - barH;
                            const isHovered = hoveredIdx === i;
                            const isHighest = d.value === maxVal;
                            const fill = isHovered || isHighest ? "#1a5c2a" : "#e8f5e9";
                            const patternId = `diag-${i}`;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                onMouseEnter: ()=>setHoveredIdx(i),
                                onMouseLeave: ()=>setHoveredIdx(null),
                                style: {
                                    cursor: "pointer"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                            id: patternId,
                                            patternUnits: "userSpaceOnUse",
                                            width: "8",
                                            height: "8",
                                            patternTransform: "rotate(45)",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "8",
                                                    height: "8",
                                                    fill: "#1a5c2a"
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                                    lineNumber: 218,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "0",
                                                    y1: "0",
                                                    x2: "0",
                                                    y2: "8",
                                                    stroke: "#134520",
                                                    strokeWidth: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                                    lineNumber: 219,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                            lineNumber: 217,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                        lineNumber: 216,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: x,
                                        y: y,
                                        width: barW,
                                        height: barH,
                                        rx: "6",
                                        ry: "6",
                                        fill: isHovered || isHighest ? `url(#${patternId})` : fill
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                        lineNumber: 224,
                                        columnNumber: 17
                                    }, this),
                                    isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: x + barW / 2 - 52,
                                                y: y - 38,
                                                width: 104,
                                                height: 26,
                                                rx: "6",
                                                fill: "white",
                                                stroke: "#e5e7eb",
                                                strokeWidth: "1",
                                                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.08))"
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                                lineNumber: 233,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: x + barW / 2,
                                                y: y - 20,
                                                textAnchor: "middle",
                                                fontSize: "11",
                                                fontWeight: "600",
                                                fill: "#111827",
                                                children: formatMWK(d.value)
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                                lineNumber: 240,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: x + barW / 2,
                                                cy: y,
                                                r: 4,
                                                fill: "white",
                                                stroke: "#1a5c2a",
                                                strokeWidth: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                                lineNumber: 243,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                        lineNumber: 232,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: x + barW / 2,
                                        y: paddingT + chartH + paddingB - 12,
                                        textAnchor: "middle",
                                        fontSize: "12",
                                        fontWeight: isHovered || isHighest ? "700" : "400",
                                        fill: isHovered || isHighest ? "#1a5c2a" : "#9ca3af",
                                        children: d.month
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                        lineNumber: 248,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, d.month, true, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                lineNumber: 211,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                    lineNumber: 182,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                lineNumber: 181,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
        lineNumber: 150,
        columnNumber: 5
    }, this);
}
_s(PurchasingRevenueChart, "GeEhk8fULn7QyduJ0XnfonsMe+U=");
_c2 = PurchasingRevenueChart;
function StatusAlert({ type, title, message, actionText, onAction }) {
    const styles = {
        success: "bg-gray-100 border-gray-200",
        warning: "bg-gray-100 border-gray-200",
        info: "bg-gray-100 border-gray-200"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded-lg border p-4 ${styles[type]}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold text-gray-900",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600 mt-1",
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                            lineNumber: 277,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                    lineNumber: 275,
                    columnNumber: 9
                }, this),
                actionText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onAction,
                    className: "text-sm font-semibold text-gray-700 hover:text-gray-900 bg-white border border-gray-200 px-3 py-1.5 rounded whitespace-nowrap ml-3 transition-colors",
                    children: actionText
                }, void 0, false, {
                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                    lineNumber: 280,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
            lineNumber: 274,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
        lineNumber: 273,
        columnNumber: 5
    }, this);
}
_c3 = StatusAlert;
function AdminDashboardPage() {
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const activeUsers = __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$mockUsers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockUsers"].filter((u)=>u.status === "Active").length;
    const totalUsers = __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$mockUsers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockUsers"].length;
    const totalRoles = __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$mockRoles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEED_ROLES"].length;
    const totalIPCs = __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$mockIPCs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockIPCs"].length;
    const devicesSynced = __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$mockSync$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockSyncDevices"].filter((d)=>d.syncStatus === "Synced").length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 space-y-8 max-w-[1400px] mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricWidget, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5",
                            viewBox: "0 0 267 186",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M118.439 107.25C119.517 107.196 120.674 107.171 121.767 107.195C135.872 107.505 150.342 106.235 164.347 108.003C165.522 108.139 167.017 109.436 168.047 109.713C172.531 110.916 176.557 112.422 180.668 114.604C181.893 115.254 182.896 116.55 184.096 117.353C190.35 121.538 195.527 127.647 199.856 133.745C202.146 137.204 205.27 145.928 206.671 149.899C207.988 153.639 208.696 163.149 207.212 167.09C206.658 168.559 204.82 171.86 203.937 173.526C196.005 178.454 194.695 177.249 185.818 177.306L158.795 177.257C151.449 177.158 144.048 177.343 136.701 177.291C126.197 177.215 115.799 177.138 105.295 177.223L88.3703 177.303C85.2768 177.314 81.6707 177.453 78.6504 177.083C76.911 176.684 74.2583 174.739 73.0206 173.566C66.2232 167.126 68.5184 154.423 71.1537 146.51C71.7055 144.853 72.0759 143.028 72.7779 141.414C73.4218 139.934 74.3335 138.507 75.029 137.041C76.04 135.014 77.4174 132.325 78.739 130.513C80.4655 128.354 82.4623 126.4 84.3086 124.343C84.8806 123.705 85.5122 123.068 86.1221 122.472C87.0383 121.577 88.2769 120.902 89.2011 120.057C93.205 116.397 97.5864 113.381 102.596 111.276C103.916 110.721 106.177 110.709 107.57 110.173C108.585 109.781 109.828 109.207 110.831 108.749C113.52 107.52 115.527 107.349 118.439 107.25ZM149.536 163.538L181.704 163.513C185.117 163.514 188.537 163.569 191.947 163.403C192.614 163.37 193.253 163.309 193.919 163.378C194.653 149.898 186.134 134.361 174.402 127.674C173.335 127.043 171.96 125.624 170.86 125.167C166.502 123.356 163.19 121.043 158.313 121.091C148.135 121.191 137.639 120.602 127.482 120.878C123.691 121.179 120.082 120.986 116.368 121.454C114.714 121.662 113.606 122.565 112.083 123.118C110.591 123.66 107.576 124.325 106.227 124.982C102.465 126.816 96.2034 131.296 93.6317 134.43C90.9948 137.644 88.148 142.025 86.066 145.62C85.6473 146.343 85.1178 148.313 84.7885 149.162C83.025 153.711 82.5736 157.305 82.7028 162.173C82.7115 162.497 82.7945 162.797 82.9521 163.084C85.409 164.068 106.819 163.505 111.141 163.505L149.536 163.538Z",
                                    fill: "currentColor"
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M133.203 8.33064C156.342 5.5567 177.344 22.0746 180.101 45.2149C182.858 68.3552 166.325 89.3458 143.183 92.0864C120.065 94.8241 99.1001 78.3115 96.3455 55.1948C93.5911 32.0781 110.089 11.1017 133.203 8.33064ZM118.136 70.4442C125.118 77.281 135.107 80.0806 144.626 77.869C160.087 74.2769 169.668 58.786 165.977 43.3487C162.287 27.9116 146.735 18.4291 131.322 22.2179C121.24 24.6961 113.292 32.4412 110.554 42.4554C107.816 52.4696 110.717 63.1813 118.136 70.4442Z",
                                    fill: "currentColor"
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M222.083 107.068C224.748 107.053 230.035 106.947 232.307 108.191C235.01 110.029 239.535 110.966 242.107 112.287C245.954 114.262 252.913 120.742 255.49 124.142C258.308 127.862 261.781 136.245 262.77 140.644C263.59 144.281 264.24 152.09 262.176 155.286C260.242 158.642 258.235 159.787 255.924 162.258C255.866 162.303 255.81 162.347 255.748 162.387C254.204 163.415 238.63 163.622 236.167 163.127C236.06 159.681 236.206 156.158 235.735 152.778C235.297 149.651 234.415 146.744 233.564 143.715C232.909 141.874 232.673 138.987 231.866 137.285C229.494 132.277 227.828 126.742 225.481 121.781C224.112 118.887 221.425 115.773 219.762 112.948C219.466 112.444 218.216 110.32 217.958 110.009C217.393 109.857 217.14 109.85 216.574 109.813C216.243 109.506 216.114 109.401 216.12 108.875C216.14 106.646 220.488 107.094 222.083 107.068Z",
                                    fill: "currentColor"
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                    lineNumber: 311,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M53.2963 107.061C56.0885 106.945 57.7921 107.166 60.5027 107.69C59.4287 110.547 57.9154 111.432 56.259 113.812C55.0399 116.286 52.2277 118.916 51.0665 121.183C49.6052 124.037 48.224 128.189 46.7167 131.145C46.1882 132.182 44.8615 134.547 44.6567 135.487C43.3162 141.445 41.3147 146.999 40.4044 153.067C40.18 154.562 40.4939 163.16 39.3866 163.243C36.3474 163.472 23.6193 163.511 21.3626 162.393C16.4876 158.729 13.1765 156.468 12.6522 149.741C12.0956 142.598 13.6193 138.414 16.5379 132.077C17.0811 130.898 18.2664 129.548 18.7958 128.374C22.0814 121.093 29.0422 114.889 36.1471 111.428C38.5912 110.266 41.7641 109.601 44.3678 108.222C45.915 107.402 51.3627 107.177 53.2963 107.061Z",
                                    fill: "currentColor"
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                    lineNumber: 312,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M207.254 35.9707C208.901 35.7391 216.216 36.8186 217.785 37.5397C218.252 37.754 224.125 40.4479 224.499 40.7244C228.651 43.7947 231.779 48.3315 233.895 52.9771C236 57.5959 235.993 61.4221 235.802 66.3461C235.695 69.1001 235.904 70.5302 234.872 73.1207C232.778 78.3709 230.402 82.7411 225.801 86.2352C224.141 87.4956 224.066 87.8705 221.976 88.811C220.019 89.5508 216.884 91.4661 215.415 91.8766C210.487 92.9702 203.808 92.9522 199.033 91.2492C196.061 90.1893 199.757 84.2239 200.341 82.8092C202.348 77.9322 204.2 73.1596 205.394 68.0099C205.98 65.4716 207.03 62.9635 207.31 60.3227C207.988 54.6097 207.917 48.7029 207.735 42.9555C207.664 40.7594 205.98 38.033 207.254 35.9707Z",
                                    fill: "currentColor"
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                    lineNumber: 313,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M68.2082 36.0406L68.7637 36.0159C69.122 36.211 69.3807 36.4059 69.2904 36.8638C68.2327 42.2325 68.4278 47.8114 68.5003 53.2774C68.6645 63.465 71.4696 73.4182 75.7385 82.6239C76.6065 84.4956 80.9952 90.2832 76.8608 91.5712C72.3543 92.9749 66.1735 93.0592 61.611 92.1336C60.1866 91.8446 57.0486 89.966 55.452 89.2858C50.8083 87.4418 49.9481 86.1879 46.9176 82.4494C43.162 77.8165 41.4037 74.3855 40.841 68.1701C40.0572 59.5122 41.4542 52.7277 47.0741 45.8604C53.166 38.4164 58.9921 36.9352 68.2082 36.0406Z",
                                    fill: "currentColor"
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                    lineNumber: 314,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                            lineNumber: 308,
                            columnNumber: 17
                        }, this),
                        label: "Total Farmers",
                        value: 248,
                        trend: "12.23%",
                        trendUp: true
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricWidget, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 2C9.24 2 7 4.24 7 7v1H4c-.55 0-1 .45-1 1v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-.55-.45-1-1-1h-3V7c0-2.76-2.24-5-5-5M9 7c0-1.65 1.35-3 3-3s3 1.35 3 3v1H9zm10 3v10H5V10z"
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                lineNumber: 322,
                                columnNumber: 117
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                            lineNumber: 322,
                            columnNumber: 17
                        }, this),
                        label: "Total Bags",
                        value: "12,450",
                        trend: "8.47%",
                        trendUp: true
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricWidget, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 3C6.49 3 2 7.49 2 13v6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-6c0-5.51-4.49-10-10-10m4 12H8v-2h8zm-8 4v-2h8v2zm12 0h-2v-6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v6H4v-6c0-4.41 3.59-8 8-8s8 3.59 8 8z"
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                lineNumber: 329,
                                columnNumber: 117
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                            lineNumber: 329,
                            columnNumber: 17
                        }, this),
                        label: "Total Warehouses",
                        value: 42,
                        trend: "5.12%",
                        trendUp: true
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                lineNumber: 306,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PurchasingRevenueChart, {}, void 0, false, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                            lineNumber: 343,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                        lineNumber: 342,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl border border-gray-200 p-5 flex flex-col h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-semibold text-gray-700",
                                            children: "Recent Audit Logs"
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                            lineNumber: 350,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>router.push("/dashboard/admin/audit-logs"),
                                            className: "text-xs text-green-700 font-semibold hover:underline",
                                            children: "View All"
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                            lineNumber: 351,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                    lineNumber: 349,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3 flex-1",
                                    children: [
                                        {
                                            id: 1,
                                            action: "USER_LOGIN",
                                            user: "admin@nasfam.org",
                                            time: "10 mins ago",
                                            color: "bg-gray-300"
                                        },
                                        {
                                            id: 2,
                                            action: "ROLE_UPDATED",
                                            user: "admin@nasfam.org",
                                            time: "1 hour ago",
                                            color: "bg-gray-300"
                                        },
                                        {
                                            id: 3,
                                            action: "SYNC_COMPLETED",
                                            user: "ipc.lilongwe@nasfam.org",
                                            time: "2 hours ago",
                                            color: "bg-gray-300"
                                        },
                                        {
                                            id: 4,
                                            action: "USER_CREATED",
                                            user: "admin@nasfam.org",
                                            time: "5 hours ago",
                                            color: "bg-gray-300"
                                        },
                                        {
                                            id: 5,
                                            action: "DATA_EXPORT",
                                            user: "admin@nasfam.org",
                                            time: "1 day ago",
                                            color: "bg-gray-300"
                                        }
                                    ].map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3 border-b border-gray-50 pb-3 last:border-0 last:pb-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${log.color}`
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                                    lineNumber: 362,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-semibold text-gray-800",
                                                            children: log.action.replace(/_/g, ' ')
                                                        }, void 0, false, {
                                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                                            lineNumber: 364,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-gray-500 mt-0.5",
                                                            children: log.user
                                                        }, void 0, false, {
                                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                                            lineNumber: 365,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                                    lineNumber: 363,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-gray-400 font-medium whitespace-nowrap",
                                                    children: log.time
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                                    lineNumber: 367,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, log.id, true, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                            lineNumber: 361,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                                    lineNumber: 353,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                            lineNumber: 348,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                        lineNumber: 347,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
                lineNumber: 340,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.migration-backup/src/app/dashboard/admin/page.jsx",
        lineNumber: 303,
        columnNumber: 5
    }, this);
}
_s1(AdminDashboardPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c4 = AdminDashboardPage;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "ModuleCard");
__turbopack_context__.k.register(_c1, "MetricWidget");
__turbopack_context__.k.register(_c2, "PurchasingRevenueChart");
__turbopack_context__.k.register(_c3, "StatusAlert");
__turbopack_context__.k.register(_c4, "AdminDashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_migration-backup_src_1x2zimr._.js.map