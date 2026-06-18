import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { PROJECTS } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-px mx-auto max-w-7xl py-20">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="display-xl text-foreground">
              Find your <em className="font-serif italic text-muted-foreground/80">Property</em>
            </h2>
            <Link to="/contact" className="btn-dark mt-10">Get in touch <span aria-hidden>→</span></Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h4 className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Company</h4>
              <ul className="mt-5 space-y-3 text-sm text-foreground/85">
                <li><Link to="/about" className="hover:text-primary">About</Link></li>
                <li><Link to="/legal" className="hover:text-primary">Legal</Link></li>
                <li><Link to="/trust" className="hover:text-primary">Trust & Security</Link></li>
                <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
                <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Projects</h4>
              <ul className="mt-5 space-y-3 text-sm text-foreground/85">
                {PROJECTS.slice(0, 5).map((p) => (
                  <li key={p.slug}>
                    <Link to="/projects/$slug" params={{ slug: p.slug }} className="hover:text-primary">{p.name}</Link>
                  </li>
                ))}
                <li><Link to="/projects" className="text-primary hover:underline">View all →</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Contact</h4>
              <ul className="mt-5 space-y-3 text-sm text-foreground/85">
                <li>H-78, 1st Floor, Sector 63<br />Noida, UP – 201301</li>
                <li><a href="tel:+91-8010095135" className="hover:text-primary">+91-8010095135</a></li>
                <li><a href="mailto:info@magicindiahitechprojects.com" className="hover:text-primary">info@magicindiahitechprojects.com</a></li>
              </ul>
              <div className="mt-5 flex gap-3">
                {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground/70 transition hover:border-foreground hover:text-foreground">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2024–2026 Magic India Hitech Projects Pvt. Ltd.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
