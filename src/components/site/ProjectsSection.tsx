import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { MapPin, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/site-data";

export function ProjectsSection() {
  return (
    <section className="bg-card py-24">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">Projects</span>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            High-Return Investment Opportunities
          </h2>
          <p className="mt-4 text-muted-foreground">
            By purchasing property through us, you can expect consistent and strong returns. Our expert team carefully analyzes market trends to offer properties that guarantee a 10% return on investment.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group overflow-hidden rounded-3xl bg-background shadow-[0_8px_30px_-18px_rgba(0,0,0,0.2)] card-hover"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">{p.type}</span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground">{p.name}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary" /> {p.location}
                </p>
                <div className="mt-4 flex items-end justify-between gap-3">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Price</div>
                    <div className="font-semibold text-secondary">{p.price}</div>
                  </div>
                  <Link to="/projects/$slug" params={{ slug: p.slug }} className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                    View Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
