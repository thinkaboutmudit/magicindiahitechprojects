import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useRouterState, Link } from "@tanstack/react-router";
import { ChevronDown, X, Menu, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { N as NAV_LINKS, a as PROJECTS } from "./router-Zn_Leek1.js";
const logoImg = "/assets/logo-jQXcFXfG.png";
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [projOpen, setProjOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setOpen(false);
    setProjOpen(false);
  }, [path]);
  const onHome = path === "/";
  const transparent = onHome && !scrolled;
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${transparent ? "bg-transparent" : "bg-background/95 backdrop-blur shadow-[0_4px_20px_-12px_rgba(0,0,0,0.15)]"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "container-px mx-auto flex h-18 max-w-7xl items-center justify-between py-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center gap-3", children: /* @__PURE__ */ jsx("img", { src: logoImg, alt: "Magic India logo", className: "h-10 w-auto" }) }),
          /* @__PURE__ */ jsx("nav", { className: "hidden items-center gap-1 lg:flex", children: NAV_LINKS.map(
            (l) => l.hasDropdown ? /* @__PURE__ */ jsxs("div", { className: "relative", onMouseEnter: () => setProjOpen(true), onMouseLeave: () => setProjOpen(false), children: [
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: l.to,
                  className: `flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition ${transparent ? "text-white/90 hover:bg-white/10" : "text-foreground/80 hover:bg-muted"}`,
                  children: [
                    l.label,
                    " ",
                    /* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5" })
                  ]
                }
              ),
              projOpen && /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-full w-72 pt-2", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-popover p-2 shadow-xl", children: [
                /* @__PURE__ */ jsx(Link, { to: "/projects", className: "block rounded-xl px-3 py-2 text-sm font-semibold text-primary hover:bg-muted", children: "View All Projects →" }),
                /* @__PURE__ */ jsx("div", { className: "my-1 border-t border-border" }),
                PROJECTS.map((p) => /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/projects/$slug",
                    params: { slug: p.slug },
                    className: "block rounded-xl px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-primary",
                    children: p.name
                  },
                  p.slug
                ))
              ] }) })
            ] }, l.to) : /* @__PURE__ */ jsx(
              Link,
              {
                to: l.to,
                className: `rounded-full px-4 py-2 text-sm font-medium transition ${transparent ? "text-white/90 hover:bg-white/10" : "text-foreground/80 hover:bg-muted"}`,
                activeProps: { className: transparent ? "rounded-full px-4 py-2 text-sm font-semibold text-white bg-white/15" : "rounded-full px-4 py-2 text-sm font-semibold text-primary bg-primary/10" },
                activeOptions: { exact: true },
                children: l.label
              },
              l.to
            )
          ) }),
          /* @__PURE__ */ jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: transparent ? "btn-dark" : "btn-dark", children: "Get in touch" }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              "aria-label": "Toggle menu",
              className: `lg:hidden rounded-full p-2 ${transparent ? "text-white" : "text-foreground"}`,
              onClick: () => setOpen((v) => !v),
              children: open ? /* @__PURE__ */ jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6" })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "lg:hidden border-t border-border bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container-px mx-auto flex max-w-7xl flex-col gap-1 py-4", children: [
          NAV_LINKS.map((l) => /* @__PURE__ */ jsx(
            Link,
            {
              to: l.to,
              className: "rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-muted",
              children: l.label
            },
            l.to
          )),
          /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn-dark mt-2 self-start", children: "Get in touch" })
        ] }) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container-px mx-auto max-w-7xl py-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-16 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsxs("h2", { className: "display-xl text-foreground", children: [
          "Find your ",
          /* @__PURE__ */ jsx("em", { className: "font-serif italic text-muted-foreground/80", children: "Property" })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-dark mt-10", children: [
          "Get in touch ",
          /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "→" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-10 sm:grid-cols-3 lg:col-span-7", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground", children: "Company" }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-5 space-y-3 text-sm text-foreground/85", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:text-primary", children: "About" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/legal", className: "hover:text-primary", children: "Legal" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/trust", className: "hover:text-primary", children: "Trust & Security" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/gallery", className: "hover:text-primary", children: "Gallery" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "hover:text-primary", children: "Contact" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground", children: "Projects" }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-5 space-y-3 text-sm text-foreground/85", children: [
            PROJECTS.slice(0, 5).map((p) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/projects/$slug", params: { slug: p.slug }, className: "hover:text-primary", children: p.name }) }, p.slug)),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/projects", className: "text-primary hover:underline", children: "View all →" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-xs uppercase tracking-[0.22em] text-muted-foreground", children: "Contact" }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-5 space-y-3 text-sm text-foreground/85", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              "H-78, 1st Floor, Sector 63",
              /* @__PURE__ */ jsx("br", {}),
              "Noida, UP – 201301"
            ] }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "tel:+91-8010095135", className: "hover:text-primary", children: "+91-8010095135" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "mailto:info@magicindiahitechprojects.com", className: "hover:text-primary", children: "info@magicindiahitechprojects.com" }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-5 flex gap-3", children: [Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "social", className: "grid h-9 w-9 place-items-center rounded-full border border-border text-foreground/70 transition hover:border-foreground hover:text-foreground", children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }) }, i)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-20 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsx("p", { children: "© 2024–2026 Magic India Hitech Projects Pvt. Ltd." }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-5", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground", children: "Terms" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground", children: "Privacy" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground", children: "Cookies" })
      ] })
    ] })
  ] }) });
}
function SiteLayout({ children, transparentHeaderOffset = false }) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: transparentHeaderOffset ? "" : "pt-20", children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  SiteLayout as S
};
