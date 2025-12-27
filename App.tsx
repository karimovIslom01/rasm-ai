
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ImageUploader } from './components/ImageUploader';
import { ResultPreview } from './components/ResultPreview';
import { Footer } from './components/Footer';
import { generateProfessionalPortrait } from './services/geminiService';

const App: React.FC = () => {
  const [sourceImage, setSourceImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageSelect = (base64: string) => {
    setSourceImage(base64);
    setGeneratedImage(null);
    setError(null);
  };

  const handleGenerate = async () => {
    if (!sourceImage) return;

    setIsGenerating(true);
    setError(null);
    try {
      const result = await generateProfessionalPortrait(sourceImage);
      if (result) {
        setGeneratedImage(result);
      } else {
        setError("Rasm yaratishda xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.");
      }
    } catch (err) {
      console.error(err);
      setError("Server bilan aloqada xatolik. Tarmoqni tekshiring.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleReset = () => {
    setSourceImage(null);
    setGeneratedImage(null);
    setError(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {!sourceImage ? (
          <Hero onImageSelect={handleImageSelect} />
        ) : (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-200">
              <button 
                onClick={handleReset}
                className="text-slate-500 hover:text-slate-800 flex items-center gap-2 transition-colors"
              >
                <i className="fa-solid fa-arrow-left"></i>
                <span>Qaytadan boshlash</span>
              </button>
              <h2 className="text-xl font-semibold text-slate-800">Portret yaratish</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">Asl rasm</h3>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border-2 border-dashed border-slate-300 bg-white flex items-center justify-center relative shadow-sm">
                  <img 
                    src={sourceImage} 
                    alt="Original" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {!generatedImage && !isGenerating && (
                  <button
                    onClick={handleGenerate}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1 active:scale-95"
                  >
                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                    AI Professional Portret Yaratish
                  </button>
                )}
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">Natija</h3>
                <ResultPreview 
                  image={generatedImage} 
                  isLoading={isGenerating} 
                  error={error} 
                />
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
