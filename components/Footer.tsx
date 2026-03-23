import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const services = [
  "Deck Permit Drawings",
  "Basement Renovation Plans",
  "Home Addition Drawings",
  "Garage Conversion Plans",
  "Secondary Suite Permits",
];

const pages = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Our Process", href: "/process" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-800 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <p className="font-display text-2xl text-cream-200 tracking-wide">Sky Permit</p>
              <p className="font-body text-[10px] tracking-[0.3em] text-gold uppercase font-light">Designs</p>
            </div>
            <p className="font-body text-sm text-slate-warm leading-relaxed mb-6">
              BCIN-certified permit drawings for Ontario homeowners and contractors.
              Precise, code-compliant, and submission-ready.
            </p>
            <div className="space-y-3">
              <a href="tel:9057411886" className="flex items-center gap-3 group">
                <Phone size={14} className="text-gold flex-shrink-0" />
                <span className="font-body text-sm text-slate-light group-hover:text-gold transition-colors">905-741-1886</span>
              </a>
              <a href="mailto:info@skypermitdesigns.com" className="flex items-center gap-3 group">
                <Mail size={14} className="text-gold flex-shrink-0" />
                <span className="font-body text-sm text-slate-light group-hover:text-gold transition-colors">info@skypermitdesigns.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-slate-light">Toronto, Ontario, Canada</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-6 font-medium">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="font-body text-sm text-slate-warm hover:text-cream-200 transition-colors hover-underline">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-6 font-medium">Quick Links</h4>
            <ul className="space-y-3">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="font-body text-sm text-slate-warm hover:text-cream-200 transition-colors hover-underline">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas + CTA */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-6 font-medium">Service Areas</h4>
            <p className="font-body text-sm text-slate-warm leading-loose">
              Ajax · Toronto · Pickering<br />
              Whitby · Oshawa · Markham<br />
              Mississauga · Brampton · GTA
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold text-charcoal-900 font-body text-xs font-medium tracking-[0.15em] uppercase px-6 py-3 hover:bg-gold-light transition-all duration-200 group"
              >
                Free Quote
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        <div className="divider-gold mt-16 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-slate-mid">
            © {new Date().getFullYear()} Sky Permit Designs. All rights reserved.
          </p>
          <p className="font-body text-xs text-slate-mid">
            BCIN Certified · Ontario Building Code Compliant
          </p>
        </div>
      </div>
    </footer>
  );
}
