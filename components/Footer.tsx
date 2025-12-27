
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white shadow-sm">
              <i className="fa-solid fa-user-tie text-sm"></i>
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">ProPortret<span className="text-indigo-600">AI</span></span>
          </div>
          
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} ProPortret AI. Barcha huquqlar himoyalangan.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <i className="fa-brands fa-telegram text-xl"></i>
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <i className="fa-brands fa-instagram text-xl"></i>
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <i className="fa-brands fa-linkedin text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
