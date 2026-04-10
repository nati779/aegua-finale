"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Users, Star } from "lucide-react";
import type { Serata } from "@/lib/serate";

interface SerataCardProps {
  serata: Serata;
  index?: number;
}

export default function SerataCard({ serata, index = 0 }: SerataCardProps) {
  return (
    <Link href={`/serate/${serata.slug}`} className="block group">
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.7,
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={{
          y: -6,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        className="
          relative border border-white/8 bg-gradient-to-b from-white/[0.02] to-transparent
          p-7 md:p-8 h-full flex flex-col gap-5 cursor-pointer
          transition-all duration-500
          hover:border-white/25
          overflow-hidden
        "
      >
        {/* Glow strobo border al hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)",
          }}
        />

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-white/30 to-transparent group-hover:from-white/60 transition-all duration-500" />
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-white/30 to-transparent group-hover:from-white/60 transition-all duration-500" />
        </div>

        {/* Numero serata */}
        <div className="flex items-start justify-between">
          <span
            className="text-[10px] tracking-[0.35em] text-white/20 uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {String(index + 1).padStart(2, "0")} / Serata
          </span>
          <span
            className="text-[10px] tracking-[0.2em] text-white/25 uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {serata.genere.split("/")[0].trim()}
          </span>
        </div>

        {/* Nome e tagline */}
        <div className="flex-1">
          <h3
            className="font-black text-white text-2xl md:text-3xl leading-tight tracking-tight group-hover:text-strobo transition-all duration-300"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {serata.nome}
          </h3>
          <p
            className="mt-2 text-white/40 text-sm italic"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {serata.tagline}
          </p>
          <p
            className="mt-3 text-white/55 text-sm leading-relaxed line-clamp-2"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {serata.descrizione}
          </p>
        </div>

        {/* Artisti principali */}
        <div className="flex flex-wrap gap-2">
          {serata.artisti.slice(0, 3).map((a) => (
            <span
              key={a.nome}
              className="text-[10px] tracking-[0.15em] uppercase text-white/40 border border-white/10 px-2 py-1"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {a.nome}
            </span>
          ))}
          {serata.artisti.length > 3 && (
            <span
              className="text-[10px] tracking-[0.15em] uppercase text-white/25 px-2 py-1"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              +{serata.artisti.length - 3}
            </span>
          )}
        </div>

        {/* Meta info */}
        <div className="flex flex-wrap gap-4 pt-3 border-t border-white/6">
          <div className="flex items-center gap-1.5">
            <Clock size={11} className="text-white/25" />
            <span
              className="text-[11px] text-white/40 tracking-wider"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {serata.dataFormattata}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users size={11} className="text-white/25" />
            <span
              className="text-[11px] text-white/40 tracking-wider"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {serata.dresscode}
            </span>
          </div>
        </div>

        {/* CTA arrow */}
        <motion.div
          className="flex items-center gap-2 text-white/30 group-hover:text-white/70 transition-colors duration-300"
          whileHover={{ x: 4 }}
        >
          <span
            className="text-[10px] tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Scopri
          </span>
          <motion.span
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            →
          </motion.span>
        </motion.div>
      </motion.article>
    </Link>
  );
}
