import React from 'react';
import InvestigativeFiles from '../components/InvestigativeFiles.tsx';

const CaseFilesPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="px-4 py-8 bg-black/20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-serif text-white mb-2">CLASSIFIED CASE FILES</h1>
          <p className="font-mono text-bronze-500 text-sm">HỒ SƠ ĐIỀU TRA DỰ ÁN TRỌNG ĐIỂM</p>
        </div>
      </div>
      <InvestigativeFiles />
    </div>
  );
};

export default CaseFilesPage;