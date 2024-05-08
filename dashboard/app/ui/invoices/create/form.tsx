"use client";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { IsActive, IsPending } from "@/app/ui/invoices/buttons";
import Link from "next/link";
import { createInvoice } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import { InvoiceForm } from "@/app/lib/definitions";

const Form = ({ customers, invoice }: { invoice: InvoiceForm }) => {
  const initState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createInvoice, initState);
  const getCustomerName = (id: string) => {
    return customers.find((customer) => customer.id === id)?.name;
  };

  return (
    <form action={dispatch}>
      {state.message && (
        <div className="rounded-md bg-yellow-50 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <ExclamationTriangleIcon
                className="h-5 w-5 text-yellow-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Database Error
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>{state.message}</p>
                <p>{state.errors}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-6 md:gap-4">
        <div>
          <label
            htmlFor="customerId"
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
              id="customer"
              name="customerId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={"" && invoice?.customer_id}
              aria-describedby="customer-error"
            >
              {invoice?.customer_id ? (
                <option key={invoice?.customer_id} value={invoice?.customer_id}>
                  {getCustomerName(invoice?.customer_id)}
                </option>
              ) : (
                <>
                  <option value="" disabled>
                    Select a customer
                  </option>
                  {customers &&
                    customers.map((customer) => (
                      <option key={customer.id} value={customer.id}>
                        {customer.name}
                      </option>
                    ))}
                </>
              )}
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="amount"
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
            <input
              id="amount"
              name="amount"
              type="number"
              defaultValue={"input amount" && invoice?.amount}
              step="0.01"
              placeholder="Enter USD amount"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="amount-error"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Set the invoice status
          </label>
          <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0 border p-4 mt-2 rounded-md">
            <div className="flex items-center" key="paid">
              <input
                id="paid"
                name="status"
                type="radio"
                defaultChecked={invoice?.status == "paid"}
                value="paid"
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
                name="status"
                defaultChecked={invoice?.status == "pending"}
                type="radio"
                value="pending"
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
          <Link
            href="/dashboard/invoices"
            className="rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-600 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create Invoice
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
