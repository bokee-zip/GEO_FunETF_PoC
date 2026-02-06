
import React from 'react';
import SlideContent from './components/SlideContent';
import { SLIDES } from './constants';

const App: React.FC = () => {
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
      </div>
    </div>
  );
};

export default App;
