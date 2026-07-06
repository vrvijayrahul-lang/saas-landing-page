"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden bg-foreground text-white"
        >
          {/* Animated Background Gradients */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/40 to-transparent rounded-full blur-[100px] mix-blend-screen" />
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-secondary/40 to-transparent rounded-full blur-[100px] mix-blend-screen" />
          </div>

          <div className="relative p-12 md:p-20 text-center max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl">
              Join thousands of forward-thinking teams who have already upgraded their operations with our AI-powered platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" className="h-14 px-8 text-base bg-white text-foreground hover:bg-white/90">
                Get Started Free <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent">
                <MessageSquare className="mr-2 w-5 h-5" /> Contact Sales
              </Button>
            </div>
            
            <p className="mt-8 text-sm text-white/50">
              No credit card required. 14-day free trial.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
