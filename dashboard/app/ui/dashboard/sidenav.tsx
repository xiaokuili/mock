import { signOut } from "@/auth";

export default function SideNav() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div>其他内容</div>

      <form
        className="flex justify-center"
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <div className="hidden md:block">Sign Out</div>
        </button>
      </form>
    </div>
  );
}
