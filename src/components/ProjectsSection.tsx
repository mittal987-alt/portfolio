"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/data";
import { ExternalLink, Star } from "lucide-react";
import TiltCard from "@/components/TiltCard";
import { soundFX } from "@/lib/soundFX";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      onMouseEnter={() => {
        setHovered(true);
        soundFX.playHover();
      }}
      onMouseLeave={() => setHovered(false)}
    >
      <TiltCard className="group relative glass-card rounded-2xl overflow-hidden h-full border border-white/5 hover:border-cyan-500/40 transition-colors flex flex-col">
        {/* Gradient top bar */}
        <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

        {/* Project Image Preview */}
        {project.image && (
          <div className="relative w-full h-44 overflow-hidden bg-black/40">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
            {project.featured && (
              <span className="absolute top-3 left-3 flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase text-yellow-400 bg-yellow-500/20 backdrop-blur-md border border-yellow-500/30 rounded-full px-2.5 py-0.5">
                <Star size={10} fill="currentColor" />
                Featured
              </span>
            )}
          </div>
        )}

        <div className="p-6 flex-1 flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {project.featured && (
                <span className="flex items-center gap-1 text-xs text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-2 py-0.5">
                  <Star size={10} fill="currentColor" />
                  Featured
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
              {project.title}
            </h3>
          </div>

          {/* Links */}
          <div className="flex gap-2">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub`}
              className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white border border-white/5 hover:border-white/20 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon size={16} />
            </motion.a>
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className={`w-9 h-9 rounded-lg flex items-center justify-center text-white bg-gradient-to-br ${project.gradient} opacity-80 hover:opacity-100 transition-opacity`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink size={14} />
            </motion.a>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      </TiltCard>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const filtered = filter === "featured"
    ? projects.filter((p) => p.featured)
    : projects;

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-mono text-cyan-400 tracking-widest uppercase">
            &lt;projects /&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4">
            Featured{" "}
            <span className="gradient-text-fire">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            A selection of projects I&apos;ve built — from SaaS platforms to developer tools
          </p>
          <div className="section-divider max-w-xs mx-auto mb-8" />

          {/* Filter tabs */}
          <div className="inline-flex glass rounded-xl p-1 border border-white/5 gap-1">
            {(["all", "featured"] as const).map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  filter === tab
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                    : "text-gray-400 hover:text-white"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {tab === "all" ? "All Projects" : "⭐ Featured"}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {/* View more link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/aayush"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass border border-white/10 hover:border-cyan-500/30 rounded-xl text-gray-400 hover:text-cyan-400 transition-all duration-300 group"
          >
            <GithubIcon size={18} />
            <span>View all projects on GitHub</span>
            <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
