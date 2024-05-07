import { PlusIcon } from "@heroicons/react/20/solid";

import { PencilIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";

export function CreateButton() {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
    >
      Create Invoices
      <PlusIcon className="-mr-0.5 h-6 w-6" aria-hidden="true" />
    </button>
  );
}

export function EditButton() {
  return (
    <>
      <div className="rounded  p-2 text-gray-900   shadow-sm border hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  justify-center items-center">
        <PencilIcon className="h-5 w-5" aria-hidden="true" />
      </div>
    </>
  );
}

export function DeleteButton() {
  return (
    <>
      <div className="rounded  p-2  text-gray-900    shadow-sm border hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 justify-center items-center">
        <TrashIcon className="h-5 w-5" aria-hidden="true" />
      </div>
    </>
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
