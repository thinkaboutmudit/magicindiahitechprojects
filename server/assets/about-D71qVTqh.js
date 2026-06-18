import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { S as SiteLayout } from "./SiteLayout-wPu0vcQ5.js";
import { Target, Sparkles, Users, Heart, Award } from "lucide-react";
import { motion } from "framer-motion";
import "react";
import "./router-Zn_Leek1.js";
import "@tanstack/react-query";
const aboutHeroImg = "/assets/about-hero-VRTS3zak.jpg";
const aboutContentImg = "/assets/about-content-BoeJqAyd.jpg";
function PageHero({
  title,
  kicker,
  sub,
  image
}) {
  return /* @__PURE__ */ jsxs("section", { className: "relative h-[52vh] min-h-[550px] w-full overflow-hidden", children: [
    /* @__PURE__ */ jsx("img", { src: image, alt: "", className: "absolute inset-0 h-full w-full object-cover" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" }),
    /* @__PURE__ */ jsx("div", { className: "container-px relative z-10 mx-auto flex h-full max-w-7xl items-end pb-14", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("span", { className: "inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur", children: kicker }),
      /* @__PURE__ */ jsx("h1", { className: "mt-4 font-serif text-5xl font-bold text-white md:text-6xl", children: title }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-2xl text-white/85", children: sub })
    ] }) })
  ] });
}
function AboutPage() {
  const values = [{
    Icon: Target,
    title: "Vision-Led",
    desc: "We design communities, not just buildings — every project starts with a long-term vision."
  }, {
    Icon: Sparkles,
    title: "Quality First",
    desc: "Premium materials, modern construction and a craftsmanship-first approach."
  }, {
    Icon: Users,
    title: "People-Centric",
    desc: "Owners, families and investors are our partners for life."
  }, {
    Icon: Heart,
    title: "Rooted in India",
    desc: "Designs that honour Indian aesthetics, climate and the way we live."
  }];
  return /* @__PURE__ */ jsxs(SiteLayout, { transparentHeaderOffset: true, children: [
    /* @__PURE__ */ jsx(PageHero, { kicker: "About Us", title: "Building Homes. Building Trust.", sub: "A pioneer among professional real estate companies in India, delivering residential, commercial and industrial property solutions since 2012.", image: aboutHeroImg }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-px mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center", children: [
      /* @__PURE__ */ jsx("img", { src: aboutContentImg, alt: "", className: "h-[480px] w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "section-label", children: "Our Story" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-4xl font-bold md:text-5xl", children: "A decade of crafting premium addresses" }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-muted-foreground", children: "Magic India Hitech Projects Pvt. Ltd. is a global real estate company offering comprehensive property solutions across residential, commercial and industrial sectors. Headquartered in Noida with active developments from the foothills of Dehradun to the booming Yamuna Expressway corridor." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "From farm cottages near Rajaji National Park to premium 3BHK suites in Malsi and master-planned townships on the Yamuna Expressway — every project is built around three ideas: location, longevity and lifestyle." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-card py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-px mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "section-label", children: "Our Values" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-4xl font-bold md:text-5xl", children: "What we stand for" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: values.map((v, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.4,
        delay: i * 0.08
      }, className: "rounded-2xl border border-border bg-background p-6 card-hover", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsx(v.Icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 font-serif text-xl font-semibold", children: v.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: v.desc })
      ] }, v.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 text-center", children: /* @__PURE__ */ jsxs("div", { className: "container-px mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsx(Award, { className: "mx-auto h-10 w-10 text-primary" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 font-serif text-4xl font-bold md:text-5xl", children: "Ready to find your address?" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Speak with our team and schedule a complimentary site visit at any Magic India project." }),
      /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn-saffron mt-8 inline-flex", children: "Book a Site Visit" })
    ] }) })
  ] });
}
export {
  PageHero,
  AboutPage as component
};
