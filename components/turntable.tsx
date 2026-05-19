"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Turntable() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState<33 | 45>(33)
  
  return (
    <div className="relative w-full max-w-[650px] mx-auto px-2 sm:px-0">
      {/* Main Turntable Unit */}
      <div className="relative">
        {/* Wood Cabinet Base */}
        <div className="absolute inset-0 wood-cabinet rounded-lg" style={{
          boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 8px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)'
        }} />
        
        {/* Brushed Metal Top Plate */}
        <div className="relative brushed-steel rounded-md m-1.5 sm:m-2 p-4 sm:p-6 md:p-8" style={{
          boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.08), inset 0 -1px 2px rgba(0,0,0,0.15)'
        }}>
          
          {/* Corner Screws - Hidden on smallest screens */}
          {[['top-2 left-2 sm:top-3 sm:left-3', '-45deg'], ['top-2 right-2 sm:top-3 sm:right-3', '45deg'], ['bottom-2 left-2 sm:bottom-3 sm:left-3', '-135deg'], ['bottom-2 right-2 sm:bottom-3 sm:right-3', '135deg']].map(([pos, rotation], i) => (
            <div key={i} className={`absolute ${pos} w-2 h-2 sm:w-3 sm:h-3 rounded-full hidden xs:block`} style={{
              background: 'linear-gradient(145deg, #666 0%, #444 50%, #555 100%)',
              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.5), 0 1px 1px rgba(255,255,255,0.1)'
            }}>
              <div className="absolute inset-0.5 rounded-full" style={{
                background: `linear-gradient(${rotation}, #555 0%, #333 100%)`
              }}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 sm:w-2 h-0.5 bg-zinc-600 rounded-full" style={{ transform: `translate(-50%, -50%) rotate(${rotation})` }} />
              </div>
            </div>
          ))}
          
          {/* Platter Area */}
          <div className="relative aspect-square max-w-[280px] sm:max-w-[320px] md:max-w-[380px] mx-auto mb-4 sm:mb-6">
            {/* Outer Platter Ring */}
            <div className="absolute inset-0 rounded-full" style={{
              background: 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 50%, #151515 100%)',
              boxShadow: 'inset 0 4px 15px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.5)'
            }} />
            
            {/* Platter Base with Strobe Dots */}
            <div className="absolute inset-2 sm:inset-3 rounded-full overflow-hidden" style={{
              background: 'linear-gradient(180deg, #181818 0%, #0c0c0c 100%)'
            }}>
              {/* Strobe dots ring */}
              <div className={`absolute inset-0 ${isPlaying ? 'animate-spin-vinyl' : ''}`} style={{
                animationDuration: speed === 33 ? '1.818s' : '1.333s'
              }}>
                {[...Array(24)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-zinc-500 rounded-full"
                    style={{
                      top: '4px',
                      left: '50%',
                      transform: `translateX(-50%) rotate(${i * 15}deg) translateY(-4px)`,
                      transformOrigin: '50% calc(50% + 4px)'
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Rubber Mat */}
            <div className="absolute inset-4 sm:inset-5 rounded-full rubber-mat" />
            
            {/* Vinyl Record */}
            <motion.div 
              className="absolute inset-6 sm:inset-8 rounded-full"
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{
                duration: speed === 33 ? 1.818 : 1.333,
                repeat: isPlaying ? Infinity : 0,
                ease: "linear"
              }}
              style={{
                background: `
                  radial-gradient(circle at center, 
                    #080808 0%, 
                    #080808 14%,
                    #1a4a2a 14.5%,
                    #2a5a3a 17%,
                    #1e4828 22%,
                    #2a5a3a 27%,
                    #1a4a2a 32%,
                    #2a5a3a 37%,
                    #1e4828 42%,
                    #2a5a3a 47%,
                    #1a4a2a 52%,
                    #2a5a3a 57%,
                    #1e4828 62%,
                    #2a5a3a 67%,
                    #1a4a2a 72%,
                    #2a5a3a 77%,
                    #1e4828 82%,
                    #2a5a3a 87%,
                    #1a4a2a 92%,
                    #0a0a0a 96%
                  )
                `,
                boxShadow: `
                  0 0 40px rgba(42,90,58,0.25),
                  inset 0 0 30px rgba(0,0,0,0.5),
                  0 2px 8px rgba(0,0,0,0.4)
                `
              }}
            >
              {/* Groove Lines */}
              <div className="absolute inset-0 rounded-full" style={{
                background: `repeating-radial-gradient(
                  circle at center,
                  transparent 0px,
                  transparent 1.5px,
                  rgba(255,255,255,0.04) 1.5px,
                  rgba(255,255,255,0.04) 3px
                )`
              }} />
              
              {/* Light Reflection */}
              <div className="absolute inset-0 rounded-full" style={{
                background: 'linear-gradient(130deg, rgba(255,255,255,0.12) 0%, transparent 40%, rgba(0,0,0,0.15) 100%)'
              }} />
              
              {/* Center Label */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32%] aspect-square rounded-full overflow-hidden" style={{
                boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.4), 0 2px 6px rgba(0,0,0,0.3)'
              }}>
                <Image
                  src="/images/album-cover.jpg"
                  alt="Mukti & Revival"
                  fill
                  className="object-cover"
                />
                {/* Center Spindle Hole */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-b from-zinc-700 to-zinc-900 border-2 border-zinc-600" style={{
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.6)'
                }} />
              </div>
            </motion.div>
            
            {/* Center Spindle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full z-10" style={{
              background: 'linear-gradient(180deg, #888 0%, #555 50%, #666 100%)',
              boxShadow: '0 2px 6px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.3)'
            }} />
          </div>
          
          {/* Tonearm Assembly - Simplified on mobile */}
          <div className="absolute top-6 right-4 sm:top-8 sm:right-6 md:top-10 md:right-10">
            {/* Tonearm Pivot Base */}
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20">
              {/* Base Plate */}
              <div className="absolute inset-0 rounded-full" style={{
                background: 'linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 50%, #3a3a3a 100%)',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.5)'
              }} />
              <div className="absolute inset-1.5 sm:inset-2 rounded-full" style={{
                background: 'linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)'
              }} />
              
              {/* Tonearm */}
              <motion.div 
                className="absolute top-1/2 left-1/2"
                style={{ transformOrigin: '0% 0%' }}
                animate={{ rotate: isPlaying ? 22 : -18 }}
                transition={{ duration: isPlaying ? 1.5 : 0.8, ease: "easeInOut" }}
              >
                {/* Main Arm */}
                <div className="relative" style={{ transform: 'translate(-4px, -4px)' }}>
                  {/* Counter Weight */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full" style={{
                    background: 'linear-gradient(180deg, #555 0%, #333 50%, #444 100%)',
                    boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.1), 0 2px 6px rgba(0,0,0,0.4)'
                  }} />
                  
                  {/* Arm Tube */}
                  <div 
                    className="w-[100px] sm:w-[130px] md:w-[180px] h-1.5 sm:h-2 rounded-full"
                    style={{
                      background: 'linear-gradient(180deg, #777 0%, #555 30%, #666 70%, #555 100%)',
                      transform: 'rotate(-28deg)',
                      transformOrigin: 'right center',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.4)'
                    }}
                  />
                  
                  {/* Headshell */}
                  <div 
                    className="absolute -bottom-6 sm:-bottom-7 md:-bottom-8 -left-2 sm:-left-3 md:-left-4 w-7 h-3.5 sm:w-8 sm:h-4 md:w-10 md:h-5 rounded-sm"
                    style={{
                      background: 'linear-gradient(180deg, #666 0%, #444 100%)',
                      transform: 'rotate(-28deg)',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.4)'
                    }}
                  >
                    {/* Cartridge */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 sm:w-5 md:w-6 h-2 sm:h-2.5 md:h-3 bg-zinc-900 rounded-sm" />
                    {/* Stylus */}
                    <div className="absolute -bottom-0.5 sm:-bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-1.5 sm:h-2 bg-zinc-400" />
                  </div>
                </div>
              </motion.div>
              
              {/* Arm Rest - Hidden on smallest screens */}
              <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 w-6 h-4 sm:w-8 sm:h-6 rounded-sm hidden sm:block" style={{
                background: 'linear-gradient(180deg, #444 0%, #2a2a2a 100%)',
                boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.4)'
              }}>
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 sm:w-4 h-1 rounded-full bg-zinc-600" />
              </div>
            </div>
          </div>
          
          {/* Control Panel */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            {/* Left - Power & Speed */}
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Power Indicator */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div 
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-500 ${isPlaying ? 'bg-green-400' : 'bg-zinc-700'}`}
                  style={{ 
                    boxShadow: isPlaying ? '0 0 8px #4ade80, 0 0 16px rgba(74,222,128,0.5)' : 'inset 0 1px 2px rgba(0,0,0,0.4)'
                  }}
                />
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.15em] text-zinc-500">Power</span>
              </div>
              
              {/* Speed Selector */}
              <div className="flex items-center gap-2 sm:gap-3">
                <button 
                  onClick={() => setSpeed(33)}
                  className={`text-[9px] sm:text-[10px] font-mono transition-colors p-1 ${speed === 33 ? 'text-primary' : 'text-zinc-600 hover:text-zinc-400'}`}
                >
                  33
                </button>
                <div className="w-px h-3 sm:h-4 bg-zinc-700" />
                <button 
                  onClick={() => setSpeed(45)}
                  className={`text-[9px] sm:text-[10px] font-mono transition-colors p-1 ${speed === 45 ? 'text-primary' : 'text-zinc-600 hover:text-zinc-400'}`}
                >
                  45
                </button>
              </div>
            </div>
            
            {/* Center - Play/Stop */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsPlaying(!isPlaying)}
              className="retro-button px-4 sm:px-6 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3 min-w-[100px] sm:min-w-[120px] justify-center"
            >
              {isPlaying ? (
                <>
                  <div className="flex gap-0.5">
                    <div className="w-0.5 sm:w-1 h-3 sm:h-4 bg-primary rounded-sm" />
                    <div className="w-0.5 sm:w-1 h-3 sm:h-4 bg-primary rounded-sm" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em]">Stop</span>
                </>
              ) : (
                <>
                  <div className="w-0 h-0 border-t-[5px] sm:border-t-[6px] border-t-transparent border-l-[8px] sm:border-l-[10px] border-l-primary border-b-[5px] sm:border-b-[6px] border-b-transparent ml-0.5" />
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em]">Play</span>
                </>
              )}
            </motion.button>
            
            {/* Right - Volume Knob */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.15em] text-zinc-500">Vol</span>
              <div className="vintage-knob w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full relative cursor-pointer">
                <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-0.5 h-3 sm:h-4 bg-zinc-300 rounded-full" />
                {/* Knob Ring Markings - Hidden on mobile */}
                <div className="hidden sm:block">
                  {[...Array(11)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-0.5 h-1 bg-zinc-600"
                      style={{
                        top: '-6px',
                        left: '50%',
                        transform: `translateX(-50%) rotate(${-135 + i * 27}deg)`,
                        transformOrigin: '50% calc(50% + 30px)'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Brand Label */}
          <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 text-center">
            <p className="text-[7px] sm:text-[8px] tracking-[0.3em] sm:tracking-[0.4em] uppercase text-zinc-600 embossed-text">Mukti & Revival</p>
            <p className="text-[5px] sm:text-[6px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-zinc-700 hidden sm:block">Direct Drive Turntable System</p>
          </div>
        </div>
      </div>
      
      {/* VU Meters */}
      <div className="flex justify-center gap-3 sm:gap-6 mt-4 sm:mt-6">
        <VUMeter isActive={isPlaying} channel="L" />
        <VUMeter isActive={isPlaying} channel="R" delay={0.05} />
      </div>
    </div>
  )
}

function VUMeter({ isActive, channel, delay = 0 }: { isActive: boolean; channel: string; delay?: number }) {
  const [level, setLevel] = useState(-45)
  
  useEffect(() => {
    if (!isActive) {
      setLevel(-45)
      return
    }
    
    const interval = setInterval(() => {
      setLevel(-45 + Math.random() * 70)
    }, 80 + delay * 1000)
    
    return () => clearInterval(interval)
  }, [isActive, delay])
  
  return (
    <div className="w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-20 rounded-sm overflow-hidden" style={{
      background: 'linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)',
      boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4)'
    }}>
      <div className="p-1.5 sm:p-2 h-full">
        {/* Meter Face */}
        <div className="relative h-full rounded-sm overflow-hidden" style={{
          background: 'linear-gradient(180deg, #f5f0e6 0%, #e8e0d0 100%)',
          boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.15)'
        }}>
          {/* Scale Arc */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 70">
            {/* Scale markings */}
            <path d="M 15 55 A 40 40 0 0 1 85 55" fill="none" stroke="#333" strokeWidth="0.5" />
            
            {/* dB markings */}
            {[
              { angle: -60, label: '-20' },
              { angle: -40, label: '-10' },
              { angle: -20, label: '-5' },
              { angle: 0, label: '0' },
              { angle: 15, label: '+3' }
            ].map((mark, i) => {
              const rad = (mark.angle - 90) * Math.PI / 180
              const x1 = 50 + 32 * Math.cos(rad)
              const y1 = 55 + 32 * Math.sin(rad)
              const x2 = 50 + 38 * Math.cos(rad)
              const y2 = 55 + 38 * Math.sin(rad)
              const tx = 50 + 43 * Math.cos(rad)
              const ty = 55 + 43 * Math.sin(rad)
              return (
                <g key={i}>
                  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={mark.angle > 5 ? '#c00' : '#333'} strokeWidth="1" />
                  <text x={tx} y={ty} fill={mark.angle > 5 ? '#c00' : '#333'} fontSize="6" textAnchor="middle" dominantBaseline="middle">
                    {mark.label}
                  </text>
                </g>
              )
            })}
            
            {/* VU label */}
            <text x="50" y="20" fill="#333" fontSize="8" textAnchor="middle" fontWeight="bold">VU</text>
            
            {/* Needle */}
            <motion.line
              x1="50"
              y1="55"
              x2="50"
              y2="20"
              stroke="#111"
              strokeWidth="1"
              strokeLinecap="round"
              animate={{ rotate: level }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              style={{ transformOrigin: '50px 55px' }}
            />
            
            {/* Needle pivot */}
            <circle cx="50" cy="55" r="3" fill="#222" />
          </svg>
          
          {/* Channel Label */}
          <div className="absolute bottom-0.5 sm:bottom-1 left-1/2 -translate-x-1/2 text-[6px] sm:text-[7px] font-mono text-zinc-600 uppercase">
            {channel}
          </div>
        </div>
      </div>
    </div>
  )
}
