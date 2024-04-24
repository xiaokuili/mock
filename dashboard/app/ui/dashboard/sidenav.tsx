import { signOut } from "@/auth";
import AcmeLogo from "@/app/ui/acme-logo";
import { Button } from "@/components/ui/button";
import { PowerIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import Nav from "./nav";

export default function SideNav() {
  return (
    <div
      className={`h-screen flex flex-col  ml-2 justify-between ${lusitana.className}`}
    >
      <div className="flex flex-col">
        <div className=" bg-blue-500 rounded-md relative h-40 mt-2 text-white flex items-end">
          <AcmeLogo />
        </div>
        <div className="mt-2">
          <Nav />
        </div>
      </div>
      <div className="flex w-full">
        <Button
          variant="ghost"
          className="w-full  rounded-md flex  py-5 justify-start  items-center hover:bg-blue-100"
        >
          <PowerIcon className="h-4 w-4" />
          <span className="text-base pl-2">Sign Out</span>
        </Button>
      </div>
    </div>
  );
}
