import React, { useState } from 'react';
import { SlideData } from '../types';
import {
  Users, Bot, ArrowRight, ArrowDown, CheckCircle2, Search,
  Zap, BarChart2, Cpu, Check, X,
  Globe, Settings,
  ArrowUpRight, FileText,
  Layers, Webhook, Code2, Save, Calculator, BellRing,
  Image as ImageIcon, TrendingUp, Calendar, BarChart as BarChartIcon,
  Sparkles, History, Flag, Info, ShieldCheck,
  Handshake, Recycle, Code, Network,
  Box, ListOrdered, Quote, Smile, Eye, Plus, Target as TargetIcon,
  CheckSquare as CheckSquareIcon, Play, MousePointer2, MessageSquare, Database,
  ChevronRight, RefreshCw, Terminal, Activity, Binary,
  AlertTriangle, ExternalLink, Sparkle, TrendingUp as TrendingUpIcon,
  Repeat, ArrowRightCircle, Hammer, Workflow, ArrowRightLeft,
  User
} from 'lucide-react';

const SlideContent: React.FC<{ slide: SlideData }> = ({ slide }) => {
  const [selectedDeliverable, setSelectedDeliverable] = useState<{ name: string, example: string } | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const Target = TargetIcon;
  const CheckSquare = CheckSquareIcon;

  const closeModal = () => {
    setSelectedDeliverable(null);
    setSelectedImage(null);
  };

  const renderContent = () => {
    const PRIMARY_COLOR = "#4A362D";
    const SECONDARY_COLOR = "#C5A059";
    const BG_CREAM = "#F4F1ED";
    const ACCENT_BLUE = "#5B84B1";

    switch (slide.type) {
      case 'title':
        return (
<<<<<<< HEAD
          <div className="flex flex-col justify-center items-start text-left space-y-12 py-20 px-10">
            <div className="space-y-6">
              <h2 className="text-[#C05D17] text-3xl font-black tracking-tighter">
                FunETF <span className="text-[#4A362D] mx-2">×</span> ETRIBE
              </h2>
              <h1 className="text-7xl md:text-8xl font-black tracking-tighter text-[#111] leading-[1.05] max-w-5xl">
=======
          <div className="h-full flex flex-col justify-center items-start text-left space-y-16 py-10">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-1 bg-[#C5A059]" />
                <span className="text-[#C5A059] text-xl font-black uppercase tracking-[0.2em]">Luxury Aesthetic</span>
              </div>
              <h1 className="text-8xl md:text-9xl font-black tracking-tighter text-[#4A362D] leading-[1] max-w-5xl">
>>>>>>> acae0ce417c76241b8b2e82dbb6c006d8e53614f
                {slide.title}
              </h1>
              <p className="text-3xl text-slate-500 font-bold leading-relaxed max-w-4xl">
                {slide.subtitle}
              </p>
            </div>
<<<<<<< HEAD
            <div className="w-full h-1 bg-gradient-to-r from-[#C05D17] to-[#F5F3EF]" />
            <div className="max-w-3xl text-[#4A362D] text-2xl font-black leading-relaxed whitespace-pre-line bg-white/50 p-8 rounded-2xl border border-[#D6C7B9]">
              {slide.content}
=======

            <div className="flex flex-col space-y-8">
              <div className="flex items-center gap-6">
                <div className="px-8 py-4 bg-white border border-[#4A362D]/10 rounded-2xl shadow-sm text-2xl font-black text-[#4A362D]">
                  Samsung Asset Management <span className="text-[#C5A059] mx-2">×</span> ETRIBE
                </div>
              </div>
              <div className="max-w-3xl text-slate-800 text-2xl font-bold leading-relaxed whitespace-pre-line border-l-4 border-[#C5A059] pl-8">
                {slide.content}
              </div>
>>>>>>> acae0ce417c76241b8b2e82dbb6c006d8e53614f
            </div>
          </div>
        );

      case 'scale-up':
        return (
<<<<<<< HEAD
          <div className="flex flex-col space-y-10 py-10">
            <div className="flex flex-col space-y-2">
              <h2 className="text-5xl font-[950] text-[#111] tracking-tighter">{slide.title}</h2>
              <p className="text-slate-500 font-bold text-xl">{slide.subtitle}</p>
            </div>

            <div className="flex-1 grid grid-cols-3 gap-8 items-end pb-8 relative">
              <div className="absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue-100 via-purple-100 to-emerald-100 z-0 pointer-events-none" />

              {slide.items?.map((item, idx) => {
                const height = idx === 0 ? 'h-[320px]' : idx === 1 ? 'h-[400px]' : 'h-[480px]';
                const accent = idx === 0 ? 'bg-[#C05D17]' : idx === 1 ? 'bg-[#4A362D]' : 'bg-[#988476]';
                const textAccent = idx === 0 ? 'text-[#C05D17]' : idx === 1 ? 'text-[#4A362D]' : 'text-[#988476]';

                return (
                  <div key={idx} className="relative flex flex-col justify-end group z-10">
                    <div className={`${height} w-full bg-white border border-slate-200 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 p-8 flex flex-col relative overflow-hidden group-hover:-translate-y-2`}>
                      <div className={`absolute top-0 right-0 w-32 h-32 ${accent} opacity-[0.03] rounded-bl-[100px] transition-opacity group-hover:opacity-[0.08]`} />

                      <div className="mb-6">
                        <span className={`text-[20px] font-black ${textAccent} uppercase tracking-widest px-4 py-2 bg-slate-50 rounded-full border border-slate-100 inline-block mb-3`}>
                          {item.value}
                        </span>
                        <h4 className="text-2xl font-black text-slate-900 leading-tight">
                          {item.label}
                        </h4>
                      </div>

                      <div className="flex-1 space-y-4">
                        {item.details?.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-3">
                            <div className={`w-2.5 h-2.5 rounded-full ${accent}`} />
                            <span className="text-[20px] font-bold text-slate-500">{detail}</span>
                          </div>
                        ))}
                      </div>

=======
          <div className="h-full flex flex-col space-y-16">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-1 bg-[#C5A059]" />
                <span className="text-[#C5A059] text-sm font-black uppercase tracking-widest">Growth Roadmap</span>
              </div>
              <h2 className="text-6xl font-black text-[#4A362D] tracking-tighter">{slide.title}</h2>
              <p className="text-slate-500 font-bold text-2xl">{slide.subtitle}</p>
            </div>

            <div className="flex-1 grid grid-cols-3 gap-10">
              {slide.items?.map((item, idx) => (
                <div key={idx} className="relative flex flex-col group">
                  <div className="flex-1 bg-white border border-slate-100 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(74,54,45,0.05)] hover:shadow-[0_40px_80px_-15px_rgba(74,54,45,0.1)] transition-all duration-700 p-12 flex flex-col relative overflow-hidden group-hover:-translate-y-4">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#C5A059] opacity-[0.03] rounded-bl-full" />
>>>>>>> acae0ce417c76241b8b2e82dbb6c006d8e53614f

                    <div className="mb-10 flex flex-col gap-2">
                      <span className="text-sm font-black text-[#C5A059] uppercase tracking-[0.2em] mb-2">Step {idx + 1}</span>
                      <h4 className="text-3xl font-black text-[#4A362D] leading-tight">
                        {item.label}
                      </h4>
                      <p className="text-xl font-bold text-[#C5A059]">{item.value}</p>
                    </div>

                    <div className="flex-1 space-y-6">
                      {item.details?.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-4">
                          <div className="mt-2 w-2 h-2 rounded-full bg-[#C5A059]/40" />
                          <span className="text-xl font-bold text-slate-500 leading-snug">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {idx < 2 && (
                    <div className="absolute top-1/2 -right-5 translate-x-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-[#4A362D] rounded-full shadow-lg flex items-center justify-center text-white">
                      <ArrowRight size={20} strokeWidth={3} />
                    </div>
                  )}
                </div>
              ))}
            </div>

<<<<<<< HEAD
            <div className="bg-slate-900 p-8 rounded-[2.5rem] flex items-center gap-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="flex-shrink-0 w-20 h-20 bg-[#C05D17] rounded-3xl flex items-center justify-center text-white shadow-lg shadow-[#C05D17]/30">
                <Repeat className="w-10 h-10 animate-[spin_4s_linear_infinite]" />
              </div>
              <div className="flex-1">
                <p className="text-2xl font-black text-white leading-snug">
                  Continuous <span className="text-[#C05D17]">Monitoring & Feedback Loop</span>
=======
            <div className="bg-[#4A362D] p-10 rounded-[3rem] flex items-center gap-12 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#C5A059]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="flex-shrink-0 w-24 h-24 bg-[#C5A059] rounded-3xl flex items-center justify-center text-white shadow-xl">
                <Repeat className="w-12 h-12" />
              </div>
              <div className="flex-1">
                <p className="text-2xl font-black text-white leading-snug">
                  Strategic Feedback Loop
>>>>>>> acae0ce417c76241b8b2e82dbb6c006d8e53614f
                </p>
                <p className="text-xl font-bold text-slate-300 mt-2">
                  {slide.content}
                </p>
              </div>
              <div className="flex items-center gap-6">
                {['Analysis', 'Design', 'Action', 'Scale'].map((step, idx) => (
                  <React.Fragment key={idx}>
                    <span className="text-white text-lg font-black bg-white/5 border border-white/10 px-6 py-3 rounded-2xl uppercase tracking-widest">{step}</span>
                    {idx < 3 && <div className="w-4 h-0.5 bg-white/20" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        );

      case 'image-grid':
        return (
          <div className="h-full flex flex-col space-y-12">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-1 bg-[#C5A059]" />
                <span className="text-[#C5A059] text-sm font-black uppercase tracking-widest">Intelligence Analysis</span>
              </div>
              <h2 className="text-6xl font-black text-[#4A362D] tracking-tighter">{slide.title}</h2>
              <p className="text-slate-500 font-bold text-2xl">{slide.subtitle}</p>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-10">
              {slide.images?.map((img, idx) => (
                <div
                  key={idx}
                  className="relative bg-white rounded-[3rem] overflow-hidden border border-[#4A362D]/5 shadow-[0_20px_40px_rgba(74,54,45,0.03)] hover:shadow-[0_40px_80px_rgba(74,54,45,0.08)] transition-all duration-700 group cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
<<<<<<< HEAD
                  <div className="w-full relative">
                    <img
                      src={img}
                      alt={`Capture ${idx}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />



                    {/* Hover Content */}
                    <div className="absolute bottom-0 inset-x-0 p-10 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                      {slide.items?.[idx] && (
                        <div className="space-y-3">
                          <div className="w-12 h-1 bg-[#C05D17] rounded-full mb-4" />
                          <h4 className="text-[32px] font-[950] text-white tracking-tight leading-none drop-shadow-md">
                            {slide.items[idx].label}
                          </h4>
                          <p className="text-[22px] font-bold text-[#4A362D]/60 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#C05D17]" />
                            {slide.items[idx].value}
                          </p>
                        </div>
                      )}
                    </div>
=======
                  <img src={img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A362D]/90 via-[#4A362D]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute bottom-0 inset-x-0 p-12 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                    {slide.items?.[idx] && (
                      <div className="space-y-4">
                        <div className="w-16 h-1 bg-[#C5A059] rounded-full mb-6" />
                        <h4 className="text-4xl font-black text-white tracking-tight leading-tight">
                          {slide.items[idx].label}
                        </h4>
                        <p className="text-2xl font-bold text-[#C5A059] mb-2 uppercase tracking-tight">
                          {slide.items[idx].value}
                        </p>
                      </div>
                    )}
>>>>>>> acae0ce417c76241b8b2e82dbb6c006d8e53614f
                  </div>
                </div>
              ))}
            </div>

            {slide.content && (
<<<<<<< HEAD
              <div className="bg-[#FAF7F2] border border-[#D6C7B9] p-6 rounded-2xl flex items-center gap-6">
                <div className="bg-[#C05D17] text-white p-3 rounded-xl">
                  <Activity size={24} />
                </div>
                <p className="text-xl font-bold text-[#C05D17] leading-relaxed">
=======
              <div className="bg-white border border-[#4A362D]/10 px-8 py-6 rounded-3xl flex items-center gap-8 shadow-sm">
                <div className="bg-[#4A362D] text-white p-4 rounded-2xl shadow-lg">
                  <Activity size={28} />
                </div>
                <p className="text-2xl font-bold text-[#4A362D] leading-relaxed">
>>>>>>> acae0ce417c76241b8b2e82dbb6c006d8e53614f
                  {slide.content}
                </p>
              </div>
            )}
          </div>
        );

      case 'paradigm-shift':
        return (
<<<<<<< HEAD
          <div className="flex flex-col space-y-8 py-10">
            <div className="flex flex-col space-y-2">
              <h2 className="text-5xl font-[950] text-[#111] tracking-tighter">{slide.title}</h2>
              <p className="text-slate-500 font-bold text-xl">{slide.subtitle}</p>
=======
          <div className="h-full flex flex-col space-y-12">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-1 bg-[#C5A059]" />
                <span className="text-[#C5A059] text-sm font-black uppercase tracking-widest">Strategic Paradigm</span>
              </div>
              <h2 className="text-6xl font-black text-[#4A362D] tracking-tighter">{slide.title}</h2>
              <p className="text-slate-500 font-bold text-2xl">{slide.subtitle}</p>
>>>>>>> acae0ce417c76241b8b2e82dbb6c006d8e53614f
            </div>

            <div className="flex-1 flex flex-col space-y-10">
              <div className="grid grid-cols-[1fr_100px_1fr] items-center gap-10">
                <div className="bg-white rounded-[3rem] p-12 border border-[#4A362D]/5 shadow-sm relative group">
                  <span className="text-sm font-black text-slate-400 uppercase tracking-[0.3em] block mb-8">Traditional SEO</span>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <p className="text-sm font-black text-slate-300 uppercase">Focus</p>
                      <p className="text-3xl font-black text-slate-800">Traffic</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-black text-slate-300 uppercase">Process</p>
                      <p className="text-3xl font-black text-slate-800">Crawl & Index</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center">
<<<<<<< HEAD
                  <div className="w-10 h-10 bg-[#E8E2D9] rounded-full flex items-center justify-center text-[#C05D17]">
                    <ChevronRight size={24} strokeWidth={4} />
                  </div>
                  <span className="text-[20px] font-black text-[#C05D17] uppercase mt-2">SHIFT</span>
                </div>

                <div className="bg-[#FAF7F2] rounded-3xl p-8 border border-[#D6C7B9] relative group">
                  <span className="text-[20px] font-black text-[#C05D17] uppercase tracking-widest block mb-4">생성형 엔진 최적화 (GEO)</span>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#4A362D] shadow-md flex items-center justify-center text-white">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div className="h-0.5 flex-1 bg-[#D6C7B9] rounded-full" />
                    <div className="w-12 h-12 rounded-xl bg-[#C05D17] shadow-md flex items-center justify-center text-white">
                      <Zap className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-2xl border border-[#D6C7B9]">
                      <p className="text-[20px] font-bold text-[#C05D17]">핵심 목표</p>
                      <p className="text-[24px] font-black text-[#4A362D]">AI 답변 인용</p>
                    </div>
                    <div className="bg-[#4A362D] p-4 rounded-2xl shadow-sm">
                      <p className="text-[20px] font-bold text-[#F5F3EF]">사용자 경험</p>
                      <p className="text-[24px] font-black text-white">즉각 정답 획득</p>
=======
                  <div className="w-16 h-16 bg-[#C5A059] rounded-full flex items-center justify-center text-white shadow-xl">
                    <ArrowRight size={32} strokeWidth={3} />
                  </div>
                  <span className="text-[10px] font-black text-[#C5A059] uppercase mt-4 tracking-tighter">Luxury Transition</span>
                </div>

                <div className="bg-[#4A362D] rounded-[3rem] p-12 shadow-[0_30px_60px_-15px_rgba(74,54,45,0.3)] relative group">
                  <span className="text-sm font-black text-[#C5A059] uppercase tracking-[0.3em] block mb-8">Modern GEO</span>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <p className="text-sm font-black text-white/30 uppercase">Focus</p>
                      <p className="text-3xl font-black text-white">Citation</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-black text-white/30 uppercase">Process</p>
                      <p className="text-3xl font-black text-[#C5A059]">Learn & Cite</p>
>>>>>>> acae0ce417c76241b8b2e82dbb6c006d8e53614f
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-10">
                <div className="bg-white border border-[#4A362D]/5 p-10 rounded-[2.5rem] shadow-sm space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#4A362D]">
                      <MousePointer2 size={24} />
                    </div>
                    <h4 className="text-2xl font-black text-[#4A362D]">Zero-Click Experience</h4>
                  </div>
<<<<<<< HEAD
                  <p className="text-[20px] font-bold text-slate-500 leading-relaxed">
                    검색 후 웹사이트를 방문하던 방식에서, 채팅창 내에서 정보를 획득하고 종료하는 <span className="text-[#C05D17] font-black underline underline-offset-4">'제로클릭(Zero-Click)'</span> 소비가 가속화됩니다.
=======
                  <p className="text-xl font-bold text-slate-500 leading-relaxed">
                    AI interfaces now serve final answers directly. We pivot strategy to ensure <span className="text-[#C5A059] font-black underline underline-offset-8 decoration-[#C5A059]/30">brand dominance</span> within those answers.
>>>>>>> acae0ce417c76241b8b2e82dbb6c006d8e53614f
                  </p>
                </div>
                <div className="bg-white border border-[#4A362D]/5 p-10 rounded-[2.5rem] shadow-sm space-y-6">
                  <div className="flex items-center gap-4">
<<<<<<< HEAD
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-[#4A362D]">
                      <TargetIcon size={24} />
                    </div>
                    <h4 className="text-2xl font-black text-[#4A362D]">목표의 변화</h4>
                  </div>
                  <p className="text-[20px] font-bold text-slate-500 leading-relaxed">
                    노출 순위보다 AI 답변의 <span className="text-[#C05D17] font-black underline underline-offset-4">'추천 리스트'</span> 포함 및 신뢰도 높은 출처 인용 여부가 마케팅의 핵심 성과 지표가 됩니다.
                  </p>
                </div>
              </div>

              <div className="bg-slate-950 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <Sparkles size={160} className="text-[#0055FF]" />
                </div>
                <div className="relative z-10 flex items-center gap-10">
                  <div className="flex-shrink-0 text-center">
                    <div className="bg-[#4A362D] text-white px-4 py-1.5 rounded-full font-black text-[20px] tracking-widest mb-3 inline-block">
                      DEFINITION
                    </div>
                    <h3 className="text-3xl font-black text-white leading-tight">지능형<br />최적화</h3>
                  </div>
                  <div className="w-px h-24 bg-slate-800" />
                  <p className="text-[26px] font-bold text-slate-300 leading-relaxed flex-1">
                    인공지능(AI)이 브랜드를 <span className="text-white font-black underline underline-offset-4 decoration-white/50">가장 신뢰할 수 있는 정보원</span>으로 인식하게 하여,<br />
                    답변 생성 시 우리 정보를 우선적으로 인용하게 만드는 <span className="text-[#C05D17] font-black">차세대 데이터 구조화 최적화 전략</span>입니다.
=======
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#4A362D]">
                      <TargetIcon size={24} />
                    </div>
                    <h4 className="text-2xl font-black text-[#4A362D]">Authority Metrics</h4>
                  </div>
                  <p className="text-xl font-bold text-slate-500 leading-relaxed">
                    Traffic is no longer the only goal. <span className="text-[#C5A059] font-black underline underline-offset-8 decoration-[#C5A059]/30">Citation Frequency</span> and Answer Accuracy are the new KPIs for digital leadership.
>>>>>>> acae0ce417c76241b8b2e82dbb6c006d8e53614f
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'ai-mechanism':
        return (
<<<<<<< HEAD
          <div className="flex flex-col space-y-6 py-10">
            <div className="flex flex-col space-y-2 text-center">
              <h2 className="text-5xl font-[950] text-[#111] tracking-tighter">{slide.title}</h2>
              <p className="text-slate-500 font-bold text-xl">{slide.subtitle}</p>
=======
          <div className="h-full flex flex-col space-y-12">
            <div className="flex flex-col space-y-4 text-center items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-1 bg-[#C5A059]" />
                <span className="text-[#C5A059] text-sm font-black uppercase tracking-widest">Logic Flow</span>
              </div>
              <h2 className="text-6xl font-black text-[#4A362D] tracking-tighter">{slide.title}</h2>
              <p className="text-slate-500 font-bold text-2xl">{slide.subtitle}</p>
>>>>>>> acae0ce417c76241b8b2e82dbb6c006d8e53614f
            </div>

            <div className="flex-1 grid grid-cols-4 gap-8">
              {slide.items?.map((step, idx) => (
<<<<<<< HEAD
                <div key={idx} className={`relative flex flex-col rounded-[3rem] border transition-all duration-500 hover:-translate-y-2 ${idx === 1 ? 'bg-rose-50 border-rose-200 shadow-xl shadow-rose-100/50' : 'bg-white border-slate-100 shadow-sm hover:shadow-xl'}`}>
                  {/* Larger Image Section */}
                  <div
                    className={`w-full h-64 bg-slate-100 rounded-t-[3rem] flex items-center justify-center overflow-hidden relative group cursor-pointer`}
                    onClick={() => (step as any).image && setSelectedImage((step as any).image)}
                  >
                    <div className="absolute inset-0">
                      {(step as any).image ? (
                        <img src={(step as any).image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-50">
                          <ImageIcon className="w-16 h-16 text-slate-200" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-colors" />
                    </div>


                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <div className="space-y-4 text-center">
                      <h4 className={`text-[28px] font-[950] tracking-tight leading-tight ${idx === 1 ? 'text-rose-600' : 'text-slate-900'}`}>{step.label}</h4>
                      <p className="text-[20px] font-bold text-slate-500 leading-snug">{step.value}</p>
                    </div>

                    {step.details && (
                      <div className="mt-8 space-y-3 pt-6 border-t border-slate-100/80 flex-1">
                        {step.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-center justify-center gap-3">
                            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${idx === 1 ? 'bg-[#C05D17]' : 'bg-[#4A362D]'}`} />
                            <span className="text-[19px] font-semibold text-slate-400 leading-tight">{detail}</span>
                          </div>
                        ))}
=======
                <div key={idx} className={`relative flex flex-col rounded-[3.5rem] border-2 transition-all duration-700 bg-white hover:-translate-y-4 ${idx === 1 ? 'border-[#C5A059] shadow-[0_40px_80px_rgba(197,160,89,0.15)]' : 'border-slate-50 shadow-sm hover:shadow-2xl'}`}>
                  <div className="w-full h-56 rounded-t-[3.3rem] overflow-hidden relative cursor-pointer group" onClick={() => (step as any).image && setSelectedImage((step as any).image)}>
                    {(step as any).image ? (
                      <img src={(step as any).image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    ) : (
                      <div className="w-full h-full bg-[#F4F1ED] flex items-center justify-center text-[#4A362D]/20">
                        <ImageIcon size={48} />
>>>>>>> acae0ce417c76241b8b2e82dbb6c006d8e53614f
                      </div>
                    )
                    }
                    <div className="absolute inset-0 bg-[#4A362D]/5 group-hover:bg-transparent transition-colors" />
                    <div className="absolute top-6 left-8 bg-[#4A362D] text-white px-4 py-2 rounded-full shadow-lg">
                      <span className="text-xs font-black uppercase tracking-tighter">Phase 0{idx + 1}</span>
                    </div>
                  </div>

                  <div className="p-10 flex flex-col flex-1">
                    <div className="space-y-4 mb-2 text-center">
                      <h4 className={`text-2xl font-black tracking-tight leading-tight ${idx === 1 ? 'text-[#C5A059]' : 'text-[#4A362D]'}`}>{step.label}</h4>
                      <p className="text-lg font-bold text-slate-500 leading-snug">{step.value}</p>
                    </div>

                    <div className="mt-8 space-y-4 pt-8 border-t border-slate-50 flex-1">
                      {step.details?.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-3">
                          <div className={`w-1.5 h-1.5 rounded-full ${idx === 1 ? 'bg-[#C5A059]' : 'bg-[#4A362D]/10'}`} />
                          <span className="text-lg font-bold text-slate-400">{getStrippedDetail(detail)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#B22222] px-12 py-8 rounded-[3rem] flex items-center gap-12 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.05] transition-opacity duration-700" />
              <div className="flex-shrink-0 bg-white/20 p-5 rounded-3xl border border-white/20 backdrop-blur-md">
                <AlertTriangle className="text-white w-10 h-10" />
              </div>
              <div className="flex-1">
                <p className="text-3xl font-black text-white leading-snug">
                  <span className="bg-white text-[#B22222] px-4 py-1.5 rounded-xl mr-6 text-xl font-black">CRITICAL RISK</span>
                  Insufficient <span className="underline underline-offset-8 decoration-white/40 italic">Schema Data</span> leads to structural exclusion during AI training cycles.
                </p>
              </div>
            </div>
          </div>
        );

<<<<<<< HEAD
      case 'table':
        return (
          <div className="h-full flex flex-col space-y-10">
            <div className="flex flex-col space-y-2">
              <h2 className="text-5xl font-[950] text-[#111] tracking-tighter">{slide.title}</h2>
              <p className="text-slate-500 font-bold text-xl">{slide.subtitle}</p>
            </div>

            {slide.id === 5 && Array.isArray(slide.content) && slide.content.length >= 2 && (
              <div className="grid grid-cols-2 gap-8 flex-shrink-0">
                {[
                  {
                    title: "단기 목표",
                    desc: slide.content[0].includes(':') ? slide.content[0].split(':')[1].trim() : slide.content[0],
                    icon: Target,
                    color: "text-[#C05D17]",
                    bg: "bg-[#F5F3EF]"
                  },
                  {
                    title: "중장기 목표",
                    desc: slide.content[1].includes(':') ? slide.content[1].split(':')[1].trim() : slide.content[1],
                    icon: Globe,
                    color: "text-[#E91E63]",
                    bg: "bg-pink-50"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm flex items-center gap-8 group hover:shadow-md transition-all">
                    <div className={`w-20 h-20 rounded-3xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                      <item.icon className={`w-10 h-10 ${item.color} `} />
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-[14px] font-extrabold ${item.color} uppercase tracking-wider mb-2`}>{item.title}</h4>
                      <p className="text-2xl font-bold text-[#111] leading-snug tracking-tight">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="w-full flex-shrink-0">
              <div className="w-full bg-white border-2 border-[#B18B5E] rounded-2xl h-20 px-10 flex items-center justify-between shadow-sm">
                <span className="text-[#B18B5E] font-extrabold text-[20px] tracking-tight">
                  {slide.id === 5 ? "구축 프로세스별 상세 과업과 산출물을 한눈에 확인해 보세요!" : slide.subtitle}
                </span>
                <div className="bg-[#B18B5E] rounded-full p-3">
                  <Search className="w-8 h-8 text-white stroke-[3]" />
                </div>
              </div>
            </div>

            <div className="flex-1 bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden flex flex-col min-h-0 py-8">
              <div className="flex-1 flex flex-col">
                <div className="bg-[#4A362D]/90 text-white">
                  <div className="grid grid-cols-[140px_1fr_2fr_2fr_160px] divide-x divide-white/20">
                    {slide.tableData?.headers.map((h, i) => (
                      <div key={i} className="px-8 py-5 text-[15px] font-bold uppercase tracking-tight text-center">
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 divide-y divide-slate-100">
                  {slide.tableData?.rows.map((row, i) => (
                    <div key={i} className="grid grid-cols-[140px_1fr_2fr_2fr_160px] divide-x divide-slate-50 hover:bg-[#F5F3EF] transition-colors items-center h-20">
                      {row.map((cell, j) => (
                        <div key={j} className={`px-8 h-full flex items-center justify-center text-center text-[16px] ${j === 1 ? 'font-bold text-[#111]' : j === 0 ? 'text-slate-400 font-bold' : 'text-slate-500 font-medium'}`}>
                          {cell}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'pillars':
        return (
          <div className="h-full flex flex-col space-y-8 relative">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="flex items-center justify-between pb-6 border-b border-slate-200/50 relative z-10">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4A362D] to-[#322621] flex items-center justify-center text-white shadow-xl">
                  <Sparkle className="w-8 h-8 animate-pulse text-white" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-4xl font-[950] text-[#4A362D] tracking-tighter leading-none">
                    {slide.title}
                  </h2>
                  <p className="text-slate-500 font-bold text-[20px] mt-2 tracking-tight">{slide.subtitle}</p>
                </div>
=======
      case 'pillars':
        return (
          <div className="h-full flex flex-col space-y-12">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-1 bg-[#C5A059]" />
                <span className="text-[#C5A059] text-sm font-black uppercase tracking-widest">Process Engineering</span>
>>>>>>> acae0ce417c76241b8b2e82dbb6c006d8e53614f
              </div>
              <h2 className="text-6xl font-black text-[#4A362D] tracking-tighter">{slide.title}</h2>
              <p className="text-slate-500 font-bold text-2xl">{slide.subtitle}</p>
            </div>

<<<<<<< HEAD
            <div className="grid grid-cols-3 gap-8 flex-1 min-h-0 relative z-10">
              {slide.items?.map((item, idx) => {
                const IconComp = idx === 0 ? Search : idx === 1 ? Target : Play;
                const accentColor = idx === 0 ? "text-blue-600" : idx === 1 ? "text-purple-600" : "text-emerald-600";
                const accentBg = idx === 0 ? "bg-blue-600" : idx === 1 ? "bg-purple-600" : "bg-emerald-600";
                const glowColor = idx === 0 ? "shadow-blue-200/50" : idx === 1 ? "shadow-purple-200/50" : "shadow-emerald-200/50";

                return (
                  <div key={idx} className="flex flex-col h-full bg-white/40 backdrop-blur-xl border border-white/60 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group/card relative">
                    <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-${idx === 0 ? 'blue' : idx === 1 ? 'purple' : 'emerald'}-400/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity`} />

                    <div className="px-10 py-8 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-2xl bg-white shadow-lg ${glowColor} group-hover/card:scale-110 transition-transform`}>
                          <IconComp className={`w-6 h-6 ${accentColor} `} strokeWidth={3} />
                        </div>
                        <h3 className="text-2xl font-[900] text-[#4A362D] tracking-tight">{item.label}</h3>
=======
            <div className="flex-1 grid grid-cols-3 gap-10 pb-8">
              {slide.items?.map((item, idx) => (
                <div key={idx} className="flex flex-col bg-white border border-[#4A362D]/5 rounded-[3.5rem] shadow-[0_20px_50px_rgba(74,54,45,0.02)] hover:shadow-[0_40px_80px_rgba(74,54,45,0.06)] transition-all duration-700 overflow-hidden group">
                  <div className="bg-[#4A362D]/5 p-10 flex items-center justify-between border-b border-[#4A362D]/5">
                    <div className="flex items-center gap-5">
                      <div className="p-4 bg-white rounded-2xl shadow-sm text-[#4A362D] group-hover:bg-[#4A362D] group-hover:text-white transition-all duration-500">
                        {idx === 0 ? <Search size={28} /> : idx === 1 ? <Target size={28} /> : <Play size={28} />}
>>>>>>> acae0ce417c76241b8b2e82dbb6c006d8e53614f
                      </div>
                      <h3 className="text-3xl font-black text-[#4A362D]">{item.label}</h3>
                    </div>
                  </div>

                  <div className="p-10 flex-1 flex flex-col space-y-10">
                    <div className="space-y-6 flex-1">
                      {item.details?.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-4 p-4 bg-slate-50/50 rounded-2xl border border-transparent hover:border-[#4A362D]/10 hover:bg-white transition-all">
                          <div className="mt-1.5 w-4 h-4 rounded-full border-[3px] border-[#C5A059] bg-white flex-shrink-0" />
                          <span className="text-lg font-bold text-slate-500 leading-snug">{getStrippedDetail(detail)}</span>
                        </div>
                      ))}
                    </div>

                    {item.deliverables && (
                      <div className="pt-10 border-t border-slate-100 space-y-6">
                        <span className="text-xs font-black text-[#C5A059] uppercase tracking-[0.2em] block">Official Outputs</span>
                        <div className="grid grid-cols-1 gap-3">
                          {item.deliverables.map((del, delIdx) => (
                            <button
                              key={delIdx}
                              onClick={() => del.example && setSelectedDeliverable(del)}
                              className={`flex items-center justify-between px-6 py-5 rounded-2xl transition-all ${del.example ? 'bg-[#4A362D] text-white hover:bg-[#33251F] shadow-xl' : 'bg-slate-50 text-slate-300 cursor-default'}`}
                            >
                              <div className="flex items-center gap-3">
                                <FileText size={18} className={del.example ? 'text-[#C5A059]' : 'text-slate-200'} />
                                <span className="text-xl font-black">{del.name}</span>
                              </div>
                              {del.example && <ArrowUpRight size={20} />}
                            </button>
                          ))}
                        </div>
                      </div>
<<<<<<< HEAD

                      {item.deliverables && (
                        <div className="mt-auto pt-8 border-t border-slate-200/40">
                          <div className="flex items-center justify-between mb-6">
                            <span className={`text-[18px] font-black ${accentColor} uppercase tracking-widest flex items-center gap-2`}>
                              <Database size={14} /> 핵심 산출물
                            </span>
                          </div>
                          <div className="grid grid-cols-1 gap-3">
                            {item.deliverables.map((del, delIdx) => {
                              const isClickable = del.example && del.example.length > 100;

                              if (!isClickable) {
                                return (
                                  <div
                                    key={delIdx}
                                    className="relative flex items-center justify-between px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl text-left transition-all duration-300 overflow-hidden"
                                  >
                                    <div className="flex items-center gap-4 relative z-10">
                                      <FileText className="w-5 h-5 text-slate-300" />
                                      <span className="text-[18px] font-[700] text-slate-400">
                                        {del.name}
                                      </span>
                                    </div>
                                    <div className="text-[11px] font-black text-slate-300 uppercase tracking-widest bg-slate-100/50 px-2 py-1 rounded">Planned</div>
                                  </div>
                                );
                              }

                              return (
                                <button
                                  key={delIdx}
                                  onClick={() => setSelectedDeliverable(del)}
                                  className="group/btn relative flex items-center justify-between px-6 py-5 bg-slate-900/5 hover:bg-slate-900 border border-slate-900/5 hover:border-slate-900 rounded-2xl text-left transition-all duration-300 overflow-hidden shadow-sm"
                                >
                                  <div className="flex items-center gap-4 relative z-10">
                                    <FileText className="w-5 h-5 text-slate-400 group-hover/btn:text-blue-400 transition-colors" />
                                    <span className="text-[18px] font-[800] text-slate-700 group-hover/btn:text-white transition-colors">
                                      {del.name}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2 relative z-10">
                                    <span className="text-[11px] font-black text-[#C05D17] group-hover/btn:text-[#F5F3EF] uppercase tracking-widest opacity-0 group-hover/btn:opacity-100 transition-all">View Report</span>
                                    <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover/btn:text-white" />
                                  </div>
                                  <div className={`absolute inset-0 bg-gradient-to-r from-${idx === 0 ? 'blue' : idx === 1 ? 'purple' : 'emerald'}-600/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity`} />
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
=======
                    )}
>>>>>>> acae0ce417c76241b8b2e82dbb6c006d8e53614f
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'pipeline':
        return (
<<<<<<< HEAD
          <div className="flex flex-col space-y-12 py-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#4A362D] flex items-center justify-center text-white shadow-xl rotate-3">
                  <Cpu className="w-10 h-10" />
                </div>
                <div>
                  <h2 className="text-5xl font-[950] text-[#4A362D] tracking-tight">{slide.title}</h2>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">Claude-3.5-Sonnet Active</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="px-6 py-3 bg-[#E8E2D9] border border-[#D6C7B9] rounded-xl text-[#4A362D] text-sm font-black uppercase tracking-widest">Analysis Module</div>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pr-4">
              {slide.items?.map((item, idx) => {
                const Icon = contentIcons[item.label] || Sparkles;
                return (
                  <div key={idx} className="bg-white border border-slate-200 rounded-[2.5rem] p-10 flex flex-col shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all group overflow-hidden relative">
                    <div className="absolute -bottom-6 -right-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                      <Icon size={160} />
                    </div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 bg-[#F5F3EF] rounded-2xl flex items-center justify-center text-[#C05D17] group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 stroke-[2.5]" />
                      </div>
                      <span className="text-[11px] font-black text-slate-300 uppercase tracking-widest">Feature 0{idx + 1}</span>
                    </div>
                    <div className="space-y-4 flex-1 relative z-10">
                      <h4 className="text-3xl font-black text-[#4A362D] tracking-tight group-hover:text-[#C05D17] transition-colors">{item.label}</h4>
                      <div className="w-12 h-1.5 bg-[#D6C7B9] group-hover:w-24 transition-all" />
                      <p className="text-[18px] text-slate-500 font-bold leading-relaxed pt-4">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }

      case 'flow': {
        const flowIcons = [Webhook, Layers, Code2, Save, Calculator, BellRing];
        return (
          <div className="flex flex-col py-10">
            <div className="flex items-center gap-6 flex-shrink-0 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-900 shadow-sm border border-slate-200">
                <Zap className="w-8 h-8" />
              </div>
              <h2 className="text-5xl font-[950] text-[#111] tracking-tight">{slide.title}</h2>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-x-12 gap-y-8 pb-12">
                {slide.items?.map((item, idx) => {
                  const Icon = flowIcons[idx] || CheckCircle2;
                  return (
                    <div key={idx} className="flex items-start gap-6 group">
                      <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-sm group-hover:border-[#C05D17] group-hover:bg-[#FAF7F2] transition-all flex-shrink-0 mt-1">
                        <Icon className="w-8 h-8 text-slate-400 group-hover:text-[#C05D17] transition-colors" />
                      </div>
                      <div className="flex-1 bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-[11px] font-extrabold text-[#C05D17] uppercase tracking-widest px-2.5 py-1 rounded bg-[#E8E2D9]">Step 0{idx + 1}</span>
                        </div>
                        <h4 className="text-2xl font-black text-[#4A362D] mb-2">{item.label}</h4>
                        <p className="text-[15px] text-slate-500 font-medium leading-relaxed">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      }
      case 'pipeline': {
        return (
          <div className="flex flex-col space-y-6 py-10">
            <div className="flex flex-col space-y-2 flex-shrink-0">
              <h2 className="text-4xl font-[950] text-[#4A362D] tracking-tighter">{slide.title}</h2>
              <p className="text-slate-500 font-bold text-lg">{slide.subtitle}</p>
            </div>

            <div className="flex-1 flex flex-col gap-6">
              {/* Top Section: Process Flows */}
              <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
                {/* Manual Work Column */}
                <div className="bg-white border border-[#D6C7B9] rounded-[2.5rem] p-8 flex flex-col items-center justify-center shadow-sm relative overflow-hidden group hover:border-[#C05D17]/30 transition-colors">
                  <div className="absolute top-0 inset-x-0 h-1 bg-[#C05D17] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="mb-8 flex items-center gap-2">
                    <User size={16} className="text-[#C05D17]" />
                    <span className="text-[20px] font-black text-[#988476] uppercase tracking-widest">Manual Work</span>
                  </div>

                  <div className="space-y-4 w-full max-w-xs">
                    {['시크릿 모드 브라우저', '플랫폼별 질문 입력', '응답 데이터 복사'].map((step, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="w-full bg-white border border-[#D6C7B9] rounded-2xl py-3 px-6 text-center shadow-sm relative z-10">
                          <span className="block text-[20px] font-bold text-[#C05D17] mb-1 uppercase">Step 0{i + 1}</span>
                          <span className="text-[20px] font-bold text-[#4A362D]">{step}</span>
                        </div>
                        {i < 2 && <ArrowDown size={16} className="text-slate-200 my-2" />}
                      </div>
                    ))}
                    <ArrowDown size={16} className="text-slate-200 mx-auto my-2" />
                    <div className="w-full bg-slate-800 rounded-2xl py-3 px-6 text-center shadow-lg relative z-10">
                      <span className="block text-[20px] font-bold text-slate-400 mb-1 uppercase">Step 04</span>
                      <span className="text-[20px] font-bold text-white">Google Sheets 붙여넣기</span>
                    </div>
                  </div>
                </div>

                {/* AI Automation Column */}
                <div className="bg-[#FAF7F2]/50 border border-[#D6C7B9] rounded-[2.5rem] p-8 flex flex-col items-center justify-center shadow-sm relative overflow-hidden">
                  <div className="mb-8 flex items-center gap-2">
                    <Bot size={16} className="text-[#C05D17]" />
                    <span className="text-[20px] font-black text-[#988476] uppercase tracking-widest">AI Automation</span>
                  </div>

                  <div className="space-y-6 w-full max-w-sm flex flex-col items-center">
                    {/* Engine Card */}
                    <div className="w-full bg-white/80 border border-[#D6C7B9]/50 rounded-3xl p-6 shadow-sm backdrop-blur-sm">
                      <div className="flex items-center gap-2 mb-4 justify-center">
                        <Cpu size={16} className="text-[#C05D17]" />
                        <span className="text-[20px] font-black text-[#4A362D] uppercase">Engine: Claude Sonnet</span>
                      </div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[20px] font-medium text-slate-500">
                        {['언급 여부', '순위 추출', '맥락 파악', '감성 분석', '경쟁사 감지', '지표 집계'].map((item, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <div className="w-1 h-1 rounded-full bg-blue-400" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <ArrowDown size={16} className="text-[#D6C7B9]" />

                    <div className="w-full bg-white border border-[#D6C7B9] rounded-2xl py-3 px-6 text-center shadow-sm">
                      <span className="block text-[20px] font-bold text-[#C05D17] mb-1 uppercase">Step 05</span>
                      <span className="text-[20px] font-bold text-[#4A362D]">분석 데이터 자동 적재</span>
                    </div>

                    <ArrowDown size={16} className="text-[#D6C7B9]" />

                    <div className="w-full bg-[#4A362D] rounded-2xl py-4 px-6 text-center shadow-lg shadow-[#4A362D]/30">
                      <span className="block text-[20px] font-bold text-[#C05D17] mb-1 uppercase">Output</span>
                      <span className="text-[24px] font-black text-white">대시보드 & 리포트 자동화</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Section: Roles */}
              <div className="h-40 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl flex overflow-hidden">
                {/* Human Role */}
                <div className="flex-1 p-8 flex items-center gap-6 border-r border-[#D6C7B9] group hover:bg-[#F5F3EF]/50 transition-colors">
                  <div className="w-16 h-16 rounded-2xl bg-[#F5F3EF] border border-[#D6C7B9] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <User className="w-8 h-8 text-[#C05D17]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[20px] font-black text-[#C05D17] uppercase tracking-widest mb-1 block">Human Role</span>
                    <h3 className="text-[26px] font-black text-[#4A362D] mb-1">질문하고 응답 복사해서 붙여넣기</h3>
                    <p className="text-[20px] font-medium text-[#988476]">기존 분석 방식 대비 입력 공수 80% 절감</p>
                  </div>
                </div>

                {/* AI Role */}
                <div className="flex-1 p-8 flex items-center gap-6 group hover:bg-[#4A362D]/5 transition-colors bg-[#4A362D]/2">
                  <div className="w-16 h-16 rounded-2xl bg-[#4A362D] shadow-lg shadow-[#4A362D]/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Bot className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[20px] font-black text-[#C05D17] uppercase tracking-widest mb-1 block">AI Engine Role</span>
                    <h3 className="text-[26px] font-black text-[#4A362D] mb-1">모든 분석, 판단, 집계, 리포팅 자동화</h3>
                    <p className="text-[20px] font-medium text-[#988476]">인적 오류 배제 및 실시간 통찰력 제공</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
      case 'full-image':
        return (
          <div className="flex flex-col space-y-8 py-10">
            <div className="flex flex-col space-y-2 flex-shrink-0">
              <h2 className="text-5xl font-[950] text-[#4A362D] tracking-tighter">{slide.title}</h2>
              <p className="text-slate-500 font-bold text-xl">{slide.subtitle}</p>
            </div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 bg-white group min-h-[600px]">
              <div className="w-full h-full relative overflow-hidden">
                <img
                  src={slide.content as string}
                  alt="Dashboard View"
                  className="w-full object-cover object-top hover:scale-[1.02] transition-transform duration-700 origin-top"
                />
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 rounded-[2.5rem]" />
              </div>
=======
          <div className="h-full flex flex-col space-y-12">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-1 bg-[#C5A059]" />
                <span className="text-[#C5A059] text-sm font-black uppercase tracking-widest">Automation Pipeline</span>
              </div>
              <h2 className="text-6xl font-black text-[#4A362D] tracking-tighter">{slide.title}</h2>
              <p className="text-slate-500 font-bold text-2xl">{slide.subtitle}</p>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-10 min-h-0">
              <div className="bg-white border border-[#4A362D]/5 rounded-[3.5rem] p-12 flex flex-col items-center justify-center shadow-sm relative group overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-2 bg-[#C5A059] opacity-20" />
                <div className="mb-12 flex items-center gap-3">
                  <User size={20} className="text-[#C5A059]" />
                  <span className="text-sm font-black text-slate-400 uppercase tracking-[0.3em]">Human Insight</span>
                </div>
                <div className="space-y-6 w-full max-w-sm">
                  {['Private Browser Shell', 'Question Engineering', 'Raw Data Ingestion'].map((step, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="w-full bg-[#F4F1ED]/50 rounded-2xl py-5 px-8 text-center border border-[#4A362D]/10">
                        <span className="text-xl font-bold text-[#4A362D]/70">{step}</span>
                      </div>
                      {i < 2 && <ArrowDown size={18} className="text-slate-200 my-3" />}
                    </div>
                  ))}
                  <ArrowDown size={18} className="text-slate-200 mx-auto my-3" />
                  <div className="w-full bg-[#333] rounded-[2rem] py-6 px-10 text-center shadow-2xl">
                    <span className="text-xl font-black text-[#C5A059] tracking-tight">Structured Data Staging</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#4A362D] rounded-[3.5rem] p-12 flex flex-col items-center justify-center shadow-2xl relative group overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-2 bg-[#C5A059]" />
                <div className="mb-12 flex items-center gap-3 text-white/50">
                  <Bot size={20} />
                  <span className="text-sm font-black uppercase tracking-[0.3em]">AI Synthesis Engine</span>
                </div>
                <div className="space-y-8 w-full max-w-sm flex flex-col items-center">
                  <div className="w-full bg-white/5 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-3xl">
                    <div className="flex items-center gap-3 mb-8 justify-center">
                      <Cpu size={24} className="text-[#C5A059]" />
                      <span className="text-xl font-black text-white uppercase tracking-widest">Model: Claude 3.5</span>
                    </div>
                    <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                      {['Citation Map', 'Positional Audit', 'Sentiment Trace', 'Market Delta'].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                          <span className="text-lg font-bold text-white/40">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <ArrowDown size={24} className="text-[#C5A059]" />
                  <div className="w-full bg-[#C5A059] rounded-[2.2rem] py-[1.2rem] px-10 text-center shadow-[0_25px_60px_rgba(197,160,89,0.3)] border border-white/20">
                    <span className="text-2xl font-black text-[#4A362D] tracking-tight">Executive Dashboarding</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-[#4A362D]/5 rounded-[3rem] p-8 flex gap-10 items-center shadow-sm">
              <div className="flex-1 flex items-center gap-6 p-6 border-r border-slate-100/50">
                <div className="w-20 h-20 rounded-[2rem] bg-[#F4F1ED] flex items-center justify-center text-[#4A362D]">
                  <User size={36} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#4A362D] mb-1">Human Role</h3>
                  <p className="text-lg font-bold text-slate-400">Strategic Intent Mapping</p>
                </div>
              </div>
              <div className="flex-1 flex items-center gap-6 p-6">
                <div className="w-20 h-20 rounded-[2rem] bg-[#4A362D] flex items-center justify-center text-[#C5A059] shadow-inner">
                  <Bot size={36} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#4A362D] mb-1">AI Processor</h3>
                  <p className="text-lg font-bold text-slate-400">Automated Market Distillation</p>
                </div>
              </div>
>>>>>>> acae0ce417c76241b8b2e82dbb6c006d8e53614f
            </div>
          </div>
        );

      case 'master-plan':
        const checklists = slide.items?.[1]?.details as any[] || [];
        const reports = slide.items?.[3]?.details as any[] || [];

        return (
<<<<<<< HEAD
          <div className="flex flex-col space-y-6 py-10">
            <div className="flex justify-between items-end flex-shrink-0">
              <div className="flex flex-col space-y-2">
                <h2 className="text-4xl font-[950] text-[#4A362D] tracking-tighter">{slide.title}</h2>
                <p className="text-slate-500 font-bold text-lg">{slide.subtitle}</p>
=======
          <div className="h-full flex flex-col space-y-12">
            <div className="flex justify-between items-end">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-1 bg-[#C5A059]" />
                  <span className="text-[#C5A059] text-sm font-black uppercase tracking-widest">Sustainability</span>
                </div>
                <h2 className="text-6xl font-black text-[#4A362D] tracking-tighter">{slide.title}</h2>
                <p className="text-slate-500 font-bold text-2xl">{slide.subtitle}</p>
>>>>>>> acae0ce417c76241b8b2e82dbb6c006d8e53614f
              </div>

              <div className="flex gap-4">
                {reports.map((report, idx) => (
<<<<<<< HEAD
                  <div key={idx} className="bg-white border border-slate-200 px-6 py-4 rounded-2xl flex items-center gap-4 hover:border-[#B18B5E] hover:shadow-lg transition-all cursor-default group">
                    <div className="bg-[#FAF7F2] p-2.5 rounded-xl group-hover:bg-[#E8DCC6]/40 transition-colors">
                      <FileText size={20} className="text-[#B18B5E]" strokeWidth={2.5} />
=======
                  <div key={idx} className="bg-white border border-[#4A362D]/5 px-8 py-5 rounded-[2.5rem] flex items-center gap-4 group hover:border-[#C5A059]/30 transition-all">
                    <div className="bg-[#F4F1ED] p-3 rounded-2xl group-hover:bg-[#C5A059] group-hover:text-white transition-all duration-500 text-[#4A362D]">
                      <FileText size={20} className="group-hover:text-white" />
>>>>>>> acae0ce417c76241b8b2e82dbb6c006d8e53614f
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-black text-slate-300 uppercase tracking-widest mb-1">{report.title}</span>
                      <span className="text-xl font-black text-[#4A362D] leading-none">{report.schedule}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

<<<<<<< HEAD
            {/* 1. Timeline Section */}
            <div className="w-full bg-white border border-slate-200 rounded-[1.5rem] shadow-xl flex-shrink-0 flex flex-col overflow-hidden relative">
              {/* Months Header */}
              <div className="flex border-b border-slate-200 bg-slate-50/50">
                <div className="flex-[4] py-3 text-center border-r border-slate-200 flex flex-col justify-center">
                  <span className="text-sm font-black text-slate-400 tracking-widest uppercase">Month 01</span>
                </div>
                <div className="flex-[4] py-3 text-center border-r border-slate-200 flex flex-col justify-center">
                  <span className="text-sm font-black text-slate-400 tracking-widest uppercase">Month 02</span>
                </div>
                <div className="flex-[5] py-3 text-center flex flex-col justify-center">
                  <span className="text-sm font-black text-slate-400 tracking-widest uppercase">Month 03</span>
                </div>
              </div>

              {/* Weeks Header */}
              <div className="flex border-b border-slate-100">
                {Array.from({ length: 13 }).map((_, i) => (
                  <div key={i} className={`flex-1 py-2 text-center flex flex-col justify-center ${i < 12 ? 'border-r border-slate-50' : ''}`}>
                    <span className="text-xs font-bold text-slate-300">W{i + 1}</span>
                  </div>
                ))}
              </div>

              {/* Gantt Bars Area */}
              <div className="relative h-24 bg-white w-full">
                {/* Background Grid Lines */}
                <div className="absolute inset-0 flex pointer-events-none">
                  {Array.from({ length: 13 }).map((_, i) => (
                    <div key={i} className={`flex-1 border-r border-slate-50 h-full ${i === 12 ? 'border-r-0' : ''}`} />
                  ))}
                </div>

                <div className="absolute inset-0 top-3 px-[0.2%] flex w-full">
                  {/* PLAN: W1-2 (2 weeks) */}
                  <div style={{ width: `${(2 / 13) * 100}% ` }} className="h-full px-1 pt-4 pb-2">
                    <div className="w-full h-full bg-[#E8E2D9] rounded-xl border border-[#D6C7B9] flex flex-col items-center justify-center relative group hover:bg-[#D6C7B9] transition-colors">
                      <span className="text-[22px] font-bold text-slate-600">전략/KPI</span>
                      <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-slate-300" />
                    </div>
                  </div>

                  {/* SETUP: W3-4 (2 weeks) */}
                  <div style={{ width: `${(2 / 13) * 100}% ` }} className="h-full px-1 pt-4 pb-2">
                    <div className="w-full h-full bg-[#E8E2D9] rounded-xl border border-[#D6C7B9] flex flex-col items-center justify-center relative group hover:bg-[#D6C7B9] transition-colors">
                      <span className="text-[22px] font-bold text-slate-600">환경 구축</span>
                      <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-slate-300" />
                    </div>
                  </div>

                  {/* DO: W5-8 (4 weeks) */}
                  <div style={{ width: `${(4 / 13) * 100}% ` }} className="h-full px-1 pt-4 pb-2">
                    <div className="w-full h-full bg-[#E8E2D9] rounded-xl border border-[#D6C7B9] flex flex-col items-center justify-center relative z-10 hover:scale-[1.02] transition-transform group hover:bg-[#D6C7B9]">
                      <span className="text-[22px] font-bold text-slate-600">실행 및 모니터링</span>
                      <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-slate-300" />
                    </div>
                  </div>

                  {/* CHECK: W9-12 (4 weeks) */}
                  <div style={{ width: `${(4 / 13) * 100}% ` }} className="h-full px-1 pt-4 pb-2">
                    <div className="w-full h-full bg-white rounded-xl border-2 border-[#E8E2D9] border-dashed flex flex-col items-center justify-center relative hover:border-[#D6C7B9] transition-colors">
                      <span className="text-[22px] font-bold text-slate-600">분석/평가</span>
                    </div>
                  </div>

                  {/* ACT: W13 (1 week) */}
                  <div style={{ width: `${(1 / 13) * 100}% ` }} className="h-full px-1 pt-4 pb-2">
                    <div className="w-full h-full bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center justify-center">
                      <span className="text-[22px] font-bold text-slate-500 mt-1">개선</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* 2. Checklists Section */}
            <div className="flex-1 grid grid-cols-3 gap-6 min-h-0">
              {checklists.map((group, idx) => (
                <div key={idx} className="rounded-[2rem] p-8 flex flex-col border bg-white border-[#D6C7B9] shadow-sm hover:border-[#C05D17]/30 transition-colors">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest bg-[#F5F3EF] text-[#988476]">
                      PHASE 0{idx + 1}
                    </span>
                    <h4 className="text-2xl font-black text-[#4A362D]">{group.phase}</h4>
=======
            <div className="flex-1 grid grid-cols-3 gap-10">
              {checklists.map((group, idx) => (
                <div key={idx} className="rounded-[3.5rem] p-12 flex flex-col border border-slate-50 bg-white shadow-sm hover:border-[#C5A059]/30 transition-all duration-700">
                  <div className="flex flex-col gap-2 mb-10">
                    <span className="text-xs font-black text-[#C5A059]/40 uppercase tracking-[0.3em]">Focus 0{idx + 1}</span>
                    <h4 className="text-3xl font-black text-[#4A362D]">{group.phase}</h4>
>>>>>>> acae0ce417c76241b8b2e82dbb6c006d8e53614f
                  </div>
                  <div className="space-y-6 flex-1">
                    {group.items.map((item: string, i: number) => (
<<<<<<< HEAD
                      <div key={i} className="flex items-start gap-4 group">
                        <div className="mt-1 w-6 h-6 rounded-lg border border-[#D6C7B9] text-[#D6C7B9] flex items-center justify-center flex-shrink-0 group-hover:border-[#C05D17] group-hover:text-[#C05D17] transition-colors">
=======
                      <div key={i} className="flex items-start gap-4">
                        <div className="mt-1.5 w-6 h-6 rounded-lg border-2 border-slate-100 flex items-center justify-center flex-shrink-0 text-slate-100 group-hover:border-[#C5A059] group-hover:text-[#C5A059] transition-colors">
>>>>>>> acae0ce417c76241b8b2e82dbb6c006d8e53614f
                          <Check size={14} strokeWidth={4} />
                        </div>
                        <p className="text-xl font-bold leading-relaxed text-slate-400 group-hover:text-slate-600 transition-colors">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

<<<<<<< HEAD
            {/* 3. Justification Section */}
            <div className="grid grid-cols-3 gap-6 flex-shrink-0">
              {justifications.map((item, idx) => (
                <div key={idx} className="bg-[#4A362D] rounded-2xl p-6 flex items-center gap-5 text-white">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    {idx === 0 ? <History size={24} className="text-[#C05D17]" /> : idx === 1 ? <ShieldCheck size={24} className="text-[#C05D17]" /> : <RefreshCw size={24} className="text-[#C05D17]" />}
=======
            <div className="bg-[#4A362D] rounded-[3.5rem] p-10 flex justify-between items-center text-white/90 shadow-2xl">
              <div className="flex items-center gap-6">
                <div className="w-3 h-10 bg-[#C5A059] rounded-full" />
                <p className="text-3xl font-black tracking-tight">PDCA Operational Cycle</p>
              </div>
              <div className="flex gap-12">
                {['Audit', 'Strategize', 'Deploy', 'Optimize'].map((step, i) => (
                  <div key={i} className="flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity cursor-default">
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-black text-[#C5A059]">0{i + 1}</div>
                    <span className="text-xl font-black uppercase tracking-widest">{step}</span>
>>>>>>> acae0ce417c76241b8b2e82dbb6c006d8e53614f
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'service-loop':
        return (
<<<<<<< HEAD
          <div className="flex flex-col items-center justify-between py-12 relative overflow-hidden flex-1 min-h-0">
            <div className="w-full flex flex-col items-center space-y-16 relative z-10 flex-1 justify-center">
              <div className="bg-[#FAF7F2] px-20 py-6 rounded-full shadow-lg shadow-[#B18B5E]/10 border border-[#E8DCC6] flex items-center gap-6 transition-transform hover:scale-105">
                <div className="w-6 h-6 rounded-full bg-[#B18B5E] animate-pulse" />
                <p className="text-[#B18B5E] text-4xl font-black tracking-tighter uppercase">
                  ETRIBE One-Team Governance
                </p>
              </div>

              <div className="flex items-center gap-10 pt-10">
                {slide.items?.map((item, idx) => {
                  const MainIcon = loopIcons[idx];
                  return (
                    <React.Fragment key={idx}>
                      <div className="flex flex-col items-center group">
                        <div className="w-96 bg-white border border-slate-200 rounded-[3.5rem] p-12 flex flex-col items-center text-center shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-[#B18B5E] hover:-translate-y-4">
                          <div className="w-28 h-28 bg-[#FAF7F2] rounded-[2.5rem] flex items-center justify-center text-[#B18B5E] mb-10 shadow-inner group-hover:bg-[#B18B5E] group-hover:text-white transition-all duration-300">
                            <MainIcon className="w-14 h-14 stroke-[2.5]" />
                          </div>

                          <h4 className="text-3xl font-black text-[#111] mb-4 tracking-tight group-hover:text-[#B18B5E] transition-colors">{item.label}</h4>
                          <div className="w-16 h-1.5 bg-[#E8DCC6]/40 mb-6 group-hover:w-28 group-hover:bg-[#B18B5E] transition-all duration-300" />
                          <p className="text-[20px] font-bold text-slate-500 leading-relaxed whitespace-pre-line group-hover:text-[#4A362D] transition-colors">{item.value}</p>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            <div className="w-full bg-white px-20 py-10 shadow-xl shrink-0 mt-10 border border-slate-200 rounded-[2.5rem] relative overflow-hidden group text-center">
              <div className="absolute inset-0 bg-[#FAF7F2]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />


              <div className="relative z-10 flex flex-col items-center gap-4">
                <h4 className="text-3xl font-black text-[#4A362D] tracking-tight">Visionary One-Team Strategy</h4>
                <p className="text-slate-500 font-bold text-lg leading-relaxed max-w-4xl">
                  전략 수립부터 실시간 모니터링 및 마크업 최적화까지 단절 없는 원팀 운영을 통해<br />
                  변화하는 AI 환경에서 브랜드의 정보 주권과 압도적인 기술 우위를 보장합니다.
                </p>
              </div>
=======
          <div className="h-full flex flex-col items-center justify-center space-y-20 py-10">
            <div className="flex flex-col items-center text-center space-y-8 max-w-5xl">
              <div className="bg-[#F4F1ED] px-8 py-3 rounded-full border border-[#4A362D]/10 mb-2">
                <p className="text-[#C5A059] text-2xl font-black tracking-[0.4em] uppercase">
                  Governance Architecture
                </p>
              </div>
              <h2 className="text-7xl font-black text-[#4A362D] tracking-tighter leading-tight">
                {slide.title}
              </h2>
            </div>

            <div className="flex items-center gap-12 pt-4">
              {slide.items?.map((item, idx) => {
                const loopIcons = [ShieldCheck, Handshake, Cpu];
                const MainIcon = loopIcons[idx];
                return (
                  <div key={idx} className="w-[420px] bg-white border border-slate-50 rounded-[4.5rem] p-16 flex flex-col items-center text-center shadow-[0_30px_70px_-15px_rgba(74,54,45,0.06)] hover:shadow-[0_50px_100px_-20px_rgba(74,54,45,0.12)] transition-all duration-700 hover:-translate-y-8 group">
                    <div className="w-28 h-28 bg-[#F4F1ED] rounded-[2.5rem] flex items-center justify-center text-[#4A362D]/20 mb-12 group-hover:bg-[#4A362D] group-hover:text-[#C5A059] transition-all duration-700 shadow-inner">
                      <MainIcon size={56} strokeWidth={1} />
                    </div>
                    <h4 className="text-3xl font-black text-[#4A362D] mb-6 group-hover:text-[#C5A059] transition-colors">{item.label}</h4>
                    <div className="w-16 h-1 bg-[#C5A059]/20 rounded-full mb-10 group-hover:w-32 group-hover:bg-[#C5A059] transition-all duration-700" />
                    <p className="text-2xl font-bold text-slate-400 leading-relaxed whitespace-pre-line group-hover:text-slate-600">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="max-w-6xl text-center">
              <p className="text-3xl font-black text-[#4A362D]/80 leading-[1.6] tracking-tight border-b-[10px] border-[#C5A059]/10 pb-12 px-10">
                {slide.content}
              </p>
>>>>>>> acae0ce417c76241b8b2e82dbb6c006d8e53614f
            </div>
          </div>
        );

      case 'full-image':
        return (
          <div className="h-full flex flex-col space-y-12">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-1 bg-[#C5A059]" />
                <span className="text-[#C5A059] text-sm font-black uppercase tracking-widest">Platform Interface</span>
              </div>
              <h2 className="text-6xl font-black text-[#4A362D] tracking-tighter">{slide.title}</h2>
              <p className="text-slate-500 font-bold text-2xl">{slide.subtitle}</p>
            </div>
            <div className="flex-1 relative rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white bg-slate-100 flex items-start">
              <img
                src={slide.content as string}
                alt="Dashboard"
                className="w-full h-auto object-cover object-top hover:scale-[1.03] transition-transform duration-1000 origin-top"
              />
            </div>
          </div>
        );
    }
    return null;
  };

  const getStrippedDetail = (detail: string) => {
    return detail.includes(':') ? detail.split(':')[1].trim() : detail;
  }

  return (
    <>
      <div className="h-full w-full">
        {renderContent()}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-12 bg-[#4A362D]/95 backdrop-blur-2xl cursor-zoom-out slide-enter"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-full">
            <img src={selectedImage} alt="" className="w-full h-full object-contain shadow-2xl rounded-3xl border border-white/10" onClick={(e) => e.stopPropagation()} />
            <button onClick={closeModal} className="absolute -top-12 -right-12 text-white/50 hover:text-white transition-all">
              <X size={56} />
            </button>
          </div>
        </div>
      )}

      {selectedDeliverable && (
<<<<<<< HEAD
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-8 bg-slate-900/40 backdrop-blur-md slide-enter">
          <div className="bg-white/90 backdrop-blur-2xl w-full max-w-4xl max-h-[90vh] rounded-[3rem] shadow-2xl overflow-hidden border border-white/40 flex flex-col">
            <div className="bg-[#4A362D] px-12 py-10 flex items-center justify-between text-white">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-[#C05D17] rounded-2xl">
                  <FileText className="w-8 h-8" />
=======
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-10 bg-[#4A362D]/80 backdrop-blur-3xl slide-enter">
          <div className="bg-white w-full max-w-5xl h-[88vh] rounded-[5rem] shadow-2xl flex flex-col overflow-hidden border border-white/20">
            <div className="bg-[#333] px-20 py-12 flex items-center justify-between">
              <div className="flex items-center gap-8">
                <div className="p-6 bg-[#C5A059] rounded-[2.5rem] shadow-lg">
                  <FileText className="text-white w-8 h-8" />
>>>>>>> acae0ce417c76241b8b2e82dbb6c006d8e53614f
                </div>
                <div>
                  <h3 className="text-4xl font-black text-white tracking-tight">{selectedDeliverable.name}</h3>
                  <p className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.5em] mt-3 italic">STRATEGIC SOURCE DOCUMENT</p>
                </div>
              </div>
              <button onClick={closeModal} className="text-white/20 hover:text-white transition-colors">
                <X size={48} />
              </button>
            </div>
<<<<<<< HEAD

            <div className="p-12 overflow-y-auto flex-1 custom-scrollbar bg-slate-50/50">
              {/* Document/Report Paper */}
              <div className="bg-white mx-auto max-w-4xl min-h-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-lg p-16 border border-slate-200">
                <div className="space-y-8">
                  {(() => {
                    const lines = selectedDeliverable.example.split('\n');
                    const renderedElements = [];
                    let i = 0;

                    while (i < lines.length) {
                      const line = lines[i];
                      const trimmedLine = line.trim();

                      // Table Rendering
                      if (trimmedLine.startsWith('|')) {
                        const tableRows = [];
                        while (i < lines.length && lines[i].trim().startsWith('|')) {
                          tableRows.push(lines[i].trim());
                          i++;
                        }

                        const headers = tableRows[0].split('|').filter(cell => cell.trim()).map(cell => cell.trim());
                        const bodyRows = tableRows.slice(2).map(row => row.split('|').filter(cell => cell.trim()).map(cell => cell.trim()));

                        renderedElements.push(
                          <div key={i} className="my-10 overflow-hidden border border-slate-200 rounded-2xl shadow-sm">
                            <table className="w-full text-left border-collapse">
                              <thead>
                                <tr className="bg-slate-50 border-b border-slate-200">
                                  {headers.map((h, hIdx) => (
                                    <th key={hIdx} className="px-6 py-4 text-[16px] font-black text-slate-900 uppercase tracking-tight">{h}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100">
                                {bodyRows.map((row, rIdx) => (
                                  <tr key={rIdx} className="hover:bg-slate-50/50 transition-colors">
                                    {row.map((cell, cIdx) => (
                                      <td key={cIdx} className={`px-6 py-4 text-[17px] leading-relaxed ${cIdx === 0 ? 'font-black text-slate-900' : 'text-slate-600 font-medium'}`}>{cell}</td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        );
                        continue;
                      }

                      // Main Title or Header with Icon
                      if (trimmedLine.startsWith('## ')) {
                        renderedElements.push(
                          <div key={i} className="pb-4 border-b-4 border-[#B18B5E] mb-10 pt-8">
                            <h2 className="text-4xl font-[950] text-[#4A362D] tracking-tighter flex items-center gap-4">
                              {trimmedLine.replace('## ', '')}
                            </h2>
                          </div>
                        );
                      }
                      // Sub-headings
                      else if (trimmedLine.startsWith('### ')) {
                        renderedElements.push(
                          <h3 key={i} className="text-2xl font-[900] text-[#4A362D] mt-12 mb-6 flex items-center gap-3">
                            <div className="w-2 h-8 bg-[#C05D17] rounded-full" />
                            {trimmedLine.replace('### ', '')}
                          </h3>
                        );
                      }
                      // Insight Callouts
                      else if (trimmedLine.startsWith('> 💡')) {
                        renderedElements.push(
                          <div key={i} className="my-8 bg-[#FAF7F2] border-l-8 border-[#B18B5E] p-8 rounded-r-2xl">
                            <div className="flex gap-4">
                              <Sparkles className="w-8 h-8 text-[#B18B5E] shrink-0" />
                              <p className="text-[20px] font-bold text-[#4A362D] leading-relaxed italic">
                                {trimmedLine.replace('> 💡', '').trim()}
                              </p>
                            </div>
                          </div>
                        );
                      }
                      // Blockquotes (general)
                      else if (trimmedLine.startsWith('>')) {
                        renderedElements.push(
                          <div key={i} className="my-6 p-8 bg-slate-50 rounded-2xl border border-slate-200 italic font-bold text-slate-600 text-[19px] leading-relaxed">
                            {trimmedLine.replace('>', '').trim()}
                          </div>
                        );
                      }
                      // Aside Callouts
                      else if (trimmedLine.startsWith('<aside>')) {
                        const asideContent = [];
                        i++;
                        while (i < lines.length && !lines[i].trim().startsWith('</aside>')) {
                          asideContent.push(lines[i]);
                          i++;
                        }
                        renderedElements.push(
                          <div key={i} className="my-8 bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-inner overflow-x-auto">
                            {asideContent.map((aLine, aIdx) => {
                              const aTrimmed = aLine.trim();
                              if (aTrimmed.startsWith('`')) {
                                return (
                                  <pre key={aIdx} className="text-[16px] font-mono text-[#B18B5E] leading-relaxed whitespace-pre-wrap">
                                    {aTrimmed.replace(/`/g, '')}
                                  </pre>
                                );
                              }
                              return (
                                <p key={aIdx} className="text-[18px] font-black text-[#4A362D] mb-2 uppercase tracking-widest bg-[#E8DCC6]/40 inline-block px-3 py-1 rounded-lg">
                                  {aTrimmed}
                                </p>
                              );
                            })}
                          </div>
                        );
                      }
                      // Numbered lists
                      else if (/^\d+\./.test(trimmedLine)) {
                        renderedElements.push(
                          <div key={i} className="flex items-start gap-4 mb-4 pl-4">
                            <div className="mt-1 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-black shrink-0 shadow-lg">
                              {trimmedLine.split('.')[0]}
                            </div>
                            <div className="flex-1">
                              <p className="text-[20px] font-black text-slate-900 leading-relaxed pt-0.5">
                                {trimmedLine.split('.').slice(1).join('.').trim()}
                              </p>
                            </div>
                          </div>
                        );
                      }
                      // Bullet points
                      else if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('①') || trimmedLine.startsWith('②')) {
                        renderedElements.push(
                          <div key={i} className="flex items-start gap-4 mb-4 pl-4">
                            <div className="mt-2.5 w-2.5 h-2.5 rounded-full bg-[#C05D17] shrink-0 shadow-sm" />
                            <p className="text-[20px] font-bold text-slate-800 leading-relaxed">
                              {trimmedLine.startsWith('- ') ? trimmedLine.substring(2) : trimmedLine}
                            </p>
                          </div>
                        );
                      }
                      else if (trimmedLine.startsWith('  - ')) {
                        renderedElements.push(
                          <div key={i} className="flex items-start gap-4 mb-3 pl-12 opacity-80">
                            <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                            <p className="text-[19px] font-semibold text-slate-600 leading-relaxed">
                              {trimmedLine.substring(4)}
                            </p>
                          </div>
                        );
                      }
                      // Horizontal Line
                      else if (trimmedLine === '---') {
                        renderedElements.push(<hr key={i} className="my-12 border-slate-100" />);
                      }
                      // Empty lines
                      else if (!trimmedLine) {
                        renderedElements.push(<div key={i} className="h-4" />);
                      }
                      // Normal Paragraph
                      else {
                        const content = line.split(/(\*\*.*?\*\*|`.*?`)/).map((part, pIdx) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={pIdx} className="text-slate-900 font-extrabold">{part.slice(2, -2)}</strong>;
                          }
                          if (part.startsWith('`') && part.endsWith('`')) {
                            return <code key={pIdx} className="bg-[#E8E2D9] text-[#4A362D] px-2 py-0.5 rounded font-mono text-[17px] font-bold">{part.slice(1, -1)}</code>;
                          }
                          return part;
                        });
                        renderedElements.push(
                          <p key={i} className="text-[20px] font-medium text-slate-600 leading-relaxed">
                            {content}
                          </p>
                        );
                      }
                      i++;
                    }
                    return renderedElements;
                  })()}
                </div>

                {/* Report Footer Decoration */}
                <div className="mt-20 pt-10 border-t border-slate-100 flex justify-between items-center text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center">
                      <ShieldCheck size={16} />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest">Confidential Strategy Document</span>
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest">Page 01 / 01</span>
                </div>
              </div>

              <div className="mt-12 flex justify-center pb-12">
                <button
                  onClick={closeModal}
                  className="group flex items-center gap-4 px-12 py-5 bg-[#4A362D] text-white rounded-2xl font-black text-lg hover:bg-[#C05D17] transition-all shadow-xl hover:shadow-[#C05D17]/30"
                >
                  리포트 내용 확인 완료
                  <CheckCircle2 size={24} className="group-hover:scale-125 transition-transform" />
                </button>
=======
            <div className="flex-1 overflow-y-auto p-20 custom-scrollbar bg-[#F4F1ED]/30">
              <div className="max-w-4xl mx-auto bg-white p-24 shadow-[0_50px_120px_rgba(74,54,45,0.12)] rounded-[3rem] border border-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059] opacity-[0.05] rounded-bl-full" />
                <pre className="whitespace-pre-wrap text-2xl font-bold leading-[1.8] text-[#4A362D]/80 font-['Pretendard'] tracking-tight">
                  {selectedDeliverable.example}
                </pre>
>>>>>>> acae0ce417c76241b8b2e82dbb6c006d8e53614f
              </div>
            </div>
            <div className="px-20 py-12 bg-white border-t border-slate-100 flex justify-center">
              <button onClick={closeModal} className="px-24 py-7 bg-[#C5A059] rounded-[2.5rem] text-[#4A362D] font-black text-2xl hover:bg-[#4A362D] hover:text-[#C5A059] transition-all shadow-xl shadow-[#C5A059]/20">
                Close Document Access
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SlideContent;
