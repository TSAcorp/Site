import React from 'react';
import LineChart01 from '../components/LineChart01';

function DashboardCard02() {
  const chartData = {
    labels: ['12-01-2022', '01-01-2023', '02-01-2023', '03-01-2023', '04-01-2023', '05-01-2023', '06-01-2023', '07-01-2023', '08-01-2023', '09-01-2023', '10-01-2023', '11-01-2023', '12-01-2023', '01-01-2024', '02-01-2024', '03-01-2024', '04-01-2024', '05-01-2024', '06-01-2024', '07-01-2024', '08-01-2024', '09-01-2024', '10-01-2024', '11-01-2024', '12-01-2024', '01-01-2025'],
    datasets: [
      {
        data: [622, 532, 432, 352, 282, 392, 452, 532, 462, 542, 382, 582, 492, 372, 482, 532, 622, 492, 562, 682, 732, 612, 722, 812, 762, 842],
        fill: true,
        backgroundColor: 'rgba(103, 191, 255, 0.1)',
        borderColor: '#67bfff',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: '#67bfff',
        clip: 20,
        tension: 0.2,
      },
      {
        data: [182, 282, 342, 242, 282, 322, 262, 302, 282, 342, 292, 382, 292, 382, 432, 392, 292, 332, 312, 382, 432, 462, 492, 532, 512, 562],
        borderColor: 'rgba(107, 114, 128, 0.25)',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: 'rgba(107, 114, 128, 0.25)',
        clip: 20,
        tension: 0.2,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Acme Advanced</h2>
          <button className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16"><path d="M8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM8 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM10 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" /></svg>
          </button>
        </header>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">Sales</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">$17,489</div>
          <div className="text-sm font-medium text-red-600 px-1.5 bg-red-500/20 rounded-full">-14%</div>
        </div>
      </div>
      <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
        <LineChart01 data={chartData} width={389} height={128} />
      </div>
    </div>
  );
}

export default DashboardCard02;
