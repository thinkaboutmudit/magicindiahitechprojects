import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/site-data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="relative bg-gradient-to-r from-[oklch(0.96_0.03_85)] via-[oklch(0.94_0.05_80)] to-[oklch(0.96_0.03_85)] py-14">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-accent/30 bg-background/60 p-6 text-center backdrop-blur card-hover"
            >
              <div className="font-serif text-4xl font-bold text-secondary sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
