import React from 'react';
import { CASE_STUDIES, INTEL_ARTICLES } from '../constants.ts';
import { ChevronRight, TrendingUp, AlertCircle, Play, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import MastermindBriefing from '../components/MastermindBriefing.tsx';

const HomePage: React.FC = () => {
  const mainStory = CASE_STUDIES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero News Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Main Headline */}
        <div className="lg:col-span-2 group cursor-pointer border-r border-gray-100 pr-0 lg:pr-8">
          <Link to="/case-files">
            <div className="relative aspect-video mb-6 overflow-hidden">
              <img 
                src={mainStory.imageUrl} 
                alt={mainStory.codeName} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-cnn-red text-white text-[10px] font-black px-2 py-1 uppercase tracking-widest">
                Forensic Report
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4 group-hover:underline">
              {mainStory.headline}
            </h1>
            <p className="text-gray-600 text-lg mb-4 font-serif leading-relaxed">
              Trung tâm tình báo BDSMETRO vừa công bố hồ sơ chấn động về dự án {mainStory.codeName}. Tại sao {mainStory.priceZone} đang trở thành lò mổ tài chính cho các nhà đầu tư F0?
            </p>
            <div className="flex items-center text-xs font-black uppercase text-cnn-red gap-1">
              Read the full audit <ChevronRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-12">
          {/* AI Audio Briefing Upgrade */}
          <MastermindBriefing />

          {/* Fear & Greed Index */}
          <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
             <div className="flex justify-between items-center mb-6">
                <h3 className="font-black text-sm uppercase tracking-wider">Reflexivity Gauge</h3>
                <Activity className="w-4 h-4 text-cnn-red" />
             </div>
             <div className="flex flex-col items-center text-center">
                <div className="relative w-40 h-20 overflow-hidden mb-4">
                  <div className="absolute top-0 left-0 w-40 h-40 border-[16px] border-gray-200 rounded-full"></div>
                  <div className="absolute top-0 left-0 w-40 h-40 border-[16px] border-transparent border-l-red-600 border-t-red-600 rounded-full rotate-[45deg]"></div>
                  <div className="absolute bottom-0 left-1/2 w-0.5 h-16 bg-black origin-bottom -translate-x-1/2 rotate-[55deg]"></div>
                </div>
                <div className="text-3xl font-black text-cnn-red">EXTREME GREED</div>
                <p className="text-[10px] text-gray-500 mt-2 font-bold uppercase">Time to exit: Confirming Shark Signals</p>
             </div>
          </div>

          {/* Quick News Feed */}
          <section>
            <h3 className="text-xs font-black border-l-4 border-cnn-red pl-3 mb-6 uppercase tracking-widest">Business Briefing</h3>
            <div className="space-y-6">
              {INTEL_ARTICLES.map((article) => (
                <div key={article.id} className="group cursor-pointer">
                  <div className="text-[10px] font-black text-cnn-red mb-1 uppercase tracking-wider">{article.category}</div>
                  <h4 className="font-bold text-sm leading-snug group-hover:underline">
                    {article.title}
                  </h4>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Featured Grid Section */}
      <div className="border-t border-gray-200 pt-12 pb-24">
        <h2 className="text-2xl font-black mb-10 flex items-center gap-4">
          Market Intelligence <span className="h-px bg-gray-200 flex-grow"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CASE_STUDIES.slice(1).map((study) => (
            <div key={study.id} className="group cursor-pointer">
              <div className="aspect-[4/3] mb-4 overflow-hidden relative">
                <img src={study.imageUrl} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 bg-black text-white px-2 py-1 text-[9px] font-black uppercase">
                  Verdict: {study.verdict}
                </div>
              </div>
              <h4 className="font-bold text-lg mb-2 leading-tight group-hover:underline">{study.codeName}</h4>
              <p className="text-gray-500 text-xs line-clamp-2">{study.headline}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;