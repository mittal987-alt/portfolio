"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { soundFX } from "@/lib/soundFX";
import {
  Search,
  User,
  FolderGit2,
  Briefcase,
  Mail,
  FileText,
  Copy,
  Check,
  ExternalLink,
  Code,
  Sparkles,
} from "lucide-react";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Socials & Links" | "Actions";
  icon: React.ComponentType<{ size?: number; className?: string }>;
  action: () => void;
  shortcut?: string;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  // Toggle palette with Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        soundFX.playClick();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const items: CommandItem[] = [
    // Navigation
    {
      id: "nav-about",
      title: "Go to About Me",
      category: "Navigation",
      icon: User,
      action: () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "nav-skills",
      title: "Go to Tech Stack & Skills",
      category: "Navigation",
      icon: Code,
      action: () => {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "nav-projects",
      title: "Go to Featured Projects",
      category: "Navigation",
      icon: FolderGit2,
      action: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "nav-experience",
      title: "Go to Work Experience",
      category: "Navigation",
      icon: Briefcase,
      action: () => {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "nav-contact",
      title: "Go to Contact Section",
      category: "Navigation",
      icon: Mail,
      action: () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    // Links
    {
      id: "link-github",
      title: "Open GitHub Profile",
      category: "Socials & Links",
      icon: ExternalLink,
      action: () => {
        window.open(personalInfo.github, "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "link-linkedin",
      title: "Open LinkedIn Profile",
      category: "Socials & Links",
      icon: ExternalLink,
      action: () => {
        window.open(personalInfo.linkedin, "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "link-resume",
      title: "Download Resume / CV",
      category: "Socials & Links",
      icon: FileText,
      action: () => {
        window.open(personalInfo.resumeUrl, "_blank");
        setIsOpen(false);
      },
    },
    // Actions
    {
      id: "action-copy-email",
      title: "Copy Email Address to Clipboard",
      category: "Actions",
      icon: copied ? Check : Copy,
      shortcut: personalInfo.email,
      action: () => {
        navigator.clipboard.writeText(personalInfo.email);
        soundFX.playSuccess();
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
    },
  ];

  const filtered = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-xl glass-card rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,243,255,0.15)] overflow-hidden z-10"
            >
              {/* Input header */}
              <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
                <Search size={20} className="text-cyan-400" />
                <input
                  type="text"
                  placeholder="Type a command or search section..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none text-base"
                />
                <kbd className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white/10 text-gray-400 border border-white/10">
                  ESC
                </kbd>
              </div>

              {/* Items list */}
              <div className="max-h-80 overflow-y-auto p-2 space-y-1">
                {filtered.length === 0 ? (
                  <div className="py-8 text-center text-gray-500 text-sm">
                    No matching commands found.
                  </div>
                ) : (
                  filtered.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          soundFX.playClick();
                          item.action();
                        }}
                        onMouseEnter={() => soundFX.playHover()}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500/30 border border-transparent transition-all group text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg glass flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                            <Icon size={16} />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white group-hover:text-cyan-300">
                              {item.title}
                            </div>
                            <div className="text-xs text-gray-500">
                              {item.category}
                            </div>
                          </div>
                        </div>

                        {item.shortcut ? (
                          <span className="text-xs font-mono text-cyan-400/70 bg-cyan-500/10 px-2 py-0.5 rounded">
                            {item.shortcut}
                          </span>
                        ) : (
                          <Sparkles size={14} className="opacity-0 group-hover:opacity-100 text-cyan-400 transition-opacity" />
                        )}
                      </button>
                    );
                  })
                )}
              </div>

              {/* Modal footer */}
              <div className="px-4 py-2 bg-white/[0.02] border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  Use <kbd className="px-1 py-0.5 bg-white/10 rounded">⌘K</kbd> anywhere to open
                </span>
                <span>Developer Palette</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
