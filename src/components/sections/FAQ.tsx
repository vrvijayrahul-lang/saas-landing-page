"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How long does it take to get set up?",
    answer: "Most teams are up and running within 15 minutes. Our onboarding wizard guides you through connecting your existing tools and setting up your first automated workflow."
  },
  {
    question: "Can I invite external clients to my workspace?",
    answer: "Yes! The Pro and Enterprise plans include secure guest access features, allowing you to invite clients to view specific boards or collaborate on selected projects."
  },
  {
    question: "Is my data secure?",
    answer: "Security is our top priority. We use AES-256 encryption at rest and TLS 1.2+ in transit. We are SOC 2 Type II compliant and conduct regular third-party security audits."
  },
  {
    question: "Do you offer a discount for non-profits?",
    answer: "Yes, we proudly offer a 50% discount on all plans for registered non-profit organizations. Please contact our support team with your 501(c)(3) documentation."
  },
  {
    question: "What happens if I exceed my plan limits?",
    answer: "We won't suddenly cut off your access. If you exceed your limits, we'll notify you and give you a 7-day grace period to either upgrade your plan or adjust your usage."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-light-background">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted">
            Have questions? We're here to help.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="glass-card rounded-2xl overflow-hidden bg-white/70 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-foreground pr-8">
                  {faq.question}
                </span>
                <div className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300",
                  openIndex === index ? "bg-primary text-white rotate-180" : "bg-primary/10 text-primary"
                )}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0 text-muted leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
