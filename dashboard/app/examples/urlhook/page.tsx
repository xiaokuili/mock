"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParmas = useSearchParams();
  const headleSearch = (query) => {
    const params = new URLSearchParams(searchParmas);
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }
    replace(pathname + "?" + params.toString());
  };
  return (
    <>
      <div>1. 跳转基于params:{searchParmas.get("query")} </div>
      <div>2. input绑定到parmas </div>
      <input
        type="email"
        name="email"
        id="email"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue={searchParmas.get("query")}
        onChange={(e) => {
          headleSearch(e.target.value);
        }}
      />
    </>
  );
}
