
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-md">
            <i className="fa-solid fa-user-tie text-xl"></i>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">ProPortret<span className="text-indigo-600">AI</span></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-indigo-600 transition-colors">Biz haqimizda</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Qanday ishlaydi?</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Narxlar</a>
        </nav>

        <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors">
          Kirish
        </button>
      </div>
    </header>
  );
};
