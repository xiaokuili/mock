import clsx from "clsx";

import { fetchCustomers } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/invoices/create/breadcrumbs";
import InvoiceForm from "@/app/ui/invoices/create/form";

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <>
      <Breadcrumbs />
      <div className="p-8 mt-6">
        <InvoiceForm customers={customers} />
      </div>
    </>
  );
}
