import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useState } from "react";
import { Upload, X, ImagePlus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Magic India Hitech Projects" },
      { name: "description", content: "A visual tour of Magic India's apartments, farmhouses, plots and Dehradun developments." },
    ],
  }),
  component: GalleryPage,
});

type Img = { src: string; cat: "Apartments" | "Farmhouses" | "Plots" | "Dehradun Projects"; h: number };

const IMAGES: Img[] = [
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80", cat: "Apartments", h: 380 },
  { src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=900&q=80", cat: "Farmhouses", h: 520 },
  { src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80", cat: "Dehradun Projects", h: 420 },
  { src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80", cat: "Farmhouses", h: 360 },
  { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80", cat: "Apartments", h: 480 },
  { src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80", cat: "Plots", h: 360 },
  { src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80", cat: "Apartments", h: 440 },
  { src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80", cat: "Plots", h: 380 },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80", cat: "Dehradun Projects", h: 460 },
  { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80", cat: "Dehradun Projects", h: 360 },
  { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80", cat: "Apartments", h: 500 },
  { src: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=900&q=80", cat: "Farmhouses", h: 380 },
];

const FILTERS = ["All", "Apartments", "Farmhouses", "Plots", "Dehradun Projects"] as const;

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
