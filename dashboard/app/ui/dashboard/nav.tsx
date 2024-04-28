"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { HomeIcon } from "@heroicons/react/24/outline";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: ClipboardDocumentListIcon,
  },
  {
    name: "Customers",
    href: "/dashboard/customers",
    icon: PencilIcon,
  },
];
export default function Nav() {
  const pathname = usePathname();

  return links.map((link, index) => (
    <Link key={index} href={link.href}>
      <Button
        variant="ghost"
        className={clsx(
          "w-full rounded-md flex justify-start py-5 items-center hover:bg-blue-100 mt-1 bg-gray-100",
          {
            "bg-blue-100 text-blue-500": link.href === pathname,
          }
        )}
      >
        {link.icon && <link.icon className="h-4 w-4" />}
        <span className="text-base pl-1">{link.name}</span>
      </Button>
    </Link>
  ));
}
