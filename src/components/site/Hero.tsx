import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Facebook, Instagram, ChevronDown, Play } from "lucide-react";
import skyImg from "@/assets/hero/sky.jpg";
import mountainsImg from "@/assets/hero/mountains.png";
import meadowsImg from "@/assets/hero/meadows.png";
import villaImg from "@/assets/hero/villa.png";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const sky = ref.current!.querySelector<HTMLElement>(".layer-sky")!;
      const mountains = ref.current!.querySelector<HTMLElement>(".layer-mountains")!;
      const meadows = ref.current!.querySelector<HTMLElement>(".layer-meadows")!;
      const villa = ref.current!.querySelector<HTMLElement>(".layer-villa")!;
      const headline = ref.current!.querySelector<HTMLElement>(".hero-copy")!;

      gsap.set(villa, { yPercent: 95, scale: 1.05 });
      gsap.set(meadows, { yPercent: 20 });
      gsap.set(mountains, { yPercent: 10 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "+=160%",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(sky, { yPercent: -6, ease: "none" }, 0)
        .to(mountains, { yPercent: -14, ease: "none" }, 0)
        .to(meadows, { yPercent: -22, ease: "none" }, 0)
        .to(villa, { yPercent: 0, scale: 1, ease: "power2.out" }, 0)
        .to(headline, { yPercent: -30, opacity: 0, ease: "power1.in" }, 0.05);
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Parallax layers */}
      <div
        className="layer-sky absolute inset-0 -top-[10%] h-[120%] bg-cover bg-center"
        style={{ backgroundImage: `url(${skyImg})` }}
      />
      <img
        src={mountainsImg}
        alt=""
        aria-hidden
        className="layer-mountains pointer-events-none absolute bottom-[28%] left-0 w-full select-none object-cover opacity-90"
      />
      <img
        src={meadowsImg}
        alt=""
        aria-hidden
        className="layer-meadows pointer-events-none absolute bottom-0 left-0 w-full select-none object-cover"
      />
      <img
        src={villaImg}
        alt="Luxury villa"
        className="layer-villa pointer-events-none absolute bottom-0 left-1/2 w-[140%] max-w-[1600px] -translate-x-1/2 select-none drop-shadow-2xl md:w-[95%]"
      />

      {/* Soft warm vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(20,15,5,0.18)_100%)]" />

      {/* Headline */}
      <div className="hero-copy relative z-10 flex h-full flex-col items-center justify-start pt-28 text-center md:pt-32">
        <div className="container-px mx-auto max-w-6xl">
          <span className="inline-block rounded-full bg-white/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-foreground backdrop-blur">
            Premium Real Estate · India
          </span>
          <h1 className="hero-headline mt-5 font-serif font-bold leading-[0.95] tracking-tight">
            Find Your Dream Property
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-foreground/75 sm:text-lg">
            Expert guidance. Thoughtful recommendations. Find the property that fits your future.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="/projects" className="btn-dark">Find Properties <span aria-hidden>→</span></a>
            <a href="#video" className="btn-ghost-dark"><Play className="h-4 w-4" /> Watch Our Story</a>
          </div>
        </div>
      </div>

      {/* Floating socials */}
      <div className="absolute left-5 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-3 md:flex">
        {[Facebook, Instagram].map((Icon, i) => (
          <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/50 text-foreground backdrop-blur transition hover:bg-primary hover:text-primary-foreground">
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-foreground/70">
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </div>
    </section>
  );
}
