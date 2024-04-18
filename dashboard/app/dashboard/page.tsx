import SideNav from "@/app/ui/dashboard/sidenav";

export default function Page() {
  return (
    <div className="flex">
      <div className="w-1/6">
        <SideNav />
      </div>
      <div className="w-5/6">
        <div className="flex flex-col h-screen">
          <div className="h-1/4 bg-gray-200">Dashboard</div>
          <div className="flex flex-row h-3/4">
            <div className="w-1/2 bg-blue-200">Content Left</div>
            <div className="w-1/2 bg-green-200">Content Right</div>
          </div>
        </div>
      </div>
    </div>
  );
}
