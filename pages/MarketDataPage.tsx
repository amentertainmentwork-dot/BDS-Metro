import React from 'react';
import MarketHeatmap from '../components/MarketHeatmap.tsx';
import ForensicAudit from '../components/ForensicAudit.tsx';

const MarketDataPage: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="px-4 py-12 border-b border-gray-100 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-cnn-red font-black text-[10px] uppercase tracking-widest mb-4">
            <span className="w-2 h-2 bg-cnn-red rounded-full animate-ping"></span>
            Live Intelligence Data
          </div>
          <h1 className="text-5xl font-black text-cnn-black mb-4 tracking-tighter">Real Estate Heatmap</h1>
          <p className="max-w-2xl text-gray-600 font-medium text-lg leading-relaxed">
            Phân tích dòng tiền và rủi ro các khu vực Metro theo thời gian thực. Dữ liệu được tổng hợp từ hơn 40 trạm quan trắc giá tại TP.HCM.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto py-12">
        <MarketHeatmap />
      </div>

      <div className="border-t border-gray-200">
        <ForensicAudit />
      </div>
    </div>
  );
};

export default MarketDataPage;