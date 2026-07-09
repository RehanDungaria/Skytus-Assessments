import React from 'react';
import Button from './Button';

const Card = ({ icon: Icon, title, description, onLearnMore }) => {
  return (
    <div className="group bg-slate-950 p-8 rounded-2xl border border-slate-800/80 hover:border-indigo-500/50 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between h-full relative overflow-hidden">
      
      {/* Decorative top corner accent gradient */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="space-y-5 relative z-10">
        {/* Dynamic Icon Shell Wrapper */}
        <div className="inline-flex p-3.5 rounded-xl bg-slate-900 text-indigo-400 border border-slate-800 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-transparent transition-all duration-300">
          <Icon className="h-6 w-6" />
        </div>
        
        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-200">
          {title}
        </h3>
        
        <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-200">
          {description}
        </p>
      </div>

      <div className="pt-8 mt-auto relative z-10">
        <Button 
          variant="outline" 
          className="w-full text-xs py-2.5 border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-white group-hover:border-indigo-500/30"
          onClick={onLearnMore}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default React.memo(Card);