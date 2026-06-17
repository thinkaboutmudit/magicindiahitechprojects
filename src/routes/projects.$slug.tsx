import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PROJECTS } from "@/lib/site-data";
import { MapPin, Maximize, IndianRupee, ArrowLeft, CheckCircle2, ChevronLeft, ChevronRight, X } from "lucide-react";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.name} — Magic India` },
          { name: "description", content: loaderData.project.desc },
          { property: "og:title", content: `${loaderData.project.name} — Magic India` },
          { property: "og:description", content: loaderData.project.desc },
          { property: "og:image", content: loaderData.project.image },
          { name: "twitter:image", content: loaderData.project.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <SiteLayout transparentHeaderOffset>
      <div className="container-px mx-auto max-w-3xl py-32 text-center">
        <h1 className="font-serif text-4xl">Project not found</h1>
        <Link to="/projects" className="btn-saffron mt-6 inline-flex">Back to all projects</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ reset }) => (
    <SiteLayout transparentHeaderOffset>
      <div className="container-px mx-auto max-w-3xl py-32 text-center">
        <h1 className="font-serif text-3xl">Something went wrong</h1>
        <button onClick={reset} className="btn-saffron mt-6">Try again</button>
      </div>
    </SiteLayout>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const gallery = project.gallery ?? [];
  const highlights = [
    "Premium location with strong appreciation",
    "RERA-aligned planning & approvals",
    "Modern amenities and clubhouse",
    "Wide internal roads & green belts",
    "24x7 security and power backup",
    "Easy financing & flexible plans",
  ];

  const openImage = (index: number) => setActiveIndex(index);
  const closeGallery = () => setActiveIndex(null);
  const showPrevious = () =>
    setActiveIndex((current) => {
      if (current === null || gallery.length === 0) return null;
      return (current - 1 + gallery.length) % gallery.length;
    });
  const showNext = () =>
    setActiveIndex((current) => {
      if (current === null || gallery.length === 0) return null;
      return (current + 1) % gallery.length;
    });

  return (
    <SiteLayout transparentHeaderOffset>
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img src={project.image} alt={project.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
        <div className="container-px relative z-10 mx-auto flex h-full max-w-7xl items-end pb-14">
          <div>
            <Link to="/projects" className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white"><ArrowLeft className="h-4 w-4" /> All Projects</Link>
            <span className="mt-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">{project.type}</span>
            <h1 className="mt-3 font-serif text-5xl font-bold text-white md:text-6xl">{project.name}</h1>
            <p className="mt-3 flex items-center gap-2 text-white/85"><MapPin className="h-4 w-4 text-accent" /> {project.location}</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container-px mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl font-bold">Overview</h2>
            <p className="mt-4 text-muted-foreground">{project.desc}</p>
            <p className="mt-3 text-muted-foreground">Our team has carefully curated this project to deliver strong long-term value, modern living standards and an address you'll be proud to call home. Every plot, every floor and every amenity is planned for sustained appreciation and comfort.</p>

            <h3 className="mt-10 font-serif text-2xl font-bold">Project Highlights</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" /> <span className="text-sm">{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="lg:col-span-1">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3"><IndianRupee className="h-5 w-5 text-primary mt-0.5" /><div><div className="text-xs uppercase tracking-wider text-muted-foreground">Price</div><div className="font-semibold text-secondary">{project.price}</div></div></div>
                <div className="flex items-start gap-3"><Maximize className="h-5 w-5 text-primary mt-0.5" /><div><div className="text-xs uppercase tracking-wider text-muted-foreground">Size</div><div className="font-semibold text-secondary">{project.size}</div></div></div>
                <div className="flex items-start gap-3"><MapPin className="h-5 w-5 text-primary mt-0.5" /><div><div className="text-xs uppercase tracking-wider text-muted-foreground">Location</div><div className="font-semibold text-secondary">{project.location}</div></div></div>
              </div>
              <Link to="/contact" className="btn-saffron mt-6 w-full">Enquire Now</Link>
              <Link to="/contact" className="btn-gold mt-3 w-full">Book Site Visit</Link>
            </div>
          </aside>
        </div>
      </section>

      {gallery.length > 0 ? (
        <section className="py-16 bg-muted/40">
          <div className="container-px mx-auto max-w-7xl">
            <h2 className="font-serif text-3xl font-bold">Project Gallery</h2>
            <p className="mt-3 text-muted-foreground">Click any image to view it larger with next/prev controls.</p>
            <div className="mt-8 overflow-x-auto pb-4">
            <div className="grid auto-cols-[minmax(280px,1fr)] grid-flow-col gap-4">
              {gallery.map((src, index) => (
                <button key={index} type="button" onClick={() => openImage(index)} className="group min-w-[280px] overflow-hidden rounded-3xl border border-border bg-background p-0 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary">
                  <img src={src} alt={`${project.name} gallery ${index + 1}`} className="h-60 w-full object-cover transition duration-300 group-hover:scale-105" />
                </button>
              ))}
            </div>
          </div>
          </div>
        </section>
      ) : null}

      {activeIndex !== null ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/90 p-4">
          <div className="relative inline-flex max-h-[95vh] max-w-[95vw] overflow-hidden rounded-3xl bg-black">
            <button type="button" onClick={closeGallery} className="absolute right-4 top-4 z-20 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </button>
            <button type="button" onClick={showPrevious} className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white">
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous</span>
            </button>
            <img src={project.gallery[activeIndex]} alt={`${project.name} gallery ${activeIndex + 1}`} className="max-h-[95vh] max-w-[95vw] object-contain" />
            <button type="button" onClick={showNext} className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white">
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
      ) : null}
    </SiteLayout>
  );
}
