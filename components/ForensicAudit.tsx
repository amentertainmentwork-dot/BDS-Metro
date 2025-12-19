import React from 'react';
import { Search, ShieldCheck, Calculator, ArrowRight } from 'lucide-react';

const ForensicAudit: React.FC = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Planning Forensic",
      desc: "Phân tích quy hoạch 1/500 và 1/2000 để xác định rủi ro giải tỏa hoặc treo hạ tầng."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Legal Autopsy",
      desc: "Kiểm tra 'sức khỏe' pháp lý: HĐMB, năng lực tài chính thực sự của CĐT sau báo cáo thuế."
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Cashflow Stress Test",
      desc: "Chạy mô hình kịch bản lãi suất thả nổi 15% để tìm điểm gãy của dòng tiền đầu tư."
    }
  ];

  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
             <h2 className="text-[10px] font-black text-cnn-red uppercase tracking-[0.3em] mb-4">Our Methodology</h2>
             <h3 className="text-5xl font-black tracking-tighter text-cnn-black leading-none">The Forensic Audit</h3>
          </div>
          <p className="text-gray-500 font-serif italic text-xl lg:max-w-sm text-right leading-relaxed">
            "Chúng tôi không nghe chủ đầu tư kể chuyện. Chúng tôi giải phẫu các con số."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-gray-100">
          {steps.map((step, index) => (
            <div key={index} className="p-10 border-r border-b border-gray-100 hover:bg-gray-50 transition-all group">
              <div className="text-cnn-red mb-8 group-hover:scale-110 transition-transform origin-left">
                {step.icon}
              </div>
              <h4 className="text-xl font-black mb-4 uppercase tracking-tight">{step.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                {step.desc}
              </p>
              <div className="flex items-center text-[10px] font-black text-cnn-red uppercase gap-1 cursor-pointer hover:underline">
                View Audit Sample <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForensicAudit;