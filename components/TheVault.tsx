import React from 'react';
import { ShieldCheck, Lock, Award, Crown } from 'lucide-react';

const TheVault: React.FC = () => {
  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden flex-grow">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-blueprint opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-transparent to-black"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-bronze-600/50 bg-navy-900/80 px-4 py-2 mb-8 rounded-full backdrop-blur-sm">
             <Lock className="w-3 h-3 text-bronze-500" />
             <div className="text-bronze-500 font-mono font-bold text-xs tracking-widest uppercase">
               Khu Vực Hạn Chế / Restricted Access
             </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-6 font-bold tracking-tighter">THE AXE VAULT</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-serif italic mb-4">
            "Trong đầu tư, sự khác biệt giữa giàu và cực giàu nằm ở chỗ ai được xem danh sách này trước."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Public Tiers Information */}
          <div className="space-y-6 order-2 md:order-1">
             <div className="bg-navy-800/50 border border-slate-700 p-8 hover:border-bronze-500/50 transition-all group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-slate-900 rounded border border-slate-700 group-hover:text-bronze-500">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="font-mono text-xl font-bold text-white uppercase tracking-wider">SILVER ACCESS</h3>
                </div>
                <ul className="space-y-2 text-slate-400 font-sans text-sm list-disc ml-4">
                  <li>Báo cáo Forensic dự án đại trà.</li>
                  <li>Dữ liệu Metro Index (delay 15p).</li>
                  <li>Cảnh báo thị trường cơ bản.</li>
                </ul>
                <div className="mt-4 text-bronze-500 font-mono font-bold">FREE REGISTRATION</div>
             </div>

             <div className="bg-bronze-900/10 border border-bronze-500/50 p-8 hover:bg-bronze-900/20 transition-all group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-bronze-900/30 rounded border border-bronze-500 group-hover:scale-110 transition-transform">
                    <Crown className="w-6 h-6 text-bronze-500" />
                  </div>
                  <h3 className="font-mono text-xl font-bold text-bronze-500 uppercase tracking-wider">GOLD ELITE (VIP)</h3>
                </div>
                <ul className="space-y-2 text-slate-300 font-sans text-sm list-disc ml-4">
                  <li className="font-bold">Danh sách hàng "NGỘP" cắt lỗ &gt;30%.</li>
                  <li>Suất ngoại giao Cần Giờ (Độc quyền).</li>
                  <li>Shark Monitor Real-time signals.</li>
                  <li>Hỗ trợ đàm phán trực tiếp bởi Axe Team.</li>
                </ul>
                <div className="mt-4 text-white font-mono font-bold bg-bronze-600 px-4 py-1 w-max">INVITATION ONLY</div>
             </div>
          </div>

          {/* Secure Entry Form */}
          <div className="bg-navy-800 border-2 border-slate-600 p-8 md:p-12 shadow-[0_0_80px_rgba(0,0,0,0.8)] relative order-1 md:order-2">
            <div className="absolute -top-4 -right-4 bg-red-600 text-white font-mono text-[10px] px-3 py-1 font-bold shadow-lg">
              ENCRYPTED 256-BIT
            </div>
            <div className="flex justify-center mb-8">
               <ShieldCheck className="text-bronze-500 w-16 h-16" />
            </div>
            <form className="space-y-8">
              <div className="text-left group">
                <label className="block font-mono text-slate-500 text-[10px] mb-2 uppercase group-focus-within:text-bronze-500 transition-colors">
                  Digital Identity (Phone/Zalo)
                </label>
                <input 
                  type="tel" 
                  placeholder="XÁC MINH DANH TÍNH..." 
                  className="w-full bg-black border-b-2 border-slate-700 text-white font-mono text-xl px-4 py-4 focus:outline-none focus:border-bronze-500 placeholder-slate-800 transition-all uppercase"
                />
              </div>
              
              <button 
                type="button" 
                className="w-full bg-bronze-600 hover:bg-white text-navy-900 font-mono font-bold py-5 text-xl uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)]"
              >
                UNBLOCK THE DATA
              </button>
              
              <div className="text-center space-y-4 pt-4">
                 <p className="text-[10px] text-slate-600 font-mono leading-relaxed">
                   Bằng việc nhấn nút, bạn đồng ý với các điều khoản bảo mật nghiêm ngặt của BDSMETRO INTELLIGENCE UNIT.
                 </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheVault;