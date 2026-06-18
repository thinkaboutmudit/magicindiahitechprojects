import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteLayout } from "./SiteLayout-wPu0vcQ5.js";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Facebook, Instagram, MessageCircle, ChevronDown, Car, Dumbbell, Trees, Waves, PawPrint, ToyBrick, Zap, Sparkles, Plug, Baby } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { S as STATS, a as PROJECTS } from "./router-Zn_Leek1.js";
import { Link } from "@tanstack/react-router";
import "@tanstack/react-query";
const skyImg = "/assets/sky-CcJDaE76.jpg";
const mountainsImg = "/assets/mountains-CjoQ-BN-.png";
const meadowsImg = "/assets/meadows-CWdpwSXo.png";
const villaImg = "/assets/villa-BXhrLzEn.png";
gsap.registerPlugin(ScrollTrigger);
function Hero() {
  const ref = useRef(null);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const ctx = gsap.context(() => {
      const sky = ref.current.querySelector(".layer-sky");
      const mountains = ref.current.querySelector(".layer-mountains");
      const meadows = ref.current.querySelector(".layer-meadows");
      const villa = ref.current.querySelector(".layer-villa");
      const headline = ref.current.querySelector(".hero-copy");
      gsap.set(villa, { yPercent: 95, scale: 1.05 });
      gsap.set(meadows, { yPercent: 20 });
      gsap.set(mountains, { yPercent: 10 });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "+=160%",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1
        }
      });
      tl.to(sky, { yPercent: -6, ease: "none" }, 0).to(mountains, { yPercent: -14, ease: "none" }, 0).to(meadows, { yPercent: -22, ease: "none" }, 0).to(villa, { yPercent: 0, scale: 1, ease: "power2.out" }, 0).to(headline, { yPercent: -30, opacity: 0, ease: "power1.in" }, 0.05);
    }, ref);
    return () => ctx.revert();
  }, []);
  return /* @__PURE__ */ jsxs("section", { ref, className: "relative h-screen w-full overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "layer-sky absolute inset-0 -top-[10%] h-[120%] bg-cover bg-center",
        style: { backgroundImage: `url(${skyImg})` }
      }
    ),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: mountainsImg,
        alt: "",
        "aria-hidden": true,
        className: "layer-mountains pointer-events-none absolute bottom-[28%] left-0 w-full select-none object-cover opacity-90"
      }
    ),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: meadowsImg,
        alt: "",
        "aria-hidden": true,
        className: "layer-meadows pointer-events-none absolute bottom-0 left-0 w-full select-none object-cover"
      }
    ),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: villaImg,
        alt: "Luxury villa",
        className: "layer-villa pointer-events-none absolute bottom-0 left-1/2 w-[140%] max-w-[1600px] -translate-x-1/2 select-none drop-shadow-2xl md:w-[95%]"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(20,15,5,0.18)_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "hero-copy relative z-10 flex h-full flex-col items-center justify-start pt-28 text-center md:pt-32", children: /* @__PURE__ */ jsxs("div", { className: "container-px mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-block rounded-full bg-white/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-foreground backdrop-blur", children: "MAGIC INDIA HITECH PROJECTS" }),
      /* @__PURE__ */ jsx("h1", { className: "hero-headline mt-5 font-serif font-bold leading-[0.95] tracking-tight", children: "Find Your Dream Property" }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-xl text-base hero-copy-text sm:text-lg", children: "Expert guidance. Thoughtful recommendations. Find the property that fits your future." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "absolute left-5 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-3 md:flex", children: [
      /* @__PURE__ */ jsx("a", { href: "#", className: "grid h-10 w-10 place-items-center rounded-full text-white transition shadow-lg", style: { backgroundColor: "#1877F2" }, children: /* @__PURE__ */ jsx(Facebook, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsx("a", { href: "#", className: "grid h-10 w-10 place-items-center rounded-full text-white transition shadow-lg", style: { background: "linear-gradient(135deg, #FEDA75 0%, #FA7E1E 45%, #D62976 60%, #962FBF 75%, #4F5BD5 100%)" }, children: /* @__PURE__ */ jsx(Instagram, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsx("a", { href: "#", className: "grid h-10 w-10 place-items-center rounded-full text-white transition shadow-lg", style: { backgroundColor: "#25D366" }, children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-foreground/70", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold uppercase tracking-[0.25em]", children: "Scroll" }),
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-5 w-5 animate-bounce" })
    ] })
  ] });
}
function HeroVideo() {
  const videoId = "oAzW8DR_vCc";
  return /* @__PURE__ */ jsx("section", { className: "bg-background py-14 md:py-18", children: /* @__PURE__ */ jsxs("div", { className: "container-px mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-10 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "Showcase" }),
        /* @__PURE__ */ jsxs("h2", { className: "display-xl mt-5 text-foreground", children: [
          "A Glimpse Into ",
          /* @__PURE__ */ jsx("em", { className: "font-serif italic text-muted-foreground/80", children: "Magic India." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "max-w-sm text-muted-foreground", children: "Crafted spaces, curated living — explore the world we are building across India." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden rounded-3xl bg-black shadow-2xl", children: /* @__PURE__ */ jsx("div", { className: "aspect-video w-full", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        className: "h-full w-full",
        src: `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&showinfo=0&rel=0&playsinline=1&playlist=${videoId}`,
        title: "Magic India Showcase",
        allow: "autoplay; encrypted-media; picture-in-picture",
        allowFullScreen: true
      }
    ) }) })
  ] }) });
}
function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 2e3;
    const start = performance.now();
    let raf = 0;
    const tick = (t) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return /* @__PURE__ */ jsxs("span", { ref, children: [
    n.toLocaleString(),
    suffix
  ] });
}
function Stats() {
  return /* @__PURE__ */ jsx("section", { className: "border-y border-border bg-background py-12", children: /* @__PURE__ */ jsx("div", { className: "container-px mx-auto max-w-7xl", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-y-12 lg:grid-cols-4", children: STATS.map((s, i) => /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.5, delay: i * 0.08 },
      className: "border-r border-border px-6 last:border-r-0 lg:px-10",
      children: [
        /* @__PURE__ */ jsx("div", { className: "font-serif text-5xl font-semibold tracking-tight text-foreground md:text-6xl", children: /* @__PURE__ */ jsx(Counter, { value: s.value, suffix: s.suffix }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: s.label })
      ]
    },
    s.label
  )) }) }) });
}
const points = [
  { n: "01", title: "Expertise You Can Trust", desc: "12+ years navigating India's most dynamic property markets — from Dehradun's foothills to the Yamuna Expressway." },
  { n: "02", title: "Thoughtful Recommendations", desc: "Every listing is curated. We surface properties that fit your timeline, budget, and long-term goals." },
  { n: "03", title: "A Clear Path Forward", desc: "Site visits, paperwork, registration, possession — guided end-to-end by people who answer your calls." }
];
function About() {
  return /* @__PURE__ */ jsx("section", { className: "bg-background py-20", children: /* @__PURE__ */ jsx("div", { className: "container-px mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-10 lg:grid-cols-12 lg:gap-14", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.7 },
        className: "lg:col-span-5",
        children: [
          /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "About" }),
          /* @__PURE__ */ jsxs("h2", { className: "display-xl mt-6 text-foreground", children: [
            "Real Estate, ",
            /* @__PURE__ */ jsx("em", { className: "font-serif italic text-muted-foreground/80", children: "Refined." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-md text-base leading-relaxed text-muted-foreground", children: "Magic India Hitech Projects is a developer and advisor for people who want their next home — or next investment — to be a considered decision, not a rushed one." }),
          /* @__PURE__ */ jsxs(Link, { to: "/about", className: "btn-dark mt-10", children: [
            "Our Story ",
            /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "→" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsx("div", { className: "divide-y divide-border", children: points.map((p, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.55, delay: i * 0.08 },
        className: "grid grid-cols-12 gap-6 py-10 first:pt-0",
        children: [
          /* @__PURE__ */ jsx("span", { className: "col-span-2 font-serif text-xl text-primary md:text-2xl", children: p.n }),
          /* @__PURE__ */ jsxs("div", { className: "col-span-10", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl text-foreground md:text-3xl", children: p.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: p.desc })
          ] })
        ]
      },
      p.n
    )) }) })
  ] }) }) });
}
function ProjectsSection() {
  return /* @__PURE__ */ jsx("section", { className: "bg-background py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-px mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-end justify-between gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "Portfolio" }),
        /* @__PURE__ */ jsxs("h2", { className: "display-xl mt-6 text-foreground", children: [
          "Places Worth ",
          /* @__PURE__ */ jsx("em", { className: "font-serif italic text-muted-foreground/80", children: "Moving For." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Link, { to: "/projects", className: "btn-dark", children: [
        "All Projects ",
        /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "→" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3", children: PROJECTS.map((p, i) => /* @__PURE__ */ jsx(
      motion.article,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-40px" },
        transition: { duration: 0.6, delay: i % 3 * 0.08 },
        className: "group",
        children: /* @__PURE__ */ jsxs(Link, { to: "/projects/$slug", params: { slug: p.slug }, className: "block", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/5] overflow-hidden rounded-3xl bg-card", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: p.image,
                alt: p.name,
                className: "h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "absolute left-5 top-5 rounded-full bg-background/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-foreground backdrop-blur", children: p.type })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl text-foreground", children: p.name }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 truncate text-sm text-muted-foreground", children: p.location })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "shrink-0 text-sm font-medium text-foreground transition-transform group-hover:translate-x-1", children: "→" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-3 text-sm text-muted-foreground", children: p.price })
        ] })
      },
      p.slug
    )) })
  ] }) });
}
const items = [
  { name: "Car Parking", Icon: Car },
  { name: "Fitness Center", Icon: Dumbbell },
  { name: "Rooftop Garden", Icon: Trees },
  { name: "Indoor Pool", Icon: Waves },
  { name: "Pet Friendly", Icon: PawPrint },
  { name: "Playground", Icon: ToyBrick },
  { name: "Power Backup", Icon: Zap },
  { name: "Swimming Pool", Icon: Sparkles },
  { name: "EV Charging", Icon: Plug },
  { name: "Kids' Play Area", Icon: Baby }
];
function Amenities() {
  return /* @__PURE__ */ jsx("section", { className: "bg-background py-20", children: /* @__PURE__ */ jsx("div", { className: "container-px mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5", children: [
      /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "Living" }),
      /* @__PURE__ */ jsxs("h2", { className: "display-xl mt-6 text-foreground", children: [
        "Built around ",
        /* @__PURE__ */ jsx("em", { className: "font-serif italic text-muted-foreground/80", children: "comfort." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-sm text-muted-foreground", children: "Every Magic India address is designed with the small things that make a home feel like one." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3", children: items.map((it, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.45, delay: i * 0.04 },
        className: "flex items-center gap-3 border-b border-border pb-4",
        children: [
          /* @__PURE__ */ jsx(it.Icon, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground", children: it.name })
        ]
      },
      it.name
    )) }) })
  ] }) }) });
}
function Index() {
  return /* @__PURE__ */ jsxs(SiteLayout, { transparentHeaderOffset: true, children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Stats, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(HeroVideo, {}),
    /* @__PURE__ */ jsx(ProjectsSection, {}),
    /* @__PURE__ */ jsx(Amenities, {})
  ] });
}
export {
  Index as component
};
