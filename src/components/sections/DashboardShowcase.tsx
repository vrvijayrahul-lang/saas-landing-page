"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Centralized workspace for all team communication",
  "Automated task delegation based on workload",
  "Real-time progress tracking and reporting",
  "Seamless integration with your favorite tools",
  "Enterprise-grade security and permissions"
];

export function DashboardShowcase() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-2xl transform rotate-3 rounded-3xl" />
            <div className="relative rounded-2xl border border-border bg-background shadow-2xl overflow-hidden aspect-[4/3] flex flex-col">
              {/* Fake Window Header */}
              <div className="h-10 bg-light-background border-b border-border flex items-center px-4 space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              {/* Fake App Content */}
              <div className="flex-1 p-6 bg-white flex gap-6">
                <div className="w-1/3 flex flex-col gap-4">
                  <div className="h-8 bg-light-background rounded-md w-full" />
                  <div className="h-24 bg-primary/5 border border-primary/10 rounded-xl w-full p-4 flex flex-col gap-2">
                     <div className="h-4 bg-primary/20 rounded w-1/2" />
                     <div className="h-3 bg-muted/20 rounded w-full" />
                     <div className="h-3 bg-muted/20 rounded w-4/5" />
                  </div>
                  <div className="h-24 bg-light-background border border-border rounded-xl w-full" />
                </div>
                <div className="w-2/3 flex flex-col gap-4">
                  <div className="h-32 bg-light-background border border-border rounded-xl w-full" />
                  <div className="flex-1 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/10 w-full" />
                </div>
              </div>
            </div>
            
            {/* Floating element */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center text-success">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">Task Completed</p>
                <p className="text-xs text-muted">Just now</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              A command center for your entire business
            </h2>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              Experience unparalleled visibility into your operations. Our dashboard brings together data from across your organization into one intuitive interface.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="flex items-center gap-3 text-foreground"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
