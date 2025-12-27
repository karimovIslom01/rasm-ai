
import React, { useRef, useState } from 'react';

interface ImageUploaderProps {
  onImageSelect: (base64: string) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelect }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert("Iltimos, rasm formatidagi fayl yuklang.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target?.result as string;
      onImageSelect(base64.split(',')[1]); // Send only base64 data
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div 
      className={`relative border-2 border-dashed rounded-3xl p-10 transition-all cursor-pointer ${
        isDragging 
          ? 'border-indigo-500 bg-indigo-50 scale-[1.02]' 
          : 'border-slate-300 bg-white hover:border-indigo-400 hover:bg-slate-50'
      }`}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onClick={() => fileInputRef.current?.click()}
    >
      <input 
        type="file" 
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden" 
        accept="image/*"
      />
      
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
          <i className="fa-solid fa-cloud-arrow-up text-3xl"></i>
        </div>
        <div>
          <p className="text-xl font-bold text-slate-800">Rasm yuklang</p>
          <p className="text-slate-500">yoki shu yerga sudrab keling</p>
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
          <span>JPG, PNG, WEBP</span>
          <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
          <span>Max 10MB</span>
        </div>
      </div>
    </div>
  );
};
