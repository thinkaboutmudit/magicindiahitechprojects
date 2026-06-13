import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { PROJECTS } from "@/lib/site-data";

const featuredSlugs = ["hillock-meadows-farms", "aero-dream-city", "magic-luxury-suites"];

export function Featured() {
  const items = featuredSlugs.map((s) => PROJECTS.find((p) => p.slug === s)!).filter(Boolean);
  return (
    <section className="bg-card py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="eyebrow">Featured</span>
          <h2 className="display-xl mt-6 text-foreground">Hand-picked, this season.</h2>
        </div>

        <div className="mt-20 space-y-2">
          {items.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group grid grid-cols-12 items-center gap-6 border-t border-border/70 py-10 transition-colors hover:bg-background/40"
              >
                <div className="col-span-12 md:col-span-5">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{p.type}</div>
                  <h3 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.location}</p>
                </div>
                <div className="col-span-12 flex items-center justify-between md:col-span-3 md:justify-end md:gap-8">
                  <div className="text-sm text-foreground md:text-right">{p.price}</div>
                  <span className="text-2xl text-foreground transition-transform group-hover:translate-x-2">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
