import React from 'react';
import MiniLineChart from './MiniLineChart';

function DashboardCard02() {
  const data = [622, 532, 432, 352, 282, 392, 452, 532, 462, 542, 382, 582, 492, 372, 482, 532, 622, 492, 562, 682, 732, 612, 722, 812, 762, 842];

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
        <MiniLineChart data={data} color="#67bfff" height={128} />
      </div>
    </div>
  );
}

export default DashboardCard02;
