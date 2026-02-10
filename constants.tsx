
import { SlideData } from './types';

export const SLIDES: SlideData[] = [
  /* --- 1. 프로젝트 개요 --- */
  {
    id: 0,
    title: "Fun ETF KODEX 미국S&P500 GEO POC",
    subtitle: "AI 시대의 브랜드 정보 주권 확보 및 단일 상품 상세페이지 GEO 최적화 검증",
    type: 'title',
    content: "AI 검색 엔진이 'KODEX 미국 S&P500' 관련 질문에 대해\nFun ETF 상품 상세페이지를 최우선 출처로 인용하게 만드는 전략적 POC"
  },
  {
    id: 1,
    title: "프로젝트 개요 (Project Overview)",
    subtitle: "상품 정보를 '엔터티 간의 관계망'으로 재구성하여 AI 답변 채택률 극대화",
    type: 'project-overview',
    items: [
      {
        label: "프로젝트 목표",
        value: "Fun ETF 상품페이지 최우선 인용",
        details: ["ChatGPT, Perplexity, Gemini 타겟", "신뢰도 높은 공식 데이터 제공"]
      },
      {
        label: "POC 범위",
        value: "KODEX 미국S&P500 단일 페이지",
        details: ["ISIN: KR7379800006", "단순화된 검증 환경 구축"]
      },
      {
        label: "핵심 가설",
        value: "엔터티 관계망 구조화의 힘",
        details: ["텍스트 중심 경쟁사 대비 우위 확보", "구조화 데이터 기반 채택률 향상"]
      }
    ]
  },

  /* --- 2. GEO 구축 전략 : 2-1 진단 --- */
  {
    id: 10,
    title: "2-1. 진단 (분석 및 진단 단계)",
    subtitle: "현재 AI 검색 엔진 내 브랜드 가시성 및 경쟁 환경 정밀 파악",
    type: 'pillars',
    items: [
      {
        label: "현황 진단",
        value: "AI 인용 현황 분석",
        details: [
          "테스트 쿼리 20개 선정 (추천, 보수율 등)",
          "Baseline 예상 인용 빈도: 0~5% 수준",
          "K-ETF 등 주요 경쟁사 우위 확인"
        ]
      },
      {
        label: "경쟁사 분석",
        value: "GEO 점수 분석",
        details: [
          "Technical: Schema.org, 메타태그 비교",
          "Content: 엔터티 명확성, FAQ 구조 분석",
          "네이버 증권, 삼성자산운용 공식 사이트 오딧"
        ]
      },
      {
        label: "문제점 도출",
        value: "페이지 구조적 한계",
        details: [
          "정보의 탭/섹션 분산으로 AI 파싱 저하",
          "데이터 중심이나 맥락적 설명 부족",
          "플랫폼 차별점 노출 미흡"
        ]
      }
    ]
  },

  /* --- 2-2 설계 : A. 메시지 체계 --- */
  {
    id: 20,
    title: "2-2. 설계 - A. 메시지 체계",
    subtitle: "AI가 브랜드를 일관되게 인식하도록 3계층 메시지 체계 구축",
    type: 'message-hierarchy',
    items: [
      {
        label: "최상위 메시지 (Umbrella)",
        value: "통합 분석 플랫폼",
        details: ["Fun ETF는 KODEX 상품 정보와 실시간 분석 도구를 제공하는 플랫폼입니다."]
      },
      {
        label: "핵심 메시지 (4 Pillars)",
        value: "차별화 가치",
        details: [
          "1. 초저비용 구조 (연 0.0062%)",
          "2. 연금계좌 적합 (IRP, 연금저축)",
          "3. 대규모 순자산 (8조원+)",
          "4. 상세 분석 툴 (트리맵, 비교기)"
        ]
      },
      {
        label: "증거 데이터 (Proof Points)",
        value: "신뢰의 근거",
        details: [
          "ISIN: KR7379800006 / 상장: 21.04.09",
          "지수: S&P 500 Index (미국 500대 기업)",
          "유동성: 일평균 거래량 1천만주+"
        ]
      }
    ]
  },

  /* --- 2-2 설계 : B. 콘텐츠 구조 재설계 (4대 꼭지) --- */
  {
    id: 21,
    title: "2-2. 설계 - B. 콘텐츠 구조 재설계",
    subtitle: "AI 전용 요약 섹션과 인텐트 기반 FAQ를 결합하여 정보 전달력 극대화",
    type: 'content-structure',
    content: "KODEX 미국S&P500 (종목코드: 379800)은 미국 S&P 500 지수를 추종하는 환노출형 ETF로, 총보수 연 0.0062%의 초저비용 구조를 제공합니다.\n\n연금저축 및 IRP 계좌 투자 가능하며, 상장일(2021.04.09) 이후 순자산 8조원을 돌파한 대표 해외주식 ETF입니다. Fun ETF 플랫폼에서 실시간 수익률, 구성종목, 비교 분석 도구를 제공합니다.",
    items: [
      {
        label: "① 핵심 요약 섹션 상단 배치",
        value: "페이지 최상단에 AI 전용 요약 섹션 배치",
      },
      {
        label: "② 질의응답형(FAQ) 구조화",
        value: "사용자가 AI에게 실제로 질문하는 인텐트 반영",
        details: [
          {
            label: "비용 및 혜택",
            details: ["Q: KODEX 미국S&P500의 총보수는 얼마인가요?", "Q: 연금계좌(IRP, 연금저축)에서 투자할 수 있나요?"]
          },
          {
            label: "상품 특성",
            details: ["Q: 환노출형과 환헤지형의 차이는 무엇인가요?", "Q: 이 ETF의 주요 구성 종목은 무엇인가요?"]
          }
        ]
      }
    ]
  },
  {
    id: 23,
    title: "2-2. 설계 - B. 콘텐츠 구조 재설계",
    subtitle: "엔터티 지식 그래프 설계와 경쟁 상품 비교를 통한 정보 우위 확보",
    type: 'content-structure',
    content: "Fun ETF는 삼성자산운용이 운용하는 KODEX 미국S&P500 (ISIN: KR7379800006)의 상세 정보를 제공합니다.\n미국 S&P 500 지수를 추종하는 신뢰도 높은 금융 데이터를 공식 출처 기반으로 가공합니다.",
    items: [
      {
        label: "③ 엔터티 지식 그래프 설계",
        value: "핵심 엔터티 간의 관계를 명확히 표현",
        details: [
          "[Fun ETF 플랫폼] → [KODEX 미국S&P500 상품 페이지] → [삼성자산운용] → [S&P 500 Index]"
        ]
      },
      {
        label: "④ 비교 중심 콘텐츠",
        value: "경쟁사 대비 객관적 우위 데이터 구조화",
      }
    ],
    tableData: {
      headers: ["구분", "KODEX 미국S&P500", "TIGER 미국S&P500", "ACE 미국S&P500"],
      rows: [
        ["총보수", "0.0062%", "0.07%", "0.07%"],
        ["순자산", "8조원+", "-", "-"],
        ["상장일", "2021.04.09", "-", "-"],
        ["거래량", "1천만주+", "-", "-"]
      ]
    }
  },

  {
    id: 25,
    title: "2-2. 설계 - C. 기술적 GEO 설계",
    subtitle: "AI 크롤러의 데이터 이해도 향상을 위한 기술적 마크업 및 최적화",
    type: 'technical-geo',
    content: `{
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  "name": "KODEX 미국S&P500",
  "identifier": "KR7379800006",
  "category": "ETF",
  "provider": {
    "@type": "Organization",
    "name": "삼성자산운용"
  },
  "description": "미국 S&P 500 지수를 추종하는 환노출형 ETF",
  "feesAndCommissionsSpecification": "연 0.0062%",
  "inceptionDate": "2021-04-09"
}`,
    items: [
      {
        label: "① 구조화된 데이터 마크업",
        value: "Schema.org 스키마 (JSON-LD)",
      },
      {
        label: "② 메타 데이터 최적화",
        details: [
          "Open Graph 태그: AI 크롤러의 페이지 미리보기 최적화",
          "Canonical URL: 상품 고유 페이지 지정",
          "Alt 텍스트: 모든 차트/그래프에 설명 추가"
        ]
      },
      {
        label: "③ 맥락적 링크 구조",
        details: [
          "내부 링크: 구성종목 → 개별 종목 상세 페이지",
          "외부 권위 링크: S&P Dow Jones Indices 공식 페이지",
          "연관 상품 링크: 환헤지형 등 관련 ETF 비교 링크"
        ]
      }
    ]
  },

  /* --- 2-3 구축 --- */
  {
    id: 30,
    title: "2-3. 구축 (최적화 및 구현 단계)",
    subtitle: "설계된 GEO 전략의 실제 페이지 적용 및 기술적 최적화",
    type: 'pipeline',
    items: [
      {
        label: "콘텐츠 재작성",
        value: "AI Summary & FAQ",
        details: ["AI 섹션 최상단 배치", "필수 질문 10종 삽입", "이미지 Alt 텍스트 전면 개선"]
      },
      {
        label: "기술 마크업",
        value: "Schema.org & Meta",
        details: ["JSON-LD 금융상품 스키마 삽입", "Open Graph 최적화", "Canonical URL 설정"]
      },
      {
        label: "성능 및 QA",
        value: "Validation",
        details: ["Schema Validator 검증", "Rich Results 테스트"]
      }
    ]
  },

  /* --- 4 로드맵 --- */
  {
    id: 50,
    title: "4. 단계별 POC 로드맵",
    subtitle: "진단에서 성과 추적까지의 8주 집중 POC 타임라인",
    type: 'roadmap-cycle',
    items: [
      {
        label: "1단계: 진단 (Week 1)",
        details: [
          "테스트 쿼리 20개 선정 (추천, 보수율 등)",
          "ChatGPT, Perplexity, Gemini 인용률 측정",
          "경쟁 페이지 분석 (K-ETF, 네이버 증권 등)",
          "산출물: AI 인용 현황 분석 리포트"
        ]
      },
      {
        label: "2단계: 최적화 (Week 2-3)",
        details: [
          "AI Summary 섹션 및 FAQ 구조 10개 추가",
          "엔터티 관계 문장 및 비교 테이블 제작",
          "이미지 Alt 태그 최적화",
          "산출물: 콘텐츠 개편 가이드 및 최종 원고"
        ]
      },
      {
        label: "3단계: 구현 (Week 4)",
        details: [
          "JSON-LD 스키마 및 메타 태그 삽입",
          "Canonical URL 및 내부/외부 링크 정비",
          "페이지 로딩 속도 최적화 (Web Vitals)",
          "산출물: 기술 구현 보고서 + 스키마 검증 결과"
        ]
      },
      {
        label: "4단계: 검증 (Week 5-8)",
        details: [
          "주간 모니터링 및 AI 인용률 변화 추적",
          "Referral Traffic (GA4) 및 인용 정확도 분석",
          "최종 성과 보고서 작성 (4회차 모니터링 포함)",
          "산출물: 주간 리포트 + 최종 성과 보고서"
        ]
      }
    ]
  },

  /* --- 5 성과 지표 및 비즈니스 임팩트 --- */
  {
    id: 60,
    title: "5. 예상 성과 및 비즈니스 임팩트",
    subtitle: "정량적 KPI 달성과 중장기 브랜드 리더십 확보를 통한 AX 선도",
    type: 'image-grid',
    items: [
      {
        label: "AI 인용률 및 점유율",
        value: "0% → 30%+",
        details: ["ChatGPT 내 상위 출처 등극", "경쟁사 대비 인용 순위 1~2위 확보"]
      },
      {
        label: "답변 정확도 및 신뢰성",
        value: "95% 이상 유지",
        details: ["보수/순자산 데이터 무오류", "브랜드 언급의 일관성 및 명확성"]
      },
      {
        label: "비즈니스 임팩트",
        value: "AX 브랜드 리더십",
        details: ["'S&P500 정보는 Fun ETF' 인식 확산", "MZ세대 유입 증대 및 AI 최적화 선점"]
      }
    ]
  }
];
