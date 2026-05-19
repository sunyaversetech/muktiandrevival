"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function VinylRecord() {
  const [isPlaying, setIsPlaying] = useState(false)
  
  return (
    <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px]">
      {/* Album Sleeve */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isPlaying ? -60 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 vintage-border overflow-hidden bg-secondary z-10"
      >
        <Image
          src="/images/album-cover.jpg"
          alt="Mukti & Revival Album Cover"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      
      {/* Vinyl Record */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isPlaying ? 80 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div 
          className={`relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full ${isPlaying ? 'animate-spin-slow' : ''}`}
          style={{
            background: `
              radial-gradient(circle at center, 
                #1a1a1a 0%, 
                #1a1a1a 15%,
                #2d5a3d 15.5%,
                #1f4a2d 20%,
                #2d5a3d 25%,
                #1f4a2d 30%,
                #2d5a3d 35%,
                #1f4a2d 40%,
                #2d5a3d 45%,
                #1f4a2d 50%,
                #2d5a3d 55%,
                #1f4a2d 60%,
                #2d5a3d 65%,
                #1f4a2d 70%,
                #2d5a3d 75%,
                #1f4a2d 80%,
                #2d5a3d 85%,
                #1f4a2d 90%,
                #1a1a1a 95%,
                #1a1a1a 100%
              )
            `,
            boxShadow: '0 0 40px rgba(0,0,0,0.4), inset 0 0 20px rgba(0,0,0,0.3)'
          }}
        >
          {/* Center Label */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-secondary flex items-center justify-center overflow-hidden vintage-border">
            <div className="text-center p-2">
              <p className="text-[8px] sm:text-[10px] font-bold tracking-wider text-foreground">MUKTI</p>
              <p className="text-[6px] sm:text-[8px] text-muted-foreground">&</p>
              <p className="text-[8px] sm:text-[10px] font-bold tracking-wider text-foreground">REVIVAL</p>
            </div>
          </div>
          
          {/* Vinyl grooves overlay */}
          <div 
            className="absolute inset-0 rounded-full opacity-30"
            style={{
              background: `repeating-radial-gradient(
                circle at center,
                transparent 0px,
                transparent 1px,
                rgba(255,255,255,0.1) 1px,
                rgba(255,255,255,0.1) 2px
              )`
            }}
          />
        </div>
      </motion.div>
      
      {/* Play/Pause Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 bg-primary text-primary-foreground px-6 py-2 text-sm tracking-wider vintage-border hover:bg-primary/90 transition-colors"
      >
        {isPlaying ? 'PAUSE' : 'PLAY'}
      </motion.button>
    </div>
  )
}
