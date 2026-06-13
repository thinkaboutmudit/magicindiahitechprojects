import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Home, Award, Heart, ArrowRight } from "lucide-react";

const features = [
  { Icon: Home, title: "Expertise in Real Estate Market", desc: "Deep knowledge of India's diverse real estate market — insights for buying, selling and investing." },
  { Icon: Award, title: "Trusted Developer Since 2012", desc: "12+ years of experience, 1000+ property owners and 2500+ satisfied clients." },
  { Icon: Heart, title: "Customer-Centric Approach", desc: "Personalized service and long-term relationships, guiding you at every step." },
];

export function About() {
  return (
    <section className="py-24">
      <div className="container-px mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative h-[520px]"
        >
          <div className="absolute left-0 top-0 h-[70%] w-[72%] overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80" alt="Dehradun hills" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 h-[60%] w-[62%] overflow-hidden rounded-3xl border-4 border-background shadow-[var(--shadow-warm)]">
            <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80" alt="Luxury interior" className="h-full w-full object-cover" />
          </div>
          <div className="absolute left-[58%] top-[58%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-primary px-5 py-4 text-center text-primary-foreground shadow-[var(--shadow-warm)]">
            <div className="font-serif text-2xl font-bold">12+</div>
            <div className="text-xs uppercase tracking-widest">Trusted Since 2012</div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="section-label">About Us</span>
          <h2 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Magic India Hitech<br /><span className="text-primary">Projects Pvt. Ltd.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            A global real estate company offering comprehensive property solutions across residential, commercial, and industrial sectors. Magic India is a pioneer among professional real estate companies in India.
          </p>

          <div className="mt-8 space-y-4">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5 card-hover">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <f.Icon className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <h4 className="font-serif text-lg font-semibold text-foreground">{f.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link to="/about" className="btn-saffron mt-8">Know More About Us <ArrowRight className="h-4 w-4" /></Link>
        </motion.div>
      </div>
    </section>
  );
}
