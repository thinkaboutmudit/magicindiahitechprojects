import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "./about";
import { FileCheck2, ScrollText, ShieldCheck, Scale } from "lucide-react";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Legal — Magic India Hitech Projects" },
      { name: "description", content: "RERA, due diligence, title clarity and compliance — our legal commitments to every Magic India buyer." },
    ],
  }),
  component: LegalPage,
});

function LegalPage() {
  const items = [
    { Icon: FileCheck2, title: "RERA Aligned", desc: "All eligible projects are registered under the relevant state RERA authority with full disclosure." },
    { Icon: ScrollText, title: "Clear Titles", desc: "Every project is built on land with verified title, mutation and clear chain of ownership." },
    { Icon: ShieldCheck, title: "Buyer Protection", desc: "Transparent agreements, milestone payments and registered conveyance for every unit." },
    { Icon: Scale, title: "Compliance First", desc: "Local body approvals, environment clearances and statutory filings tracked end-to-end." },
  ];
  return (
    <SiteLayout transparentHeaderOffset>
      <PageHero kicker="Legal" title="Total clarity. Total confidence." sub="Buying property should be exciting — never anxious. Here's how we protect every customer." image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=80" />
      <section className="py-20">
        <div className="container-px mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {items.map((it) => (
              <div key={it.title} className="rounded-2xl border border-border bg-card p-6 card-hover">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary"><it.Icon className="h-6 w-6" /></span>
                <h3 className="mt-4 font-serif text-xl font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-3xl bg-secondary p-8 text-secondary-foreground md:p-10">
            <h3 className="font-serif text-2xl">Need project documents?</h3>
            <p className="mt-2 text-secondary-foreground/80">Reach out for RERA certificates, approved layout plans, title reports and brochure PDFs for any of our active projects.</p>
            <a href="mailto:info@magicindia.in" className="btn-gold mt-6">Request Documents</a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
