import React from 'react';

const DashboardCard = React.memo(({ icon: Icon, title, value, description, accent }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <h3 className="mt-2 text-3xl font-semibold text-slate-900">{value}</h3>
      </div>
      <div className={`rounded-xl p-3 ${accent}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
    </div>
    <p className="mt-4 text-sm text-slate-500">{description}</p>
  </div>
));

export default DashboardCard;
