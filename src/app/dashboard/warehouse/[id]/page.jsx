"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useMemo } from "react";
import WorkspaceLayout from "@/components/WorkspaceLayout";
import { SEED_PURCHASES } from "@/lib/mockPurchases";

const ICON = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

function SectionCard({ title, children, action }) {
  return (
    <div className="bg-white rounded-md border border-gray-200 overflow-hidden mb-6">
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">{title}</h2>
        {action && <div>{action}</div>}
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}

function DataRow({ label, value, colSpan = 1 }) {
  return (
    <div className={`col-span-${colSpan} flex flex-col gap-1`}>
      <span className="text-xs font-semibold text-gray-500">{label}</span>
      <span className="text-sm font-medium text-gray-900">{value || "—"}</span>
    </div>
  );
}

function StatusBadge({ status }) {
  const colors = {
    "Stored": "bg-green-50 text-green-700 border border-green-100",
    "In Transit": "bg-indigo-50 text-indigo-700 border border-indigo-100",
    "Dispatched": "bg-amber-50 text-amber-700 border border-amber-100",
    "Active": "bg-blue-50 text-blue-700 border border-blue-100",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${colors[status] || "bg-gray-100 text-gray-600"}`}>
      {status}
    </span>
  );
}

export default function WarehouseDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const record = useMemo(() => {
    const purchase = SEED_PURCHASES.find(p => p.id === id);
    if (!purchase || !purchase.warehouse) return null;
    return {
      id: purchase.id,
      warehouseName: purchase.warehouse.name,
      warehouseCode: purchase.grn?.warehouseCode || "WH-LLW-001",
      location: purchase.warehouse.location,
      commodity: purchase.commodity,
      grade: purchase.grade,
      variety: purchase.variety,
      moistureContent: purchase.moistureContent,
      bags: purchase.numberOfBags,
      weight: purchase.totalWeight,
      bin: purchase.warehouse.bin,
      stack: purchase.warehouse.stack,
      shelf: purchase.warehouse.shelf,
      storageCondition: purchase.warehouse.storageCondition,
      status: purchase.warehouse.currentStockStatus || "Stored",
      batchNumber: purchase.batch?.batchNumber || "BCH-2024-XXXX",
      batchStatus: purchase.batch?.batchStatus || "Active",
      batchCreationDate: purchase.batch?.batchCreationDate || purchase.purchaseDate,
      grnNumber: purchase.grn?.grnNumber || "GRN-2024-XXXX",
      receivingOfficer: purchase.grn?.receivingOfficer || "Officer",
      receivingDate: purchase.grn?.receivingDate || purchase.purchaseDate,
      farmerId: purchase.farmerId,
      farmerName: purchase.farmerName,
      purchaseDate: purchase.purchaseDate,
    };
  }, [id]);

  if (!record) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <h2 className="text-2xl font-bold text-gray-900">Inventory Record Not Found</h2>
        <p className="text-gray-500 mt-2">The record ID {id} does not exist in the warehouse system.</p>
        <button onClick={() => router.push("/dashboard/warehouse")} className="mt-6 px-4 py-2 bg-[#1a5c2a] text-white rounded-lg hover:bg-[#134520]">
          Back to Warehouse
        </button>
      </div>
    );
  }

  return (
    <WorkspaceLayout
      icon={ICON}
      module="Warehouse"
      moduleHref="/dashboard/warehouse"
      title="Warehouse Stock Details"
      description={`Inventory & batch tracking details for ${record.batchNumber}`}
      tabs={[]}
      hideTitleBlock={true}
      hideHeader={true}
    >
      <div className="space-y-6 p-6 max-w-5xl mx-auto pb-12">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-2">
          <Link href="/dashboard/warehouse" className="hover:text-gray-900 transition-colors">Warehouse</Link>
          <span>/</span>
          <span className="text-gray-900">{record.batchNumber}</span>
        </div>

        {/* PROFILE/HEADER CARD */}
        <div className="bg-white rounded-md border border-gray-200 overflow-hidden flex flex-col md:flex-row relative">
          <div className="p-8 flex flex-col md:flex-row items-center md:items-start gap-6 flex-1 bg-gradient-to-br from-white to-gray-50/50">
            <div className="w-16 h-16 rounded-full bg-gray-100 border border-gray-200 shadow-sm flex flex-shrink-0 items-center justify-center text-gray-600">
              {ICON}
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{record.warehouseName}</h1>
                <StatusBadge status={record.status} />
              </div>
              <p className="text-sm font-mono font-medium text-gray-500 mb-2">{record.location}</p>
              <p className="text-xs text-gray-400">Received on {record.receivingDate} by {record.receivingOfficer}</p>
            </div>
          </div>
          <div className="border-t md:border-t-0 md:border-l border-gray-100 bg-white p-6 flex flex-col justify-center gap-2 md:min-w-[280px]">
            <button className="w-full flex justify-center items-center gap-2 px-4 py-2 bg-[#1a5c2a] text-white text-sm font-semibold rounded-lg hover:bg-[#134520] transition-colors shadow-sm">
              Print Inventory Label
            </button>
            <button className="w-full flex justify-center items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-200 transition-colors border border-gray-200">
              Transfer Stock
            </button>
          </div>
        </div>

        {/* DETAILS SECTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SectionCard title="1. Stock & Commodity Details">
            <div className="grid grid-cols-2 gap-6">
              <DataRow label="Commodity" value={record.commodity} />
              <DataRow label="Variety" value={record.variety} />
              <DataRow label="Grade" value={record.grade} />
              <DataRow label="Moisture Content" value={record.moistureContent} />
              <DataRow label="Total Bags" value={`${record.bags} bags`} />
              <DataRow label="Total Net Weight" value={`${record.weight} kg`} />
            </div>
          </SectionCard>

          <SectionCard title="2. Storage Location Info">
            <div className="grid grid-cols-2 gap-6">
              <DataRow label="Warehouse Code" value={record.warehouseCode} />
              <DataRow label="Storage Bin" value={record.bin} />
              <DataRow label="Stack Location" value={record.stack} />
              <DataRow label="Shelf Level" value={record.shelf} />
              <DataRow label="Storage Condition" value={record.storageCondition} colSpan={2} />
            </div>
          </SectionCard>

          <SectionCard title="3. Batch & GRN Tracking">
            <div className="grid grid-cols-2 gap-6">
              <DataRow label="Batch Number" value={record.batchNumber} />
              <DataRow label="Batch Status" value={record.batchStatus} />
              <DataRow label="Batch Creation Date" value={record.batchCreationDate} />
              <DataRow label="GRN Number" value={record.grnNumber} />
              <DataRow label="Receiving Officer" value={record.receivingOfficer} />
              <DataRow label="Receiving Date" value={record.receivingDate} />
            </div>
          </SectionCard>

          <SectionCard title="4. Source Traceability">
            <div className="grid grid-cols-2 gap-6">
              <DataRow label="Farmer ID" value={record.farmerId} />
              <DataRow label="Farmer Name" value={record.farmerName} />
              <DataRow label="Purchase Record ID" value={record.id} />
              <DataRow label="Purchase Date" value={record.purchaseDate} />
              <div className="col-span-2 mt-2">
                <Link
                  href={`/dashboard/farmers/profiles/${record.farmerId}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#1a5c2a] hover:underline"
                >
                  View Farmer Profile
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.853L21 12m0 0l-7.5 7.147M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </SectionCard>
        </div>
      </div>
    </WorkspaceLayout>
  );
}
