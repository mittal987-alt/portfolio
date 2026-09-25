"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { personalInfo, stats } from "@/lib/data";
import { MapPin, Coffee, Zap, Heart } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

function StatCard({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="glass-card rounded-2xl p-6 text-center neon-border-cyan"
    >
      <div className="text-3xl font-black gradient-text-cyan mb-1">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: MapPin, text: personalInfo.location, color: "text-cyan-400" },
    { icon: Coffee, text: "Powered by coffee & curiosity", color: "text-yellow-400" },
    { icon: Zap, text: "Open Source Contributor", color: "text-purple-400" },
    { icon: Heart, text: "Building in public", color: "text-pink-400" },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

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
            &lt;about /&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4">
            About{" "}
            <span className="gradient-text-cyan">Me</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Avatar & highlights */}
          <motion.div
            custom={0}
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col items-center lg:items-start gap-8"
          >
            {/* Avatar */}
            <div className="relative">
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-2xl scale-110" />
              <div className="absolute inset-[-8px] rounded-full border border-cyan-500/20 animate-spin" style={{ animationDuration: "8s" }} />
              <div className="absolute inset-[-16px] rounded-full border border-purple-500/10 animate-spin" style={{ animationDuration: "12s", animationDirection: "reverse" }} />

              {/* Avatar circle */}
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-cyan-500/40">
                <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <span className="text-7xl font-black gradient-text-cyan">
                    {personalInfo.name.slice(0, 1)}
                  </span>
                </div>
              </div>

              {/* Status badge */}
              {personalInfo.availableForWork && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 glass border border-green-500/30 rounded-full whitespace-nowrap">
                  <div className="w-2 h-2 bg-green-400 rounded-full pulse-glow" />
                  <span className="text-xs text-green-400 font-medium">Available for Work</span>
                </div>
              )}
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md">
              {highlights.map(({ icon: Icon, text, color }, i) => (
                <motion.div
                  key={text}
                  custom={i + 1}
                  variants={fadeInUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="flex items-center gap-3 glass rounded-xl px-4 py-3 border border-white/5 hover:border-white/10 transition-colors"
                >
                  <Icon size={16} className={color} />
                  <span className="text-sm text-gray-300">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Text content */}
          <div className="space-y-8">
            <motion.div
              custom={1}
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="glass-card rounded-2xl p-8 border border-white/5"
            >
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Hey! I&apos;m <span className="text-cyan-400 font-semibold">{personalInfo.fullName}</span>,
                a passionate Full-Stack Developer with 3+ years of experience building
                scalable web applications. I love turning complex problems into elegant,
                user-friendly solutions.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                My journey started with curiosity about how websites work, and it evolved
                into a deep passion for crafting digital experiences. I specialize in
                the JavaScript ecosystem — React, Next.js, and Node.js — but I&apos;m always
                exploring new technologies.
              </p>
              <p className="text-gray-400 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me contributing to open source,
                writing technical blog posts, or experimenting with the latest AI tools.
                I believe great software is a blend of{" "}
                <span className="text-purple-400 font-medium">technical excellence</span> and{" "}
                <span className="text-pink-400 font-medium">creative thinking</span>.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} {...stat} index={i + 2} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
