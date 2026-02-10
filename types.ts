
export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  type: 'title' | 'content' | 'flow' | 'table' | 'split' | 'dashboard' | 'checklist' | 'pillars' | 'pipeline' | 'full-image' | 'roadmap' | 'gantt' | 'service-loop' | 'paradigm-shift' | 'ai-mechanism' | 'comparison' | 'image-grid' | 'scale-up' | 'master-plan' | 'dual-writing';
  content?: string | string[];
  items?: {
    label: string;
    value?: string;
    color?: string;
    details?: any[];
    image?: string;
    deliverables?: { name: string; example: string }[]; // 산출물 버튼 데이터
  }[];
  images?: string[];
  tableData?: { headers: string[]; rows: string[][] };
  imagePlaceholder?: string;
}

export interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
}
