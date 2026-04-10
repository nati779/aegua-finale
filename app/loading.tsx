export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Butterfly SVG animata (pure CSS per server component) */}
        <svg
          width="80"
          height="56"
          viewBox="0 0 80 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ animation: "strobo-pulse 1s ease-in-out infinite" }}
        >
          {/* Ala sinistra */}
          <path
            d="M40 28 C38 23 32 10 18 14 C11 17 14 26 40 28Z"
            fill="white"
            opacity="0.9"
          />
          <path
            d="M40 28 C38 31 28 43 18 38 C11 34 20 27 40 28Z"
            fill="white"
            opacity="0.8"
          />
          {/* Ala destra */}
          <path
            d="M40 28 C42 23 48 10 62 14 C69 17 66 26 40 28Z"
            fill="white"
            opacity="0.9"
          />
          <path
            d="M40 28 C42 31 52 43 62 38 C69 34 60 27 40 28Z"
            fill="white"
            opacity="0.8"
          />
          {/* Corpo */}
          <ellipse cx="40" cy="28" rx="1.5" ry="9" fill="white" />
        </svg>
        <span
          className="text-[10px] tracking-[0.4em] text-white/20 uppercase"
          style={{ fontFamily: "var(--font-mono, monospace)" }}
        >
          Caricamento
        </span>
      </div>
    </div>
  );
}
