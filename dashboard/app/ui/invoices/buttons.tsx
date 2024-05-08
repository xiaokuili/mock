"use client";

import { PlusIcon } from "@heroicons/react/20/solid";

import { PencilIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";
import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";
import { deleteInvoice } from "@/app/lib/actions";
import clsx from "clsx";

export function EditButton({ id }: { id: string }) {
  return (
    <>
      <Link
        href={`/dashboard/invoices/${id}/edit`}
        className="rounded  p-2 text-gray-900   shadow-sm border hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  justify-center items-center"
      >
        <PencilIcon className="h-5 w-5" aria-hidden="true" />
      </Link>
    </>
  );
}

const DeleteSubmit = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className={clsx("rounded-md", "border", "p-2", "hover:bg-gray-100", {
        "animate-spin": pending,
      })}
    >
      <span className="sr-only">Delete</span>

      <TrashIcon className="w-5" />
    </button>
  );
};

export function DeleteButton({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  return (
    <form action={deleteInvoiceWithId}>
      <DeleteSubmit />
    </form>
  );
}

const IsActive = () => {
  return (
    <>
      <div className="inline-flex items-center gap-x-1.5 rounded-full font-light bg-green-500 px-1 py-0.5 text-xs  text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
        Paid
        <CheckCircleIcon className=" h-4 w-4" aria-hidden="true" />
      </div>
    </>
  );
};

const IsPending = () => {
  return (
    <>
      <div className="inline-flex items-center gap-x-1.5 rounded-full font-light bg-gray-100 text-gray-500 px-1 py-0.5 text-xs  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
        Pending
        <ClockIcon className="h-4 w-4" aria-hidden="true" />
      </div>
    </>
  );
};

export { IsActive, IsPending };
