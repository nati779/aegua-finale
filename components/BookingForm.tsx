"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, User, Users, FileText, ChevronRight } from "lucide-react";
import type { Serata } from "@/lib/serate";

interface BookingFormProps {
  serata: Serata;
}

interface FormData {
  nome: string;
  cognome: string;
  persone: string;
  note: string;
}

// ─── Form prenotazione ─────────────────────────────────────────────────────────
export default function BookingForm({ serata }: BookingFormProps) {
  const [form, setForm] = useState<FormData>({
    nome: "",
    cognome: "",
    persone: "2",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Costruisce link WhatsApp precompilato
  const handleSubmit = () => {
    const msg = encodeURIComponent(
      `Ciao! Vorrei prenotare per la serata *${serata.nome}* — ${serata.dataFormattata}.\n\n` +
        `Nome: ${form.nome} ${form.cognome}\n` +
        `Persone: ${form.persone}\n` +
        `Note: ${form.note || "Nessuna"}\n\n` +
        `Grazie!`
    );
    window.open(`https://wa.me/390212345678?text=${msg}`, "_blank");
  };

  const inputClass =
    "w-full bg-transparent border border-white/10 hover:border-white/25 focus:border-white/50 text-white text-sm px-4 py-3.5 outline-none transition-all duration-300 placeholder-white/20";

  const labelClass =
    "block text-[10px] tracking-[0.3em] text-white/35 uppercase mb-2";

  return (
    <div className="border border-white/8 p-8 md:p-10 relative">
      {/* Corner decoration */}
      <div className="absolute top-0 left-0 w-8 h-8">
        <div className="absolute top-0 left-0 w-full h-px bg-white/40" />
        <div className="absolute top-0 left-0 w-px h-full bg-white/40" />
      </div>
      <div className="absolute bottom-0 right-0 w-8 h-8">
        <div className="absolute bottom-0 right-0 w-full h-px bg-white/40" />
        <div className="absolute bottom-0 right-0 w-px h-full bg-white/40" />
      </div>

      <h3
        className="text-xl font-black text-white tracking-tight mb-8"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Prenota per questa serata
      </h3>

      <div className="space-y-5">
        {/* Nome + Cognome */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Nome</label>
            <div className="relative">
              <User
                size={12}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"
              />
              <input
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Mario"
                className={`${inputClass} pl-10`}
                style={{ fontFamily: "var(--font-body)" }}
              />
            </div>
          </div>
          <div>
            <label className={labelClass}>Cognome</label>
            <input
              name="cognome"
              value={form.cognome}
              onChange={handleChange}
              placeholder="Rossi"
              className={inputClass}
              style={{ fontFamily: "var(--font-body)" }}
            />
          </div>
        </div>

        {/* Numero persone */}
        <div>
          <label className={labelClass}>Numero di persone</label>
          <div className="relative">
            <Users
              size={12}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"
            />
            <select
              name="persone"
              value={form.persone}
              onChange={handleChange}
              className={`${inputClass} pl-10 cursor-pointer appearance-none`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((n) => (
                <option
                  key={n}
                  value={String(n)}
                  style={{ background: "#111", color: "#fff" }}
                >
                  {n} {n === 1 ? "persona" : "persone"}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Data (readonly) */}
        <div>
          <label className={labelClass}>Data confermata</label>
          <input
            value={serata.dataFormattata}
            readOnly
            className={`${inputClass} text-white/40 cursor-default`}
            style={{ fontFamily: "var(--font-body)" }}
          />
        </div>

        {/* Note */}
        <div>
          <label className={labelClass}>Note (opzionale)</label>
          <div className="relative">
            <FileText
              size={12}
              className="absolute left-4 top-4 text-white/20"
            />
            <textarea
              name="note"
              value={form.note}
              onChange={handleChange}
              placeholder="Tavolo, occasione speciale, richieste particolari..."
              rows={3}
              className={`${inputClass} pl-10 resize-none`}
              style={{ fontFamily: "var(--font-body)" }}
            />
          </div>
        </div>

        {/* Submit */}
        <motion.button
          onClick={handleSubmit}
          whileHover={{
            scale: 1.01,
            boxShadow:
              "0 0 30px rgba(255,255,255,0.1), 0 0 60px rgba(255,255,255,0.04)",
          }}
          whileTap={{ scale: 0.98 }}
          className="
            w-full mt-3 py-4 bg-white text-black
            text-xs tracking-[0.3em] uppercase font-bold
            flex items-center justify-center gap-3
            hover:bg-white/90 transition-all duration-300
            group relative overflow-hidden
          "
          style={{ fontFamily: "var(--font-body)" }}
        >
          <MessageCircle size={14} />
          Prenota via WhatsApp
          <ChevronRight
            size={14}
            className="group-hover:translate-x-1 transition-transform duration-300"
          />
        </motion.button>

        <p
          className="text-center text-[10px] text-white/20 tracking-wide"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Verrai reindirizzato su WhatsApp con il messaggio precompilato
        </p>
      </div>
    </div>
  );
}
