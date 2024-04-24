import SideNav from "@/app/ui/dashboard/sidenav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="w-1/6">
        <SideNav />
      </div>
      <div className="w-5/6 grow p-6 md:overflow-y-auto md:p-12">
        {children}
      </div>
    </div>
  );
}
