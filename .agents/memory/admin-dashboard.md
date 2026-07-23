---
name: Admin Dashboard Completeness
description: What is implemented and wired in each admin sub-module; prevents re-doing work or leaving gaps.
---

All admin pages under `src/app/dashboard/admin/` are fully functional on the frontend (mock data, localStorage persistence).

## What is wired per module

**Admin Home (`page.jsx`):** Module card grid renders all 7 sub-modules as clickable navigation cards. Metric widgets and revenue chart are interactive.

**Users (`users/page.jsx`):** localStorage-backed user list (falls back to SEED_USERS). Add User modal with full form + validation. Edit User via 3-dot menu. Activate/Deactivate toggle (admin user usr-001 is protected). Farmer list is read-only with search. Search bar filters both views.

**Roles (`roles/page.jsx`):** Create custom role modal, duplicate, toggle status, delete (custom only), reset to defaults. All wired to `useRBAC()` context.

**Warehouse Management (`warehouse-management/page.jsx`):** Search bar (was missing, now added). Add Warehouse modal, Edit (3-dot → Edit), Activate/Deactivate toggle. Toast feedback on all mutations.

**IPC Management (`ipc-management/page.jsx`):** Add IPC modal (3-dot menu added per row). Edit IPC (pre-fills form, IPC code is read-only on edit). Activate/Deactivate toggle. Toast feedback.

**Sync Management (`sync-management/page.jsx`):** Trigger Manual Sync button with 2.5s spinner animation and success state. Device filter tabs (All / Synced / Failed). Device cards and sync history table.

**Audit Logs (`audit-logs/page.jsx`):** Export Excel (downloads .xls via Blob), Print Report (opens print dialog). Log-type and action dropdowns filter the table.

**Settings (`settings/page.jsx`):** Change Password section with current/new/confirm fields, show/hide toggle, validation, and saves via `updateUser()` from authContext. All notification toggles, security selects, SMTP text inputs wired to state. Save Settings shows success banner + toast. Reset to Defaults prompts confirmation then resets all state to constants.

**Why:** Admin is the sovereign user — every visible control must do something real, even in a mock-data frontend.
