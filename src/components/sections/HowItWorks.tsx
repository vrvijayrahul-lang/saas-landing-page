"use client";

import { motion } from "framer-motion";
import { UserPlus, Sparkles, Rocket } from "lucide-react";

const steps = [
  {
    icon: <UserPlus className="w-8 h-8 text-primary" />,
    title: "Create Workspace",
    description: "Sign up and configure your personalized workspace in minutes."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-secondary" />,
    title: "Invite Team",
    description: "Bring your team on board with role-based access control."
  },
  {
    icon: <Rocket className="w-8 h-8 text-success" />,
    title: "Automate Workflow",
    description: "Use our AI to map out and automate your daily tasks."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted">
            Get up and running in three simple steps. Our intuitive onboarding process ensures you're productive from day one.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-8 group">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-24 h-24 rounded-2xl glass-card flex items-center justify-center relative z-10 border-2 border-white shadow-xl bg-white/60">
                    {step.icon}
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center font-bold text-sm z-20 shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted max-w-xs">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
