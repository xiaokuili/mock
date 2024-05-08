import { FormDescription } from "@/components/ui/form";
import Link from "next/link";
import Markdown from "react-markdown";

let examples = [
  {
    id: 1,
    question: "如何搞定展示问题，如何创建一个导航栏和内容页面?",
    description: `
    1. 自适应pc和移动
    2. 导航栏固定不随着内容滚动二滚动
    `,
    url: "/app_sc",
  },
  {
    id: 2,
    question: "如何搞定展示问题，如何创建自适应导航栏？",
    description: `
    1. 导航栏竖直的时候，logout在最下方，学习通过grow占据空间
    2. 移动端适配，nav和logou在一行
    3. grow是可以套grow的
    `,
    url: "/sidebar",
  },
  {
    id: 3,
    question: "如何搞定展示问题，如何创建自适应卡片布局",
    description: `
    1. 多个card怎么排列
    `,
    url: "/cards",
  },
  {
    id: 4,
    question: "如何搞定展示问题，如何创建一个好看的卡片",
    description: `
    1. 学习具体组件应该怎么写
    `,
    url: "/card",
  },
  {
    id: 5,
    question: "如何创建一个带有icon的button",
    description: `
    1. 使用tailwindcss
    
    `,
    url: "/button",
  },
  {
    id: 6,
    question: "如何使用usePathname和useRouter和useSearchParams接口?",
    description: `
    1. usePathname： let you read the current URL's pathname. /dashboard/invoices -> '/dashboard/invoices'
    2. useRouter: route the client components
    3. useSearchParams: /dashboard/invoices?page=1&query=pending -> {page: 1, query: 'pending'}
    4. useSearchParams: 获取参数 ,usePathname：获取当前url, useRouter：处理页面跳转
    5. 前端会主动回去参数，提交到后端渲染
    export default function Page({
      searchParams,
    }: {
      searchParams?: {
        query?: string;
        page?: string;
      };
    })
    `,
    url: "/urlhook",
  },
  {
    id: 7,
    question: "如何防抖动?",
    description: `
    1. import { useDebouncedCallback } from 'use-debounce';

    2. 
    const handleSearch = useDebouncedCallback((term) => {
      const params = new URLSearchParams(searchParams);
      params.set('page', '1');
      if (term) {
        params.set('query', term);
      } else {
        params.delete('query');
      }
      
    }, 300);
    3. 短时间只执行一次行为， input可以设置
    `,
    url: "/debounced",
  },
  {
    id: 8,
    question: "如何执行loading和Suspense，来实现loading操作?",
    description: `
    1. suspense 用于加载loading
    
    `,
    url: "/debounced",
  },
  {
    id: 9,
    question: "如何处理form跳转?",
    description: `
    1. useFormState： reduce 函数
    2. revalidatePath: 清空缓存
    3. redirect: 跳转
    `,
    url: "/form",
  },
  {
    id: 10,
    question: "Server Actions and Mutations?",
    description: `
    1. https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#additional-resources
    2. form 
      1. pass arg
      2. pending status 
      3. validation and error 
      4. optimistic update 
      5. nested element 
      6. Programmatic form submission
    `,
    url: "/action",
  },
];

export default function Page() {
  return (
    <div className="m-auto w-1/2">
      <QuestionList examples={examples} />
    </div>
  );
}

const QuestionList = ({ examples }) => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-4">
      {examples.map((example) => (
        <div
          key={example.id}
          className="bg-white p-4 rounded-md border shadow-md"
        >
          <Link
            href={`/examples/${example.url}`}
            className="text-blue-500 font-bold text-lg hover:underline"
          >
            {example.question}
          </Link>
          <p className="text-gray-400 mt-2 ">
            <Markdown>{example.description}</Markdown>
          </p>
        </div>
      ))}
    </div>
  );
};
