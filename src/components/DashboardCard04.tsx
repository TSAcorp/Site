import React from 'react';

function DashboardCard04() {
  const directData = [800, 1600, 900, 1300, 1950, 1700];
  const indirectData = [4900, 2600, 5350, 4800, 5200, 4800];
  const max = Math.max(...directData, ...indirectData);
  const labels = ['12-01-2022', '01-01-2023', '02-01-2023', '03-01-2023', '04-01-2023', '05-01-2023'];

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Direct VS Indirect</h2>
      </header>
      <div className="px-5 py-4 grow">
        <div className="flex items-end justify-between gap-2 h-48">
          {labels.map((_, i) => (
            <div key={i} className="flex-1 flex items-end gap-1 h-full">
              <div className="flex-1 bg-sky-500 rounded-sm transition-all" style={{ height: `${(directData[i] / max) * 100}%` }}></div>
              <div className="flex-1 bg-violet-500 rounded-sm transition-all" style={{ height: `${(indirectData[i] / max) * 100}%` }}></div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-400">
          {labels.map((label, i) => (
            <span key={i}>{label.slice(0, 5)}</span>
          ))}
        </div>
        {/* Legend */}
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-sky-500 rounded-sm mr-2"></span>
            <span className="text-sm text-gray-500 dark:text-gray-400">Direct</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-violet-500 rounded-sm mr-2"></span>
            <span className="text-sm text-gray-500 dark:text-gray-400">Indirect</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard04;
