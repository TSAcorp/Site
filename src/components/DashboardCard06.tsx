import React from 'react';

function DashboardCard06() {
  const data = [
    { label: 'United States', value: 35, color: '#8470ff' },
    { label: 'Italy', value: 30, color: '#67bfff' },
    { label: 'Other', value: 35, color: '#3ec972' },
  ];

  const total = data.reduce((sum, d) => sum + d.value, 0);
  let currentAngle = -90;

  const paths = data.map((item) => {
    const angle = (item.value / total) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = 110 + 90 * Math.cos(startRad);
    const y1 = 110 + 90 * Math.sin(startRad);
    const x2 = 110 + 90 * Math.cos(endRad);
    const y2 = 110 + 90 * Math.sin(endRad);

    const largeArc = angle > 180 ? 1 : 0;

    return `M 110 110 L ${x1} ${y1} A 90 90 0 ${largeArc} 1 ${x2} ${y2} Z`;
  });

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Top Countries</h2>
      </header>
      <div className="grow flex flex-col justify-center">
        <div className="px-5 py-4 flex justify-center">
          <svg width="220" height="220" viewBox="0 0 220 220">
            {paths.map((path, i) => (
              <path key={i} d={path} fill={data[i].color} />
            ))}
            <circle cx="110" cy="110" r="72" fill="white" className="dark:fill-gray-800" />
          </svg>
        </div>
        <div className="grow max-sm:max-h-[128px] xl:max-h-[128px] px-5 py-3">
          <ul className="flex flex-wrap justify-center max-md:justify-between gap-x-4">
            {data.map((item, i) => (
              <li key={i}>
                <div className="flex items-center justify-center">
                  <span className="inline-block w-2 h-2 mr-2 rounded-full" style={{ backgroundColor: item.color }}></span>
                  <span className="text-gray-500 dark:text-gray-400">{item.label}</span>
                  <span className="text-gray-800 dark:text-gray-100 font-medium ml-2">{item.value}%</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard06;
