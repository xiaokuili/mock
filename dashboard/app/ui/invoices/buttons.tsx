import { PlusIcon } from "@heroicons/react/20/solid";

export default function CreateButton() {
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
