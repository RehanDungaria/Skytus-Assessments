import React from 'react';
import { HiOutlineCheckCircle } from 'react-icons/hi';

const About = () => {
  const values = [
    "Predictive workflow automation models",
    "99.99% infrastructure uptime SLA metrics",
    "Secure localized key encryption loops",
    "Configurable access control boundaries"
  ];

  return (
    <section id="about" className="py-28 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column Graphic Layout Terminal Showcase */}
          <div className="relative group mx-auto lg:mx-0 w-full max-w-md lg:max-w-none">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl transform rotate-2 scale-105 opacity-10 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative bg-slate-900/90 backdrop-blur-md rounded-2xl p-7 shadow-2xl border border-slate-800">
              <div className="flex items-center space-x-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs font-mono text-slate-500 pl-2">system_telemetry.io</span>
              </div>
              <p className="font-mono text-sm text-indigo-400 mb-2">$ system-optimize --cluster-sync</p>
              <p className="font-mono text-xs text-emerald-400 mb-5">✔ Isolated 12 baseline data pipeline leaks</p>
              <div className="space-y-3 font-mono text-xs border-t border-slate-800/80 pt-4 text-slate-400">
                <p className="flex justify-between"><span>⚡ Sync Velocity:</span> <span className="text-white font-semibold">14.2ms avg</span></p>
                <p className="flex justify-between"><span>🛡️ Encryption Status:</span> <span className="text-white font-semibold">AES-256 Pinned</span></p>
                <p className="flex justify-between"><span>📦 Cache Ratio efficiency:</span> <span className="text-emerald-400 font-semibold">+94.6% optimized</span></p>
              </div>
            </div>
          </div>

          {/* Right Column Information Text Elements */}
          <div className="space-y-6">
            <div className="inline-flex px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 uppercase tracking-widest">
              Core Identity
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              We empower software teams to build faster
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              SaaSify replaces complex, repetitive engineering setups. We manage data parsing pipelines, configuration metrics, and infrastructure clusters behind the scenes so your team can focus on creating software features.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-900">
              {values.map((value, index) => (
                <li key={index} className="flex items-start space-x-3 text-slate-300">
                  <HiOutlineCheckCircle className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium leading-relaxed">{value}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default React.memo(About);