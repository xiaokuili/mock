import Image from "next/image";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

import AcmeLogo from "@/app/ui/acme-logo";
import hero_desktop from "../public/hero-desktop.png";
import hero_mobile from "../public/hero-mobile.png";
import Link from "next/link";
import { lusitana } from "./ui/fonts";
import clsx from "clsx";

export default function Home() {
  return (
    <main className="h-full">
      <div className="sm:h-52 h-20 m-6 bg-blue-600 rounded-md text-white flex flex-col justify-end">
        <div className="p-4">
          <AcmeLogo />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center ">
        <div className="flex w-full sm:w-1/2 flex-col px-8 sm:px-40 space-y-8">
          <p
            className={clsx(
              "text-sm",
              "sm:text-3xl",
              "leading-normal",

              lusitana.className
            )}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{" "}
            <Link className="text-blue-500" href="/">
              Next.js Learn Course
            </Link>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span>
            <ArrowRightIcon className="h-6 w-6" />
          </Link>
        </div>
        <div className="flex  sm:flex-1">
          <Image
            src={hero_desktop}
            alt="hero_desktop"
            className="hidden md:block"
          />
          <Image
            src={hero_mobile}
            alt="hero_mobile"
            className="block md:hidden"
          />
        </div>
      </div>
    </main>
  );
}
