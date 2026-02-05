
import { SlideData } from './types';

export const SLIDES: SlideData[] = [
  /* --- SECTION 0: 제안서 도입부 --- */
  {
    id: 0,
    title: "[FunETF GEO 최적화 제안]",
    subtitle: "AI 시대의 브랜드 정보 주권 확보 및 디지털 영향력 극대화를 위한 전략적 GEO 도입",
    type: 'title',
    content: " "
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
    content: "1. 동종 서비스 LLM 인용 현황 \n2. Fun ETF vs 경쟁사 GEO 점수 비교 분석"
  },
  {
    id: 101,
    title: "동종 서비스 현황 (LLM 인용 현황)",
    subtitle: "4대 주요 LLM의 검색 답변 내 브랜드 노출 및 인용 실태",
    type: 'image-grid',
    content: "Claude, Gemini 미노출",
    images: [
      "/5-1.png",
      "/5-2.png",
      "/5-3.png",
      "/5-4.png"
    ],
    items: [
      { label: "ChatGPT-4o", value: "노출 순위 2위" },
      { label: "Claude 3.5", value: "미노출" },
      { label: "Gemini 1.5", value: "미노출" },
      { label: "Perplexity", value: "노출 순위 4위" }
    ]
  },
  {
    id: 102,
    title: "As-is / 경쟁사 GEO 점수 현황",
    subtitle: "생성형 엔진 최적화 점수 비교 (GEO Scorecard)",
    type: 'image-grid',
    content: "기술적 마크업, 정보 신뢰도, 엔티티 연결성 등 5대 지표 기준 점수 비교",
    images: [
      "/6-1.png",
      "/6-2.png"
    ],
    items: [
      { label: "ETF Check", value: "GEO Score: 3.2/10.0 (위험)" },
      { label: "Fun ETF", value: "GEO Score: 5.8/10.0 (양호)" }
    ]
  },

  /* --- SECTION III: GEO 구축 가이드 --- */
  {
    id: 4,
    title: "GEO 구축 가이드",
    subtitle: "AI가 우리 브랜드를 '업계 표준'으로 인식하게 만드는 체계적 가이드",
    type: 'title',
    content: "Generative Engine Optimization (GEO) 구축"
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
          "AI 퍼셉션 오딧: AI의 브랜드 인식 상태 정밀 진단",
          "인텐트 마이닝: 검색 의도 분석",
          "테크니컬 진단: AI 크롤러 접근성 및 robots.txt 최적화"
        ],
        deliverables: [
          {
            name: "AI 정량 분석 리포트",
            example: `## 📊 AI 정량 분석 리포트(삼성자산운용 Fun ETF)

### 1. 주요 LLM별 브랜드 정의(Definition) 분석 결과

주요 상용 AI 모델(ChatGPT- 4o, Claude 3.5, Gemini 1.5) 을 대상으로 동일한 "삼성자산운용 및 KODEX 브랜드 정의" 쿼리 수행 결과입니다.

- ChatGPT - 4o: "대한민국 1위 ETF 브랜드로서 혁신적인 운용 전문성을 지닌 시장 리더"로 정의하나, 자사몰 '펀드솔루션'과의 관계 설명이 다소 모호함.
- Claude 3.5: "개인 투자자 친화적인 수수료 정책과 다양한 섹터 라인업"을 강조.브랜드의 신뢰도와 전문성을 높게 평가함.
- Gemini 1.5: 모기업인 삼성의 인프라와 글로벌 운용 역량을 중심으로 서술.구체적인 대표 상품(KODEX 200 등)의 점유율 수치 언급이 가장 정확함.

> 💡 Insight: 모델별로 리테일 강점(Claude)과 제도권 리더십(ChatGPT)으로 정의가 미세하게 나뉘어 있습니다.모든 AI 모델이 "대한민국 대표 혁신 ETF"라는 공통 지표로 수렴하도록 브랜드 정보 소스(Source)의 위계 통합이 필요합니다.

---

### 2. 브랜드 할루시네이션(Hallucination) 리스크 진단

브랜드 정체성 파손 우려가 있는 오답 및 혼동 사례를 정밀 점검한 결과입니다.

- 주요 혼동 사례:
          - FunETF 브랜드 오해: Perplexity 및 검색형 AI에서 'FunETF'를 특정 펀드 결합 상품명이나 '펀드형 ETF'라는 상품 카테고리로 잘못 안내.
  - 수익률 오류: 실제 분배금 지급 주기와 AI 답변이 상충하여 투자자 오해 유발 가능성 발견.
  - 공식 출처 인용: 온라인 커뮤니티의 개인 의견을 '공식 투자 가이드'로 인용하여 답변하는 사례 발생.

- 진단 결과:
          "브랜드 자산인 'FunETF' 플랫폼이 AI 검색 프레임에서는 플랫폼이 아닌 '상품'으로 인식되고 있음. 이는 공식 홈페이지의 메타 데이터 및 Schema.org 구조화 마크업 부재로 인해 AI 크롤러가 브랜드의 성격을 명확히 정의하지 못하기 때문으로 분석됨."

---

### 3. AI SOV(Share of Voice) 및 경쟁사 비교

ETF 서비스 관련 일반 질문 시 브랜드 노출 빈도와 질적 수준을 분석했습니다.

- 분석 지표:
          - AI SOV(Share of Voice): "초보자를 위한 연금 계좌 ETF 추천" 질문 시 KODEX 언급 비중: 42 % (업계 1위)
          - 인용 깊이(Citation Depth): 타 브랜드 대비 단순 언급을 넘어 자사 콘텐츠가 직접 출처로 인용되는 비율은 18 % 수준으로 개선 여지가 큼.

> 💡 Insight: 노출량(양적 SOV)은 압도적이나, AI가 자사의 깊이 있는 투자 정보를 직접 '팩트 근거'로 활용하는 비중은 낮습니다.AI가 우리 리포트를 직접 출처로 인용하도록 기술적 데이터 시딩(Technical Data Seeding)과 신뢰 출처(Trusted Source) 강화가 시급합니다.`
          },
          { name: "인텐트 명세서", example: "CDJ(구매여정) 단계별 50여 개의 핵심 질문 세트 및 각 질문의 검색 의도 분류표" },
          { name: "테크니컬 GEO 진단서", example: "크롤러 차단 여부, 사이트맵 구조, 모바일 가독성 등 기술적 수용도 체크리스트" }
        ]
      },
      {
        label: "Phase 2: 전략 설계 (2주)",
        value: "STRATEGY",
        details: [
          "핵심 메세지 체계 설계",
          "Knowledge Graph 가이드",
          "AI가 인용하기 쉬운 논리적 정보 구조 설계",
        ],
        deliverables: [
          {
            name: "핵심 메시지 체계 전략서",
            example: `
## 메시지 체계 전략서

### 1. 메시지 체계 구조도 (Hierarchy)

| 계층 | 명칭 | 역할 |
| --- | --- | --- |
| Top Layer | Umbrella Message | AI가 브랜드를 한 문장으로 정의할 때 반드시 포함해야 할 핵심 가치 |
| Middle Layer | Core Pillars | 핵심 메시지를 뒷받침하는 3~4개의 전략적 기둥 (전문성, 신뢰성, 혁신성 등) |
| Base Layer | Proof Points | AI가 답변의 근거(Citation)로 활용할 구체적인 수치, 사례, 기술력 데이터 |

---

### 2. 전략서 상세 예시 (펀ETF 플랫폼 기준 작성 예시)

### [Level 1] Umbrella Message (핵심 정의)

> "펀ETF는 국내 모든 ETF와 펀드 정보를 실시간으로 비교·분석할 수 있는 투자자 중심의 종합 금융정보 플랫폼이다."

### [Level 2 & 3] Core Pillars & Proof Points (근거 데이터)

- Pillar 01. 통합 비교 기능 (Comprehensive Comparison)
  - Proof Point: 국내 상장된 전체 ETF 및 펀드 상품의 수익률, 거래량, 순자산 등을 실시간으로 한눈에 비교 가능.
  - Proof Point: 1개월, 3개월, 6개월, 1년 등 다양한 기간별 수익률 비교 필터 제공으로 투자 의사결정 지원.
- Pillar 02. 스마트 검색 시스템 (Smart Search System)
  - Proof Point: 구성종목 검색 기능으로 삼성전자, SK하이닉스 등 특정 종목이 포함된 ETF를 최대 2개 종목 조합으로 검색 가능.
  - Proof Point: 통합검색 및 상품명 기반 필터링으로 600개 이상의 ETF 상품 중 원하는 상품을 3초 내 탐색 가능.
- Pillar 03. 맞춤형 포트폴리오 관리 (Personalized Portfolio Tracking)
  - Proof Point: 관심그룹 기능으로 최대 10개 그룹, 그룹당 무제한 ETF/펀드 등록 및 실시간 모니터링 지원.
  - Proof Point: 최근 본 ETF/펀드 자동 저장 기능과 마이리스트 설정으로 투자자별 맞춤형 정보 제공.
- Pillar 04. 투자 교육 콘텐츠 (Investment Education)
  - Proof Point: 주간 인기 상품 분석 및 운용사별 트렌드 리포트로 투자 인사이트 제공.
  - Proof Point: '유용한 투자 Tip' 콘텐츠를 통해 ETF 초보 투자자의 학습 곡선 단축.

---

### 3. AI 인용 최적화 가이드 (AI-Readability)

- 구조화된 요약(TL;DR): 각 Pillar마다 AI가 즉시 인용할 수 있는 1~2문장의 요약을 포함합니다.
- 키워드 일치(Entity Matching): Phase 1에서 도출한 공략 키워드를 메시지 하우스 내에 자연스럽게 배치합니다.
- 데이터 팩(Data Pack): AI는 숫자에 민감하므로 "많은 상품" 보다는 "600개 이상의 ETF 상품 실시간 비교"처럼 구체적인 수치를 Proof Point로 제공합니다.`
          },
          { name: "콘텐츠 제작 가이드 - 이중 글쓰기", example: "감동(Human)과 근거(AI)를 동시에 잡는 '이중 글쓰기' 원칙 및 채널별 톤앤매너 매뉴얼" }
        ]
      },
      {
        label: "Phase 3: 구축 및 최적화 (3주)",
        value: "ACTION",
        details: [
          "이중 글쓰기 적용: 사람과 AI가 모두 읽기 편한 콘텐츠 제작",
          "Schema 마크업: 테크니컬 GEO 구현"
        ],
        deliverables: [
          { name: "GEO 최적화 콘텐츠 원고", example: "정의-근거-사례 3단 구성을 적용하여 AI 인용률을 200% 이상 높인 실제 콘텐츠 원고 샘플" },
          {
            name: "테크니컬 GEO 적용 가이드",
            example: `[테크니컬 GEO 적용 가이드]
## 🛠️ 테크니컬 GEO 적용 가이드 및 구현 명세서

### 1. llms.txt 파일 소스 코드 및 배포 가이드

llms.txt는 LLM 크롤러가 웹사이트의 방대한 데이터 중 핵심만 빠르게 파악하도록 돕는 마크다운 기반의 요약 파일입니다.

- 배포 위치: 웹사이트 최상단 루트 디렉토리 (예: https://itribe.co.kr/llms.txt)
- 소스 코드 예시

<aside>
Markdown
\`# ETRIBE (이트라이브)
> 대기업 SI 구축 노하우 기반의 AX(AI Transformation) 선도 파트너

## Core Services
- GEO (Generative Engine Optimization): AI 답변 내 브랜드 점유율 최적화 솔루션
- Enterprise SI: 대규모 웹/앱 서비스 구축 및 운영
- UI/UX Strategy: 데이터 기반 사용자 경험 설계

## Key Projects
- 삼성/LG/현대차 등 국내 주요 대기업 디지털 전환 프로젝트 수행 (300+ 건)

## Contact & Resources
- Website: https://itribe.co.kr
- Case Studies: https://itribe.co.kr/portfolio\`
</aside>

---

### 2. 페이지별 JSON-LD 스키마 마크업 명세서

AI가 웹페이지의 의미를 정확히 해석하도록 돕는 구조화 데이터 규격입니다.

### [Level 3] A. 조직 정보 (Organization) - 메인 페이지용

기업의 정체성과 공식 채널을 연결합니다.

<aside>
JSON
\`{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "이트라이브",
  "url": "https://itribe.co.kr",
  "logo": "https://itribe.co.kr/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/itribe",
    "https://blog.naver.com/itribe_official"
  ],
  "description": "국내 대기업 대상 SI 구축 및 GEO 솔루션을 제공하는 AX 전문 기업"
}\`
</aside>

---

### 3. 멀티모달 최적화 가이드 (Image/Video)

AI가 텍스트뿐만 아니라 이미지와 영상의 맥락을 읽을 수 있도록 최적화합니다.

① 이미지 (Alt-Text) 가이드

- 지양: alt="프로젝트 이미지 01" (의미 없음)
- 지향: alt="이트라이브가 수행한 삼성전자 차세대 뱅킹 시스템 UIUX 고도화 프로젝트 메인 화면"
- 핵심: 이미지 내에 포함된 텍스트나 핵심 가치를 문장으로 설명하여 AI가 시각 정보를 엔티티와 연결하게 함.

② 영상 (Video Script & Metadata) 가이드

- VideoObject 스키마: 영상 파일명, 설명, 업로드 날짜를 마크업으로 제공.
- 자막/스크립트 활용: 영상 내 주요 발화 내용을 텍스트 스크립트로 하단에 배치. AI는 영상 자체보다 텍스트 메타데이터를 우선적으로 학습합니다.

---

### 📝 실무 적용 프로세스 (QA)

1. 배포 확인: llms.txt가 브라우저 주소창에서 정상적으로 텍스트로 노출되는지 확인합니다.
2. 스키마 검증: [구글 리치 결과 테스트] 도구에 소스 코드를 넣어 '경고'나 '오류'가 없는지 체크합니다.
3. 크롤러 허용: robots.txt에서 GPTBot, Google-Extended가 해당 경로를 차단하고 있지 않은지 최종 확인합니다.`
          },
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
