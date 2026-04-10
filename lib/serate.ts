// lib/serate.ts
// ─── Dati delle serate Aegua New Club ─────────────────────────────────────────

export interface Artista {
  nome: string;
  ruolo: string; // es. "DJ Set", "Live", "MC"
  orario?: string;
}

export interface Serata {
  slug: string;
  nome: string;
  tagline: string;
  descrizione: string;
  descrizioneEstesa: string;
  data: string; // ISO date string
  dataFormattata: string;
  oraApertura: string;
  oraChiusura: string;
  dresscode: string;
  genere: string;
  coloreAccento: string; // per differenziare visivamente ogni serata
  artisti: Artista[];
  prezzoIngresso?: string;
  prezzoTavolo?: string;
  tag: string[];
}

export const serate: Serata[] = [
  {
    slug: "trap-night-vol-7",
    nome: "TRAP NIGHT VOL.7",
    tagline: "Il buio parla solo trap.",
    descrizione:
      "Sette capitoli. Una sola legge: la bassline comanda. Il club si trasforma in qualcosa di primordiale.",
    descrizioneEstesa:
      "Trap Night Volume 7 è il capitolo definitivo di una saga nata per scardinare ogni senso di realtà. I sub-bass perforano il petto, i 808 disegnano geometrie nell'aria, le luci tagliano l'oscurità come lame. Non è una serata. È un rito collettivo per chi sa che la musica più oscura nasconde la luce più pura. DJ lineup da Atlanta a Berlino, passando per le strade di Milano. L'Aegua non ha pietà.",
    data: "2025-05-10",
    dataFormattata: "Sabato 10 Maggio 2025",
    oraApertura: "23:00",
    oraChiusura: "06:00",
    dresscode: "All Black / Streetwear Premium",
    genere: "Trap / Hip-Hop / Dark Electronic",
    coloreAccento: "#4a4a4a",
    artisti: [
      { nome: "BLNKO", ruolo: "DJ Set", orario: "23:00 – 01:00" },
      { nome: "SVRGE", ruolo: "DJ Set", orario: "01:00 – 02:30" },
      { nome: "KAVALI", ruolo: "Live", orario: "02:30 – 03:30" },
      { nome: "ØBSCVR", ruolo: "DJ Set", orario: "03:30 – 06:00" },
    ],
    prezzoIngresso: "15€ (early) / 20€ (standard)",
    prezzoTavolo: "Da 200€",
    tag: ["trap", "hip-hop", "dark", "bassline"],
  },
  {
    slug: "pop-invasion",
    nome: "POP INVASION",
    tagline: "Il pop non chiede permesso.",
    descrizione:
      "Le hit che ami, i remix che non ti aspetti. Una notte che trasforma ogni canzone in un inno collettivo.",
    descrizioneEstesa:
      "POP INVASION è la risposta al caos: tutto ciò che conosci, remixato fino all'irriconoscibile, riportato a casa con una verità nuova. Dal pop italiano ai banger internazionali, ogni traccia è scelta per creare quel momento esatto in cui mille persone diventano una voce sola. I nostri resident DJ demoliscono il muro tra mainstream e underground. Vieni a cantare qualcosa che non sapevi di conoscere.",
    data: "2025-05-17",
    dataFormattata: "Sabato 17 Maggio 2025",
    oraApertura: "23:00",
    oraChiusura: "05:30",
    dresscode: "Vibe libero / Colorato / Audace",
    genere: "Pop / Dance / Remix Culture",
    coloreAccento: "#5a5a5a",
    artisti: [
      { nome: "LENA VIBES", ruolo: "DJ Set", orario: "23:00 – 01:00" },
      {
        nome: "MARCO SOLANO",
        ruolo: "DJ Set + Vocalist",
        orario: "01:00 – 02:30",
      },
      { nome: "KIRA FLASH", ruolo: "DJ Set", orario: "02:30 – 04:00" },
      { nome: "RESIDENTS CLOSING", ruolo: "DJ Set", orario: "04:00 – 05:30" },
    ],
    prezzoIngresso: "12€ (early) / 18€ (standard)",
    prezzoTavolo: "Da 180€",
    tag: ["pop", "dance", "remix", "mainstream"],
  },
  {
    slug: "buraka-afrobeat-night",
    nome: "BURAKA",
    tagline: "L'Africa non ha bisogno di presentazioni.",
    descrizione:
      "Afrobeat, Afrohouse e Amapiano. Il corpo sa già cosa fare – lascialo andare.",
    descrizioneEstesa:
      "BURAKA è il nome. Il concetto è semplice: portare al centro di una città europea l'energia pulsante di Lagos, Johannesburg, Luanda. L'Afrobeat incontra l'House music in un dialogo millenario e contemporaneo allo stesso tempo. I ritmi sono ancestrali, i synth sono digitali, il risultato è qualcosa che parla direttamente al sistema limbico. Artisti internazionali in esclusiva, food e drink afro-fusion, un dress code che celebra il colore e la cultura.",
    data: "2025-05-24",
    dataFormattata: "Sabato 24 Maggio 2025",
    oraApertura: "22:30",
    oraChiusura: "06:00",
    dresscode: "Afro-Chic / Colori / Tessuti Etnici",
    genere: "Afrobeat / Amapiano / Afrohouse",
    coloreAccento: "#6a6a6a",
    artisti: [
      { nome: "DJ KPELLE", ruolo: "DJ Set", orario: "22:30 – 00:30" },
      { nome: "AFROZONE COLLECTIVE", ruolo: "Live", orario: "00:30 – 02:00" },
      { nome: "SIMI AFRO", ruolo: "DJ Set", orario: "02:00 – 04:00" },
      { nome: "KWAME B", ruolo: "DJ Set", orario: "04:00 – 06:00" },
    ],
    prezzoIngresso: "15€ (early) / 22€ (standard)",
    prezzoTavolo: "Da 220€",
    tag: ["afrobeat", "amapiano", "afrohouse", "cultura"],
  },
  {
    slug: "supremo-techno-berlin",
    nome: "SUPREMO",
    tagline: "Berlino non è una città. È uno stato mentale.",
    descrizione:
      "Techno industriale, ipnotica, senza concessioni. Solo per chi non ha paura del buio.",
    descrizioneEstesa:
      "SUPREMO è la serata più oscura del calendario Aegua. Nessun compromesso, nessuna concessione pop, nessuna hit radio. Solo techno pura, distillata nei suoi elementi più essenziali: kick drum, riverbero, vuoto sonoro. Ispirata ai bunker berlinesi, alla filosofia dell'isolamento sensoriale, all'idea che la musica possa essere un portale verso stati alterati di coscienza completamente legali. Il dress code è severo come la musica. Sei pronto?",
    data: "2025-05-31",
    dataFormattata: "Sabato 31 Maggio 2025",
    oraApertura: "00:00",
    oraChiusura: "08:00",
    dresscode: "All Black / Industrial / No Sportswear",
    genere: "Techno / Industrial / Dark Ambient",
    coloreAccento: "#2a2a2a",
    artisti: [
      { nome: "VØID MACHINE", ruolo: "DJ Set", orario: "00:00 – 02:00" },
      { nome: "BRVTALIST", ruolo: "Live AV", orario: "02:00 – 04:00" },
      { nome: "SECTOR 7G", ruolo: "DJ Set", orario: "04:00 – 06:00" },
      { nome: "KRNL", ruolo: "DJ Set", orario: "06:00 – 08:00" },
    ],
    prezzoIngresso: "20€",
    prezzoTavolo: "Da 300€",
    tag: ["techno", "industrial", "berlin", "dark"],
  },
  {
    slug: "latino-special-caliente",
    nome: "CALIENTE",
    tagline: "Il calore non si spiega. Si vive.",
    descrizione:
      "Reggaeton, bachata, salsa moderna. La notte più sensuale dell'anno è tornata.",
    descrizioneEstesa:
      "CALIENTE è l'evento latino definitivo dell'Aegua. Una notte costruita intorno al corpo, al movimento, alla connessione tra le persone. Dal reggaeton più incandescente alla bachata più sensuale, passando per la salsa moderna e la cumbia rivisitata. Due floor distinti per due mood diversi: upstairs il reggaeton urbano, downstairs la bachata romantica. Drink tropicali, performer latini, un'energia che toglie il fiato dal primo momento.",
    data: "2025-06-07",
    dataFormattata: "Sabato 7 Giugno 2025",
    oraApertura: "23:00",
    oraChiusura: "06:00",
    dresscode: "Elegante / Sensuale / Colori Caldi",
    genere: "Reggaeton / Bachata / Salsa / Cumbia",
    coloreAccento: "#7a7a7a",
    artisti: [
      { nome: "DJ FUEGO", ruolo: "DJ Set", orario: "23:00 – 01:00" },
      {
        nome: "VALENTINA & CREW",
        ruolo: "Live Performance",
        orario: "01:00 – 02:00",
      },
      { nome: "RIKO CALIENTE", ruolo: "DJ Set", orario: "02:00 – 04:00" },
      {
        nome: "SALSA COLLECTIVE",
        ruolo: "DJ Set",
        orario: "04:00 – 06:00",
      },
    ],
    prezzoIngresso: "12€ (early) / 18€ (standard)",
    prezzoTavolo: "Da 200€",
    tag: ["reggaeton", "bachata", "latino", "dance"],
  },
];

// ─── Helper per trovare una serata dal slug ───────────────────────────────────
export function getSerata(slug: string): Serata | undefined {
  return serate.find((s) => s.slug === slug);
}

// ─── Helper per ottenere le serate precedenti ─────────────────────────────────
export function getAltreSerate(currentSlug: string): Serata[] {
  return serate.filter((s) => s.slug !== currentSlug).slice(0, 3);
}
