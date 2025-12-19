import React, { useState } from 'react';
import { INTEL_ARTICLES } from '../constants.ts';
import { ArrowRight } from 'lucide-react';
import ReportModal from './ReportModal.tsx';
import { IntelArticle } from '../types.ts';

const IntelBriefing: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<IntelArticle | null>(null);

  return (
    <>
      <section className="py-24 bg-navy-900 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12 border-b border-slate-700 pb-4">
            <div>
              <h2 className="text-3xl font-serif text-white">INTELLIGENCE BRIEFING</h2>
              <p className="font-mono text-slate-500 text-sm mt-2">BẢN TIN TÌNH BÁO THỊ TRƯỜNG</p>
            </div>
            <button className="text-bronze-500 font-mono text-sm hover:text-white transition-colors">
              ARCHIVE VIEW ->
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {INTEL_ARTICLES.map((article) => (
              <article 
                key={article.id} 
                className="flex flex-col group cursor-pointer"
                onClick={() => setSelectedArticle(article)}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <span className="font-mono text-xs text-bronze-500 border border-bronze-500 px-2 py-0.5">
                    {article.category}
                  </span>
                  <span className="font-mono text-xs text-slate-500">{article.date}</span>
                </div>
                <h3 className="text-2xl font-serif text-white font-bold mb-4 group-hover:text-bronze-400 transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-slate-400 font-sans text-sm leading-relaxed mb-6 border-l border-slate-700 pl-4">
                  {article.summary}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-800 flex items-center text-slate-300 group-hover:text-white transition-colors text-sm font-mono font-bold uppercase">
                  Read Full Briefing <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ReportModal 
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
        title={selectedArticle?.title || ''}
        content={selectedArticle?.content}
        type="INTEL"
      />
    </>
  );
};

export default IntelBriefing;