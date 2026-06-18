import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteLayout } from "./SiteLayout-wPu0vcQ5.js";
import { useState } from "react";
import { Upload, X, ImagePlus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "@tanstack/react-router";
import "./router-Zn_Leek1.js";
import "@tanstack/react-query";
const gallery1 = "/assets/gallery-1-CtuUTWa_.jpeg";
const gallery2 = "/assets/gallery-2-0bzNEijB.jpeg";
const gallery3 = "/assets/gallery-3-C2LgjAW6.jpeg";
const gallery4 = "/assets/gallery-4-CFaCWy3E.jpeg";
const gallery5 = "/assets/gallery-5-CrQ8ja__.jpeg";
const gallery6 = "/assets/gallery-6-CJ60nBcB.jpeg";
const gallery7 = "/assets/gallery-7-jW4nS_OJ.jpeg";
const gallery8 = "/assets/gallery-8-Dk9MeT8f.jpeg";
const gallery9 = "/assets/gallery-9-Dg-bQonJ.jpeg";
const gallery10 = "/assets/gallery-10-BdaYsCDp.jpeg";
const gallery11 = "/assets/gallery-11-Dgr2BgC-.jpeg";
const gallery12 = "/assets/gallery-12-C-IFoQaf.jpeg";
const IMAGES = [{
  src: gallery1,
  cat: "Aero Classic City",
  h: 380
}, {
  src: gallery2,
  cat: "Aero Dream City",
  h: 520
}, {
  src: gallery3,
  cat: "Hillock Meadows",
  h: 420
}, {
  src: gallery4,
  cat: "Aero Dream City",
  h: 360
}, {
  src: gallery5,
  cat: "Aero Classic City",
  h: 480
}, {
  src: gallery6,
  cat: "Magic Meadows",
  h: 360
}, {
  src: gallery7,
  cat: "Aero Classic City",
  h: 440
}, {
  src: gallery8,
  cat: "Magic Meadows",
  h: 380
}, {
  src: gallery9,
  cat: "Hillock Meadows",
  h: 460
}, {
  src: gallery10,
  cat: "Hillock Meadows",
  h: 360
}, {
  src: gallery11,
  cat: "Aero Classic City",
  h: 500
}, {
  src: gallery12,
  cat: "Aero Dream City",
  h: 380
}];
const FILTERS = ["All", "Aero Classic City", "Aero Dream City", "Hillock Meadows", "Magic Meadows"];
function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const [upload, setUpload] = useState(false);
  const items = filter === "All" ? IMAGES : IMAGES.filter((i) => i.cat === filter);
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxs("section", { className: "container-px mx-auto max-w-7xl pt-10 pb-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "section-label", children: "Gallery" }),
          /* @__PURE__ */ jsx("h1", { className: "font-serif text-5xl font-bold md:text-6xl", children: "A look inside Magic India" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-xl text-muted-foreground", children: "Glimpses from our apartments, farmhouses, plots and the Doon valley." })
        ] }),
        /* @__PURE__ */ jsxs("button", { onClick: () => setUpload(true), className: "btn-saffron", children: [
          /* @__PURE__ */ jsx(Upload, { className: "h-4 w-4" }),
          " Upload Photo"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 flex flex-wrap gap-2", children: FILTERS.map((f) => /* @__PURE__ */ jsx("button", { onClick: () => setFilter(f), className: `rounded-full px-4 py-2 text-sm font-semibold transition ${filter === f ? "bg-primary text-primary-foreground shadow-[var(--shadow-warm)]" : "bg-card text-foreground hover:bg-muted"}`, children: f }, f)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "container-px mx-auto max-w-7xl pb-24", children: /* @__PURE__ */ jsx("div", { className: "columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4", children: items.map((img, i) => /* @__PURE__ */ jsx(motion.button, { layout: true, initial: {
      opacity: 0,
      scale: 0.96
    }, animate: {
      opacity: 1,
      scale: 1
    }, transition: {
      duration: 0.35,
      delay: i % 8 * 0.04
    }, onClick: () => setLightbox(img.src), className: "mb-4 block w-full overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-soft)]", style: {
      breakInside: "avoid"
    }, children: /* @__PURE__ */ jsx("img", { src: img.src, alt: "", loading: "lazy", style: {
      height: img.h
    }, className: "h-auto w-full object-cover transition duration-500 hover:scale-105" }) }, img.src + i)) }) }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: lightbox && /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, className: "fixed inset-0 z-[100] grid place-items-center bg-black/90 p-4", onClick: () => setLightbox(null), children: [
      /* @__PURE__ */ jsx("button", { className: "absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white", "aria-label": "Close", children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsx(motion.img, { initial: {
        scale: 0.9
      }, animate: {
        scale: 1
      }, src: lightbox, className: "max-h-[90vh] max-w-[95vw] rounded-2xl object-contain" })
    ] }) }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: upload && /* @__PURE__ */ jsx(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, className: "fixed inset-0 z-[100] grid place-items-center bg-black/60 p-4", onClick: () => setUpload(false), children: /* @__PURE__ */ jsxs(motion.div, { initial: {
      y: 20,
      opacity: 0
    }, animate: {
      y: 0,
      opacity: 1
    }, exit: {
      y: 20,
      opacity: 0
    }, onClick: (e) => e.stopPropagation(), className: "w-full max-w-lg rounded-3xl bg-background p-6 shadow-2xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl font-bold", children: "Upload Photo" }),
        /* @__PURE__ */ jsx("button", { onClick: () => setUpload(false), "aria-label": "Close", className: "rounded-full p-2 hover:bg-muted", children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-border bg-card p-10 text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsx(ImagePlus, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Drag & drop your image here" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "or click to browse — JPG, PNG up to 10MB" }),
        /* @__PURE__ */ jsx("button", { className: "btn-saffron mt-3", children: "Browse Files" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-center text-xs text-muted-foreground", children: "Demo upload — files are not stored." })
    ] }) }) })
  ] });
}
export {
  GalleryPage as component
};
