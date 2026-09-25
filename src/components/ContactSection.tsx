"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "@/lib/data";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
} from "lucide-react";

// Brand SVG icons
const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);


function MeteorBg() {
  const meteors = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 80}%`,
    left: `${Math.random() * 80}%`,
    delay: `${i * 0.8}s`,
    duration: `${Math.random() * 4 + 6}s`,
    width: `${Math.random() * 60 + 60}px`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {meteors.map((m) => (
        <span
          key={m.id}
          className="meteor absolute h-[1px] rounded-full"
          style={{
            top: m.top,
            left: m.left,
            animationDelay: m.delay,
            animationDuration: m.duration,
            width: m.width,
          }}
        />
      ))}
    </div>
  );
}

const socialLinks = [
  {
    icon: GithubIcon,
    href: personalInfo.github,
    label: "GitHub",
    color: "hover:text-white",
    bg: "hover:bg-white/10",
  },
  {
    icon: LinkedinIcon,
    href: personalInfo.linkedin,
    label: "LinkedIn",
    color: "hover:text-blue-400",
    bg: "hover:bg-blue-500/10",
  },
  {
    icon: TwitterIcon,
    href: personalInfo.twitter,
    label: "Twitter",
    color: "hover:text-sky-400",
    bg: "hover:bg-sky-500/10",
  },
  {
    icon: Mail,
    href: `mailto:${personalInfo.email}`,
    label: "Email",
    color: "hover:text-cyan-400",
    bg: "hover:bg-cyan-500/10",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/4 rounded-full blur-[120px] pointer-events-none" />
      <MeteorBg />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-cyan-400 tracking-widest uppercase">
            &lt;contact /&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4">
            Let&apos;s{" "}
            <span className="gradient-text-cyan">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-8"
          >
            {/* Availability card */}
            <div className="glass-card rounded-2xl p-6 border border-green-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full pulse-glow" />
                <span className="text-green-400 font-semibold">Available for Work</span>
              </div>
              <p className="text-gray-400 text-sm">
                Currently open to full-time roles, freelance projects, and interesting collaborations.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 glass rounded-xl flex items-center justify-center border border-cyan-500/20">
                  <Mail size={16} className="text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-0.5">Email</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 glass rounded-xl flex items-center justify-center border border-purple-500/20">
                  <MapPin size={16} className="text-purple-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-0.5">Location</div>
                  <span>{personalInfo.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 glass rounded-xl flex items-center justify-center border border-pink-500/20">
                  <Clock size={16} className="text-pink-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-0.5">Response Time</div>
                  <span>Within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-sm text-gray-500 mb-4">Find me on</p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label, color, bg }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-11 h-11 glass rounded-xl flex items-center justify-center text-gray-400 border border-white/5 transition-all duration-300 ${color} ${bg}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm text-gray-400 font-medium">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm text-gray-400 font-medium">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm text-gray-400 font-medium">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                id="contact-submit-btn"
                type="submit"
                disabled={status !== "idle"}
                className="w-full py-4 rounded-xl font-semibold text-sm relative overflow-hidden transition-all duration-300 disabled:cursor-not-allowed"
                style={{
                  background:
                    status === "sent"
                      ? "linear-gradient(135deg, rgba(34,197,94,0.2), rgba(34,197,94,0.1))"
                      : "linear-gradient(135deg, rgba(0,255,255,0.15), rgba(168,85,247,0.15))",
                  border:
                    status === "sent"
                      ? "1px solid rgba(34,197,94,0.4)"
                      : "1px solid rgba(0,255,255,0.3)",
                  color: status === "sent" ? "rgb(74,222,128)" : "rgb(0,255,255)",
                }}
                whileHover={status === "idle" ? { scale: 1.01 } : {}}
                whileTap={status === "idle" ? { scale: 0.99 } : {}}
              >
                <span className="flex items-center justify-center gap-2">
                  {status === "idle" && (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                  {status === "sending" && (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending...
                    </>
                  )}
                  {status === "sent" && (
                    <>
                      <CheckCircle2 size={16} /> Message Sent! 🎉
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
