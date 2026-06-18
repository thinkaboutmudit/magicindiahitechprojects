import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { S as SiteLayout } from "./SiteLayout-wPu0vcQ5.js";
import { ArrowLeft, MapPin, CheckCircle2, IndianRupee, Maximize, X, ChevronLeft, ChevronRight } from "lucide-react";
import { R as Route } from "./router-Zn_Leek1.js";
import "@tanstack/react-query";
function ProjectDetail() {
  const {
    project
  } = Route.useLoaderData();
  const [activeIndex, setActiveIndex] = useState(null);
  const gallery = project.gallery ?? [];
  const highlights = ["Premium location with strong appreciation", "RERA-aligned planning & approvals", "Modern amenities and clubhouse", "Wide internal roads & green belts", "24x7 security and power backup", "Easy financing & flexible plans"];
  const openImage = (index) => setActiveIndex(index);
  const closeGallery = () => setActiveIndex(null);
  const showPrevious = () => setActiveIndex((current) => {
    if (current === null || gallery.length === 0) return null;
    return (current - 1 + gallery.length) % gallery.length;
  });
  const showNext = () => setActiveIndex((current) => {
    if (current === null || gallery.length === 0) return null;
    return (current + 1) % gallery.length;
  });
  return /* @__PURE__ */ jsxs(SiteLayout, { transparentHeaderOffset: true, children: [
    /* @__PURE__ */ jsxs("section", { className: "relative h-[60vh] min-h-[420px] overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: project.image, alt: project.name, className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" }),
      /* @__PURE__ */ jsx("div", { className: "container-px relative z-10 mx-auto flex h-full max-w-7xl items-end pb-14", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(Link, { to: "/projects", className: "inline-flex items-center gap-1 text-sm text-white/80 hover:text-white", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
          " All Projects"
        ] }),
        /* @__PURE__ */ jsx("span", { className: "mt-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground", children: project.type }),
        /* @__PURE__ */ jsx("h1", { className: "mt-3 font-serif text-5xl font-bold text-white md:text-6xl", children: project.name }),
        /* @__PURE__ */ jsxs("p", { className: "mt-3 flex items-center gap-2 text-white/85", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-accent" }),
          " ",
          project.location
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxs("div", { className: "container-px mx-auto grid max-w-7xl gap-10 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl font-bold", children: "Overview" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: project.desc }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "Our team has carefully curated this project to deliver strong long-term value, modern living standards and an address you'll be proud to call home. Every plot, every floor and every amenity is planned for sustained appreciation and comfort." }),
        /* @__PURE__ */ jsx("h3", { className: "mt-10 font-serif text-2xl font-bold", children: "Project Highlights" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 grid gap-3 sm:grid-cols-2", children: highlights.map((h) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 rounded-xl border border-border bg-card p-4", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 shrink-0 text-primary" }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-sm", children: h })
        ] }, h)) })
      ] }),
      /* @__PURE__ */ jsx("aside", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(IndianRupee, { className: "h-5 w-5 text-primary mt-0.5" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Price" }),
              /* @__PURE__ */ jsx("div", { className: "font-semibold text-secondary", children: project.price })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(Maximize, { className: "h-5 w-5 text-primary mt-0.5" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Size" }),
              /* @__PURE__ */ jsx("div", { className: "font-semibold text-secondary", children: project.size })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5 text-primary mt-0.5" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Location" }),
              /* @__PURE__ */ jsx("div", { className: "font-semibold text-secondary", children: project.location })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn-saffron mt-6 w-full", children: "Enquire Now" }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn-gold mt-3 w-full", children: "Book Site Visit" })
      ] }) })
    ] }) }),
    gallery.length > 0 ? /* @__PURE__ */ jsx("section", { className: "py-16 bg-muted/40", children: /* @__PURE__ */ jsxs("div", { className: "container-px mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl font-bold", children: "Project Gallery" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "Click any image to view it larger with next/prev controls." }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 overflow-x-auto pb-4", children: /* @__PURE__ */ jsx("div", { className: "grid auto-cols-[minmax(280px,1fr)] grid-flow-col gap-4", children: gallery.map((src, index) => /* @__PURE__ */ jsx("button", { type: "button", onClick: () => openImage(index), className: "group min-w-[280px] overflow-hidden rounded-3xl border border-border bg-background p-0 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary", children: /* @__PURE__ */ jsx("img", { src, alt: `${project.name} gallery ${index + 1}`, className: "h-60 w-full object-cover transition duration-300 group-hover:scale-105" }) }, index)) }) })
    ] }) }) : null,
    activeIndex !== null ? /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 grid place-items-center bg-black/90 p-4", children: /* @__PURE__ */ jsxs("div", { className: "relative inline-flex max-h-[95vh] max-w-[95vw] overflow-hidden rounded-3xl bg-black", children: [
      /* @__PURE__ */ jsxs("button", { type: "button", onClick: closeGallery, className: "absolute right-4 top-4 z-20 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white", children: [
        /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
      ] }),
      /* @__PURE__ */ jsxs("button", { type: "button", onClick: showPrevious, className: "absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white", children: [
        /* @__PURE__ */ jsx(ChevronLeft, { className: "h-6 w-6" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous" })
      ] }),
      /* @__PURE__ */ jsx("img", { src: project.gallery[activeIndex], alt: `${project.name} gallery ${activeIndex + 1}`, className: "max-h-[95vh] max-w-[95vw] object-contain" }),
      /* @__PURE__ */ jsxs("button", { type: "button", onClick: showNext, className: "absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white", children: [
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-6 w-6" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next" })
      ] })
    ] }) }) : null
  ] });
}
export {
  ProjectDetail as component
};
