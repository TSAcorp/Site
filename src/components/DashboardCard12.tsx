import React from 'react';

function DashboardCard12() {
  const activities = [
    { user: 'Dominik McNeill', action: 'published an article', time: '5m ago', avatar: 'DM', color: '#8470ff' },
    { user: 'Ivan Mesaros', action: 'completed a task', time: '1h ago', avatar: 'IM', color: '#67bfff' },
    { user: 'Maria Martinez', action: 'created a new project', time: '2h ago', avatar: 'MM', color: '#3ec972' },
    { user: 'Scott Robinson', action: 'left a comment', time: '4h ago', avatar: 'SR', color: '#f0bb33' },
    { user: 'Carolyn Jones', action: 'updated profile', time: '1d ago', avatar: 'CJ', color: '#ff5656' },
  ];

  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Recent Activity</h2>
      </header>
      <div className="p-5">
        <div className="space-y-3">
          {activities.map((activity, i) => (
            <div key={i} className="flex items-center">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 shrink-0" style={{ backgroundColor: activity.color }}>{activity.avatar}</div>
              <div className="grow">
                <div className="text-sm text-gray-800 dark:text-gray-100">
                  <span className="font-medium">{activity.user}</span>{' '}
                  <span className="text-gray-500 dark:text-gray-400">{activity.action}</span>
                </div>
                <div className="text-xs text-gray-400 dark:text-gray-500">{activity.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardCard12;
