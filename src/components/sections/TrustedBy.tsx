"use client";

import { motion } from "framer-motion";

const companies = [
  "Acme Corp", "GlobalTech", "Nexus", "Quantum", "Zephyr", "Pinnacle", "Astra", "Vortex"
];

export function TrustedBy() {
  return (
    <section className="py-12 border-y border-border bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm font-medium text-muted mb-8 uppercase tracking-wider">
          Trusted by innovative teams worldwide
        </p>
        
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee flex whitespace-nowrap items-center">
            {companies.concat(companies).map((company, index) => (
              <span 
                key={index} 
                className="mx-8 text-2xl font-bold text-muted/40 hover:text-primary transition-colors cursor-default"
              >
                {company}
              </span>
            ))}
          </div>
          
          {/* Gradient Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </div>
    </section>
  );
}
