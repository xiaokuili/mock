import Markdown from "react-markdown";

const description = {
  sidebar: `
  1. h-screen: nav高度为整个屏幕高度
  2. overflow-y-hidden: 隐藏整个页面滚动条
  `,
  content: `
  1. flex
  2. flex-col/row
  3. grow: 左右布局，右侧内容自适应
  `,
};

export default function Page() {
  return (
    <div className="h-screen flex flex-col md:overflow-y-hidden md:flex-row ">
      <div className="w-full flex-none md:w-64 border">
        <Markdown>{description.sidebar}</Markdown>
      </div>
      <div className="grow  overflow-y-auto border">
        <div className="h-96">
          <Markdown>{description.content}</Markdown>
        </div>
        <div className="h-96">content</div>
        <div className="h-96">content</div>

        <div className="h-96">content</div>
      </div>
    </div>
  );
}
