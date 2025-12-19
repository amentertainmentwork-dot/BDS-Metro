import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import MarketDataPage from './pages/MarketDataPage.tsx';
import CaseFilesPage from './pages/CaseFilesPage.tsx';
import IntelligencePage from './pages/IntelligencePage.tsx';
import VaultPage from './pages/VaultPage.tsx';
import MetroIndexPage from './pages/MetroIndexPage.tsx';
import SharkMonitorPage from './pages/SharkMonitorPage.tsx';
import TerminalPage from './pages/TerminalPage.tsx';
import LeadHuntPage from './pages/LeadHuntPage.tsx';
import Footer from './components/Footer.tsx';
import { Search, Menu, User, Crosshair } from 'lucide-react';
import { METRO_INDEX_SUMMARY } from './constants.ts';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const MarketTicker: React.FC = () => (
  <div className="bg-black text-white h-10 flex items-center border-b border-gray-800 text-[11px] font-bold uppercase tracking-tighter">
    <div className="px-4 bg-cnn-red h-full flex items-center shrink-0">MARKETS</div>
    <div className="ticker-bar flex-grow relative overflow-hidden">
      <div className="ticker-content flex items-center space-x-12 px-6">
        {[...METRO_INDEX_SUMMARY, ...METRO_INDEX_SUMMARY].map((index, i) => (
          <div key={i} className="flex items-center gap-2">
            <span>{index.name}:</span>
            <span className="text-white">{index.value}</span>
            <span className={index.change.includes('+') ? 'text-emerald-400' : 'text-red-500'}>
              {index.change} ({index.percent})
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-cnn-black font-sans flex flex-col">
        {/* CNN Style Header */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
          <MarketTicker />
          <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link to="/" className="text-3xl font-black tracking-tighter flex items-center">
                BDS<span className="text-cnn-red">METRO</span>
              </Link>
              <div className="hidden lg:flex items-center space-x-6 text-sm font-bold uppercase">
                <Link to="/metro-index" className="hover:text-cnn-red transition-colors">Markets</Link>
                <Link to="/case-files" className="hover:text-cnn-red transition-colors">Forensic</Link>
                <Link to="/lead-hunt" className="text-cnn-red flex items-center gap-1"><Crosshair className="w-3 h-3" /> Targets</Link>
                <Link to="/shark-monitor" className="hover:text-cnn-red transition-colors">Sharks</Link>
                <Link to="/market-data" className="hover:text-cnn-red transition-colors">Heatmap</Link>
                <Link to="/intelligence" className="hover:text-cnn-red transition-colors">Intel</Link>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Link to="/vault" className="hidden md:flex items-center gap-2 bg-black text-white px-4 py-2 text-xs font-black uppercase hover:bg-cnn-red transition-colors">
                <User className="w-4 h-4" />
                The Vault
              </Link>
              <button className="p-2"><Search className="w-5 h-5" /></button>
              <button className="p-2 lg:hidden"><Menu className="w-6 h-6" /></button>
            </div>
          </nav>
        </header>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/terminal" element={<TerminalPage />} />
            <Route path="/metro-index" element={<MetroIndexPage />} />
            <Route path="/market-data" element={<MarketDataPage />} />
            <Route path="/shark-monitor" element={<SharkMonitorPage />} />
            <Route path="/case-files" element={<CaseFilesPage />} />
            <Route path="/intelligence" element={<IntelligencePage />} />
            <Route path="/lead-hunt" element={<LeadHuntPage />} />
            <Route path="/vault" element={<VaultPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;