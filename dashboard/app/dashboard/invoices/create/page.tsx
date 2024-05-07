"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { lusitana } from "@/app/ui/fonts";
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { IsActive, IsPending } from "@/app/ui/invoices/buttons";

const Breadcrumbs = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-row gap-2 ">
      <Link
        href="/dashboard/invoices"
        className={clsx("text-2xl", "text-gray-500", lusitana.className, {
          "text-gray-900": pathname === "/dashboard/invoices",
        })}
        aria-current={pathname === "/dashboard/invoices" ? "page" : undefined}
      >
        Invoices
      </Link>

      <svg
        className="h-8 w-6 flex-shrink-0 text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
      </svg>

      <Link
        href="/dashboard/invoices/create"
        className={clsx("text-2xl", "text-gray-500", lusitana.className, {
          "text-gray-900": pathname === "/dashboard/invoices/create",
        })}
        aria-current={pathname === "/dashboard/invoices" ? "page" : undefined}
      >
        Create Invoice
      </Link>
    </div>
  );
};

const InvoiceForm = () => {
  return (
    <form>
      <div className="flex flex-col gap-6 md:gap-4">
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Choose customer
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <UserCircleIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <select
              id="location"
              name="location"
              className=" pl-10 block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue="Amy Burn"
            >
              <option>Amy Burn</option>
              <option>Balazs Orban</option>
              <option>Delba de Oliveira</option>
              <option>Emi Kowalski</option>
              <option>Evil Rabbit</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Choose an amount
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <CurrencyDollarIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <select
              id="location"
              name="location"
              className=" pl-10 block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue="1"
            >
              <option>1</option>
              <option>7</option>
              <option>100</option>
              <option>30</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Set the invoice status
          </label>
          <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0 border p-4 mt-2 rounded-md">
            <div className="flex items-center" key="paid">
              <input
                id="paid"
                name="notification-method"
                type="radio"
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
              />
              <label
                htmlFor="paid"
                className="ml-3 block text-sm font-medium leading-6 text-gray-900"
              >
                <IsActive />
              </label>
            </div>

            <div className="flex items-center" key="pending">
              <input
                id="pending"
                name="notification-method"
                type="radio"
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
              />
              <label
                htmlFor="pending"
                className="ml-3 block text-sm font-medium leading-6 text-gray-900"
              >
                <IsPending />
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-4 justify-end">
          <button
            type="button"
            className="rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-600 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300"
          >
            Cancel
          </button>
          <button
            type="button"
            className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create Invoice
          </button>
        </div>
      </div>
    </form>
  );
};

export default function Page() {
  return (
    <>
      <Breadcrumbs />
      <div className="p-8 mt-6">
        <InvoiceForm />
      </div>
    </>
  );
}
