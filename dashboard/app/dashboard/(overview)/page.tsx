import { Suspense } from "react";
import DashboardCard from "@/app/ui/dashboard/card";
import { lusitana } from "@/app/ui/fonts";
import Revenue from "@/app/ui/dashboard/revenue";
import Invoices from "@/app/ui/dashboard/invoices";

export default function Page() {
  return (
    <>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<>loadding...</>}>
          <DashboardCard />
        </Suspense>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Revenue />
        <Invoices />
      </div>
    </>
  );
}
