import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Clock, Shirt, Music, Euro, Star } from "lucide-react";

import { getSerata, getAltreSerate } from "@/lib/serate";
import Navbar from "@/components/Navbar";
import BookingForm from "@/components/BookingForm";
import SerataCard from "@/components/SerataCard";
import Butterfly from "@/components/Butterfly";

// ─── Params ───────────────────────────────────────────────────────────────────
interface Props {
  params: Promise<{ slug: string }>;
}

// ─── Metadata dinamica ────────────────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const serata = getSerata(slug);
  if (!serata) return { title: "Serata non trovata — AEGUA" };
  return {
    title: `${serata.nome} — AEGUA NEW CLUB`,
    description: serata.descrizione,
  };
}

// ─── Pagina ───────────────────────────────────────────────────────────────────
export default async function SerataPage({ params }: Props) {
  const { slug } = await params;
  const serata = getSerata(slug);

  if (!serata) notFound();

  const altre = getAltreSerate(slug);

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* ── Hero serata ── */}
      <section className="relative pt-32 pb-20 px-6 border-b border-white/5">
        {/* Background radial */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/30 hover:text-white transition-colors duration-300 mb-16 group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform duration-300"
            />
            <span
              className="text-[11px] tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Tutte le serate
            </span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Testo */}
            <div>
              <p
                className="text-[10px] tracking-[0.4em] text-white/25 uppercase mb-5"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {serata.genere}
              </p>
              <h1
                className="text-5xl md:text-7xl xl:text-8xl font-black leading-none tracking-tight text-white mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {serata.nome}
              </h1>
              <p
                className="text-xl text-white/40 italic mb-8 font-light"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {serata.tagline}
              </p>
              <p
                className="text-white/55 text-base leading-relaxed max-w-lg"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {serata.descrizioneEstesa}
              </p>

              {/* Info cards */}
              <div className="grid grid-cols-2 gap-3 mt-10">
                {[
                  { icon: Clock, label: "Data", val: serata.dataFormattata },
                  {
                    icon: Clock,
                    label: "Orario",
                    val: `${serata.oraApertura} – ${serata.oraChiusura}`,
                  },
                  { icon: Shirt, label: "Dress Code", val: serata.dresscode },
                  {
                    icon: Euro,
                    label: "Ingresso",
                    val: serata.prezzoIngresso || "Info su richiesta",
                  },
                  ...(serata.prezzoTavolo
                    ? [
                        {
                          icon: Star,
                          label: "Tavolo VIP",
                          val: serata.prezzoTavolo,
                        },
                      ]
                    : []),
                ].map(({ icon: Icon, label, val }) => (
                  <div
                    key={label}
                    className="border border-white/6 p-4 hover:border-white/15 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Icon size={10} className="text-white/25" />
                      <span
                        className="text-[9px] tracking-[0.3em] text-white/25 uppercase"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {label}
                      </span>
                    </div>
                    <p
                      className="text-white text-sm font-medium"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {val}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Butterfly + Form */}
            <div className="flex flex-col gap-10">
              {/* Butterfly decorativa */}
              <div className="flex justify-center lg:justify-end">
                <Butterfly size={180} animated={true} heroMode={false} />
              </div>

              {/* Booking form */}
              <BookingForm serata={serata} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Lineup ── */}
      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <Music size={14} className="text-white/25" />
            <h2
              className="text-[10px] tracking-[0.4em] text-white/25 uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Lineup completa
            </h2>
          </div>

          <div className="space-y-px">
            {serata.artisti.map((artista, i) => (
              <div
                key={artista.nome}
                className="
                  flex items-center justify-between
                  py-5 px-6 border border-white/5
                  hover:border-white/15 hover:bg-white/[0.01]
                  transition-all duration-300 group
                "
              >
                <div className="flex items-center gap-6">
                  <span
                    className="text-[10px] text-white/15 w-6 shrink-0"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p
                      className="text-white font-semibold text-lg group-hover:text-strobo transition-all"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {artista.nome}
                    </p>
                    <p
                      className="text-white/30 text-xs mt-0.5"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {artista.ruolo}
                    </p>
                  </div>
                </div>
                {artista.orario && (
                  <span
                    className="text-white/25 text-sm shrink-0"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {artista.orario}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-10">
            {serata.tag.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-[0.2em] uppercase text-white/20 border border-white/8 px-3 py-1.5"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Altre serate ── */}
      {altre.length > 0 && (
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <p
              className="text-[10px] tracking-[0.4em] text-white/25 uppercase mb-10"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Altre serate
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
              {altre.map((s, i) => (
                <div key={s.slug} className="bg-black">
                  <SerataCard serata={s} index={i} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
