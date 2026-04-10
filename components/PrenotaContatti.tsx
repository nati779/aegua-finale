"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Crown } from "lucide-react";
import Reveal from "./Reveal";

// ─── Contatti ─────────────────────────────────────────────────────────────────
const contatti = [
  {
    label: "Info",
    numero: "+39 02 1234 5678",
    href: "tel:+390212345678",
    icon: Phone,
    desc: "Informazioni generali",
  },
  {
    label: "Prenotazioni",
    numero: "+39 02 9876 5432",
    href: "tel:+390298765432",
    icon: MessageCircle,
    desc: "Tavoli e ingressi",
  },
  {
    label: "VIP & Table Service",
    numero: "+39 338 000 1111",
    href: "tel:+393380001111",
    icon: Crown,
    desc: "Esperienze esclusive",
  },
];

// ─── Componente ───────────────────────────────────────────────────────────────
export default function PrenotaContatti() {
  return (
    <section id="prenota" className="relative py-24 md:py-36 px-6">
      {/* Linea separatore */}
      <div className="max-w-7xl mx-auto">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24" />

        {/* Prenotazione rapida */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center mb-28">
          <Reveal>
            <div>
              <p
                className="text-[10px] tracking-[0.4em] text-white/25 uppercase mb-4"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Prenotazione Rapida
              </p>
              <h2
                className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-white mb-5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Riserva il tuo
                <br />
                <span className="text-white/30">posto stanotte</span>
              </h2>
              <p
                className="text-white/40 text-sm leading-relaxed max-w-sm"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Scegli una serata specifica per prenotare direttamente via
                WhatsApp, oppure contattaci per informazioni su ingressi,
                tavoli e pacchetti VIP.
              </p>
            </div>
          </Reveal>

          {/* Card CTA */}
          <Reveal delay={0.2}>
            <motion.a
              href="https://wa.me/390212345678?text=Ciao!%20Vorrei%20prenotare%20per%20una%20serata%20all'Aegua."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.02,
                boxShadow:
                  "0 0 50px rgba(255,255,255,0.08), 0 0 100px rgba(255,255,255,0.03)",
              }}
              whileTap={{ scale: 0.98 }}
              className="
                block border border-white/10 hover:border-white/30
                p-10 transition-all duration-500 group relative overflow-hidden
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <MessageCircle
                size={32}
                className="text-white/20 group-hover:text-white/50 transition-colors duration-300 mb-6"
              />
              <p
                className="text-2xl font-black text-white tracking-tight mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Prenota via WhatsApp
              </p>
              <p
                className="text-white/35 text-sm"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Risposta garantita entro 2 ore
              </p>
              <div className="mt-8 flex items-center gap-2 text-white/30 group-hover:text-white/60 transition-colors duration-300">
                <span
                  className="text-xs tracking-[0.3em] uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Apri WhatsApp
                </span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.span>
              </div>
            </motion.a>
          </Reveal>
        </div>

        {/* Contatti telefono */}
        <div id="contatti">
          <Reveal>
            <p
              className="text-[10px] tracking-[0.4em] text-white/25 uppercase mb-10"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Linee dirette
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {contatti.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                className="bg-black p-8 group border border-transparent hover:border-white/10 transition-all duration-400 block"
              >
                <c.icon
                  size={20}
                  className="text-white/20 group-hover:text-white/50 mb-5 transition-colors duration-300"
                />
                <p
                  className="text-[10px] tracking-[0.3em] text-white/25 uppercase mb-2"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {c.label}
                </p>
                <p
                  className="text-white text-xl md:text-2xl font-medium tracking-wide mb-1 group-hover:text-strobo"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {c.numero}
                </p>
                <p
                  className="text-white/30 text-xs"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {c.desc}
                </p>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-[10px] tracking-[0.25em] text-white/15 uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            © 2025 Aegua New Club. All rights reserved.
          </p>
          <p
            className="text-[10px] tracking-[0.25em] text-white/15 uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Via della Notte 1 — Milano
          </p>
        </div>
      </div>
    </section>
  );
}
