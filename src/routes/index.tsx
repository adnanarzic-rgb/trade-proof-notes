import { createFileRoute } from "@tanstack/react-router";
import { SpotSite } from '@/components/spot-site';
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: 'HALID SPOT TRADING | Kripto analize i Spot VIP zajednica' },
    { name: 'description', content: 'Spot analize, altcoin istraživanje i kripto edukacija sa Halidom Arzićem. Bez leveragea i futuresa. Spot VIP Club: $59 za 3 mjeseca.' },
    { property: 'og:title', content: 'HALID SPOT TRADING — Kripto tržište bez leveragea' },
    { property: 'og:description', content: 'Istraživanje prije odluke. Spot analize, edukacija i odgovoran pristup kripto tržištu za zajednicu sa Balkana.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: SpotSite,
});
