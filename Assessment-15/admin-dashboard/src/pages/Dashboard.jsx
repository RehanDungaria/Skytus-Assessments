import React, { useMemo, useState } from 'react';
import { FiBox, FiDollarSign, FiShoppingCart, FiUsers } from 'react-icons/fi';
import DashboardCard from '../components/DashboardCard';
import { users, products } from '../utils/sampleData';

const Dashboard = () => {
  const [activeUsers] = useState(users.filter((user) => user.status === 'Active').length);

  const cards = useMemo(
    () => [
      { title: 'Total Users', value: users.length, description: 'Registered team members', icon: FiUsers, accent: 'bg-blue-600' },
      { title: 'Total Products', value: products.length, description: 'Available catalog items', icon: FiBox, accent: 'bg-emerald-600' },
      { title: 'Revenue', value: '$84.2K', description: 'Monthly growth +12%', icon: FiDollarSign, accent: 'bg-violet-600' },
      { title: 'Orders', value: '1,240', description: 'Pending fulfillment', icon: FiShoppingCart, accent: 'bg-amber-500' },
    ],
    []
  );

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <DashboardCard key={card.title} {...card} />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Recent Activity</h3>
              <p className="text-sm text-slate-500">Insights over the last 7 days</p>
            </div>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">Live</span>
          </div>
          <div className="space-y-4">
            {[
              { title: 'Active users', value: `${activeUsers} online`, color: 'bg-blue-600' },
              { title: 'Products in stock', value: `${products.filter((item) => item.stock > 20).length} items`, color: 'bg-emerald-600' },
              { title: 'Customer satisfaction', value: '94%', color: 'bg-violet-600' },
            ].map((item) => (
              <div key={item.title} className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                <div>
                  <p className="font-medium text-slate-800">{item.title}</p>
                  <p className="text-sm text-slate-500">Updated recently</p>
                </div>
                <div className={`rounded-full px-3 py-1 text-sm font-semibold text-white ${item.color}`}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Quick Summary</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>• Upcoming maintenance window at 8 PM.</li>
            <li>• 3 new support tickets since this morning.</li>
            <li>• Inventory restock for premium devices.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
