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
      <div className="flex justify-between flew-row md:flex-col grow ">
        <Nav />

        <div className="hidden grow md:block"></div>
        <form
          action={async (formData) => {
            "use server";
            await signOut();
          }}
        >
          <Button
            variant="ghost"
            className="w-full rounded-md flex justify-start py-5 items-center hover:bg-blue-100 mt-1 bg-gray-100"
          >
            <PowerIcon className="h-4 w-4" />
            <span className="text-base pl-2">Sign Out</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
