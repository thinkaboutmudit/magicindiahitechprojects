import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteLayout } from "./SiteLayout-wPu0vcQ5.js";
import { P as PageHero } from "./router-Zn_Leek1.js";
import { FileCheck2, ScrollText, ShieldCheck, Scale } from "lucide-react";
import { l as legalHeroImg } from "./legal-hero-BY5fcC5R.js";
import "react";
import "@tanstack/react-router";
import "@tanstack/react-query";
function LegalPage() {
  const items = [{
    Icon: FileCheck2,
    title: "RERA Aligned",
    desc: "All eligible projects are registered under the relevant state RERA authority with full disclosure."
  }, {
    Icon: ScrollText,
    title: "Clear Titles",
    desc: "Every project is built on land with verified title, mutation and clear chain of ownership."
  }, {
    Icon: ShieldCheck,
    title: "Buyer Protection",
    desc: "Transparent agreements, milestone payments and registered conveyance for every unit."
  }, {
    Icon: Scale,
    title: "Compliance First",
    desc: "Local body approvals, environment clearances and statutory filings tracked end-to-end."
  }];
  return /* @__PURE__ */ jsxs(SiteLayout, { transparentHeaderOffset: true, children: [
    /* @__PURE__ */ jsx(PageHero, { kicker: "Legal", title: "Total clarity. Total confidence.", sub: "Buying property should be exciting — never anxious. Here's how we protect every customer.", image: legalHeroImg }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-px mx-auto max-w-5xl", children: [
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2", children: items.map((it) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 card-hover", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsx(it.Icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 font-serif text-xl font-semibold", children: it.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: it.desc })
      ] }, it.title)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 rounded-3xl bg-secondary p-8 text-secondary-foreground md:p-10", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl", children: "Need project documents?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-secondary-foreground/80", children: "Reach out for RERA certificates, approved layout plans, title reports and brochure PDFs for any of our active projects." }),
        /* @__PURE__ */ jsx("a", { href: "mailto:info@magicindiahitechprojects.com", className: "btn-gold mt-6", children: "Request Documents" })
      ] })
    ] }) })
  ] });
}
export {
  LegalPage as component
};
