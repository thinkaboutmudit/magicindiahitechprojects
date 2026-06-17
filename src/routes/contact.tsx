import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useState } from "react";
import { MapPin, Phone, Mail, Send, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Magic India Hitech Projects" },
      { name: "description", content: "Book a site visit, request a brochure or speak to our team about any Magic India project." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="container-px mx-auto grid max-w-7xl gap-12 py-16 lg:grid-cols-2 lg:items-start">
        <div>
          <span className="section-label">Contact Us</span>
          <h1 className="font-serif text-5xl font-bold leading-tight md:text-6xl">Let's find your <span className="text-primary">dream address.</span></h1>
      
          <div className="mt-10 space-y-5">
            <div className="flex gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><MapPin className="h-5 w-5" /></span>
              <div><div className="font-semibold">Our Office</div><div className="text-sm text-muted-foreground">H-78, 1st Floor, Sector 63, Noida, UP - 201301</div></div>
            </div>
            <div className="flex gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><Phone className="h-5 w-5" /></span>
              <div><div className="font-semibold">Call Us</div><a href="tel:+918010095135" className="text-sm text-muted-foreground hover:text-primary">+91-8010095135</a></div>
            </div>
            <div className="flex gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><Mail className="h-5 w-5" /></span>
              <div><div className="font-semibold">Email</div><a href="mailto:info@magicindia.in" className="text-sm text-muted-foreground hover:text-primary">info@magicindiahitechprojects.com</a></div>
            </div>
            <div className="flex gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><Clock className="h-5 w-5" /></span>
              <div><div className="font-semibold">Office Hours</div><div className="text-sm text-muted-foreground">Mon–Sat · 10:00 AM – 7:00 PM</div></div>
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
        >
          <h2 className="font-serif text-2xl font-bold">Book a Site Visit</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label="Full Name" id="name" required />
            <Field label="Phone" id="phone" type="tel" required />
            <div className="sm:col-span-2">
              <label htmlFor="project" className="text-sm font-medium">Interested Project</label>
              <select id="project" className="mt-2 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm">
                <option>Aero Classic City</option>
                <option>Aero Dream City</option>
                <option>Hillock Meadows Farms</option>
                <option>The Magic Meadows</option>
              </select>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">Prefer direct chat? Reach out on social.</p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="WhatsApp" className="grid h-11 w-11 place-items-center rounded-xl border border-border text-foreground transition hover:border-primary hover:text-primary">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-xl border border-border text-foreground transition hover:border-primary hover:text-primary">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-xl border border-border text-foreground transition hover:border-primary hover:text-primary">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
          <button type="submit" className="btn-saffron mt-6 w-full">{sent ? "Thank you! We'll be in touch." : (<><Send className="h-4 w-4" /> Send Enquiry</>)}</button>
        </motion.form>
      </section>
    </SiteLayout>
  );
}

function Field({ label, id, type = "text", required, className = "" }: { label: string; id: string; type?: string; required?: boolean; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm font-medium">{label}{required && <span className="text-primary"> *</span>}</label>
      <input id={id} type={type} required={required} className="mt-2 h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
    </div>
  );
}
