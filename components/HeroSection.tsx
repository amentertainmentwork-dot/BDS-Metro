import React from 'react';
import { TICKER_ITEMS } from '../constants.ts';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col border-b-4 border-bronze-500 bg-navy-900 overflow-hidden">
      {/* Background Map Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy-900/90 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1554659422-0d65012d93e2?q=80&w=1920&auto=format&fit=crop" 
          alt="Sa bàn quy hoạch" 
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity scale-110"
        />
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy-dark.png')] opacity-30 z-10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex-grow flex flex-col justify-center items-center text-center px-4">
        <div className="p-12 bg-navy-900/60 backdrop-blur-xl border border-bronze-500/20 max-w-5xl w-full shadow-[0_0_100px_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-12 bg-bronze-500 opacity-50"></span>
            <h2 className="text-bronze-400 font-mono tracking-[0.4em] text-xs uppercase animate-pulse">
              Information Command Center / Axe Hub
            </h2>
            <span className="h-[1px] w-12 bg-bronze-500 opacity-50"></span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif text-white font-bold mb-8 leading-tight tracking-tighter">
            ĐỊNH NGHĨA LẠI <br/> <span className="text-bronze-500 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">THỰC TẠI THỊ TRƯỜNG</span>
          </h1>
          
          <p className="font-sans text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto mb-10 border-l-4 border-bronze-500 pl-6 text-left italic leading-relaxed">
            "Trong cuộc chơi BDS Metro, thông tin không chỉ là tiền bạc. <br/>Nó là vũ khí để bóp nghẹt đối thủ và dẫn dắt đám đông."
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/terminal" className="bg-bronze-600 text-navy-900 font-mono font-bold px-10 py-5 text-xl hover:bg-white transition-all shadow-xl uppercase tracking-widest flex items-center gap-3">
              Mở Terminal <span className="text-xs opacity-50">v4.0</span>
            </Link>
            <Link to="/case-files" className="bg-transparent text-white font-mono font-bold px-10 py-5 text-xl hover:bg-navy-800 transition-all border-2 border-slate-700 hover:border-bronze-500 uppercase tracking-widest">
              Hồ Sơ Điều Tra
            </Link>
          </div>
        </div>
      </div>

      {/* Ticker Tape */}
      <div className="relative z-30 h-14 bg-black border-t-2 border-bronze-600 flex items-center">
        <div className="bg-red-700 h-full px-6 flex items-center justify-center font-mono font-bold text-white shrink-0 z-40 shadow-[10px_0_15px_rgba(0,0,0,0.5)]">
          <div className="w-2 h-2 rounded-full bg-white animate-ping mr-3"></div>
          LIVE INTELLIGENCE
        </div>
        <div className="ticker-wrap flex-grow">
          <div className="ticker-move">
            {TICKER_ITEMS.map((item) => (
              <div key={item.id} className="ticker-item">
                <span className="text-slate-700 font-bold mr-2">>>></span> {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;