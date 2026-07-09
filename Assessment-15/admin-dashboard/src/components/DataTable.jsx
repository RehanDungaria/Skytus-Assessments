import React from 'react';

const DataTable = React.memo(({ data, onEdit, onDelete }) => (
  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
    <table className="min-w-full divide-y divide-slate-200 text-sm">
      <thead className="bg-slate-50">
        <tr>
          <th className="px-4 py-3 text-left font-semibold text-slate-600">ID</th>
          <th className="px-4 py-3 text-left font-semibold text-slate-600">Name</th>
          <th className="px-4 py-3 text-left font-semibold text-slate-600">Email</th>
          <th className="px-4 py-3 text-left font-semibold text-slate-600">Role</th>
          <th className="px-4 py-3 text-left font-semibold text-slate-600">Status</th>
          <th className="px-4 py-3 text-left font-semibold text-slate-600">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {data.map((row) => (
          <tr key={row.id} className="hover:bg-slate-50">
            <td className="px-4 py-3 text-slate-600">{row.id}</td>
            <td className="px-4 py-3 font-medium text-slate-800">{row.name}</td>
            <td className="px-4 py-3 text-slate-600">{row.email}</td>
            <td className="px-4 py-3 text-slate-600">{row.role}</td>
            <td className="px-4 py-3">
              <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${row.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                {row.status}
              </span>
            </td>
            <td className="px-4 py-3">
              <div className="flex gap-2">
                <button onClick={() => onEdit(row)} className="rounded bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-700">Edit</button>
                <button onClick={() => onDelete(row.id)} className="rounded bg-rose-100 px-2.5 py-1 text-xs font-semibold text-rose-700">Delete</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
));

export default DataTable;
