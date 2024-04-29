import { generateYAxis } from "@/app/lib/utils";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import { fetchRevenue } from "@/app/lib/data";

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function Revenue() {
  const revenue = await fetchRevenue();

  const chartHeight = 350;
  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full flex flex-col">
      <h2
        className={`text-xl font-medium ${lusitana.className} mb-4 md:text-2xl`}
      >
        Recent Revenue
      </h2>
      <div className="grid grid-cols-12 gap-4 items-end md:grid-cols-13 md:gap-8 mr-4 mt-4">
        <div
          className="hidden justify-between text-gray-400 text-sm flex-col md:flex mb-6"
          style={{ height: chartHeight + "px" }}
        >
          {yAxisLabels.map((label) => (
            <p key={label}>{label}</p>
          ))}
        </div>

        {revenue.map((r) => (
          <div
            key={r.month}
            className="text-gray-400 flex flex-col items-center gap-2"
          >
            <div
              className="bg-blue-400 rounded-t w-full"
              style={{ height: (chartHeight / topLabel) * r.revenue + "px" }}
            ></div>
            <p className="rotate-90 md:rotate-0">{r.month}</p>
          </div>
        ))}
      </div>
      <div className="text-gray-500 flex pt-8">
        <CalendarIcon className="h-5 w-5" />
        <span className="ml-2 text-sm">Last 12 months</span>
      </div>
    </div>
  );
}
