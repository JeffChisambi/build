---
name: NASFAM GTMS Design System
description: Enforced design tokens and component patterns for the dashboard — reference before any UI work.
---

# NASFAM GTMS Dashboard Design Standard

## Brand Color
- **Correct:** `#1a5c2a` (NASFAM brand green)
- **Wrong (was in codebase):** `#1a5c2e` — fully purged, do not reintroduce

## Card / Panel Pattern
```
bg-white rounded-xl border border-gray-200 p-5
```
- `rounded-xl` always on panels (not `rounded-md`)
- `border border-gray-200` always (not `shadow-sm` alone)
- `p-5` standard card padding

## ModuleActionCard (interactive quick-action cards)
```
bg-white rounded-xl border border-gray-200 p-5
hover:-translate-y-0.5 hover:shadow-md
```
- Icon container: `w-9 h-9 rounded-lg bg-[#e8f1ea] text-[#1a5c2a]`

## Page Wrapper
```
p-6 space-y-8 max-w-[1400px] mx-auto
```

## Section Labels
```
text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4
```

## Primary Buttons
```
bg-[#1a5c2a] hover:bg-[#134520] text-white rounded-lg
```

## Secondary / Outline Buttons
```
border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50
```

## KPI Grid
```
grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4
```
Always `gap-4`, never `gap-6` on KPI grids.

## Activity / Feed Items
- Secondary detail text: `text-xs` (not `text-[10px]`)
- Timestamps: `text-xs`

## Dark Mode
- `--surface-card: #252525` (NOT transparent — was a bug, fixed)
- `--surface-page: #1a1a1a`
- All `bg-white` elements get dark override via CSS

## Progress / Horizontal Bars
- Track: `bg-gray-100 rounded-full h-2`
- Fill: `rounded-full` (not `rounded-sm`)

**Why:** Standardised in July 2026 to match admin dashboard as the reference. The IPC Manager and Warehouse Officer dashboards had diverged with different padding, shadow-vs-border card styles, a large header banner card, double padding wrappers, and wrong brand colour variants.
