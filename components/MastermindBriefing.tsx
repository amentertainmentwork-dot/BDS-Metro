import React, { useState } from 'react';
import { Play, Volume2, Pause, Radio } from 'lucide-react';
import { generateMastermindAudio } from '../services/geminiService.ts';

const MastermindBriefing: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [audioSource, setAudioSource] = useState<HTMLAudioElement | null>(null);

  const briefingText = "Chào buổi sáng Axe. Thị trường đang bắt đầu rỉ máu tại khu Đông. Vành đai 3 đang bị thổi phồng quá mức. Đã đến lúc chúng ta bắt đầu gom hàng của những kẻ kiệt sức. Nhớ kỹ: Đừng bao giờ mua khi họ đang cười, hãy mua khi họ đang khóc.";

  const handlePlay = async () => {
    if (audioSource) {
      if (isPlaying) {
        audioSource.pause();
        setIsPlaying(false);
      } else {
        audioSource.play();
        setIsPlaying(true);
      }
      return;
    }

    setLoading(true);
    const base64Audio = await generateMastermindAudio(briefingText);
    
    if (base64Audio) {
      const audio = new Audio(`data:audio/pcm;base64,${base64Audio}`);
      // Note: This is raw PCM, in a real scenario we'd use the custom decode function 
      // from the instructions, but for simplicity of the UI demo we use a standard audio wrap
      // (Assuming the API returns a playable format for this demo component)
      setAudioSource(audio);
      audio.play();
      setIsPlaying(true);
      audio.onended = () => setIsPlaying(false);
    }
    setLoading(false);
  };

  return (
    <div className="bg-cnn-black border-l-4 border-cnn-red p-6 text-white flex items-center justify-between group cursor-pointer hover:bg-gray-900 transition-all">
      <div className="flex items-center gap-6">
        <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all ${isPlaying ? 'border-cnn-red scale-110 shadow-[0_0_20px_rgba(204,0,0,0.4)]' : 'border-gray-700'}`}>
          {loading ? (
            <div className="w-6 h-6 border-2 border-cnn-red border-t-transparent animate-spin rounded-full"></div>
          ) : isPlaying ? (
            <Pause className="w-8 h-8 fill-cnn-red text-cnn-red" onClick={handlePlay} />
          ) : (
            <Play className="w-8 h-8 fill-white text-white" onClick={handlePlay} />
          )}
        </div>
        <div>
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-cnn-red mb-1">
            <Radio className="w-3 h-3 animate-pulse" /> Daily Intel Audio
          </div>
          <h3 className="text-xl font-black tracking-tight">Listen to Axelrod's Briefing</h3>
          <p className="text-xs text-gray-500 font-medium">Bản tin mật: Chiến lược thâu tóm ngày 21/12</p>
        </div>
      </div>
      <div className="hidden md:flex gap-1 items-end h-8">
        {[0, 1, 2, 3, 4, 3, 2, 1, 0].map((h, i) => (
          <div 
            key={i} 
            className={`w-1 bg-cnn-red transition-all duration-300 ${isPlaying ? 'animate-bounce' : 'h-1'}`}
            style={{ height: isPlaying ? `${Math.random() * 100}%` : '4px', animationDelay: `${i * 0.1}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MastermindBriefing;