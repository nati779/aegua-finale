import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import SerateSection from "@/components/SerateSection";
import PrenotaContatti from "@/components/PrenotaContatti";

// ─── Home Page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <ManifestoSection />
      <SerateSection />
      <PrenotaContatti />
    </main>
  );
}
