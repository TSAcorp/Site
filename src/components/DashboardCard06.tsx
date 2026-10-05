import React from 'react';
import DoughnutChart01 from '../components/DoughnutChart01';

function DashboardCard06() {
  const chartData = {
    labels: ['United States', 'Italy', 'Other'],
    datasets: [
      {
        label: 'Top Countries',
        data: [35, 30, 35],
        backgroundColor: ['#8470ff', '#67bfff', '#3ec972'],
        hoverBackgroundColor: ['#755ff8', '#56b1f3', '#34bd68'],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Top Countries</h2>
      </header>
      {/* Chart built with Chart.js */}
      <div className="grow flex flex-col justify-center">
        <div className="px-5 py-4">
          <DoughnutChart01 data={chartData} width={220} height={220} />
        </div>
        {/* Legend */}
        <div className="grow max-sm:max-h-[128px] xl:max-h-[128px] px-5 py-3">
          <ul className="flex flex-wrap justify-center max-md:justify-between gap-x-4">
            <li>
              <div className="flex items-center justify-center">
                <span className="inline-block w-2 h-2 bg-violet-500 mr-2 rounded-full"></span>
                <span className="text-gray-500 dark:text-gray-400">United States</span>
                <span className="text-gray-800 dark:text-gray-100 font-medium ml-2">35%</span>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-center">
                <span className="inline-block w-2 h-2 bg-sky-500 mr-2 rounded-full"></span>
                <span className="text-gray-500 dark:text-gray-400">Italy</span>
                <span className="text-gray-800 dark:text-gray-100 font-medium ml-2">30%</span>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-center">
                <span className="inline-block w-2 h-2 bg-green-500 mr-2 rounded-full"></span>
                <span className="text-gray-500 dark:text-gray-400">Other</span>
                <span className="text-gray-800 dark:text-gray-100 font-medium ml-2">35%</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard06;
