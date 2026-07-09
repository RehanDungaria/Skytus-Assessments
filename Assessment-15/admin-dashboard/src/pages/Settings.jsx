import React from "react";
import { FiSettings } from "react-icons/fi";

const Settings = () => (
  <div className="space-y-6">
    {/* Header */}
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-violet-600 p-3 text-white">
          <FiSettings className="h-5 w-5" />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Settings
          </h3>
          <p className="text-sm text-slate-500">
            Customize your workspace
          </p>
        </div>
      </div>
    </div>

    {/* Account Details */}
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h4 className="text-lg font-semibold text-slate-900 mb-5">
        Account Details
      </h4>

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <p className="text-sm text-slate-500">Full Name</p>
          <p className="font-semibold text-slate-900">
            Admin User
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Email</p>
          <p className="font-semibold text-slate-900">
            admin@example.com
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Phone Number</p>
          <p className="font-semibold text-slate-900">
            +91 98005 43110
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Role</p>
          <p className="font-semibold text-slate-900">
            Super Admin
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Department</p>
          <p className="font-semibold text-slate-900">
            Administration
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Account Status</p>
          <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
            Active
          </span>
        </div>

      </div>
    </div>

    {/* Existing Settings */}
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h4 className="text-lg font-semibold text-slate-900">
          Preferences
        </h4>

        <div className="mt-4 space-y-3 text-sm text-slate-600">
          <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
            <span>Enable notifications</span>
            <input
              type="checkbox"
              className="h-4 w-4"
              defaultChecked
            />
          </div>

          <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
            <span>Auto save changes</span>
            <input
              type="checkbox"
              className="h-4 w-4"
              defaultChecked
            />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h4 className="text-lg font-semibold text-slate-900">
          Security
        </h4>

        <div className="mt-4 space-y-3 text-sm text-slate-600">
          <div className="rounded-xl bg-slate-50 px-4 py-3">
            Two-factor authentication enabled
          </div>

          <div className="rounded-xl bg-slate-50 px-4 py-3">
            Weekly backup schedule active
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Settings;