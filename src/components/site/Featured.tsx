import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { MapPin, BedDouble, Bath, Maximize } from "lucide-react";
import { PROJECTS } from "@/lib/site-data";

const featuredSlugs = ["hillock-meadows-farms", "aero-dream-city", "aero-classic-city"];

export function Featured() {
  const items = featuredSlugs.map((s) => PROJECTS.find((p) => p.slug === s)!).filter(Boolean);
  return (
    <section className="py-24">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="section-label">Listing</span>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">Featured Property</h2>
          </div>
          <Link to="/projects" className="btn-gold">View All Listings</Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="overflow-hidden rounded-3xl border border-border bg-card card-hover"
            >
              <div className="relative h-60 overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">{p.type}</span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground">{p.name}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="h-3.5 w-3.5 text-primary" /> {p.location}</p>
                <div className="mt-3 font-semibold text-secondary">{p.price}</div>
                <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><BedDouble className="h-4 w-4 text-primary" /> 3 Bed</span>
                  <span className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-primary" /> 2 Bath</span>
                  <span className="flex items-center gap-1.5"><Maximize className="h-4 w-4 text-primary" /> {p.size}</span>
                </div>
                <Link to="/projects/$slug" params={{ slug: p.slug }} className="btn-saffron mt-5 w-full">View Details</Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
