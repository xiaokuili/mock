"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { lusitana } from "@/app/ui/fonts";

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

export default Breadcrumbs;
