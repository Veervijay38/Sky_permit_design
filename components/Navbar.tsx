"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-charcoal-900/95 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="font-display text-xl text-cream-200 tracking-wide group-hover:text-gold transition-colors duration-300">
              Sky Permit
            </span>
            <span className="font-body text-[10px] tracking-[0.3em] text-gold uppercase font-light">
              Designs
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "font-body text-sm tracking-wider uppercase transition-colors duration-200 hover-underline",
                  pathname === link.href
                    ? "text-gold"
                    : "text-slate-light hover:text-cream-200"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:9057411886"
              className="hidden lg:flex items-center gap-2 text-sm text-slate-light hover:text-gold transition-colors duration-200"
            >
              <Phone size={14} className="text-gold" />
              <span className="font-body tracking-wide">905-741-1886</span>
            </a>
            <Link
              href="/contact"
              className="hidden md:block bg-gold hover:bg-gold-light text-charcoal-900 text-xs font-body font-medium tracking-[0.15em] uppercase px-6 py-3 transition-all duration-200 hover:scale-[1.02]"
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-cream-200 hover:text-gold transition-colors p-1"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-charcoal-900 flex flex-col transition-all duration-500 md:hidden",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex-1 flex flex-col items-start justify-center px-10 gap-2 pt-20">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "font-display text-4xl italic transition-all duration-300 py-2",
                pathname === link.href ? "text-gold" : "text-cream-200 hover:text-gold"
              )}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="px-10 pb-12 border-t border-white/10 pt-8 space-y-3">
          <a href="tel:9057411886" className="flex items-center gap-3 text-slate-light hover:text-gold transition-colors">
            <Phone size={16} className="text-gold" />
            <span className="font-body text-sm tracking-wider">905-741-1886</span>
          </a>
          <p className="font-body text-xs text-slate-warm tracking-wider">
            Info@skypermitdesigns.com
          </p>
        </div>
      </div>
    </>
  );
}
