import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Award, Heart, Home, Users, Target, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import aboutHeroImg from "@/assets/pages/about-hero.jpg";
import aboutContentImg from "@/assets/pages/about-content.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Magic India Hitech Projects" },
      { name: "description", content: "Magic India Hitech Projects Pvt. Ltd. — 12+ years of crafting premium homes and high-return investments across India." },
      { property: "og:title", content: "About Magic India Hitech Projects" },
      { property: "og:description", content: "12+ years building trust across Dehradun, Greater Noida and the Yamuna Expressway." },
    ],
  }),
  component: AboutPage,
});

function PageHero({ title, kicker, sub, image }: { title: string; kicker: string; sub: string; image: string }) {
  return (
    <section className="relative h-[52vh] min-h-[550px] w-full overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
      <div className="container-px relative z-10 mx-auto flex h-full max-w-7xl items-end pb-14">
        <div>
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">{kicker}</span>
          <h1 className="mt-4 font-serif text-5xl font-bold text-white md:text-6xl">{title}</h1>
          <p className="mt-3 max-w-2xl text-white/85">{sub}</p>
        </div>
      </div>
    </section>
  );
}

export { PageHero };

function AboutPage() {
  const values = [
    { Icon: Target, title: "Vision-Led", desc: "We design communities, not just buildings — every project starts with a long-term vision." },
    { Icon: Sparkles, title: "Quality First", desc: "Premium materials, modern construction and a craftsmanship-first approach." },
    { Icon: Users, title: "People-Centric", desc: "Owners, families and investors are our partners for life." },
    { Icon: Heart, title: "Rooted in India", desc: "Designs that honour Indian aesthetics, climate and the way we live." },
  ];
  return (
    <SiteLayout transparentHeaderOffset>
      <PageHero kicker="About Us" title="Building Homes. Building Trust." sub="A pioneer among professional real estate companies in India, delivering residential, commercial and industrial property solutions since 2012." image={aboutHeroImg} />
      <section className="py-20">
        <div className="container-px mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <img src={aboutContentImg} alt="" className="h-[480px] w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]" />
          <div>
            <span className="section-label">Our Story</span>
            <h2 className="font-serif text-4xl font-bold md:text-5xl">A decade of crafting premium addresses</h2>
            <p className="mt-5 text-muted-foreground">Magic India Hitech Projects Pvt. Ltd. is a global real estate company offering comprehensive property solutions across residential, commercial and industrial sectors. Headquartered in Noida with active developments from the foothills of Dehradun to the booming Yamuna Expressway corridor.</p>
            <p className="mt-4 text-muted-foreground">From farm cottages near Rajaji National Park to premium 3BHK suites in Malsi and master-planned townships on the Yamuna Expressway — every project is built around three ideas: location, longevity and lifestyle.</p>
          </div>
        </div>
      </section>
      <section className="bg-card py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center"><span className="section-label">Our Values</span><h2 className="font-serif text-4xl font-bold md:text-5xl">What we stand for</h2></div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="rounded-2xl border border-border bg-background p-6 card-hover">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary"><v.Icon className="h-6 w-6" /></span>
                <h3 className="mt-4 font-serif text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 text-center">
        <div className="container-px mx-auto max-w-3xl">
          <Award className="mx-auto h-10 w-10 text-primary" />
          <h2 className="mt-4 font-serif text-4xl font-bold md:text-5xl">Ready to find your address?</h2>
          <p className="mt-4 text-muted-foreground">Speak with our team and schedule a complimentary site visit at any Magic India project.</p>
          <Link to="/contact" className="btn-saffron mt-8 inline-flex">Book a Site Visit</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
