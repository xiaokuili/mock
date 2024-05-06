import { signOut } from "@/auth";
import AcmeLogo from "@/app/ui/acme-logo";
import { Button } from "@/components/ui/button";
import { PowerIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import Nav from "./nav";

export default function SideNav() {
  return (
    <div className={`flex flex-col h-full ml-2  ${lusitana.className}`}>
      <div className=" bg-blue-500 rounded-md relative h-40 mt-2 text-white flex items-end">
        <AcmeLogo />
      </div>
      <div className="flex justify-between flew-row md:flex-col grow gap-2 mt-2">
        <Nav />

        <div className="hidden grow md:block"></div>
        <form
          action={async (formData) => {
            "use server";
            await signOut();
          }}
        >
          <div className="flex grow items-center justify-center p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-500 rounded-md md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <span className="text-base pl-2 hidden md:block">Sign Out</span>
          </div>
        </form>
      </div>
    </div>
  );
}
