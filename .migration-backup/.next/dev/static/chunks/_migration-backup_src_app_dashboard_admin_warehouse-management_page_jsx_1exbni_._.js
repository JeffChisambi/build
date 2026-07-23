(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WarehouseManagementPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const mockWarehouses = [
    {
        id: 1,
        code: "WH001",
        name: "Lilongwe Main Warehouse",
        location: "Lilongwe",
        capacity: "10,000 bags",
        manager: "James Banda",
        status: "Active"
    },
    {
        id: 2,
        code: "WH002",
        name: "Mchinji Main Warehouse",
        location: "Mchinji",
        capacity: "7,500 bags",
        manager: "Grace Phiri",
        status: "Active"
    },
    {
        id: 3,
        code: "WH003",
        name: "Mzimba Regional Depot",
        location: "Mzimba",
        capacity: "5,000 bags",
        manager: "Peter Mkandawire",
        status: "Active"
    },
    {
        id: 4,
        code: "WH004",
        name: "Zomba Distribution Centre",
        location: "Zomba",
        capacity: "4,000 bags",
        manager: "Agnes Tembo",
        status: "Inactive"
    },
    {
        id: 5,
        code: "WH005",
        name: "Kasungu Satellite Store",
        location: "Kasungu",
        capacity: "2,500 bags",
        manager: "Richard Mwale",
        status: "Active"
    }
];
const emptyForm = {
    code: "",
    name: "",
    location: "",
    capacity: "",
    manager: "",
    status: "Active"
};
function WarehouseManagementPage() {
    _s();
    const [warehouses, setWarehouses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(mockWarehouses);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editId, setEditId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(emptyForm);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const validate = ()=>{
        const e = {};
        if (!form.code.trim()) e.code = "Warehouse code is required";
        if (!form.name.trim()) e.name = "Warehouse name is required";
        if (!form.location.trim()) e.location = "Location is required";
        if (!form.capacity.trim()) e.capacity = "Capacity is required";
        return e;
    };
    const openAdd = ()=>{
        setForm(emptyForm);
        setErrors({});
        setEditId(null);
        setShowForm(true);
    };
    const openEdit = (wh)=>{
        setForm({
            code: wh.code,
            name: wh.name,
            location: wh.location,
            capacity: wh.capacity,
            manager: wh.manager,
            status: wh.status
        });
        setErrors({});
        setEditId(wh.id);
        setShowForm(true);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) {
            setErrors(errs);
            return;
        }
        if (editId) {
            setWarehouses((prev)=>prev.map((wh)=>wh.id === editId ? {
                        ...wh,
                        ...form
                    } : wh));
        } else {
            setWarehouses((prev)=>[
                    ...prev,
                    {
                        id: Date.now(),
                        ...form
                    }
                ]);
        }
        setShowForm(false);
    };
    const toggleStatus = (id)=>{
        setWarehouses((prev)=>prev.map((wh)=>wh.id === id ? {
                    ...wh,
                    status: wh.status === "Active" ? "Inactive" : "Active"
                } : wh));
    };
    const filtered = warehouses.filter((wh)=>`${wh.code} ${wh.name} ${wh.location}`.toLowerCase().includes(search.toLowerCase()));
    const inputClass = (field)=>`w-full px-3 py-2 text-sm border rounded-lg outline-none transition-colors ${errors[field] ? "border-red-400 focus:border-red-400 bg-red-50" : "border-gray-200 focus:border-[#1a5c2a]"}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400 uppercase tracking-wider font-medium mb-1",
                                children: "Administration"
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-bold text-gray-900",
                                children: "Warehouse Management"
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mt-0.5",
                                children: "Create and manage warehouse master records for operational use."
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: openAdd,
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
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            "Add Warehouse"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-6 py-4 border-b border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-base font-bold text-gray-900",
                                    children: editId ? "Edit Warehouse" : "Add New Warehouse"
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowForm(false),
                                    className: "text-gray-400 hover:text-gray-600 transition-colors",
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
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                            lineNumber: 99,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "px-6 py-5 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-gray-600 mb-1",
                                                    children: "Warehouse Code *"
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: inputClass("code"),
                                                    value: form.code,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            code: e.target.value
                                                        }),
                                                    placeholder: "e.g. WH006"
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                                    lineNumber: 107,
                                                    columnNumber: 19
                                                }, this),
                                                errors.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-red-500 mt-1",
                                                    children: errors.code
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                                    lineNumber: 108,
                                                    columnNumber: 35
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-gray-600 mb-1",
                                                    children: "Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                                    lineNumber: 111,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "w-full px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-[#1a5c2a]",
                                                    value: form.status,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            status: e.target.value
                                                        }),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Active"
                                                        }, void 0, false, {
                                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                                            lineNumber: 113,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Inactive"
                                                        }, void 0, false, {
                                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                                            lineNumber: 114,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                                    lineNumber: 112,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-gray-600 mb-1",
                                            children: "Warehouse Name *"
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: inputClass("name"),
                                            value: form.name,
                                            onChange: (e)=>setForm({
                                                    ...form,
                                                    name: e.target.value
                                                }),
                                            placeholder: "e.g. Lilongwe Main Warehouse"
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this),
                                        errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-red-500 mt-1",
                                            children: errors.name
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                            lineNumber: 121,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-gray-600 mb-1",
                                                    children: "Location *"
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: inputClass("location"),
                                                    value: form.location,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            location: e.target.value
                                                        }),
                                                    placeholder: "e.g. Lilongwe"
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                                    lineNumber: 126,
                                                    columnNumber: 19
                                                }, this),
                                                errors.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-red-500 mt-1",
                                                    children: errors.location
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                                    lineNumber: 127,
                                                    columnNumber: 39
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-gray-600 mb-1",
                                                    children: "Capacity *"
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                                    lineNumber: 130,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: inputClass("capacity"),
                                                    value: form.capacity,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            capacity: e.target.value
                                                        }),
                                                    placeholder: "e.g. 10,000 bags"
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                                    lineNumber: 131,
                                                    columnNumber: 19
                                                }, this),
                                                errors.capacity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-red-500 mt-1",
                                                    children: errors.capacity
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                                    lineNumber: 132,
                                                    columnNumber: 39
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-3 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowForm(false),
                                            className: "px-4 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "px-4 py-2 text-sm font-semibold text-white bg-gray-900 rounded-md hover:bg-gray-700 transition-colors",
                                            children: editId ? "Save Changes" : "Add Warehouse"
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                    lineNumber: 94,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                lineNumber: 93,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-4 gap-4",
                children: [
                    {
                        label: "Total Warehouses",
                        value: warehouses.length
                    },
                    {
                        label: "Active",
                        value: warehouses.filter((w)=>w.status === "Active").length
                    },
                    {
                        label: "Inactive",
                        value: warehouses.filter((w)=>w.status === "Inactive").length
                    },
                    {
                        label: "Total Capacity",
                        value: "29,000 bags"
                    }
                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-md border border-gray-200 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 font-medium",
                                children: s.label
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-gray-900 mt-1",
                                children: s.value
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.label, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-md border border-gray-200 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-5 py-4 border-b border-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-bold text-gray-900",
                                children: "Warehouse Registry"
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
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
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search warehouses...",
                                        value: search,
                                        onChange: (e)=>setSearch(e.target.value),
                                        className: "pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-[#1a5c2a] w-56"
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-left text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-gray-50 border-b border-gray-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            "Code",
                                            "Name",
                                            "Location",
                                            "Capacity",
                                            "Manager",
                                            "Status",
                                            "Actions"
                                        ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider",
                                                children: h
                                            }, h, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                                lineNumber: 185,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-gray-50",
                                    children: filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 7,
                                            className: "px-5 py-10 text-center text-gray-400 text-sm",
                                            children: "No warehouses found."
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                            lineNumber: 192,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                        lineNumber: 191,
                                        columnNumber: 17
                                    }, this) : filtered.map((wh)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3.5 font-mono text-xs font-semibold text-gray-700",
                                                    children: wh.code
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                                    lineNumber: 197,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3.5 font-medium text-gray-900",
                                                    children: wh.name
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                                    lineNumber: 198,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3.5 text-gray-600",
                                                    children: wh.location
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                                    lineNumber: 199,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3.5 text-gray-600",
                                                    children: wh.capacity
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                                    lineNumber: 200,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3.5 text-gray-600",
                                                    children: wh.manager || "Unassigned"
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                                    lineNumber: 201,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${wh.status === "Active" ? "bg-gray-100 text-gray-600" : "bg-gray-50 text-gray-400"}`,
                                                        children: wh.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                                        lineNumber: 203,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                                    lineNumber: 202,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>openEdit(wh),
                                                                className: "text-xs font-semibold text-gray-700 hover:underline",
                                                                children: "Edit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                                                lineNumber: 209,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-300",
                                                                children: "|"
                                                            }, void 0, false, {
                                                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                                                lineNumber: 210,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>toggleStatus(wh.id),
                                                                className: `text-xs font-semibold hover:underline ${wh.status === "Active" ? "text-gray-500" : "text-gray-900"}`,
                                                                children: wh.status === "Active" ? "Deactivate" : "Activate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                                                lineNumber: 211,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                                        lineNumber: 208,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                                    lineNumber: 207,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, wh.id, true, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                            lineNumber: 196,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
                lineNumber: 164,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.migration-backup/src/app/dashboard/admin/warehouse-management/page.jsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(WarehouseManagementPage, "l98+fKop4HJysycXM6u7FYpx2/c=");
_c = WarehouseManagementPage;
var _c;
__turbopack_context__.k.register(_c, "WarehouseManagementPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_migration-backup_src_app_dashboard_admin_warehouse-management_page_jsx_1exbni_._.js.map