
export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  type: 'title' | 'table' | 'pillars' | 'pipeline' | 'image-grid' | 'scale-up' | 'master-plan' | 'dual-writing' | 'project-overview' | 'ai-summary' | 'content-structure' | 'technical-geo' | 'message-hierarchy' | 'roadmap-cycle';
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
