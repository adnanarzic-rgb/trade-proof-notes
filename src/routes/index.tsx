import { createFileRoute } from "@tanstack/react-router";
import { SpotSite } from '@/components/spot-site';
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: 'HALID SPOT TRADING | Nauči jednostavno ulagati u kriptovalute' },
    { name: 'description', content: 'Nauči osnove kripta, kako prepoznati priliku za kupovinu i odgovorno čuvati kapital. Edukacija sa Halidom Arzićem za početnike sa Balkana. Paketi od $59.' },
    { property: 'og:title', content: 'HALID SPOT TRADING — Nauči jednostavno ulagati u kriptovalute' },
    { property: 'og:description', content: 'Jednostavna objašnjenja, praktični primjeri i spot analize. Korak po korak, bez leveragea i obećanja o brzoj zaradi.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: SpotSite,
});
