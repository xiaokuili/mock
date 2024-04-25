export default function Page() {
  return (
    <div>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64 bg-slate-300">
          <SideNav />
        </div>
        <div className="grow p-6 md:overflow-y-auto md:p-12 bg-orange-200">
          <div className="h-96">
            <div>
              <p className="text-center text-lg">
                PC:如何布局sideBar和 content{" "}
              </p>
              <p className="text-center">sider: overflow 隐藏，固定宽度</p>
              <p className="text-center">content: overflow y轴，并且弹性</p>
            </div>
          </div>
          <div className="h-96">content</div>
          <div className="h-96">content</div>
          <div className="h-96">content</div>
        </div>
      </div>
    </div>
  );
}

const SideNav = () => {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
          action={async () => {
            "use server";
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
};
