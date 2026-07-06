"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams just getting started.",
    priceMonthly: "0",
    priceYearly: "0",
    features: [
      "Up to 5 team members",
      "Basic AI automation",
      "Standard integrations",
      "Community support",
    ],
    popular: false,
    cta: "Get Started Free"
  },
  {
    name: "Pro",
    description: "Ideal for growing businesses needing more power.",
    priceMonthly: "49",
    priceYearly: "39",
    features: [
      "Up to 20 team members",
      "Advanced AI workflows",
      "Custom integrations",
      "Priority 24/7 support",
      "Advanced analytics",
    ],
    popular: true,
    cta: "Start Free Trial"
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex needs.",
    priceMonthly: "199",
    priceYearly: "159",
    features: [
      "Unlimited team members",
      "Dedicated account manager",
      "Custom AI model training",
      "SSO & advanced security",
      "SLA guarantee",
    ],
    popular: false,
    cta: "Contact Sales"
  }
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Simple, transparent pricing
          </h2>
          
          <div className="flex items-center justify-center gap-3">
            <span className={cn("text-sm font-medium", !isYearly ? "text-foreground" : "text-muted")}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-7 w-14 items-center rounded-full bg-primary/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <span 
                className={cn(
                  "inline-block h-5 w-5 transform rounded-full bg-primary transition-transform duration-200 ease-in-out shadow-sm",
                  isYearly ? "translate-x-8" : "translate-x-1"
                )} 
              />
            </button>
            <span className={cn("text-sm font-medium flex items-center gap-2", isYearly ? "text-foreground" : "text-muted")}>
              Yearly <span className="px-2 py-0.5 rounded-full bg-success/10 text-success text-xs font-bold">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative rounded-3xl p-8 glass-card transition-all duration-300",
                plan.popular 
                  ? "border-primary shadow-2xl scale-105 bg-white z-10" 
                  : "bg-white/60 hover:bg-white border-border"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted text-sm">{plan.description}</p>
              </div>

              <div className="mb-6 flex items-end gap-2">
                <span className="text-4xl font-bold text-foreground">
                  ${isYearly ? plan.priceYearly : plan.priceMonthly}
                </span>
                <span className="text-muted mb-1">/mo</span>
              </div>

              <Button 
                variant={plan.popular ? "default" : "outline"} 
                className="w-full mb-8"
              >
                {plan.cta}
              </Button>

              <div className="space-y-4">
                <p className="text-sm font-medium text-foreground">Features include:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
