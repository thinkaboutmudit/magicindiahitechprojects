import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function VideoCTA() {
  return (
    <section id="video" className="relative overflow-hidden py-24">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80" alt="Dehradun hills" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/30" />
      </div>
      <div className="container-px relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/20">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/_sI_Ps7JSEk"
              title="Magic Luxury Suites Dehradun"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="text-secondary-foreground">
          <span className="section-label" style={{ color: "oklch(0.85 0.12 85)" }}>Signature Property</span>
          <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">Magic Luxury Suites, <span className="text-accent">Dehradun</span></h2>
          <p className="mt-5 max-w-xl text-secondary-foreground/85">
            A premium 3BHK apartment nestled in the tranquil Malsi area of Dehradun, providing a serene retreat with modern comforts and elegant interiors. Designed for a blend of relaxation and convenience with spacious living areas, well-appointed bedrooms, and scenic surroundings.
          </p>
          <Link to="/contact" className="btn-gold mt-8">Get Free Site Visit <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}
