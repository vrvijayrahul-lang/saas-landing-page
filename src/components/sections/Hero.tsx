"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary font-medium mb-4"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
            Introducing the future of automation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl text-foreground"
          >
            Scale Your Business Faster With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              AI-Powered Automation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted max-w-2xl"
          >
            Streamline your workflows, increase team productivity, and automate repetitive tasks with our intelligent platform designed for modern teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button size="lg" className="text-base h-14 px-8">
              Get Started Free <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base h-14 px-8 bg-white/50 backdrop-blur-sm">
              <PlayCircle className="mr-2 w-5 h-5 text-primary" /> Book a Demo
            </Button>
          </motion.div>
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 relative mx-auto max-w-6xl"
        >
          <div className="relative rounded-2xl border border-white/20 bg-white/40 p-2 shadow-2xl backdrop-blur-xl glow-effect">
            <div className="rounded-xl overflow-hidden border border-border bg-background shadow-inner flex">
              {/* Sidebar */}
              <div className="w-64 border-r border-border bg-light-background/50 hidden md:block p-4 space-y-4">
                <div className="h-8 w-32 bg-primary/10 rounded-md mb-8" />
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="h-6 w-6 rounded bg-primary/20" />
                    <div className="h-4 w-24 rounded bg-muted/20" />
                  </div>
                ))}
              </div>
              {/* Main Area */}
              <div className="flex-1 p-6 md:p-8 space-y-6 bg-grid-slate-100/[0.04]">
                <div className="flex justify-between items-center">
                  <div className="h-8 w-48 rounded bg-muted/20" />
                  <div className="flex space-x-2">
                    <div className="h-8 w-8 rounded-full bg-primary/20" />
                    <div className="h-8 w-8 rounded-full bg-secondary/20" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-32 rounded-xl border border-border bg-white shadow-sm p-4 flex flex-col justify-between">
                      <div className="h-4 w-1/2 rounded bg-muted/20" />
                      <div className="h-10 w-3/4 rounded bg-primary/10" />
                    </div>
                  ))}
                </div>
                <div className="h-64 rounded-xl border border-border bg-white shadow-sm p-4">
                   <div className="h-full w-full rounded bg-gradient-to-tr from-primary/5 to-secondary/5" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 glass-card px-4 py-3 rounded-xl flex items-center gap-3 hidden md:flex"
          >
            <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-success" />
            </div>
            <div>
              <p className="text-sm font-semibold">AI Assistant</p>
              <p className="text-xs text-muted">Active</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute top-40 -right-12 glass-card px-4 py-3 rounded-xl flex items-center gap-3 hidden md:flex"
          >
             <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary text-xs font-bold">+</span>
            </div>
            <div>
              <p className="text-sm font-semibold">Sales Boost</p>
              <p className="text-xs text-muted">+24% this week</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
