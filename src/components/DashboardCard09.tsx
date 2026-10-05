import React from 'react';

function DashboardCard09() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Sales VS Refunds</h2>
      </header>
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">Total Sales</div>
            <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">$6,320</div>
          </div>
          <div className="text-sm font-medium text-red-600 px-2 py-1 bg-red-500/20 rounded-full">-$1,420</div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">Total Refunds</div>
            <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">$1,420</div>
          </div>
          <div className="text-sm font-medium text-red-600 px-2 py-1 bg-red-500/20 rounded-full">-22.5%</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard09;
