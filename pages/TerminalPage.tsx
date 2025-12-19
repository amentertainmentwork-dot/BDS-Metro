import React, { useState, useEffect, useRef } from 'react';
import { Activity, Terminal, ShieldAlert, Wifi, Loader2 } from 'lucide-react';
import { terminalCommand } from '../services/geminiService.ts';

const TerminalPage: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const messages = [
      "INITIALIZING AXE SECURE CONNECTION...",
      "AUTHENTICATING BITEXCO HQ HUB...",
      "SCANNING METRO LINE 1 STATIONS...",
      "DETECTING ABNORMAL TRADING VOLUME AT GA BA SON...",
      "SHARK SIGNAL: INSIDER LIQUIDATION AT DISTRICT 9 DETECTED.",
      "RUNNING MONTE CARLO SIMULATION ON LAND PRICES...",
      "WARNING: COMPETITOR PROJECT X HAS NOISE ON LEGAL DOCUMENTS.",
      "MARKET SENTIMENT: 78% BULLISH ON CAN GIO LANDS.",
      "UPDATING METRO INDEX SCORES...",
      "DATA ENCRYPTED. READY FOR COMMAND."
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < messages.length) {
        addLog(messages[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const addLog = (msg: string) => {
    setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  const handleCommand = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      const cmd = inputValue.toUpperCase();
      addLog(`> EXECUTING: ${cmd}`);
      setInputValue('');
      setIsProcessing(true);

      const response = await terminalCommand(cmd);
      addLog(`[INTEL] ${response}`);
      setIsProcessing(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-black font-mono text-emerald-500 p-4 md:p-8">
      <div className="max-w-7xl mx-auto border border-emerald-900/50 shadow-[0_0_30px_rgba(16,185,129,0.1)] p-6 bg-navy-900/20">
        <div className="flex items-center justify-between mb-8 border-b border-emerald-900 pb-4">
          <div className="flex items-center gap-4">
            <Terminal className="w-8 h-8 animate-pulse" />
            <h1 className="text-2xl font-bold tracking-tighter">BDSMETRO TERMINAL v4.2.0</h1>
          </div>
          <div className="flex items-center gap-6 text-xs">
            <div className="flex items-center gap-2">
              <Wifi className="w-4 h-4" /> <span>SECURE GATEWAY</span>
            </div>
            <div className="flex items-center gap-2 text-red-500">
              <ShieldAlert className="w-4 h-4" /> <span>LIVE MONITORING</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 h-[600px] overflow-y-auto bg-black p-4 border border-emerald-900/30 custom-scrollbar relative">
            {logs.map((log, idx) => (
              <div key={idx} className="mb-2 animate-in fade-in slide-in-from-left-2 duration-300">
                <span className="text-emerald-900">{log.split(']')[0]}]</span>
                <span className="ml-2">{log.split(']')[1]}</span>
              </div>
            ))}
            <div ref={logEndRef} />
            
            <div className="mt-4 flex gap-2 items-center sticky bottom-0 bg-black py-2">
              {isProcessing ? <Loader2 className="w-4 h-4 animate-spin" /> : <span className="animate-pulse">_</span>}
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isProcessing}
                className="bg-transparent border-none outline-none flex-grow text-emerald-400 placeholder-emerald-900"
                placeholder={isProcessing ? "Processing..." : "Enter command (e.g., ANALYZE DISTRICT 9)..."}
                onKeyDown={handleCommand}
              />
            </div>
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-8">
            <div className="bg-emerald-900/10 border border-emerald-900/30 p-6">
              <h3 className="text-xs font-bold text-emerald-700 uppercase mb-4">Market Pulsar</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-xs">METRO INDEX</span>
                  <span className="text-xl font-bold">142.8 <span className="text-[10px] text-emerald-500">▲ 1.2%</span></span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-xs">LIQUIDITY HUB</span>
                  <span className="text-xl font-bold">HIGH</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-xs">SENTIMENT</span>
                  <span className="text-xl font-bold">GREEDY</span>
                </div>
              </div>
            </div>

            <div className="bg-emerald-900/10 border border-emerald-900/30 p-6">
              <h3 className="text-xs font-bold text-emerald-700 uppercase mb-4">Active Surveillance</h3>
              <div className="space-y-2">
                <div className="text-[10px] flex justify-between">
                  <span>GA BẾN THÀNH</span>
                  <span className="text-emerald-400">98.2% ACCURACY</span>
                </div>
                <div className="w-full bg-emerald-900/20 h-1">
                  <div className="h-full bg-emerald-500 w-[98%]"></div>
                </div>
                <div className="text-[10px] flex justify-between mt-4">
                  <span>GA SUỐI TIÊN</span>
                  <span className="text-emerald-400">72.5% ACCURACY</span>
                </div>
                <div className="w-full bg-emerald-900/20 h-1">
                  <div className="h-full bg-emerald-500 w-[72%]"></div>
                </div>
              </div>
            </div>

            <div className="p-4 border border-dashed border-emerald-900/50 text-[10px] text-emerald-800 leading-relaxed italic">
              "Proprietary data isn't just a resource. It's an unfair advantage. And I like being unfair." — AXE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalPage;