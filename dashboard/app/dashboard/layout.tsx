import SideNav from "@/app/ui/dashboard/sidenav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row h-screen overflow-y-hidden">
      <div className="w-full md:w-64">
        <SideNav />
      </div>
      <div className=" grow p-6 overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
