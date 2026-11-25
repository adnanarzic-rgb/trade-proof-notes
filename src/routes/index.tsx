import { createFileRoute } from "@tanstack/react-router";
import { SpotSite } from '@/components/spot-site';
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: 'HALID SPOT TRADING | Nauči kako zaraditi trgovanjem kriptovaluta' },
    { name: 'description', content: 'Edukacija, analize i konkretne primjere u privatnoj Telegram zajednici. Ti biraš kad kupiti i kad prodati. Jednostavno, sve preko telefona.' },
    { property: 'og:title', content: 'HALID SPOT TRADING — Nauči kako zaraditi trgovanjem kriptovaluta' },
    { property: 'og:description', content: 'Dam ti edukaciju i valute — ti biraš kad kupiti i kad prodati i uzeti profit. Korak po korak, bez obećanja o brzoj zaradi.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: SpotSite,
});
