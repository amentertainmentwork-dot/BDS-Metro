import React, { useState } from 'react';
import { METRO_INDEX_SUMMARY, HOT_PROJECTS, ECONOMIC_CALENDAR, INTEL_ARTICLES } from '../constants.ts';
import { Info, ChevronRight, TrendingUp, TrendingDown, Map as MapIcon, Globe, LayoutGrid } from 'lucide-react';

const MetroIndexPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Market open');

  const renderGauge = () => (
    <div className="bg-white border border-gray-200 p-6 rounded-md shadow-sm flex flex-col md:flex-row items-center gap-8 h-full">
      <div className="relative w-48 h-24 overflow-hidden shrink-0">
        {/* Gauge Arc */}
        <div className="absolute top-0 left-0 w-48 h-48 border-[24px] border-gray-100 rounded-full"></div>
        {/* Color Segments */}
        <div className="absolute top-0 left-0 w-48 h-48 border-[24px] border-transparent border-l-orange-200 border-t-orange-400 rounded-full rotate-[15deg]"></div>
        <div className="absolute top-0 left-0 w-48 h-48 border-[24px] border-transparent border-r-emerald-500 rounded-full rotate-[-45deg]"></div>
        {/* Needle */}
        <div className="absolute bottom-0 left-1/2 w-0.5 h-20 bg-gray-800 origin-bottom -translate-x-1/2 rotate-[-30deg]"></div>
        <div className="absolute bottom-[-10px] left-1/2 w-10 h-10 bg-white border-2 border-gray-200 rounded-full -translate-x-1/2 flex items-center justify-center font-bold text-sm shadow-sm">
          44
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-[#c45500] mb-1">Fear</h2>
        <p className="text-gray-800 font-medium">is driving the Metro market <ChevronRight className="inline w-4 h-4" /></p>
      </div>
    </div>
  );

  return (
    <div className="pt-20 min-h-screen bg-white text-[#222] font-sans">
      {/* 1. Global Markets Banner */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-5xl font-black mb-4 tracking-tight">Markets</h1>
        <p className="text-gray-600 max-w-2xl mb-10 leading-relaxed font-medium">
          Up-to-date real estate market data coverage from BDSMETRO. Get the latest updates on HCMC Metro markets, secondary zones, land quotes, and developer liquidity.
        </p>

        {/* 2. Top Widgets Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {renderGauge()}
          
          <div className="bg-white border border-gray-200 p-6 rounded-md shadow-sm flex items-center gap-6 h-full">
            <div className="shrink-0">
               <div className="w-16 h-16 bg-navy-900 flex items-center justify-center rounded-sm">
                 <span className="text-bronze-500 font-black text-2xl italic">M</span>
               </div>
            </div>
            <div className="flex-grow">
               <h3 className="text-3xl font-serif font-bold italic text-navy-900">nightcap</h3>
               <p className="text-blue-600 text-sm font-bold flex items-center gap-1 cursor-pointer hover:underline">
                 + Sign up to newsletter
               </p>
            </div>
            <div className="max-w-[200px] text-xs font-medium text-gray-500 leading-relaxed">
              We read every day so you don't have to. Sign up for BDSMETRO Nightly for the top stories you need to know.
            </div>
          </div>
        </div>

        {/* 3. Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8 flex items-center justify-center space-x-12">
          {['Pre-market', 'Market open', 'After-hours'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 font-bold text-sm transition-all relative ${
                activeTab === tab ? 'text-black border-b-4 border-red-600' : 'text-gray-500 hover:text-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 4. Index Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {METRO_INDEX_SUMMARY.map((index, i) => (
            <div key={i} className="bg-white border border-gray-200 p-6 rounded-md shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <span className="font-black text-sm uppercase tracking-wider">{index.name}</span>
                <span className="font-bold text-gray-400 text-xs">Change</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-3xl font-black">{index.value}</span>
                <div className={`flex flex-col items-end font-bold text-sm ${index.color.replace('text-', 'text-[#').replace('400', '0a9d4f]')}`}>
                   <span>{index.change}</span>
                   <span className="flex items-center">
                     {index.percent} {index.change.includes('+') ? <TrendingUp className="w-3 h-3 ml-1" /> : <TrendingDown className="w-3 h-3 ml-1" />}
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 5. Hot Stocks Style Table & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            {/* Today's Hot Projects */}
            <div className="bg-white">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-black">Today's hot projects</h2>
                <div className="flex bg-gray-100 rounded-full p-1 text-[10px] font-black uppercase">
                  <button className="bg-black text-white px-5 py-2 rounded-full">Active</button>
                  <button className="px-5 py-2 rounded-full text-gray-500">Gainers</button>
                  <button className="px-5 py-2 rounded-full text-gray-500">Losers</button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm font-medium">
                  <thead className="text-gray-400 border-b border-gray-100">
                    <tr>
                      <th className="pb-4 font-black">Symbol</th>
                      <th className="pb-4">Name</th>
                      <th className="pb-4 text-right">Price</th>
                      <th className="pb-4 text-right">Change</th>
                      <th className="pb-4 text-right">% Change</th>
                      <th className="pb-4 text-right">Volume</th>
                      <th className="pb-4 pl-10">52-week range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {HOT_PROJECTS.map((project) => (
                      <tr key={project.id} className="group hover:bg-gray-50 transition-colors">
                        <td className="py-5 font-black text-black border-b border-black w-max inline-block cursor-pointer hover:text-blue-600">{project.symbol}</td>
                        <td className="py-5 text-gray-500 font-bold pr-4">{project.name}</td>
                        <td className="py-5 text-right font-black">{project.price}</td>
                        <td className={`py-5 text-right font-black ${project.change.includes('+') ? 'text-[#0a9d4f]' : 'text-red-600'}`}>
                          {project.change}
                        </td>
                        <td className={`py-5 text-right font-black ${project.change.includes('+') ? 'text-[#0a9d4f]' : 'text-red-600'}`}>
                          <div className="flex items-center justify-end">
                            {project.percent} {project.change.includes('+') ? <TrendingUp className="w-3 h-3 ml-1" /> : <TrendingDown className="w-3 h-3 ml-1" />}
                          </div>
                        </td>
                        <td className="py-5 text-right text-gray-500 font-bold">{project.volume}</td>
                        <td className="py-5 pl-10 min-w-[160px]">
                          <div className="flex justify-between text-[9px] font-black text-gray-400 mb-1">
                            <span>{project.rangeMin}</span>
                            <span>{project.rangeMax}</span>
                          </div>
                          <div className="h-0.5 bg-gray-200 rounded-full relative">
                            <div 
                              className="absolute h-2 w-2 bg-gray-800 border-2 border-white rounded-full top-1/2 -translate-y-1/2 shadow-sm"
                              style={{ left: `${project.currentPos * 100}%` }}
                            ></div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Economic Calendar Section */}
            <div className="bg-white pt-10 border-t border-gray-200">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-black">Infrastructure calendar</h2>
                <div className="flex gap-2">
                   {['Mon • 12/15', 'Tue • 12/16', 'Wed • 12/17', 'Thu • 12/18'].map(day => (
                     <button key={day} className="border border-gray-300 rounded-full px-5 py-2 text-[10px] font-black uppercase text-gray-600 hover:bg-gray-100">{day}</button>
                   ))}
                   <button className="bg-black text-white rounded-full px-5 py-2 text-[10px] font-black uppercase shadow-lg">Fri • 12/19</button>
                </div>
              </div>
              <div className="border border-gray-100 rounded-sm">
                <table className="w-full text-left text-sm font-medium">
                  <thead className="bg-gray-50 text-gray-400 font-black uppercase text-[10px] border-b border-gray-200">
                    <tr>
                      <th className="p-4 w-32">Time</th>
                      <th className="p-4">Event</th>
                      <th className="p-4">Impact</th>
                      <th className="p-4 text-right">Previous</th>
                      <th className="p-4 text-right">Forecast</th>
                      <th className="p-4 text-right">Actual</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {ECONOMIC_CALENDAR.map((cal, i) => (
                      <tr key={i} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-black">{cal.time} EST</td>
                        <td className="p-4">
                          <div className="font-bold text-gray-900 leading-snug">{cal.event}</div>
                          <div className="text-[10px] text-gray-400 mt-1 uppercase">Metro Policy Update</div>
                        </td>
                        <td className={`p-4 font-black ${cal.impact === 'High' ? 'text-indigo-900' : 'text-gray-300'}`}>
                          {cal.impact}
                        </td>
                        <td className="p-4 text-right text-gray-500 font-bold">-3.3%</td>
                        <td className="p-4 text-right text-gray-300 font-bold">--</td>
                        <td className="p-4 text-right font-black">--</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-[10px] text-gray-400 font-medium">
                Last updated Dec 19 at 1:15:35 AM ET
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-12">
            {/* World Markets Area */}
            <div className="bg-white border border-gray-200 p-6 rounded-md shadow-sm">
               <div className="flex justify-between items-center mb-6">
                 <h2 className="text-xl font-black">Metro zones</h2>
                 <div className="flex gap-2">
                    <Globe className="w-4 h-4 text-gray-400" />
                    <LayoutGrid className="w-4 h-4 text-black" />
                 </div>
               </div>
               
               {/* Simplified Map Representation */}
               <div className="relative aspect-[4/3] bg-gray-50 mb-6 flex items-center justify-center border border-gray-100 rounded overflow-hidden">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
                 <svg viewBox="0 0 200 150" className="w-full h-full p-4">
                    <path d="M40 40 L160 40 L160 110 L40 110 Z" fill="#eee" stroke="#ccc" strokeWidth="1" />
                    <path d="M50 50 L80 50 L80 80 L50 80 Z" fill="#0a9d4f" opacity="0.8" />
                    <path d="M120 60 L150 60 L150 90 L120 90 Z" fill="#0a9d4f" opacity="0.8" />
                    <path d="M90 70 L110 70 L110 100 L90 100 Z" fill="#0a9d4f" opacity="0.6" />
                 </svg>
                 <div className="absolute bottom-4 flex bg-white/90 backdrop-blur-sm rounded-full p-1 text-[9px] font-black shadow-sm">
                    <button className="bg-black text-white px-3 py-1 rounded-full uppercase">East</button>
                    <button className="px-3 py-1 text-gray-500 uppercase">South</button>
                    <button className="px-3 py-1 text-gray-500 uppercase">Center</button>
                 </div>
               </div>

               <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center border-b border-gray-50 pb-2">
                     <span className="font-bold">Thu Thiem Z2</span>
                     <div className="flex gap-4">
                        <span className="font-black">214.86</span>
                        <span className="text-[#0a9d4f] font-black">+0.14%</span>
                     </div>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-50 pb-2">
                     <span className="font-bold">District 9 Hub</span>
                     <div className="flex gap-4">
                        <span className="font-black">55.81</span>
                        <span className="text-red-600 font-black">-0.79%</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Business Briefing */}
            <section>
              <h2 className="text-[10px] font-black border-l-4 border-black pl-3 mb-6 uppercase tracking-[0.2em] text-gray-800">BUSINESS BRIEFING</h2>
              <div className="space-y-10">
                 <div className="group cursor-pointer">
                    <div className="relative mb-4 overflow-hidden rounded-sm">
                      <img 
                        src="https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=600&auto=format&fit=crop" 
                        className="w-full h-56 object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
                    </div>
                    <h3 className="font-black text-xl leading-tight group-hover:text-blue-700 transition-colors">Inflation cooled to 2.7%, but economists say take it with 'the entire salt shaker'</h3>
                 </div>
                 
                 {INTEL_ARTICLES.slice(0, 3).map((article) => (
                   <div key={article.id} className="border-t border-gray-200 pt-6 group cursor-pointer">
                      <div className="flex gap-6">
                        <div className="flex-grow">
                          <h4 className="font-black text-sm leading-snug group-hover:text-blue-700 transition-colors">{article.title}</h4>
                        </div>
                        <div className="w-20 h-14 bg-gray-100 shrink-0 overflow-hidden rounded-sm">
                           <img src={`https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=200&auto=format&fit=crop`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                        </div>
                      </div>
                   </div>
                 ))}
              </div>
            </section>

            {/* Commodities Widget */}
            <div className="bg-[#111] p-8 text-white rounded-md shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Globe className="w-24 h-24" />
               </div>
               <h2 className="text-xl font-black mb-8 border-b border-white/10 pb-4 flex justify-between items-center">
                 Commodities
                 <span className="text-[10px] text-gray-500 font-bold uppercase">Live</span>
               </h2>
               <div className="space-y-6">
                  <div className="flex justify-between items-center">
                     <div>
                       <div className="font-black text-sm">GOLD (BT)</div>
                       <div className="text-[9px] font-bold text-gray-500">Ga Bến Thành Spot</div>
                     </div>
                     <div className="text-right">
                       <div className="font-black text-lg">4,355.00</div>
                       <div className="text-red-500 font-bold text-xs">-9.50 (0.22%)</div>
                     </div>
                  </div>
                  <div className="flex justify-between items-center">
                     <div>
                       <div className="font-black text-sm">STEEL INDEX</div>
                       <div className="text-[9px] font-bold text-gray-500">HCMC Construction</div>
                     </div>
                     <div className="text-right">
                       <div className="font-black text-lg">65.94</div>
                       <div className="text-[#0a9d4f] font-bold text-xs">+0.73 (1.11%)</div>
                     </div>
                  </div>
               </div>
               <div className="mt-8 text-[9px] text-gray-600 font-bold uppercase tracking-widest text-center">
                 Powered by BDSMETRO Intelligence
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="bg-gray-50 border-t border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 text-[10px] font-bold text-gray-400 leading-relaxed uppercase tracking-tighter">
           Copyright © 2024 BDSMETRO. Market Data is delayed at least 15 minutes. Global Business and Financial News, Stock Quotes, and Market Data and Analysis.
        </div>
      </div>
    </div>
  );
};

export default MetroIndexPage;