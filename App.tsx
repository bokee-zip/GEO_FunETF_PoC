<<<<<<< HEAD

import React from 'react';
=======
import React, { useState, useEffect, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';
>>>>>>> acae0ce417c76241b8b2e82dbb6c006d8e53614f
import SlideContent from './components/SlideContent';
import { SLIDES } from './constants';

const App: React.FC = () => {
<<<<<<< HEAD
  return (
    <div className="bg-[#F5F3EF] text-[#4A362D] font-['Pretendard'] overflow-x-hidden min-h-screen">
      {/* Main Content Area - Multi-section single scroll */}
      <main className="w-full">
        {SLIDES.map((slide, idx) => (
          <section
            key={slide.id}
            className="w-full min-h-screen flex items-center justify-center p-12 border-b border-[#D6C7B9]/30"
          >
            <div className="max-w-[1440px] w-full mx-auto">
              <SlideContent slide={slide} />
            </div>
          </section>
        ))}
      </main>

      {/* Floating Section Indicator (Optional, but helps navigation) */}
      <div className="fixed bottom-10 right-10 flex flex-col items-end gap-4 z-50 pointer-events-none">
        <div className="bg-white/80 backdrop-blur-md px-6 py-4 rounded-3xl border border-[#D6C7B9] shadow-2xl pointer-events-auto">
          <p className="text-[14px] font-black text-[#4A362D] uppercase tracking-widest flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#C05D17] animate-pulse" />
            Scroll to Explore GEO Strategy
          </p>
        </div>
=======
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const handleNext = useCallback(() => {
    if (currentSlide < SLIDES.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const handlePrev = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') handleNext();
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') handlePrev();
    if (e.key === 'Home') setCurrentSlide(0);
    if (e.key === 'End') setCurrentSlide(SLIDES.length - 1);
  }, [handleNext, handlePrev]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    setTouchStart(null);
  };

  return (
    <div
      className="h-screen w-screen bg-[#F4F1ED] overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseMove={() => {
        setShowControls(true);
        const timer = setTimeout(() => setShowControls(false), 3000);
        return () => clearTimeout(timer);
      }}
    >
      {/* Slide Progress Bar (Top) */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className="h-full bg-[#4A362D] transition-all duration-300 ease-out"
          style={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }}
        />
      </div>

      {/* Main Slide Area - Full Screen Coverage */}
      <main className="h-full w-full relative">
        <div className="w-full h-full bg-white overflow-hidden relative slide-enter">
          <div className="absolute inset-0 px-12 py-10 md:px-24 md:py-20 overflow-y-auto custom-scrollbar">
            <SlideContent slide={SLIDES[currentSlide]} />
          </div>

          {/* Page Number */}
          <div className="absolute bottom-10 right-12 text-[14px] font-bold text-[#4A362D]/40 tabular-nums">
            <span className="text-[#4A362D]">{String(currentSlide + 1).padStart(2, '0')}</span>
            <span className="mx-2 opacity-50">/</span>
            <span>{String(SLIDES.length).padStart(2, '0')}</span>
          </div>

          {/* Logo Mark */}
          <div className="absolute bottom-10 left-12 flex items-center gap-3 opacity-40">
            <div className="w-5 h-5 rounded-sm bg-[#C5A059]" />
            <span className="text-[12px] font-black tracking-[0.3em] text-[#4A362D]">STRATEGIC GEO</span>
          </div>
        </div>
      </main>

      {/* Navigation Controls */}
      <div className={`fixed inset-y-0 left-0 w-24 flex items-center justify-center transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        <button
          onClick={handlePrev}
          disabled={currentSlide === 0}
          className="p-4 rounded-full bg-white/80 backdrop-blur shadow-lg border border-[#4A362D]/5 text-[#4A362D]/40 hover:text-[#4A362D] hover:scale-110 transition-all disabled:opacity-30 disabled:hover:scale-100"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      <div className={`fixed inset-y-0 right-0 w-24 flex items-center justify-center transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        <button
          onClick={handleNext}
          disabled={currentSlide === SLIDES.length - 1}
          className="p-4 rounded-full bg-white/80 backdrop-blur shadow-lg border border-[#4A362D]/5 text-[#4A362D]/40 hover:text-[#4A362D] hover:scale-110 transition-all disabled:opacity-30 disabled:hover:scale-100"
        >
          <ChevronRight size={24} />
        </button>
>>>>>>> acae0ce417c76241b8b2e82dbb6c006d8e53614f
      </div>
    </div>
  );
};

export default App;
