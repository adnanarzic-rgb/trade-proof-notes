import portraitAsset from '@/assets/halid-arzic-portrait.png.asset.json';

export const membership = { priceUsd: 59, durationMonths: 3, destination: 'https://whop.com/checkout/plan_UC2VDuvqRdpL6' };
export const packages = [
  { name: 'STANDARD', priceUsd: 59, durationMonths: membership.durationMonths, destination: membership.destination, features: ['Edukacija o spot trgovanju', 'Signali i analize'], featured: false },
  { name: 'PREMIUM', priceUsd: 120, durationMonths: 6, destination: 'https://whop.com/checkout/plan_DatQoCJ6zz7B0', features: ['Edukacija o spot trgovanju', 'Signali i analize', 'Detaljna objašnjenja', 'Prioritetna komunikacija', 'BONUS: Ekskluzivne analize'], featured: true },
  { name: 'VIP', priceUsd: 200, durationMonths: 12, destination: 'https://whop.com/checkout/plan_z5YjBZk72W3Nu', features: ['Sve iz Standard i Premium paketa', 'Konsultacije sa mnom 1 na 1', 'BONUS: VIP grupa', 'BONUS: Dodatni spot signali'], featured: false },
];
export const socialLinks = { youtube: '', instagram: '', telegram: 'https://t.me/+usoj-qtkLU81MmQ0' };
export const portraitUrl = '/images/slika11.png';
// Set a supplied video URL and add original evidence here when the owner provides them.
export const videoUrl = 'https://www.youtube.com/embed/8_gaifOh-Cw';export type Evidence = { token: string; category: 'Analize' | 'Praćenje tržišta' | 'Spot pozicije'; title: string; description: string; images: { url: string; label: string }[]; kind: 'research' | 'portfolio' | 'market'; };

export const evidence: Evidence[] = [
  {
    token: 'BLESS',
    category: 'Analize',
    title: 'Od analize do tržišnog momentuma',
    description: 'Primjer Telegram objave i praćenja kretanja cijene BLESS tokena. Objavljeni tržišni pomaci nisu isto što i ostvarena dobit.',
    images: [
      { url: '/trades/slika1.png', label: 'Originalna Telegram objava' },
    ],
    kind: 'market'
  },
  {
    token: 'EVAA',
    category: 'Praćenje tržišta',
    title: 'Praćenje kretanja cijene EVAA',
    description: 'Primjer mjerenja kretanja cijene na chartu.',
    images: [
      { url: '/trades/slika2.png', label: 'EVAA futures chart – 50x' },
    ],
    kind: 'market'
  },
  {
    token: 'BREVIS',
    category: 'Analize',
    title: 'Primjer analize BREVIS tokena',
    description: 'Prikaz potencijalnih zona za kupovinu i kretanja cijene. Navedeni potencijal od 100–170% predstavlja projekciju dobiti iz originalne objave.',
    images: [
      { url: '/trades/slika3.png', label: 'BREVIS analiza' },
    ],
    kind: 'research'
  },
  {
    token: 'BLESS',
    category: 'Praćenje tržišta',
    title: 'Praćenje BLESS tržišnog momentuma',
    description: 'Prikaz BLESS/USDT valutnog para.',
    images: [
      { url: '/trades/slika4.png', label: 'BLESS futures chart – 50x' },
    ],
    kind: 'market'
  },
  {
    token: 'EVAA',
    category: 'Spot pozicije',
    title: 'Primjer promjene vrijednosti EVAA pozicije',
    description: 'Trenutni rezultat zarade od 50% na investiciju.',
    images: [
      { url: '/trades/slika5.png', label: 'EVAA prikaz rezultata' },
    ],
    kind: 'portfolio'
  },
  {
    token: 'SOLV / ARIA',
    category: 'Analize',
    title: 'Istraživanje projekata i potencijalnih prilika',
    description: 'Primjeri chart analize, tržišne strukture i potencijalnih zona kupovine.',
    images: [
      { url: '/trades/slika6.png', label: 'SOLV analiza' },
      { url: '/trades/slika7.png', label: 'ARIA analiza' },
      { url: '/trades/slika8.png', label: 'EVAA analiza' },
    ],
    kind: 'research'
  },
  {
    token: 'SOLANA',
    category: 'Spot pozicije',
    title: 'Dugoročniji spot pristup',
    description: 'Primjer investicije u SOLANU sa zaradom od +25.01% u tom momentu.',
    images: [
      { url: '/trades/slika9.png', label: 'SOL investicija – Pionex' },
    ],
    kind: 'portfolio'
  },
  {
    token: 'H',
    category: 'Spot pozicije',
    title: 'Primjer dugoročnog ulaganja',
    description: 'Prikaz H tokena sa zaradom od +330.74% na investiciju. Ovo nije garancija budućih rezultata, već samo primjer kakve rezultate smo pravili',
    images: [
      { url: '/trades/slika10.png', label: 'H token – Pionex' },
    ],
    kind: 'portfolio'
  },
];export const featuredExamples: Evidence[] = evidence;;;

export const riskDisclaimer = 'Trgovanje i investiranje u kriptovalute nosi visok rizik gubitka kapitala. Sadržaj na ovoj stranici služi isključivo u edukativne i informativne svrhe i ne predstavlja finansijski, investicijski niti vjerski savjet. Historijski rezultati nisu garancija budućih prinosa. Svaki korisnik samostalno donosi odluke i snosi odgovornost za svoje postupke.';