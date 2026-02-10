
import React, { useEffect, useRef } from 'react';
import SlideContent from './components/SlideContent';
import { SLIDES } from './constants';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const scrollTop = container.scrollTop;
      const height = container.clientHeight;

      // Find current active index based on which section is mostly in view
      let currentIndex = 0;
      let minDiff = Infinity;

      sectionRefs.current.forEach((ref, idx) => {
        if (ref) {
          const diff = Math.abs(ref.offsetTop - scrollTop);
          if (diff < minDiff) {
            minDiff = diff;
            currentIndex = idx;
          }
        }
      });

      if (e.key === 'ArrowDown') {
        if (currentIndex < SLIDES.length - 1) {
          e.preventDefault();
          const nextSection = sectionRefs.current[currentIndex + 1];
          if (nextSection) {
            container.scrollTo({
              top: nextSection.offsetTop,
              behavior: 'smooth'
            });
          }
        }
      } else if (e.key === 'ArrowUp') {
        if (currentIndex > 0) {
          e.preventDefault();
          const prevSection = sectionRefs.current[currentIndex - 1];
          if (prevSection) {
            container.scrollTo({
              top: prevSection.offsetTop,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-premium-mesh text-slate-900 font-['Pretendard'] overflow-x-hidden overflow-y-auto h-screen snap-y snap-mandatory scroll-smooth"
    >
      {/* Main Content Area - Multi-section single scroll */}
      <main className="w-full">
        {SLIDES.map((slide, idx) => (
          <section
            key={slide.id}
            ref={(el) => (sectionRefs.current[idx] = el)}
            className="w-full min-h-screen flex items-center justify-center p-12 border-b border-slate-100 snap-start snap-always shrink-0 relative"
          >
            <div className="max-w-[1440px] w-full mx-auto py-10">
              <SlideContent slide={slide} index={idx} total={SLIDES.length} />
            </div>

            {/* Corner Page Number */}
            <div className="absolute bottom-8 right-8 text-slate-500 font-medium text-sm tracking-widest">
              {idx + 1}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default App;
