
import React from 'react';
import { ImageUploader } from './ImageUploader';

interface HeroProps {
  onImageSelect: (base64: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onImageSelect }) => {
  return (
    <div className="py-12 md:py-20 flex flex-col items-center text-center">
      <div className="inline-block px-4 py-1.5 mb-6 bg-indigo-50 text-indigo-700 rounded-full text-sm font-semibold border border-indigo-100 animate-pulse">
        AI texnologiyasi asosida
      </div>
      
      <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 max-w-4xl leading-tight">
        Bir zumda professional <span className="text-indigo-600">biznes portretga</span> ega bo'ling
      </h1>
      
      <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl">
        Hujjatlar, rezyume va ijtimoiy tarmoqlar uchun mukammal rasm kerakmi? 
        Rasm yuklang va biz uni professional studiya sifatiga o'tkazib beramiz.
      </p>

      <div className="w-full max-w-xl">
        <ImageUploader onImageSelect={onImageSelect} />
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600">
            <i className="fa-solid fa-face-smile text-xl"></i>
          </div>
          <h3 className="font-bold text-slate-800">Yuz o'xshashligi</h3>
          <p className="text-sm text-slate-500">Sizning yuz tuzilmangiz va mimikangiz 100% saqlanib qoladi.</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600">
            <i className="fa-solid fa-briefcase text-xl"></i>
          </div>
          <h3 className="font-bold text-slate-800">Rasmiy kiyim</h3>
          <p className="text-sm text-slate-500">Erkaklar va ayollar uchun mos klassik biznes liboslari.</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600">
            <i className="fa-solid fa-bolt text-xl"></i>
          </div>
          <h3 className="font-bold text-slate-800">Tez va Sifatli</h3>
          <p className="text-sm text-slate-500">Bir necha soniyada 4K sifatdagi portretga ega bo'ling.</p>
        </div>
      </div>
    </div>
  );
};
