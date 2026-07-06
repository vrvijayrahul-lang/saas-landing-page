"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Sarah Jenkins",
    position: "CTO",
    company: "TechNova",
    avatar: "SJ",
    review: "This platform has completely transformed how our engineering team collaborates. The AI-driven automations saved us hundreds of hours last month alone."
  },
  {
    name: "Marcus Cole",
    position: "VP of Sales",
    company: "ElevateHQ",
    avatar: "MC",
    review: "The analytics dashboard gives us visibility we've never had before. We can forecast with 95% accuracy now. An absolute game-changer for our revenue team."
  },
  {
    name: "Elena Rodriguez",
    position: "Operations Director",
    company: "Nexus Logistics",
    avatar: "ER",
    review: "I was skeptical about migrating our existing workflows, but the setup was incredibly seamless. The UI is gorgeous and so intuitive."
  }
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-light-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Loved by Industry Leaders
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative h-[350px] md:h-[300px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ 
                opacity: index === activeIndex ? 1 : 0, 
                x: index === activeIndex ? 0 : index < activeIndex ? -50 : 50,
                scale: index === activeIndex ? 1 : 0.9,
                zIndex: index === activeIndex ? 10 : 0,
                pointerEvents: index === activeIndex ? "auto" : "none"
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div className="glass-card p-8 md:p-12 rounded-3xl h-full flex flex-col justify-center items-center text-center border-white/50 bg-white/70">
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl font-medium text-foreground mb-8 leading-relaxed">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {testimonial.avatar}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === activeIndex ? "bg-primary w-8" : "bg-primary/20 hover:bg-primary/40"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
