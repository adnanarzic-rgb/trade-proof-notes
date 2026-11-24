import portraitAsset from '@/assets/halid-arzic-portrait.png.asset.json';

export const membership = { priceUsd: 59, durationMonths: 3, destination: 'https://whop.com/checkout/plan_UC2VDuvqRdpL6' };
export const packages = [
  { name: 'STANDARD', priceUsd: 59, durationMonths: membership.durationMonths, destination: membership.destination, features: ['Edukacija o spot trgovanju', 'Signali i analize'], featured: false },
  { name: 'PREMIUM', priceUsd: 120, durationMonths: 6, destination: 'https://whop.com/checkout/plan_DatQoCJ6zz7B0', features: ['Edukacija o spot trgovanju', 'Signali i analize', 'Detaljna objašnjenja', 'Prioritetna komunikacija', 'BONUS: Ekskluzivne analize'], featured: true },
  { name: 'VIP', priceUsd: 200, durationMonths: 12, destination: 'https://whop.com/checkout/plan_z5YjBZk72W3Nu', features: ['Sve iz Standard i Premium paketa', 'Konsultacije sa mnom 1 na 1', 'BONUS: VIP grupa', 'BONUS: Dodatni spot signali'], featured: false },
];
export const socialLinks = { youtube: '', instagram: '', telegram: 'https://t.me/+usoj-qtkLU81MmQ0' };
export const portraitUrl = portraitAsset.url;
// Set a supplied video URL and add original evidence here when the owner provides them.
export const videoUrl = '';
export const featuredExamples: Evidence[] = [];
export type Evidence = { token: string; category: 'Analize' | 'Praćenje tržišta' | 'Spot pozicije'; title: string; description: string; images: { url: string; label: string }[]; kind: 'research' | 'portfolio' | 'market'; };
export const evidence: Evidence[] = [
  { token: 'BLESS', category: 'Analize', title: 'Od analize do tržišnog momentuma', description: 'Početna analiza i kasnije kretanje cijene, prikazani zajedno. Historijski pomak tržišta nije isto što i ostvarena dobit.', images: [], kind: 'market' },
  { token: 'EVAA', category: 'Praćenje tržišta', title: 'Praćenje snažnog pomaka cijene', description: 'Originalni chart sa mjerenjem kretanja cijene u označenom periodu. Mjerenje na chartu ne predstavlja potvrdu prinosa pozicije.', images: [], kind: 'market' },
  { token: 'BREVIS', category: 'Analize', title: 'Primjer strukturirane spot analize', description: 'Zone kupovine, ciljevi i ključni nivoi. Potencijal od 100–170% iz originalne poruke je projekcija, a ne već ostvareni rezultat.', images: [], kind: 'research' },
  { token: 'BLESS', category: 'Praćenje tržišta', title: 'Analiza ne završava nakon objave', description: 'Praćenje momentuma, volumena, promjena cijene i ključnih zona kroz redovne tržišne updateove.', images: [], kind: 'research' },
  { token: 'EVAA', category: 'Spot pozicije', title: 'Primjer prikaza spot pozicije', description: 'Originalni MEXC prikaz portfolija. Prikazana promjena vrijednosti ne mora predstavljati realizovanu dobit niti nezavisno potvrđenu transakciju.', images: [], kind: 'portfolio' },
  { token: 'SOLV / ARIA', category: 'Analize', title: 'Altcoin istraživanje i tržišna struktura', description: 'Primjeri istraživanja projekata i potencijalnih zona kupovine, ne dokaz završenih spot prinosa.', images: [], kind: 'research' },
  { token: 'SOLANA', category: 'Spot pozicije', title: 'Dugoročniji spot pristup', description: 'Originalni Pionex prikaz SOL investicije. Promjena vrijednosti otvorene pozicije nije isto što i realizovan profit.', images: [], kind: 'portfolio' },
  { token: 'H', category: 'Spot pozicije', title: 'Prikaz promjene vrijednosti investicije', description: 'Originalni Pionex prikaz H tokena. Historijska vrijednost portfolija ne garantuje buduće prinose.', images: [], kind: 'portfolio' },
];
export const riskDisclaimer = 'Trgovanje i investiranje u kriptovalute nosi visok rizik gubitka kapitala. Sadržaj na ovoj stranici služi isključivo u edukativne i informativne svrhe i ne predstavlja finansijski, investicijski niti vjerski savjet. Historijski rezultati nisu garancija budućih prinosa. Svaki korisnik samostalno donosi odluke i snosi odgovornost za svoje postupke.';