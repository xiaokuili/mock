import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

const CardsSkeleton = async () => {
  return (
    <>
      <CardSkeleton title="Collected" Icon={BanknotesIcon} />
      <CardSkeleton title="Pending" Icon={ClockIcon} />
      <CardSkeleton title="Total Invoices" Icon={UserGroupIcon} />
      <CardSkeleton title="Total Customers" Icon={InboxIcon} />
    </>
  );
};
export default CardsSkeleton;

const CardSkeleton = ({ title, Icon }: { title: string; Icon: any }) => {
  return (
    <div className="bg-gray-100 shadow-sm rounded-lg p-2">
      <div className="flex p-2 animate-pulse">
        {Icon && <Icon className="w-5 h-5" /> /* 使用Icon组件来显示图标 */}
        <div className="ml-2 font-medium text-sm truncate h-2 w-8"></div>
      </div>
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-4">
          <div className="h-2 bg-slate-300 rounded col-span-2"></div>
          <div className="h-2 bg-slate-300 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-300 rounded"></div>
      </div>
    </div>
  );
};
