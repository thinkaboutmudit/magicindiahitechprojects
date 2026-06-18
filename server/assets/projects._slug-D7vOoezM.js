import { jsx, jsxs } from "react/jsx-runtime";
import { S as SiteLayout } from "./SiteLayout-wPu0vcQ5.js";
import "react";
import "@tanstack/react-router";
import "lucide-react";
import "./router-Zn_Leek1.js";
import "@tanstack/react-query";
const SplitErrorComponent = ({
  reset
}) => /* @__PURE__ */ jsx(SiteLayout, { transparentHeaderOffset: true, children: /* @__PURE__ */ jsxs("div", { className: "container-px mx-auto max-w-3xl py-32 text-center", children: [
  /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl", children: "Something went wrong" }),
  /* @__PURE__ */ jsx("button", { onClick: reset, className: "btn-saffron mt-6", children: "Try again" })
] }) });
export {
  SplitErrorComponent as errorComponent
};
