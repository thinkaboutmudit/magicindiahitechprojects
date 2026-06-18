import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteLayout } from "./SiteLayout-wPu0vcQ5.js";
import { P as PageHero } from "./router-Zn_Leek1.js";
import { ShieldCheck, Lock, Database, UserCheck, Cookie, Mail } from "lucide-react";
import { l as legalHeroImg } from "./legal-hero-BY5fcC5R.js";
import "react";
import "@tanstack/react-router";
import "@tanstack/react-query";
function TrustPage() {
  const sections = [{
    Icon: ShieldCheck,
    title: "Access & Authentication",
    desc: "This website is a public marketing site and does not require visitors to create accounts or sign in to browse content."
  }, {
    Icon: Lock,
    title: "Platform & Hosting",
    desc: "The site is built and hosted on the Lovable platform, which provides TLS in transit for all visitor traffic. This page is maintained by Magic India Hitech Projects and is not an independent certification."
  }, {
    Icon: Database,
    title: "Data We Collect",
    desc: "We collect only the information you voluntarily submit through the contact form (such as name, email, phone and message) so we can respond to your enquiry about our projects."
  }, {
    Icon: UserCheck,
    title: "How We Use Your Information",
    desc: "Enquiry details are used solely by our sales and support team to contact you about properties. We do not sell your personal information to third parties."
  }, {
    Icon: Cookie,
    title: "Cookies & Analytics",
    desc: "The site may use essential cookies required for the page to function. Any analytics in use are limited to aggregate, non-identifying usage statistics."
  }, {
    Icon: Mail,
    title: "Privacy Requests & Security Contact",
    desc: "To request deletion of your enquiry data or to report a security concern, contact us through the Contact page and our team will respond."
  }];
  return /* @__PURE__ */ jsxs(SiteLayout, { transparentHeaderOffset: true, children: [
    /* @__PURE__ */ jsx(PageHero, { kicker: "Trust & Security", title: "Your privacy and trust matter.", sub: "This page is maintained by Magic India Hitech Projects to answer common security and privacy questions about this website.", image: legalHeroImg }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-px mx-auto max-w-5xl", children: [
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2", children: sections.map((it) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 card-hover", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsx(it.Icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 font-serif text-xl font-semibold", children: it.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: it.desc })
      ] }, it.title)) }),
      /* @__PURE__ */ jsx("p", { className: "mt-10 text-xs text-muted-foreground", children: "This page describes current practices on this website and is editable content maintained by Magic India Hitech Projects. It is not a certification or independent audit, and does not constitute a legal contract." })
    ] }) })
  ] });
}
export {
  TrustPage as component
};
