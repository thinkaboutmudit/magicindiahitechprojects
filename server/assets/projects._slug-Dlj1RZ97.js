import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { S as SiteLayout } from "./SiteLayout-wPu0vcQ5.js";
import "react";
import "lucide-react";
import "./router-Zn_Leek1.js";
import "@tanstack/react-query";
const SplitNotFoundComponent = () => /* @__PURE__ */ jsx(SiteLayout, { transparentHeaderOffset: true, children: /* @__PURE__ */ jsxs("div", { className: "container-px mx-auto max-w-3xl py-32 text-center", children: [
  /* @__PURE__ */ jsx("h1", { className: "font-serif text-4xl", children: "Project not found" }),
  /* @__PURE__ */ jsx(Link, { to: "/projects", className: "btn-saffron mt-6 inline-flex", children: "Back to all projects" })
] }) });
export {
  SplitNotFoundComponent as notFoundComponent
};
