import React from 'react';
import { SHARK_SIGNALS } from '../constants.ts';
import { Activity, Radio, Eye, Crosshair, ChevronRight } from 'lucide-react';

const SharkMonitorPage: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="px-4 py-12 border-b border-gray-100 bg-[#f9f9f9] mb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <div className="flex items-center gap-2 text-cnn-red font-black text-[10px] uppercase tracking-widest mb-4">
              <span className="w-2 h-2 bg-cnn-red rounded-full animate-ping"></span>
              Live Surveillance
            </div>
            <h1 className="text-5xl font-black text-cnn-black mb-4 tracking-tighter">Shark Monitor</h1>
            <p className="max-w-2xl text-gray-600 font-medium text-lg">
              Theo dõi hành vi của các "Whales" và dòng tiền thông minh trên thị trường BDS. Đừng bơi ngược dòng khi cá mập đang săn mồi.
            </p>
          </div>
          <div className="bg-cnn-black text-white p-6 rounded-sm w-full md:w-auto">
             <div className="text-[10px] font-black uppercase text-gray-500 mb-2">System Status</div>
             <div className="flex items-center gap-4">
                <div className="text-3xl font-black">ACTIVE</div>
                <Radio className="text-cnn-red animate-pulse w-8 h-8" />
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Signal Feed */}
        <div className="lg:col-span-2">
           <h2 className="text-sm font-black uppercase tracking-widest border-b-2 border-cnn-black pb-4 mb-8">Intelligence Feed</h2>
           <div className="space-y-4">
             {SHARK_SIGNALS.map((signal) => (
               <div key={signal.id} className="group border-b border-gray-100 py-8 first:pt-0 flex gap-8">
                  <div className="shrink-0 flex flex-col items-center">
                    <div className="w-14 h-14 bg-gray-50 border border-gray-200 flex items-center justify-center rounded-sm group-hover:bg-cnn-black group-hover:text-white transition-colors">
                      <Crosshair className="w-6 h-6" />
                    </div>
                    <span className="font-black text-[10px] text-gray-400 mt-3">{signal.time}</span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-black text-cnn-red uppercase tracking-wider">[{signal.type}]</span>
                      <h3 className="text-xl font-black uppercase tracking-tight group-hover:text-blue-700 transition-colors">{signal.target}</h3>
                    </div>
                    <p className="text-gray-600 font-serif text-lg leading-relaxed mb-4">
                      {signal.msg}
                    </p>
                    <div className="flex items-center gap-6">
                       <span className="text-[10px] font-black text-gray-400 uppercase">Confidence: 94%</span>
                       <button className="text-[10px] font-black text-cnn-black uppercase flex items-center gap-1 hover:text-cnn-red">View Map <ChevronRight className="w-3 h-3"/></button>
                    </div>
                  </div>
               </div>
             ))}
           </div>
        </div>

        {/* Sidebar Metrics */}
        <div className="space-y-12">
           <section className="bg-gray-50 p-8 border border-gray-100">
              <h3 className="font-black text-sm uppercase tracking-widest mb-6">Trending Sectors</h3>
              <div className="space-y-6">
                 {[
                   { name: "Thu Thiem Z1", status: "Surging", color: "text-emerald-600" },
                   { name: "Can Gio Hub", status: "Accumulating", color: "text-blue-600" },
                   { name: "District 9", status: "Liquidation", color: "text-red-600" },
                   { name: "Nha Be South", status: "Stable", color: "text-gray-500" }
                 ].map((sector, i) => (
                   <div key={i} className="flex justify-between items-center border-b border-gray-200 pb-3 last:border-0">
                      <span className="font-bold text-sm">{sector.name}</span>
                      <span className={`text-[10px] font-black uppercase ${sector.color}`}>{sector.status}</span>
                   </div>
                 ))}
              </div>
           </section>

           <section className="bg-cnn-red p-8 text-white relative overflow-hidden group cursor-pointer">
              <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <Eye className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-black mb-4 leading-tight">Elite Shark Alerts</h3>
              <p className="text-sm font-medium mb-6 text-white/80">Nhận thông báo biến động tài sản của các tập đoàn lớn qua SMS/Telegram.</p>
              <button className="bg-white text-cnn-red px-6 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-cnn-black hover:text-white transition-colors">
                Enable Alerts
              </button>
           </section>
        </div>
      </div>
    </div>
  );
};

export default SharkMonitorPage;