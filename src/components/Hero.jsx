import React from 'react';
import roboImg from '../assets/robo.png';

export default function Hero() {
  return (
    <main className="relative border-b border-black/5 dark:border-white/5 flex-1 flex flex-col items-center justify-center pt-24 md:pt-28 pb-16 px-4 sm:px-6 md:px-12 overflow-hidden min-h-[max(calc(100vh-80px),80vh)]">

      {/* Animated Assassin Grid Background */}
      <div className="assassin-grid-container">
        <div className="assassin-grid-3d"></div>
        <div className="assassin-grid-glow"></div>
        <div className="sparks-container">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`spark spark-${i + 1}`}></div>
          ))}
        </div>
      </div>



      {/* Majestic Typographical Watermark heavily optimized for Mobile text-scaling */}
      <h1 className="absolute top-[48%] md:top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] sm:text-[16vw] md:text-[14vw] font-black m-0 leading-[0.8] tracking-tighter whitespace-nowrap text-center z-1 pointer-events-none select-none w-full px-4 overflow-hidden">

        <span className="block text-transparent bg-clip-text bg-linear-to-b from-slate-700 to-black dark:from-white dark:to-slate-400 drop-shadow-sm">AETHONIX</span>

        <span className="block text-[16vw] sm:text-[14vw] md:text-[13vw] text-slate-900/5 dark:text-white/5 mt-0.5 sm:mt-1 md:mt-2">SOLUTIONS</span>
      </h1>

      <div className="flex items-center justify-center w-full max-w-7xl mx-auto min-h-[60vh] md:min-h-[70vh] gap-8 relative z-10">

        {/* Center Column - Holographic Base */}
        <div className="flex-1 flex justify-center items-center relative w-full">

          {/* Robot Subject */}
          <img
            src={roboImg}
            alt="Futuristic AI Robot"
            className="w-[80vw] sm:w-[60vw] max-w-[600px] object-contain z-5 mt-12 animate-[float-epic_8s_ease-in-out_infinite] filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] md:drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_30px_60px_rgba(255,255,255,0.05)]"
          />
        </div>
      </div>

      {/* Optimized Spatial Keyframes */}
      <style>{`
        @keyframes float-epic {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-15px) scale(1.02); }
        }
      `}</style>
    </main>
  );
}
