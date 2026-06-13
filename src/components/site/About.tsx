import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

const points = [
  { n: "01", title: "Expertise You Can Trust", desc: "12+ years navigating India's most dynamic property markets — from Dehradun's foothills to the Yamuna Expressway." },
  { n: "02", title: "Thoughtful Recommendations", desc: "Every listing is curated. We surface properties that fit your timeline, budget, and long-term goals." },
  { n: "03", title: "A Clear Path Forward", desc: "Site visits, paperwork, registration, possession — guided end-to-end by people who answer your calls." },
];

export function About() {
  return (
    <section className="bg-background py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="eyebrow">About</span>
            <h2 className="display-xl mt-6 text-foreground">
              Real estate, <em className="font-serif italic text-muted-foreground/80">refined.</em>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Magic India Hitech Projects is a developer and advisor for people who want their next home — or next investment — to be a considered decision, not a rushed one.
            </p>
            <Link to="/about" className="btn-dark mt-10">Our Story <span aria-hidden>→</span></Link>
          </motion.div>

          <div className="lg:col-span-7">
            <div className="divide-y divide-border">
              {points.map((p, i) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="grid grid-cols-12 gap-6 py-10 first:pt-0"
                >
                  <span className="col-span-2 font-serif text-xl text-primary md:text-2xl">{p.n}</span>
                  <div className="col-span-10">
                    <h3 className="font-serif text-2xl text-foreground md:text-3xl">{p.title}</h3>
                    <p className="mt-3 text-muted-foreground">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
