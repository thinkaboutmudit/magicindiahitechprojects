import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PROJECTS } from "@/lib/site-data";
import { MapPin, Maximize, IndianRupee, ArrowLeft, CheckCircle2 } from "lucide-react";

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
  const highlights = [
    "Premium location with strong appreciation",
    "RERA-aligned planning & approvals",
    "Modern amenities and clubhouse",
    "Wide internal roads & green belts",
    "24x7 security and power backup",
    "Easy financing & flexible plans",
  ];
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
    </SiteLayout>
  );
}
