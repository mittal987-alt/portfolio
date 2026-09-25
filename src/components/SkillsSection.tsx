"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

function SkillCard({
  category,
  icon,
  color,
  items,
  index,
}: {
  category: string;
  icon: string;
  color: string;
  items: string[];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className="glass-card rounded-2xl p-6 group relative overflow-hidden"
    >
      {/* Gradient orb in background */}
      <div
        className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${color} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-500`}
      />

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-lg shadow-lg`}
        >
          {icon}
        </div>
        <h3 className="font-bold text-white text-lg">{category}</h3>
      </div>

      {/* Skill tags */}
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.1 + i * 0.04 + 0.3 }}
            className="tech-tag"
          >
            {item}
          </motion.span>
        ))}
      </div>

      {/* Bottom gradient line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-cyan-400 tracking-widest uppercase">
            &lt;skills /&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4">
            Tech{" "}
            <span className="gradient-text-purple">Stack</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </motion.div>

        {/* Skills bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <SkillCard key={skill.category} {...skill} index={i} />
          ))}
        </div>

        {/* Bottom marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 relative overflow-hidden"
        >
          <div className="flex gap-8 text-gray-700 text-sm font-mono overflow-hidden">
            <motion.div
              className="flex gap-8 whitespace-nowrap"
              animate={{ x: [0, -1000] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[
                "React", "Next.js", "TypeScript", "Node.js", "Python",
                "AWS", "Docker", "PostgreSQL", "MongoDB", "GraphQL",
                "Three.js", "TailwindCSS", "Prisma", "Redis", "Kubernetes",
                "React", "Next.js", "TypeScript", "Node.js", "Python",
                "AWS", "Docker", "PostgreSQL", "MongoDB", "GraphQL",
              ].map((tech, i) => (
                <span key={i} className="text-gray-700 hover:text-gray-500 transition-colors">
                  {tech}
                  <span className="text-cyan-900 ml-8">•</span>
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
