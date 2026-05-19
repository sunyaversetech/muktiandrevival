"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar } from "lucide-react"

const tourDates = [
  {
    city: "Darwin",
    venue: "NT Night Premiere",
    date: "Coming Soon",
    status: "announced"
  },
  {
    city: "Sydney",
    venue: "NSW Opening Night Premiere",
    date: "Coming Soon",
    status: "announced"
  },
  {
    city: "Hobart",
    venue: "TAS Subtropical Night Experience",
    date: "Coming Soon",
    status: "announced"
  },
  {
    city: "Melbourne",
    venue: "VIC Premium Venue Experience",
    date: "Coming Soon",
    status: "announced"
  },
  {
    city: "Canberra",
    venue: "ACT Capital Arena Stage",
    date: "Coming Soon",
    status: "announced"
  },
  {
    city: "Brisbane",
    venue: "QLD Intimate Storytelling Night",
    date: "Coming Soon",
    status: "announced"
  },
  {
    city: "Adelaide",
    venue: "SA Intimate Venue Experience",
    date: "Coming Soon",
    status: "announced"
  }
]

export function TourDates() {
  return (
    <section id="tour" className="py-24 px-4 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Australia Tour 2026
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-rustic mb-4">
            Tour Dates & Venues
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Celebrating 30 legendary years of Mukti & Revival across seven Australian cities
          </p>
        </motion.div>
        
        <div className="grid gap-4">
          {tourDates.map((tour, index) => (
            <motion.div
              key={tour.city}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card vintage-border p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-card/80 transition-colors">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-foreground">{tour.city}</h3>
                    <p className="text-sm text-muted-foreground">{tour.venue}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 sm:gap-8">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{tour.date}</span>
                  </div>
                  
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="inline-block bg-accent text-accent-foreground px-4 py-2 text-xs tracking-wider uppercase"
                  >
                    Coming Soon
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Tickets will be available soon. Stay tuned for updates.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary text-primary-foreground px-8 py-4 vintage-border hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Notify Me When Tickets Drop
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
