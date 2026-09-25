"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/lib/data";
import { MapPin, Calendar, ChevronRight } from "lucide-react";

function ExperienceCard({
  item,
  index,
  isLast,
}: {
  item: (typeof experience)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="relative flex gap-6">
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: index * 0.15, duration: 0.4 }}
          className={`w-4 h-4 rounded-full bg-gradient-to-br ${item.color} flex-shrink-0 mt-1 ring-4 ring-[#0a0a0a] z-10 pulse-glow`}
        />
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
            className="w-px flex-1 mt-2 origin-top"
            style={{
              background: `linear-gradient(to bottom, ${item.color.includes("cyan") ? "rgba(0,255,255,0.3)" : item.color.includes("purple") ? "rgba(168,85,247,0.3)" : "rgba(34,197,94,0.3)"}, transparent)`,
              minHeight: "60px",
            }}
          />
        )}
      </div>

      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: index * 0.15 + 0.1, duration: 0.6 }}
        className="flex-1 glass-card rounded-2xl p-6 mb-8 group"
      >
        {/* Top */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
              {item.role}
            </h3>
            <div className={`text-sm font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mt-0.5`}>
              {item.company}
            </div>
          </div>
          <div className="flex flex-col sm:items-end gap-1.5 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              {item.period}
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={12} />
              {item.location}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Achievements */}
        <ul className="space-y-2 mb-4">
          {item.achievements.map((achievement, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15 + 0.3 + i * 0.05 }}
              className="flex items-start gap-2 text-sm text-gray-300"
            >
              <ChevronRight size={14} className="text-cyan-400 flex-shrink-0 mt-0.5" />
              {achievement}
            </motion.li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {item.tech.map((t) => (
            <span key={t} className="tech-tag">
              {t}
            </span>
          ))}
        </div>

        {/* Bottom gradient line on hover */}
        <div
          className={`absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
        />
      </motion.div>
    </div>
  );
}

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute right-0 bottom-1/3 w-[400px] h-[400px] bg-cyan-500/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-cyan-400 tracking-widest uppercase">
            &lt;experience /&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4">
            Work{" "}
            <span className="gradient-text-cyan">History</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            My professional journey building products that matter
          </p>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </motion.div>

        {/* Timeline */}
        <div>
          {experience.map((item, i) => (
            <ExperienceCard
              key={item.company}
              item={item}
              index={i}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
