
import { SlideData } from './types';

export const SLIDES: SlideData[] = [
  /* --- SECTION 0: 제안서 도입부 --- */
  {
    id: 0,
    title: "[삼성자산운용 Fun ETF GEO 최적화 제안]",
    subtitle: "AI 시대의 브랜드 정보 주권 확보 및 디지털 영향력 극대화를 위한 전략적 GEO 도입",
    type: 'title',
    content: "제안사: 이트라이브 (E-TRIBE)\n제시일: 2025년 2월\n대상: 삼성자산운용 마케팅 본부"
  },

  /* --- SECTION I: GEO 개요 --- */
  {
    id: 1,
    title: "GEO란 무엇인가?",
    subtitle: "검색 패러다임의 지각변동: '링크'를 나열하던 시대에서 '정답'을 제시하는 시대로",
    type: 'paradigm-shift'
  },
  {
    id: 2,
    title: "AI는 어떻게 답변을 만드는가",
    subtitle: "\"신뢰할 수 없는 정보는 구조적으로 배제됩니다\"",
    type: 'ai-mechanism',
    items: [
      {
        label: "1. 질문 파악",
        value: "사용자의 자연어 질문에서 핵심 의도와 관련 키워드(엔티티)를 정밀 분석합니다.",
        details: ["Query Intent 분석", "핵심 엔티티 추출", "언어 모델 파싱"],
        image: "/1.png"
      },
      {
        label: "2. 정보 탐색",
        value: "학습 데이터 중 신뢰도가 높은 '구조화된 정보 블록'을 최우선적으로 선별합니다.",
        details: ["RAG 엔진 가동", "고신뢰 DB 조회", "지식 그래프 매칭"],
        image: "/2.png"
      },
      {
        label: "3. 정보 조합",
        value: "선별된 정보 조각들을 논리적인 문장으로 조립하여 답변의 뼈대를 완성합니다.",
        details: ["콘텐츠 조각 정렬", "팩트 체크 알고리즘", "문맥 최적화"],
        image: "/3.png"
      },
      {
        label: "4. 응답 생성",
        value: "최종 사용자에게 가장 적합한 형태의 맞춤형 정답과 근거를 함께 제공합니다.",
        details: ["자연어 문장 생성", "출처 인용(Citation)", "최종 답변 서빙"],
        image: "/4.png"
      }
    ]
  },

  /* --- SECTION II: 현황 분석 --- */
  {
    id: 100,
    title: "AI 검색 엔진 현황 진단",
    subtitle: "우리 브랜드는 AI에게 어떻게 읽히고 있는가?",
    type: 'title',
    content: "1. 동종 서비스 LLM 인용 현황 (ChatGPT, Gemini, Claude, Perplexity)\n2. As-is vs 경쟁사 GEO 점수 비교 분석"
  },
  {
    id: 101,
    title: "동종 서비스 현황 (LLM 인용 현황)",
    subtitle: "4대 주요 LLM의 검색 답변 내 브랜드 노출 및 인용 실태",
    type: 'image-grid',
    content: "각 엔진별 답변에서 우리 브랜드의 실질적 인용(Citation) 여부를 확인합니다.",
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800", // ChatGPT
      "https://images.unsplash.com/photo-1676299081847-c0326a0333d5?auto=format&fit=crop&q=80&w=800", // Claude
      "https://images.unsplash.com/photo-1684495033285-05562723c345?auto=format&fit=crop&q=80&w=800", // Gemini
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800"  // Perplexity
    ],
    items: [
      { label: "ChatGPT-4o", value: "노출 순위 2위 / 기술적 인용 부재" },
      { label: "Claude 3.5", value: "정보 요약 누락 / 단순 브랜드 나열" },
      { label: "Gemini 1.5", value: "구조화 데이터 수집 실패 / 오정보 감지" },
      { label: "Perplexity", value: "실시간 데이터 출처 불분명" }
    ]
  },
  {
    id: 102,
    title: "As-is / 경쟁사 GEO 점수 현황",
    subtitle: "생성형 엔진 최적화 점수 비교 (GEO Scorecard)",
    type: 'image-grid',
    content: "기술적 마크업, 정보 신뢰도, 엔티티 연결성 등 5대 지표 기준 점수 비교",
    images: [
      "https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=800", // Chart 1
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"  // Chart 2
    ],
    items: [
      { label: "삼성자산운용 (As-is)", value: "GEO Score: 3.2/10.0 (위험)" },
      { label: "주요 경쟁사 (Avg)", value: "GEO Score: 5.8/10.0 (양호)" }
    ]
  },

  /* --- SECTION III: GEO 구축 가이드 --- */
  {
    id: 4,
    title: "GEO 구축 가이드",
    subtitle: "AI가 우리 브랜드를 '업계 표준'으로 인식하게 만드는 체계적 가이드",
    type: 'title',
    content: "Generative Engine Optimization (GEO) 구축 전 과정\n진단(P1) → 설계(P2) → 구축(P3) → 검증(P4) 4단계 프레임워크"
  },
  {
    id: 4.5,
    title: "전략적 GEO 구축 및 운영 로드맵",
    subtitle: "구축(Build)에서 운영(Operation)으로 이어지는 데이터 성숙도 기반 스케일업 전략",
    type: 'scale-up',
    items: [
      {
        label: "STEP 01: 데이터 기반 구축 (Build)",
        value: "기반 최적화",
        details: ["기술적 Schema 마크업 적용", "핵심 엔티티(Entity) 등록", "AI용 메시지 하우스 설계"]
      },
      {
        label: "STEP 02: 상시 모니터링 (Operate)",
        value: "현상 유지 및 튜닝",
        details: ["실시간 AI 답변 정합성 체크", "부정/오답 정보 즉시 대응", "n8n 자동 분석 시스템 가동"]
      },
      {
        label: "STEP 03: 점진적 확산 (Scale-up)",
        value: "영향력 극대화",
        details: ["인접 키워드 점유율 확대", "신규 펀드/상품 즉시 인용", "AI 지식 그래프 장악력 강화"]
      }
    ],
    content: "모니터링을 통한 데이터 수집 → AI 분석 → 인사이트 도출 → 최적화 반영의 선순환(Feedback Loop) 체계 구축"
  },
  {
    id: 6,
    title: "GEO 구축 핵심 프로세스",
    subtitle: "진단부터 구축까지의 3대 핵심 단계 상세 과업 및 산출물 (클릭하여 예시 확인)",
    type: 'pillars',
    items: [
      {
        label: "Phase 1: 분석 및 진단 (2주)",
        value: "AUDIT",
        details: [
          "AI 퍼셉션 오딧: 현재 AI의 브랜드 인식 상태 정밀 진단",
          "인텐트 마이닝: 고객 구매 여정별 주요 질문 인벤토리 확보",
          "테크니컬 진단: AI 크롤러 접근성 및 robots.txt 최적화 점검"
        ],
        deliverables: [
          {
            name: "AI 퍼셉션 리포트",
            example: `[AI 퍼셉션 리포트]
## 📊 퍼셉션 오딧 리포트 구성안 (예시)

### 1. 주요 LLM별 브랜드 정의(Definition) 현황

AI가 우리 브랜드를 한 문장으로 어떻게 정의하고, 어떤 키워드와 연결하는지 분석합니다.

- 작성 방안: 모델별(ChatGPT, Gemini, Claude 등)로 동일한 "브랜드 정의" 프롬프트를 입력해 결과를 비교합니다.
- 리포트 예시:
  > 💡 Insight: 모델마다 정의가 다르다면, 우리 브랜드의 '디지털 페르소나'가 파편화되어 있다는 증거입니다. 이를 통합하는 작업이 필요합니다.

---

### 2. 환각(Hallucination) 및 오정보 발생 현황 분석

가장 치명적인 리스크를 점검하는 섹션입니다. 잘못된 정보가 사실처럼 전달되는 지점을 파악합니다.

- 작성 방안: 사실관계 확인이 필요한 질문(주요 상품, 운용 규모, 수수료율 등)을 던져 오류 유형을 분류합니다.
- 오류 분류:
  - 내용 오류: 존재하지 않는 ETF 상품이나 수익률을 언급
  - 최신성 결여: 종료된 ETF를 현재 판매 중인 상품으로 안내
  - 출처 불분명: 신뢰할 수 없는 개인 블로그를 공식 정보처럼 인용
- 리포트 분석 예시:
  "Perplexity 답변 분석 결과, 'FunETF'를 특정 ETF 상품명으로 오인하여 '펀드형 ETF'로 설명. 실제로는 삼성자산운용의 ETF 통합 플랫폼 브랜드명임. 원인은 funetf 사이트의 메타 설명(description) 및 Schema.org 마크업 부재로 브랜드 정체성이 명확히 전달되지 않음."

---

### 3. 경쟁사 대비 AI SOV 및 인용 깊이 비교

우리 브랜드가 얼마나 자주 언급되는지(양적)와 얼마나 핵심 정보로 활용되는지(질적)를 분석합니다.

- 분석 지표 정의:
  - AI SOV (Share of Voice): 특정 카테고리 질문(예: "초보자를 위한 저비용 ETF 추천해줘") 시 우리 브랜드가 언급되는 비율
  - 인용 깊이 (Citation Depth): 단순 언급을 넘어 AI가 우리 콘텐츠를 직접 인용하거나 출처 링크를 제공하는 수준`
          },
          { name: "인텐트 명세서", example: "CDJ(구매여정) 단계별 50여 개의 핵심 질문 세트 및 각 질문의 검색 의도 분류표" },
          { name: "테크니컬 GEO 진단서", example: "크롤러 차단 여부, 사이트맵 구조, 모바일 가독성 등 기술적 수용도 체크리스트" }
        ]
      },
      {
        label: "Phase 2: 전략 설계 (2주)",
        value: "STRATEGY",
        details: [
          "메시지 하우스 구축: AI가 인용하기 쉬운 논리적 정보 구조 설계",
          "지식 그래프 기획: 위키/뉴스룸 등 신뢰 출처 엔티티 최적화",
          "리스크 프로토콜: AI 오답 방지를 위한 방어 메시지 설계"
        ],
        deliverables: [
          { name: "메시지 하우스 전략서", example: "Core Message - Pillars - Proof Points로 이어지는 AI용 정보 위계 및 설득 구조도" },
          { name: "콘텐츠 제작 가이드", example: "감동(Human)과 근거(AI)를 동시에 잡는 '이중 글쓰기' 원칙 및 채널별 톤앤매너 매뉴얼" }
        ]
      },
      {
        label: "Phase 3: 구축 및 최적화 (3주)",
        value: "ACTION",
        details: [
          "이중 글쓰기 적용: 사람과 AI가 모두 읽기 편한 콘텐츠 제작",
          "엔티티 외부 배포: 위키, 기술 블로그 등 고신뢰 출처 데이터 구축",
          "Schema 마크업: 의미론적 최적화 및 llms.txt 공식 요약본 구현"
        ],
        deliverables: [
          { name: "GEO 최적화 원고", example: "정의-근거-사례 3단 구성을 적용하여 AI 인용률을 200% 이상 높인 실제 콘텐츠 원고 샘플" },
          { name: "엔티티 등록 보고서", example: "외부 신뢰 채널(위키데이터, 나무위키 등)에 브랜드 정보가 정식 엔티티로 등재된 결과물" },
          { name: "테크니컬 적용 가이드", example: "JSON-LD 기반의 스키마 마크업 코드와 AI 에이전트 전용 llms.txt 파일 설정법" }
        ]
      }
    ]
  },

  /* --- SECTION IV: GEO 운영 매뉴얼 --- */
  {
    id: 10,
    title: "GEO 운영 매뉴얼",
    subtitle: "지속 가능한 AI 성과 측정 및 모니터링 체계 가이드",
    type: 'title',
    content: "구축 이후의 상시 운영 프로세스\n데이터 수집 → AI 분석 → 대시보드 업데이트 → 리포팅"
  },
  {
    id: 11,
    title: "시스템 운영 프로세스 구성도",
    subtitle: "GEO 운영 프로세스 v2.0",
    type: 'pipeline',
    content: [
      "사람의 역할: 질문하고 응답 복사해서 붙여넣기",
      "AI의 역할: 모든 분석, 판단, 집계, 리포팅"
    ]
  },
  {
    id: 15,
    title: "대시보드 화면 구성 (Dashboard View)",
    subtitle: "모니터링 시스템 스크린샷 영역",
    type: 'full-image',
    content: "/12페이지 이미지.png"
  },
  {
    id: 16,
    title: "GEO 운영 사이클",
    subtitle: "3개월 단위의 PDCA 사이클을 통한 데이터 기반 지속 성장 로드맵",
    type: 'master-plan',
    items: [
      {
        label: "Timeline",
        details: [
          { phase: "PLAN", weeks: "W1-2", desc: "전략/KPI" },
          { phase: "SETUP", weeks: "W3-4", desc: "환경 구축" },
          { phase: "DO", weeks: "W5-8", desc: "실행/모니터링" },
          { phase: "CHECK", weeks: "W9-12", desc: "분석/평가" },
          { phase: "ACT", weeks: "W13", desc: "개선/차기 반영" }
        ]
      },
      {
        label: "Checklist",
        details: [
          {
            phase: "Phase 1 & 2 (준비기)",
            items: [
              "이전 분기 회고 및 OKR/KPI 목표치 확정",
              "금융 트렌드 반영 질문 세트 갱신 및 경쟁사 리스트 업데이트",
              "n8n/Slack 연동 및 베이스라인 데이터 측정 완료"
            ]
          },
          {
            phase: "Phase 3 (실행기)",
            items: [
              "최적화 콘텐츠 발행 및 핵심 엔티티 배포",
              "n8n 기반 주간 데이터 수집 및 실시간 모니터링",
              " (Critical) 6주차 진척률 50% 점검 및 리소스 재배분"
            ]
          },
          {
            phase: "Phase 4 & 5 (성과기)",
            items: [
              "AI Referral Traffic 및 ROI/비즈니스 임팩트 분석",
              "경쟁사 벤치마킹 및 콘텐츠 효과성(Topic/Type) 분석",
              "이해관계자 리뷰용 분기 전략 보고서(Executive Summary) 작성"
            ]
          }
        ]
      },
      {
        label: "Justification",
        details: [
          { title: "학습 주기", desc: "AI 모델의 크롤링 및 정보 안정화에 최소 4~8주 소요" },
          { title: "신뢰도", desc: "주간 변동성을 제거하고 금융 시장의 분기 트렌드와 정합성 확보" },
          { title: "정기 보고", desc: "삼성자산운용의 정기 공시/보고 주기와 연동 가능한 PDCA 사이클" }
        ]
      },
      {
        label: "Reports",
        details: [
          {
            title: "주간 리포트",
            schedule: "매주 월요일 09:00 Slack 발송",
            desc: "핵심 성과, 주간 추이, 질문별 성과 (W05 기준 예시)"
          },
          {
            title: "월간 리포트",
            schedule: "매월 1일 09:00 PDF 발행",
            desc: "월간 트래픽 요약, 경쟁사 비교 및 인사이트"
          }
        ]
      }
    ]
  },
  {
    id: 18,
    title: "Why E-Tribe for GEO?",
    subtitle: "Fun ETF GEO를 이트라이브와 함께해야 하는 이유",
    type: 'service-loop',
    content: "전략 수립부터 실시간 모니터링 및 마크업 최적화까지 단절 없는 원팀 운영을 통해\n변화하는 AI 환경에서 브랜드의 정보 주권과 압도적인 기술 우위를 보장합니다.",
    items: [
      { label: "마크업 변경의 안정성", value: "운영사로서의\n기술 스택 완벽 이해" },
      { label: "시너지", value: "마케팅 조직과\n긴밀한 전략 협업" },
      { label: "검증된 실증 기술력", value: "다수 구축 사례 및\n자체 AI 엔진 보유" }
    ]
  }
];
