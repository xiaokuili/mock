import { ArrowPathIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { lusitana } from "@/app/ui/fonts";
import { fetchLatestInvoices } from "@/app/lib/data";
import Image from "next/image";

export default async function Invoices() {
  const latestInvoices = await fetchLatestInvoices();
  console.log(latestInvoices);

  return (
    <div className="flex w-full flex-col ">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Latest Invoices
      </h2>
      <div className="flex flex-col">
        {latestInvoices.map((invoice, i) => (
          <div
            key={invoice.id}
            className={clsx("flex flex-row items-center justify-between py-4", {
              "border-t": i !== 0,
            })}
          >
            <Image
              src={invoice.image_url}
              alt={`${invoice.name}'s profile picture`}
              className="mr-4 rounded-full"
              width={32}
              height={32}
            />
            <div>
              <p className="font-medium">{invoice.name}</p>
              <p className="text-gray-400">{invoice.email}</p>
            </div>
            <div className="grow"></div>
            <div>{invoice.amount} </div>
          </div>
        ))}

        <div className="flex text-gray-400 items-center mt-6">
          <ArrowPathIcon className="w-5 h-5"></ArrowPathIcon>
          <p className="ml-2">Updated just now</p>
        </div>
      </div>
    </div>
  );
}
