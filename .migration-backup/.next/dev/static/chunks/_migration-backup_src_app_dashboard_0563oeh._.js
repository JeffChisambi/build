(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BarChart",
    ()=>BarChart,
    "HorizontalBarChart",
    ()=>HorizontalBarChart,
    "ModuleActionCard",
    ()=>ModuleActionCard,
    "ProgressChart",
    ()=>ProgressChart,
    "StatCard",
    ()=>StatCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
function BarChart({ data, height = "h-56" }) {
    const max = Math.max(...data.map((d)=>d.value), 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-end gap-2 sm:gap-4 ${height} w-full pt-6`,
        children: data.map((item, i)=>{
            const percentage = item.value / max * 100;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center flex-1 group h-full justify-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full flex justify-center items-end h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-full max-w-[48px] rounded-t-sm transition-all duration-500 ${item.color || "bg-[#1a5c2e]"} group-hover:opacity-80 relative`,
                            style: {
                                height: `${percentage}%`,
                                minHeight: "4px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-white border border-gray-100/50 text-gray-900 text-xs px-2 py-1 rounded shadow-sm pointer-events-none transition-opacity whitespace-nowrap z-10",
                                children: item.tooltip || item.value
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                                lineNumber: 21,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                            lineNumber: 15,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                        lineNumber: 14,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] sm:text-xs text-gray-500 mt-2 truncate w-full text-center font-medium",
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                        lineNumber: 26,
                        columnNumber: 13
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                lineNumber: 13,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = BarChart;
function HorizontalBarChart({ data }) {
    const max = Math.max(...data.map((d)=>d.value), 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: data.map((item, i)=>{
            const percentage = item.value / max * 100;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-end mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-gray-700",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                                lineNumber: 46,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-bold text-gray-900",
                                children: item.displayValue || item.value
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                        lineNumber: 45,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-gray-100 rounded-sm h-2.5 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${item.color || "bg-[#1a5c2e]"} h-full transition-all duration-500`,
                            style: {
                                width: `${percentage}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                            lineNumber: 54,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                lineNumber: 44,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c1 = HorizontalBarChart;
function ProgressChart({ label, value, max, color = "bg-[#1a5c2e]" }) {
    const percentage = max > 0 ? Math.min(value / max * 100, 100) : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-end mb-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-gray-600",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-bold text-gray-900",
                        children: [
                            value,
                            " / ",
                            max
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full bg-gray-100 rounded-sm h-2 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${color} h-full transition-all duration-500`,
                    style: {
                        width: `${percentage}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_c2 = ProgressChart;
function StatCard({ title, value, trend, subtext, icon, trendUp }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col h-full border border-gray-50/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xs font-semibold text-gray-500 tracking-wider uppercase",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 rounded-md bg-[#1a5c2e]/10 flex items-center justify-center text-[#1a5c2e] flex-shrink-0",
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-3xl font-extrabold text-gray-900 tracking-tight leading-none",
                    children: value
                }, void 0, false, {
                    fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mt-auto pt-3 border-t border-gray-50",
                children: [
                    trend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center text-xs font-bold px-2.5 py-1 rounded-md ${trendUp ? "bg-[#1a5c2e]/10 text-[#1a5c2e]" : "bg-red-50 text-red-700"}`,
                        children: [
                            trendUp ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-3 h-3",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "3",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M5 15l7-7 7 7"
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                                    lineNumber: 103,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-3 h-3",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "3",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M19 9l-7 7-7-7"
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                                    lineNumber: 107,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-1",
                                children: trend
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-400 font-medium",
                        children: subtext
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_c3 = StatCard;
function ModuleActionCard({ icon, title, description, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "bg-white rounded-xl p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-left group flex flex-col h-full w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between w-full mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 rounded-lg bg-[#1a5c2e]/8 flex items-center justify-center text-[#1a5c2e] flex-shrink-0 transition-transform group-hover:scale-110 duration-300",
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-300 group-hover:text-[#1a5c2e] transition-colors mt-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-gray-900 text-base group-hover:text-[#1a5c2e] transition-colors leading-tight",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 mt-1.5 leading-relaxed",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_c4 = ModuleActionCard;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "BarChart");
__turbopack_context__.k.register(_c1, "HorizontalBarChart");
__turbopack_context__.k.register(_c2, "ProgressChart");
__turbopack_context__.k.register(_c3, "StatCard");
__turbopack_context__.k.register(_c4, "ModuleActionCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Icons",
    ()=>Icons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Icons = {
    health: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-6 h-6",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
            lineNumber: 3,
            columnNumber: 100
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    data: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
            fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
            lineNumber: 6,
            columnNumber: 100
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    server: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-6 h-6",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
            lineNumber: 9,
            columnNumber: 100
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    farmer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
            fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
            lineNumber: 12,
            columnNumber: 100
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    purchase: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-6 h-6",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
            lineNumber: 15,
            columnNumber: 100
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
        lineNumber: 15,
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
            fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
            lineNumber: 18,
            columnNumber: 100
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    processing: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-6 h-6",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
                lineNumber: 21,
                columnNumber: 100
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
                lineNumber: 21,
                columnNumber: 641
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    customer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-6 h-6",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
            lineNumber: 24,
            columnNumber: 100
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
        lineNumber: 24,
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
            fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
            lineNumber: 27,
            columnNumber: 102
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    alertTriangle: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
            lineNumber: 30,
            columnNumber: 100
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    checkCircle: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
            lineNumber: 33,
            columnNumber: 100
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
        lineNumber: 33,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    infoCircle: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
            lineNumber: 36,
            columnNumber: 100
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    clock: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
            lineNumber: 39,
            columnNumber: 100
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    truck: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-6 h-6",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
            lineNumber: 42,
            columnNumber: 100
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    mapPin: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-6 h-6",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
                lineNumber: 45,
                columnNumber: 100
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
                lineNumber: 45,
                columnNumber: 240
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
        lineNumber: 45,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    activity: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-6 h-6",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
            lineNumber: 48,
            columnNumber: 100
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
        lineNumber: 48,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    clipboard: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-6 h-6",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
            lineNumber: 51,
            columnNumber: 100
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0))
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeadOfficeDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Charts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Icons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function HeadOfficeDashboard({ firstName }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // ── 2. KPI Data (Max 4 for premium spacing) ─────────────────────────
    const kpis = [
        {
            title: "Registered Farmers",
            value: "142,500",
            trend: "+12%",
            trendUp: true,
            subtext: "Nationally registered",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Icons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].farmer
        },
        {
            title: "National Commodity Purchased",
            value: "45,200 t",
            trend: "+18%",
            trendUp: true,
            subtext: "Season to date",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Icons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].purchase
        },
        {
            title: "National Warehouse Stock",
            value: "18,450 t",
            trend: "+4%",
            trendUp: true,
            subtext: "In all warehouses",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Icons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].warehouse
        },
        {
            title: "Traceability Coverage",
            value: "45,200",
            trend: "+18%",
            trendUp: true,
            subtext: "Grain batches tracked",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Icons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].clipboard
        }
    ];
    // ── 3. Chart Data (Max 3, Green/Grey only) ────────────────────────
    const monthlyPurchasesData = [
        {
            label: "Jan",
            value: 1200,
            color: "bg-[#1a5c2e]"
        },
        {
            label: "Feb",
            value: 2400,
            color: "bg-[#1a5c2e]"
        },
        {
            label: "Mar",
            value: 3800,
            color: "bg-[#1a5c2e]"
        },
        {
            label: "Apr",
            value: 5200,
            color: "bg-[#1a5c2e]"
        },
        {
            label: "May",
            value: 8500,
            color: "bg-[#1a5c2e]"
        },
        {
            label: "Jun",
            value: 12400,
            color: "bg-[#1a5c2e]"
        },
        {
            label: "Jul",
            value: 9800,
            color: "bg-[#1a5c2e]"
        }
    ];
    const ipcPerformanceData = [
        {
            label: "Mzuzu Central",
            value: 12400,
            displayValue: "12,400 t",
            color: "bg-[#1a5c2e]"
        },
        {
            label: "Lilongwe South",
            value: 9850,
            displayValue: "9,850 t",
            color: "bg-[#1a5c2e]/[0.85]"
        },
        {
            label: "Blantyre East",
            value: 7200,
            displayValue: "7,200 t",
            color: "bg-[#1a5c2e]/[0.70]"
        },
        {
            label: "Kasungu North",
            value: 6400,
            displayValue: "6,400 t",
            color: "bg-[#1a5c2e]/[0.55]"
        },
        {
            label: "Mchinji West",
            value: 4100,
            displayValue: "4,100 t",
            color: "bg-[#1a5c2e]/[0.40]"
        }
    ];
    const commodityDistributionData = [
        {
            label: "Maize",
            value: 8500,
            displayValue: "8,500 t",
            color: "bg-[#1a5c2e]"
        },
        {
            label: "Groundnuts",
            value: 5200,
            displayValue: "5,200 t",
            color: "bg-[#1a5c2e]/[0.85]"
        },
        {
            label: "Soybeans",
            value: 3100,
            displayValue: "3,100 t",
            color: "bg-[#1a5c2e]/[0.70]"
        },
        {
            label: "Rice",
            value: 1650,
            displayValue: "1,650 t",
            color: "bg-[#1a5c2e]/[0.55]"
        }
    ];
    // ── 4. National Activity Feed ───────────────────────────────────────────
    const activities = [
        {
            action: "Large Procurement",
            detail: "Mzuzu IPC purchased 450t of Maize",
            time: "2 hours ago"
        },
        {
            action: "New IPC Activated",
            detail: "Kasungu South is now online and operational",
            time: "5 hours ago"
        },
        {
            action: "Stock Transfer",
            detail: "800t moved from Mchinji to Lilongwe Central depot",
            time: "1 day ago"
        },
        {
            action: "Delivery Confirmed",
            detail: "Shipment DEL-1240 received and verified",
            time: "1 day ago"
        },
        {
            action: "Sync Completed",
            detail: "All 24 IPCs synchronised successfully",
            time: "2 days ago"
        }
    ];
    // ── Render ───────────────────────────────────────────────────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8 max-w-[1600px] mx-auto animate-in fade-in duration-500 pb-16 p-6 lg:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between bg-white rounded-xl p-8 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold text-[#1a5c2e] uppercase tracking-[0.2em] mb-2",
                                children: "NASFAM GTMS"
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-extrabold text-gray-900 tracking-tight",
                                children: "National Overview"
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mt-1.5",
                                children: new Date().toLocaleDateString("en-GB", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                })
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right hidden sm:block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base font-bold text-gray-900",
                                children: firstName
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mt-0.5",
                                children: "Head Office Manager"
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4",
                        children: "Strategic Overview"
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6",
                        children: kpis.map((kpi, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Charts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatCard"], {
                                ...kpi
                            }, idx, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4",
                        children: "Analytics"
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl p-7 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-bold text-gray-900 mb-1",
                                        children: "National Procurement Trend"
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mb-6",
                                        children: "Total commodity purchases per month (Tonnes)"
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Charts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                        data: monthlyPurchasesData,
                                        height: "h-64"
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl p-7 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-bold text-gray-900 mb-1",
                                        children: "IPC Performance Comparison"
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mb-6",
                                        children: "Total season purchases by top IPCs"
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Charts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HorizontalBarChart"], {
                                        data: ipcPerformanceData
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl p-7 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-bold text-gray-900 mb-1",
                                        children: "Commodity Distribution"
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mb-6",
                                        children: "Breakdown of purchased commodities"
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Charts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HorizontalBarChart"], {
                                        data: commodityDistributionData
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4",
                        children: "Operations Feed"
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl p-7 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-bold text-gray-900",
                                        children: "National Activity"
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push("/dashboard/reports"),
                                        className: "text-xs font-bold text-[#1a5c2e] hover:underline",
                                        children: "View Full Logs →"
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: activities.map((activity, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-5 items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded bg-[#1a5c2e]/10 flex items-center justify-center text-[#1a5c2e] flex-shrink-0 mt-0.5",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Icons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].infoCircle
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-bold text-gray-900",
                                                        children: activity.action
                                                    }, void 0, false, {
                                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                                        lineNumber: 132,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-600 mt-1 leading-relaxed",
                                                        children: activity.detail
                                                    }, void 0, false, {
                                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                                        lineNumber: 133,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-400 mt-1.5",
                                                        children: activity.time
                                                    }, void 0, false, {
                                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                                        lineNumber: 134,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                                lineNumber: 131,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4",
                        children: "Quick Actions"
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Charts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModuleActionCard"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Icons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].document,
                                title: "National Reports",
                                description: "View and generate comprehensive national procurement and traceability reports.",
                                onClick: ()=>router.push("/dashboard/reports")
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Charts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModuleActionCard"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Icons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].clipboard,
                                title: "Traceability Overview",
                                description: "Trace batches from origin IPC to current warehouse destination.",
                                onClick: ()=>router.push("/dashboard/traceability")
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Charts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModuleActionCard"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Icons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].data,
                                title: "Advanced Analytics",
                                description: "Dive deep into performance metrics, yield estimates, and forecasts.",
                                onClick: ()=>router.push("/dashboard/reports/national")
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Charts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModuleActionCard"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Icons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].warehouse,
                                title: "Warehouse Summary",
                                description: "Check live stock levels and capacity across all national warehouses.",
                                onClick: ()=>router.push("/dashboard/reports/warehouse-statistics")
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(HeadOfficeDashboard, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = HeadOfficeDashboard;
var _c;
__turbopack_context__.k.register(_c, "HeadOfficeDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TodayWorkflow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
const CheckIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3.5 h-3.5",
        fill: "currentColor",
        viewBox: "0 0 20 20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
            clipRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
            lineNumber: 7,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
        lineNumber: 6,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = CheckIcon;
const ClockIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-3.5 h-3.5",
        fill: "currentColor",
        viewBox: "0 0 20 20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",
            clipRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
            lineNumber: 17,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
        lineNumber: 16,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = ClockIcon;
const AlertIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-4 h-4 flex-shrink-0",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
            lineNumber: 27,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
        lineNumber: 26,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = AlertIcon;
function TodayWorkflow({ steps, currentStage, completion, nextAction, subtitle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-8 pt-8 pb-6 flex items-center justify-between flex-wrap gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold text-gray-900",
                                children: "Today's Workflow"
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mt-1",
                                children: subtitle || "Operational progress through the NASFAM grain traceability lifecycle"
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-500 font-medium",
                                children: "Current Stage:"
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-bold text-[#1a5c2e] bg-[#e8f1ea] px-3 py-1 rounded-full",
                                children: currentStage
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-8 pb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 mb-10",
                        children: steps.map((step, i)=>{
                            const isDone = step.status === "done";
                            const isActive = step.status === "active";
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isDone ? "bg-[#1a5c2e] text-white" : isActive ? "bg-gray-200 text-gray-800" : "bg-gray-50 text-gray-400"}`,
                                        children: isDone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {}, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
                                            lineNumber: 77,
                                            columnNumber: 29
                                        }, this) : isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClockIcon, {}, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
                                            lineNumber: 77,
                                            columnNumber: 56
                                        }, this) : null
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 flex items-center justify-between min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-sm ${isDone ? "text-gray-900 font-medium" : isActive ? "text-gray-900 font-bold" : "text-gray-400"} truncate`,
                                                children: step.label
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
                                                lineNumber: 82,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-base font-bold tabular-nums ml-4 flex-shrink-0 ${isDone ? "text-gray-900" : isActive ? "text-[#1a5c2e]" : "text-gray-400"}`,
                                                children: step.value
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-6 space-y-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold text-gray-900",
                                        children: "Workflow Completion"
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-bold text-[#1a5c2e]",
                                        children: [
                                            completion,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full bg-gray-100 rounded-full h-2.5 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full bg-[#1a5c2e] rounded-full transition-all duration-700 ease-out",
                                    style: {
                                        width: `${completion}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-4 bg-gray-50 rounded-md px-6 py-5 mt-8 border border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-500 mt-0.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertIcon, {}, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-700 leading-relaxed",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-gray-900",
                                                children: "Next Action Required: "
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
                                                lineNumber: 135,
                                                columnNumber: 15
                                            }, this),
                                            nextAction
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c3 = TodayWorkflow;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CheckIcon");
__turbopack_context__.k.register(_c1, "ClockIcon");
__turbopack_context__.k.register(_c2, "AlertIcon");
__turbopack_context__.k.register(_c3, "TodayWorkflow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IPCManagerDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Charts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Icons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$TodayWorkflow$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.migration-backup/src/app/dashboard/_components/TodayWorkflow.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function IPCManagerDashboard({ firstName }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // ── 2. KPI Data (Max 4 for premium spacing) ─────────────────────────
    const kpis = [
        {
            title: "Registered Farmers",
            value: "4,250",
            trend: "+5%",
            trendUp: true,
            subtext: "Total in IPC",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Icons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].farmer
        },
        {
            title: "Today's Purchases",
            value: "24.5 t",
            trend: "+12%",
            trendUp: true,
            subtext: "Volume today",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Icons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].purchase
        },
        {
            title: "Warehouse Stock",
            value: "850 t",
            trend: "-2%",
            trendUp: false,
            subtext: "Ready for dispatch",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Icons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].warehouse
        },
        {
            title: "Commodity Value Today",
            value: "MK 4.2M",
            trend: "+8%",
            trendUp: true,
            subtext: "Estimated intake value",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Icons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].data
        }
    ];
    // ── 3. Chart Data (Max 2, Green/Grey only) ──────────────────────────
    const weeklyPurchasesData = [
        {
            label: "Mon",
            value: 12,
            color: "bg-[#1a5c2e]"
        },
        {
            label: "Tue",
            value: 18,
            color: "bg-[#1a5c2e]"
        },
        {
            label: "Wed",
            value: 24,
            color: "bg-[#1a5c2e]"
        },
        {
            label: "Thu",
            value: 15,
            color: "bg-[#1a5c2e]"
        },
        {
            label: "Fri",
            value: 28,
            color: "bg-[#1a5c2e]"
        },
        {
            label: "Sat",
            value: 35,
            color: "bg-[#1a5c2e]"
        },
        {
            label: "Sun",
            value: 20,
            color: "bg-[#1a5c2e]"
        }
    ];
    const commodityDistributionData = [
        {
            label: "Maize",
            value: 8500,
            displayValue: "8,500 t",
            color: "bg-[#1a5c2e]"
        },
        {
            label: "Groundnuts",
            value: 5200,
            displayValue: "5,200 t",
            color: "bg-[#1a5c2e]/[0.85]"
        },
        {
            label: "Soybeans",
            value: 3100,
            displayValue: "3,100 t",
            color: "bg-[#1a5c2e]/[0.70]"
        },
        {
            label: "Rice",
            value: 1650,
            displayValue: "1,650 t",
            color: "bg-[#1a5c2e]/[0.55]"
        }
    ];
    // ── Workflow Steps (Integrated into Analytics) ────────────────────────
    const workflowSteps = [
        {
            label: "Farmer Registration",
            value: 22,
            status: "done"
        },
        {
            label: "Farm Registration",
            value: 18,
            status: "done"
        },
        {
            label: "Commodity Purchases",
            value: 36,
            status: "active"
        },
        {
            label: "Warehouse Receipts",
            value: 14,
            status: "done"
        },
        {
            label: "Inventory Updated",
            value: 14,
            status: "done"
        },
        {
            label: "Deliveries Completed",
            value: 9,
            status: "pending"
        },
        {
            label: "Traceability Records",
            value: 9,
            status: "pending"
        },
        {
            label: "Reports Generated",
            value: 3,
            status: "pending"
        }
    ];
    // ── 4. Recent Activity ────────────────────────────────────────────────
    const recentPurchases = [
        {
            id: "RCP-8012",
            farmer: "John Banda",
            commodity: "Maize",
            weight: "2,500 kg",
            time: "10:30 AM"
        },
        {
            id: "RCP-8013",
            farmer: "Mary Phiri",
            commodity: "Soybeans",
            weight: "850 kg",
            time: "11:45 AM"
        },
        {
            id: "RCP-8014",
            farmer: "Chikwawa Coop",
            commodity: "Groundnuts",
            weight: "4,200 kg",
            time: "1:15 PM"
        },
        {
            id: "RCP-8015",
            farmer: "Peter Zulu",
            commodity: "Maize",
            weight: "1,200 kg",
            time: "2:30 PM"
        },
        {
            id: "RCP-8016",
            farmer: "Banda Cooperative",
            commodity: "Rice",
            weight: "3,000 kg",
            time: "3:45 PM"
        }
    ];
    // ── Render ────────────────────────────────────────────────────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8 max-w-[1600px] mx-auto animate-in fade-in duration-500 pb-16 p-6 lg:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between bg-white rounded-xl p-8 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold text-[#1a5c2e] uppercase tracking-[0.2em] mb-2",
                                children: "NASFAM GTMS"
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-extrabold text-gray-900 tracking-tight",
                                children: "Lilongwe Central IPC"
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mt-1.5",
                                children: new Date().toLocaleDateString("en-GB", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                })
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right hidden sm:block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base font-bold text-gray-900",
                                children: firstName
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mt-0.5",
                                children: "IPC Manager"
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4",
                        children: "Operations Overview"
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6",
                        children: kpis.map((kpi, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Charts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatCard"], {
                                ...kpi
                            }, idx, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4",
                        children: "Analytics & Flow"
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$TodayWorkflow$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            steps: workflowSteps,
                            currentStage: "Commodity Purchases",
                            completion: 72,
                            nextAction: "Record 14 pending commodity purchases before close of business today"
                        }, void 0, false, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl p-7 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-bold text-gray-900 mb-1",
                                        children: "Weekly Purchase Trend"
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mb-6",
                                        children: "Daily procurement volume (Tonnes)"
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Charts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                        data: weeklyPurchasesData,
                                        height: "h-64"
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl p-7 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-bold text-gray-900 mb-1",
                                        children: "Commodity Performance"
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mb-6",
                                        children: "Total IPC stock by commodity type"
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Charts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HorizontalBarChart"], {
                                        data: commodityDistributionData
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4",
                        children: "Recent Activity"
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl p-7 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-bold text-gray-900",
                                        children: "Latest IPC Operations"
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push("/dashboard/purchasing"),
                                        className: "text-xs font-bold text-[#1a5c2e] hover:underline",
                                        children: "View Full Logs →"
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: recentPurchases.map((purchase, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-5 items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded bg-[#1a5c2e]/10 flex items-center justify-center text-[#1a5c2e] flex-shrink-0 mt-0.5",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Icons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].purchase
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                                                lineNumber: 137,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-bold text-gray-900",
                                                        children: [
                                                            "Purchase: ",
                                                            purchase.commodity
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                                                        lineNumber: 141,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-600 mt-1 leading-relaxed",
                                                        children: [
                                                            purchase.farmer,
                                                            " supplied ",
                                                            purchase.weight,
                                                            " (",
                                                            purchase.id,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                                                        lineNumber: 142,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-400 mt-1.5",
                                                        children: purchase.time
                                                    }, void 0, false, {
                                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                                                        lineNumber: 145,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4",
                        children: "Quick Actions"
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Charts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModuleActionCard"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Icons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].farmer,
                                title: "Register Farmer",
                                description: "Create a new farmer profile and link their farm data.",
                                onClick: ()=>router.push("/dashboard/farmers/registration")
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Charts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModuleActionCard"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Icons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].purchase,
                                title: "Purchase Commodity",
                                description: "Record a new commodity intake from a registered farmer.",
                                onClick: ()=>router.push("/dashboard/purchasing")
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Charts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModuleActionCard"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Icons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].warehouse,
                                title: "Update Inventory",
                                description: "Manage live stock levels and create tracking batches.",
                                onClick: ()=>router.push("/dashboard/warehouse")
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Charts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModuleActionCard"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Icons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].document,
                                title: "Generate Reports",
                                description: "View procurement, logistics, and traceability reports.",
                                onClick: ()=>router.push("/dashboard/reports")
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
                lineNumber: 154,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(IPCManagerDashboard, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = IPCManagerDashboard;
var _c;
__turbopack_context__.k.register(_c, "IPCManagerDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WarehouseOfficerDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Charts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.migration-backup/src/app/dashboard/_components/Charts.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Icons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.migration-backup/src/app/dashboard/_components/Icons.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function WarehouseOfficerDashboard({ firstName }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const kpis = [
        {
            title: "Current Stock",
            value: "3,450 t",
            trend: "+120t",
            trendUp: true,
            subtext: "Total inventory",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Icons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].warehouse
        },
        {
            title: "Available Capacity",
            value: "1,550 t",
            trend: "-120t",
            trendUp: false,
            subtext: "Remaining space",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Icons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].data
        },
        {
            title: "Pending Receipts",
            value: "4",
            trend: null,
            subtext: "Trucks en route",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Icons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].truck
        },
        {
            title: "Pending Dispatches",
            value: "2",
            trend: null,
            subtext: "Scheduled for today",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Icons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].activity
        }
    ];
    const stockByCommodity = [
        {
            label: "Maize (White)",
            value: 2100,
            displayValue: "2,100 t",
            color: "bg-yellow-500"
        },
        {
            label: "Soybeans",
            value: 850,
            displayValue: "850 t",
            color: "bg-nasfam-green"
        },
        {
            label: "Groundnuts",
            value: 500,
            displayValue: "500 t",
            color: "bg-orange-500"
        }
    ];
    const recentDeliveries = [
        {
            id: "DLV-9921",
            origin: "Kasungu IPC",
            commodity: "Maize",
            weight: "30 t",
            status: "Unloaded",
            time: "1 hour ago"
        },
        {
            id: "DLV-9922",
            origin: "Mchinji IPC",
            commodity: "Soybeans",
            weight: "15 t",
            status: "Unloading",
            time: "2 hours ago"
        },
        {
            id: "DLV-9923",
            origin: "Dowa IPC",
            commodity: "Groundnuts",
            weight: "20 t",
            status: "Quality Check",
            time: "4 hours ago"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8 animate-in fade-in duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-gray-900 tracking-tight",
                                children: "Warehouse Operations"
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mt-1",
                                children: "Lilongwe Central Depot"
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right hidden sm:block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-gray-900",
                                children: firstName
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 mt-0.5",
                                children: "Warehouse Manager"
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6",
                children: kpis.map((kpi, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Charts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatCard"], {
                        ...kpi
                    }, idx, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-1 lg:col-span-2 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl border border-gray-200 p-6 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-bold text-gray-900 mb-2",
                                        children: "Inventory by Commodity"
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500 mb-6",
                                        children: "Current stock breakdown"
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Charts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HorizontalBarChart"], {
                                        data: stockByCommodity
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl border border-gray-200 p-6 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-bold text-gray-900",
                                                children: "Recent Deliveries"
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                                lineNumber: 63,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>router.push("/dashboard/warehouse"),
                                                className: "text-sm font-semibold text-nasfam-green hover:underline",
                                                children: "View Register"
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                                lineNumber: 64,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full text-sm text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "text-xs text-gray-500 uppercase bg-gray-50",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-3 rounded-tl-lg",
                                                                children: "ID"
                                                            }, void 0, false, {
                                                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                                                lineNumber: 72,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-3",
                                                                children: "Origin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                                                lineNumber: 73,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-3",
                                                                children: "Commodity"
                                                            }, void 0, false, {
                                                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                                                lineNumber: 74,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-3",
                                                                children: "Weight"
                                                            }, void 0, false, {
                                                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                                                lineNumber: 75,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-3",
                                                                children: "Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                                                lineNumber: 76,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "px-4 py-3 rounded-tr-lg",
                                                                children: "Time"
                                                            }, void 0, false, {
                                                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                                                lineNumber: 77,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                                        lineNumber: 71,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                                    lineNumber: 70,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: recentDeliveries.map((delivery, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "border-b last:border-0 hover:bg-gray-50 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-4 font-medium text-gray-900",
                                                                    children: delivery.id
                                                                }, void 0, false, {
                                                                    fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                                                    lineNumber: 83,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-4 text-gray-600",
                                                                    children: delivery.origin
                                                                }, void 0, false, {
                                                                    fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                                                    lineNumber: 84,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-4 text-gray-600",
                                                                    children: delivery.commodity
                                                                }, void 0, false, {
                                                                    fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                                                    lineNumber: 85,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-4 font-bold text-gray-900",
                                                                    children: delivery.weight
                                                                }, void 0, false, {
                                                                    fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                                                    lineNumber: 86,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `text-xs font-medium px-2.5 py-0.5 rounded border ${delivery.status === "Unloaded" ? "bg-green-100 text-green-800 border-green-200" : delivery.status === "Unloading" ? "bg-blue-100 text-blue-800 border-blue-200" : "bg-amber-100 text-amber-800 border-amber-200"}`,
                                                                        children: delivery.status
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                                                        lineNumber: 88,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                                                    lineNumber: 87,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-4 py-4 text-xs text-gray-500",
                                                                    children: delivery.time
                                                                }, void 0, false, {
                                                                    fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                                                    lineNumber: 96,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                                            lineNumber: 82,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                                    lineNumber: 80,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl border border-gray-200 p-6 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-bold text-gray-900 mb-4",
                                        children: "Capacity Utilization"
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Charts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProgressChart"], {
                                                label: "Silo A (Maize)",
                                                value: 2100,
                                                max: 2500,
                                                color: "bg-yellow-500"
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Charts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProgressChart"], {
                                                label: "Warehouse 1 (Bags)",
                                                value: 1350,
                                                max: 1500,
                                                color: "bg-nasfam-green"
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Charts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProgressChart"], {
                                                label: "Cold Storage",
                                                value: 0,
                                                max: 500,
                                                color: "bg-blue-400"
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                                lineNumber: 114,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-red-50 rounded-xl border border-red-200 p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-red-500",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$Icons$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].alertTriangle
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-red-900",
                                                children: "Capacity Warning"
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-red-800 mb-4",
                                        children: "Warehouse 1 is at 90% capacity. Approaching maximum limits for bagged commodities. Please prepare for dispatch."
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "text-xs font-bold bg-red-100 text-red-900 px-3 py-1.5 rounded hover:bg-red-200 transition-colors",
                                        children: "Schedule Dispatch"
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(WarehouseOfficerDashboard, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = WarehouseOfficerDashboard;
var _c;
__turbopack_context__.k.register(_c, "WarehouseOfficerDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.migration-backup/src/app/dashboard/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$authContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.migration-backup/src/auth/authContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$HeadOfficeDashboard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.migration-backup/src/app/dashboard/_components/HeadOfficeDashboard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$IPCManagerDashboard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.migration-backup/src/app/dashboard/_components/IPCManagerDashboard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$WarehouseOfficerDashboard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.migration-backup/src/app/dashboard/_components/WarehouseOfficerDashboard.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function DashboardPage() {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$authContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const firstName = user?.name?.split(" ")[0] ?? "System Administrator";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            if (user?.roleId === "role-sysadmin") {
                router.replace("/dashboard/admin");
            }
        }
    }["DashboardPage.useEffect"], [
        user,
        router
    ]);
    // Role-based rendering
    if (user?.roleId === "role-head-office") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$HeadOfficeDashboard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            firstName: firstName
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/app/dashboard/page.jsx",
            lineNumber: 24,
            columnNumber: 12
        }, this);
    }
    if (user?.roleId === "role-ipc-manager") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$IPCManagerDashboard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            firstName: firstName
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/app/dashboard/page.jsx",
            lineNumber: 28,
            columnNumber: 12
        }, this);
    }
    if (user?.roleId === "role-warehouse-officer") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$app$2f$dashboard$2f$_components$2f$WarehouseOfficerDashboard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            firstName: firstName
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/app/dashboard/page.jsx",
            lineNumber: 32,
            columnNumber: 12
        }, this);
    }
    // Fallback for any other non-sysadmin roles (if any) or while loading
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 flex items-center justify-center min-h-[50vh]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center animate-pulse",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500 dark:text-gray-400",
                children: "Loading your customized dashboard..."
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/app/dashboard/page.jsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/app/dashboard/page.jsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/page.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(DashboardPage, "VvmgW5gML8gtJ8g+p6fOEJP2gYk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$authContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DashboardPage;
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_migration-backup_src_app_dashboard_0563oeh._.js.map