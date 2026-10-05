import React from 'react';
import LineChart01 from '../components/LineChart01';

function DashboardCard05() {
  const chartData = {
    labels: ['12-01-2022', '01-01-2023', '02-01-2023', '03-01-2023', '04-01-2023', '05-01-2023', '06-01-2023', '07-01-2023', '08-01-2023', '09-01-2023', '10-01-2023', '11-01-2023', '12-01-2023', '01-01-2024', '02-01-2024', '03-01-2024', '04-01-2024', '05-01-2024', '06-01-2024', '07-01-2024', '08-01-2024', '09-01-2024', '10-01-2024', '11-01-2024', '12-01-2024', '01-01-2025'],
    datasets: [
      {
        data: [540, 460, 480, 294, 420, 440, 390, 420, 460, 480, 520, 560, 580, 520, 480, 500, 460, 520, 540, 580, 620, 640, 620, 580, 560, 610],
        fill: true,
        backgroundColor: 'rgba(132, 112, 255, 0.1)',
        borderColor: '#8470ff',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: '#8470ff',
        clip: 20,
        tension: 0.2,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Real Time Value</h2>
          <button className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16"><path d="M8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM8 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM10 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" /></svg>
          </button>
        </header>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">Total Value</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">$24,780</div>
          <div className="text-sm font-medium text-green-700 px-1.5 bg-green-500/20 rounded-full">+49%</div>
        </div>
      </div>
      <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
        <LineChart01 data={chartData} width={595} height={128} />
      </div>
    </div>
  );
}

export default DashboardCard05;
