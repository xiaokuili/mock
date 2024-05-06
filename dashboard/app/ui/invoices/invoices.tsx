import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { fetchFilteredInvoices } from "@/app/lib/data";

const people = [
  {
    name: "Lindsay Walton",
    email: "lenglengzailuguan@gmail.com",
    amount: "$89.45",
    date: "Oct 4, 2023",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    email: "lenglengzailuguan@gmail.com",
    amount: "$89.45",
    date: "Oct 4, 2023",
    status: "Pending",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    email: "lenglengzailuguan@gmail.com",
    amount: "$89.45",
    date: "Oct 4, 2023",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    email: "lenglengzailuguan@gmail.com",
    amount: "$89.45",
    date: "Oct 4, 2023",
    status: "Pending",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    email: "lenglengzailuguan@gmail.com",
    amount: "$89.45",
    date: "Oct 4, 2023",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const EditButton = () => {
  return (
    <>
      <div className="rounded  p-2 text-gray-900   shadow-sm border hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  justify-center items-center">
        <PencilIcon className="h-5 w-5" aria-hidden="true" />
      </div>
    </>
  );
};
const DeleteButton = () => {
  return (
    <>
      <div className="rounded  p-2  text-gray-900    shadow-sm border hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 justify-center items-center">
        <TrashIcon className="h-5 w-5" aria-hidden="true" />
      </div>
    </>
  );
};

const isActive = () => {
  return (
    <>
      <div className="inline-flex items-center gap-x-1.5 rounded-full font-light bg-green-500 px-1 py-0.5 text-xs  text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
        Paid
        <CheckCircleIcon className=" h-4 w-4" aria-hidden="true" />
      </div>
    </>
  );
};

const isPending = () => {
  return (
    <>
      <div className="inline-flex items-center gap-x-1.5 rounded-full font-light bg-gray-100 text-gray-500 px-1 py-0.5 text-xs  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
        Pending
        <ClockIcon className="h-4 w-4" aria-hidden="true" />
      </div>
    </>
  );
};

export default async function InvoiceList({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);
  return (
    <div className="mt-8 px-4 sm:px-6 lg:px-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Customer
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Status
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span className="sr-only">Edit</span>
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span className="sr-only">Delete</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {invoices.map((data) => (
                <tr key={data.id}>
                  <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                    <div className="flex items-center">
                      <div className="h-8 w-8 flex-shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src={data.image_url}
                          alt=""
                        />
                      </div>
                      <div className="ml-2">
                        <div className=" text-gray-900">{data.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <div className="text-gray-900">{data.email}</div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <div className="text-gray-900">{data.amount}</div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <div className="text-gray-900">
                      {data.date.toLocaleString()}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    {data.status === "paid" ? isActive() : isPending()}
                  </td>
                  <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <div className="flex gap-2">
                      <EditButton />

                      <DeleteButton />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
