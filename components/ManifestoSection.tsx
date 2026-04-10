"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

// ─── Manifesto / About section ────────────────────────────────────────────────
export default function ManifestoSection() {
  return (
    <section className="relative py-28 md:py-40 px-6 overflow-hidden">
      {/* Background line */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <Reveal>
          <p
            className="text-[10px] tracking-[0.5em] text-white/15 uppercase mb-8"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Il nostro manifesto
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <blockquote
            className="text-[clamp(1.6rem,4vw,3.2rem)] font-light leading-[1.25] text-white/70 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            "Il club non è un luogo.{" "}
            <span className="text-white font-bold">È uno stato mentale.</span>
            <br />
            Dove il corpo smette di pensare
            <br />e{" "}
            <span className="text-white font-bold">
              la musica prende il controllo.
            </span>
            "
          </blockquote>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 flex items-center justify-center gap-6">
            <div className="h-px w-16 bg-white/10" />
            <span
              className="text-[10px] tracking-[0.35em] text-white/20 uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Aegua New Club — Dal 2019
            </span>
            <div className="h-px w-16 bg-white/10" />
          </div>
        </Reveal>

        {/* 3 numeri impatto */}
        <div className="mt-20 grid grid-cols-3 gap-8 md:gap-16">
          {[
            { num: "300+", label: "Serate" },
            { num: "50k+", label: "Persone" },
            { num: "12", label: "Artisti Int'l" },
          ].map(({ num, label }, i) => (
            <Reveal key={label} delay={0.1 * i}>
              <div className="flex flex-col items-center gap-2">
                <span
                  className="text-3xl md:text-5xl font-black text-white text-strobo"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {num}
                </span>
                <span
                  className="text-[10px] tracking-[0.3em] text-white/20 uppercase"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
