import { fetchCardData } from "@/app/lib/data";
import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

const DashboardCard = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const cardData = await fetchCardData();
  return (
    <>
      <Card
        title="Collected"
        value={cardData.totalPendingInvoices}
        Icon={BanknotesIcon}
      />
      <Card
        title="Pending"
        value={cardData.totalPaidInvoices}
        Icon={ClockIcon}
      />
      <Card
        title="Total Invoices"
        value={cardData.numberOfInvoices}
        Icon={UserGroupIcon}
      />
      <Card
        title="Total Customers"
        value={cardData.numberOfCustomers}
        Icon={InboxIcon}
      />
    </>
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
    <div className="bg-gray-100 shadow-sm rounded-lg p-2">
      <div className="flex p-2">
        {Icon && <Icon className="w-5 h-5" /> /* 使用Icon组件来显示图标 */}
        <div className="ml-2 font-medium text-sm truncate">{title}</div>
      </div>
      <div
        className={`${lusitana.className}  truncate rounded-md text-center text-2xl px-4 py-8`}
      >
        {value}
      </div>
    </div>
  );
};

export default DashboardCard;
