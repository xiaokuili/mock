import { FormDescription } from "@/components/ui/form";
import Link from "next/link";
import Markdown from "react-markdown";

let examples = [
  {
    id: 1,
    question: "如何创建一个PC的左右布局的导航和内容页面?",
    description: `
    1. 导航固定
    2. 内容区域扩张
    3. 滚动条控制导内容区域              
    `,
    url: "/pc_sc",
  },
  {
    id: 2,
    question: "如何创建一个移动适配的导航和内容页面?",
    description: `
    1. 先写移动端代码
        1. flex，flex-col
        2. 导航占据整个宽度
        3. 内容块弹性，滚动；overflow可以看做上下布局，从定义位置开始滚动
    2. pc端代码
        1. 布局方向row， md: flex-row 
        2. 导航占据固定宽度
    `,
    url: "/app_sc",
  },
  {
    id: 3,
    question: "如何创建左侧导航栏适配移动端变成上面导航栏？",
    description: `
    1. 
    `,
    url: "/begin_end"
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
