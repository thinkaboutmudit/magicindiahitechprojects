import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteLayout({ children, transparentHeaderOffset = false }: { children: ReactNode; transparentHeaderOffset?: boolean }) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className={transparentHeaderOffset ? "" : "pt-20"}>{children}</main>
      <Footer />
    </div>
  );
}
