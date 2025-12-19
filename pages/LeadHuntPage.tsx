import React from 'react';
import LeadPredator from '../components/LeadPredator.tsx';
import { ShieldAlert, Radio, Activity, Search } from 'lucide-react';

const LeadHuntPage: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Predator Header Section */}
      <div className="px-4 py-16 border-b border-gray-100 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-cnn-red/5 skew-x-[-20deg] translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-cnn-red font-black text-[11px] uppercase tracking-[0.4em] mb-6">
              <div className="flex items-center">
                 <span className="w-2 h-2 bg-cnn-red rounded-full animate-ping mr-1"></span>
                 <span className="w-2 h-2 bg-cnn-red rounded-full"></span>
              </div>
              Predatory Surveillance Online
            </div>
            <h1 className="text-6xl font-black text-white mb-6 tracking-tighter uppercase leading-none">Target Acquisition</h1>
            <p className="text-gray-400 font-medium text-xl leading-relaxed border-l-4 border-cnn-red pl-8 italic">
              &ldquo;Don't sell houses. Buy vulnerabilities. The Black Book tracks market blood in real-time.&rdquo;
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
             <div className="bg-white/5 border border-white/10 p-6 flex flex-col items-center">
                <Activity className="text-emerald-500 mb-2 w-6 h-6" />
                <span className="text-[10px] font-black uppercase text-gray-500">Whale Activity</span>
                <span className="text-2xl font-black">SURGING</span>
             </div>
             <div className="bg-white/5 border border-white/10 p-6 flex flex-col items-center">
                <ShieldAlert className="text-cnn-red mb-2 w-6 h-6" />
                <span className="text-[10px] font-black uppercase text-gray-400">Distress Index</span>
                <span className="text-2xl font-black">HIGH</span>
             </div>
          </div>
        </div>
      </div>
      
      {/* Main Hunting Dashboard */}
      <div className="py-12">
        <LeadPredator />
      </div>

      {/* Surveillance Summary Footer */}
      <div className="bg-gray-50 border-t border-gray-200 py-12 px-4 mt-12">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8">
           <div className="flex items-center gap-4">
              <div className="bg-cnn-black p-3 rounded-full">
                 <Radio className="w-5 h-5 text-white animate-pulse" />
              </div>
              <div>
                 <h4 className="text-sm font-black uppercase">Live Signal Scanner</h4>
                 <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Scanning HCMC Metro zones 1-9 for liquidity events...</p>
              </div>
           </div>
           <div className="flex gap-4">
              <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-sm shadow-sm cursor-pointer hover:border-cnn-red transition-all">
                 <Search className="w-4 h-4 text-gray-400" />
                 <span className="text-[10px] font-black uppercase tracking-widest">Filter: Distressed</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-sm shadow-sm cursor-pointer hover:border-cnn-red transition-all">
                 <Search className="w-4 h-4 text-gray-400" />
                 <span className="text-[10px] font-black uppercase tracking-widest">Filter: Whale Exit</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default LeadHuntPage;