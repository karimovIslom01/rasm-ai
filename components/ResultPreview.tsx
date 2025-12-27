
import React from 'react';

interface ResultPreviewProps {
  image: string | null;
  isLoading: boolean;
  error: string | null;
}

export const ResultPreview: React.FC<ResultPreviewProps> = ({ image, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="aspect-[3/4] rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center p-8 text-center">
        <div className="relative w-24 h-24 mb-6">
          <div className="absolute inset-0 border-4 border-indigo-100 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center text-indigo-600">
             <i className="fa-solid fa-wand-sparkles text-2xl animate-pulse"></i>
          </div>
        </div>
        <h4 className="text-lg font-bold text-slate-800 mb-2">AI ishlamoqda...</h4>
        <p className="text-slate-500 text-sm max-w-[200px]">
          Sizning professional portretingizni yaratishimiz uchun biroz vaqt talab etiladi.
        </p>
        
        <div className="mt-8 w-full max-w-[200px] h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-600 animate-[loading_2s_infinite]"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="aspect-[3/4] rounded-2xl bg-red-50 border border-red-100 flex flex-col items-center justify-center p-8 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
          <i className="fa-solid fa-triangle-exclamation text-2xl"></i>
        </div>
        <h4 className="text-lg font-bold text-red-800 mb-2">Xatolik!</h4>
        <p className="text-red-600 text-sm">{error}</p>
      </div>
    );
  }

  if (!image) {
    return (
      <div className="aspect-[3/4] rounded-2xl bg-slate-100 border border-slate-200 flex flex-col items-center justify-center p-8 text-center text-slate-400">
        <i className="fa-solid fa-image text-4xl mb-4"></i>
        <p>Tayyor rasm bu yerda chiqadi</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-white relative group">
        <img 
          src={image} 
          alt="Generated Portrait" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
           <a 
            href={image} 
            download="professional-portrait.png"
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 hover:scale-110 transition-transform shadow-lg"
           >
             <i className="fa-solid fa-download"></i>
           </a>
        </div>
      </div>
      <div className="flex gap-3">
        <a 
          href={image} 
          download="pro-portret.png"
          className="flex-1 bg-slate-900 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
        >
          <i className="fa-solid fa-download"></i>
          Yuklab olish
        </a>
      </div>
    </div>
  );
};
