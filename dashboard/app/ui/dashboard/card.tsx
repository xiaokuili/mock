import { fetchRevenue } from "@/app/lib/data";
import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";

const DashboardCard = async () => {
  const cardData = await fetchRevenue();

  return (
    <div className="flex justify-between">
      <div className="w-1/4 pr-4">
        <Card title="adf" value="asdfasfd" Icon={BanknotesIcon} />
      </div>
      <div className="w-1/4 pr-4">
        <Card title="adf" value="asdfasfd" Icon={BanknotesIcon} />
      </div>
      <div className="w-1/4 pr-4">
        <Card title="adf" value="asdfasfd" Icon={BanknotesIcon} />
      </div>
      <div className="w-1/4 pr-4">
        <Card title="adf" value="asdfasfd" Icon={BanknotesIcon} />
      </div>
    </div>
  );
};

const Card = ({
  title,
  value,
  Icon,
}: {
  title: string;
  value: number | string;
  Icon: any;
}) => {
  return (
    <div className="bg-gray-100 shadow-md rounded-md p-1 flex-col flex h-full">
      <div className="flex py-3 pl-3">
        {Icon && <Icon className="w-6 h-6" /> /* 使用Icon组件来显示图标 */}
        <div className="pl-1 flex-grow">{title}</div>
      </div>
      <div className="bg-white rounded-md text-center flex-grow">{value}</div>
    </div>
  );
};

export default DashboardCard;
