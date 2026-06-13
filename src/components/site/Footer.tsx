import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail, Mountain } from "lucide-react";
import { PROJECTS } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/20">
                <Mountain className="h-5 w-5 text-accent" />
              </span>
              <span className="font-serif text-xl font-bold">Magic <span className="text-accent">India</span></span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-secondary-foreground/75">
              Crafting elegant homes and high-return investments across Dehradun, Greater Noida and the Yamuna Expressway since 2012.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-primary">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg text-accent">Useful Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-secondary-foreground/75">
              {[{to:"/",label:"Home"},{to:"/about",label:"About Us"},{to:"/legal",label:"Legal"},{to:"/contact",label:"FAQ"},{to:"/contact",label:"Contact Us"}].map((l, i) => (
                <li key={i}><Link to={l.to} className="hover:text-accent">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-accent">Our Projects</h4>
            <ul className="mt-4 space-y-2 text-sm text-secondary-foreground/75">
              {PROJECTS.map((p) => (
                <li key={p.slug}>
                  <Link to="/projects/$slug" params={{ slug: p.slug }} className="hover:text-accent">{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-accent">Get In Touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-secondary-foreground/80">
              <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-accent mt-0.5" /> H-78, 1st Floor, Sector 63, Noida, UP - 201301</li>
              <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-accent mt-0.5" /> +91 730 269 7516</li>
              <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-accent mt-0.5" /> info@magicindia.in</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-px mx-auto flex max-w-7xl flex-col gap-3 py-5 text-xs text-secondary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2024–2026 Magic India Hitech Projects Private Limited. All rights reserved.</p>
          <div className="flex gap-5"><a href="#" className="hover:text-accent">Terms</a><a href="#" className="hover:text-accent">Privacy</a><a href="#" className="hover:text-accent">Cookies</a></div>
        </div>
      </div>
    </footer>
  );
}
