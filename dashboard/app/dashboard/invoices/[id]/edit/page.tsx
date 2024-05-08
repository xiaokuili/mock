import { fetchInvoiceById, fetchCustomers } from "@/app/lib/data";
import Form from "@/app/ui/invoices/create/form";
import Breadcrumbs from "@/app/ui/invoices/create/breadcrumbs";

export default async function Page({ params }: { params: { id: string } }) {
  const invoice = await fetchInvoiceById(params.id);
  const customers = await fetchCustomers();

  return (
    <>
      <Breadcrumbs />
      <div className="p-8 mt-6">
        <Form invoice={invoice} customers={customers} />
      </div>
    </>
  );
}
