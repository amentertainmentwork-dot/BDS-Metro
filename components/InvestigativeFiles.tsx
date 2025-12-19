import React, { useState } from 'react';
import { CASE_STUDIES } from '../constants.ts';
import { FileText, Lock, AlertOctagon, CheckCircle, Clock, Target, Filter } from 'lucide-react';
import ReportModal from './ReportModal.tsx';
import { ProjectCaseStudy } from '../types.ts';

const InvestigativeFiles: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<ProjectCaseStudy | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const filters = [
    { id: 'ALL', label: 'All Cases' },
    { id: 'DISTRESSED', label: 'Distressed Asset' },
    { id: 'HIGH YIELD', label: 'High Yield' },
    { id: 'SPECULATION', label: 'Speculation' }
  ];

  const filteredStudies = activeFilter === 'ALL' 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(study => study.tags.includes(activeFilter));

  const handleOpenStudy = (study: ProjectCaseStudy) => {
    if (study.status === 'locked') {
      alert("Yêu cầu quyền truy cập cấp cao (AXE GOLD) để mở hồ sơ này.");
      return;
    }
    setSelectedStudy(study);
  };

  const renderVerdictIcon = (verdict: string | undefined) => {
    switch(verdict) {
      case 'RUN': return <AlertOctagon className="w-4 h-4 mr-1" />;
      case 'BUY': return <CheckCircle className="w-4 h-4 mr-1" />;
      case 'WAIT': return <Clock className="w-4 h-4 mr-1" />;
      default: return null;
    }
  };

  const getVerdictColor = (verdict: string | undefined) => {
    switch(verdict) {
      case 'RUN': return 'bg-red-900 text-red-100 border-red-500';
      case 'BUY': return 'bg-emerald-900 text-emerald-100 border-emerald-500';
      case 'WAIT': return 'bg-yellow-900 text-yellow-100 border-yellow-500';
      default: return 'bg-slate-800 text-slate-300 border-slate-600';
    }
  };

  return (
    <>
      <section className="py-12 bg-white px-4 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-12 border-b border-gray-100 pb-8">
            <h2 className="text-sm font-black text-cnn-red uppercase tracking-[0.3em] mb-2 flex items-center gap-2">
              <Target className="w-4 h-4" /> Targeted Analysis
            </h2>
            <h1 className="text-4xl md:text-5xl font-black text-cnn-black tracking-tighter">Sector Forensics</h1>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-4 mb-12 border-b border-gray-100 pb-6">
            <div className="flex items-center gap-2 text-xs font-black uppercase text-gray-400 mr-4">
              <Filter className="w-3 h-3" /> Filter By:
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all rounded-sm border ${
                    activeFilter === filter.id 
                    ? 'bg-cnn-black text-white border-cnn-black' 
                    : 'bg-white text-gray-500 border-gray-200 hover:border-cnn-red hover:text-cnn-red'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredStudies.map((study) => (
              <div 
                key={study.id} 
                onClick={() => handleOpenStudy(study)}
                className="group relative flex flex-col cursor-pointer border-b border-gray-100 pb-8 last:border-0 lg:border-0"
              >
                {/* Image Section */}
                <div className="relative aspect-video mb-6 overflow-hidden bg-gray-100">
                  <div className="absolute top-0 right-0 bg-cnn-black text-white font-black text-[9px] px-3 py-1 z-10 uppercase tracking-tighter">
                    ID: {study.id}
                  </div>
                  <img 
                    src={study.imageUrl} 
                    alt={study.codeName} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {study.status === 'locked' && (
                    <div className="absolute inset-0 bg-white/80 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="text-center">
                        <Lock className="text-cnn-black w-10 h-10 mx-auto mb-2" />
                        <span className="text-[10px] font-black text-cnn-black uppercase tracking-widest">Vault Protected</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Verdict Badge */}
                  {study.verdict && (
                    <div className={`absolute bottom-0 left-0 px-3 py-1 font-black text-[10px] uppercase shadow-lg ${getVerdictColor(study.verdict)}`}>
                      VERDICT: {study.verdict}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {study.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-black px-2 py-0.5 border border-gray-200 text-gray-400 uppercase tracking-wider group-hover:border-cnn-red group-hover:text-cnn-red transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-black text-cnn-black mb-3 group-hover:underline leading-tight">
                    {study.codeName}
                  </h3>
                  <p className="font-serif text-gray-600 text-lg mb-6 flex-grow leading-relaxed italic">
                    "{study.headline}"
                  </p>

                  <div className="grid grid-cols-2 gap-4 border-t border-gray-50 pt-4 mt-auto">
                    <div>
                      <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Audit Zone</span>
                      <span className="font-bold text-cnn-black text-xs">{study.priceZone}</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Est. Impact</span>
                      <span className={`font-black text-sm ${study.roiProjected.includes('-') || study.roiProjected.includes('RISK') ? 'text-cnn-red' : 'text-emerald-600'}`}>
                        {study.roiProjected}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredStudies.length === 0 && (
            <div className="py-24 text-center">
              <div className="text-gray-300 font-black uppercase text-xl">No Intelligence Matches This Filter</div>
            </div>
          )}
        </div>
      </section>

      {/* Report Modal */}
      <ReportModal 
        isOpen={!!selectedStudy}
        onClose={() => setSelectedStudy(null)}
        title={selectedStudy?.codeName || ''}
        subtitle={selectedStudy?.headline}
        content={selectedStudy?.content}
        type="CASE_STUDY"
      />
    </>
  );
};

export default InvestigativeFiles;