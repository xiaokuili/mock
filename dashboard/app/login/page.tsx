import AcmeLogo from "@/app/ui/acme-logo";
import LoginForm from "@/app/ui/login-from";

export default function Page() {
  return (
    <div className="mx-auto w-80 flex-col items-center pt-20">
      <div className="bg-blue-500 h-36 w-full rounded-lg text-white flex items-end p-3">
        <AcmeLogo />
      </div>
      <div className="m-auto px-4 pt-10">
        <LoginForm />
      </div>
    </div>
  );
}
