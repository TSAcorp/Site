import React from 'react';

function DashboardCard11() {
  const reasons = [
    { label: 'Products - Refund', value: 35, color: '#8470ff' },
    { label: 'Products - Return', value: 28, color: '#67bfff' },
    { label: 'Shipping - Delay', value: 20, color: '#3ec972' },
    { label: 'Other', value: 17, color: '#f0bb33' },
  ];

  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Reasons for Refunds</h2>
      </header>
      <div className="p-5">
        <ul className="my-1">
          {reasons.map((reason, i) => (
            <li key={i} className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <span className="inline-block w-2 h-2 mr-3 rounded-full" style={{ backgroundColor: reason.color }}></span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{reason.label}</span>
              </div>
              <div className="flex items-center">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mr-3" style={{ width: '80px' }}>
                  <div className="h-1.5 rounded-full" style={{ width: `${reason.value}%`, backgroundColor: reason.color }}></div>
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-100">{reason.value}%</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DashboardCard11;
