import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useState } from "react";
import { Upload, X, ImagePlus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gallery1 from "@/assets/gallery/gallery-1.jpeg";
import gallery2 from "@/assets/gallery/gallery-2.jpeg";
import gallery3 from "@/assets/gallery/gallery-3.jpeg";
import gallery4 from "@/assets/gallery/gallery-4.jpeg";
import gallery5 from "@/assets/gallery/gallery-5.jpeg";
import gallery6 from "@/assets/gallery/gallery-6.jpeg";
import gallery7 from "@/assets/gallery/gallery-7.jpeg";
import gallery8 from "@/assets/gallery/gallery-8.jpeg";
import gallery9 from "@/assets/gallery/gallery-9.jpeg";
import gallery10 from "@/assets/gallery/gallery-10.jpeg";
import gallery11 from "@/assets/gallery/gallery-11.jpeg";
import gallery12 from "@/assets/gallery/gallery-12.jpeg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Magic India Hitech Projects" },
      { name: "description", content: "A visual tour of Magic India's projects." },
    ],
  }),
  component: GalleryPage,
});

type Img = { src: string; cat: "Aero Classic City" | "Aero Dream City" | "Hillock Meadows" | "Magic Meadows"; h: number };

const IMAGES: Img[] = [
  { src: gallery1, cat: "Aero Classic City", h: 380 },
  { src: gallery2, cat: "Aero Dream City", h: 520 },
  { src: gallery3, cat: "Hillock Meadows", h: 420 },
  { src: gallery4, cat: "Aero Dream City", h: 360 },
  { src: gallery5, cat: "Aero Classic City", h: 480 },
  { src: gallery6, cat: "Magic Meadows", h: 360 },
  { src: gallery7, cat: "Aero Classic City", h: 440 },
  { src: gallery8, cat: "Magic Meadows", h: 380 },
  { src: gallery9, cat: "Hillock Meadows", h: 460 },
  { src: gallery10, cat: "Hillock Meadows", h: 360 },
  { src: gallery11, cat: "Aero Classic City", h: 500 },
  { src: gallery12, cat: "Aero Dream City", h: 380 },
];

const FILTERS = ["All", "Aero Classic City", "Aero Dream City", "Hillock Meadows", "Magic Meadows"] as const;

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [upload, setUpload] = useState(false);

  const items = filter === "All" ? IMAGES : IMAGES.filter((i) => i.cat === filter);

  return (
    <SiteLayout>
      <section className="container-px mx-auto max-w-7xl pt-10 pb-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="section-label">Gallery</span>
            <h1 className="font-serif text-5xl font-bold md:text-6xl">A look inside Magic India</h1>
            <p className="mt-3 max-w-xl text-muted-foreground">Glimpses from our apartments, farmhouses, plots and the Doon valley.</p>
          </div>
          <button onClick={() => setUpload(true)} className="btn-saffron"><Upload className="h-4 w-4" /> Upload Photo</button>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${filter === f ? "bg-primary text-primary-foreground shadow-[var(--shadow-warm)]" : "bg-card text-foreground hover:bg-muted"}`}>{f}</button>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {items.map((img, i) => (
            <motion.button
              key={img.src + i}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: (i % 8) * 0.04 }}
              onClick={() => setLightbox(img.src)}
              className="mb-4 block w-full overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-soft)]"
              style={{ breakInside: "avoid" }}
            >
              <img src={img.src} alt="" loading="lazy" style={{ height: img.h }} className="h-auto w-full object-cover transition duration-500 hover:scale-105" />
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] grid place-items-center bg-black/90 p-4" onClick={() => setLightbox(null)}>
            <button className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white" aria-label="Close"><X className="h-5 w-5" /></button>
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} src={lightbox} className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {upload && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] grid place-items-center bg-black/60 p-4" onClick={() => setUpload(false)}>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="w-full max-w-lg rounded-3xl bg-background p-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl font-bold">Upload Photo</h3>
                <button onClick={() => setUpload(false)} aria-label="Close" className="rounded-full p-2 hover:bg-muted"><X className="h-5 w-5" /></button>
              </div>
              <div className="mt-5 flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-border bg-card p-10 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary"><ImagePlus className="h-6 w-6" /></span>
                <p className="font-semibold">Drag & drop your image here</p>
                <p className="text-sm text-muted-foreground">or click to browse — JPG, PNG up to 10MB</p>
                <button className="btn-saffron mt-3">Browse Files</button>
              </div>
              <p className="mt-4 text-center text-xs text-muted-foreground">Demo upload — files are not stored.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SiteLayout>
  );
}
