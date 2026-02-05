
import React, { useState, useEffect, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Layout,
  Settings,
  Zap,
  Menu,
  X,
  Hammer,
  Play,
  Monitor,
  Info,
  BarChart2,
  User
} from 'lucide-react';
import SlideContent from './components/SlideContent';
import { SLIDES } from './constants';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    if (e.key === 'ArrowRight' || e.key === ' ') handleNext();
    if (e.key === 'ArrowLeft') handlePrev();
  }, [handleNext, handlePrev]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const getSectionLabel = (index: number) => {
    if (index === 0) return "Introduction";
    if (index <= 2) return "GEO 개요";
    if (index <= 5) return "현황 분석";
    if (index <= 8) return "GEO 구축 가이드";
    return "GEO 운영 매뉴얼";
  };

  return (
    <div className="flex h-screen bg-[#F8F9FB] overflow-hidden text-slate-900 font-['Pretendard']">
      {/* Sidebar Navigation */}
      <div className={`fixed inset-0 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex flex-col w-72 bg-white border-r border-slate-200 shadow-sm flex-shrink-0`}>
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden">
            <X className="w-6 h-6 text-slate-400" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar">
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => {
                setCurrentSlide(idx);
                setIsSidebarOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-xl text-[13px] transition-all duration-200 group ${currentSlide === idx
                ? 'bg-[#F0F5FF] text-[#0055FF] font-bold'
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
            >
              <div className="flex gap-3">
                <span className={`text-[11px] font-medium mt-0.5 ${currentSlide === idx ? 'text-[#0055FF]' : 'text-slate-300'}`}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="truncate">{slide.title}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="p-6 border-t border-slate-100">
          <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
            <Monitor className="w-3.5 h-3.5" />
            <span>FunETF</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative min-w-0 h-screen bg-[#F8F9FB]">
        <header className="flex-shrink-0 bg-white border-b border-slate-200">
          <div className="flex items-center h-14 px-8">
            <div className="flex h-full">
              {[
                { label: "GEO 개요", range: [1, 2], icon: Info },
                { label: "현황 분석", range: [3, 5], icon: BarChart2 },
                { label: "구축 가이드", range: [6, 8], icon: Hammer },
                { label: "운영 매뉴얼", range: [9, SLIDES.length - 1], icon: Play }
              ].map((tab) => {
                const isActive = currentSlide >= tab.range[0] && currentSlide <= tab.range[1];
                return (
                  <div
                    key={tab.label}
                    onClick={() => setCurrentSlide(tab.range[0])}
                    className={`px-6 h-full flex items-center gap-2 text-[14px] font-bold cursor-pointer transition-all relative ${isActive ? "text-[#0055FF]" : "text-slate-400 hover:text-slate-600"
                      }`}
                  >
                    {tab.label}
                    {isActive && <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0055FF] rounded-t-full" />}
                  </div>
                );
              })}
            </div>
            <div className="flex-1" />
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-bold text-slate-300 tracking-wider">STRATEGIC PROPOSAL v1.2</span>
              <div className="h-4 w-px bg-slate-200" />
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                <Settings className="w-4 h-4 text-slate-400" />
              </div>
            </div>
          </div>

          <div className="h-12 flex items-center justify-between px-8 bg-slate-50/50">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="md:hidden p-1.5 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3">
                <span className="text-[#0055FF] text-[10px] font-black px-2.5 py-0.5 rounded bg-blue-50 border border-blue-100 uppercase tracking-tight">
                  {getSectionLabel(currentSlide)}
                </span>
                <span className="text-slate-300 text-xs font-medium">/</span>
                <span className="text-slate-800 text-xs font-extrabold tracking-tight">{SLIDES[currentSlide].title}</span>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-hidden relative">
          <div className="h-full w-full p-12 slide-enter overflow-y-auto custom-scrollbar">
            <div className="max-w-[1440px] mx-auto h-full">
              <SlideContent slide={SLIDES[currentSlide]} />
            </div>
          </div>
        </main>

        <footer className="h-16 flex items-center justify-end px-8 bg-white border-t border-slate-200 flex-shrink-0">

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={currentSlide === 0}
                className={`p-2 rounded-full border border-slate-200 transition-all ${currentSlide === 0 ? 'opacity-30' : 'hover:bg-slate-50 hover:border-slate-300 text-slate-600'}`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentSlide === SLIDES.length - 1}
                className={`p-2 rounded-full border border-slate-200 transition-all ${currentSlide === SLIDES.length - 1 ? 'opacity-30' : 'hover:bg-[#0055FF] hover:border-[#0055FF] hover:text-white text-slate-600'}`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="text-[13px] font-bold text-slate-900 tabular-nums min-w-[60px] text-right">
              <span className="text-[#0055FF]">{currentSlide + 1}</span>
              <span className="text-slate-300 mx-1.5">/</span>
              <span className="text-slate-400">{SLIDES.length}</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
