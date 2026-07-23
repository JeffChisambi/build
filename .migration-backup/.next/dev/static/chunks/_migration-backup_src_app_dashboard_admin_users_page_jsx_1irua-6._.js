(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UsersPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$rbacContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.migration-backup/src/auth/rbacContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$mockUsers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.migration-backup/src/auth/mockUsers.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const STORAGE_KEY = "nasfam_users";
const IPC_OPTIONS = [
    "Lilongwe IPC",
    "Mchinji IPC",
    "Kasungu IPC",
    "Mzimba IPC"
];
function loadUsers() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) return JSON.parse(stored);
    } catch  {}
    return __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$mockUsers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEED_USERS"];
}
function StatusBadge({ status }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${status === "Active" ? "bg-gray-100 text-gray-600" : "bg-gray-50 text-gray-400"}`,
        children: status
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = StatusBadge;
// ── Create / Edit Modal ───────────────────────────────────────
function UserModal({ user, roles, onSave, onClose }) {
    _s();
    const editing = !!user?.id;
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: user?.name ?? "",
        email: user?.email ?? "",
        phone: user?.phone ?? "",
        roleId: user?.roleId ?? roles[0]?.id ?? "",
        assignedIPC: user?.assignedIPC ?? "",
        status: user?.status ?? "Active"
    });
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const selectedRole = roles.find((r)=>r.id === form.roleId);
    const needsIPC = [
        "role-warehouse-officer",
        "role-ipc-manager"
    ].includes(form.roleId);
    const handle = (field, val)=>setForm((p)=>({
                ...p,
                [field]: val
            }));
    const handleSubmit = ()=>{
        if (!form.name.trim() || !form.email.trim()) {
            setError("Full Name and Email are required.");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(form.email)) {
            setError("Please enter a valid email address.");
            return;
        }
        onSave({
            ...form,
            role: selectedRole?.name ?? form.roleId
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-md shadow-2xl w-full max-w-lg border border-gray-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-6 py-5 border-b border-gray-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-base font-bold text-gray-900",
                                    children: editing ? "Edit User" : "Create New User"
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-400 mt-0.5",
                                    children: editing ? "Update user details and role assignment." : "Select a predefined role. Permissions are automatically applied."
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-400 hover:text-gray-700 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-5 space-y-4",
                    children: [
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-red-50 border border-red-100 rounded-lg text-sm text-red-700 font-medium",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-gray-600 mb-1.5",
                                            children: "Full Name *"
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: form.name,
                                            onChange: (e)=>handle("name", e.target.value),
                                            placeholder: "e.g. John Banda",
                                            className: "w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg outline-none focus:border-gray-500 transition-colors bg-white"
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-gray-600 mb-1.5",
                                            children: "Email Address *"
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            value: form.email,
                                            onChange: (e)=>handle("email", e.target.value),
                                            placeholder: "name@nasfam.org",
                                            className: "w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg outline-none focus:border-gray-500 transition-colors bg-white"
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-gray-600 mb-1.5",
                                            children: "Phone Number"
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "tel",
                                            value: form.phone,
                                            onChange: (e)=>handle("phone", e.target.value),
                                            placeholder: "+265 999 000 000",
                                            className: "w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg outline-none focus:border-gray-500 transition-colors bg-white"
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-gray-600 mb-1.5",
                                            children: "Assigned Role *"
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: form.roleId,
                                            onChange: (e)=>handle("roleId", e.target.value),
                                            className: "w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg outline-none focus:border-gray-500 transition-colors bg-white",
                                            children: roles.filter((r)=>r.status === "Active").map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: r.id,
                                                    children: r.name
                                                }, r.id, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                    lineNumber: 105,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this),
                                        selectedRole && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-400 mt-1.5 leading-relaxed",
                                            children: [
                                                "Permissions for ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-gray-600",
                                                    children: selectedRole.name
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                    lineNumber: 110,
                                                    columnNumber: 35
                                                }, this),
                                                " will be applied automatically."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-gray-600 mb-1.5",
                                            children: [
                                                "Assigned IPC ",
                                                needsIPC ? "*" : "(Optional)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: form.assignedIPC ?? "",
                                            onChange: (e)=>handle("assignedIPC", e.target.value || null),
                                            className: "w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg outline-none focus:border-gray-500 transition-colors bg-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "— None —"
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                    lineNumber: 121,
                                                    columnNumber: 17
                                                }, this),
                                                IPC_OPTIONS.map((ipc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: ipc,
                                                        children: ipc
                                                    }, ipc, false, {
                                                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                        lineNumber: 122,
                                                        columnNumber: 43
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-semibold text-gray-600 mb-2",
                                    children: "Status"
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4",
                                    children: [
                                        "Active",
                                        "Inactive"
                                    ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-2 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: "modal-status",
                                                    value: s,
                                                    checked: form.status === s,
                                                    onChange: ()=>handle("status", s),
                                                    className: "accent-[#1a5c2a]"
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                    lineNumber: 133,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-700",
                                                    children: s
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                    lineNumber: 135,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, s, true, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3 px-6 py-4 border-t border-gray-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "flex-1 px-4 py-2.5 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSubmit,
                            className: "flex-1 px-4 py-2.5 text-sm font-bold text-white bg-gray-900 rounded-md hover:bg-gray-700 transition-colors",
                            children: editing ? "Save Changes" : "Create User"
                        }, void 0, false, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(UserModal, "XsfrOGB+sutb/rMtqjTiOawz47c=");
_c1 = UserModal;
function UsersPage() {
    _s1();
    const { roles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$rbacContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRBAC"])();
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "UsersPage.useState": ()=>loadUsers()
    }["UsersPage.useState"]);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const showToast = (msg, type = "success")=>{
        setToast({
            msg,
            type
        });
        setTimeout(()=>setToast(null), 3000);
    };
    const persist = (updated)=>{
        setUsers(updated);
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        } catch  {}
    };
    const filtered = users.filter((u)=>`${u.name} ${u.email} ${u.role}`.toLowerCase().includes(search.toLowerCase()));
    const handleSave = (form)=>{
        if (modal.mode === "create") {
            const duplicate = users.find((u)=>u.email.toLowerCase() === form.email.toLowerCase());
            if (duplicate) {
                showToast("A user with this email already exists.", "error");
                return;
            }
            const newUser = {
                ...form,
                id: `usr-${Date.now()}`,
                createdAt: new Date().toISOString().split("T")[0]
            };
            persist([
                ...users,
                newUser
            ]);
            showToast(`User "${form.name}" created successfully.`);
        } else {
            persist(users.map((u)=>u.id === modal.user.id ? {
                    ...u,
                    ...form
                } : u));
            showToast("User updated.");
        }
        setModal(null);
    };
    const toggleStatus = (id)=>{
        if (id === "usr-001") {
            showToast("Cannot deactivate the primary System Administrator.", "error");
            return;
        }
        persist(users.map((u)=>u.id === id ? {
                ...u,
                status: u.status === "Active" ? "Inactive" : "Active"
            } : u));
        showToast("User status updated.");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 relative",
        children: [
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-6 right-6 z-50 px-5 py-3 rounded-md shadow-lg text-sm font-semibold text-white ${toast.type === "error" ? "bg-red-600" : "bg-gray-900"}`,
                children: toast.msg
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                lineNumber: 202,
                columnNumber: 9
            }, this),
            modal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UserModal, {
                user: modal.user,
                roles: roles,
                onSave: handleSave,
                onClose: ()=>setModal(null)
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                lineNumber: 208,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400 uppercase tracking-wider font-medium mb-1",
                                children: "Administration"
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-bold text-gray-900",
                                children: "User Management"
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mt-0.5",
                                children: "Manage system user accounts and role assignments."
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setModal({
                                mode: "create"
                            }),
                        className: "flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-md hover:bg-gray-700 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.5",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M12 4v16m8-8H4"
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this),
                            "Create User"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-5 py-4 border-b border-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-bold text-gray-900",
                                children: "System Users"
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                    lineNumber: 240,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                lineNumber: 239,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Search users...",
                                                value: search,
                                                onChange: (e)=>setSearch(e.target.value),
                                                className: "pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-gray-400 w-52 bg-white"
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                lineNumber: 242,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "p-1.5 text-gray-400 hover:text-gray-600 transition-colors rounded-md hover:bg-gray-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "5",
                                                    r: "1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                    lineNumber: 248,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                    lineNumber: 248,
                                                    columnNumber: 50
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "19",
                                                    r: "1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                    lineNumber: 248,
                                                    columnNumber: 84
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                            lineNumber: 247,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-left text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-b border-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-5 py-3 text-xs font-medium text-gray-400 w-12",
                                                children: "Sl"
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                lineNumber: 258,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 text-xs font-medium text-gray-400",
                                                children: "Name"
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                lineNumber: 259,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 text-xs font-medium text-gray-400",
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                lineNumber: 260,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 text-xs font-medium text-gray-400",
                                                children: "Assigned IPC"
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                lineNumber: 261,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 text-xs font-medium text-gray-400",
                                                children: "Role"
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                lineNumber: 262,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 text-xs font-medium text-gray-400",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                lineNumber: 263,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 text-xs font-medium text-gray-400",
                                                children: "Created"
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                lineNumber: 264,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 text-xs font-medium text-gray-400",
                                                children: "Actions"
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                lineNumber: 265,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                        lineNumber: 257,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                    lineNumber: 256,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 8,
                                            className: "px-5 py-12 text-center text-sm text-gray-400",
                                            children: "No users found."
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                            lineNumber: 271,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                        lineNumber: 270,
                                        columnNumber: 17
                                    }, this) : filtered.map((u, idx)=>{
                                        const isLast = idx === filtered.length - 1;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-gray-50 transition-colors",
                                            style: isLast ? {
                                                backgroundColor: "#eef9f1"
                                            } : undefined,
                                            onMouseEnter: (e)=>{
                                                if (!isLast) e.currentTarget.style.backgroundColor = "#f9fafb";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.backgroundColor = isLast ? "#eef9f1" : "";
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3.5 text-xs font-medium text-gray-500",
                                                    children: String(idx + 1).padStart(2, "0")
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                    lineNumber: 284,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 rounded-full bg-[#1a5c2a]/10 flex items-center justify-center flex-shrink-0 border border-[#1a5c2a]/20",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-bold text-[#1a5c2a]",
                                                                    children: u.name.split(" ").map((n)=>n[0]).slice(0, 2).join("")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                                    lineNumber: 292,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                                lineNumber: 291,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-gray-800 max-w-[110px] truncate",
                                                                title: u.name,
                                                                children: u.name.length > 12 ? u.name.slice(0, 11) + "…" : u.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                                lineNumber: 296,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                        lineNumber: 290,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                    lineNumber: 289,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3.5 text-gray-500 text-xs max-w-[140px] truncate",
                                                    title: u.email,
                                                    children: u.email
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                    lineNumber: 303,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3.5 text-gray-500 text-xs max-w-[120px] truncate",
                                                    title: u.assignedIPC || "",
                                                    children: u.assignedIPC ? u.assignedIPC.length > 13 ? u.assignedIPC.slice(0, 12) + "…" : u.assignedIPC : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-300",
                                                        children: "—"
                                                    }, void 0, false, {
                                                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                        lineNumber: 311,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                    lineNumber: 308,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-semibold text-[#1a5c2a] bg-[#1a5c2a]/10 px-2 py-0.5 rounded-full whitespace-nowrap",
                                                        children: u.role
                                                    }, void 0, false, {
                                                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                        lineNumber: 316,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                    lineNumber: 315,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `inline-flex items-center gap-1.5 text-xs font-semibold ${u.status === "Active" ? "text-emerald-600" : "text-gray-400"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `w-1.5 h-1.5 rounded-full ${u.status === "Active" ? "bg-emerald-500" : "bg-gray-300"}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                                lineNumber: 324,
                                                                columnNumber: 25
                                                            }, this),
                                                            u.status
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                        lineNumber: 323,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                    lineNumber: 322,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3.5 text-gray-400 text-xs whitespace-nowrap",
                                                    children: u.createdAt
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                    lineNumber: 330,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setModal({
                                                                        mode: "edit",
                                                                        user: u
                                                                    }),
                                                                className: "text-xs font-semibold text-gray-700 hover:text-gray-900 hover:underline",
                                                                children: "Edit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                                lineNumber: 335,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>toggleStatus(u.id),
                                                                className: `text-xs font-semibold hover:underline ${u.status === "Active" ? "text-gray-400 hover:text-gray-600" : "text-[#1a5c2a] hover:text-[#134520]"}`,
                                                                children: u.status === "Active" ? "Deactivate" : "Activate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                                lineNumber: 337,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                        lineNumber: 334,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                                    lineNumber: 333,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, u.id, true, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                            lineNumber: 276,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                                    lineNumber: 268,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                            lineNumber: 255,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
                lineNumber: 233,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.migration-backup/src/app/dashboard/admin/users/page.jsx",
        lineNumber: 200,
        columnNumber: 5
    }, this);
}
_s1(UsersPage, "9kQTvCBgD7nUT9fDXScJvEcg2Y8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$rbacContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRBAC"]
    ];
});
_c2 = UsersPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "StatusBadge");
__turbopack_context__.k.register(_c1, "UserModal");
__turbopack_context__.k.register(_c2, "UsersPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_migration-backup_src_app_dashboard_admin_users_page_jsx_1irua-6._.js.map