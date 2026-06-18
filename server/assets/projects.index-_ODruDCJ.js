import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { S as SiteLayout } from "./SiteLayout-wPu0vcQ5.js";
import { a as PROJECTS } from "./router-Zn_Leek1.js";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import "react";
import "@tanstack/react-query";
const projectsIndexImg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwMCIgaGVpZ2h0PSIxMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICA8cmVjdCB3aWR0aD0iMjAwMCIgaGVpZ2h0PSIxMDAwIiBmaWxsPSIjZDllNWYwIi8+DQogIDx0ZXh0IHg9IjEwMDAiIHk9IjUwMCIgZm9udC1zaXplPSI2NCIgZmlsbD0iIzRhN2JhNyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZm9udC13ZWlnaHQ9ImJvbGQiPlByb2plY3RzIFBhZ2UgSW1hZ2U8L3RleHQ+DQo8L3N2Zz4=";
function ProjectsIndex() {
  return /* @__PURE__ */ jsxs(SiteLayout, { transparentHeaderOffset: true, children: [
    /* @__PURE__ */ jsxs("section", { className: "relative h-[44vh] min-h-[320px] overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: projectsIndexImg, alt: "", className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" }),
      /* @__PURE__ */ jsx("div", { className: "container-px relative z-10 mx-auto flex h-full max-w-7xl items-end pb-14", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur", children: "Our Portfolio" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-4 font-serif text-5xl font-bold text-white md:text-6xl", children: "Projects" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-xl text-white/85", children: "High-return investment opportunities curated by experts who know India's real estate inside out." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container-px mx-auto max-w-7xl", children: /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: PROJECTS.map((p, i) => /* @__PURE__ */ jsxs(motion.article, { initial: {
      opacity: 0,
      y: 24
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      duration: 0.4,
      delay: i % 3 * 0.08
    }, className: "overflow-hidden rounded-3xl bg-card card-hover", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative h-60 overflow-hidden", children: [
        /* @__PURE__ */ jsx("img", { src: p.image, alt: p.name, className: "h-full w-full object-cover transition duration-700 hover:scale-110" }),
        /* @__PURE__ */ jsx("span", { className: "absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground", children: p.type })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl font-bold", children: p.name }),
        /* @__PURE__ */ jsxs("p", { className: "mt-1 flex items-center gap-1.5 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5 text-primary" }),
          " ",
          p.location
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground line-clamp-2", children: p.desc }),
        /* @__PURE__ */ jsxs("div", { className: "mt-5 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-secondary", children: p.price }),
          /* @__PURE__ */ jsxs(Link, { to: "/projects/$slug", params: {
            slug: p.slug
          }, className: "inline-flex items-center gap-1 text-sm font-semibold text-primary", children: [
            "View Details ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] })
      ] })
    ] }, p.slug)) }) }) })
  ] });
}
export {
  ProjectsIndex as component
};
