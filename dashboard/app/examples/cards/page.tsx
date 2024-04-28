import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

export default function Page() {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <Card title="Collected" value="$1119.2" icon={<BanknotesIcon />}></Card>
      <Card title="Collected" value="$1119.2" icon={<ClockIcon />}></Card>
      <Card title="Collected" value="$1119.2" icon={<UserGroupIcon />}></Card>
      <Card title="Collected" value="$1119.2" icon={<InboxIcon />}></Card>{" "}
    </div>
  );
}

const Card = ({ title, value, icon }) => {
  return (
    <div className=" rounded-xl shadow-sm p-2 bg-gray-50 border">
      <div className="flex p-4">
        <div className="h-5 w-5 text-gray-700"> {icon}</div>

        <h3 className="font-medium text-sm ml-2">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
};
