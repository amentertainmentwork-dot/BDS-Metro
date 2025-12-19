import React, { useState } from 'react';
import { LEAD_TARGETS } from '../constants.ts';
import { profileTarget } from '../services/geminiService.ts';
import { Crosshair, UserPlus, Zap, ShieldAlert, Target, Loader2, Info, Activity, DollarSign, Fingerprint } from 'lucide-react';
import { LeadTarget } from '../types.ts';

const LeadPredator: React.FC = () => {
  const [selectedTarget, setSelectedTarget] = useState<LeadTarget | null>(null);
  const [aiProfile, setAiProfile] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleProfileTarget = async (target: LeadTarget) => {
    setSelectedTarget(target);
    setAiProfile("");
    setLoading(true);
    const result = await profileTarget(target.alias, target.lastSignal, target.vulnerability, target.leverageRatio);
    setAiProfile(result);
    setLoading(false);
  };

  const getUrgencyColor = (urgency: number) => {
    if (urgency >= 90) return 'text-red-600 bg-red-100 border-red-200';
    if (urgency > 50) return 'text-orange-600 bg-orange-100 border-orange-200';
    return 'text-emerald-600 bg-emerald-100 border-emerald-200';
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 p-4 max-w-7xl mx-auto">
      {/* Target List (The Black Book) */}
      <div className="lg:col-span-2">
        <div className="flex justify-between items-center mb-8 border-b-4 border-cnn-black pb-4">
          <div className="flex items-center gap-4">
             <div className="bg-cnn-red p-2">
                <Crosshair className="w-8 h-8 text-white" />
             </div>
             <h2 className="text-3xl font-black tracking-tighter uppercase">The Black Book</h2>
          </div>
          <button className="bg-cnn-black text-white px-6 py-2 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-cnn-red transition-all">
            <UserPlus className="w-4 h-4" /> Add Intelligence
          </button>
        </div>

        <div className="space-y-4">
          {LEAD_TARGETS.map((target) => (
            <div 
              key={target.id}
              onClick={() => handleProfileTarget(target)}
              className={`group p-6 border-2 transition-all cursor-pointer relative overflow-hidden ${
                selectedTarget?.id === target.id ? 'border-cnn-red bg-white shadow-xl scale-[1.01]' : 'border-gray-100 hover:border-gray-300 bg-gray-50/50'
              }`}
            >
              {target.urgency >= 90 && (
                <div className="absolute top-0 right-0 px-4 py-1 bg-cnn-red text-white text-[9px] font-black uppercase transform translate-x-[35%] translate-y-[50%] rotate-45">
                   Vulnerable
                </div>
              )}

              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 flex items-center justify-center font-black text-xl border-2 ${selectedTarget?.id === target.id ? 'border-cnn-red text-cnn-red' : 'border-gray-200 text-gray-300'}`}>
                    {target.alias.charAt(0)}
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                       <Fingerprint className="w-3 h-3" /> {target.profileType} • ID: {target.id}
                    </div>
                    <h3 className="text-2xl font-black text-cnn-black group-hover:text-cnn-red transition-colors">{target.alias}</h3>
                  </div>
                </div>
                <div className={`px-4 py-1.5 font-black text-[10px] uppercase border-2 rounded-sm ${getUrgencyColor(target.urgency)}`}>
                  Priority: {target.urgency}%
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-2 border-t border-gray-100 pt-4">
                <div>
                  <span className="text-gray-400 block uppercase text-[9px] font-black mb-1">Estimated Capital</span>
                  <span className="font-mono font-bold text-sm text-cnn-black">{target.netWorthEstimate}</span>
                </div>
                <div>
                  <span className="text-gray-400 block uppercase text-[9px] font-black mb-1">Vulnerability</span>
                  <span className="font-bold text-sm text-cnn-red">{target.vulnerability}</span>
                </div>
                <div>
                  <span className="text-gray-400 block uppercase text-[9px] font-black mb-1">Leverage Ratio</span>
                  <span className="font-mono font-bold text-sm">{target.leverageRatio}</span>
                </div>
                <div className="text-right">
                   <span className="text-gray-400 block uppercase text-[9px] font-black mb-1">Current Status</span>
                   <span className="flex items-center justify-end gap-1 text-[11px] font-black">
                     <span className={`w-2 h-2 rounded-full ${target.status === 'CLOSING' ? 'bg-cnn-red animate-ping' : 'bg-emerald-500'}`}></span> {target.status}
                   </span>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-white border border-gray-100 rounded-sm italic text-xs text-gray-500 line-clamp-1 border-l-4 border-l-cnn-red">
                 &ldquo;{target.lastSignal}&rdquo;
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Acquisition Intelligence Side Panel */}
      <div className="bg-[#050505] text-white p-8 rounded-sm shadow-2xl flex flex-col min-h-[700px] border-t-8 border-cnn-red relative group">
        <div className="absolute top-4 right-4 opacity-5 pointer-events-none">
           <Target className="w-48 h-48" />
        </div>

        {!selectedTarget ? (
          <div className="flex-grow flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 border-2 border-dashed border-gray-800 rounded-full flex items-center justify-center mb-6 opacity-40">
               <Crosshair className="w-8 h-8 text-gray-500" />
            </div>
            <h3 className="text-xl font-black uppercase tracking-tighter text-gray-600">Surveillance Mode Active<br/>Select Acquisition Target</h3>
          </div>
        ) : (
          <div className="animate-in fade-in duration-500 flex flex-col h-full z-10">
            <div className="text-cnn-red font-black text-[10px] uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
               <Activity className="w-3 h-3 animate-pulse" /> Predatory Analysis
            </div>
            <h3 className="text-4xl font-black mb-2 leading-tight tracking-tighter">{selectedTarget.alias}</h3>
            <div className="text-xs font-bold text-gray-500 mb-8 uppercase tracking-widest flex items-center gap-2">
               <DollarSign className="w-3 h-3" /> Focus: {selectedTarget.locationFocus}
            </div>

            <div className="space-y-8">
               <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
                  <h4 className="text-[11px] font-black text-cnn-red uppercase mb-4 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4" /> The Kill Shot (Negotiation Strategy)
                  </h4>
                  {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-4">
                       <Loader2 className="w-12 h-12 animate-spin text-cnn-red" />
                       <span className="text-[10px] font-black animate-pulse tracking-widest text-gray-500">DECRYPTING TARGET PSYCHOLOGY...</span>
                    </div>
                  ) : (
                    <div className="font-serif italic text-lg text-gray-200 leading-relaxed whitespace-pre-line border-l-2 border-cnn-red pl-6 py-2">
                      {aiProfile || "Initialize profiling to see the strategic play."}
                    </div>
                  )}
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 border border-white/10">
                     <span className="text-[9px] font-black uppercase text-gray-500 block mb-1">Weakness</span>
                     <span className="text-sm font-bold text-cnn-red">{selectedTarget.vulnerability}</span>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10">
                     <span className="text-[9px] font-black uppercase text-gray-500 block mb-1">Closing Prob.</span>
                     <span className="text-sm font-bold text-emerald-500">{(selectedTarget.urgency * 0.95).toFixed(1)}%</span>
                  </div>
               </div>
            </div>

            <div className="mt-auto pt-8 space-y-4">
              <button className="w-full bg-cnn-red hover:bg-white hover:text-cnn-black text-white font-black py-5 uppercase text-xs transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95">
                <Zap className="w-5 h-5 fill-current" /> Execute Acquisition Play
              </button>
              
              <div className="flex justify-between items-center text-[9px] text-gray-600 font-black uppercase tracking-widest">
                <span className="flex items-center gap-1"><Info className="w-3 h-3" /> SECURE HANDLED</span>
                <span>BDSMETRO v4.2 Intel</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadPredator;