
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


    </div>
  );
};

export default App;
