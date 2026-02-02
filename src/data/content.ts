// ============================================
// CONTINGUT EDITABLE - CMS SIMPLE
// Modifica aquest fitxer per actualitzar el contingut de la web
// ============================================

// Album cover imports
import albumAntheris from "@/assets/album-antheris.jpg";
import albumGanymede from "@/assets/album-ganymede.jpg";
import albumNebula from "@/assets/album-nebula.jpg";
import albumNebbia from "@/assets/album-nebbia.png";
import albumSondeAtlantide from "@/assets/album-sonde-atlantide.png";

// Band photos
import bandCathedral from "@/assets/band-cathedral.jpg";
import bandPortrait from "@/assets/band-portrait.jpg";
import bandCasual from "@/assets/band-casual.jpg";
import concertSynths from "@/assets/concert-synths.jpg";

// Tour posters
import posterMilano1973 from "@/assets/poster-milano-1973.jpg";
import posterNewYork1978 from "@/assets/poster-newyork-1978.jpg";
import posterTrieste1976 from "@/assets/poster-trieste-1976.jpg";
import posterAustralasia1978 from "@/assets/poster-australasia-1978.jpg";
import posterBrussels1976 from "@/assets/poster-brussels-1976.jpg";
import posterPortugal1976 from "@/assets/poster-portugal-1976.jpg";
import posterAuckland1974 from "@/assets/poster-auckland-1974.jpg";
import posterScandinavia1975 from "@/assets/poster-scandinavia-1975.jpg";

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
  posterImage?: string;
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
  bandName: "DREAM SEQUENCE",
  tagline: "Paisatges Sonors Electrònics des de 1972",
  manifesto: "En les profunditats dels circuits analògics, on el silici somia en ones sinusoïdals, tres dones van descobrir un nou territori sonor. No música, sinó atmosferes. No melodies, sinó horitzons infinits.",
  description: "Trio femení pioner de la música electrònica ambiental, explorant els límits del so des dels anys 70.",
};

// ============================================
// BIOGRAFIA - LÍNIA TEMPORAL
// ============================================
export const timeline: TimelineEvent[] = [
  {
    year: 1972,
    title: "Formació a Londres",
    description: "Sarah Whitmore, Emma Blackwood i Fiona Gray es troben en un estudi improvisat a Camden. Amb un Minimoog, un Mellotron i cintes magnètiques, comencen a experimentar amb paisatges sonors.",
    type: "formation"
  },
  {
    year: 1973,
    title: "Primer àlbum: Zeitstrom",
    description: "Gravat en directe durant una nit de gener. Les cintes capturen quatre hores d'improvisació que es condensen en el seu debut revelador.",
    type: "album"
  },
  {
    year: 1973,
    title: "Concert a Milà",
    description: "Primera actuació internacional al Teatro Lirico de Milà. El públic italià descobreix el so únic de Dream Sequence.",
    type: "tour"
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
    year: 1976,
    title: "Gira per Portugal",
    description: "Tres concerts històrics a Porto, Lisboa i Coimbra. Connexió especial amb el públic portuguès que influenciarà el so de la dècada següent.",
    type: "tour"
  },
  {
    year: 1977,
    title: "Residència al Planetari de Munic",
    description: "Durant sis mesos, el trio crea bandes sonores per a projeccions astronòmiques, fusionant imatge i so d'una manera pionera.",
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
    id: "antheris",
    title: "Antheris on b.1061 Sequence",
    year: 1973,
    coverImage: albumAntheris,
    description: "El debut visionari que va obrir les portes a nous mons sonors. Una explosió de colors i textures electròniques inspirades en paisatges còsmics.",
    tracklist: [
      "Antheris I (12:34)",
      "Cosmic Garden (18:22)",
      "b.1061 (8:45)",
      "Sequence Prime (15:08)",
      "Antheris II (9:56)"
    ],
    notes: "Gravat amb Minimoog Model D, Mellotron M400, EMS VCS3.",
    listenLinks: {
      spotify: "#",
      bandcamp: "#"
    }
  },
  {
    id: "ganymede",
    title: "Ganymede",
    year: 1975,
    coverImage: albumGanymede,
    description: "Un viatge contemplatiu sobre les aigües infinites. Sons marins i atmosferes etèries que evoquen la immensitat de l'oceà.",
    tracklist: [
      "Horizons (10:23)",
      "Seabirds (14:45)",
      "Deep Blue (20:12)",
      "Calm Waters (8:34)",
      "Ganymede Suite (16:58)"
    ],
    notes: "Gravat amb ARP 2600 i efectes de delay experimental.",
    listenLinks: {
      spotify: "#",
      youtube: "#"
    }
  },
  {
    id: "nebula",
    title: "Nebula",
    year: 1976,
    coverImage: albumNebula,
    description: "Textures profundes i denses com núvols de pols còsmica. Un àlbum que explora les profunditats de l'espai interestelar.",
    tracklist: [
      "Red Giant (15:23)",
      "Stellar Dust (12:18)",
      "Nebula Core (18:56)"
    ],
    notes: "Experimentació amb seqüenciadors modulars Roland System 100.",
    listenLinks: {
      bandcamp: "#"
    }
  },
  {
    id: "nebbia",
    title: "Nebbia",
    year: 1978,
    coverImage: albumNebbia,
    description: "Paisatges sonors de boira i silenci. Influenciat per la natura i la contemplació, un exercici de minimalisme electrònic.",
    tracklist: [
      "Alba (11:45)",
      "Fog (8:23)",
      "Solitude (19:34)",
      "Bare Trees (14:12)",
      "Mist (12:08)"
    ],
    notes: "Sessions contemplatives gravades a la tardor.",
  },
  {
    id: "sonde-atlantide",
    title: "Le Sonde di Atlantide",
    year: 1979,
    coverImage: albumSondeAtlantide,
    description: "Banda sonora per a la RAI italiana. Sons submarins i misteriosos que acompanyaven un documental sobre exploracions oceàniques.",
    tracklist: [
      "Discesa (10:34)",
      "Profondità (15:22)",
      "Atlantide (22:45)",
      "Risalita (8:18)"
    ],
    notes: "Comissió de la RAI per a un documental televisiu. Logo RAI a la portada original.",
    listenLinks: {
      youtube: "#"
    }
  },
];

// ============================================
// CONCERTS HISTÒRICS
// ============================================
export const concerts: Concert[] = [
  // 1973
  { id: "c1", date: "1973-12-07", venue: "Teatro Lirico", city: "Milà", country: "Itàlia", tourName: "Prima Luce Tour", notes: "Concert inaugural internacional. Presentat per Radio Milano Sounds & Promozioni Lombardia", posterImage: posterMilano1973 },
  
  // 1974
  { id: "c2", date: "1974-04-23", venue: "Little Theatre, University of Auckland", city: "Auckland", country: "Nova Zelanda", notes: "Portes 8:30 PM. Patrocinat per Radio New Zealand i Southern Sounds Records", posterImage: posterAuckland1974 },
  
  // 1975 - Scandinavia Tour
  { id: "c3", date: "1975-10-10", venue: "Concert Hall", city: "Copenhagen", country: "Dinamarca", tourName: "Scandinavia Tour 1975", posterImage: posterScandinavia1975 },
  { id: "c4", date: "1975-10-13", venue: "Konserthuset", city: "Stockholm", country: "Suècia", tourName: "Scandinavia Tour 1975", posterImage: posterScandinavia1975 },
  { id: "c5", date: "1975-10-15", venue: "Konserthuset", city: "Gothenburg", country: "Suècia", tourName: "Scandinavia Tour 1975", posterImage: posterScandinavia1975 },
  { id: "c6", date: "1975-10-18", venue: "Konserthus", city: "Oslo", country: "Noruega", tourName: "Scandinavia Tour 1975", posterImage: posterScandinavia1975 },
  
  // 1976
  { id: "c7", date: "1976-02-03", venue: "Ancienne Belgique (AB)", city: "Brussel·les", country: "Bèlgica", notes: "Presentat per Veldeprom Events. Exclusiva RTBF / Magazine HUMO", posterImage: posterBrussels1976 },
  { id: "c8", date: "1976-02-05", venue: "K.U.D. France Prešeren", city: "Ljubljana (Trnovo)", country: "Eslovènia", tourName: "Kosmična Avantgardna Glasba", notes: "Organitzat per ŠKUC", posterImage: posterTrieste1976 },
  { id: "c9", date: "1976-02-05", venue: "Sala Municipal", city: "Trieste", country: "Itàlia", tourName: "Kosmična Avantgardna Glasba", posterImage: posterTrieste1976 },
  
  // 1976 - Portugal Tour (Iberian Dreams)
  { id: "c10", date: "1976-11-10", venue: "Teatro São João", city: "Porto", country: "Portugal", tourName: "Iberian Dreams", notes: "Produït per SORA Produções Artísticas amb Suoni Rari (Itàlia) & Orfeu (Portugal)", posterImage: posterPortugal1976 },
  { id: "c11", date: "1976-11-12", venue: "Coliseu dos Recreios", city: "Lisboa", country: "Portugal", tourName: "Iberian Dreams", posterImage: posterPortugal1976 },
  { id: "c12", date: "1976-11-14", venue: "Convento de Santa Clara-a-Nova", city: "Coimbra", country: "Portugal", tourName: "Iberian Dreams", notes: "Concert final de la gira portuguesa", posterImage: posterPortugal1976 },
  
  // 1978 - Australasian Tour
  { id: "c13", date: "1978-01-11", venue: "Seymour Centre", city: "Sydney", country: "Austràlia", tourName: "Australasian Tour 1978", notes: "Quadraphonic Sound. Patrocinat per ABC", posterImage: posterAustralasia1978 },
  { id: "c14", date: "1978-01-12", venue: "Seymour Centre", city: "Sydney", country: "Austràlia", tourName: "Australasian Tour 1978", posterImage: posterAustralasia1978 },
  { id: "c15", date: "1978-01-14", venue: "Dallas Brooks Hall", city: "Melbourne", country: "Austràlia", tourName: "Australasian Tour 1978", posterImage: posterAustralasia1978 },
  { id: "c16", date: "1978-01-15", venue: "Dallas Brooks Hall", city: "Melbourne", country: "Austràlia", tourName: "Australasian Tour 1978", posterImage: posterAustralasia1978 },
  { id: "c17", date: "1978-01-18", venue: "Festival Theatre", city: "Adelaide", country: "Austràlia", tourName: "Australasian Tour 1978", posterImage: posterAustralasia1978 },
  { id: "c18", date: "1978-01-21", venue: "Perth Concert Hall", city: "Perth", country: "Austràlia", tourName: "Australasian Tour 1978", posterImage: posterAustralasia1978 },
  { id: "c19", date: "1978-01-24", venue: "Auckland Town Hall", city: "Auckland", country: "Nova Zelanda", tourName: "Australasian Tour 1978", posterImage: posterAustralasia1978 },
  { id: "c20", date: "1978-01-26", venue: "Wellington Town Hall", city: "Wellington", country: "Nova Zelanda", tourName: "Australasian Tour 1978", posterImage: posterAustralasia1978 },
  
  // 1978 - New York
  { id: "c21", date: "1978-03-25", venue: "Beacon Theatre", city: "Nova York", country: "EUA", notes: "Analogue Electronic Music", posterImage: posterNewYork1978 },
];

// ============================================
// GALERIA
// ============================================
export const gallery: GalleryImage[] = [
  { id: "g1", src: bandCathedral, alt: "Dream Sequence a la catedral, 1974", era: "Primers Anys (1972-1974)", year: 1974, caption: "Sarah, Emma i Fiona explorant acústiques sagrades" },
  { id: "g2", src: bandPortrait, alt: "Retrat del trio", era: "Primers Anys (1972-1974)", year: 1973, caption: "Sessió fotogràfica per a Zeitstrom" },
  { id: "g3", src: bandCasual, alt: "Moment relaxat", era: "Primers Anys (1972-1974)", year: 1974, caption: "Entre sessions d'estudi" },
  { id: "g4", src: concertSynths, alt: "Concert amb sintetitzadors", era: "Era Clàssica (1975-1977)", year: 1976, caption: "Nebel über Europa Tour" },
  { id: "g5", src: posterMilano1973, alt: "Pòster Milà 1973", era: "Primers Anys (1972-1974)", year: 1973, caption: "Prima Luce Tour - Teatro Lirico" },
  { id: "g6", src: posterPortugal1976, alt: "Pòster Portugal 1976", era: "Era Clàssica (1975-1977)", year: 1976, caption: "Iberian Dreams Tour" },
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
    name: "Pòster Milà 1973",
    description: "Reproducció del pòster original del concert a Milà. 60x90cm, paper d'arxiu.",
    image: posterMilano1973,
    price: "25€",
    available: true
  },
];

// ============================================
// TEXTOS DE PÀGINA
// ============================================
export const pageTexts = {
  biography: {
    intro: "DREAM SEQUENCE va néixer de la confluència de tecnologia i visió artística al Londres dels anys 70. Tres dones visionàries van trobar en els sintetitzadors una via d'exploració sense fronteres.",
    outro: "El llegat del trio continua influenciant generacions de músics electrònics, des de l'ambient fins al techno, demostrant que la recerca sonora no coneix límits temporals ni de gènere."
  },
  discography: {
    intro: "Cada àlbum és un viatge, cada pista un paisatge. Aquí trobareu el catàleg complet de les nostres expedicions sonores."
  },
  concerts: {
    intro: "Arxiu històric de totes les actuacions del trio. Cada concert era únic, una improvisació irrepetible en el temps i l'espai."
  },
  gallery: {
    intro: "Imatges que capturen moments de creació, actuació i experimentació. Documents visuals d'una era de descobriment sonor."
  },
  merch: {
    intro: "Articles oficials per als qui volen portar un tros d'història. Disponibilitat limitada.",
    contact: "Per a comandes especials o consultes: merch@dreamsequence.com"
  }
};
