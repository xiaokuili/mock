import { FormDescription } from "@/components/ui/form";
import Link from "next/link";
import Markdown from "react-markdown";

let examples = [
  {
    id: 1,
    question: "如何创建一个导航栏和内容页面?",
    description: `
    1. 自适应pc和移动
    2. 导航栏固定不随着内容滚动二滚动
    `,
    url: "/app_sc",
  },
  {
    id: 2,
    question: "如何创建自适应导航栏？",
    description: `
    1. 导航栏竖直的时候，logout在最下方，学习通过grow占据空间
    2. 移动端适配，nav和logou在一行
    3. grow是可以套grow的
    `,
    url: "/sidebar",
  },
  {
    id: 3,
    question: "如何创建自适应卡片布局",
    description: `
    1. 多个card怎么排列
    `,
    url: "/cards",
  },
  {
    id: 4,
    question: "如何创建一个好看的卡片",
    description: `
    1. 学习具体组件应该怎么写
    `,
    url: "/card",
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
