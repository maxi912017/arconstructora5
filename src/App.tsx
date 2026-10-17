import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Home, Factory, Hammer, ThermometerSnowflake, MapPin, Phone, Instagram, Facebook,
  Ruler, DraftingCompass, Menu, X,
  ArrowRight, ArrowUpRight, CheckCircle2, MessageCircle, ChevronsLeftRight,
  ChevronLeft, ChevronRight, XCircle, Box, PaintRoller, LayoutPanelTop, Volume2, VolumeX,
} from "lucide-react";
import logo from "@/assets/logo-ar-dark.jpg";
import heroObra from "@/assets/hero-obra.jpg";
import concreteTexture from "@/assets/concrete-texture.jpg";
import aboutVideo from "@/assets/empresa.mp4";
import aboutPoster from "@/assets/empresa-poster.jpg";
import imgResidencia from "@/assets/obra-residencia.jpg";
import imgSpeluzzi1 from "@/assets/obra-speluzzi-1.jpg";
import imgSpeluzzi2 from "@/assets/obra-speluzzi-2.jpg";
import imgSpeluzzi3 from "@/assets/obra-speluzzi-3.jpg";
import imgDepto1 from "@/assets/obra-depto-1.jpg";
import imgDepto2 from "@/assets/obra-depto-2.jpg";
import imgDepto3 from "@/assets/obra-depto-3.jpg";
import img3d1 from "@/assets/obra-3d-1.jpg";
import img3d2 from "@/assets/obra-3d-2.jpg";
import img3d3 from "@/assets/obra-3d-3.jpg";
import img3d4 from "@/assets/obra-3d-4.jpg";
import img3dVideo from "@/assets/obra-3d-video.mp4";
import imgGris from "@/assets/obra-gris.jpg";
import imgTexturado from "@/assets/obra-texturado.jpg";
import imgGas1 from "@/assets/obra-gas-1.jpg";
import imgGas2 from "@/assets/obra-gas-2.jpg";
import imgGasVideo from "@/assets/obra-gas-video.mp4";
import imgNaveAntes from "@/assets/obra-nave-antes.jpg";
import imgNaveDespues from "@/assets/obra-nave-despues.jpg";
import imgNaveVideo from "@/assets/obra-nave-video.mp4";
import imgNaveInt1 from "@/assets/obra-nave-int-1.jpg";
import imgNaveInt2 from "@/assets/obra-nave-int-2.jpg";
import imgNaveInt3 from "@/assets/obra-nave-int-3.jpg";
import imgLosa from "@/assets/obra-losa.jpg";
import imgLosa2 from "@/assets/obra-losa-2.jpg";
import imgLosaVideo from "@/assets/obra-losa-video.mp4";
import imgApap1 from "@/assets/obra-apap-1.jpg";
import imgApap2 from "@/assets/obra-apap-2.jpg";
import imgApap3 from "@/assets/obra-apap-3.jpg";
import imgApap4 from "@/assets/obra-apap-4.jpg";
import imgApap5 from "@/assets/obra-apap-5.jpg";
import imgApap6 from "@/assets/obra-apap-6.jpg";
import imgApap7 from "@/assets/obra-apap-7.jpg";
import imgApap8 from "@/assets/obra-apap-8.jpg";
import imgApap9 from "@/assets/obra-apap-9.jpg";
import imgApap10 from "@/assets/obra-apap-10.jpg";
import imgMoov1 from "@/assets/obra-moov-1.jpg";
import imgMoov2 from "@/assets/obra-moov-2.jpg";
import imgMoov3 from "@/assets/obra-moov-3.jpg";
import imgMoovVideo from "@/assets/obra-moov-video.mp4";
import imgKine1 from "@/assets/obra-kine-1.jpg";
import imgKine2 from "@/assets/obra-kine-2.jpg";
import imgKine3 from "@/assets/obra-kine-3.jpg";
import imgKine4 from "@/assets/obra-kine-4.jpg";
import imgKine5 from "@/assets/obra-kine-5.jpg";
import imgEifs from "@/assets/obra-eifs.jpg";
import imgEifsInstalacion from "@/assets/obra-eifs-instalacion.jpg";
import imgCocina from "@/assets/obra-cocina.jpg";
import imgBanioAntes from "@/assets/obra-banio-antes.jpg";
import imgBanioDespues from "@/assets/obra-banio-despues.jpg";
import imgBanio2Antes from "@/assets/obra-banio2-antes.jpg";
import imgBanio2Despues from "@/assets/obra-banio2-despues.jpg";
import imgFachadaAntes from "@/assets/obra-fachada-antes.jpg";
import imgFachadaDespues from "@/assets/obra-fachada-despues.jpg";

const WA = "5492302591600";
const waLink = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
const WA_DEFAULT = waLink("Hola AR Constructora, quiero pedir un presupuesto para mi obra.");

const NAV = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#obras", label: "Obras" },
  { href: "#protocolo", label: "Protocolo" },
  { href: "#eifs", label: "EIFS" },
  { href: "#contacto", label: "Contacto" },
];

const TICKER_ITEMS = [
  "Dirección técnica matriculada",
  "Presupuesto pactado",
  "General Pico · La Pampa",
  "Llave en mano",
  "Naves industriales",
  "Aislación EIFS",
];

const SERVICES = [
  { icon: Home, title: "Construcción llave en mano", text: "Viviendas unifamiliares, departamentos compactos de 35 m² y quinchos. Desde los planos hasta la entrega de llaves." },
  { icon: Factory, title: "Obras comerciales e industriales", text: "Naves logísticas, galpones con estructura metálica y locales comerciales con pisos de hormigón industrial." },
  { icon: Hammer, title: "Refacciones y ampliaciones", text: "Remodelación integral de cocinas, baños y viviendas IPAV, con instalaciones nuevas y terminaciones de calidad." },
  { icon: ThermometerSnowflake, title: "Aislación térmica EIFS", text: "Eficiencia energética para el clima de La Pampa: menos frío en invierno, menos calor en verano." },
  { icon: LayoutPanelTop, title: "Cielos rasos", text: "Cielos rasos de placa con estructura metálica y registraciones: bajadas de techo, cortinas de luz y nichos para iluminación empotrada, con aislación donde hace falta." },
  { icon: Ruler, title: "Dirección de obra", text: "Replanteo, control de materiales y de cuadrillas, y verificación de cada etapa antes de continuar. Un solo responsable técnico del principio al fin." },
  { icon: DraftingCompass, title: "Planos reglamentarios y trámites", text: "Anteproyecto y planos conforme a la normativa municipal, presentados y aprobados antes de empezar a construir." },
  { icon: Box, title: "Modelado 3D y anteproyecto", text: "Volumetría, distribución y fachadas resueltas en 3D: ves cómo queda la obra antes de romper el piso y aprobás sobre el modelo." },
  { icon: PaintRoller, title: "Pulido de pisos y terminaciones texturadas", text: "Hormigón pulido en naves, galpones y galerías, y texturados de fachada tipo travertino con guardapolvos y juntas limpias." },
];

type Cat = "todas" | "viviendas" | "comercial" | "refacciones" | "proceso";
const FILTERS: { id: Cat; label: string }[] = [
  { id: "todas", label: "Todas" },
  { id: "viviendas", label: "Viviendas" },
  { id: "comercial", label: "Comercial e industrial" },
  { id: "refacciones", label: "Refacciones" },
  { id: "proceso", label: "Proceso constructivo" },
];
type Project = {
  cat: Exclude<Cat, "todas">;
  img?: string;
  more?: string[];
  video?: string;
  before?: string;
  tag: string;
  title: string;
  text: string;
};
const photos = (p: Project): string[] => (p.img ? [p.img, ...(p.more ?? [])] : []);
const PROJECTS: Project[] = [
  { cat: "viviendas", img: imgResidencia, tag: "Llave en mano", title: "Residencia familiar 96 m²", text: "2 dormitorios, living-comedor y cocina, con orientación solar óptima y planos aprobados." },
  {
    cat: "viviendas",
    img: imgSpeluzzi1,
    more: [imgSpeluzzi2, imgSpeluzzi3],
    tag: "Conjunto habitacional",
    title: "Complejo de departamentos Speluzzi",
    text: "Módulos independientes de muros de ladrillo, con circulaciones y veredas de hormigón ejecutadas en obra.",
  },
  {
    cat: "viviendas",
    img: imgDepto2,
    more: [imgDepto1, imgDepto3],
    tag: "Departamento",
    title: "Departamento de 36 m² llave en mano",
    text: "Depto de 36 m² llave en mano: ambiente con cocina integrada y dormitorio.",
  },
  {
    cat: "comercial",
    img: imgNaveDespues,
    before: imgNaveAntes,
    more: [imgNaveInt1, imgNaveInt2, imgNaveInt3],
    video: imgNaveVideo,
    tag: "Nave logística",
    title: "Mayorista de Frutas y Verduras",
    text: "Estructura metálica de gran luz, piso H-30 para autoelevadores y sector de cámaras de frío.",
  },
  {
    cat: "comercial",
    img: imgApap1,
    more: [imgApap2, imgApap3, imgApap4, imgApap5, imgApap6, imgApap7, imgApap8, imgApap9, imgApap10],
    tag: "Institucional",
    title: "Oficinas APAP General Pico",
    text: "Construcción y terminación integral con tabiquería técnica, iluminación y accesos confortables.",
  },
  {
    cat: "comercial",
    img: imgMoov1,
    more: [imgMoov2, imgMoov3],
    video: imgMoovVideo,
    tag: "Adecuación",
    title: "Centro Moov Training",
    text: "Refacción de un taller de frenos a centro de entrenamiento en General Pico, con apeos y refuerzos para abrir el espacio.",
  },
  {
    cat: "comercial",
    img: imgKine1,
    more: [imgKine2, imgKine3, imgKine4, imgKine5],
    tag: "Kinesiología",
    title: "Remodelación de casa para gimnasio terapéutico",
    text: "Refacción y ampliación de una casa: gym terapéutico y consultorios de rehabilitación.",
  },
  { cat: "refacciones", img: imgCocina, tag: "Refacciones", title: "Remodelación de cocina", text: "Demolición, cañerías e instalaciones eléctricas nuevas, revestimientos cerámicos, mesada de mármol y griferías monocomando." },
  { cat: "refacciones", img: imgBanioDespues, before: imgBanioAntes, tag: "Refacciones", title: "Remodelación de baño", text: "Demolición de revoques y contrapiso, instalación nueva de agua y cloacas, cerámicos, sanitarios y griferías." },
  {
    cat: "refacciones",
    img: imgBanio2Despues,
    before: imgBanio2Antes,
    more: [imgBanio2Despues],
    tag: "Refacciones",
    title: "Baño con porcelanato símil madera",
    text: "Revestimiento viejo retirado, artefactos sanitarios nuevos, mueble bajo bacha y porcelanato símil madera en piso y paredes.",
  },
  { cat: "refacciones", img: imgFachadaDespues, before: imgFachadaAntes, tag: "Refacciones", title: "Renovación de fachada en vivienda familiar", text: "Retiro del revoque deteriorado y fisurado, terminación continua con guardapolvos, acceso en piedra y recambio de carpinterías." },
  { cat: "proceso", img: imgLosa, more: [imgLosa2], video: imgLosaVideo, tag: "Losas", title: "Llenado de losa con hormigón elaborado", text: "Armado de encofrados, apuntalamiento y llenado continuo de losa, con verificación de recubrimientos de acero." },
  {
    cat: "proceso",
    img: imgGris,
    tag: "Obra gris",
    title: "Vivienda de dos plantas en obra gris",
    text: "Revoques gruesos, carpinterías colocadas y chimenea ejecutada: la base lista para entrar en las terminaciones.",
  },
  {
    cat: "proceso",
    img: img3d4,
    more: [img3d1, img3d2, img3d3],
    video: img3dVideo,
    tag: "Modelado 3D",
    title: "Anteproyectos y modelado 3D",
    text: "Viviendas y edificios modelados antes de construir: el proyecto se aprueba viendo.",
  },
  {
    cat: "proceso",
    img: imgTexturado,
    tag: "Terminaciones",
    title: "Texturado tipo travertino en fachada",
    text: "Terminación continua en dos texturas sobre los paños de una misma fachada, con encuentros al canto y juntas limpias.",
  },
  { cat: "proceso", img: imgEifs, tag: "EIFS", title: "Aislación exterior y sellado de fisuras", text: "Placas de EPS de alta densidad con base coat y malla sobre muros con grietas reparadas." },
  {
    cat: "proceso",
    img: imgGas1,
    more: [imgGas2],
    video: imgGasVideo,
    tag: "Instalaciones",
    title: "Prueba de instalación de gas",
    text: "Comprobación de la instalación de gas durante la obra, para dejarla normalizada antes de la entrega de llaves.",
  },
];

const PROTOCOL = [
  { title: "Dirección técnica matriculada", text: "Seguimiento directo en obra del Maestro Mayor de Obras Alexis Ruiz, bajo normativas vigentes." },
  { title: "Presupuesto pactado y garantía escrita", text: "Sabés desde el principio cuánto vas a invertir y qué incluye. Sin sorpresas." },
  { title: "Plazos cumplidos", text: "Planificamos cada etapa —replanteo, platea, estructura, terminaciones— para entregar a tiempo." },
  { title: "Planos y trámites", text: "Anteproyecto, planos municipales y de gas aprobados, instalaciones normalizadas." },
];

const CON_EMPRESA = [
  "Un solo responsable.",
  "Presupuesto claro.",
  "Dirección y coordinación de obra.",
  "Control de calidad.",
  "Cumplimiento de plazos.",
  "Garantía de ejecución.",
];
const POR_TU_CUENTA = [
  "Debés coordinar todos los gremios.",
  "Más tiempo de gestión.",
  "Riesgo de errores entre rubros.",
  "Costos imprevistos.",
  "La responsabilidad queda en el propietario.",
];

const ABOUT_FACTS = [
  { label: "Responsable técnico", value: "M.M.O. Alexis Ruiz" },
  { label: "Dónde trabajamos", value: "General Pico y toda La Pampa" },
  { label: "Seguimiento", value: "Dirección propia en obra, sin intermediarios" },
  { label: "Respaldo", value: "Cálculo y ejecución bajo normativas vigentes" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function WaButton({ children, href = WA_DEFAULT, className = "" }: { children: React.ReactNode; href?: string; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-accent px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink transition hover:bg-accent-soft ${className}`}>
      <MessageCircle className="size-4" /> {children}
    </a>
  );
}

function GhostLink({ children, href, className = "" }: { children: React.ReactNode; href: string; className?: string }) {
  return (
    <a href={href}
      className={`inline-flex items-center justify-center gap-2 border border-line px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-paper transition hover:border-accent hover:text-accent ${className}`}>
      {children} <ArrowUpRight className="size-4" />
    </a>
  );
}

function SectionHead({ index, eyebrow, title, sub }: { index: string; eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="reveal">
      <div className="flex items-center gap-4">
        <span className="bg-accent px-2.5 py-1 font-display text-xl leading-none text-paper">{index}</span>
        <span className="h-px flex-1 bg-line" />
        <span className="bg-accent px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-paper">{eyebrow}</span>
      </div>
      <h2 className="mt-6 max-w-3xl font-display text-4xl uppercase leading-[1.02] tracking-wide text-paper md:text-6xl">{title}</h2>
      {sub && <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{sub}</p>}
    </div>
  );
}

function Ticker() {
  const row = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="overflow-hidden bg-accent py-1.5">
      <div className="animate-marquee flex w-max items-center gap-8 pr-8">
        {[...row, ...row].map((t, i) => (
          <span key={i} className="flex items-center gap-8 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-ink">
            {t} <span className="inline-block size-1.5 rotate-45 bg-ink" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Ticker />
      <div className="border-b border-line bg-ink/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
          <a href="#inicio" aria-label="AR Constructora, inicio" className="relative block h-10 w-[150px] mix-blend-screen md:h-12 md:w-[180px]">
            <img src={logo} alt="AR Constructora" width={1280} height={373} className="size-full object-contain" />
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-muted transition hover:text-accent">{n.label}</a>
            ))}
          </nav>
          <div className="hidden lg:block"><WaButton className="px-5 py-2.5">Presupuesto</WaButton></div>
          <button className="p-2 text-paper lg:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menú">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-b border-line bg-ink px-4 py-4 lg:hidden">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-line py-3.5 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-paper">{n.label}</a>
          ))}
          <WaButton className="mt-4 w-full">Pedir presupuesto (WhatsApp)</WaButton>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <img
        src={heroObra}
        alt="Obra de vivienda en construcción: fachada exterior de ladrillo, interior y ambientes"
        className="absolute inset-0 size-full object-cover"
        fetchPriority="high"
        width={1248}
        height={923}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/45" />
      <div className="absolute inset-0 blueprint opacity-60" />
      {/* marca de replanteo vertical */}
      <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 -rotate-90 items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-muted xl:flex">
        <span className="h-px w-12 bg-accent" /> 35°58′S — 64°16′W · General Pico
      </div>
      <div className="absolute right-0 top-0 hidden h-full w-28 hazard-thin opacity-15 md:block" style={{ maskImage: "linear-gradient(to bottom, transparent, #000 30%, #000 70%, transparent)" }} />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-44 md:px-8 md:pb-20">
        <p className="animate-rise inline-block bg-accent px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-paper">AR Constructora · Dirección técnica matriculada</p>
        <h1 className="animate-rise mt-6 font-display uppercase leading-[0.95] tracking-wide">
          <span className="block text-5xl text-paper md:text-7xl lg:text-8xl">Construcción</span>
          <span className="block text-5xl text-accent md:text-7xl lg:text-8xl">llave en mano</span>
          <span className="text-outline block text-5xl md:text-7xl lg:text-8xl">en La Pampa</span>
        </h1>
        <p className="animate-rise mt-7 max-w-xl text-lg leading-relaxed text-muted">
          Responsabilidad, eficacia y dirección técnica matriculada al servicio de tu proyecto.
        </p>
        <div className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row">
          <WaButton>Pedir presupuesto por WhatsApp</WaButton>
          <GhostLink href="#obras">Ver proyectos</GhostLink>
        </div>
        <dl className="animate-rise mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-line pt-6">
          {[["135+", "Obras publicadas"], ["100%", "Dirección técnica"], ["M.M.O.", "Matriculado"]].map(([n, l]) => (
            <div key={l}>
              <dt className="font-display text-3xl text-paper md:text-5xl">{n}</dt>
              <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Marquee() {
  const items = SERVICES.map((s) => s.title);
  const row = [...items, ...items];
  return (
    <div className="border-y border-line bg-panel py-4">
      <div className="animate-marquee flex w-max items-center gap-10 pr-10">
        {[...row, ...row].map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-lg uppercase tracking-wider text-muted/70">
            {t} <span className="inline-block size-2 rotate-45 bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden border-b border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 md:px-8 lg:grid-cols-[minmax(0,400px)_1fr]">
        <div className="reveal relative mx-auto w-full max-w-[360px]">
          <div className="absolute -left-3 -top-3 size-16 border-l-2 border-t-2 border-accent" />
          <div className="absolute -bottom-3 -right-3 size-16 border-b-2 border-r-2 border-accent" />
          <video
            controls
            playsInline
            preload="metadata"
            poster={aboutPoster}
            aria-label="Video de presentación de AR Constructora"
            className="relative aspect-[9/16] w-full border border-line object-cover"
          >
            <source src={aboutVideo} type="video/mp4" />
          </video>
          <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
            Conocé AR Constructora · 0:36
          </p>
        </div>
        <div>
          <SectionHead
            index="01"
            eyebrow="Nosotros"
            title={<>Una obra bien hecha empieza por saber <span className="text-accent">quién te responde</span></>}
          />
          <div className="reveal mt-8 space-y-5 leading-relaxed text-muted">
            <p>
              AR Constructora es una empresa de General Pico que se hace cargo de tu proyecto
              <strong className="font-semibold text-paper"> en cada etapa del proceso</strong>: la
              planificación, el diseño y la ejecución de la obra hasta la entrega de llaves.
            </p>
            <p>
              Detrás está el{" "}
              <strong className="font-semibold text-paper">Maestro Mayor de Obras Alexis Ruiz</strong>, con
              dirección técnica matriculada. Es la misma persona que planifica la obra la que la
              supervisa en el día a día, con cálculo riguroso y cumplimiento de las normativas vigentes.
            </p>
            <p>
              Trabajamos con presupuesto pactado antes de empezar y plazos escritos, para que sepas
              desde el primer día cuánto invertís y qué incluye.
            </p>
          </div>
          <dl className="reveal mt-10 grid gap-px border border-line bg-line sm:grid-cols-2">
            {ABOUT_FACTS.map((f) => (
              <div key={f.label} className="bg-panel p-5">
                <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">{f.label}</dt>
                <dd className="mt-2 text-sm font-semibold text-paper">{f.value}</dd>
              </div>
            ))}
          </dl>
          <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row">
            <WaButton href={waLink("Hola AR Constructora, vi el video de presentación y quiero hablar sobre mi proyecto.")}>
              Hablemos de tu proyecto
            </WaButton>
            <a href="https://www.instagram.com/ar_constructora/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-line px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-paper transition hover:border-accent hover:text-accent">
              <Instagram className="size-4" /> El día a día de obra
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="border-b border-line py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHead
          index="02"
          eyebrow="Servicios"
          title={<>Todo lo que tu obra necesita, <span className="text-accent">con un solo responsable</span></>}
        />
        <div className="mt-14 border-t border-line">
          {SERVICES.map((s, i) => (
            <article key={s.title} className="reveal group grid items-start gap-3 border-b border-line py-6 transition hover:bg-panel md:grid-cols-[90px_1fr_2fr_40px] md:items-center md:gap-6 md:px-4" style={{ transitionDelay: `${i * 60}ms` }}>
              <span className="font-mono text-sm font-bold text-muted transition group-hover:text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="flex items-center gap-4 font-display text-xl uppercase tracking-wide text-paper md:text-2xl">
                <s.icon className="size-6 shrink-0 text-accent" strokeWidth={1.5} />
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{s.text}</p>
              <ArrowUpRight className="hidden size-5 text-muted opacity-0 transition group-hover:text-accent group-hover:opacity-100 md:block" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e?.isIntersecting ?? false), { rootMargin: "200px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

function SoundToggle({ title, on, onClick }: { title: string; on: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      aria-label={on ? `Silenciar el audio de ${title}` : `Escuchar el audio de ${title}`}
      className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5 border border-line bg-ink/90 py-1 pl-3 pr-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-paper transition hover:bg-ink"
    >
      {on ? "Silenciar" : "Escuchar"}
      <span className="grid size-7 place-items-center bg-accent text-ink">
        {on ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
      </span>
    </button>
  );
}

function ArrowButton({ side, label, onClick }: { side: "left" | "right"; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`absolute top-1/2 z-20 grid size-11 -translate-y-1/2 place-items-center border border-line bg-ink/80 text-paper transition hover:bg-ink hover:text-accent ${side === "left" ? "left-2" : "right-2"}`}
    >
      {side === "left" ? <ChevronLeft className="size-5" /> : <ChevronRight className="size-5" />}
    </button>
  );
}

function BeforeAfter({ title, before, after }: { title: string; before: string; after: string }) {
  const [pos, setPos] = useState(50);
  const [active, setActive] = useState(false);
  return (
    <div className="absolute inset-0">
      <img src={after} alt={`${title}: después`} loading="lazy" width={1024} height={768} className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={before} alt={`${title}: antes`} width={1024} height={768} className="size-full object-cover" />
      </div>
      <input
        type="range" min={0} max={100} step={0.5} value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        onPointerDown={() => setActive(true)}
        onPointerUp={() => setActive(false)}
        onPointerCancel={() => setActive(false)}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        aria-label={`Comparar el antes y el después de ${title}`}
        className="absolute inset-0 z-10 size-full cursor-ew-resize appearance-none bg-transparent opacity-0 outline-none [touch-action:pan-y]"
      />
      <span className={`pointer-events-none absolute left-4 top-4 border border-line bg-ink/90 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-paper transition-opacity duration-300 ${pos < 14 ? "opacity-0" : "opacity-100"}`}>
        Antes
      </span>
      <span className={`pointer-events-none absolute right-4 top-4 bg-accent px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink transition-opacity duration-300 ${pos > 86 ? "opacity-0" : "opacity-100"}`}>
        Después
      </span>
      <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -left-px w-0.5 bg-paper/80" />
        <div className={`absolute top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center border border-line bg-ink text-paper transition duration-200 ${active ? "scale-110 border-accent text-accent" : ""}`}>
          <ChevronsLeftRight className="size-5" strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
}

type Slide =
  | { kind: "cmp"; src: string; before: string; after: string; label: string }
  | { kind: "img"; src: string; label: string }
  | { kind: "video"; src: string; label: string };

function ProjectMedia({
  title, tag, srcs, video, compare,
}: {
  title: string;
  tag: string;
  srcs: string[];
  video?: string | undefined;
  compare?: { before: string; after: string } | undefined;
}) {
  const cmpSlides: Slide[] = compare
    ? [{ kind: "cmp", src: compare.after, before: compare.before, after: compare.after, label: `el antes y el después de ${title}` }]
    : [];
  const photoLabel = (n: number) =>
    srcs.length > 1 ? `la foto ${n + 1} de ${srcs.length} de ${title}` : `la foto de ${title}`;
  const imgSlides: Slide[] = srcs.map((src, n) => ({ kind: "img", src, label: photoLabel(n) }));
  const videoSlides: Slide[] = video ? [{ kind: "video", src: video, label: `el video de ${title}` }] : [];
  const slides: Slide[] = compare ? [...cmpSlides, ...imgSlides, ...videoSlides] : [...videoSlides, ...imgSlides];

  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [sound, setSound] = useState(false);
  const [manual, setManual] = useState(false);
  const many = slides.length > 1;
  const onVideo = slides[i]?.kind === "video";
  const poster = compare?.after ?? srcs[0];
  const vid = useRef<HTMLVideoElement>(null);
  const swipe = useRef(0);
  const { ref, inView } = useInView();

  const pick = (n: number) => {
    setManual(true);
    setI(n);
  };
  const go = (d: number) => pick((i + d + slides.length) % slides.length);

  useEffect(() => {
    if (!many || paused || manual || onVideo || !inView) return;
    const t = window.setInterval(() => setI((v) => (v + 1) % slides.length), 4200);
    return () => window.clearInterval(t);
  }, [many, paused, manual, onVideo, inView, slides.length]);

  useEffect(() => {
    const el = vid.current;
    if (!el) return;
    if (onVideo && inView) void el.play().catch(() => undefined);
    else el.pause();
  }, [onVideo, inView]);

  useEffect(() => {
    if (!inView) setSound(false);
  }, [inView]);

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] select-none overflow-hidden bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={(e) => (swipe.current = e.touches[0]?.clientX ?? 0)}
      onTouchEnd={(e) => {
        if (!many || slides[i]?.kind === "cmp") return;
        const dx = (e.changedTouches[0]?.clientX ?? swipe.current) - swipe.current;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
      }}
    >
      {slides.map((s, n) => {
        const shown = n === i;
        if (s.kind === "cmp") {
          return (
            <div key={`${s.kind}-${n}`} {...(shown ? {} : { inert: "" as const })}
              className={`absolute inset-0 transition duration-700 ${shown ? "opacity-100" : "pointer-events-none opacity-0"}`}>
              <BeforeAfter title={title} before={s.before} after={s.after} />
            </div>
          );
        }
        if (s.kind === "video") {
          return (
            <video ref={vid} key={`${s.kind}-${n}`} src={s.src} poster={poster} muted={!sound} loop playsInline preload="metadata"
              aria-label={`Video de ${title}`}
              className={`absolute inset-0 size-full object-cover transition duration-700 ${shown ? "opacity-100" : "opacity-0"}`} />
          );
        }
        return (
          <img key={`${s.kind}-${n}`} src={s.src} alt={many ? s.label : title} loading="lazy" width={1024} height={768}
            className={`absolute inset-0 size-full object-contain transition duration-700 ${shown ? "opacity-100" : "opacity-0"}`} />
        );
      })}
      {video && onVideo && <SoundToggle title={title} on={sound} onClick={() => setSound((v) => !v)} />}
      {many && (
        <>
          <ArrowButton side="left" label={`Ver la imagen anterior de ${title}`} onClick={() => go(-1)} />
          <ArrowButton side="right" label={`Ver la imagen siguiente de ${title}`} onClick={() => go(1)} />
        </>
      )}
      <span className="absolute left-0 top-4 bg-accent px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
        {tag}
      </span>
      {many && (
        <div className="absolute bottom-3 right-3 flex gap-1.5">
          {slides.map((s, n) => (
            <button
              key={`${s.kind}-${n}`}
              type="button"
              onClick={() => pick(n)}
              aria-label={`Ver ${s.label}`}
              aria-current={n === i}
              className={`h-1.5 rounded-full transition-all duration-300 ${n === i ? "w-5 bg-accent" : "w-1.5 bg-paper/40 hover:bg-paper/70"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Works() {
  const [cat, setCat] = useState<Cat>("todas");
  const list = PROJECTS.filter((p) => cat === "todas" || p.cat === cat);
  return (
    <section id="obras" className="border-b border-line bg-panel py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHead
          index="03"
          eyebrow="Obras y casos de éxito"
          title={<>Proyectos reales en <span className="text-accent">General Pico</span> y la zona</>}
        />
        <div className="mt-10 flex flex-wrap gap-2" role="tablist">
          {FILTERS.map((f) => (
            <button key={f.id} role="tab" aria-selected={cat === f.id} onClick={() => setCat(f.id)}
              className={`border px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] transition ${cat === f.id ? "border-accent bg-accent text-ink" : "border-line text-muted hover:border-paper/40 hover:text-paper"}`}>
              {f.label}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, idx) => (
            <article key={p.title} className={`reveal group border border-line bg-ink ${idx === 0 && cat === "todas" ? "sm:col-span-2" : ""}`}>
              <ProjectMedia
                title={p.title}
                tag={p.tag}
                srcs={p.before ? (p.more ?? []) : photos(p)}
                video={p.video}
                compare={p.before && p.img ? { before: p.before, after: p.img } : undefined}
              />
              <div className="p-6">
                <h3 className="font-display text-lg uppercase tracking-wide text-paper">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
                {p.before && (
                  <p className="mt-4 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
                    <ChevronsLeftRight className="size-4 text-accent" /> Arrastrá para comparar
                    {(p.more?.length ?? 0) > 0 || p.video ? <span className="text-accent">· flechas para ver más</span> : null}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="https://www.instagram.com/ar_constructora/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent hover:underline">
            <Instagram className="size-4" /> Ver más obras en Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function Authority() {
  return (
    <section id="protocolo" className="relative overflow-hidden border-b border-line py-24 md:py-32">
      <img
        src={concreteTexture}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 size-full object-cover grayscale-[0.85] brightness-[0.6] contrast-[1.05]"
      />
      <div className="absolute inset-0 bg-ink/25" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHead
          index="04"
          eyebrow="Por qué elegirnos"
          title={<>Construir con <span className="text-accent">respaldo técnico</span> cambia todo</>}
        />
        <ol className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {PROTOCOL.map((p, i) => (
            <li key={p.title} className="reveal group relative bg-panel p-6 md:p-8" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="font-display text-5xl text-outline-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 font-display text-lg uppercase tracking-wide text-paper">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.text}</p>
              <div className="absolute inset-x-0 top-0 h-1 hazard-thin opacity-0 transition group-hover:opacity-100" />
            </li>
          ))}
        </ol>

        <h3 className="reveal mt-24 font-display text-3xl uppercase tracking-wide text-paper md:text-5xl">
          ¿Construir con empresa o contratar albañiles <span className="text-accent">por tu cuenta</span>?
        </h3>
        <p className="reveal mt-3 text-muted">Descubrí qué opción te da más tranquilidad.</p>
        <div className="reveal mt-10 grid gap-px border border-line bg-line md:grid-cols-2">
          <div className="bg-panel p-6 md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <CheckCircle2 className="size-6 text-accent" />
              <h4 className="font-display text-lg uppercase tracking-wide text-paper">AR Constructora</h4>
              <span className="bg-accent px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink">Llave en mano</span>
            </div>
            <ul className="mt-6 space-y-3">
              {CON_EMPRESA.map((t) => (
                <li key={t} className="flex items-start gap-3 text-paper">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-panel p-6 md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <XCircle className="size-6 text-muted" />
              <h4 className="font-display text-lg uppercase tracking-wide text-muted">Contratar albañiles</h4>
              <span className="border border-line px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Por tu cuenta</span>
            </div>
            <ul className="mt-6 space-y-3">
              {POR_TU_CUENTA.map((t) => (
                <li key={t} className="flex items-start gap-3 text-muted">
                  <XCircle className="mt-0.5 size-5 shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-panel md:col-span-2">
            <div className="h-2 hazard" />
            <div className="flex flex-col gap-2 px-6 py-6 md:flex-row md:items-center md:justify-between md:gap-6 md:px-10">
              <p className="font-display text-xl uppercase tracking-wide text-paper md:text-2xl">Vos disfrutás el proceso</p>
              <p className="max-w-md font-mono text-[11px] font-bold uppercase leading-relaxed tracking-[0.2em] text-accent">
                Nosotros nos ocupamos de planificación, coordinación, ejecución y control
              </p>
            </div>
            <div className="h-2 hazard" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Eifs() {
  return (
    <section id="eifs" className="relative overflow-hidden border-b border-line bg-panel py-24 md:py-32">
      <span className="pointer-events-none absolute -right-6 top-8 select-none font-display text-[22vw] uppercase leading-none text-outline opacity-25">
        EIFS
      </span>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
        <div className="reveal relative">
          <div className="absolute -left-3 -top-3 size-16 border-l-2 border-t-2 border-accent" />
          <div className="absolute -bottom-3 -right-3 size-16 border-b-2 border-r-2 border-accent" />
          <img src={imgEifsInstalacion} alt="Vivienda en obra con placas de EPS fijadas al muro de ladrillo y base coat con malla aplicado" loading="lazy" width={1200} height={670} className="relative border border-line object-cover" />
        </div>
        <div className="reveal">
          <p className="inline-block bg-accent px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-paper">Sistema EIFS · 05</p>
          <h2 className="mt-5 font-display text-4xl uppercase leading-[1.02] tracking-wide text-paper md:text-6xl">
            Tu casa, protegida del <span className="text-accent">clima pampeano</span>
          </h2>
          <p className="mt-6 leading-relaxed text-muted">
            El sistema de aislación térmica exterior envuelve los muros con placas de EPS de alta densidad, malla y base coat. Reduce el consumo de calefacción y aire acondicionado, y sella fisuras de asentamiento.
          </p>
          <ul className="mt-8 space-y-3 border-t border-line pt-6">
            {["Menos frío en invierno y menos calor en verano", "Ahorro en gas y electricidad", "Reparación de fisuras y renovación de fachada", "Aplicable en obra nueva y en viviendas existentes"].map((t) => (
              <li key={t} className="flex items-start gap-3 text-paper">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" /> {t}
              </li>
            ))}
          </ul>
          <WaButton className="mt-10" href={waLink("Hola, quiero consultar por aislación térmica EIFS.")}>Consultar por EIFS</WaButton>
        </div>
      </div>
    </section>
  );
}

const inputCls = "w-full border border-line bg-panel px-4 py-3 text-sm text-paper placeholder:text-muted/60 focus:border-accent focus:outline-none";

function Contact() {
  const [errors, setErrors] = useState<Partial<Record<"nombre" | "telefono" | "tipo", string>>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const errs: typeof errors = {};
    if (data.nombre?.trim().length < 2) errs.nombre = "Ingresá tu nombre";
    if (!/^[0-9+\s()-]{6,30}$/.test(data.telefono?.trim() ?? "")) errs.telefono = "Ingresá un teléfono válido";
    if (!data.tipo) errs.tipo = "Elegí un tipo de obra";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    const msg = `Hola AR Constructora, soy ${data.nombre.trim()} (tel. ${data.telefono.trim()}). Quiero consultar por: ${data.tipo}.${data.mensaje ? `\n${data.mensaje}` : ""}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <section id="contacto" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHead index="06" eyebrow="Contacto" title={<>Contanos <span className="text-accent">tu proyecto</span></>} />
          <div className="reveal mt-10 space-y-6">
            <a href="https://maps.google.com/?q=Calle+17+1062,+General+Pico,+La+Pampa" target="_blank" rel="noopener noreferrer" className="flex gap-4">
              <MapPin className="size-6 shrink-0 text-accent" />
              <span><strong className="block font-semibold text-paper">Calle 17 N° 1062 (e/ 20 y 22)</strong><span className="text-muted">General Pico, La Pampa, Argentina</span></span>
            </a>
            <a href="tel:+5492302591600" className="flex gap-4">
              <Phone className="size-6 shrink-0 text-accent" />
              <span><strong className="block font-semibold text-paper">+54 9 2302 591600</strong><span className="text-muted">Llamadas y WhatsApp</span></span>
            </a>
          </div>
          <WaButton className="reveal mt-10">Escribir por WhatsApp</WaButton>
          <iframe title="Ubicación de AR Constructora" className="map-dark reveal mt-10 aspect-video w-full border border-line" loading="lazy"
            src="https://www.google.com/maps?q=Calle+17+1062,+General+Pico,+La+Pampa&output=embed" />
        </div>
        <div className="lg:col-span-3">
          <form onSubmit={onSubmit} noValidate className="reveal relative border border-line bg-panel p-6 md:p-10">
            <div className="absolute -left-3 -top-3 size-12 border-l-2 border-t-2 border-accent" />
            <h3 className="font-display text-2xl uppercase tracking-wide text-paper">Consulta rápida</h3>
            <p className="mt-2 text-sm text-muted">Te respondemos por WhatsApp a la brevedad.</p>
            {sent && (
              <div className="mt-6 flex items-start gap-3 border border-accent/40 bg-accent/10 p-4 text-sm text-paper">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                ¡Gracias! Abrimos WhatsApp con tu consulta lista para enviar.
              </div>
            )}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="block font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted">
                Nombre
                <input name="nombre" maxLength={80} className={`mt-2 ${inputCls}`} placeholder="Tu nombre" />
                {errors.nombre && <span className="mt-1 block font-mono text-[10px] normal-case tracking-normal text-accent">{errors.nombre}</span>}
              </label>
              <label className="block font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted">
                Teléfono
                <input name="telefono" type="tel" maxLength={30} className={`mt-2 ${inputCls}`} placeholder="2302 ..." />
                {errors.telefono && <span className="mt-1 block font-mono text-[10px] normal-case tracking-normal text-accent">{errors.telefono}</span>}
              </label>
              <label className="block font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted sm:col-span-2">
                Tipo de obra
                <select name="tipo" defaultValue="" className={`mt-2 ${inputCls}`}>
                  <option value="" disabled>Seleccioná una opción</option>
                  <option>Construcción llave en mano</option>
                  <option>Obra comercial o industrial</option>
                  <option>Refacción o ampliación</option>
                  <option>Aislación térmica EIFS</option>
                  <option>Cielos rasos</option>
                  <option>Dirección de obra</option>
                  <option>Planos y trámites</option>
                  <option>Modelado 3D</option>
                  <option>Pulido de pisos o texturados</option>
                  <option>Otro</option>
                </select>
                {errors.tipo && <span className="mt-1 block font-mono text-[10px] normal-case tracking-normal text-accent">{errors.tipo}</span>}
              </label>
              <label className="block font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted sm:col-span-2">
                Mensaje
                <textarea name="mensaje" rows={4} maxLength={800} className={`mt-2 ${inputCls}`} placeholder="Metros, ubicación del lote, plazos..." />
              </label>
            </div>
            <button type="submit" className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-accent px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink transition hover:bg-accent-soft">
              Enviar consulta <ArrowRight className="size-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line pb-28 pt-16 md:pb-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <img src={logo} alt="AR Constructora" className="h-12 w-auto mix-blend-screen" width={1280} height={373} loading="lazy" />
          <div className="flex gap-4">
            <a href="https://www.instagram.com/ar_constructora/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid size-10 place-items-center border border-line text-muted transition hover:border-accent hover:text-accent"><Instagram className="size-5" /></a>
            <a href="https://www.facebook.com/2053937308224508" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid size-10 place-items-center border border-line text-muted transition hover:border-accent hover:text-accent"><Facebook className="size-5" /></a>
          </div>
        </div>
        <p className="mt-10 select-none text-center font-display uppercase leading-none text-outline opacity-40" style={{ fontSize: "clamp(3rem, 11vw, 10rem)" }}>
          AR Constructora
        </p>
        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-muted md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} AR Constructora · General Pico, La Pampa</p>
          <p>Las imágenes son ilustrativas. Desarrollo web: <a href="https://www.impulsatunegocio.digital/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">impulsatunegocio.digital</a></p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  useReveal();
  return (
    <div className="min-h-screen bg-ink text-paper">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Works />
        <Authority />
        <Eifs />
        <Contact />
      </main>
      <Footer />
      <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition hover:scale-105">
        <MessageCircle className="size-7" />
      </a>
    </div>
  );
}

export default App;
