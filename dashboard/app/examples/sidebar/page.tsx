import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import AcmeLogo from "@/app/ui/acme-logo";
import { PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from "@/auth";

import { title } from "process";

const descript = `
1. 外层grow会占据内部grwo
2. 组件其实还是dom元素，只不过放在一起了，所以父亲flex会影响儿子布局`;

export default function Page() {
  return (
    <div className="flex flex-col h-screen md:flex-row overflow-y-hidden">
      <div className="w-full md:w-64 border">
        <SideNav />
      </div>
      <div className="grow overflow-y-auto border">
        <div className="h-96">content</div>
        <div className="h-96">content</div>
        <div className="h-96">content</div>
        <div className="h-96">content</div>
      </div>
    </div>
  );
}

function SideNav() {
  return (
    <div className="flex flex-col h-full">
      <div>logo</div>
      <div className="grow flex flex-row md:flex-col justify-between">
        <Nav></Nav>
        <div className="hidden grow md:block"></div>
        <div>login out </div>
      </div>
    </div>
  );
}

function Nav() {
  const navs = [
    { title: "Home", href: "/dashboard" },
    { title: "Invoices", href: "/dashboard/invoices" },
    { title: "Customers", href: "/dashboard/customers" },
  ];
  return navs.map((nav) => (
    <Link key={nav.title} href={nav.href}>
      {nav.title}
    </Link>
  ));
}
