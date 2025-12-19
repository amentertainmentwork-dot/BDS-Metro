import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cnn-black text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-3xl font-black tracking-tighter block mb-6">
              BDS<span className="text-cnn-red">METRO</span>
            </Link>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
              The Real Estate Authority
            </p>
          </div>
          
          <div>
            <h4 className="font-black text-xs uppercase mb-6 tracking-widest border-b border-gray-800 pb-2">Markets</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-bold">
              <li><Link to="/metro-index" className="hover:text-white transition-colors">Metro Index</Link></li>
              <li><Link to="/market-data" className="hover:text-white transition-colors">Heatmap</Link></li>
              <li><Link to="/shark-monitor" className="hover:text-white transition-colors">Shark Activity</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase mb-6 tracking-widest border-b border-gray-800 pb-2">Analysis</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-bold">
              <li><Link to="/case-files" className="hover:text-white transition-colors">Forensic Files</Link></li>
              <li><Link to="/intelligence" className="hover:text-white transition-colors">Intelligence</Link></li>
              <li><Link to="/vault" className="hover:text-white transition-colors">The Vault</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase mb-6 tracking-widest border-b border-gray-800 pb-2">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-bold">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Settings</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] text-gray-600 font-black uppercase tracking-widest">
            © 2024 BDSMETRO. Market Data is delayed at least 15 minutes.
          </div>
          <div className="flex gap-6 text-gray-500 font-bold text-xs uppercase">
            <a href="#" className="hover:text-white">FB</a>
            <a href="#" className="hover:text-white">TW</a>
            <a href="#" className="hover:text-white">YT</a>
            <a href="#" className="hover:text-white">LI</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;