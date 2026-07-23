(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/.migration-backup/src/components/Sidebar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$authContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.migration-backup/src/auth/authContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$notificationContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.migration-backup/src/auth/notificationContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// ── Persistence key ─────────────────────────────────────────
const SIDEBAR_STATE_KEY = "gtms_sidebar_collapsed";
// ── Role-based access to navigation items ──────────────────
const RBAC_NAV_ITEMS = {
    "role-sysadmin": [
        "Overview",
        "Reports",
        "Synchronization Reports",
        "Authentication Reports",
        "Notifications",
        "Users",
        "Warehousing",
        "Admin",
        "Sync",
        "Audit Logs",
        "Settings"
    ],
    "role-warehouse-officer": [
        "Overview",
        "Warehouse",
        "Trace",
        "Reports",
        "National",
        "IPC Performance Reports",
        "Farmer Statistics",
        "Warehouse Statistics",
        "Traceability Reports",
        "Notifications"
    ],
    "role-ipc-manager": [
        "Overview",
        "Farmers",
        "Purchasing",
        "Warehouse",
        "Trace",
        "Reports",
        "National",
        "IPC Performance Reports",
        "Farmer Statistics",
        "Warehouse Statistics",
        "Traceability Reports",
        "Notifications"
    ],
    "role-head-office": [
        "Overview",
        "Farmers",
        "Purchasing",
        "Warehouse",
        "Trace",
        "Reports",
        "National",
        "IPC Performance Reports",
        "Farmer Statistics",
        "Warehouse Statistics",
        "Traceability Reports",
        "Analytics",
        "Notifications"
    ]
};
// ── Top-level navigation items ──────────────────────────────
const ALL_NAV_ITEMS = [
    {
        name: "Overview",
        href: "/dashboard",
        exact: true,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 3a2 2 0 1 0 0 4 2 2 0 1 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4m7-.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 1 0 0-5m-14 7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 1 0 0-5m7 .5a2 2 0 1 0 0 4 2 2 0 1 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4M5 17a2 2 0 1 0 0 4 2 2 0 1 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4m7.33-.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 1 0 0-5"
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                lineNumber: 80,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
            lineNumber: 78,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Farmers",
        href: "/dashboard/farmers/profiles",
        matchPrefix: "/dashboard/farmers",
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
                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M133.203 8.33064C156.342 5.5567 177.344 22.0746 180.101 45.2149C182.858 68.3552 166.325 89.3458 143.183 92.0864C120.065 94.8241 99.1001 78.3115 96.3455 55.1948C93.5911 32.0781 110.089 11.1017 133.203 8.33064ZM118.136 70.4442C125.118 77.281 135.107 80.0806 144.626 77.869C160.087 74.2769 169.668 58.786 165.977 43.3487C162.287 27.9116 146.735 18.4291 131.322 22.2179C121.24 24.6961 113.292 32.4412 110.554 42.4554C107.816 52.4696 110.717 63.1813 118.136 70.4442Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M222.083 107.068C224.748 107.053 230.035 106.947 232.307 108.191C235.01 110.029 239.535 110.966 242.107 112.287C245.954 114.262 252.913 120.742 255.49 124.142C258.308 127.862 261.781 136.245 262.77 140.644C263.59 144.281 264.24 152.09 262.176 155.286C260.242 158.642 258.235 159.787 255.924 162.258C255.866 162.303 255.81 162.347 255.748 162.387C254.204 163.415 238.63 163.622 236.167 163.127C236.06 159.681 236.206 156.158 235.735 152.778C235.297 149.651 234.415 146.744 233.564 143.715C232.909 141.874 232.673 138.987 231.866 137.285C229.494 132.277 227.828 126.742 225.481 121.781C224.112 118.887 221.425 115.773 219.762 112.948C219.466 112.444 218.216 110.32 217.958 110.009C217.393 109.857 217.14 109.85 216.574 109.813C216.243 109.506 216.114 109.401 216.12 108.875C216.14 106.646 220.488 107.094 222.083 107.068ZM235.79 146.907C235.788 146.02 235.604 143.769 234.961 143.208C234.874 144.928 234.8 145.423 235.79 146.907Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M234.961 143.208C235.604 143.769 235.788 146.02 235.79 146.907C234.8 145.423 234.874 144.929 234.961 143.208Z",
                    fill: "currentColor",
                    fillOpacity: "0.34902"
                }, void 0, false, {
                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M53.2963 107.061C56.0885 106.945 57.7921 107.166 60.5027 107.69C59.4287 110.547 57.9154 111.432 56.259 113.812C55.0399 116.286 52.2277 118.916 51.0665 121.183C49.6052 124.037 48.224 128.189 46.7167 131.145C46.1882 132.182 44.8615 134.547 44.6567 135.487C43.3162 141.445 41.3147 146.999 40.4044 153.067C40.18 154.562 40.4939 163.16 39.3866 163.243C36.3474 163.472 23.6193 163.511 21.3626 162.393C16.4876 158.729 13.1765 156.468 12.6522 149.741C12.0956 142.598 13.6193 138.414 16.5379 132.077C17.0811 130.898 18.2664 129.548 18.7958 128.374C22.0814 121.093 29.0422 114.889 36.1471 111.428C38.5912 110.266 41.7641 109.601 44.3678 108.222C45.915 107.402 51.3627 107.177 53.2963 107.061Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M207.254 35.9707C208.901 35.7391 216.216 36.8186 217.785 37.5397C218.252 37.754 224.125 40.4479 224.499 40.7244C228.651 43.7947 231.779 48.3315 233.895 52.9771C236 57.5959 235.993 61.4221 235.802 66.3461C235.695 69.1001 235.904 70.5302 234.872 73.1207C232.778 78.3709 230.402 82.7411 225.801 86.2352C224.141 87.4956 224.066 87.8705 221.976 88.811C220.019 89.5508 216.884 91.4661 215.415 91.8766C210.487 92.9702 203.808 92.9522 199.033 91.2492C196.061 90.1893 199.757 84.2239 200.341 82.8092C202.348 77.9322 204.2 73.1596 205.394 68.0099C205.98 65.4716 207.03 62.9635 207.31 60.3227C207.988 54.6097 207.917 48.7029 207.735 42.9555C207.664 40.7594 205.98 38.033 207.254 35.9707Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M68.2082 36.0406L68.7637 36.0159C69.122 36.211 69.3807 36.4059 69.2904 36.8638C68.2327 42.2325 68.4278 47.8114 68.5003 53.2774C68.6645 63.465 71.4696 73.4182 75.7385 82.6239C76.6065 84.4956 80.9952 90.2832 76.8608 91.5712C72.3543 92.9749 66.1735 93.0592 61.611 92.1336C60.1866 91.8446 57.0486 89.966 55.452 89.2858C50.8083 87.4418 49.9481 86.1879 46.9176 82.4494C43.162 77.8165 41.4037 74.3855 40.841 68.1701C40.0572 59.5122 41.4542 52.7277 47.0741 45.8604C53.166 38.4164 58.9921 36.9352 68.2082 36.0406Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
            lineNumber: 89,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Purchasing",
        href: "/dashboard/purchasing",
        matchPrefix: "/dashboard/purchasing",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            viewBox: "0 0 305 286",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M54.028 25.1008C79.76 23.8919 80.9074 41.9503 88.3272 61.2668C94.8149 77.793 101.016 94.4303 106.928 111.171C109.486 118.354 111.92 125.566 114.475 132.746C115.279 135.007 116.667 137.381 117.523 139.764C118.645 142.887 119.673 146.115 120.914 149.171C123.416 155.289 130.358 161.874 136.466 164.207C145.166 167.53 156.638 166.07 165.868 166.108L184.324 166.253C187.732 166.253 191.442 166.37 194.82 165.962C203.044 164.966 210.79 160.757 215.65 153.975C218.006 150.689 219.076 147.099 220.506 143.4C221.789 140.081 223.295 136.906 224.509 133.565C226.047 129.475 227.158 125.219 228.603 121.138C230.124 116.843 232.096 112.583 233.675 108.278C234.903 104.929 235.717 101.466 236.894 98.1658C239.349 91.2848 242.106 84.4573 244.592 77.581C245.399 75.309 246.426 73.53 248.688 72.4998C251.3 71.31 254.757 72.4978 255.83 75.2213C257.112 78.4715 255.355 82.7373 254.08 85.7885C253.177 87.6388 251.26 93.6263 250.32 95.9465C245.495 107.858 241.606 120.166 237.067 132.173C233.131 142.706 230.183 153.417 223.162 162.438C211.579 177.321 196.825 177.518 179.585 177.495C173.606 177.474 167.626 177.489 161.647 177.54C154.273 177.585 146.731 177.819 139.491 176.518C125.438 173.994 115.088 164.118 109.489 151.296C108.106 148.346 107.444 145.032 106.281 142.016C100.848 127.942 95.6425 113.789 90.666 99.5458C88.8132 94.5738 86.562 89.7408 84.6922 84.7778C79.5237 71.0603 74.6807 57.1633 69.6527 43.4078C67.4934 38.1558 63.1122 36.668 57.9202 36.4363C53.7065 36.248 48.7162 36.1208 48.4355 30.9323C48.2002 26.5843 50.0205 25.38 54.028 25.1008Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M208.535 66.5865C210.261 66.3418 211.24 66.1953 212.71 67.3488C219.576 72.737 210.445 78.7233 206.653 83.114C198.022 93.1088 187.803 102.013 178.586 111.474C174.775 115.385 170.118 119.354 166.888 123.732C165.192 124.261 162.085 124.984 160.571 123.61C153.925 117.577 147.967 110.772 141.625 104.428C138.888 101.726 133.197 97.5338 135.317 93.1048C137.517 88.508 142.166 89.6818 145.28 92.7668C149.378 96.8273 153.609 100.87 157.427 105.227C158.926 106.871 162.409 111.411 164.9 109.393C167.418 107.353 169.598 104.662 171.924 102.352L190.204 83.9278C194.886 79.1445 203.251 69.4523 208.535 66.5865Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M132.647 201.888C142.137 200.807 150.709 207.615 151.805 217.103C152.9 226.591 146.103 235.174 136.617 236.282C127.111 237.393 118.508 230.58 117.411 221.073C116.313 211.566 123.138 202.972 132.647 201.888Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M200.8 202.222C210.14 200.306 219.257 206.347 221.134 215.694C223.011 225.041 216.933 234.134 207.578 235.972C198.277 237.801 189.249 231.765 187.382 222.472C185.516 213.179 191.515 204.126 200.8 202.222Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
            lineNumber: 105,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Warehouse",
        href: "/dashboard/warehouse",
        matchPrefix: "/dashboard/warehouse",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3C6.49 3 2 7.49 2 13v6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-6c0-5.51-4.49-10-10-10m4 12H8v-2h8zm-8 4v-2h8v2zm12 0h-2v-6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v6H4v-6c0-4.41 3.59-8 8-8s8 3.59 8 8z"
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                lineNumber: 120,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
            lineNumber: 118,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Trace",
        href: "/dashboard/traceability",
        matchPrefix: "/dashboard/traceability",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 10c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4m-6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2"
                }, void 0, false, {
                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M11.42 21.81c.17.12.38.19.58.19s.41-.06.58-.19c.3-.22 7.45-5.37 7.42-11.82 0-4.41-3.59-8-8-8s-8 3.59-8 8c-.03 6.44 7.12 11.6 7.42 11.82M12 4c3.31 0 6 2.69 6 6 .02 4.44-4.39 8.43-6 9.74-1.61-1.31-6.02-5.29-6-9.74 0-3.31 2.69-6 6-6"
                }, void 0, false, {
                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                    lineNumber: 131,
                    columnNumber: 131
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
            lineNumber: 129,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Reports",
        href: "/dashboard/reports",
        matchPrefix: "/dashboard/reports",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19 2c-1.65 0-3 1.35-3 3 0 1 .49 1.87 1.24 2.42l-1.92 4.61c-.11-.01-.21-.03-.32-.03-.46 0-.89.11-1.29.3l-2.02-2.02c.19-.39.3-.82.3-1.29 0-1.65-1.35-3-3-3s-3 1.35-3 3c0 .82.33 1.57.87 2.11l-2.04 4.91c-1.57.09-2.83 1.39-2.83 2.98s1.35 3 3 3 3-1.35 3-3c0-1-.49-1.87-1.24-2.42l1.92-4.61c.11.01.21.03.32.03.46 0 .89-.11 1.29-.3l2.02 2.02c-.19.39-.3.82-.3 1.29 0 1.65 1.35 3 3 3s3-1.35 3-3c0-.82-.33-1.57-.87-2.11l2.04-4.91C20.74 7.89 22 6.59 22 5s-1.35-3-3-3M5 20c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M8 9c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m7 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m4-10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                lineNumber: 142,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
            lineNumber: 140,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Analytics",
        href: "/dashboard/analytics/kpis",
        matchPrefix: "/dashboard/analytics",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.75",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                lineNumber: 152,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
            lineNumber: 151,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Notifications",
        href: "/dashboard/notifications",
        matchPrefix: "/dashboard/notifications",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19 12.59V10c0-3.22-2.18-5.93-5.14-6.74C13.57 2.52 12.85 2 12 2s-1.56.52-1.86 1.26C7.18 4.08 5 6.79 5 10v2.59L3.29 14.3a1 1 0 0 0-.29.71v2c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-2c0-.27-.11-.52-.29-.71zM19 16H5v-.59l1.71-1.71a1 1 0 0 0 .29-.71v-3c0-2.76 2.24-5 5-5s5 2.24 5 5v3c0 .27.11.52.29.71L19 15.41zm-4.18 4H9.18c.41 1.17 1.51 2 2.82 2s2.41-.83 2.82-2"
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                lineNumber: 163,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
            lineNumber: 161,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Administration",
        href: "/dashboard/admin/users",
        matchPrefix: "/dashboard/admin/",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.75",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z"
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                lineNumber: 173,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
            lineNumber: 172,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Audit Logs",
        href: "/dashboard/admin/audit-logs",
        matchPrefix: "/dashboard/admin/audit-logs",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19 2c-1.65 0-3 1.35-3 3 0 1 .49 1.87 1.24 2.42l-1.92 4.61c-.11-.01-.21-.03-.32-.03-.46 0-.89.11-1.29.3l-2.02-2.02c.19-.39.3-.82.3-1.29 0-1.65-1.35-3-3-3s-3 1.35-3 3c0 .82.33 1.57.87 2.11l-2.04 4.91c-1.57.09-2.83 1.39-2.83 2.98s1.35 3 3 3 3-1.35 3-3c0-1-.49-1.87-1.24-2.42l1.92-4.61c.11.01.21.03.32.03.46 0 .89-.11 1.29-.3l2.02 2.02c-.19.39-.3.82-.3 1.29 0 1.65 1.35 3 3 3s3-1.35 3-3c0-.82-.33-1.57-.87-2.11l2.04-4.91C20.74 7.89 22 6.59 22 5s-1.35-3-3-3M5 20c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M8 9c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m7 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m4-10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                lineNumber: 184,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
            lineNumber: 182,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Settings",
        href: "/dashboard/admin/settings",
        matchPrefix: "/dashboard/admin/settings",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 12.5v-1h-1.03c-.04-.78-.18-1.54-.41-2.26l.95-.37-.36-.93-.95.37c-.38-.85-.89-1.62-1.5-2.3l.73-.73-.71-.71-.73.73c-.57-.51-1.2-.95-1.89-1.3l.42-.93-.91-.41-.42.94a8.9 8.9 0 0 0-2.69-.57V2h-1v1.03c-.78.04-1.54.18-2.26.41l-.37-.95-.93.36.37.95c-.85.38-1.62.89-2.3 1.5l-.73-.73-.71.71.73.73c-.51.57-.95 1.2-1.3 1.89l-.93-.42-.41.91.94.42a8.9 8.9 0 0 0-.57 2.69H2v1h1.03c.04.78.18 1.54.41 2.26l-.95.37.36.93.95-.37c.38.85.89 1.62 1.5 2.3l-.73.73.71.71.73-.73c.57.51 1.2.95 1.89 1.3l-.42.93.91.41.42-.94a8.9 8.9 0 0 0 2.69.57V22h1v-1.03c.78-.04 1.54-.18 2.26-.41l.37.95.93-.36-.37-.95c.85-.38 1.62-.89 2.3-1.5l.73.73.71-.71-.73-.73c.51-.57.95-1.2 1.3-1.89l.93.42.41-.91-.94-.42a8.9 8.9 0 0 0 .57-2.69zM12 5c3.1 0 5.72 2.02 6.65 4.81l-4.05.71c-.52-.91-1.48-1.53-2.6-1.53-.37 0-.72.08-1.05.2L8.31 6.05a6.9 6.9 0 0 1 3.68-1.06Zm1 7c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1m-4.31 6.17a6.99 6.99 0 0 1-1.9-10.83l2.64 3.14c-.26.45-.42.96-.42 1.51 0 .93.43 1.75 1.1 2.3L8.7 18.15ZM12 19c-.49 0-.97-.05-1.43-.15l1.4-3.85H12a2.99 2.99 0 0 0 2.95-2.5l4.04-.71c0 .07.01.14.01.22 0 3.86-3.14 7-7 7Z"
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                lineNumber: 195,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
            lineNumber: 193,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }
];
// Ordered nav groups — array order determines display order. Groups with `items` render a dropdown.
const NAV_GROUPS = [
    {
        section: "Overview",
        items: [
            {
                name: "Overview",
                href: "/dashboard",
                exact: true,
                activeOn: [
                    "/dashboard",
                    "/dashboard/admin"
                ],
                icon: ALL_NAV_ITEMS.find((i)=>i.name === 'Overview')?.icon
            }
        ]
    },
    {
        section: "Farmers",
        items: [
            {
                name: "Farmer Profiles",
                href: "/dashboard/farmers/profiles",
                matchPrefix: "/dashboard/farmers/profiles",
                icon: ALL_NAV_ITEMS.find((i)=>i.name === 'Farmers')?.icon
            },
            {
                name: "Farmer Groups",
                href: "/dashboard/farmers/groups",
                matchPrefix: "/dashboard/farmers/groups"
            },
            {
                name: "Farmer History",
                href: "/dashboard/farmers/history",
                matchPrefix: "/dashboard/farmers/history"
            },
            {
                name: "Farmer Registration",
                href: "/dashboard/farmers/registration",
                matchPrefix: "/dashboard/farmers/registration"
            }
        ]
    },
    {
        section: "Purchasing",
        items: [
            {
                name: "Purchasing",
                href: "/dashboard/purchasing",
                matchPrefix: "/dashboard/purchasing",
                icon: ALL_NAV_ITEMS.find((i)=>i.name === 'Purchasing')?.icon
            }
        ]
    },
    {
        section: "Warehouse",
        items: [
            {
                name: "Warehouse",
                href: "/dashboard/warehouse",
                matchPrefix: "/dashboard/warehouse",
                icon: ALL_NAV_ITEMS.find((i)=>i.name === 'Warehouse')?.icon
            }
        ]
    },
    {
        section: "Trace",
        items: [
            {
                name: "Trace",
                href: "/dashboard/traceability",
                matchPrefix: "/dashboard/traceability",
                icon: ALL_NAV_ITEMS.find((i)=>i.name === 'Trace')?.icon
            }
        ]
    },
    {
        section: "Analytics",
        items: [
            {
                name: "KPI",
                href: "/dashboard/analytics/kpis",
                matchPrefix: "/dashboard/analytics/kpis",
                icon: ALL_NAV_ITEMS.find((i)=>i.name === 'Analytics')?.icon
            },
            {
                name: "Forecasts",
                href: "/dashboard/analytics/forecasts",
                matchPrefix: "/dashboard/analytics/forecasts"
            },
            {
                name: "IPC Comparison",
                href: "/dashboard/analytics/ipc-comparison",
                matchPrefix: "/dashboard/analytics/ipc-comparison"
            },
            {
                name: "Production Trends",
                href: "/dashboard/analytics/production-trends",
                matchPrefix: "/dashboard/analytics/production-trends"
            },
            {
                name: "Warehouse Performance",
                href: "/dashboard/analytics/warehouse-performance",
                matchPrefix: "/dashboard/analytics/warehouse-performance"
            }
        ]
    },
    {
        section: "Users",
        items: [
            {
                name: "Users",
                href: "/dashboard/admin/users",
                matchPrefix: "/dashboard/admin/users",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-5 h-5",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 11c1.71 0 3-1.29 3-3s-1.29-3-3-3-3 1.29-3 3 1.29 3 3 3m0-4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1m1 5h-2c-2.76 0-5 2.24-5 5v.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V17c0-2.76-2.24-5-5-5m-5 5c0-1.65 1.35-3 3-3h2c1.65 0 3 1.35 3 3zm-1.5-6c.47 0 .9-.12 1.27-.33a5.03 5.03 0 0 1-.42-4.52C7.09 6.06 6.8 6 6.5 6 5.06 6 4 7.06 4 8.5S5.06 11 6.5 11m-.39 1H5.5C3.57 12 2 13.57 2 15.5v1c0 .28.22.5.5.5H4c0-1.96.81-3.73 2.11-5m11.39-1c1.44 0 2.5-1.06 2.5-2.5S18.94 6 17.5 6c-.31 0-.59.06-.85.15a5.03 5.03 0 0 1-.42 4.52c.37.21.79.33 1.27.33m1 1h-.61A6.97 6.97 0 0 1 20 17h1.5c.28 0 .5-.22.5-.5v-1c0-1.93-1.57-3.5-3.5-3.5"
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                        lineNumber: 253,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                    lineNumber: 251,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }
        ]
    },
    {
        section: "Warehousing",
        items: [
            {
                name: "Warehousing",
                href: "/dashboard/admin/warehouse-management",
                matchPrefix: "/dashboard/admin/warehouse-management",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-5 h-5",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 3C6.49 3 2 7.49 2 13v6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-6c0-5.51-4.49-10-10-10m4 12H8v-2h8zm-8 4v-2h8v2zm12 0h-2v-6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v6H4v-6c0-4.41 3.59-8 8-8s8 3.59 8 8z"
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                        lineNumber: 264,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                    lineNumber: 262,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }
        ]
    },
    {
        section: "Admin",
        items: [
            {
                name: "Admin",
                href: "/dashboard/admin/ipc-management",
                matchPrefix: "/dashboard/admin/ipc-management",
                icon: ALL_NAV_ITEMS.find((i)=>i.name === 'Administration')?.icon
            }
        ]
    },
    {
        section: "Sync",
        items: [
            {
                name: "Sync",
                href: "/dashboard/admin/sync-management",
                matchPrefix: "/dashboard/admin/sync-management",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-5 h-5",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M19.07 4.93a9.9 9.9 0 0 0-3.18-2.14A9.95 9.95 0 0 0 12 2v2c1.08 0 2.13.21 3.11.63.95.4 1.81.98 2.54 1.71s1.31 1.59 1.72 2.54c.42.99.63 2.03.63 3.11s-.21 2.13-.63 3.11c-.4.95-.98 1.81-1.72 2.54-.17.17-.34.32-.52.48L15 15.99v6h6l-2.45-2.45c.18-.15.36-.31.52-.48.92-.92 1.64-1.99 2.14-3.18.52-1.23.79-2.54.79-3.89s-.26-2.66-.79-3.89a9.9 9.9 0 0 0-2.14-3.18ZM4.93 19.07c.92.92 1.99 1.64 3.18 2.14 1.23.52 2.54.79 3.89.79v-2a7.9 7.9 0 0 1-3.11-.63c-.95-.4-1.81-.98-2.54-1.71s-1.31-1.59-1.72-2.54c-.42-.99-.63-2.03-.63-3.11s.21-2.13.63-3.11c.4-.95.98-1.81 1.72-2.54.17-.17.34-.32.52-.48L9 8.01V2H3l2.45 2.45c-.18.15-.36.31-.52.48-.92.92-1.64 1.99-2.14 3.18C2.27 9.34 2 10.65 2 12s.26 2.66.79 3.89c.5 1.19 1.22 2.26 2.14 3.18"
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                        lineNumber: 281,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                    lineNumber: 279,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }
        ]
    },
    {
        section: "Audit Logs",
        items: [
            {
                name: "Audit Logs",
                href: "/dashboard/admin/audit-logs",
                matchPrefix: "/dashboard/admin/audit-logs",
                icon: ALL_NAV_ITEMS.find((i)=>i.name === 'Audit Logs')?.icon
            }
        ]
    },
    {
        section: "Settings",
        items: [
            {
                name: "Settings",
                href: "/dashboard/admin/settings",
                matchPrefix: "/dashboard/admin/settings",
                icon: ALL_NAV_ITEMS.find((i)=>i.name === 'Settings')?.icon
            }
        ]
    }
];
// NavGroup component — renders a parent header and nested items with expand/collapse
function NavGroup({ group, pathname, collapsed, badgeMap, allowed, activeGroup, manualOpenGroup, setManualOpenGroup }) {
    _s();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const anchorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NavGroup.useMemo[hasActive]": ()=>group.items.some({
                "NavGroup.useMemo[hasActive]": (i)=>i.exact ? pathname === i.href : pathname === i.href || i.matchPrefix && pathname.startsWith(i.matchPrefix)
            }["NavGroup.useMemo[hasActive]"])
    }["NavGroup.useMemo[hasActive]"], [
        group.items,
        pathname
    ]);
    const effectiveOpen = activeGroup === group.section || manualOpenGroup === group.section || activeGroup === null && hasActive && manualOpenGroup === null;
    const singleItem = group.items.length === 1;
    const shouldRenderDropdown = !singleItem || group.forceDropdown;
    const groupIcon = group.icon || group.items[0]?.icon;
    if (!allowed) return null;
    if (!shouldRenderDropdown) {
        const item = group.items[0];
        const isActive = item.exact ? pathname === item.href : pathname === item.href || item.matchPrefix && pathname.startsWith(item.matchPrefix);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            ref: anchorRef,
            onMouseEnter: ()=>collapsed && setHovered(true),
            onMouseLeave: ()=>setHovered(false),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: item.href,
                    "aria-label": item.name,
                    className: [
                        'flex items-center gap-3 rounded-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400',
                        collapsed ? 'px-[13px] py-2.5 justify-center' : 'px-3 py-2.5',
                        isActive ? 'bg-gray-200 text-gray-700' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                    ].join(' '),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex-shrink-0",
                            children: item.icon
                        }, void 0, false, {
                            fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                            lineNumber: 331,
                            columnNumber: 11
                        }, this),
                        !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-medium truncate",
                            children: item.name
                        }, void 0, false, {
                            fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                            lineNumber: 332,
                            columnNumber: 26
                        }, this),
                        !collapsed && item.badgeFor && badgeMap[item.badgeFor] > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ml-auto inline-flex items-center justify-center px-2 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r from-pink-400 to-orange-400 text-white",
                            children: badgeMap[item.badgeFor]
                        }, void 0, false, {
                            fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                            lineNumber: 334,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                    lineNumber: 326,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarTooltip, {
                    label: item.name,
                    anchorRef: anchorRef,
                    visible: collapsed && hovered
                }, void 0, false, {
                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                    lineNumber: 337,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
            lineNumber: 320,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative",
        ref: anchorRef,
        onMouseEnter: ()=>collapsed && setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: [
                    'flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-500',
                    collapsed ? 'justify-center' : 'justify-between'
                ].join(' '),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        onClick: ()=>collapsed && setManualOpenGroup(effectiveOpen ? null : group.section),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: [
                                    "flex-shrink-0",
                                    collapsed ? "cursor-pointer" : ""
                                ].join(' '),
                                children: groupIcon
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                                lineNumber: 351,
                                columnNumber: 11
                            }, this),
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate",
                                children: group.section
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                                lineNumber: 352,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this),
                    !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setManualOpenGroup(effectiveOpen ? null : group.section),
                        className: "text-gray-400 hover:text-gray-600",
                        "aria-expanded": effectiveOpen,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: [
                                'w-4 h-4 transition-transform',
                                effectiveOpen ? 'rotate-90' : 'rotate-0'
                            ].join(' '),
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M9 5l7 7-7 7"
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                                lineNumber: 356,
                                columnNumber: 185
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                            lineNumber: 356,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                        lineNumber: 355,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                lineNumber: 349,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarTooltip, {
                label: group.section,
                anchorRef: anchorRef,
                visible: collapsed && hovered
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                lineNumber: 361,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: [
                    effectiveOpen && !collapsed ? 'block' : 'hidden',
                    collapsed ? 'px-2' : 'px-3 space-y-0.5'
                ].join(' '),
                children: group.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            "aria-label": item.name,
                            className: [
                                'flex items-center gap-3 rounded-lg transition-all duration-150',
                                collapsed ? 'px-[13px] py-2.5 justify-center' : 'px-3 py-2.5',
                                (item.exact ? pathname === item.href : pathname === item.href || item.matchPrefix && pathname.startsWith(item.matchPrefix)) ? 'bg-gray-200 text-gray-700' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                            ].join(' '),
                            children: [
                                !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium truncate",
                                    children: item.name
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                                    lineNumber: 372,
                                    columnNumber: 30
                                }, this),
                                !collapsed && item.badgeFor && badgeMap[item.badgeFor] > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-auto inline-flex items-center justify-center px-2 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r from-pink-400 to-orange-400 text-white",
                                    children: badgeMap[item.badgeFor]
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                                    lineNumber: 374,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                            lineNumber: 366,
                            columnNumber: 13
                        }, this)
                    }, item.name, false, {
                        fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                        lineNumber: 365,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                lineNumber: 363,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
        lineNumber: 343,
        columnNumber: 5
    }, this);
}
_s(NavGroup, "p+y4S01+up5B11W6uV+qYuZVCRA=");
_c = NavGroup;
// ── Portal Tooltip (renders at body level to escape overflow:hidden) ──
function SidebarTooltip({ label, anchorRef, visible }) {
    _s1();
    const [pos, setPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SidebarTooltip.useEffect": ()=>{
            if (visible && anchorRef.current) {
                const rect = anchorRef.current.getBoundingClientRect();
                setPos({
                    top: rect.top + rect.height / 2,
                    left: rect.right + 10
                });
            }
        }
    }["SidebarTooltip.useEffect"], [
        visible,
        anchorRef
    ]);
    if (typeof document === "undefined" || !visible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "tooltip",
        style: {
            top: pos.top,
            left: pos.left,
            transform: "translateY(-50%)"
        },
        className: "fixed z-[9999] pointer-events-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-full top-1/2 -translate-y-1/2 border-[5px] border-transparent border-r-gray-500"
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                lineNumber: 406,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-500 text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg shadow-xl whitespace-nowrap",
                children: label
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                lineNumber: 407,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
        lineNumber: 401,
        columnNumber: 5
    }, this), document.body);
}
_s1(SidebarTooltip, "2Z94UROa/JZa46zpvzDhTO0y9/I=");
_c1 = SidebarTooltip;
// ── NavItem ─────────────────────────────────────────────────
function NavItem({ item, pathname, collapsed }) {
    _s2();
    const isActive = item.activeOn && item.activeOn.includes(pathname) || (item.exact ? pathname === item.href : pathname === item.href || item.matchPrefix && pathname.startsWith(item.matchPrefix));
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const anchorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: anchorRef,
        className: "relative",
        onMouseEnter: ()=>collapsed && setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: item.href,
                "aria-label": item.name,
                className: [
                    "flex items-center gap-3 rounded-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-100",
                    collapsed ? "px-[13px] py-2.5 justify-center" : "px-3 py-2.5",
                    isActive ? "bg-[#1a5c2a] text-white" : "text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                ].join(" "),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: [
                            "flex-shrink-0 transition-colors",
                            isActive ? "text-white" : "text-gray-400"
                        ].join(" "),
                        children: item.icon
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                        lineNumber: 444,
                        columnNumber: 9
                    }, this),
                    !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium truncate leading-none",
                        children: item.name
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                        lineNumber: 453,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                lineNumber: 433,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarTooltip, {
                label: item.name,
                anchorRef: anchorRef,
                visible: collapsed && hovered
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                lineNumber: 458,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
        lineNumber: 427,
        columnNumber: 5
    }, this);
}
_s2(NavItem, "Q47Yxxf4DR9TU/bbfXDdDKuS9zs=");
_c2 = NavItem;
// ── UserTooltip (for collapsed avatar) ──────────────────────
function UserTooltip({ user, anchorRef, visible }) {
    _s3();
    const [pos, setPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserTooltip.useEffect": ()=>{
            if (visible && anchorRef.current) {
                const rect = anchorRef.current.getBoundingClientRect();
                setPos({
                    top: rect.top + rect.height / 2,
                    left: rect.right + 10
                });
            }
        }
    }["UserTooltip.useEffect"], [
        visible,
        anchorRef
    ]);
    if (typeof document === "undefined" || !visible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "tooltip",
        style: {
            top: pos.top,
            left: pos.left,
            transform: "translateY(-50%)"
        },
        className: "fixed z-[9999] pointer-events-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-full top-1/2 -translate-y-1/2 border-[5px] border-transparent border-r-[#1a5c2a]"
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                lineNumber: 485,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#1a5c2a] text-white text-xs px-2.5 py-2 rounded-lg shadow-xl whitespace-nowrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block font-semibold",
                        children: user?.name
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                        lineNumber: 487,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block text-white/70 font-normal text-[10px] mt-0.5",
                        children: user?.email
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                        lineNumber: 488,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                lineNumber: 486,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
        lineNumber: 480,
        columnNumber: 5
    }, this), document.body);
}
_s3(UserTooltip, "2Z94UROa/JZa46zpvzDhTO0y9/I=");
_c3 = UserTooltip;
function Sidebar() {
    _s4();
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$authContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { unreadCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$notificationContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotifications"])();
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Sidebar.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return localStorage.getItem(SIDEBAR_STATE_KEY) === "true";
        }
    }["Sidebar.useState"]);
    const [manualOpenGroup, setManualOpenGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [avatarHovered, setAvatarHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [signoutHovered, setSignoutHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [confirmOpen, setConfirmOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const avatarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const signoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toggleCollapsed = ()=>{
        setCollapsed((prev)=>{
            const next = !prev;
            localStorage.setItem(SIDEBAR_STATE_KEY, String(next));
            return next;
        });
    };
    const handleLogout = ()=>{
        logout();
        router.push("/login");
    };
    const handleConfirmLogout = ()=>{
        setConfirmOpen(false);
        handleLogout();
    };
    const activeGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Sidebar.useMemo[activeGroup]": ()=>NAV_GROUPS.find({
                "Sidebar.useMemo[activeGroup]": (group)=>group.items.some({
                        "Sidebar.useMemo[activeGroup]": (item)=>item.exact ? pathname === item.href : pathname === item.href || item.matchPrefix && pathname.startsWith(item.matchPrefix)
                    }["Sidebar.useMemo[activeGroup]"])
            }["Sidebar.useMemo[activeGroup]"])?.section || null
    }["Sidebar.useMemo[activeGroup]"], [
        pathname
    ]);
    const initials = user?.name ? user.name.split(" ").map((w)=>w[0]).join("").slice(0, 2).toUpperCase() : "SA";
    const sidebarWidth = collapsed ? "w-[60px]" : "w-56";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: [
            "flex flex-col h-screen flex-shrink-0",
            "bg-gray-100 border-r border-gray-200",
            "transition-[width] duration-[250ms] ease-in-out",
            sidebarWidth
        ].join(" "),
        "aria-label": "Main navigation",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: [
                    "flex items-center flex-shrink-0 pt-4 pb-3",
                    collapsed ? "px-3 justify-center" : "px-6 justify-between"
                ].join(" "),
                children: collapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: toggleCollapsed,
                    "aria-label": "Expand sidebar",
                    "aria-expanded": false,
                    className: "w-8 h-8 rounded-md hover:bg-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-all duration-150 flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-4 h-4",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M12 4v16m8-8H4"
                        }, void 0, false, {
                            fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                            lineNumber: 571,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                        lineNumber: 570,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                    lineNumber: 564,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 min-w-0 overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/branding/nlogo.svg",
                                    alt: "NASFAM Logo",
                                    className: "h-6 w-auto flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                                    lineNumber: 577,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold text-gray-800 truncate whitespace-nowrap",
                                    children: "Admin"
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                                    lineNumber: 578,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                            lineNumber: 576,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: toggleCollapsed,
                            "aria-label": "Collapse sidebar",
                            "aria-expanded": true,
                            className: "w-7 h-7 rounded-md hover:bg-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-all duration-150 flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-3.5 h-3.5",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.5",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M20 12H4"
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                                    lineNumber: 587,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                                lineNumber: 586,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                            lineNumber: 580,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                lineNumber: 557,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: [
                    "flex-1 overflow-y-auto overflow-x-hidden py-2 space-y-0.5",
                    collapsed ? "px-2" : "px-3"
                ].join(" "),
                "aria-label": "Module navigation",
                children: (()=>{
                    const userRole = user?.roleId || "role-sysadmin";
                    const allowedItems = RBAC_NAV_ITEMS[userRole] || [];
                    const badgeMap = {
                        notifications: unreadCount
                    };
                    return NAV_GROUPS.map((group)=>{
                        const groupHasFullAccess = group.allowAll !== false && allowedItems.includes(group.section);
                        const allowedItemsForGroup = groupHasFullAccess ? group.items : group.items.filter((item)=>allowedItems.includes(item.name));
                        if (allowedItemsForGroup.length === 0) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavGroup, {
                            group: {
                                ...group,
                                items: allowedItemsForGroup
                            },
                            pathname: pathname,
                            collapsed: collapsed,
                            badgeMap: badgeMap,
                            allowed: true,
                            activeGroup: activeGroup,
                            manualOpenGroup: manualOpenGroup,
                            setManualOpenGroup: setManualOpenGroup
                        }, group.section, false, {
                            fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                            lineNumber: 617,
                            columnNumber: 15
                        }, this);
                    });
                })()
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                lineNumber: 595,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: [
                    "flex-shrink-0 border-t border-gray-200 mt-1",
                    collapsed ? "p-2" : "p-3"
                ].join(" "),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: [
                        "mt-0",
                        collapsed ? "px-2 flex justify-center" : "px-3"
                    ].join(" "),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: signoutRef,
                        onMouseEnter: ()=>collapsed && setSignoutHovered(true),
                        onMouseLeave: ()=>setSignoutHovered(false),
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setConfirmOpen(true),
                                className: [
                                    "flex items-center justify-center rounded-lg text-sm font-semibold text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400",
                                    collapsed ? "h-9 w-9 p-0 flex-shrink-0" : "w-full gap-2 px-3 py-2"
                                ].join(" "),
                                "aria-label": "Sign out",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-4 w-4 flex-shrink-0",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m14.29 6.71 4.3 4.29H9v2h9.59l-4.3 4.29 1.42 1.42 6.7-6.71-6.7-6.71z"
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                                                lineNumber: 657,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M11 5V3c-4.96 0-9 4.04-9 9s4.04 9 9 9v-2c-3.86 0-7-3.14-7-7s3.14-7 7-7"
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                                                lineNumber: 658,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                                        lineNumber: 655,
                                        columnNumber: 15
                                    }, this),
                                    !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Sign out"
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                                        lineNumber: 660,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                                lineNumber: 647,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarTooltip, {
                                label: "Sign out",
                                anchorRef: signoutRef,
                                visible: collapsed && signoutHovered
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                                lineNumber: 663,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                        lineNumber: 641,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                    lineNumber: 640,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                lineNumber: 634,
                columnNumber: 7
            }, this),
            confirmOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[70] flex items-center justify-center bg-black/50 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-11 w-11 items-center justify-center rounded-full bg-red-100 text-red-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-5 w-5",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m14.29 6.71 4.3 4.29H9v2h9.59l-4.3 4.29 1.42 1.42 6.7-6.71-6.7-6.71z"
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                                                lineNumber: 677,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M11 5V3c-4.96 0-9 4.04-9 9s4.04 9 9 9v-2c-3.86 0-7-3.14-7-7s3.14-7 7-7"
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                                                lineNumber: 678,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                                        lineNumber: 675,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                                    lineNumber: 674,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-900",
                                            children: "Sign out of your account?"
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                                            lineNumber: 682,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-gray-600",
                                            children: "You’ll need to sign in again to continue using the dashboard."
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                                            lineNumber: 683,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                                    lineNumber: 681,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                            lineNumber: 673,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setConfirmOpen(false),
                                    className: "rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                                    lineNumber: 688,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleConfirmLogout,
                                    className: "rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700",
                                    children: "Sign Out"
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                                    lineNumber: 695,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                            lineNumber: 687,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                    lineNumber: 672,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
                lineNumber: 671,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.migration-backup/src/components/Sidebar.jsx",
        lineNumber: 547,
        columnNumber: 5
    }, this);
}
_s4(Sidebar, "rahxuRYiv3lsbTiqJXT40kRCXjA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$authContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$notificationContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotifications"]
    ];
});
_c4 = Sidebar;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "NavGroup");
__turbopack_context__.k.register(_c1, "SidebarTooltip");
__turbopack_context__.k.register(_c2, "NavItem");
__turbopack_context__.k.register(_c3, "UserTooltip");
__turbopack_context__.k.register(_c4, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.migration-backup/src/app/dashboard/layout.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$components$2f$Sidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.migration-backup/src/components/Sidebar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$authContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.migration-backup/src/auth/authContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$notificationContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.migration-backup/src/auth/notificationContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const THEME_KEY = "gtms-theme-preference";
function NotificationBell({ theme }) {
    _s();
    const { notifications, unreadCount, markAllRead, markRead } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$notificationContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotifications"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationBell.useEffect": ()=>{
            function onClickOutside(e) {
                if (ref.current && !ref.current.contains(e.target)) setOpen(false);
            }
            document.addEventListener("mousedown", onClickOutside);
            return ({
                "NotificationBell.useEffect": ()=>document.removeEventListener("mousedown", onClickOutside)
            })["NotificationBell.useEffect"];
        }
    }["NotificationBell.useEffect"], []);
    const handleOpen = ()=>{
        setOpen((v)=>!v);
        if (!open) markAllRead();
    };
    const textStyle = theme === "dark" ? "#e2e8f0" : "#6b7280";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleOpen,
                style: {
                    color: textStyle,
                    backgroundColor: "transparent"
                },
                className: "relative flex items-center justify-center h-8 w-8 hover:text-gray-700 dark:hover:text-slate-200 transition-colors rounded-lg flex-shrink-0",
                onMouseEnter: (e)=>{
                    if (theme === "dark") {
                        e.currentTarget.style.backgroundColor = "rgba(51, 65, 85, 0.5)";
                    } else {
                        e.currentTarget.style.backgroundColor = "rgba(243, 244, 246, 0.7)";
                    }
                },
                onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = "transparent",
                "aria-label": "Notifications",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-5 h-5",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M19 12.59V10c0-3.22-2.18-5.93-5.14-6.74C13.57 2.52 12.85 2 12 2s-1.56.52-1.86 1.26C7.18 4.08 5 6.79 5 10v2.59L3.29 14.3a1 1 0 0 0-.29.71v2c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-2c0-.27-.11-.52-.29-.71zM19 16H5v-.59l1.71-1.71a1 1 0 0 0 .29-.71v-3c0-2.76 2.24-5 5-5s5 2.24 5 5v3c0 .27.11.52.29.71L19 15.41zm-4.18 4H9.18c.41 1.17 1.51 2 2.82 2s2.41-.83 2.82-2"
                        }, void 0, false, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute -top-1 -right-1 min-w-[18px] h-5 flex items-center justify-center bg-red-500 text-white text-[9px] font-bold rounded-full px-1 border-2 border-white shadow-sm",
                        children: unreadCount > 9 ? "9+" : unreadCount
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute right-0 top-full mt-2 w-96 rounded-xl shadow-xl border z-50 overflow-hidden transition-all duration-200 origin-top-right ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`,
                style: {
                    backgroundColor: theme === "dark" ? "var(--surface-overlay)" : "var(--surface-card)",
                    borderColor: theme === "dark" ? "var(--border-default)" : "var(--border-subtle)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-4 py-3 border-b",
                        style: {
                            borderColor: theme === "dark" ? "var(--border-default)" : "var(--border-subtle)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    color: theme === "dark" ? "#f8fafc" : "#111827"
                                },
                                className: "text-sm font-bold",
                                children: "Notifications"
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: theme === "dark" ? "#94a3b8" : "#9ca3af"
                                },
                                className: "text-xs",
                                children: "All caught up"
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-80 overflow-y-auto p-2 flex flex-col gap-0.5",
                        children: notifications.slice(0, 3).map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>markRead(n.id),
                                className: "w-full text-left flex items-start gap-3 px-3 py-2.5 rounded-lg transition-all hover:bg-gray-100 dark:hover:bg-[var(--surface-hover)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${n.read ? theme === "dark" ? "bg-slate-600" : "bg-gray-300" : "bg-[#1a5c2a]"}`
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            color: theme === "dark" ? "#f8fafc" : "#111827"
                                                        },
                                                        className: "text-[13px] font-semibold leading-tight",
                                                        children: n.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                                        lineNumber: 88,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            backgroundColor: theme === "dark" ? "var(--surface-hover)" : "#f3f4f6",
                                                            color: theme === "dark" ? "#cbd5e1" : "#6b7280"
                                                        },
                                                        className: "text-[10px] font-medium px-1.5 py-0.5 rounded flex-shrink-0",
                                                        children: n.type
                                                    }, void 0, false, {
                                                        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                                        lineNumber: 89,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                                lineNumber: 87,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: theme === "dark" ? "#94a3b8" : "#6b7280"
                                                },
                                                className: "text-xs mt-0.5 line-clamp-2",
                                                children: n.message
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                                lineNumber: 99,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: theme === "dark" ? "#64748b" : "#9ca3af"
                                                },
                                                className: "text-[11px] mt-1",
                                                children: n.createdAt
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                                lineNumber: 100,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, n.id, true, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t px-4 py-2.5",
                        style: {
                            borderColor: theme === "dark" ? "var(--border-default)" : "var(--border-subtle)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/dashboard/notifications",
                            onClick: ()=>setOpen(false),
                            className: "block text-center text-xs font-semibold text-[#1a5c2a] hover:underline py-1",
                            children: "View All Notifications"
                        }, void 0, false, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(NotificationBell, "w1UOokJUK1D9pjkrpVqLOy/t7bI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$notificationContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotifications"]
    ];
});
_c = NotificationBell;
function ProfileMenu({ user, theme, onOpenProfile, onSignOut }) {
    _s1();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [confirmOpen, setConfirmOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileMenu.useEffect": ()=>{
            function onClickOutside(e) {
                if (ref.current && !ref.current.contains(e.target)) setOpen(false);
            }
            document.addEventListener("mousedown", onClickOutside);
            return ({
                "ProfileMenu.useEffect": ()=>document.removeEventListener("mousedown", onClickOutside)
            })["ProfileMenu.useEffect"];
        }
    }["ProfileMenu.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileMenu.useEffect": ()=>{
            function onKeyDown(e) {
                if (e.key === "Escape") setOpen(false);
            }
            document.addEventListener("keydown", onKeyDown);
            return ({
                "ProfileMenu.useEffect": ()=>document.removeEventListener("keydown", onKeyDown)
            })["ProfileMenu.useEffect"];
        }
    }["ProfileMenu.useEffect"], []);
    const initials = user?.name ? user.name.split(" ").map((word)=>word[0]).join("").slice(0, 2).toUpperCase() : "U";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setOpen((value)=>!value),
                "aria-haspopup": "menu",
                "aria-expanded": open,
                style: {
                    color: theme === "dark" ? "#e2e8f0" : "#6b7280",
                    backgroundColor: "transparent"
                },
                className: "relative flex items-center justify-center h-8 w-8 hover:text-gray-700 dark:hover:text-slate-200 transition-colors rounded-lg flex-shrink-0",
                onMouseEnter: (e)=>{
                    if (theme === "dark") {
                        e.currentTarget.style.backgroundColor = "rgba(51, 65, 85, 0.5)";
                    } else {
                        e.currentTarget.style.backgroundColor = "rgba(243, 244, 246, 0.7)";
                    }
                },
                onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = "transparent",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-5 h-5",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 6c-2.28 0-4 1.72-4 4s1.72 4 4 4 4-1.72 4-4-1.72-4-4-4m0 6c-1.18 0-2-.82-2-2s.82-2 2-2 2 .82 2 2-.82 2-2 2"
                        }, void 0, false, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 2C6.49 2 2 6.49 2 12c0 3.26 1.58 6.16 4 7.98V20h.03c1.67 1.25 3.73 2 5.97 2s4.31-.75 5.97-2H18v-.02c2.42-1.83 4-4.72 4-7.98 0-5.51-4.49-10-10-10M8.18 19.02C8.59 17.85 9.69 17 11 17h2c1.31 0 2.42.85 2.82 2.02-1.14.62-2.44.98-3.82.98s-2.69-.35-3.82-.98m9.3-1.21c-.81-1.66-2.51-2.82-4.48-2.82h-2c-1.97 0-3.66 1.16-4.48 2.82A7.96 7.96 0 0 1 4 11.99c0-4.41 3.59-8 8-8s8 3.59 8 8c0 2.29-.97 4.36-2.52 5.82"
                        }, void 0, false, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                            lineNumber: 175,
                            columnNumber: 138
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-full mt-2 w-56 rounded-xl border p-2 shadow-xl z-50",
                role: "menu",
                style: {
                    borderColor: theme === "dark" ? "#475569" : "#e5e7eb",
                    backgroundColor: theme === "dark" ? "var(--surface-overlay)" : "var(--surface-card)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        role: "menuitem",
                        onClick: ()=>{
                            setOpen(false);
                            setConfirmOpen(true);
                        },
                        className: "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-600 transition-colors",
                        onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = theme === "dark" ? "rgba(153, 27, 27, 0.3)" : "#fef2f2",
                        onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = "transparent",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "h-4 w-4",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this),
                            "Sign Out"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                        lineNumber: 188,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        role: "menuitem",
                        onClick: ()=>{
                            setOpen(false);
                            onOpenProfile("profile");
                        },
                        style: {
                            color: theme === "dark" ? "#cbd5e1" : "#374151"
                        },
                        className: "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                        onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = theme === "dark" ? "var(--surface-hover)" : "#f9fafb",
                        onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = "transparent",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "h-4 w-4",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                    lineNumber: 219,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this),
                            "View Profile"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                        lineNumber: 204,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                lineNumber: 180,
                columnNumber: 9
            }, this),
            confirmOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[70] flex items-center justify-center bg-black/50 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md rounded-2xl border p-6 shadow-2xl",
                    style: {
                        backgroundColor: theme === "dark" ? "#0f172a" : "#ffffff",
                        borderColor: theme === "dark" ? "var(--border-default)" : "var(--border-default)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-11 w-11 items-center justify-center rounded-full bg-red-100 text-red-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-5 w-5",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                            lineNumber: 239,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                        lineNumber: 238,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                    lineNumber: 237,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold",
                                            style: {
                                                color: theme === "dark" ? "#f8fafc" : "#111827"
                                            },
                                            children: "Sign out of your account?"
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                            lineNumber: 243,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm",
                                            style: {
                                                color: theme === "dark" ? "#cbd5e1" : "#6b7280"
                                            },
                                            children: "You’ll need to sign in again to continue using the dashboard."
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                            lineNumber: 246,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                    lineNumber: 242,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                            lineNumber: 236,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setConfirmOpen(false),
                                    className: "rounded-lg border px-4 py-2 text-sm font-semibold transition-colors",
                                    style: {
                                        borderColor: theme === "dark" ? "#475569" : "#e5e7eb",
                                        color: theme === "dark" ? "#e2e8f0" : "#374151",
                                        backgroundColor: theme === "dark" ? "var(--surface-overlay)" : "var(--surface-card)"
                                    },
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setConfirmOpen(false);
                                        onSignOut();
                                    },
                                    className: "rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700",
                                    children: "Sign Out"
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                    lineNumber: 265,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                            lineNumber: 252,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                    lineNumber: 229,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                lineNumber: 228,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
        lineNumber: 156,
        columnNumber: 5
    }, this);
}
_s1(ProfileMenu, "mPnYLOqUIJV5bT3nBbvezHLO/WM=");
_c1 = ProfileMenu;
function ProfileModal({ open, user, onClose, onSave }) {
    _s2();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: "",
        avatar: "",
        password: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileModal.useEffect": ()=>{
            if (open && user) {
                setFormData({
                    name: user.name || "",
                    email: user.email || "",
                    phone: user.phone || "",
                    avatar: user.avatar || "",
                    password: "",
                    confirmPassword: ""
                });
                setErrors({});
                setMessage("");
            }
        }
    }["ProfileModal.useEffect"], [
        open,
        user
    ]);
    if (!open) return null;
    const handleChange = (event)=>{
        const { name, value } = event.target;
        setFormData((current)=>({
                ...current,
                [name]: value
            }));
        setErrors((current)=>({
                ...current,
                [name]: ""
            }));
        setMessage("");
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        const nextErrors = {};
        if (!formData.name.trim()) nextErrors.name = "Name is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) nextErrors.email = "Enter a valid email";
        if (!formData.phone.trim()) nextErrors.phone = "Phone number is required";
        if (formData.password && formData.password.length < 8) nextErrors.password = "Password must be at least 8 characters";
        if (formData.password && formData.password !== formData.confirmPassword) nextErrors.confirmPassword = "Passwords do not match";
        if (Object.keys(nextErrors).length) {
            setErrors(nextErrors);
            return;
        }
        onSave({
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            avatar: formData.avatar.trim(),
            password: formData.password || undefined
        });
        setMessage("Profile updated successfully.");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4 py-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-2xl rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-b border-gray-200 dark:border-slate-700 px-6 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold text-gray-900 dark:text-white",
                                        children: "Profile Management"
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                        lineNumber: 350,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500 dark:text-slate-400",
                                        children: "Update your account details and security settings."
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                        lineNumber: 351,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                lineNumber: 349,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                className: "rounded-lg p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-5 w-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                        lineNumber: 355,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                    lineNumber: 354,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                lineNumber: 353,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                        lineNumber: 348,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                    lineNumber: 347,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-5 p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50/80 dark:bg-slate-800/80 p-4 sm:flex-row sm:items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-14 w-14 items-center justify-center rounded-full bg-[#1a5c2a] text-lg font-semibold text-white",
                                    children: (formData.name || user?.name || "U").split(" ").map((word)=>word[0]).join("").slice(0, 2).toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                    lineNumber: 363,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold text-gray-900 dark:text-white",
                                            children: user?.name || "Your name"
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                            lineNumber: 372,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 dark:text-slate-400",
                                            children: user?.email || "Your email"
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                            lineNumber: 373,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                    lineNumber: 371,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                            lineNumber: 362,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 md:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "mb-1.5 block text-sm font-medium text-gray-700 dark:text-slate-200",
                                            children: "Full name"
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                            lineNumber: 379,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            name: "name",
                                            value: formData.name,
                                            onChange: handleChange,
                                            className: "w-full rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm outline-none focus:border-[#1a5c2a]"
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                            lineNumber: 380,
                                            columnNumber: 15
                                        }, this),
                                        errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-xs text-red-500",
                                            children: errors.name
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                            lineNumber: 381,
                                            columnNumber: 31
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                    lineNumber: 378,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "mb-1.5 block text-sm font-medium text-gray-700 dark:text-slate-200",
                                            children: "Email address"
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                            lineNumber: 384,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            name: "email",
                                            type: "email",
                                            value: formData.email,
                                            onChange: handleChange,
                                            className: "w-full rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm outline-none focus:border-[#1a5c2a]"
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                            lineNumber: 385,
                                            columnNumber: 15
                                        }, this),
                                        errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-xs text-red-500",
                                            children: errors.email
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                            lineNumber: 386,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                    lineNumber: 383,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "mb-1.5 block text-sm font-medium text-gray-700 dark:text-slate-200",
                                            children: "Phone number"
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                            lineNumber: 389,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            name: "phone",
                                            value: formData.phone,
                                            onChange: handleChange,
                                            className: "w-full rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm outline-none focus:border-[#1a5c2a]"
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                            lineNumber: 390,
                                            columnNumber: 15
                                        }, this),
                                        errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-xs text-red-500",
                                            children: errors.phone
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                            lineNumber: 391,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                    lineNumber: 388,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "mb-1.5 block text-sm font-medium text-gray-700 dark:text-slate-200",
                                            children: "Avatar URL"
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                            lineNumber: 394,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            name: "avatar",
                                            value: formData.avatar,
                                            onChange: handleChange,
                                            placeholder: "https://...",
                                            className: "w-full rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm outline-none focus:border-[#1a5c2a]"
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                            lineNumber: 395,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                    lineNumber: 393,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                            lineNumber: 377,
                            columnNumber: 11
                        }, this),
                        message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-[#1a5c2a]",
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                            lineNumber: 401,
                            columnNumber: 23
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2 border-t border-gray-200 dark:border-slate-700 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "rounded-lg border border-gray-200 dark:border-slate-700 px-4 py-2 text-sm font-semibold text-gray-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                    lineNumber: 404,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "rounded-lg bg-[#1a5c2a] px-4 py-2 text-sm font-semibold text-white hover:bg-[#134520]",
                                    children: "Save changes"
                                }, void 0, false, {
                                    fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                    lineNumber: 407,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                            lineNumber: 403,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                    lineNumber: 361,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
            lineNumber: 346,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
        lineNumber: 345,
        columnNumber: 5
    }, this);
}
_s2(ProfileModal, "oQ/9M7LnLfiM0RoKPD5bguV/ALE=");
_c2 = ProfileModal;
function DashboardLayout({ children }) {
    _s3();
    const { user, loading, updateUser, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$authContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    const [profileModalOpen, setProfileModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [profileMode, setProfileMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("profile");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardLayout.useEffect": ()=>{
            if (!loading && !user) {
                router.push("/login");
            }
        }
    }["DashboardLayout.useEffect"], [
        user,
        loading,
        router
    ]);
    // Initialize theme from localStorage on mount, default to light
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardLayout.useEffect": ()=>{
            // Force light mode by default - clear any dark mode preference
            const storedTheme = window.localStorage.getItem(THEME_KEY);
            // Remove dark class immediately to prevent dark flicker
            document.documentElement.classList.remove("dark");
            document.documentElement.style.colorScheme = "light";
            document.documentElement.style.backgroundColor = "#ffffff";
            if (storedTheme === "dark") {
                setTheme("dark");
            } else {
                setTheme("light");
                // Clear localStorage to reset any bad state
                window.localStorage.removeItem(THEME_KEY);
            }
        }
    }["DashboardLayout.useEffect"], []);
    // Apply theme to document whenever it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardLayout.useEffect": ()=>{
            if (theme === "dark") {
                document.documentElement.classList.add("dark");
                document.documentElement.style.colorScheme = "dark";
            } else {
                document.documentElement.classList.remove("dark");
                document.documentElement.style.colorScheme = "light";
            }
            window.localStorage.setItem(THEME_KEY, theme);
        }
    }["DashboardLayout.useEffect"], [
        theme
    ]);
    const toggleTheme = ()=>{
        setTheme((current)=>current === "dark" ? "light" : "dark");
    };
    const handleOpenProfile = (mode)=>{
        setProfileMode(mode);
        setProfileModalOpen(true);
    };
    const handleSaveProfile = (values)=>{
        const updatePayload = {
            name: values.name,
            email: values.email,
            phone: values.phone,
            avatar: values.avatar || null
        };
        if (values.password) {
            updatePayload.password = values.password;
        }
        updateUser(updatePayload);
    };
    const handleSignOut = ()=>{
        logout();
        router.push("/login");
    };
    if (loading || !user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-screen items-center justify-center bg-white dark:bg-black",
            style: {
                backgroundColor: "#ffffff"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-7 h-7 rounded-full border-[3px] border-[#1a5c2a] border-t-transparent animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                        lineNumber: 497,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 font-medium",
                        children: "Authenticating..."
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                        lineNumber: 498,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                lineNumber: 496,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
            lineNumber: 492,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen overflow-hidden",
        style: {
            backgroundColor: theme === "dark" ? "var(--surface-page)" : "var(--surface-page)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$components$2f$Sidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                lineNumber: 509,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "h-14 flex items-center px-6 flex-shrink-0",
                        style: {
                            backgroundColor: theme === "dark" ? "var(--surface-header)" : "var(--surface-page)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full max-w-sm flex-shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2",
                                        fill: "none",
                                        stroke: "currentColor",
                                        style: {
                                            color: theme === "dark" ? "#94a3b8" : "#9ca3af"
                                        },
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                            lineNumber: 523,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                        lineNumber: 516,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search...",
                                        style: {
                                            backgroundColor: theme === "dark" ? "var(--surface-input)" : "var(--surface-input)",
                                            color: theme === "dark" ? "#e2e8f0" : "#111827"
                                        },
                                        className: "w-full pl-9 pr-4 py-2 border border-[var(--border-default)] focus:border-[#1a5c2a] focus:ring-0 focus:outline-none rounded-lg text-sm transition-all"
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                        lineNumber: 525,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                lineNumber: 515,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex justify-end items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: toggleTheme,
                                        "aria-label": "Toggle theme",
                                        style: {
                                            color: theme === "dark" ? "#94a3b8" : "#9ca3af"
                                        },
                                        className: "rounded-lg flex items-center justify-center h-8 w-8 transition-colors flex-shrink-0",
                                        onMouseEnter: (e)=>{
                                            if (theme === "dark") {
                                                e.currentTarget.style.backgroundColor = "rgba(51, 65, 85, 0.5)";
                                                e.currentTarget.style.color = "#cbd5e1";
                                            } else {
                                                e.currentTarget.style.backgroundColor = "rgba(243, 244, 246, 0.7)";
                                                e.currentTarget.style.color = "#6b7280";
                                            }
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.backgroundColor = "transparent";
                                            e.currentTarget.style.color = theme === "dark" ? "#94a3b8" : "#9ca3af";
                                        },
                                        children: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "h-5 w-5",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 17.01c2.76 0 5.01-2.25 5.01-5.01S14.76 6.99 12 6.99 6.99 9.24 6.99 12s2.25 5.01 5.01 5.01M12 9c1.66 0 3.01 1.35 3.01 3.01s-1.35 3.01-3.01 3.01-3.01-1.35-3.01-3.01S10.34 9 12 9m1 10h-2v3h2zm0-17h-2v3h2zM2 11h3v2H2zm17 0h3v2h-3zM4.22 18.36l.71.71.71.71 1.06-1.06 1.06-1.06-.71-.71-.71-.71-1.06 1.06zM19.78 5.64l-.71-.71-.71-.71-1.06 1.06-1.06 1.06.71.71.71.71 1.06-1.06zm-12.02.7L6.7 5.28 5.64 4.22l-.71.71-.71.71L5.28 6.7l1.06 1.06.71-.71zm8.48 11.32 1.06 1.06 1.06 1.06.71-.71.71-.71-1.06-1.06-1.06-1.06-.71.71z"
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                                lineNumber: 562,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                            lineNumber: 560,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "h-5 w-5",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M20.71 13.51c-.78.23-1.58.35-2.38.35-4.52 0-8.2-3.68-8.2-8.2 0-.8.12-1.6.35-2.38.11-.35.01-.74-.25-1s-.64-.36-1-.25A10.17 10.17 0 0 0 2 11.8C2 17.42 6.57 22 12.2 22c4.53 0 8.45-2.91 9.76-7.24.11-.35.01-.74-.25-1s-.64-.36-1-.25M12.2 20C7.68 20 4 16.32 4 11.8a8.15 8.15 0 0 1 4.18-7.15c-.03.34-.05.68-.05 1.02 0 5.62 4.57 10.2 10.2 10.2.34 0 .68-.02 1.02-.05C17.93 18.38 15.23 20 12.2 20M16 8l.94-2.06L19 5l-2.06-.94L16 2l-.94 2.06L13 5l2.06.94zm4.25-.5-.55 1.2-1.2.55 1.2.55.55 1.2.55-1.2 1.2-.55-1.2-.55z"
                                            }, void 0, false, {
                                                fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                                lineNumber: 567,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                            lineNumber: 565,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                        lineNumber: 537,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationBell, {
                                        theme: theme
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                        lineNumber: 571,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileMenu, {
                                        user: user,
                                        theme: theme,
                                        onOpenProfile: handleOpenProfile,
                                        onSignOut: handleSignOut
                                    }, void 0, false, {
                                        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                        lineNumber: 572,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                                lineNumber: 536,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                        lineNumber: 511,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 overflow-y-auto",
                        style: {
                            backgroundColor: theme === "dark" ? "var(--surface-page)" : "var(--surface-page)"
                        },
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                        lineNumber: 576,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                lineNumber: 510,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileModal, {
                open: profileModalOpen,
                user: user,
                onClose: ()=>setProfileModalOpen(false),
                onSave: (values)=>{
                    handleSaveProfile(values);
                    setProfileModalOpen(false);
                }
            }, void 0, false, {
                fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
                lineNumber: 584,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.migration-backup/src/app/dashboard/layout.jsx",
        lineNumber: 505,
        columnNumber: 5
    }, this);
}
_s3(DashboardLayout, "V9bIaxqfrjrWnPYd+1w5x5C2xa0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$migration$2d$backup$2f$src$2f$auth$2f$authContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c3 = DashboardLayout;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "NotificationBell");
__turbopack_context__.k.register(_c1, "ProfileMenu");
__turbopack_context__.k.register(_c2, "ProfileModal");
__turbopack_context__.k.register(_c3, "DashboardLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_migration-backup_src_08zqdct._.js.map