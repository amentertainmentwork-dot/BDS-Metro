import React from 'react';
import IntelBriefing from '../components/IntelBriefing.tsx';

const IntelligencePage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="px-4 py-8 bg-black/20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-serif text-white mb-2">INTELLIGENCE BRIEFINGS</h1>
          <p className="font-mono text-bronze-500 text-sm">PHÂN TÍCH CHIẾN LƯỢC & VĨ MÔ</p>
        </div>
      </div>
      <IntelBriefing />
    </div>
  );
};

export default IntelligencePage;