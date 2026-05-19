"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Guitar, Mic2, Music, Drum } from "lucide-react"

const members = [
  {
    name: "Mukti Shakya",
    role: "Frontman & Lead Vocalist",
    icon: Mic2,
    description: "The soul of Nepali rock",
    color: "from-amber-500/20 to-amber-600/10"
  },
  {
    name: "Sunit Kansakar",
    role: "Lead Guitarist",
    icon: Guitar,
    description: "Strings of the Himalayas",
    color: "from-emerald-500/20 to-emerald-600/10"
  },
  {
    name: "Roshan Kansakar",
    role: "Bass Guitarist",
    icon: Music,
    description: "Foundation of the sound",
    color: "from-blue-500/20 to-blue-600/10"
  },
  {
    name: "Nikhil Tuladhar",
    role: "Drummer",
    icon: Drum,
    description: "The heartbeat",
    color: "from-red-500/20 to-red-600/10"
  }
]

export function BandMembers() {
  return (
    <section id="band" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">The Band</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Meet the Legends</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Four musicians who have shaped the sound of Nepali rock for three decades
          </p>
        </motion.div>
        
        {/* Members Grid - Styled like audio equipment meters/modules */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div 
                className="relative h-full rounded-sm overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, #1f1f1f 0%, #151515 100%)',
                  boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)'
                }}
              >
                {/* Top accent bar */}
                <div className={`h-1 bg-gradient-to-r ${member.color}`} />
                
                <div className="p-5">
                  {/* Icon Module */}
                  <div className="relative w-14 h-14 mb-4">
                    <div 
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)',
                        boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.3)'
                      }}
                    />
                    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-colors">
                      <member.icon className="w-6 h-6 text-primary" />
                    </div>
                    {/* LED indicator */}
                    <div 
                      className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ boxShadow: '0 0 6px #4ade80' }}
                    />
                  </div>
                  
                  {/* Info */}
                  <h3 className="text-lg font-serif mb-1 text-foreground">{member.name}</h3>
                  <p className="text-xs text-primary mb-2 uppercase tracking-wider">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.description}</p>
                  
                  {/* Decorative VU bars */}
                  <div className="flex items-end gap-0.5 mt-4 h-4">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`w-1 rounded-sm ${i > 5 ? 'bg-red-500/60' : i > 3 ? 'bg-yellow-500/60' : 'bg-green-500/60'}`}
                        initial={{ height: 4 }}
                        whileInView={{ 
                          height: [4, 8 + (index + i) * 1.5, 4]
                        }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 0.5 + i * 0.05,
                          repeat: 0
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Bottom panel line */}
                <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Band Story - Styled like equipment info panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div 
            className="grid lg:grid-cols-2 gap-0 rounded-sm overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.03)'
            }}
          >
            {/* Image Side */}
            <div className="relative aspect-[4/3] lg:aspect-auto">
              <Image
                src="/images/album-cover.jpg"
                alt="Mukti & Revival Album"
                fill
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f0f0f] hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent lg:hidden" />
              
              {/* Badge */}
              <div 
                className="absolute bottom-4 left-4 px-4 py-2 rounded-sm"
                style={{
                  background: 'linear-gradient(180deg, rgba(217,119,6,0.9) 0%, rgba(180,83,9,0.9) 100%)',
                  boxShadow: '0 2px 8px rgba(217,119,6,0.4)'
                }}
              >
                <span className="text-xs uppercase tracking-wider text-primary-foreground font-medium">30 Years of Rock</span>
              </div>
            </div>
            
            {/* Content Side */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-serif mb-6 text-foreground">The Legend & Legacy</h3>
              
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  A rock band based in Kathmandu, Nepal. The band has been rocking 
                  the nation since last three decades. Mukti and Revival blends 
                  Nepali folk tunes with American Blues giving the taste of local 
                  flavor to their music.
                </p>
                <p>
                  Since the 90s, the band has been working to revive traditional 
                  charm in modern Nepali music, questioning, satirizing, and raising 
                  awareness about pertinent issues in society.
                </p>
                <p>
                  Their unique sound captures the essence of the Himalayas while 
                  speaking to universal themes of freedom, revival, and the human spirit.
                </p>
              </div>
              
              {/* Stats - Styled like equipment readout */}
              <div className="flex gap-8 mt-8 pt-6 border-t border-zinc-800">
                {[
                  { value: '30+', label: 'Years' },
                  { value: '100+', label: 'Songs' },
                  { value: '7', label: 'AU Cities' }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-2xl font-mono text-primary amber-glow">{stat.value}</p>
                    <p className="text-[9px] uppercase tracking-[0.15em] text-zinc-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
