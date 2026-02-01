// ============================================
// MEMBRES DEL GRUP - BIOGRAFIES INDIVIDUALS
// ============================================

import bandPortrait from "@/assets/band-portrait.jpg";
import bandCasual from "@/assets/band-casual.jpg";
import bandCathedral from "@/assets/band-cathedral.jpg";

export interface BandMember {
  id: string;
  name: string;
  role: string;
  instrument: string;
  bio: string;
  image: string;
  birthYear: number;
  birthPlace: string;
}

export const bandMembers: BandMember[] = [
  {
    id: "sarah",
    name: "Sarah Whitmore",
    role: "Fundadora / Teclats",
    instrument: "Minimoog, ARP 2600, Mellotron",
    bio: "Nascuda a Bristol, Sarah va descobrir els sintetitzadors als 16 anys quan va escoltar per primera vegada Kraftwerk a la ràdio. Autodidata, va construir el seu primer oscil·lador a casa abans de mudar-se a Londres el 1971. La seva aproximació als teclats és meditativa i espacial, creant paisatges sonors que evoquen horitzons infinits.",
    image: bandPortrait,
    birthYear: 1952,
    birthPlace: "Bristol, Anglaterra"
  },
  {
    id: "emma",
    name: "Emma Blackwood",
    role: "Seqüenciació / Efectes",
    instrument: "Roland System 100, EMS VCS3, Cintes magnètiques",
    bio: "Emma va estudiar enginyeria electrònica a Cambridge abans d'abandonar per dedicar-se a la música experimental. El seu domini de les cintes magnètiques i els loops la va convertir en pionera de les tècniques de sampling analògic. És responsable de les textures rítmiques hipnòtiques que defineixen el so de Dream Sequence.",
    image: bandCasual,
    birthYear: 1951,
    birthPlace: "Cambridge, Anglaterra"
  },
  {
    id: "fiona",
    name: "Fiona Gray",
    role: "Violoncel / Processament",
    instrument: "Violoncel elèctric, Processadors d'efectes, Flauta",
    bio: "Formada com a violoncel·lista clàssica al Royal College of Music, Fiona va descobrir el món electrònic el 1970 quan va sentir Terry Riley a un concert a Londres. Va ser la última a unir-se al trio el 1973, aportant una dimensió orgànica i emocional que complementa perfectament les textures electròniques.",
    image: bandCathedral,
    birthYear: 1953,
    birthPlace: "Edimburg, Escòcia"
  }
];
