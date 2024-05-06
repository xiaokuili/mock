import { PlusIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
function Search({ placeholder }: { placeholder: string }) {
  return (
    <>
      <div className="relative grow rounded-md shadow-sm ">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          placeholder="you@example.com"
        />
      </div>
    </>
  );
}
export default function Page() {
  return (
    <div className="flex  gap-2 items-center justify-between mt-6">
      <Search />
      <button
        type="button"
        className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <CheckCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
        Button text
      </button>
    </div>
  );
}
