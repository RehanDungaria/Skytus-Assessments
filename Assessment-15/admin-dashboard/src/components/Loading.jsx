import React from 'react';

const Loading = () => (
  <div className="flex min-h-[60vh] items-center justify-center">
    <div className="flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow">
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
      <span className="text-sm font-medium text-slate-600">Loading...</span>
    </div>
  </div>
);

export default Loading;
