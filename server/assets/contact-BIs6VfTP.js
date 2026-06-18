import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { S as SiteLayout } from "./SiteLayout-wPu0vcQ5.js";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook, Send } from "lucide-react";
import { motion } from "framer-motion";
import "@tanstack/react-router";
import "./router-Zn_Leek1.js";
import "@tanstack/react-query";
function ContactPage() {
  const [sent, setSent] = useState(false);
  return /* @__PURE__ */ jsx(SiteLayout, { children: /* @__PURE__ */ jsxs("section", { className: "container-px mx-auto grid max-w-7xl gap-12 py-16 lg:grid-cols-2 lg:items-start", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("span", { className: "section-label", children: "Contact Us" }),
      /* @__PURE__ */ jsxs("h1", { className: "font-serif text-5xl font-bold leading-tight md:text-6xl", children: [
        "Let's find your ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "dream address." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 space-y-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 rounded-2xl border border-border bg-card p-5", children: [
          /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold", children: "Our Office" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "H-78, 1st Floor, Sector 63, Noida, UP - 201301" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 rounded-2xl border border-border bg-card p-5", children: [
          /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold", children: "Call Us" }),
            /* @__PURE__ */ jsx("a", { href: "tel:+918010095135", className: "text-sm text-muted-foreground hover:text-primary", children: "+91-8010095135" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 rounded-2xl border border-border bg-card p-5", children: [
          /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold", children: "Email" }),
            /* @__PURE__ */ jsx("a", { href: "mailto:info@magicindia.in", className: "text-sm text-muted-foreground hover:text-primary", children: "info@magicindiahitechprojects.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 rounded-2xl border border-border bg-card p-5", children: [
          /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold", children: "Office Hours" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Mon–Sat · 10:00 AM – 7:00 PM" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(motion.form, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, onSubmit: (e) => {
      e.preventDefault();
      setSent(true);
    }, className: "rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold", children: "Book a Site Visit" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsx(Field, { label: "Full Name", id: "name", required: true }),
        /* @__PURE__ */ jsx(Field, { label: "Phone", id: "phone", type: "tel", required: true }),
        /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "project", className: "text-sm font-medium", children: "Interested Project" }),
          /* @__PURE__ */ jsxs("select", { id: "project", className: "mt-2 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm", children: [
            /* @__PURE__ */ jsx("option", { children: "Aero Classic City" }),
            /* @__PURE__ */ jsx("option", { children: "Aero Dream City" }),
            /* @__PURE__ */ jsx("option", { children: "Hillock Meadows Farms" }),
            /* @__PURE__ */ jsx("option", { children: "The Magic Meadows" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Prefer direct chat? Reach out on social." }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "WhatsApp", className: "grid h-11 w-11 place-items-center rounded-xl border border-border text-foreground transition hover:border-primary hover:text-primary", children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "Instagram", className: "grid h-11 w-11 place-items-center rounded-xl border border-border text-foreground transition hover:border-primary hover:text-primary", children: /* @__PURE__ */ jsx(Instagram, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "Facebook", className: "grid h-11 w-11 place-items-center rounded-xl border border-border text-foreground transition hover:border-primary hover:text-primary", children: /* @__PURE__ */ jsx(Facebook, { className: "h-4 w-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("button", { type: "submit", className: "btn-saffron mt-6 w-full", children: sent ? "Thank you! We'll be in touch." : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Send, { className: "h-4 w-4" }),
        " Send Enquiry"
      ] }) })
    ] })
  ] }) });
}
function Field({
  label,
  id,
  type = "text",
  required,
  className = ""
}) {
  return /* @__PURE__ */ jsxs("div", { className, children: [
    /* @__PURE__ */ jsxs("label", { htmlFor: id, className: "text-sm font-medium", children: [
      label,
      required && /* @__PURE__ */ jsx("span", { className: "text-primary", children: " *" })
    ] }),
    /* @__PURE__ */ jsx("input", { id, type, required, className: "mt-2 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" })
  ] });
}
export {
  ContactPage as component
};
