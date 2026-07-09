import React from "react";

const Button = ({
  children,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950";

  const variants = {
    primary:
      "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 hover:shadow-indigo-500/50 hover:-translate-y-1 focus:ring-indigo-500",

    secondary:
      "bg-slate-900 text-white border border-slate-700 hover:bg-slate-800 hover:border-slate-600 hover:-translate-y-1 focus:ring-slate-500",

    outline:
      "bg-transparent text-indigo-400 border border-indigo-500 hover:bg-indigo-500/10 hover:text-white hover:border-indigo-400 hover:-translate-y-1 focus:ring-indigo-500",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);