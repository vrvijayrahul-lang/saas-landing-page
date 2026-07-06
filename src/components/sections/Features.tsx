"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, BarChart3, Users, FolderKanban, BellRing } from "lucide-react";

const features = [
  {
    icon: <Bot className="w-6 h-6 text-primary" />,
    title: "AI Automation",
    description: "Let our AI handle repetitive tasks so your team can focus on what matters most."
  },
  {
    icon: <Workflow className="w-6 h-6 text-primary" />,
    title: "Workflow Builder",
    description: "Visually construct complex multi-step workflows with our intuitive drag-and-drop builder."
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    title: "Analytics Dashboard",
    description: "Gain actionable insights with real-time analytics and customizable reporting."
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Team Collaboration",
    description: "Seamlessly collaborate across departments with shared workspaces and tools."
  },
  {
    icon: <FolderKanban className="w-6 h-6 text-primary" />,
    title: "File Management",
    description: "Organize, search, and share files securely with version control and permissions."
  },
  {
    icon: <BellRing className="w-6 h-6 text-primary" />,
    title: "Real-Time Notifications",
    description: "Stay updated with intelligent alerts that notify you only when it's important."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Features() {
  return (
    <section id="features" className="py-24 bg-light-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Powerful Features Built for Modern Teams
          </h2>
          <p className="text-lg text-muted">
            Everything you need to scale your operations, manage workflows, and collaborate effectively in one unified platform.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-border to-transparent overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full glass-card p-8 rounded-2xl bg-white/80 transition-colors group-hover:bg-white/95">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
