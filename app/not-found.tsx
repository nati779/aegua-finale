import Link from "next/link";
import Butterfly from "@/components/Butterfly";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-6 text-center">
      <Butterfly size={120} animated={true} heroMode={false} />
      <h1
        className="mt-10 text-6xl md:text-8xl font-black text-white tracking-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        404
      </h1>
      <p
        className="mt-4 text-white/30 text-sm tracking-[0.25em] uppercase"
        style={{ fontFamily: "var(--font-body)" }}
      >
        Questa pagina non esiste
      </p>
      <Link
        href="/"
        className="mt-10 text-xs tracking-[0.3em] uppercase text-white/40 hover:text-white border border-white/10 hover:border-white/40 px-8 py-3 transition-all duration-300"
        style={{ fontFamily: "var(--font-body)" }}
      >
        Torna alla home
      </Link>
    </main>
  );
}
