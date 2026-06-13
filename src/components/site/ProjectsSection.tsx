import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { PROJECTS } from "@/lib/site-data";

export function ProjectsSection() {
  return (
    <section className="bg-background py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="eyebrow">Portfolio</span>
            <h2 className="display-xl mt-6 text-foreground">
              Places worth <em className="font-serif italic text-muted-foreground/80">moving for.</em>
            </h2>
          </div>
          <Link to="/projects" className="btn-dark">All Projects <span aria-hidden>→</span></Link>
        </div>

        <div className="mt-20 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group"
            >
              <Link to="/projects/$slug" params={{ slug: p.slug }} className="block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-card">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-background/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-foreground backdrop-blur">
                    {p.type}
                  </span>
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="font-serif text-2xl text-foreground">{p.name}</h3>
                    <p className="mt-1 truncate text-sm text-muted-foreground">{p.location}</p>
                  </div>
                  <span className="shrink-0 text-sm font-medium text-foreground transition-transform group-hover:translate-x-1">→</span>
                </div>
                <div className="mt-3 text-sm text-muted-foreground">{p.price}</div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
