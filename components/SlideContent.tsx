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
    switch (slide.type) {
      case 'title':
        return (
          <div className="flex flex-col justify-center items-start text-left space-y-12 py-20 px-10">
            <div className="space-y-6">
              <h2 className="text-[#C05D17] text-3xl font-black tracking-tighter">
                FunETF <span className="text-[#4A362D] mx-2">×</span> ETRIBE
              </h2>
              <h1 className="text-7xl md:text-8xl font-black tracking-tighter text-[#111] leading-[1.05] max-w-5xl">
                {slide.title}
              </h1>
              <p className="text-3xl text-slate-500 font-bold leading-relaxed">
                {slide.subtitle}
              </p>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-[#C05D17] to-[#F5F3EF]" />
            <div className="max-w-3xl text-[#4A362D] text-2xl font-black leading-relaxed whitespace-pre-line bg-white/50 p-8 rounded-2xl border border-[#D6C7B9]">
              {slide.content}
            </div>
          </div>
        );



      case 'scale-up':
        return (
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


                    </div>

                    {idx < 2 && (
                      <div className="absolute top-1/2 -right-4 translate-x-1/2 z-20 bg-white p-2 rounded-full border border-slate-100 shadow-sm text-slate-300">
                        <ArrowRightCircle size={24} />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="bg-slate-900 p-8 rounded-[2.5rem] flex items-center gap-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="flex-shrink-0 w-20 h-20 bg-[#C05D17] rounded-3xl flex items-center justify-center text-white shadow-lg shadow-[#C05D17]/30">
                <Repeat className="w-10 h-10 animate-[spin_4s_linear_infinite]" />
              </div>
              <div className="flex-1">
                <p className="text-2xl font-black text-white leading-snug">
                  Continuous <span className="text-[#C05D17]">Monitoring & Feedback Loop</span>
                </p>
                <p className="text-[22px] font-bold text-slate-400 mt-1">
                  {slide.content}
                </p>
              </div>
              <div className="flex items-center gap-4">
                {['수집', '분석', '인사이트', '최적화'].map((step, idx) => (
                  <React.Fragment key={idx}>
                    <span className="text-white text-[20px] font-black bg-white/10 px-5 py-3 rounded-xl border border-white/10">{step}</span>
                    {idx < 3 && <ChevronRight className="text-white/20" size={16} />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        );

      case 'image-grid':
        return (
          <div className="h-full flex flex-col space-y-8">
            <div className="flex flex-col space-y-2">
              <h2 className="text-5xl font-[950] text-[#111] tracking-tighter">{slide.title}</h2>
              <p className="text-slate-500 font-bold text-lg">{slide.subtitle}</p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-8 min-h-0">
              {slide.images?.map((img, idx) => (
                <div
                  key={idx}
                  className="relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
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
                  </div>
                </div>
              ))}
            </div>
            {slide.content && (
              <div className="bg-[#FAF7F2] border border-[#D6C7B9] p-6 rounded-2xl flex items-center gap-6">
                <div className="bg-[#C05D17] text-white p-3 rounded-xl">
                  <Activity size={24} />
                </div>
                <p className="text-xl font-bold text-[#C05D17] leading-relaxed">
                  {slide.content}
                </p>
              </div>
            )}
          </div>
        );

      case 'paradigm-shift':
        return (
          <div className="flex flex-col space-y-8 py-10">
            <div className="flex flex-col space-y-2">
              <h2 className="text-5xl font-[950] text-[#111] tracking-tighter">{slide.title}</h2>
              <p className="text-slate-500 font-bold text-xl">{slide.subtitle}</p>
            </div>

            <div className="flex-1 flex flex-col space-y-6">
              <div className="grid grid-cols-[1fr_80px_1fr] items-center gap-6">
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 relative group">
                  <span className="text-[20px] font-black text-slate-400 uppercase tracking-widest block mb-4">기존 검색엔진 최적화 (SEO)</span>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-400">
                      <Search className="w-6 h-6" />
                    </div>
                    <div className="h-0.5 flex-1 bg-slate-200 rounded-full" />
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-400">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-2xl border border-slate-100">
                      <p className="text-[20px] font-bold text-slate-400">핵심 목표</p>
                      <p className="text-[24px] font-black text-slate-700">검색 순위 노출</p>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-slate-100">
                      <p className="text-[20px] font-bold text-slate-400">사용자 경험</p>
                      <p className="text-[24px] font-black text-slate-700">링크 리스트 선택</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center">
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
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900">
                      <MousePointer2 size={24} />
                    </div>
                    <h4 className="text-2xl font-black text-[#111]">행동의 변화</h4>
                  </div>
                  <p className="text-[20px] font-bold text-slate-500 leading-relaxed">
                    검색 후 웹사이트를 방문하던 방식에서, 채팅창 내에서 정보를 획득하고 종료하는 <span className="text-[#C05D17] font-black underline underline-offset-4">'제로클릭(Zero-Click)'</span> 소비가 가속화됩니다.
                  </p>
                </div>
                <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm space-y-4">
                  <div className="flex items-center gap-4">
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
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'ai-mechanism':
        return (
          <div className="flex flex-col space-y-6 py-10">
            <div className="flex flex-col space-y-2 text-center">
              <h2 className="text-5xl font-[950] text-[#111] tracking-tighter">{slide.title}</h2>
              <p className="text-slate-500 font-bold text-xl">{slide.subtitle}</p>
            </div>

            <div className="flex-1 grid grid-cols-4 gap-6 items-stretch py-4">
              {slide.items?.map((step, idx) => (
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
                      </div>
                    )}

                    <div className={`mt-8 flex justify-center opacity-10 group-hover:opacity-30 transition-opacity`}>
                      {idx === 0 ? <Terminal size={28} /> : idx === 1 ? <Database size={28} /> : idx === 2 ? <Binary size={28} /> : <ExternalLink size={28} />}
                    </div>
                  </div>

                  {idx < 3 && (
                    <div className="absolute top-[32%] -right-3 -translate-y-1/2 z-20 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-slate-300 border border-slate-100 pointer-events-none">
                      <ChevronRight size={18} strokeWidth={4} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-rose-600 px-8 py-6 rounded-[2rem] flex items-center gap-10 shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.05] transition-opacity duration-700" />
              <div className="flex-shrink-0 bg-white/20 p-4 rounded-2xl border border-white/30 backdrop-blur-sm">
                <AlertTriangle className="text-white w-8 h-8" />
              </div>
              <div className="flex-1 relative z-10">
                <p className="text-[26px] font-black text-white leading-snug">
                  <span className="bg-white text-rose-600 px-3 py-1 rounded-lg mr-4 text-[22px]">CRITICAL POINT</span>
                  2단계에서 <span className="underline underline-offset-8 decoration-white/50 font-bold italic">구조화된 정보(Schema)가 없으면</span>, AI는 해당 브랜드를 즉시 배제합니다.
                </p>
              </div>
            </div>
          </div>
        );

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
              </div>

            </div>

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
                      </div>
                    </div>

                    <div className="px-10 pb-10 flex-1 flex flex-col space-y-8 overflow-y-auto custom-scrollbar">
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 gap-3">
                          {item.details?.map((detail, dIdx) => (
                            <div key={dIdx} className="group/item flex items-start gap-4 p-5 bg-white/60 rounded-2xl border border-white/80 shadow-sm hover:bg-white hover:border-blue-100 transition-all">
                              <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center ${accentBg} text-white shrink-0`}>
                                <Check size={14} strokeWidth={4} />
                              </div>
                              <span className="text-[18px] font-[700] text-slate-700 leading-snug group-hover/item:text-slate-900">
                                {detail.includes(':') ? detail.split(':')[1].trim() : detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

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
                  </div>
                );
              })}
            </div>


          </div>
        );

      case 'content': {
        const contentIcons: Record<string, any> = {
          "언급 여부": Search,
          "언급 순서": ListOrdered,
          "맥락 추출": Quote,
          "감성 분석": Smile,
          "경쟁사 감지": Eye
        };
        return (
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
          <div className="flex flex-col space-y-8 py-10 w-full h-full max-w-7xl mx-auto">
            <div className="flex flex-col space-y-4 flex-shrink-0 text-center">
              <h2 className="text-5xl font-[950] text-[#4A362D] tracking-tighter">{slide.title}</h2>
              <p className="text-slate-500 font-bold text-xl">{slide.subtitle}</p>
            </div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-200 bg-white group h-[820px]">
              <img
                src={slide.content as string}
                alt="Dashboard View"
                className="w-full h-full object-cover object-top hover:scale-[1.01] transition-transform duration-1000"
              />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 rounded-[3rem]" />

              <div className="absolute top-6 left-6 bg-[#C05D17] text-white px-5 py-2 rounded-full text-[13px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                Dashboard Overview
              </div>
            </div>
          </div>
        );

      case 'master-plan':
        const timelineData = slide.items?.[0]?.details as any[] || [];
        const checklists = slide.items?.[1]?.details as any[] || [];
        const justifications = slide.items?.[2]?.details as any[] || [];
        const reports = slide.items?.[3]?.details as any[] || [];

        return (
          <div className="flex flex-col space-y-6 py-10">
            <div className="flex justify-between items-end flex-shrink-0">
              <div className="flex flex-col space-y-2">
                <h2 className="text-4xl font-[950] text-[#4A362D] tracking-tighter">{slide.title}</h2>
                <p className="text-slate-500 font-bold text-lg">{slide.subtitle}</p>
              </div>

              <div className="flex gap-6 mb-1">
                {reports.map((report, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 px-6 py-4 rounded-2xl flex items-center gap-4 hover:border-[#B18B5E] hover:shadow-lg transition-all cursor-default group">
                    <div className="bg-[#FAF7F2] p-2.5 rounded-xl group-hover:bg-[#E8DCC6]/40 transition-colors">
                      <FileText size={20} className="text-[#B18B5E]" strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[14px] font-black text-slate-400 uppercase tracking-widest mb-1">{report.title}</span>
                      <span className="text-[18px] font-black text-slate-800 leading-none group-hover:text-blue-700 transition-colors">{report.schedule}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

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
                  </div>
                  <div className="space-y-6 flex-1 overflow-y-auto custom-scrollbar">
                    {group.items.map((item: string, i: number) => (
                      <div key={i} className="flex items-start gap-4 group">
                        <div className="mt-1 w-6 h-6 rounded-lg border border-[#D6C7B9] text-[#D6C7B9] flex items-center justify-center flex-shrink-0 group-hover:border-[#C05D17] group-hover:text-[#C05D17] transition-colors">
                          <Check size={14} strokeWidth={4} />
                        </div>
                        <p className="text-[17px] font-bold leading-relaxed text-slate-600 group-hover:text-slate-900 transition-colors">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* 3. Justification Section */}
            <div className="grid grid-cols-3 gap-6 flex-shrink-0">
              {justifications.map((item, idx) => (
                <div key={idx} className="bg-[#4A362D] rounded-2xl p-6 flex items-center gap-5 text-white">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    {idx === 0 ? <History size={24} className="text-[#C05D17]" /> : idx === 1 ? <ShieldCheck size={24} className="text-[#C05D17]" /> : <RefreshCw size={24} className="text-[#C05D17]" />}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-400 mb-1">{item.title}</h5>
                    <p className="text-[15px] font-medium leading-tight text-slate-200">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'dual-writing':
        return (
          <div className="flex flex-col space-y-12 py-10 h-full">
            <div className="flex flex-col space-y-2">
              <h2 className="text-5xl font-[950] text-[#111] tracking-tighter">{slide.title}</h2>
              <p className="text-slate-500 font-bold text-xl">{slide.subtitle}</p>
            </div>

            <div className="flex-1 grid grid-cols-[1.5fr_1fr] gap-16 items-center">
              {/* Left Side: Image from Public Folder */}
              <div className="relative h-[720px] flex items-center justify-center rounded-[3rem] overflow-hidden shadow-2xl bg-white/50 border border-white/20">
                <img
                  src="/double-writing-layer.jpg"
                  alt="Double Writing Layer Structure"
                  className="w-full h-full object-contain p-8 hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Right Side: Content */}
              <div className="space-y-10">
                <div className="bg-[#FAF7F2] border border-[#D6C7B9] p-10 rounded-[3rem] shadow-sm relative overflow-hidden group">
                  <p className="text-[22px] font-bold text-[#4A362D] leading-relaxed">
                    {slide.content}
                  </p>
                </div>

                <div className="space-y-6">
                  {slide.items?.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-6 group">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#C05D17] shadow-sm group-hover:bg-[#C05D17] group-hover:text-white transition-all">
                        <Check size={24} strokeWidth={3} />
                      </div>
                      <span className="text-[24px] font-black text-[#111] tracking-tight">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'service-loop': {
        const loopIcons = [ShieldCheck, Handshake, Cpu];

        return (
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
            </div>
          </div>
        );
      }
    } // Close the switch statement
    return null; // Default return for renderContent
  }; // Close the renderContent function

  return (
    <>
      {renderContent()}

      {/* Global Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-12 bg-slate-950/90 backdrop-blur-xl slide-enter cursor-zoom-out"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-full group">
            <img
              src={selectedImage}
              alt="Zoomed view"
              className="w-full h-full object-contain rounded-3xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={closeModal}
              className="absolute -top-6 -right-6 p-4 bg-white text-slate-900 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-10 opacity-0 group-hover:opacity-100"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}

      {/* Global Deliverable Modal */}
      {selectedDeliverable && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-8 bg-slate-900/40 backdrop-blur-md slide-enter">
          <div className="bg-white/90 backdrop-blur-2xl w-full max-w-4xl max-h-[90vh] rounded-[3rem] shadow-2xl overflow-hidden border border-white/40 flex flex-col">
            <div className="bg-[#4A362D] px-12 py-10 flex items-center justify-between text-white">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-[#C05D17] rounded-2xl">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-[900] tracking-tight">{selectedDeliverable.name}</h3>
                  <p className="text-slate-400 text-[18px] font-bold uppercase tracking-widest mt-1">Output Example Preview</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-4 hover:bg-white/10 rounded-full transition-colors flex items-center gap-2 group/close"
              >
                <span className="text-sm font-bold uppercase tracking-widest opacity-0 group-hover/close:opacity-100 transition-opacity">Close</span>
                <X className="w-10 h-10" />
              </button>
            </div>

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
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}; // Close the SlideContent component

export default SlideContent;