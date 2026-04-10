"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// ─── Props ────────────────────────────────────────────────────────────────────
interface ButterflyProps {
  size?: number;
  className?: string;
  animated?: boolean;
  heroMode?: boolean; // attiva la traiettoria scroll
}

// ─── Particelle luminose ──────────────────────────────────────────────────────
function Particle({ index }: { index: number }) {
  const angle = (index / 8) * Math.PI * 2;
  const radius = 20 + Math.random() * 40;
  const drift = Math.cos(angle) * radius;

  return (
    <motion.div
      style={
        {
          position: "absolute",
          width: index % 3 === 0 ? 3 : 2,
          height: index % 3 === 0 ? 3 : 2,
          borderRadius: "50%",
          background: "white",
          top: "50%",
          left: "50%",
          "--drift": `${drift}px`,
        } as React.CSSProperties
      }
      initial={{ opacity: 0.8, x: 0, y: 0, scale: 1 }}
      animate={{
        opacity: 0,
        x: drift,
        y: -(60 + Math.random() * 80),
        scale: 0,
      }}
      transition={{
        duration: 1.2 + Math.random() * 0.8,
        delay: index * 0.08,
        ease: "easeOut",
      }}
    />
  );
}

// ─── Componente principale ────────────────────────────────────────────────────
export default function Butterfly({
  size = 200,
  className = "",
  animated = true,
  heroMode = false,
}: ButterflyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showParticles, setShowParticles] = useState(false);
  const [hasFlown, setHasFlown] = useState(false);

  // Scroll tracking per hero mode
  const { scrollY } = useScroll();

  // Traiettoria: x zigzag, y sale, opacity scompare
  const x = useTransform(scrollY, [0, 200, 400, 600, 800], [0, 60, -30, 80, 120]);
  const y = useTransform(scrollY, [0, 400, 800], [0, -80, -200]);
  const opacity = useTransform(scrollY, [0, 400, 700, 800], [1, 0.9, 0.3, 0]);
  const scale = useTransform(scrollY, [0, 500, 800], [1, 0.85, 0.5]);
  const rotate = useTransform(scrollY, [0, 400, 800], [0, 8, -5]);

  // Mostra particelle a metà scroll
  useEffect(() => {
    if (!heroMode) return;
    const unsubscribe = scrollY.on("change", (v) => {
      if (v > 300 && !hasFlown) {
        setShowParticles(true);
        setHasFlown(true);
        setTimeout(() => setShowParticles(false), 2000);
      }
    });
    return unsubscribe;
  }, [scrollY, heroMode, hasFlown]);

  // Spring per rendere il movimento più fluido
  const springX = useSpring(x, { stiffness: 60, damping: 20 });
  const springY = useSpring(y, { stiffness: 60, damping: 20 });

  // Varianti per il battito delle ali
  const wingLeftVariants = {
    rest: { rotateY: 0, scaleX: 1 },
    flap: {
      rotateY: [0, 20, 0, -5, 0],
      scaleX: [1, 0.85, 1, 0.95, 1],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 0.2,
      },
    },
  };

  const wingRightVariants = {
    rest: { rotateY: 0, scaleX: 1 },
    flap: {
      rotateY: [0, -20, 0, 5, 0],
      scaleX: [1, 0.85, 1, 0.95, 1],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 0.2,
        delay: 0.05,
      },
    },
  };

  const vw = size;
  const vh = size * 0.7;
  const cx = vw / 2;
  const cy = vh / 2;

  // Wrapper motion props solo in heroMode
  const wrapperMotionProps = heroMode
    ? {
        style: {
          x: springX,
          y: springY,
          opacity,
          scale,
          rotate,
        },
      }
    : {};

  return (
    <motion.div
      ref={containerRef}
      className={`relative inline-flex items-center justify-center ${className}`}
      {...wrapperMotionProps}
    >
      {/* ── SVG Farfalla ── */}
      <svg
        width={vw}
        height={vh}
        viewBox={`0 0 ${vw} ${vh}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Glow filter */}
          <filter id="butterfly-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Inner glow stronger */}
          <filter id="butterfly-glow-strong" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Ala SINISTRA ── */}
        <motion.g
          style={{ transformOrigin: `${cx}px ${cy}px` }}
          variants={animated ? wingLeftVariants : undefined}
          animate={animated ? "flap" : "rest"}
        >
          {/* Ala esterna superiore sinistra - grande e affilata */}
          <motion.path
            d={`
              M ${cx} ${cy}
              C ${cx - vw * 0.05} ${cy - vh * 0.15}
                ${cx - vw * 0.20} ${cy - vh * 0.55}
                ${cx - vw * 0.45} ${cy - vh * 0.45}
              C ${cx - vw * 0.55} ${cy - vh * 0.35}
                ${cx - vw * 0.48} ${cy - vh * 0.05}
                ${cx} ${cy}
            `}
            fill="white"
            filter="url(#butterfly-glow)"
            opacity={0.95}
          />
          {/* Ala interna inferiore sinistra - più piccola e triangolare */}
          <motion.path
            d={`
              M ${cx} ${cy}
              C ${cx - vw * 0.04} ${cy + vh * 0.05}
                ${cx - vw * 0.22} ${cy + vh * 0.38}
                ${cx - vw * 0.36} ${cy + vh * 0.28}
              C ${cx - vw * 0.44} ${cy + vh * 0.16}
                ${cx - vw * 0.32} ${cy - vh * 0.02}
                ${cx} ${cy}
            `}
            fill="white"
            opacity={0.85}
          />
          {/* Nervatura / dettaglio interno ala sinistra */}
          <motion.path
            d={`
              M ${cx - 2} ${cy}
              C ${cx - vw * 0.12} ${cy - vh * 0.18}
                ${cx - vw * 0.28} ${cy - vh * 0.32}
                ${cx - vw * 0.38} ${cy - vh * 0.28}
            `}
            stroke="rgba(0,0,0,0.3)"
            strokeWidth={1}
            fill="none"
          />
        </motion.g>

        {/* ── Ala DESTRA ── */}
        <motion.g
          style={{ transformOrigin: `${cx}px ${cy}px` }}
          variants={animated ? wingRightVariants : undefined}
          animate={animated ? "flap" : "rest"}
        >
          {/* Ala esterna superiore destra */}
          <motion.path
            d={`
              M ${cx} ${cy}
              C ${cx + vw * 0.05} ${cy - vh * 0.15}
                ${cx + vw * 0.20} ${cy - vh * 0.55}
                ${cx + vw * 0.45} ${cy - vh * 0.45}
              C ${cx + vw * 0.55} ${cy - vh * 0.35}
                ${cx + vw * 0.48} ${cy - vh * 0.05}
                ${cx} ${cy}
            `}
            fill="white"
            filter="url(#butterfly-glow)"
            opacity={0.95}
          />
          {/* Ala interna inferiore destra */}
          <motion.path
            d={`
              M ${cx} ${cy}
              C ${cx + vw * 0.04} ${cy + vh * 0.05}
                ${cx + vw * 0.22} ${cy + vh * 0.38}
                ${cx + vw * 0.36} ${cy + vh * 0.28}
              C ${cx + vw * 0.44} ${cy + vh * 0.16}
                ${cx + vw * 0.32} ${cy - vh * 0.02}
                ${cx} ${cy}
            `}
            fill="white"
            opacity={0.85}
          />
          {/* Nervatura ala destra */}
          <motion.path
            d={`
              M ${cx + 2} ${cy}
              C ${cx + vw * 0.12} ${cy - vh * 0.18}
                ${cx + vw * 0.28} ${cy - vh * 0.32}
                ${cx + vw * 0.38} ${cy - vh * 0.28}
            `}
            stroke="rgba(0,0,0,0.3)"
            strokeWidth={1}
            fill="none"
          />
        </motion.g>

        {/* ── Corpo centrale ── */}
        <ellipse
          cx={cx}
          cy={cy}
          rx={size * 0.018}
          ry={size * 0.12}
          fill="white"
          filter="url(#butterfly-glow-strong)"
        />
        {/* Testa */}
        <circle
          cx={cx}
          cy={cy - size * 0.13}
          r={size * 0.025}
          fill="white"
          opacity={0.9}
        />
        {/* Antenne */}
        <line
          x1={cx}
          y1={cy - size * 0.14}
          x2={cx - size * 0.06}
          y2={cy - size * 0.26}
          stroke="white"
          strokeWidth={size * 0.006}
          strokeLinecap="round"
          opacity={0.7}
        />
        <line
          x1={cx}
          y1={cy - size * 0.14}
          x2={cx + size * 0.06}
          y2={cy - size * 0.26}
          stroke="white"
          strokeWidth={size * 0.006}
          strokeLinecap="round"
          opacity={0.7}
        />
        {/* Pallini antenne */}
        <circle cx={cx - size * 0.06} cy={cy - size * 0.26} r={size * 0.012} fill="white" opacity={0.8} />
        <circle cx={cx + size * 0.06} cy={cy - size * 0.26} r={size * 0.012} fill="white" opacity={0.8} />
      </svg>

      {/* ── Particelle trail ── */}
      {showParticles && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <Particle key={i} index={i} />
          ))}
        </div>
      )}
    </motion.div>
  );
}
