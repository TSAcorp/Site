import React from 'react';

function DashboardCard13() {
  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Income / Expenses</h2>
      </header>
      <div className="p-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">Income</div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">$42,780</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">+12.5% from last month</div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">Expenses</div>
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">$18,230</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">-4.3% from last month</div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-500 dark:text-gray-400">Net Income</div>
          <div className="text-lg font-bold text-gray-800 dark:text-gray-100">$24,550</div>
        </div>
        <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div className="bg-violet-500 h-2 rounded-full" style={{ width: '65%' }}></div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard13;
