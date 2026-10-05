import React from 'react';

function DashboardCard10() {
  const customers = [
    { name: 'Dominik McNeill', email: 'dominikmcneill@acme.com', avatar: 'DM', color: '#8470ff', status: 'Active', spent: '2,450.00' },
    { name: 'Ivan Mesaros', email: 'ivanmesaros@acme.com', avatar: 'IM', color: '#67bfff', status: 'Pending', spent: '1,890.50' },
    { name: 'Maria Martinez', email: 'mariamartinez@acme.com', avatar: 'MM', color: '#3ec972', status: 'Active', spent: '3,210.75' },
    { name: 'Scott Robinson', email: 'scottrobinson@acme.com', avatar: 'SR', color: '#f0bb33', status: 'Pending', spent: '980.25' },
    { name: 'Carolyn Jones', email: 'carolynjones@acme.com', avatar: 'CJ', color: '#ff5656', status: 'Active', spent: '4,120.00' },
  ];

  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Recent Customers</h2>
      </header>
      <div className="p-3">
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-gray-300">
            <thead className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50 rounded-xs">
              <tr>
                <th className="p-2"><div className="font-semibold text-left">Customer</div></th>
                <th className="p-2"><div className="font-semibold text-left">Email</div></th>
                <th className="p-2"><div className="font-semibold text-center">Status</div></th>
                <th className="p-2"><div className="font-semibold text-right">Spent</div></th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60">
              {customers.map((customer, i) => (
                <tr key={i}>
                  <td className="p-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2" style={{ backgroundColor: customer.color }}>{customer.avatar}</div>
                      <div className="text-gray-800 dark:text-gray-100">{customer.name}</div>
                    </div>
                  </td>
                  <td className="p-2"><div className="text-gray-500 dark:text-gray-400">{customer.email}</div></td>
                  <td className="p-2">
                    <div className="text-center">
                      <span className={`inline-flex font-medium text-xs rounded-full px-2 py-0.5 ${customer.status === 'Active' ? 'bg-green-500/20 text-green-700' : 'bg-yellow-500/20 text-yellow-700'}`}>
                        {customer.status}
                      </span>
                    </div>
                  </td>
                  <td className="p-2"><div className="text-right text-gray-800 dark:text-gray-100">${customer.spent}</div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard10;
