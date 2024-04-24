import { Suspense } from "react";
import DashboardCard from "@/app/ui/dashboard/card";
import { lusitana } from "@/app/ui/fonts";

export default function Page() {
  return (
    <>
      <h1 className={`${lusitana.className} text-lg`}>Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"></div>
      <DashboardCard />
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8 "></div>
    </>
  );
}
