import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

const PCSidebarAndContent = () => {
  return (
    <div>
      <div data-testid="sidebar">sidebar</div>
      <div data-testid="content">content</div>
    </div>
  );
};

test("如何测试html是否满足自己的要求？", () => {
  console.log("使用@testing-library/react这个包");
});
test("如何将一组问题合并到一起?", () => {
  console.log("目前vitest是最好用的测试框架,使用describe这个函数");
});
// describe 可以将一组问题放在一起
// @testing-library/reac
describe("如何完成siderbar和content这样的页面布局？", () => {
  test("如何实现一个pc端左右布局的sidebar和content", () => {
    const { getByTestId } = render(<PCSidebarAndContent />);
    console.log(getByTestId);
  });
});
