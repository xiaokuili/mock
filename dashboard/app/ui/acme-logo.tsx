import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "./fonts";
export default function AcmeLogo() {
  return (
    <div className={`flex items-center ${lusitana.className}`}>
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px] ">Acme</p>
    </div>
  );
}
