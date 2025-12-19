import React, { useState } from 'react';
import { HEATMAP_ZONES } from '../constants.ts';
import { analyzeMarketZone } from '../services/geminiService.ts';
import { AlertTriangle, TrendingUp, Info, ChevronRight, Activity, DollarSign, PieChart, Clock } from 'lucide-react';

const MarketHeatmap: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleZoneClick = async (zoneId: string) => {
    setSelectedZone(zoneId);
    setAnalysis("");
    const zone = HEATMAP_ZONES.find(z => z.id === zoneId);
    if (!zone) return;

    setLoading(true);
    const result = await analyzeMarketZone(zone.name, zone.description);
    setAnalysis(result);
    setLoading(false);
  };

  const selectedZoneData = HEATMAP_ZONES.find(z => z.id === selectedZone);

  return (
    <section className="px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Map Representation */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
              <Activity className="w-4 h-4 text-cnn-red" /> 
              Zone Liquidity Matrix
            </h2>
            <div className="flex gap-4 text-[10px] font-bold text-gray-400">
              <span className="flex items-center gap-1"><span className="w-2 h-2 bg-red-500"></span> Sell/High Risk</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 bg-emerald-500"></span> Buy/Opportunity</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {HEATMAP_ZONES.map((zone) => (
              <button
                key={zone.id}
                onClick={() => handleZoneClick(zone.id)}
                className={`text-left p-6 border transition-all relative group rounded-sm flex flex-col h-full ${
                  selectedZone === zone.id ? 'border-cnn-black ring-2 ring-cnn-black' : 'border-gray-200 hover:border-cnn-red'
                } ${
                  zone.riskLevel === 'high' ? 'bg-red-50/30' : 
                  zone.riskLevel === 'medium' ? 'bg-yellow-50/30' : 'bg-emerald-50/30'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-[10px] font-black uppercase text-gray-400 mb-1">{zone.riskLevel} Alert</div>
                    <div className="text-xl font-black leading-tight">{zone.name}</div>
                  </div>
                  {zone.riskLevel === 'high' ? <AlertTriangle className="text-red-600 w-5 h-5" /> : <TrendingUp className="text-emerald-600 w-5 h-5" />}
                </div>
                
                {/* Financial Stats Bar Grid */}
                <div className="grid grid-cols-3 gap-2 mb-6 border-y border-gray-100 py-3">
                  <div>
                    <span className="block text-[8px] font-black uppercase text-gray-400">Price (m²)</span>
                    <span className="font-black text-sm">{zone.currentPrice}</span>
                  </div>
                  <div>
                    <span className="block text-[8px] font-black uppercase text-gray-400">Proj. ROI</span>
                    <span className={`font-black text-sm ${zone.projectedROI.includes('-') ? 'text-red-600' : 'text-emerald-600'}`}>
                      {zone.projectedROI}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[8px] font-black uppercase text-gray-400">Liquidity</span>
                    <span className="font-black text-sm">{zone.daysOnMarket}d</span>
                  </div>
                </div>

                <div className="space-y-2 mt-auto">
                   <div className="flex justify-between text-[10px] font-black uppercase">
                      <span>Growth Potential</span>
                      <span>{zone.growthPotential}%</span>
                   </div>
                   <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-1000 ${zone.riskLevel === 'high' ? 'bg-red-600' : 'bg-emerald-600'}`}
                        style={{ width: `${zone.growthPotential}%` }}
                      ></div>
                   </div>
                </div>
                <div className="mt-4 flex items-center text-[10px] font-black text-cnn-red opacity-0 group-hover:opacity-100 transition-opacity">
                  Analyze Zone <ChevronRight className="w-3 h-3 ml-1" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Intelligence Side Panel */}
        <div className="bg-[#111] text-white p-8 rounded-sm shadow-2xl flex flex-col min-h-[500px]">
          {!selectedZone || !selectedZoneData ? (
             <div className="flex-grow flex flex-col items-center justify-center text-center opacity-40">
                <Info className="w-12 h-12 mb-4" />
                <h3 className="text-lg font-black uppercase tracking-tighter">Select a zone for<br/>Axelrod's Play</h3>
             </div>
          ) : (
            <div className="animate-in fade-in duration-500 h-full flex flex-col">
               <div className="text-cnn-red font-black text-[10px] uppercase tracking-[0.3em] mb-4">Intelligence Report</div>
               <h3 className="text-3xl font-black mb-8 leading-tight">{selectedZoneData.name}</h3>
               
               {/* Quick Stats in Side Panel */}
               <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 p-4 border border-white/10 flex flex-col gap-1">
                    <span className="text-[10px] font-black text-gray-500 uppercase flex items-center gap-1">
                      <DollarSign className="w-3 h-3" /> Avg. Price
                    </span>
                    <span className="text-xl font-black">{selectedZoneData.currentPrice}</span>
                  </div>
                  <div className="bg-white/5 p-4 border border-white/10 flex flex-col gap-1">
                    <span className="text-[10px] font-black text-gray-500 uppercase flex items-center gap-1">
                      <PieChart className="w-3 h-3" /> Yield Risk
                    </span>
                    <span className={`text-xl font-black ${selectedZoneData.projectedROI.includes('-') ? 'text-red-500' : 'text-emerald-500'}`}>
                      {selectedZoneData.projectedROI}
                    </span>
                  </div>
               </div>

               <div className="bg-white/5 p-6 border border-white/10 rounded-sm mb-8 font-serif italic text-lg text-gray-300 leading-relaxed">
                  {loading ? (
                    <div className="flex items-center gap-3">
                       <span className="w-4 h-4 border-2 border-cnn-red border-t-transparent animate-spin rounded-full"></span>
                       <span className="text-sm font-sans font-bold non-italic">Mastermind is thinking...</span>
                    </div>
                  ) : (
                    `"${analysis || selectedZoneData.description}"`
                  )}
               </div>

               <div className="space-y-6 mt-auto">
                  <div>
                    <div className="text-[10px] font-black uppercase text-gray-500 mb-2 flex items-center gap-2">
                      <Clock className="w-3 h-3" /> Time-to-Exit (Days on Market)
                    </div>
                    <div className="flex justify-between items-end mb-1">
                      <span className="text-xs font-bold">{selectedZoneData.daysOnMarket} days average</span>
                      <span className="text-[10px] font-black text-gray-400">Target: &lt;60d</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${selectedZoneData.daysOnMarket > 100 ? 'bg-red-500' : 'bg-emerald-500'}`}
                        style={{ width: `${Math.min((selectedZoneData.daysOnMarket / 150) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                     <span className="bg-cnn-red text-white px-3 py-1 text-[9px] font-black uppercase tracking-widest">Reflexive Surge</span>
                     <span className="bg-white/10 text-white px-3 py-1 text-[9px] font-black uppercase tracking-widest">Institutional Exit</span>
                  </div>

                  <button className="w-full bg-cnn-red hover:bg-white hover:text-cnn-black text-white font-black py-4 uppercase text-xs transition-all shadow-lg border border-transparent hover:border-cnn-black">
                    Access Full Forensic Audit
                  </button>
               </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MarketHeatmap;