"use client";

import { useState, useEffect } from "react";
import { soundFX } from "@/lib/soundFX";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export default function SoundToggle() {
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    soundFX.enabled = !muted;
  }, [muted]);

  const toggle = () => {
    const next = !muted;
    setMuted(next);
    soundFX.enabled = !next;
    if (!next) soundFX.playSuccess();
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggle}
      aria-label="Toggle Sound Effects"
      data-cursor="pointer"
      className="p-2 rounded-xl glass border border-white/10 hover:border-cyan-500/40 text-gray-400 hover:text-cyan-400 transition-colors"
      title={muted ? "Enable UI sound effects" : "Mute UI sound effects"}
    >
      {muted ? <VolumeX size={18} /> : <Volume2 size={18} className="text-cyan-400" />}
    </motion.button>
  );
}
