"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Butterfly from "./Butterfly";
import { useButterflySize } from "@/lib/hooks";

// ─── Hero Section ─────────────────────────────────────────────────────────────
export default function HeroSection() {
  const butterflySize = useButterflySize(200, 280, 360);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax su testo
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden scanline-overlay"
    >
      {/* Background radial glow al centro */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.04) 0%, transparent 70%)",
            animation: "strobo-pulse 1.2s ease-in-out infinite",
          }}
        />
      </div>

      {/* ── Farfalla gigante animata ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="relative z-10 mb-8 md:mb-12"
      >
        <Butterfly
          size={butterflySize}
          animated={true}
          heroMode={true}
          className=""
        />
      </motion.div>

      {/* ── Testo principale ── */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 text-center px-6"
      >
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="text-[clamp(4rem,16vw,12rem)] font-black leading-none tracking-[-0.02em] text-white text-strobo"
          style={{ fontFamily: "var(--font-display)" }}
        >
          AEGUA
        </motion.h1>

        {/* Sottotitolo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
          className="mt-3 md:mt-4 text-[clamp(0.7rem,2vw,1rem)] tracking-[0.35em] text-white/40 uppercase"
          style={{ fontFamily: "var(--font-body)" }}
        >
          NEW CLUB — Emozioni che non dimentichi
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
          className="mt-10 md:mt-12"
        >
          <Link href="#serate">
            <motion.button
              whileHover={{
                scale: 1.04,
                boxShadow:
                  "0 0 30px rgba(255,255,255,0.12), 0 0 60px rgba(255,255,255,0.05)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="
                relative px-10 py-4 border border-white/20 text-white
                text-xs tracking-[0.3em] uppercase font-medium
                hover:border-white/60 transition-all duration-500
                group overflow-hidden
              "
              style={{ fontFamily: "var(--font-body)" }}
            >
              {/* Shimmer interno al hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              Scopri le serate
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-[10px] tracking-[0.3em] text-white/20 uppercase"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
