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
          <div className="h-full flex flex-col justify-center items-start text-left space-y-16 py-10">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-1 bg-[#C5A059]" />
                <span className="text-[#C5A059] text-xl font-black uppercase tracking-[0.2em]">Luxury Aesthetic</span>
              </div>
              <h1 className="text-8xl md:text-9xl font-black tracking-tighter text-[#4A362D] leading-[1] max-w-5xl">
                {slide.title}
              </h1>
              <p className="text-3xl text-slate-500 font-bold leading-relaxed max-w-4xl">
                {slide.subtitle}
              </p>
            </div>

            <div className="flex flex-col space-y-8">
              <div className="flex items-center gap-6">
                <div className="px-8 py-4 bg-white border border-[#4A362D]/10 rounded-2xl shadow-sm text-2xl font-black text-[#4A362D]">
                  Samsung Asset Management <span className="text-[#C5A059] mx-2">×</span> ETRIBE
                </div>
              </div>
              <div className="max-w-3xl text-slate-800 text-2xl font-bold leading-relaxed whitespace-pre-line border-l-4 border-[#C5A059] pl-8">
                {slide.content}
              </div>
            </div>
          </div>
        );

      case 'scale-up':
        return (
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

            <div className="bg-[#4A362D] p-10 rounded-[3rem] flex items-center gap-12 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#C5A059]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="flex-shrink-0 w-24 h-24 bg-[#C5A059] rounded-3xl flex items-center justify-center text-white shadow-xl">
                <Repeat className="w-12 h-12" />
              </div>
              <div className="flex-1">
                <p className="text-2xl font-black text-white leading-snug">
                  Strategic Feedback Loop
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
                  </div>
                </div>
              ))}
            </div>

            {slide.content && (
              <div className="bg-white border border-[#4A362D]/10 px-8 py-6 rounded-3xl flex items-center gap-8 shadow-sm">
                <div className="bg-[#4A362D] text-white p-4 rounded-2xl shadow-lg">
                  <Activity size={28} />
                </div>
                <p className="text-2xl font-bold text-[#4A362D] leading-relaxed">
                  {slide.content}
                </p>
              </div>
            )}
          </div>
        );

      case 'paradigm-shift':
        return (
          <div className="h-full flex flex-col space-y-12">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-1 bg-[#C5A059]" />
                <span className="text-[#C5A059] text-sm font-black uppercase tracking-widest">Strategic Paradigm</span>
              </div>
              <h2 className="text-6xl font-black text-[#4A362D] tracking-tighter">{slide.title}</h2>
              <p className="text-slate-500 font-bold text-2xl">{slide.subtitle}</p>
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
                  <p className="text-xl font-bold text-slate-500 leading-relaxed">
                    AI interfaces now serve final answers directly. We pivot strategy to ensure <span className="text-[#C5A059] font-black underline underline-offset-8 decoration-[#C5A059]/30">brand dominance</span> within those answers.
                  </p>
                </div>
                <div className="bg-white border border-[#4A362D]/5 p-10 rounded-[2.5rem] shadow-sm space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#4A362D]">
                      <TargetIcon size={24} />
                    </div>
                    <h4 className="text-2xl font-black text-[#4A362D]">Authority Metrics</h4>
                  </div>
                  <p className="text-xl font-bold text-slate-500 leading-relaxed">
                    Traffic is no longer the only goal. <span className="text-[#C5A059] font-black underline underline-offset-8 decoration-[#C5A059]/30">Citation Frequency</span> and Answer Accuracy are the new KPIs for digital leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'ai-mechanism':
        return (
          <div className="h-full flex flex-col space-y-12">
            <div className="flex flex-col space-y-4 text-center items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-1 bg-[#C5A059]" />
                <span className="text-[#C5A059] text-sm font-black uppercase tracking-widest">Logic Flow</span>
              </div>
              <h2 className="text-6xl font-black text-[#4A362D] tracking-tighter">{slide.title}</h2>
              <p className="text-slate-500 font-bold text-2xl">{slide.subtitle}</p>
            </div>

            <div className="flex-1 grid grid-cols-4 gap-8">
              {slide.items?.map((step, idx) => (
                <div key={idx} className={`relative flex flex-col rounded-[3.5rem] border-2 transition-all duration-700 bg-white hover:-translate-y-4 ${idx === 1 ? 'border-[#C5A059] shadow-[0_40px_80px_rgba(197,160,89,0.15)]' : 'border-slate-50 shadow-sm hover:shadow-2xl'}`}>
                  <div className="w-full h-56 rounded-t-[3.3rem] overflow-hidden relative cursor-pointer group" onClick={() => (step as any).image && setSelectedImage((step as any).image)}>
                    {(step as any).image ? (
                      <img src={(step as any).image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    ) : (
                      <div className="w-full h-full bg-[#F4F1ED] flex items-center justify-center text-[#4A362D]/20">
                        <ImageIcon size={48} />
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

      case 'pillars':
        return (
          <div className="h-full flex flex-col space-y-12">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-1 bg-[#C5A059]" />
                <span className="text-[#C5A059] text-sm font-black uppercase tracking-widest">Process Engineering</span>
              </div>
              <h2 className="text-6xl font-black text-[#4A362D] tracking-tighter">{slide.title}</h2>
              <p className="text-slate-500 font-bold text-2xl">{slide.subtitle}</p>
            </div>

            <div className="flex-1 grid grid-cols-3 gap-10 pb-8">
              {slide.items?.map((item, idx) => (
                <div key={idx} className="flex flex-col bg-white border border-[#4A362D]/5 rounded-[3.5rem] shadow-[0_20px_50px_rgba(74,54,45,0.02)] hover:shadow-[0_40px_80px_rgba(74,54,45,0.06)] transition-all duration-700 overflow-hidden group">
                  <div className="bg-[#4A362D]/5 p-10 flex items-center justify-between border-b border-[#4A362D]/5">
                    <div className="flex items-center gap-5">
                      <div className="p-4 bg-white rounded-2xl shadow-sm text-[#4A362D] group-hover:bg-[#4A362D] group-hover:text-white transition-all duration-500">
                        {idx === 0 ? <Search size={28} /> : idx === 1 ? <Target size={28} /> : <Play size={28} />}
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
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'pipeline':
        return (
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
            </div>
          </div>
        );

      case 'master-plan':
        const checklists = slide.items?.[1]?.details as any[] || [];
        const reports = slide.items?.[3]?.details as any[] || [];

        return (
          <div className="h-full flex flex-col space-y-12">
            <div className="flex justify-between items-end">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-1 bg-[#C5A059]" />
                  <span className="text-[#C5A059] text-sm font-black uppercase tracking-widest">Sustainability</span>
                </div>
                <h2 className="text-6xl font-black text-[#4A362D] tracking-tighter">{slide.title}</h2>
                <p className="text-slate-500 font-bold text-2xl">{slide.subtitle}</p>
              </div>

              <div className="flex gap-4">
                {reports.map((report, idx) => (
                  <div key={idx} className="bg-white border border-[#4A362D]/5 px-8 py-5 rounded-[2.5rem] flex items-center gap-4 group hover:border-[#C5A059]/30 transition-all">
                    <div className="bg-[#F4F1ED] p-3 rounded-2xl group-hover:bg-[#C5A059] group-hover:text-white transition-all duration-500 text-[#4A362D]">
                      <FileText size={20} className="group-hover:text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-black text-slate-300 uppercase tracking-widest mb-1">{report.title}</span>
                      <span className="text-xl font-black text-[#4A362D] leading-none">{report.schedule}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 grid grid-cols-3 gap-10">
              {checklists.map((group, idx) => (
                <div key={idx} className="rounded-[3.5rem] p-12 flex flex-col border border-slate-50 bg-white shadow-sm hover:border-[#C5A059]/30 transition-all duration-700">
                  <div className="flex flex-col gap-2 mb-10">
                    <span className="text-xs font-black text-[#C5A059]/40 uppercase tracking-[0.3em]">Focus 0{idx + 1}</span>
                    <h4 className="text-3xl font-black text-[#4A362D]">{group.phase}</h4>
                  </div>
                  <div className="space-y-6 flex-1">
                    {group.items.map((item: string, i: number) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="mt-1.5 w-6 h-6 rounded-lg border-2 border-slate-100 flex items-center justify-center flex-shrink-0 text-slate-100 group-hover:border-[#C5A059] group-hover:text-[#C5A059] transition-colors">
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'service-loop':
        return (
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
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-10 bg-[#4A362D]/80 backdrop-blur-3xl slide-enter">
          <div className="bg-white w-full max-w-5xl h-[88vh] rounded-[5rem] shadow-2xl flex flex-col overflow-hidden border border-white/20">
            <div className="bg-[#333] px-20 py-12 flex items-center justify-between">
              <div className="flex items-center gap-8">
                <div className="p-6 bg-[#C5A059] rounded-[2.5rem] shadow-lg">
                  <FileText className="text-white w-8 h-8" />
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
            <div className="flex-1 overflow-y-auto p-20 custom-scrollbar bg-[#F4F1ED]/30">
              <div className="max-w-4xl mx-auto bg-white p-24 shadow-[0_50px_120px_rgba(74,54,45,0.12)] rounded-[3rem] border border-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059] opacity-[0.05] rounded-bl-full" />
                <pre className="whitespace-pre-wrap text-2xl font-bold leading-[1.8] text-[#4A362D]/80 font-['Pretendard'] tracking-tight">
                  {selectedDeliverable.example}
                </pre>
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
