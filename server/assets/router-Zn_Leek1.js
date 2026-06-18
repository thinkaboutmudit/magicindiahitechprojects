import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, notFound, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
const appCss = "/assets/styles-BseKCPLH.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$9 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Magic India Hitech Projects — Premium Real Estate in India" },
      { name: "description", content: "Magic India Hitech Projects Pvt. Ltd. — premium residential, commercial and farmland properties across Dehradun, Greater Noida and the Yamuna Expressway. Trusted since 2012." },
      { name: "author", content: "Magic India Hitech Projects Pvt. Ltd." },
      { property: "og:title", content: "Magic India Hitech Projects — Premium Real Estate in India" },
      { property: "og:description", content: "Magic India Hitech Projects Pvt. Ltd. — premium residential, commercial and farmland properties across Dehradun, Greater Noida and the Yamuna Expressway. Trusted since 2012." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Magic India Hitech Projects — Premium Real Estate in India" },
      { name: "twitter:description", content: "Magic India Hitech Projects Pvt. Ltd. — premium residential, commercial and farmland properties across Dehradun, Greater Noida and the Yamuna Expressway. Trusted since 2012." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2b76d885-f107-429f-946a-a9ec759cca4d/id-preview-8c51e4cf--b122b4fe-812e-4bac-a2ab-149b4ac96865.lovable.app-1781368469735.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2b76d885-f107-429f-946a-a9ec759cca4d/id-preview-8c51e4cf--b122b4fe-812e-4bac-a2ab-149b4ac96865.lovable.app-1781368469735.png" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$9.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const $$splitComponentImporter$8 = () => import("./trust-DY4SjCNT.js");
const Route$8 = createFileRoute("/trust")({
  head: () => ({
    meta: [{
      title: "Trust & Security — Magic India Hitech Projects"
    }, {
      name: "description",
      content: "How Magic India Hitech Projects handles security, privacy, and data on this website."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./projects-BFsOu0JM.js");
const Route$7 = createFileRoute("/projects")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./legal-COmDgo-3.js");
const Route$6 = createFileRoute("/legal")({
  head: () => ({
    meta: [{
      title: "Legal — Magic India Hitech Projects"
    }, {
      name: "description",
      content: "RERA, due diligence, title clarity and compliance — our legal commitments to every Magic India buyer."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./gallery-CogfaRJr.js");
const Route$5 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Gallery — Magic India Hitech Projects"
    }, {
      name: "description",
      content: "A visual tour of Magic India's projects."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-BIs6VfTP.js");
const Route$4 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Magic India Hitech Projects"
    }, {
      name: "description",
      content: "Book a site visit, request a brochure or speak to our team about any Magic India project."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./about-D71qVTqh.js");
const Route$3 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Magic India Hitech Projects"
    }, {
      name: "description",
      content: "Magic India Hitech Projects Pvt. Ltd. — 12+ years of crafting premium homes and high-return investments across India."
    }, {
      property: "og:title",
      content: "About Magic India Hitech Projects"
    }, {
      property: "og:description",
      content: "12+ years building trust across Dehradun, Greater Noida and the Yamuna Expressway."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
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
const $$splitComponentImporter$2 = () => import("./index-_xxol96I.js");
const Route$2 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Magic India Hitech Projects — Premium Real Estate"
    }, {
      name: "description",
      content: "Find your dream home across Dehradun, Greater Noida and Yamuna Expressway with Magic India Hitech Projects."
    }, {
      property: "og:title",
      content: "Magic India Hitech Projects"
    }, {
      property: "og:description",
      content: "Premium real estate, trusted since 2012."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./projects.index-_ODruDCJ.js");
const Route$1 = createFileRoute("/projects/")({
  head: () => ({
    meta: [{
      title: "Projects — Magic India Hitech Projects"
    }, {
      name: "description",
      content: "Explore Magic India's portfolio of premium apartments, plots and farmland across Dehradun, Greater Noida and Yamuna Expressway."
    }, {
      property: "og:title",
      content: "Projects — Magic India"
    }, {
      property: "og:description",
      content: "Premium apartments, plots and farmland across India."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const aeroClassicCityImg = "/assets/gallery-1-CtuUTWa_.jpeg";
const aeroClassicCityGallery1 = "/assets/gallery-5-CrQ8ja__.jpeg";
const aeroClassicCityGallery2 = "/assets/gallery-7-jW4nS_OJ.jpeg";
const aeroClassicCityGallery3 = "/assets/gallery-11-Dgr2BgC-.jpeg";
const aeroClassicCityGallery4 = "/assets/aero-classic-city-4-BkNpAXsh.jpeg";
const aeroClassicCityGallery5 = "/assets/gallery-2-0bzNEijB.jpeg";
const aeroClassicCityGallery6 = "/assets/gallery-1-CtuUTWa_.jpeg";
const aeroDreamCityImg = "/assets/gallery-2-0bzNEijB.jpeg";
const aeroDreamCityGallery1 = "/assets/gallery-4-CFaCWy3E.jpeg";
const aeroDreamCityGallery2 = "/assets/gallery-12-C-IFoQaf.jpeg";
const aeroDreamCityGallery3 = "/assets/aero-dream-city-3-fMKNFVcc.jpeg";
const hillockMeadowsImg = "/assets/gallery-3-C2LgjAW6.jpeg";
const hillockMeadowsGallery1 = "/assets/gallery-9-Dg-bQonJ.jpeg";
const hillockMeadowsGallery2 = "/assets/gallery-10-BdaYsCDp.jpeg";
const hillockMeadowsGallery3 = "/assets/hillock-meadows-farms-3-BVd43wck.jpeg";
const magicMeadowsImg = "/assets/gallery-6-CJ60nBcB.jpeg";
const magicMeadowsGallery1 = "/assets/gallery-8-Dk9MeT8f.jpeg";
const magicMeadowsGallery2 = "/assets/gallery-6-CJ60nBcB.jpeg";
const magicMeadowsGallery3 = "/assets/the-magic-meadows-3-Ihe00sUm.jpeg";
const magicMeadowsGallery4 = "/assets/the-magic-meadows-4-D9tcbf74.jpeg";
const magicMeadowsGallery5 = "/assets/the-magic-meadows-5-CbbFrpkk.jpeg";
const magicMeadowsGallery6 = "/assets/the-magic-meadows-6-CIAlPGPD.jpeg";
const PROJECTS = [
  { slug: "aero-classic-city", name: "Aero Classic City", location: "Yamuna Expressway, Greater Noida", price: "₹25K per sq.yd", size: "100–1000 sq.yd", type: "", image: aeroClassicCityImg, desc: "A landmark township along Yamuna Expressway offering modern plots and apartments with world-class infrastructure.", gallery: [aeroClassicCityGallery1, aeroClassicCityGallery2, aeroClassicCityGallery3, aeroClassicCityGallery4, aeroClassicCityGallery5, aeroClassicCityGallery6] },
  { slug: "aero-dream-city", name: "Aero Dream City", location: "Tappal Chowk, Yamuna Expressway", price: "₹25K per sq.yd", size: "100–500 sq.yd", type: "", image: aeroDreamCityImg, desc: "Strategically located residential development with premium amenities and excellent connectivity.", gallery: [aeroDreamCityGallery1, aeroDreamCityGallery2, aeroDreamCityGallery3] },
  { slug: "hillock-meadows-farms", name: "Hillock Meadows Farms", location: "Near Rajaji National Park, Dehradun", price: "₹18K per sq.yd", size: "120–2248 sq.yd", type: "", image: hillockMeadowsImg, desc: "Lush farm plots and cottages bordering the pristine Rajaji National Park — a serene escape into nature.", gallery: [hillockMeadowsGallery1, hillockMeadowsGallery2, hillockMeadowsGallery3] },
  { slug: "the-magic-meadows", name: "The Magic Meadows", location: "Dehradun", price: "₹18K per sq.yd", size: "Plots & Cottages", type: "", image: magicMeadowsImg, desc: "Picturesque meadows with curated plots and ready cottages — your private slice of the Doon valley.", gallery: [magicMeadowsGallery1, magicMeadowsGallery2, magicMeadowsGallery3, magicMeadowsGallery4, magicMeadowsGallery5, magicMeadowsGallery6] }
];
const STATS = [
  { value: 850, suffix: "+", label: "Elegant Apartments" },
  { value: 950, suffix: "+", label: "Luxury Houses" },
  { value: 18e3, suffix: "+", label: "Satisfied Guests" },
  { value: 2e3, suffix: "+", label: "Happy Owners" }
];
const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/projects", label: "Projects", hasDropdown: true },
  { to: "/legal", label: "Legal" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" }
];
const $$splitComponentImporter = () => import("./projects._slug-DxRYVPEr.js");
const $$splitErrorComponentImporter = () => import("./projects._slug-D7vOoezM.js");
const $$splitNotFoundComponentImporter = () => import("./projects._slug-Dlj1RZ97.js");
const Route = createFileRoute("/projects/$slug")({
  loader: ({
    params
  }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return {
      project
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: loaderData ? [{
      title: `${loaderData.project.name} — Magic India`
    }, {
      name: "description",
      content: loaderData.project.desc
    }, {
      property: "og:title",
      content: `${loaderData.project.name} — Magic India`
    }, {
      property: "og:description",
      content: loaderData.project.desc
    }, {
      property: "og:image",
      content: loaderData.project.image
    }, {
      name: "twitter:image",
      content: loaderData.project.image
    }] : []
  }),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TrustRoute = Route$8.update({
  id: "/trust",
  path: "/trust",
  getParentRoute: () => Route$9
});
const ProjectsRoute = Route$7.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$9
});
const LegalRoute = Route$6.update({
  id: "/legal",
  path: "/legal",
  getParentRoute: () => Route$9
});
const GalleryRoute = Route$5.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$9
});
const ContactRoute = Route$4.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$9
});
const AboutRoute = Route$3.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$9
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$9
});
const ProjectsIndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => ProjectsRoute
});
const ProjectsSlugRoute = Route.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => ProjectsRoute
});
const ProjectsRouteChildren = {
  ProjectsSlugRoute,
  ProjectsIndexRoute
};
const ProjectsRouteWithChildren = ProjectsRoute._addFileChildren(
  ProjectsRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  GalleryRoute,
  LegalRoute,
  ProjectsRoute: ProjectsRouteWithChildren,
  TrustRoute
};
const routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  NAV_LINKS as N,
  PageHero as P,
  Route as R,
  STATS as S,
  PROJECTS as a,
  router as r
};
