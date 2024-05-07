"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { PlusIcon } from "@heroicons/react/20/solid";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import Link from "next/link";

export default function Search() {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const basePath = usePathname();

  const handleSearch = useDebouncedCallback((query) => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }
    replace(basePath + "?" + params.toString());
  }, 300);

  return (
    <div className="mt-4 flex flex-row items-center justify-between gap-2 md:mt-8 text-2xl w-full">
      <div className="grow">
        <div className="relative w-full rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search invoices..."
            className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={searchParams.get("query") || ""}
          />
        </div>
      </div>
      <Link
        href="/dashboard/invoices/create"
        className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
      >
        Create Invoices
        <PlusIcon className="-mr-0.5 h-6 w-6" aria-hidden="true" />
      </Link>
    </div>
  );
}
