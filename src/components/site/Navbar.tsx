import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS, PROJECTS } from "@/lib/site-data";
import logoImg from "@/assets/projects/logo.png";

export function Navbar() {
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

  useEffect(() => { setOpen(false); setProjOpen(false); }, [path]);

  const onHome = path === "/";
  const transparent = onHome && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        transparent ? "bg-transparent" : "bg-background/95 backdrop-blur shadow-[0_4px_20px_-12px_rgba(0,0,0,0.15)]"
      }`}
    >
      <div className="container-px mx-auto flex h-18 max-w-7xl items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoImg} alt="Magic India logo" className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) =>
            l.hasDropdown ? (
              <div key={l.to} className="relative" onMouseEnter={() => setProjOpen(true)} onMouseLeave={() => setProjOpen(false)}>
                <Link
                  to={l.to}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition ${
                    transparent ? "text-white/90 hover:bg-white/10" : "text-foreground/80 hover:bg-muted"
                  }`}
                >
                  {l.label} <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {projOpen && (
                  <div className="absolute left-0 top-full w-72 pt-2">
                    <div className="rounded-2xl border border-border bg-popover p-2 shadow-xl">
                      <Link to="/projects" className="block rounded-xl px-3 py-2 text-sm font-semibold text-primary hover:bg-muted">
                        View All Projects →
                      </Link>
                      <div className="my-1 border-t border-border" />
                      {PROJECTS.map((p) => (
                        <Link
                          key={p.slug}
                          to="/projects/$slug"
                          params={{ slug: p.slug }}
                          className="block rounded-xl px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
                        >
                          {p.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.to}
                to={l.to}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  transparent ? "text-white/90 hover:bg-white/10" : "text-foreground/80 hover:bg-muted"
                }`}
                activeProps={{ className: transparent ? "rounded-full px-4 py-2 text-sm font-semibold text-white bg-white/15" : "rounded-full px-4 py-2 text-sm font-semibold text-primary bg-primary/10" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className={transparent ? "btn-dark" : "btn-dark"}>Get in touch</Link>
        </div>

        <button
          aria-label="Toggle menu"
          className={`lg:hidden rounded-full p-2 ${transparent ? "text-white" : "text-foreground"}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-dark mt-2 self-start">Get in touch</Link>
          </div>
        </div>
      )}
    </header>
  );
}
