"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 250, suffix: "K+", label: "Active Users" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
  { value: 40, suffix: "%", label: "Time Saved" },
  { value: 120, suffix: "+", label: "Countries" }
];

function Counter({ from, to, suffix, duration = 2 }: { from: number, to: number, suffix: string, duration?: number }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(from + (to - from) * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(to);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [from, to, duration, isInView]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-foreground mb-2">
      {count}{suffix}
    </div>
  );
}

export function Statistics() {
  return (
    <section className="py-20 border-y border-border bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <Counter from={0} to={stat.value} suffix={stat.suffix} />
              <p className="text-sm md:text-base font-medium text-muted uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
