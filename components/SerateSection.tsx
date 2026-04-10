"use client";

import Reveal from "./Reveal";
import SerataCard from "./SerataCard";
import { serate } from "@/lib/serate";

export default function SerateSection() {
  return (
    <section id="serate" className="relative py-24 md:py-36 px-6">
      {/* Sezione header */}
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p
                className="text-[10px] tracking-[0.4em] text-white/25 uppercase mb-4"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Calendario 2025
              </p>
              <h2
                className="text-4xl md:text-6xl font-black leading-none tracking-tight text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Serate che restano
                <br />
                <span className="text-white/30">nella memoria</span>
              </h2>
            </div>
            <p
              className="text-sm text-white/35 max-w-xs md:text-right leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Ogni venerdì e sabato, l'Aegua si trasforma. Scegli la tua
              notte.
            </p>
          </div>
        </Reveal>

        {/* Grid serate */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {serate.map((serata, i) => (
            <div key={serata.slug} className="bg-black">
              <SerataCard serata={serata} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
