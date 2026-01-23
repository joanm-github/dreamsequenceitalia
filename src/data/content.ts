// ============================================
// CONTINGUT EDITABLE - CMS SIMPLE
// Modifica aquest fitxer per actualitzar el contingut de la web
// ============================================

// Album cover imports
import albumZeitstrom from "@/assets/album-zeitstrom.jpg";
import albumKristallnacht from "@/assets/album-kristallnacht.jpg";
import albumElektrische from "@/assets/album-elektrische.jpg";
import albumMorgenrot from "@/assets/album-morgenrot.jpg";

export interface Disc {
  id: string;
  title: string;
  year: number;
  coverImage: string;
  description: string;
  tracklist: string[];
  listenLinks?: {
    spotify?: string;
    bandcamp?: string;
    youtube?: string;
  };
  notes?: string;
}

export interface Concert {
  id: string;
  date: string;
  venue: string;
  city: string;
  country: string;
  notes?: string;
  tourName?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  era: string;
  year?: number;
  caption?: string;
}

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  type: 'formation' | 'album' | 'tour' | 'milestone';
}

export interface MerchItem {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: string;
  available: boolean;
}

// ============================================
// INFORMACIÓ GENERAL
// ============================================
export const siteConfig = {
  bandName: "KOSMISCHE WELLE",
  tagline: "Paisatges Sonors Electrònics des de 1972",
  manifesto: "En les profunditats dels circuits analògics, on el silici somia en ones sinusoïdals, vam descobrir un nou territori sonor. No música, sinó atmosferes. No melodies, sinó horitzons.",
  description: "Pioners de la música electrònica ambiental, explorant els límits del so des dels anys 70.",
};

// ============================================
// BIOGRAFIA - LÍNIA TEMPORAL
// ============================================
export const timeline: TimelineEvent[] = [
  {
    year: 1972,
    title: "Formació a Berlín",
    description: "Klaus Richter i Hans Zimmermann es troben en un estudi improvisat a Kreuzberg. Amb un Minimoog, un Mellotron i cintes magnètiques, comencen a experimentar amb paisatges sonors.",
    type: "formation"
  },
  {
    year: 1973,
    title: "Primer àlbum: Zeitstrom",
    description: "Gravat en directe durant una nit de gener. Les cintes capturen quatre hores de improvisació que es condensen en el seu debut revelador.",
    type: "album"
  },
  {
    year: 1974,
    title: "S'uneix Petra Voss",
    description: "La violoncel·lista experimental Petra Voss aporta textures orgàniques al so electrònic, creant un diàleg únic entre acústic i sintètic.",
    type: "formation"
  },
  {
    year: 1975,
    title: "Nebel über Europa Tour",
    description: "Primera gira europea. 23 concerts en catedrals, planetaris i espais industrials abandonats. El públic descobreix una nova forma d'escoltar.",
    type: "tour"
  },
  {
    year: 1976,
    title: "Kristallnacht",
    description: "Àlbum conceptual gravat amb el nou sintetitzador ARP 2600. Considerat la seva obra mestra, influenciarà generacions d'artistes.",
    type: "album"
  },
  {
    year: 1977,
    title: "Residència al Planetari de Munic",
    description: "Durant sis mesos, el grup crea bandes sonores per a projeccions astronòmiques, fusionant imatge i so d'una manera pionera.",
    type: "milestone"
  },
  {
    year: 1978,
    title: "Elektrische Träume",
    description: "Triple àlbum que documenta els concerts al planetari. Inclou les primeres experimentacions amb seqüenciadors modulars.",
    type: "album"
  },
  {
    year: 1979,
    title: "Gira japonesa",
    description: "Actuacions a Tòquio, Osaka i Kyoto. Connexió amb músics japonesos que influiran en el so de la dècada següent.",
    type: "tour"
  },
];

// ============================================
// DISCOGRAFIA
// ============================================
export const discography: Disc[] = [
  {
    id: "zeitstrom",
    title: "Zeitstrom",
    year: 1973,
    coverImage: albumZeitstrom,
    description: "El debut que va redefinir els límits de la música electrònica. Gravat en una sola nit gelada de gener, Zeitstrom captura la essència de la improvisació cósmica.",
    tracklist: [
      "Erwachen (12:34)",
      "Stromschnellen (18:22)",
      "Zeitgeist I (8:45)",
      "Nebelschwaden (15:08)",
      "Zeitgeist II (9:56)"
    ],
    notes: "Gravat amb Minimoog Model D, Mellotron M400, EMS VCS3 i cintes Revox A77.",
    listenLinks: {
      spotify: "#",
      bandcamp: "#"
    }
  },
  {
    id: "kristallnacht",
    title: "Kristallnacht",
    year: 1976,
    coverImage: albumKristallnacht,
    description: "Obra mestra conceptual que explora la fragilitat i la ressonància. Cada peça és un estudi sobre textures cristal·lines i ecos infinits.",
    tracklist: [
      "Prisma (10:23)",
      "Refraktion (14:45)",
      "Scherbenmeer (20:12)",
      "Lichtbrechung (8:34)",
      "Diamantstaub (16:58)"
    ],
    notes: "Primer àlbum gravat amb l'ARP 2600 i tècniques de delay experimental.",
    listenLinks: {
      spotify: "#",
      youtube: "#"
    }
  },
  {
    id: "elektrische-traume",
    title: "Elektrische Träume",
    year: 1978,
    coverImage: albumElektrische,
    description: "Triple àlbum que documenta la residència al Planetari de Munic. Sons que acompanyaven projeccions d'estrelles i galàxies.",
    tracklist: [
      "Disc 1: Sternennebel (45:23)",
      "Disc 2: Galaxienflug (42:18)",
      "Disc 3: Kosmische Stille (48:56)"
    ],
    notes: "Gravació en directe durant les projeccions. Inclou sons de seqüenciador modular Roland System 100.",
    listenLinks: {
      bandcamp: "#"
    }
  },
  {
    id: "morgenrot",
    title: "Morgenrot",
    year: 1979,
    coverImage: albumMorgenrot,
    description: "Influenciat per la gira japonesa, aquest àlbum incorpora silencis més llargs i una sensibilitat zen en les estructures.",
    tracklist: [
      "Erste Licht (11:45)",
      "Tau (8:23)",
      "Horizont (19:34)",
      "Stille Wasser (14:12)",
      "Aufgang (12:08)"
    ],
    notes: "Col·laboració amb el mestre de shakuhachi Yoshida Minoru.",
  },
];

// ============================================
// CONCERTS HISTÒRICS
// ============================================
export const concerts: Concert[] = [
  { id: "c1", date: "1975-03-15", venue: "Catedral de Colònia", city: "Colònia", country: "Alemanya", tourName: "Nebel über Europa", notes: "Concert inaugural de la gira" },
  { id: "c2", date: "1975-03-22", venue: "Paradiso", city: "Amsterdam", country: "Països Baixos", tourName: "Nebel über Europa" },
  { id: "c3", date: "1975-04-05", venue: "Roundhouse", city: "Londres", country: "Regne Unit", tourName: "Nebel über Europa", notes: "Sold out en 2 hores" },
  { id: "c4", date: "1975-04-12", venue: "Olympia", city: "París", country: "França", tourName: "Nebel über Europa" },
  { id: "c5", date: "1976-09-20", venue: "Berliner Philharmonie", city: "Berlín", country: "Alemanya", notes: "Presentació de Kristallnacht" },
  { id: "c6", date: "1977-01-10", venue: "Planetari de Munic", city: "Munic", country: "Alemanya", notes: "Inici de la residència" },
  { id: "c7", date: "1978-11-08", venue: "Shibuya Kokaido", city: "Tòquio", country: "Japó", tourName: "Eastern Horizons" },
  { id: "c8", date: "1978-11-15", venue: "Festival Hall", city: "Osaka", country: "Japó", tourName: "Eastern Horizons" },
  { id: "c9", date: "1978-11-22", venue: "Kyoto Concert Hall", city: "Kyoto", country: "Japó", tourName: "Eastern Horizons", notes: "Concert final de la gira" },
  { id: "c10", date: "1979-06-21", venue: "Solstici d'Estiu", city: "Stonehenge", country: "Regne Unit", notes: "Actuació especial a l'alba" },
];

// ============================================
// GALERIA
// ============================================
export const gallery: GalleryImage[] = [
  { id: "g1", src: "/placeholder.svg", alt: "Klaus Richter al Minimoog, 1973", era: "Primers Anys (1972-1974)", year: 1973, caption: "Klaus durant les sessions de Zeitstrom" },
  { id: "g2", src: "/placeholder.svg", alt: "Estudi de Kreuzberg", era: "Primers Anys (1972-1974)", year: 1972, caption: "L'estudi original a Berlín" },
  { id: "g3", src: "/placeholder.svg", alt: "Concert a la Catedral de Colònia", era: "Era Clàssica (1975-1977)", year: 1975, caption: "Nebel über Europa Tour" },
  { id: "g4", src: "/placeholder.svg", alt: "Petra Voss al violoncel", era: "Era Clàssica (1975-1977)", year: 1976, caption: "Sessions de Kristallnacht" },
  { id: "g5", src: "/placeholder.svg", alt: "Planetari de Munic", era: "Era Clàssica (1975-1977)", year: 1977, caption: "Residència al planetari" },
  { id: "g6", src: "/placeholder.svg", alt: "Gira japonesa", era: "Expansió (1978-1979)", year: 1978, caption: "Backstage a Tòquio" },
  { id: "g7", src: "/placeholder.svg", alt: "Equip del grup", era: "Expansió (1978-1979)", year: 1979, caption: "El setup complet: ARP, Moog, Roland" },
  { id: "g8", src: "/placeholder.svg", alt: "Stonehenge", era: "Expansió (1978-1979)", year: 1979, caption: "Solstici d'estiu" },
];

// ============================================
// MERCH
// ============================================
export const merchItems: MerchItem[] = [
  {
    id: "m1",
    name: "Samarreta Zeitstrom",
    description: "Samarreta negra amb el logo original de 1973. 100% cotó orgànic.",
    image: "/placeholder.svg",
    price: "35€",
    available: true
  },
  {
    id: "m2",
    name: "Vinil Kristallnacht (Reedició)",
    description: "Edició limitada remasteritzada des de les cintes originals. Vinil 180g.",
    image: "/placeholder.svg",
    price: "45€",
    available: true
  },
  {
    id: "m3",
    name: "Pòster Nebel Tour 1975",
    description: "Reproducció del pòster original de la gira. 60x90cm, paper d'arxiu.",
    image: "/placeholder.svg",
    price: "25€",
    available: false
  },
];

// ============================================
// TEXTOS DE PÀGINA
// ============================================
export const pageTexts = {
  biography: {
    intro: "KOSMISCHE WELLE va néixer de la confluència de tecnologia i visió artística en el Berlín dels anys 70. En una ciutat dividida, tres músics van trobar en els sintetitzadors una via d'exploració sense fronteres.",
    outro: "El llegat del grup continua influenciant generacions de músics electrònics, des de l'ambient fins al techno, demostrant que la recerca sonora no coneix límits temporals."
  },
  discography: {
    intro: "Cada àlbum és un viatge, cada pista un paisatge. Aquí trobareu el catàleg complet de les nostres expedicions sonores."
  },
  concerts: {
    intro: "Arxiu històric de totes les actuacions del grup. Cada concert era únic, una improvisació irrepetible en el temps i l'espai."
  },
  gallery: {
    intro: "Imatges que capturen moments de creació, actuació i experimentació. Documents visuals d'una era de descobriment sonor."
  },
  merch: {
    intro: "Articles oficials per als qui volen portar un tros d'història. Disponibilitat limitada.",
    contact: "Per a comandes especials o consultes: merch@kosmischewelle.com"
  }
};
