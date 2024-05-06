import SideNav from "@/app/ui/dashboard/sidenav";
import { lusitana } from "@/app/ui/fonts";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Search from "@/app/ui/invoices/search";
import { CreateButton } from "@/app/ui/invoices/buttons";
import InvoiceList from "@/app/ui/invoices/invoices";
import Pagination from "@/app/ui/invoices/pagination";
import { fetchInvoicesPages } from "@/app/lib/data";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const currentPage = searchParams?.page ? parseInt(searchParams.page) : 1;
  const query = searchParams?.query || "";

  const totalPages = (await fetchInvoicesPages(query)) || 1;

  return (
    <div className="h-screen flex flex-col ">
      <h1 className={`${lusitana.className} text-xl font-medium md:text-2xl`}>
        Invoices
      </h1>
      <Search />

      <InvoiceList query={query} currentPage={currentPage} />

      <div className="m-auto mt-8">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
