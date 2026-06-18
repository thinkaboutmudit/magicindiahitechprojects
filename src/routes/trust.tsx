import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "./about";
import { ShieldCheck, Lock, Database, UserCheck, Cookie, Mail } from "lucide-react";
import legalHeroImg from "@/assets/pages/legal-hero.png";

export const Route = createFileRoute("/trust")({
  head: () => ({
    meta: [
      { title: "Trust & Security — Magic India Hitech Projects" },
      { name: "description", content: "How Magic India Hitech Projects handles security, privacy, and data on this website." },
    ],
  }),
  component: TrustPage,
});

function TrustPage() {
  const sections = [
    {
      Icon: ShieldCheck,
      title: "Access & Authentication",
      desc: "This website is a public marketing site and does not require visitors to create accounts or sign in to browse content.",
    },
    {
      Icon: Lock,
      title: "Platform & Hosting",
      desc: "The site is built and hosted on the Lovable platform, which provides TLS in transit for all visitor traffic. This page is maintained by Magic India Hitech Projects and is not an independent certification.",
    },
    {
      Icon: Database,
      title: "Data We Collect",
      desc: "We collect only the information you voluntarily submit through the contact form (such as name, email, phone and message) so we can respond to your enquiry about our projects.",
    },
    {
      Icon: UserCheck,
      title: "How We Use Your Information",
      desc: "Enquiry details are used solely by our sales and support team to contact you about properties. We do not sell your personal information to third parties.",
    },
    {
      Icon: Cookie,
      title: "Cookies & Analytics",
      desc: "The site may use essential cookies required for the page to function. Any analytics in use are limited to aggregate, non-identifying usage statistics.",
    },
    {
      Icon: Mail,
      title: "Privacy Requests & Security Contact",
      desc: "To request deletion of your enquiry data or to report a security concern, contact us through the Contact page and our team will respond.",
    },
  ];

  return (
    <SiteLayout transparentHeaderOffset>
      <PageHero
        kicker="Trust & Security"
        title="Your privacy and trust matter."
        sub="This page is maintained by Magic India Hitech Projects to answer common security and privacy questions about this website."
        image={legalHeroImg}
      />
      <section className="py-20">
        <div className="container-px mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {sections.map((it) => (
              <div key={it.title} className="rounded-2xl border border-border bg-card p-6 card-hover">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <it.Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-xs text-muted-foreground">
            This page describes current practices on this website and is editable content maintained by Magic India Hitech Projects. It is not a certification or independent audit, and does not constitute a legal contract.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
