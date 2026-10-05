import React from 'react';

function DashboardCard08() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Sales Over Time</h2>
      </header>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">Revenue</div>
            <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">$42,780</div>
          </div>
          <div className="text-sm font-medium text-green-700 px-2 py-1 bg-green-500/20 rounded-full">+12.5%</div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
          </div>
          <div className="flex items-end gap-1 h-24">
            {[45, 62, 55, 78, 68, 82].map((h, i) => (
              <div key={i} className="flex-1 bg-violet-500 rounded-sm" style={{ height: `${h}%` }}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard08;
