import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "./about";
import { HardHat, Building2, Ruler, ShieldCheck, Hammer, TreePine } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/construction")({
  head: () => ({
    meta: [
      { title: "Construction — Magic India Hitech Projects" },
      { name: "description", content: "Our construction philosophy, materials, processes and quality benchmarks across every Magic India development." },
    ],
  }),
  component: ConstructionPage,
});

function ConstructionPage() {
  const items = [
    { Icon: Ruler, title: "Master Planning", desc: "Site planning that maximises light, ventilation and green space across every block." },
    { Icon: HardHat, title: "Skilled Workforce", desc: "Trained engineers, masons and finishers led by senior project managers." },
    { Icon: Building2, title: "Modern Materials", desc: "Earthquake-resistant RCC frames, premium fittings and energy-efficient envelopes." },
    { Icon: ShieldCheck, title: "Quality Assurance", desc: "Multi-stage QA checks at structure, MEP, finishing and handover." },
    { Icon: Hammer, title: "On-Time Delivery", desc: "Transparent timelines, milestone-based reporting and zero-compromise execution." },
    { Icon: TreePine, title: "Sustainable Design", desc: "Rainwater harvesting, solar-ready rooftops and large native-tree landscaping." },
  ];
  return (
    <SiteLayout transparentHeaderOffset>
      <PageHero kicker="Construction" title="Built right. Built to last." sub="Modern engineering meets timeless craftsmanship in every Magic India project." image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80" />
      <section className="py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((it, i) => (
              <motion.div key={it.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="rounded-2xl border border-border bg-card p-6 card-hover">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary"><it.Icon className="h-6 w-6" /></span>
                <h3 className="mt-4 font-serif text-xl font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-card py-20">
        <div className="container-px mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80" alt="Construction" className="h-[420px] w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]" />
          <div>
            <span className="section-label">Our Process</span>
            <h2 className="font-serif text-4xl font-bold md:text-5xl">From land to landmark</h2>
            <ol className="mt-6 space-y-4">
              {["Site selection & due diligence","Master planning & approvals","Foundation & structural works","MEP, finishes & landscaping","QA, handover & post-care"].map((s, i) => (
                <li key={s} className="flex gap-4"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground text-sm font-bold">{i + 1}</span><div className="pt-1 text-sm text-muted-foreground">{s}</div></li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
