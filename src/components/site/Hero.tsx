import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Facebook, Instagram, ChevronDown, Play } from "lucide-react";
import { HERO_FRAMES } from "@/lib/site-data";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const frames = gsap.utils.toArray<HTMLElement>(".hero-frame");
      const texts = gsap.utils.toArray<HTMLElement>(".hero-text");

      // initial state — show only first
      frames.forEach((f, i) => gsap.set(f, { opacity: i === 0 ? 1 : 0 }));
      texts.forEach((t, i) => gsap.set(t, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 30 }));

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: () => `+=${window.innerHeight * (frames.length - 1) * 0.9}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      for (let i = 1; i < frames.length; i++) {
        tl.to(frames[i - 1], { opacity: 0, duration: 1 }, i - 1)
          .to(frames[i], { opacity: 1, duration: 1 }, i - 1)
          .to(texts[i - 1], { opacity: 0, y: -30, duration: 0.8 }, i - 1)
          .to(texts[i], { opacity: 1, y: 0, duration: 0.8 }, i - 1 + 0.2);
      }
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Frame stack */}
      <div className="absolute inset-0">
        {HERO_FRAMES.map((f, i) => (
          <div
            key={i}
            className="hero-frame absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${f.image}')` }}
          />
        ))}
        <div className="absolute inset-0 warm-gradient-overlay" />
      </div>

      {/* Text stack */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container-px mx-auto max-w-7xl">
          <div className="relative max-w-2xl">
            {HERO_FRAMES.map((f, i) => (
              <div key={i} className={`hero-text ${i === 0 ? "relative" : "absolute inset-0"}`}>
                <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
                  Premium Real Estate · India
                </span>
                <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  {f.title}
                </h1>
                <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">{f.sub}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="/projects" className="btn-gold">Explore Properties</a>
                  <a href="#video" className="btn-ghost-light"><Play className="h-4 w-4" /> Watch Our Story</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating socials */}
      <div className="absolute left-5 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-3 md:flex">
        {[Facebook, Instagram].map((Icon, i) => (
          <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-primary">
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-5 z-10 flex flex-col items-center gap-2 text-white/80 md:right-10">
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </div>
    </section>
  );
}
