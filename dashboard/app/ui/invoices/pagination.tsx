"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useSearchParams, usePathname } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const generatePages = ({ totalPages, currentPage: number }) => {
    let pages = [];
    pages.push({ text: "previous", href: generateLink(currentPage - 1) });

    for (
      let i = 1;
      i <= (totalPages > currentPage ? totalPages : currentPage);
      i++
    ) {
      if (i == currentPage) {
        pages.push({ text: i, href: generateLink(i), click: true });
      } else {
        pages.push({ text: i, href: generateLink(i), click: false });
      }
    }
    pages.push({ text: "next", href: generateLink(currentPage + 1) });

    return pages;
  };

  const generateLink = (page: number) => {
    const params = new URLSearchParams(searchParams);
    if (page) {
      params.set("page", page);
    } else {
      params.delete(page);
    }
    return `${pathname}?${params.toString()}`;
  };
  return (
    <div className="flex items-center justify-between  border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          {generatePages({ totalPages, currentPage }).map((page) =>
            page.text === "previous" ? (
              <a
                key={page.text} // 添加一个唯一的key属性
                href={page.href}
                aria-current="page"
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </a>
            ) : page.text === "next" ? (
              <a
                key={page.text} // 添加一个唯一的key属性
                href={page.href}
                aria-current="page"
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </a>
            ) : page.click ? (
              <a
                key={page.text} // 添加一个唯一的key属性
                href={page.href}
                aria-current="page"
                className="relative z-10 inline-flex items-center bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {page.text}
              </a>
            ) : (
              <a
                key={page.text} // 添加一个唯一的key属性
                href={page.href}
                aria-current="page"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                {page.text}
              </a>
            )
          )}
        </nav>
      </div>
    </div>
  );
}
