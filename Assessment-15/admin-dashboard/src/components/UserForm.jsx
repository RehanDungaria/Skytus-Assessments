import React from 'react';
import { useForm } from 'react-hook-form';
import { FiUserPlus } from 'react-icons/fi';

const UserForm = ({ onSubmitSuccess }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('New user data:', data);
    reset();
    window.alert('User created successfully!');
    onSubmitSuccess();
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-blue-600 p-3 text-white">
          <FiUserPlus className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Create User</h3>
          <p className="text-sm text-slate-500">Add a new team member</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
          <input className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-blue-500" {...register('name', { required: 'Name is required' })} />
          {errors.name && <p className="mt-1 text-sm text-rose-600">{errors.name.message}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
          <input className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-blue-500" {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' } })} />
          {errors.email && <p className="mt-1 text-sm text-rose-600">{errors.email.message}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Phone</label>
          <input className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-blue-500" {...register('phone', { required: 'Phone is required', pattern: { value: /^\d+$/, message: 'Phone must contain only numbers' } })} />
          {errors.phone && <p className="mt-1 text-sm text-rose-600">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Role</label>
          <select className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-blue-500" {...register('role', { required: 'Role is required' })}>
            <option value="">Select role</option>
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>
          {errors.role && <p className="mt-1 text-sm text-rose-600">{errors.role.message}</p>}
        </div>

        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
          <input type="password" className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-blue-500" {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })} />
          {errors.password && <p className="mt-1 text-sm text-rose-600">{errors.password.message}</p>}
        </div>

        <div className="md:col-span-2">
          <button className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700" type="submit">Submit User</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
