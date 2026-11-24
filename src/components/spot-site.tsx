import { useState } from 'react';
import { ArrowUpRight, ArrowRight, Check, Menu, X, ShieldCheck, ChartNoAxesCombined, BookOpen, Wallet, Send, Play, ImageIcon, Crown, Zap, Star, Target, GraduationCap, TrendingUp, ZoomIn, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { membership, packages, portraitUrl, riskDisclaimer, socialLinks, featuredExamples, videoUrl, type Evidence } from '@/lib/site-config';

const nav = [['Šta dobijaš', 'edukacija'], ['Primjeri', 'rezultati'], ['O meni', 'o-meni'], ['Paketi', 'clanstvo'], ['Pitanja', 'faq']];
const lessons = [
  [BookOpen, 'Osnove kripta', 'Nauči kako funkcionišu kriptovalute.'],
  [TrendingUp, 'Kada kupiti?', 'Kako prepoznati potencijalnu priliku.'],
  [Wallet, 'Kada prodati?', 'Kako planirati prodaju i uzimanje profita.'],
  [ShieldCheck, 'Čuvanje kapitala', 'Kako izbjeći česte početničke greške.'],
  [Target, 'Praktični primjeri', 'Pogledaj kako izgledaju konkretne kupovine i prodaje.'],
  [GraduationCap, 'Video edukacija', 'Uči vlastitim tempom, korak po korak.'],
] as const;
const faqs = [
  ['Šta je spot trading?', 'Spot trading je kupovina i prodaja stvarne kripto imovine po tržišnoj cijeni. Kupljenu imovinu posjeduješ, bez futures ugovora i pozajmljenog kapitala.'],
  ['Da li koristimo futures i leverage?', 'Ne. Naš model je fokusiran isključivo na spot analize, bez futures signala, leveragea i short pozicija.'],
  ['Da li je potrebno prethodno iskustvo?', 'Nije neophodno, ali važno je krenuti od osnova. Edukativni sadržaj pomaže da razumiješ analize, rizik i način rada tržišta.'],
  ['Koliko kapitala mi je potrebno?', 'Ne postoji obavezan minimalni iznos za praćenje edukacije. Ulaži samo novac čiji gubitak možeš podnijeti i prvo napravi vlastiti plan rizika.'],
  ['Da li garantujete profit?', 'Ne. Niko ne može garantovati profit na kripto tržištu. Spot trgovanje također nosi značajan rizik gubitka kapitala.'],
  ['Kako funkcioniše VIP članstvo?', `Odaberi Standard ($59 za ${membership.durationMonths} mjeseca), Premium ($120 za 6 mjeseci) ili VIP ($200 za 12 mjeseci). Plaćanje se obavlja preko Whopa. Sadržaj i dodatne pogodnosti prikazani su uz svaki paket.`],
  ['Da li su svi analizirani tokeni halal?', 'Ne tvrdimo da su svi tokeni halal niti da je usluga šerijatski certificirana. Svaki projekat i struktura transakcije zahtijevaju zasebnu procjenu kvalificiranih učenjaka.'],
  ['Gdje se održava zajednica?', 'Zajednica se održava u privatnoj Telegram grupi. Nakon kupovine paketa dobijaš informacije o pristupu.'],
];
function Brand() { return <a href="#pocetna" className="brand" aria-label="Halid Spot Trading — početna"><ChartNoAxesCombined/><span>HALID <span>SPOT TRADING</span></span></a>; }
function SectionTitle({ label, title, text }: { label?: string; title: string; text?: string }) { return <div className="section-heading">{label && <span className="eyebrow">{label}</span>}<h2>{title}</h2>{text && <p>{text}</p>}</div>; }
function JoinButton({ label = 'Želim naučiti spot trgovanje' }: { label?: string }) { return <Button size="lg" asChild><a href="#clanstvo">{label}<ArrowRight/></a></Button>; }

export function SpotSite() {
  const [mobile, setMobile] = useState(false);
  const [preview, setPreview] = useState<Evidence | null>(null);
  return <>
    <header className="site-header"><div className="container header-inner"><Brand/><nav className="desktop-nav" aria-label="Glavna navigacija">{nav.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><Button className="header-cta" asChild><a href="#clanstvo">Odaberi paket <ArrowUpRight/></a></Button><Button className="mobile-toggle" variant="ghost" size="icon" onClick={() => setMobile(!mobile)} aria-label={mobile ? 'Zatvori meni' : 'Otvori meni'} aria-expanded={mobile}>{mobile ? <X/> : <Menu/>}</Button></div>{mobile && <nav className="mobile-nav" aria-label="Mobilna navigacija">{nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMobile(false)}>{label}<ArrowRight size={16}/></a>)}</nav>}</header>
    <main>
      <section id="pocetna" className="intro container">
        <span className="eyebrow">HALID SPOT TRADING · EDUKACIJA ZA POČETNIKE</span>
        <h1>Nauči kako jednostavno<br className="desktop-break"/> <span className="underlined">ulagati u kriptovalute.</span></h1>
        <p className="intro-subtitle">Pronađi prilike na kripto tržištu.<br className="mobile-break"/> Nauči kada kupiti i kada prodati.</p>
        <div className="vsl-frame">{videoUrl ? <video controls preload="metadata" src={videoUrl} aria-label="Uvod u spot edukaciju"/> : <div className="video-pending"><span className="play-symbol"><Play fill="currentColor"/></span><span>Uvodni video uskoro</span></div>}</div>
        <p className="intro-summary">Uz praktične video lekcije, analize i primjere trgovanja nauči osnove spot ulaganja — korak po korak.</p>
        <div className="intro-checks"><span><Check/>Bez leveragea</span><span><Check/>Jednostavna objašnjenja</span><span><Check/>Za ljude sa Balkana</span></div>
        <JoinButton/><p className="small-note">Odaberi paket i pridruži se edukaciji i zajednici.</p>
      </section>
      <section id="edukacija" className="section container"><SectionTitle label="OD OSNOVA DO PRVIH KORAKA" title="Šta ćeš naučiti?"/><div className="lesson-grid">{lessons.map(([Icon, title, text]) => <article className="lesson-card" key={title}><span className="icon-box"><Icon/></span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>
      <section id="rezultati" className="section-band"><div className="section container"><SectionTitle label="KONKRETNI PRIMJERI" title="Kako izgleda trgovanje u praksi?" text="Primjeri kupovine, prodaje i praćenja kriptovaluta na jednom mjestu."/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  {Array.from({ length: 10 }, (_, i) => (
    <div key={i} className="overflow-hidden rounded-xl border bg-white">
      <img
        src={`/trades/slika${i + 1}.png`}
        alt={`Primjer trgovanja ${i + 1}`}
        loading="lazy"
        className="w-full h-auto object-contain"
      />
    </div>
  ))}
</div>
<div className="example-grid">{featuredExamples.length ? featuredExamples.map(item => <article className="example-card" key={`${item.token}-${item.title}`}><Button variant="ghost" className="image-trigger" onClick={() => setPreview(item)} aria-label={`Otvori primjer ${item.token}`}><img src={item.images[0]?.url} alt={item.images[0]?.label}/><ZoomIn/></Button><h3>{item.token} — {item.title}</h3><p>{item.description}</p></article>) : ['Primjer kupovine i prodaje', 'Primjer rezultata trgovanja'].map((title, i) => <article className="example-card reserved-example" key={title}><span className="example-number">0{i + 1}</span><ImageIcon/><h3>{title}</h3><p>Originalni primjer uskoro</p></article>)}</div><p className="risk-note"><ShieldCheck/>Historijski primjeri nisu garancija buduće zarade. Rast cijene ili vrijednosti otvorene pozicije nije isto što i ostvarena dobit.</p></div></section>
      <section id="spot-trading" className="section container"><SectionTitle title="Drugačiji pristup kripto tržištu." text="Ti biraš svoj tempo. Važno je razumjeti šta kupuješ i koliki rizik preuzimaš."/><div className="three-grid">{[
        [Wallet, 'Stvarno vlasništvo', 'Kad kupiš kriptovalutu, ti je posjeduješ. Možeš je čuvati godinama ili prodati kad želiš. Ako je cijena viša od tvoje kupovne cijene i troškova, možeš ostvariti profit.'],
        [ShieldCheck, 'Bez klađenja i leveragea', 'Ne moraš se baviti futures trgovanjem ni koristiti pozajmljeni novac. Naša edukacija i signali fokusirani su na spot — kupovinu stvarne kripto imovine.'],
        [ChartNoAxesCombined, 'Dnevni signali, ali i strpljenje', 'Možeš svakodnevno kupovati i prodavati kripto s ciljem profita, ali možeš i ulagati na duže i strpljivo čekati planiranu cijenu. Zarada nije zagarantovana.'],
      ].map(([Icon, title, text]) => { const I = Icon as typeof Wallet; return <article className="feature-card" key={String(title)}><span className="icon-box"><I/></span><h3>{String(title)}</h3><p>{String(text)}</p></article>; })}</div><p className="risk-note"><ShieldCheck/>Spot trgovanje također nosi rizik. Vrijednost kriptovaluta može pasti i možeš izgubiti uloženi novac.</p></section>
      <section id="o-meni" className="section-band"><div className="section container about-grid"><figure className="portrait-block"><img src={portraitUrl} alt="Halid Arzić" loading="lazy"/><figcaption>HALID ARZIĆ<span>Čovjek iza edukacije</span></figcaption></figure><div className="about-copy"><SectionTitle label="O MENI" title="Muž, otac dvije djevojčice, pa tek onda preduzetnik!"/><p>Kriptovalute pratim još od njihovih ranih dana. Kroz rane početke sam pratio razvoj ovog tržišta, istraživao nove projekte, učio o investiranju i sticao praktično iskustvo u trgovanju.</p><p>Kripto me privukao zbog mogućnosti koje pruža novo digitalno tržište, ali i zbog ideje finansijske slobode, nezavisnosti i mogućnosti da čovjek samostalno upravlja svojim vremenom i novcem.</p><p>Moj pristup je ozbiljan i realan. Bez lažnog hajpa, nerealnih obećanja i priča o brzoj zaradi. Vjerujem u znanje, disciplinu, strpljenje i odgovorno upravljanje kapitalom.</p><p>Sloboda, vrijeme s porodicom i mogućnost da samostalno organizujem svoj život predstavljaju mi mnogo više od samog novca.</p><p>Kroz ovu edukaciju želim svoje iskustvo prenijeti drugima, jednostavnim i razumljivim jezikom, kako bi i potpuni početnici mogli napraviti prve korake u svijetu kriptovaluta; bez nepotrebnog komplikovanja i nerealnih očekivanja!</p></div></div></section>
      <section className="section container"><SectionTitle label="KORAK PO KORAK" title="Od istraživanja do prilike za kupovinu."/><div className="process-grid">{[['Istraživanje', 'Analiziramo projekat, njegovu namjenu, tokenomiku, tržišnu kapitalizaciju i dostupne podatke.'], ['Tehnička analiza', 'Posmatramo chart, volumen, tržišnu strukturu i ključne zone.'], ['Plan', 'Definišemo potencijalnu zonu kupovine, ciljeve i nivoe na kojima ideja više ne važi.'], ['Praćenje', 'Pratimo razvoj situacije i objavljujemo updateove kada se tržišni uslovi promijene.']].map(([title, text], i) => <article className="process-step" key={title}><div><span>0{i + 1}</span>{i < 3 && <ArrowRight/>}</div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="section-band"><div className="section container principles-grid"><div><SectionTitle label="PRINCIPI NA PRVOM MJESTU" title="Trgovanje uz principe i odgovornost."/><p>Želimo graditi zajednicu koja pristupa kripto tržištu odgovorno i sa jasnim principima. Naš model fokusiran je na spot trgovanje, bez futures pozicija, leveragea i short trgovanja.</p></div><div><ul className="principles-list">{['Bez leveragea', 'Bez futures signala', 'Bez short pozicija', 'Fokus na kupovini i vlasništvu nad imovinom', 'Istraživanje projekata prije donošenja odluka', 'Transparentnost u prikazivanju rezultata'].map(t => <li key={t}><Check/>{t}</li>)}</ul><p className="small-note religious-note">Ne tvrdimo da su svi tokeni ili strategije halal niti da smo šerijatski certificirani. Pojedinačni projekti i strukture transakcija zahtijevaju zasebnu šerijatsku procjenu kvalificiranih učenjaka.</p></div></div></section>
      <section id="clanstvo" className="section container"><SectionTitle label="TVOJ SLJEDEĆI KORAK" title="Odaberi svoj paket." text="Jednostavna edukacija i konkretne analize. Odaberi pristup koji ti odgovara."/><div className="pricing-grid">{packages.map((plan, i) => { const Icon = i === 0 ? Zap : i === 1 ? Crown : Star; return <article className={`pricing-card ${plan.featured ? 'featured-plan' : ''}`} key={plan.name}>{plan.featured && <span className="plan-badge">PREPORUČENI PAKET</span>}<Icon className="plan-icon"/><h3>{plan.name}</h3><p>{plan.durationMonths} {plan.durationMonths === 3 ? 'mjeseca' : 'mjeseci'} pristupa</p><div className="price">${plan.priceUsd}<span>USD</span></div><ul>{plan.features.map(feature => <li key={feature}><Check/><span>{feature}</span></li>)}</ul><Button size="lg" variant={plan.featured ? 'default' : 'outline'} asChild><a href={plan.destination} target="_blank" rel="noopener noreferrer">Odaberi {plan.name.toLowerCase()}<ArrowUpRight/></a></Button><p className="payment-note"><ShieldCheck/>Sigurno plaćanje preko kartice</p><span className="payment-provider"><CreditCard/>Plaćanje preko Whopa</span></article>; })}</div><p className="pricing-disclaimer">Članstvo ne garantuje profit. Svaka odluka o kupovini i prodaji ostaje tvoja odgovornost.</p></section>
      <section id="faq" className="section-band"><div className="section container faq-grid"><SectionTitle label="DOBRO JE ZNATI" title="Pitanja prije prvog koraka." text="Jasni odgovori. Bez velikih obećanja."/><Accordion type="single" collapsible>{faqs.map(([q, a], i) => <AccordionItem value={`faq-${i}`} key={q}><AccordionTrigger className="faq-trigger">{q}</AccordionTrigger><AccordionContent className="faq-answer">{a}</AccordionContent></AccordionItem>)}</Accordion></div></section>
      <section className="final-cta container"><h2>Spreman za svoj prvi korak?</h2><p>Nauči osnove kripta uz jednostavna objašnjenja i podršku zajednice.</p><JoinButton label="Odaberi paket i pridruži se"/></section>
    </main>
    <footer><div className="container footer-top"><Brand/><nav className="footer-nav" aria-label="Navigacija u podnožju">{nav.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><Button variant="outline" asChild><a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer"><Send/>Telegram<ArrowUpRight/></a></Button></div><div className="container footer-risk"><span>VAŽNO UPOZORENJE O RIZIKU</span><p>{riskDisclaimer}</p></div><div className="container footer-bottom">© 2026 HALID SPOT TRADING. Sva prava zadržana.</div></footer>
    <Dialog open={Boolean(preview)} onOpenChange={open => { if (!open) setPreview(null); }}><DialogContent className="gallery-modal"><DialogTitle>{preview?.token} — {preview?.title}</DialogTitle><DialogDescription>{preview?.description}</DialogDescription><div className="preview-images">{preview?.images.map(image => <figure key={image.url}><img src={image.url} alt={image.label}/><figcaption>{image.label}</figcaption></figure>)}</div></DialogContent></Dialog>
  </>;
}
