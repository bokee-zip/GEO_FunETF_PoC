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
  AlertTriangle, ExternalLink, Sparkle,
  Repeat, ArrowRightCircle, Hammer, Workflow, ArrowRightLeft,
  User,
  Link2
} from 'lucide-react';

const SlideContent: React.FC<{ slide: SlideData, index?: number, total?: number }> = ({ slide, index, total }) => {
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
              <div className="flex items-center gap-4">
                <h2 className="text-[#0055FF] text-3xl font-black tracking-tighter uppercase">
                  FunETF <span className="text-slate-300 mx-2">×</span> KODEX
                </h2>
              </div>
              <h1 className="text-7xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[1.05] max-w-5xl">
                {slide.title}
              </h1>
              <p className="text-3xl text-[#0055FF] font-bold leading-relaxed max-w-7xl whitespace-nowrap">
                {slide.subtitle}
              </p>
            </div>

            <div className="max-w-3xl text-slate-600 text-2xl font-bold leading-relaxed whitespace-pre-line glass-card p-12 rounded-[2.5rem]">
              {slide.content}
            </div>
          </div>
        );

      case 'ai-summary':
        return (
          <div className="flex flex-col space-y-10 py-10">
            <div className="flex flex-col space-y-2">
              <h2 className="section-title">{slide.title}</h2>
              <p className="section-subtitle">{slide.subtitle}</p>
            </div>

            <div className="relative space-y-8">
              <div className="glass-card p-12 rounded-[4rem] relative overflow-hidden group">
                {/* AI Badge */}
                <div className="absolute top-0 right-0 px-10 py-4 bg-[#0055FF] text-white font-black text-[20px] rounded-bl-[2rem] tracking-widest shadow-xl flex items-center gap-3">
                  <Bot size={28} /> AI OPTIMIZED
                </div>

                <div className="relative z-10 space-y-6">
                  <div className="w-20 h-2 bg-[#0055FF] rounded-full opacity-20" />
                  <p className="text-[30px] font-bold text-slate-900 leading-[1.6] whitespace-pre-line tracking-tight italic">
                    {slide.content}
                  </p>
                  <div className="flex items-center gap-6 pt-6 border-t border-slate-100">
                    <span className="text-slate-400 font-bold text-[18px]">
                      Search Engine Interpretation Quality: <span className="text-[#0055FF]">Premium</span>
                    </span>
                  </div>
                </div>

                {/* Decorative background element */}
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50 group-hover:scale-110 transition-transform duration-1000" />
              </div>

              {/* Combined Items (FAQ etc) */}
              {slide.items && slide.items.length > 0 && (
                <div className="grid grid-cols-3 gap-6">
                  {slide.items.map((item, idx) => (
                    <div key={idx} className="glass-card p-8 rounded-[2.5rem] premium-glow h-full">
                      <h4 className="text-[#0055FF] font-black text-[18px] uppercase tracking-wider mb-3">{item.label}</h4>
                      <div className="space-y-3">
                        {item.details?.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-3">
                            <Check size={18} className="text-[#0055FF] shrink-0 mt-1" strokeWidth={3} />
                            <p className="text-[18px] font-bold text-slate-600 leading-snug">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );



      case 'scale-up':
        return (
          <div className="flex flex-col space-y-10 py-10">
            <div className="flex flex-col space-y-2">
              <h2 className="section-title">{slide.title}</h2>
              <p className="section-subtitle">{slide.subtitle}</p>
            </div>

            <div className="flex-1 flex flex-col gap-6 pb-8 relative">
              {slide.items?.map((item, idx) => {
                const accent = idx === 0 ? 'bg-[#0055FF]' : idx === 1 ? 'bg-[#00377E]' : 'bg-slate-400';
                const textAccent = idx === 0 ? 'text-[#0055FF]' : idx === 1 ? 'text-[#00377E]' : 'text-slate-400';

                return (
                  <div key={idx} className="relative flex flex-col group z-10">
                    <div className="w-full glass-card rounded-[2rem] p-8 flex items-center gap-12 group hover:translate-x-2 transition-all hover:bg-white/90">
                      <div className="w-48 shrink-0">
                        <span className={`text-[20px] font-black ${textAccent} uppercase tracking-widest px-4 py-2 bg-blue-50/50 rounded-full border border-blue-100 inline-block mb-3`}>
                          LEVEL 0{idx + 1}
                        </span>
                        <h4 className="text-3xl font-black text-slate-900 leading-tight">
                          {item.label}
                        </h4>
                      </div>

                      <div className="w-px h-16 bg-slate-200/50" />

                      <div className="w-64 shrink-0">
                        <div className={`text-[24px] font-black ${textAccent}`}>{item.value}</div>
                      </div>

                      <div className="flex-1 flex flex-col gap-4">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                          {item.details?.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-center gap-3">
                              <div className={`w-1.5 h-1.5 rounded-full ${accent}`} />
                              <span className="text-[17px] font-bold text-slate-500 leading-relaxed group-hover:text-slate-900 transition-colors">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        );

      case 'image-grid':
        return (
          <div className="h-full flex flex-col space-y-8">
            <div className="flex flex-col space-y-2">
              <h2 className="section-title">{slide.title}</h2>
              <p className="section-subtitle">{slide.subtitle}</p>
            </div>
            <div className="flex-1 grid grid-cols-3 gap-8 min-h-0">
              {slide.items?.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-[2.5rem] p-10 flex flex-col group premium-glow"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <div className="w-16 h-16 bg-blue-50/50 rounded-2xl flex items-center justify-center text-[#0055FF] group-hover:scale-110 transition-transform">
                      {idx === 0 ? <Target size={36} /> : idx === 1 ? <Box size={36} /> : <Zap size={36} />}
                    </div>
                    <span className="text-slate-300 font-black text-[20px] uppercase tracking-widest">Goal 0{idx + 1}</span>
                  </div>

                  <div className="space-y-4 flex-1">
                    <h4 className="text-[28px] font-black text-slate-900 tracking-tight leading-tight">
                      {item.label}
                    </h4>
                    <p className="text-[22px] font-black text-[#0055FF] mb-6">
                      {item.value}
                    </p>
                    <div className="space-y-3 pt-6 border-t border-slate-100 flex-1 overflow-y-auto custom-scrollbar">
                      {item.details?.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-[#0055FF]/30 mt-1 shrink-0" />
                          <span className="text-[18px] font-bold text-slate-500 leading-snug">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {item.deliverables && (
                      <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-slate-100">
                        {item.deliverables.map((del, dIdx) => (
                          <button
                            key={dIdx}
                            onClick={() => setSelectedDeliverable(del)}
                            className="px-4 py-2 bg-blue-50 text-[#0055FF] rounded-xl text-sm font-black flex items-center gap-2 hover:bg-[#0055FF] hover:text-white transition-all shadow-sm"
                          >
                            <FileText size={14} /> {del.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'project-overview':
        return (
          <div className="h-full flex flex-col space-y-4">
            <div className="flex flex-col space-y-1">
              <h2 className="section-title !mb-0">{slide.title}</h2>
              <p className="section-subtitle !mb-0">{slide.subtitle}</p>
            </div>

            <div className="flex-1 flex flex-col gap-4 min-h-0">
              {/* Row 1: Objective (Full Width) - Compacted */}
              {slide.items?.[0] && (
                <div className="glass-card p-6 rounded-[2rem] flex items-center justify-between group hover:bg-white/90 transition-colors">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0055FF] group-hover:scale-110 transition-transform">
                      <Target size={32} />
                    </div>
                    <div className="space-y-1">
                      <span className="text-blue-400 font-black text-[14px] uppercase tracking-widest bg-blue-500/10 px-3 py-0.5 rounded-full border border-blue-500/20">Primary Goal</span>
                      <h4 className="text-2xl font-black text-slate-900 tracking-tight">{slide.items[0].label}</h4>
                    </div>
                  </div>
                  <div className="flex items-center gap-10 mr-4">
                    <div className="text-right">
                      <p className="text-[28px] font-black text-[#0055FF] leading-none mb-2">{slide.items[0].value}</p>
                      <div className="flex gap-2 justify-end">
                        {slide.items[0].details?.map((detail, dIdx) => (
                          <span key={dIdx} className="text-slate-500 font-bold text-[14px] bg-white/50 px-3 py-1 rounded-full border border-white whitespace-nowrap">{detail}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Row 2: Content on Left, Image on Right */}
              <div className="grid grid-cols-[1fr_1.2fr] gap-4 flex-1 min-h-0">
                {/* Left: Scope & Hypothesis */}
                <div className="flex flex-col gap-4">
                  {slide.items?.slice(1).map((item, idx) => (
                    <div
                      key={idx}
                      className="glass-card p-6 rounded-[2.5rem] group flex flex-col premium-glow flex-1 min-h-0"
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-blue-400 font-black text-[10px] uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">Detail 0{idx + 2}</span>
                      </div>
                      <div className="space-y-2 flex-1 flex flex-col min-h-0">
                        <div className="shrink-0">
                          <h4 className="text-[22px] font-black text-slate-900 tracking-tight leading-tight">
                            {item.label}
                          </h4>
                          <p className="text-[18px] font-black text-[#0055FF]">
                            {item.value}
                          </p>
                        </div>
                        <div className="space-y-1.5 pt-3 border-t border-slate-100 overflow-y-auto custom-scrollbar flex-1">
                          {item.details?.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-3">
                              <CheckCircle2 size={16} className="text-[#0055FF]/30 mt-1 shrink-0" />
                              <span className="text-[15px] font-bold text-slate-500 leading-snug group-hover:text-slate-900 transition-colors">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right: Product Page Screenshot Area */}
                <div className="glass-card rounded-[2.5rem] overflow-hidden premium-glow relative group flex items-start justify-center bg-white border border-slate-100 h-full">
                  <img
                    src="/KODEX S&P 500.png"
                    alt="KODEX 미국S&P500 상세페이지"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="px-4 py-1.5 bg-[#0055FF] text-white text-[12px] font-black rounded-full shadow-lg inline-block">
                      KODEX 미국S&P500 최적화 대상 페이지
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'table':
        return (
          <div className="h-full flex flex-col space-y-10">
            <div className="flex flex-col space-y-2">
              <h2 className="section-title">{slide.title}</h2>
              <p className="section-subtitle">{slide.subtitle}</p>
            </div>

            <div className="flex-1 glass-card rounded-[2.5rem] overflow-hidden flex flex-col min-h-0 py-8 premium-glow">
              <div className="flex-1 flex flex-col px-8">
                <div className="bg-slate-900 text-white rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <div className={`grid ${slide.tableData?.headers.length === 3 ? 'grid-cols-[1fr_3fr_1fr]' : 'grid-cols-[1fr_2fr_1fr_1fr]'} divide-x divide-white/10`}>
                    {slide.tableData?.headers.map((h, i) => (
                      <div key={i} className="px-8 py-6 text-[20px] font-black uppercase tracking-tight text-center">
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 divide-y divide-slate-100 custom-scrollbar overflow-y-auto">
                  {slide.tableData?.rows.map((row, i) => (
                    <div key={i} className={`grid ${slide.tableData?.headers.length === 3 ? 'grid-cols-[1fr_3fr_1fr]' : 'grid-cols-[1fr_2fr_1fr_1fr]'} divide-x divide-slate-50 hover:bg-blue-50/30 transition-colors items-center min-h-[80px]`}>
                      {row.map((cell, j) => (
                        <div key={j} className={`px-8 py-4 h-full flex items-center justify-center text-center text-[20px] ${j === 1 ? 'font-black text-slate-900' : j === 0 ? 'text-[#0055FF] font-black' : 'text-slate-500 font-bold'}`}>
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
            <div className="flex items-center justify-between pb-6 border-b border-slate-100 relative z-10">
              <div className="flex flex-col">
                <h2 className="section-title !mb-0">{slide.title}</h2>
                <p className="section-subtitle !mb-0">{slide.subtitle}</p>
              </div>
            </div>

            <div className="flex flex-col gap-6 flex-1 min-h-0 relative z-10">
              {slide.items?.map((item, idx) => {
                const IconComp = idx === 0 ? Search : idx === 1 ? ShieldCheck : AlertTriangle;
                const accentColor = idx === 0 ? "text-[#0055FF]" : idx === 1 ? "text-[#00377E]" : "text-amber-500";

                return (
                  <div key={idx} className="flex items-stretch gap-8 group/card">
                    {/* Step Indicator */}
                    <div className="w-24 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-3xl flex items-center justify-center border-2 border-slate-100 bg-white group-hover/card:border-[#0055FF] group-hover/card:bg-blue-50 transition-all shadow-sm">
                        <IconComp className={`w-8 h-8 ${accentColor}`} strokeWidth={3} />
                      </div>
                      {idx < (slide.items?.length || 0) - 1 && (
                        <div className="w-0.5 flex-1 bg-gradient-to-b from-blue-100 to-transparent my-2" />
                      )}
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 glass-card p-8 rounded-[2rem] flex items-center gap-12 premium-glow mb-2">
                      <div className="w-1/4">
                        <span className="text-[20px] font-black text-[#0055FF]/40 uppercase tracking-widest block mb-1">Step 0{idx + 1}</span>
                        <h3 className="text-3xl font-black text-slate-900 tracking-tight">{item.label}</h3>
                        <div className={`text-2xl font-black ${accentColor} mt-2`}>{item.value}</div>
                      </div>

                      <div className="w-px h-16 bg-slate-100" />

                      <div className="flex-1 flex flex-col gap-4">
                        <div className="grid grid-cols-2 gap-4 flex-1">
                          {item.details?.map((detail, dIdx) => (
                            <div key={dIdx} className="bg-white/40 rounded-xl p-4 flex items-start gap-4">
                              <Check size={20} className={`${accentColor} shrink-0 mt-1`} strokeWidth={4} />
                              <span className="text-[20px] font-bold text-slate-600 leading-snug">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>

                        {item.deliverables && (
                          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                            {item.deliverables.map((del, dIdx) => (
                              <button
                                key={dIdx}
                                onClick={() => setSelectedDeliverable(del)}
                                className="px-3 py-1.5 bg-blue-50 text-[#0055FF] rounded-lg text-[20px] font-black flex items-center gap-2 hover:bg-[#0055FF] hover:text-white transition-all shadow-sm"
                              >
                                <FileText size={20} /> {del.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 'pipeline': {
        return (
          <div className="flex flex-col space-y-6 py-10">
            <div className="flex flex-col space-y-2 flex-shrink-0">
              <h2 className="section-title">{slide.title}</h2>
              <p className="section-subtitle">{slide.subtitle}</p>
            </div>

            <div className="flex-1 grid grid-cols-3 gap-8">
              {slide.items?.map((item, idx) => (
                <div key={idx} className="glass-card rounded-[3.5rem] p-10 flex flex-col premium-glow group relative overflow-hidden">
                  {/* Background Accents for Glassmorphism */}
                  <div className="absolute top-[-20%] left-[-20%] w-64 h-64 bg-[#0055FF]/5 rounded-full blur-[80px] group-hover:bg-[#0055FF]/10 transition-colors duration-1000" />
                  <div className="absolute bottom-[-10%] right-[-10%] w-48 h-48 bg-slate-200/20 rounded-full blur-[60px]" />

                  <div className="relative z-10 w-16 h-16 samsung-blue-bg rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-black">0{idx + 1}</span>
                  </div>

                  <div className="relative z-10 space-y-6 flex-1 flex flex-col">
                    <div>
                      <h4 className="text-[20px] font-black text-[#0055FF] uppercase tracking-widest mb-2 opacity-80">{item.label}</h4>
                      <h3 className="text-[32px] font-black text-slate-900 leading-tight tracking-tight">{item.value}</h3>
                    </div>

                    <div className="space-y-4 pt-8 border-t border-slate-100/50 flex-1">
                      {item.details?.map((detail, dIdx) => (
                        <div key={dIdx} className="p-5 bg-white/40 backdrop-blur-sm rounded-[1.8rem] border border-white/60 shadow-sm hover:shadow-xl hover:bg-white/80 transition-all group/item">
                          <div className="flex items-start gap-4">
                            <div className="w-9 h-9 rounded-xl bg-blue-50/80 flex items-center justify-center text-[#0055FF] shrink-0 mt-0.5 group-hover/item:bg-[#0055FF] group-hover/item:text-white shadow-sm transition-all duration-300">
                              <CheckCircle2 size={20} />
                            </div>
                            <span className="text-[20px] font-bold text-slate-600 leading-snug group-hover/item:text-slate-900 transition-colors">{detail}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {item.deliverables && (
                      <div className="mt-8 flex flex-wrap gap-3 pt-6 border-t border-slate-100/50">
                        {item.deliverables.map((del, dIdx) => (
                          <button
                            key={dIdx}
                            onClick={() => setSelectedDeliverable(del)}
                            className="px-5 py-3 bg-white/60 backdrop-blur-sm text-[#0055FF] border border-white/80 rounded-2xl text-[18px] font-black flex items-center gap-2 hover:bg-[#0055FF] hover:text-white transition-all shadow-sm hover:shadow-lg"
                          >
                            <FileText size={20} /> {del.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }

      case 'content-structure':
        const leftItem = slide.items?.[0];
        const rightItem = slide.items?.[1];

        return (
          <div className="flex flex-col space-y-10 py-10">
            <div className="flex flex-col space-y-2">
              <h2 className="section-title">{slide.title}</h2>
              <p className="section-subtitle">{slide.subtitle}</p>
            </div>

            <div className="grid grid-cols-2 gap-8 flex-1">
              {/* Left Side */}
              <div className="glass-card p-12 rounded-[4rem] flex flex-col space-y-8 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="mb-6">
                    <h3 className="text-[32px] font-black text-slate-900 mb-2">{leftItem?.label}</h3>
                    <p className="text-[20px] font-bold text-[#0055FF]">{leftItem?.value}</p>
                  </div>
                  <div className="bg-blue-50/50 p-10 rounded-3xl border border-blue-100 italic text-[22px] font-bold text-slate-700 leading-relaxed shadow-inner">
                    <Bot className="text-[#0055FF] mb-4 opacity-40" size={40} />
                    {slide.content}
                  </div>
                  {leftItem?.details && (
                    <div className="mt-8 space-y-4">
                      {leftItem.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-4 p-4 bg-white/40 rounded-2xl border border-white">
                          <CheckCircle2 className="text-[#0055FF] shrink-0 mt-1" size={24} />
                          <span className="text-[20px] font-bold text-slate-600 leading-snug">{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl opacity-50 group-hover:scale-110 transition-transform duration-1000" />
              </div>

              {/* Right Side */}
              <div className="glass-card p-12 rounded-[4rem] flex flex-col space-y-8 relative overflow-hidden group">
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="text-[32px] font-black text-slate-900 mb-2">{rightItem?.label}</h3>
                    <p className="text-[20px] font-bold text-[#0055FF]">{rightItem?.value}</p>
                  </div>

                  {slide.tableData ? (
                    <div className="flex-1 flex flex-col pt-6 border-t border-slate-100 overflow-hidden">
                      <div className="bg-slate-900 text-white rounded-2xl overflow-hidden mb-2">
                        <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr] divide-x divide-white/10">
                          {slide.tableData.headers.map((h, i) => (
                            <div key={i} className="px-4 py-4 text-[16px] font-black uppercase text-center bg-slate-800">
                              {h}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex-1 divide-y divide-slate-100 overflow-y-auto custom-scrollbar">
                        {slide.tableData.rows.map((row, i) => (
                          <div key={i} className="grid grid-cols-[1.2fr_1fr_1fr_1fr] divide-x divide-slate-50 hover:bg-blue-50/30 transition-colors items-center min-h-[60px]">
                            {row.map((cell, j) => (
                              <div key={j} className={`px - 4 py - 3 h - full flex items - center justify - center text - center text - [16px] ${j === 1 ? 'font-black text-[#0055FF]' : j === 0 ? 'text-slate-900 font-black' : 'text-slate-500 font-bold'} `}>
                                {cell}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 pt-6 border-t border-slate-100 flex-1 overflow-y-auto custom-scrollbar pr-2">
                      {rightItem?.details?.map((detail, dIdx) => (
                        <div key={dIdx} className="space-y-3 mb-6">
                          <h4 className="text-[22px] font-black text-slate-900 flex items-center gap-3">
                            <MessageSquare className="text-[#0055FF]" size={24} />
                            {typeof detail === 'string' ? detail : detail.label}
                          </h4>
                          {typeof detail === 'object' && detail.details && (
                            <div className="space-y-2 pl-9">
                              {detail.details.map((subD, sdIdx) => (
                                <div key={sdIdx} className="p-4 bg-white/60 rounded-2xl border border-white text-[19px] font-bold text-slate-600 leading-snug">
                                  {subD}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-slate-50/50 rounded-full blur-3xl opacity-50 group-hover:scale-110 transition-transform duration-1000" />
              </div>
            </div>
          </div>
        );

      case 'technical-geo':
        return (
          <div className="flex flex-col space-y-10 py-10">
            <div className="flex flex-col space-y-2">
              <h2 className="section-title">{slide.title}</h2>
              <p className="section-subtitle">{slide.subtitle}</p>
            </div>

            <div className="grid grid-cols-2 gap-8 flex-1">
              {/* Left Column: Schema.org Code Block */}
              <div className="glass-card p-10 rounded-[3rem] relative overflow-hidden group flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-[30px] font-black text-slate-900 mb-1">{slide.items?.[0].label}</h3>
                    <p className="text-[18px] font-bold text-[#0055FF]">{slide.items?.[0].value}</p>
                  </div>
                </div>
                <div className="bg-[#1a202c] rounded-2xl p-6 font-mono text-[16px] text-blue-100 shadow-inner overflow-x-auto relative shadow-2xl flex-1 custom-scrollbar">
                  <div className="absolute top-4 right-4 opacity-10"><Bot size={32} /></div>
                  <pre className="leading-relaxed">
                    {slide.content}
                  </pre>
                </div>
              </div>

              {/* Right Column: Meta and Links (Vertical Stack) */}
              <div className="flex flex-col gap-6">
                {slide.items?.slice(1).map((item, idx) => (
                  <div key={idx} className="glass-card p-10 rounded-[3rem] flex flex-col group hover:bg-white/90 transition-all flex-1">
                    <div className="mb-6">
                      <h4 className="text-[30px] font-black text-slate-900">{item.label}</h4>
                    </div>
                    <div className="space-y-3 flex-1">
                      {item.details?.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-3 p-3 bg-white/40 rounded-2xl border border-white">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0055FF] mt-2.5 shrink-0" />
                          <span className="text-[18px] font-bold text-slate-600 leading-snug">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'message-hierarchy':
        return (
          <div className="flex flex-col space-y-10 py-10 h-full">
            <div className="flex flex-col space-y-2">
              <h2 className="section-title">{slide.title}</h2>
              <p className="section-subtitle">{slide.subtitle}</p>
            </div>

            <div className="flex-1 flex flex-col gap-8 min-h-0">
              {/* Level 1: Umbrella Message (Full Width) */}
              <div className="glass-card p-10 rounded-[3.5rem] relative overflow-hidden group premium-glow border-2 border-[#0055FF]/30">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="inline-flex items-center px-4 py-1.5 bg-[#0055FF] text-white text-[14px] font-black rounded-full tracking-widest uppercase shadow-md">
                      LEVEL 01: Umbrella
                    </span>
                    <h3 className="text-[32px] font-black text-slate-900">{slide.items?.[0].label}</h3>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="px-8 py-4 bg-blue-50/50 rounded-2xl border border-blue-100 text-[26px] font-black text-[#0055FF]">
                      {slide.items?.[0].value}
                    </div>
                    <p className="text-[22px] font-bold text-slate-600 leading-relaxed max-w-3xl">
                      {slide.items?.[0].details?.[0]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Levels 2 & 3: Pillars & Proof Points (2 Columns) */}
              <div className="grid grid-cols-2 gap-8 flex-1">
                {/* Key Message (Pillars) */}
                <div className="glass-card p-10 rounded-[3.5rem] relative overflow-hidden group premium-glow flex flex-col">
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-6">
                      <span className="inline-flex items-center px-3 py-1 bg-[#00377E] text-white text-[12px] font-black rounded-full tracking-widest uppercase mb-4 shadow-sm">
                        LEVEL 02
                      </span>
                      <h3 className="text-[28px] font-black text-slate-900 mb-2">{slide.items?.[1].label}</h3>
                      <p className="text-[20px] font-bold text-[#0055FF]">{slide.items?.[1].value}</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mt-auto flex-1 h-full py-4 border-t border-slate-100/50">
                      {slide.items?.[1].details?.map((detail, dIdx) => (
                        <div key={dIdx} className="p-4 bg-white/40 rounded-2xl border border-white flex items-center gap-4 hover:bg-white transition-all shadow-sm">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#0055FF] shrink-0 font-black">
                            {dIdx + 1}
                          </div>
                          <span className="text-[19px] font-bold text-slate-600 leading-snug">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Evidence Data (Proof Points) */}
                <div className="glass-card p-10 rounded-[3.5rem] relative overflow-hidden group premium-glow flex flex-col">
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-6">
                      <span className="inline-flex items-center px-3 py-1 bg-slate-900 text-white text-[12px] font-black rounded-full tracking-widest uppercase mb-4 shadow-sm">
                        LEVEL 03
                      </span>
                      <h3 className="text-[28px] font-black text-slate-900 mb-2">{slide.items?.[2].label}</h3>
                      <p className="text-[20px] font-bold text-slate-500">{slide.items?.[2].value}</p>
                    </div>
                    <div className="space-y-4 mt-auto flex-1 h-full py-4 border-t border-slate-100/50">
                      {slide.items?.[2].details?.map((detail, dIdx) => (
                        <div key={dIdx} className="p-5 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 flex items-center gap-4">
                          <CheckCircle2 size={24} className="text-[#0055FF] shrink-0" />
                          <span className="text-[19px] font-black text-slate-700 leading-snug">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'dual-writing':
        return (
          <div className="flex flex-col space-y-10 py-10">
            <div className="flex flex-col space-y-2">
              <h2 className="section-title">{slide.title}</h2>
              <p className="section-subtitle">{slide.subtitle}</p>
            </div>

            <div className="grid grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="glass-card p-10 rounded-[3rem] premium-glow">
                  <h3 className="text-2xl font-black text-slate-900 mb-6">
                    AI-Ready Content Strategy
                  </h3>
                  <p className="text-xl font-bold text-slate-600 leading-relaxed whitespace-pre-line">
                    {slide.content}
                  </p>
                </div>

                <div className="space-y-4">
                  {slide.items?.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-5 p-6 glass-card rounded-3xl hover:translate-x-2 transition-transform premium-glow">
                      <div className="w-12 h-12 samsung-blue-bg rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-100">
                        <Check size={24} strokeWidth={4} />
                      </div>
                      <span className="text-[20px] font-black text-slate-700">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/40 aspect-video glass-card p-2">
                <img
                  src="/double-writing-layer.jpg"
                  alt="Dual Writing Strategy"
                  className="w-full h-full object-cover rounded-[2.5rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0055FF]/10 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        );

      case 'master-plan':
        return (
          <div className="flex flex-col space-y-10 py-10">
            <div className="flex flex-col space-y-2">
              <h2 className="section-title">{slide.title}</h2>
              <p className="section-subtitle">{slide.subtitle}</p>
            </div>

            <div className="grid grid-cols-4 gap-6">
              {slide.items?.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="glass-card rounded-[2.5rem] p-8 h-full flex flex-col premium-glow">
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-[#0055FF] font-black text-[20px] tracking-widest uppercase">Phase 0{idx + 1}</span>
                      <RefreshCw className="text-slate-200 group-hover:rotate-180 transition-transform duration-700" size={24} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight leading-none">{item.label}</h3>
                    <div className="space-y-4 flex-1">
                      {Array.isArray(item.details) && (item.details as any[]).map((detail, dIdx) => (
                        <div key={dIdx} className="bg-white/40 rounded-2xl p-5 border border-transparent group-hover:border-blue-100/50 transition-all">
                          {typeof detail === 'object' ? (
                            <>
                              <span className="block text-[20px] font-black text-[#0055FF] mb-1 uppercase tracking-tighter">
                                {detail.phase}
                              </span>
                              <span className="text-[20px] font-bold text-slate-600 leading-snug">
                                {detail.desc}
                              </span>
                            </>
                          ) : (
                            <span className="text-[20px] font-bold text-slate-600 leading-snug">
                              {detail}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    {item.deliverables && (
                      <div className="mt-8 flex flex-col gap-2 pt-6 border-t border-slate-100">
                        {item.deliverables.map((del, dIdx) => (
                          <button
                            key={dIdx}
                            onClick={() => setSelectedDeliverable(del)}
                            className="px-5 py-3 bg-blue-50 text-[#0055FF] rounded-xl text-[20px] font-black flex items-center justify-center gap-2 hover:bg-[#0055FF] hover:text-white transition-all shadow-sm"
                          >
                            <FileText size={20} /> {del.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {idx < 3 && (
                    <div className="absolute top-1/2 -right-3 translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 samsung-blue-bg rounded-full shadow-lg flex items-center justify-center text-white">
                      <ChevronRight size={20} strokeWidth={4} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 'roadmap-cycle':
        return (
          <div className="flex flex-col space-y-10 py-10 h-full">
            <div className="flex items-center justify-between">
              <div className="flex flex-col space-y-2">
                <h2 className="section-title !mb-0">{slide.title}</h2>
                <p className="section-subtitle !mb-0">{slide.subtitle}</p>
              </div>
            </div>

            {/* Timeline UI - 8 Weeks (2 Months) */}
            <div className="glass-card rounded-[3.5rem] p-8 premium-glow">
              <div className="grid grid-cols-8 gap-0 border-b border-slate-100 mb-6">
                <div className="col-span-4 text-center py-3 text-slate-300 font-black text-[16px] uppercase tracking-[0.3em] border-r border-slate-50">MONTH 01</div>
                <div className="col-span-4 text-center py-3 text-slate-300 font-black text-[16px] uppercase tracking-[0.3em]">MONTH 02</div>
              </div>
              <div className="grid grid-cols-8 gap-0 mb-8">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="text-center text-[13px] font-black text-slate-400">WEEK {i + 1}</div>
                ))}
              </div>

              {/* Phase Bars aligned with content */}
              <div className="grid grid-cols-8 gap-3 px-2">
                <div className="col-span-1 glass-card-sm py-4 rounded-2xl flex items-center justify-center text-[#0055FF] bg-blue-50/80 font-black text-[16px] shadow-md border-2 border-[#0055FF]/20">현황 진단</div>
                <div className="col-span-2 glass-card-sm py-4 rounded-2xl flex items-center justify-center text-[#0055FF] bg-blue-50/80 font-black text-[16px] shadow-md border-2 border-[#0055FF]/20">콘텐츠 최적화</div>
                <div className="col-span-1 glass-card-sm py-4 rounded-2xl flex items-center justify-center text-[#0055FF] bg-blue-50/80 font-black text-[16px] shadow-md border-2 border-[#0055FF]/20">기술 구현</div>
                <div className="col-span-4 glass-card-sm py-4 rounded-2xl flex items-center justify-center text-[#0055FF] bg-blue-50/80 font-black text-[16px] shadow-md border-2 border-[#0055FF]/20">성과 검증 및 추적</div>
              </div>
            </div>

            {/* Phase Detail Cards */}
            <div className={`grid ${slide.items?.length === 4 ? 'grid-cols-4' : 'grid-cols-3'} gap-6 flex-1 min-h-0`}>
              {slide.items?.map((item, idx) => (
                <div key={idx} className="glass-card p-6 rounded-[3rem] flex flex-col premium-glow group">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="px-3 py-1 bg-blue-50 text-[#0055FF] rounded-lg text-[11px] font-black uppercase tracking-tighter">PHASE 0{idx + 1}</span>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight whitespace-nowrap">{item.label?.split(' (')[0]}</h3>
                  </div>
                  <div className="space-y-2.5 flex-1 overflow-y-auto custom-scrollbar pr-1">
                    {item.details?.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3 p-3 hover:bg-white rounded-xl transition-all group/item border border-transparent hover:border-blue-50">
                        <div className="w-5 h-5 rounded-md bg-blue-200/20 flex items-center justify-center text-[#0055FF] shrink-0 mt-0.5 group-hover/item:bg-[#0055FF] group-hover/item:text-white transition-colors">
                          <Check size={12} strokeWidth={4} />
                        </div>
                        <span className="text-[15px] font-bold text-slate-600 leading-tight group-hover/item:text-slate-900 transition-colors whitespace-nowrap">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return <div className="p-20 text-slate-300 font-bold">Default Content for {slide.type}</div>;
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
            <div className="bg-slate-900 px-12 py-10 flex items-center justify-between text-white">
              <div className="flex items-center gap-6">
                <div className="p-4 samsung-blue-bg rounded-2xl">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-black tracking-tight">{selectedDeliverable.name}</h3>
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

            <div className="p-12 overflow-y-auto flex-1 custom-scrollbar bg-slate-50">
              <div className="bg-white mx-auto max-w-4xl min-h-full shadow-xl rounded-2xl p-16 border border-slate-100">
                <div className="whitespace-pre-line text-lg text-slate-600 leading-relaxed font-medium">
                  {selectedDeliverable.example}
                </div>
              </div>

              <div className="mt-12 flex justify-center pb-12">
                <button
                  onClick={closeModal}
                  className="group flex items-center gap-4 px-12 py-5 samsung-blue-bg text-white rounded-2xl font-black text-lg hover:bg-black transition-all shadow-xl"
                >
                  내용 확인 완료
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