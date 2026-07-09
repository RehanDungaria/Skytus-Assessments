import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-36 bg-slate-950 bg-grid-mesh">
      
      {/* High-Impact Ambient Light Flares */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column Text Layout */}
          <div className="text-center lg:text-left space-y-8 max-w-2xl mx-auto lg:mx-0">
            <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 rounded-full">
              <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-xs font-semibold text-indigo-300 tracking-wide uppercase">v2.0 Performance Engine Live</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Scale your workspace with <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                intelligent automation
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              Our next-generation systems simplify architecture blockages, map core workflow operations, and balance pipeline computing overhead autonomously.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <Button variant="primary" className="w-full sm:w-auto px-8 py-4 text-base shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30">
                Get Started Free
              </Button>
              <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-base bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800/80">
                Book a Demo
              </Button>
            </div>
          </div>

          {/* Right Column Illustration Card Layer */}
          <div className="relative flex justify-center items-center w-full max-w-lg lg:max-w-none mx-auto transform hover:scale-[1.02] transition-transform duration-700 ease-out">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl opacity-20 blur-xl tracking-wide" />
            <svg
              viewBox="0 0 500 400"
              className="w-full h-auto rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-800 p-6 shadow-2xl"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="20" y="20" width="140" height="90" rx="12" fill="#1E1B4B" stroke="#312E81" strokeWidth="1.5" />
              <circle cx="55" cy="55" r="14" fill="#4F46E5" />
              <rect x="25" y="140" width="450" height="230" rx="16" fill="#020617" stroke="#1E293B" strokeWidth="1.5" />
              <path d="M45 330 C 120 230, 220 310, 450 180" stroke="url(#paint0_linear)" strokeWidth="4" strokeLinecap="round" />
              <circle cx="202" cy="272" r="6" fill="#38BDF8" stroke="#020617" strokeWidth="3" />
              <circle cx="450" cy="180" r="7" fill="#818CF8" stroke="#020617" strokeWidth="3" />
              <defs>
                <linearGradient id="paint0_linear" x1="45" y1="330" x2="450" y2="180" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3B82F6" />
                  <stop offset="0.5" stopColor="#6366F1" />
                  <stop offset="1" stopColor="#A855F7" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);