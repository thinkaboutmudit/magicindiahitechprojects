import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PROJECTS } from "@/lib/site-data";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import projectsIndexImg from "@/assets/projects-index.svg";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Magic India Hitech Projects" },
      { name: "description", content: "Explore Magic India's portfolio of premium apartments, plots and farmland across Dehradun, Greater Noida and Yamuna Expressway." },
      { property: "og:title", content: "Projects — Magic India" },
      { property: "og:description", content: "Premium apartments, plots and farmland across India." },
    ],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <SiteLayout transparentHeaderOffset>
      <section className="relative h-[44vh] min-h-[320px] overflow-hidden">
        <img src={projectsIndexImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        <div className="container-px relative z-10 mx-auto flex h-full max-w-7xl items-end pb-14">
          <div>
            <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">Our Portfolio</span>
            <h1 className="mt-4 font-serif text-5xl font-bold text-white md:text-6xl">Projects</h1>
            <p className="mt-3 max-w-xl text-white/85">High-return investment opportunities curated by experts who know India's real estate inside out.</p>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <motion.article key={p.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: (i % 3) * 0.08 }} className="overflow-hidden rounded-3xl bg-card card-hover">
                <div className="relative h-60 overflow-hidden">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-700 hover:scale-110" />
                  <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">{p.type}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold">{p.name}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="h-3.5 w-3.5 text-primary" /> {p.location}</p>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm font-semibold text-secondary">{p.price}</span>
                    <Link to="/projects/$slug" params={{ slug: p.slug }} className="inline-flex items-center gap-1 text-sm font-semibold text-primary">View Details <ArrowRight className="h-4 w-4" /></Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
