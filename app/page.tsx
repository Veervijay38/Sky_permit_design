import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Phone } from "lucide-react";
import { SectionTag, SectionHeading, StatCard, CheckItem } from "@/components/ui";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Sky Permit Designs | Professional Building Permit Drawings — Ontario",
  description:
    "BCIN-certified building permit drawings for Ontario homeowners and contractors. Decks, basements, additions, and more. Serving GTA including Ajax, Toronto, Pickering, Whitby & Oshawa.",
};

const services = [
  {
    number: "01",
    title: "Deck Permit Drawings",
    desc: "Detailed structural drawings for new decks and deck expansions, fully compliant with Ontario Building Code requirements.",
    tag: "Most Popular",
  },
  {
    number: "02",
    title: "Basement Renovation Plans",
    desc: "Comprehensive drawings for basement finishing, underpinning, and secondary suite conversions with all required specifications.",
    tag: null,
  },
  {
    number: "03",
    title: "Home Addition Plans",
    desc: "Precise architectural drawings for rear additions, second-storey expansions, and garage conversions.",
    tag: null,
  },
  {
    number: "04",
    title: "Residential Permit Packages",
    desc: "Full permit drawing packages tailored to your municipality's specific requirements for smooth, fast approvals.",
    tag: null,
  },
];

const processSteps = [
  { step: "01", title: "Free Consultation", desc: "Tell us about your project — we assess scope, complexity, and timeline." },
  { step: "02", title: "Site Measurement", desc: "We visit or you provide existing drawings. Precise measurements form the foundation." },
  { step: "03", title: "AutoCAD Drafting", desc: "Our team produces detailed, code-compliant drawings using professional AutoCAD software." },
  { step: "04", title: "Permit Submission", desc: "You receive submission-ready drawings. We guide you through the municipality process." },
];

const portfolioItems = [
  { title: "Two-Storey Rear Addition", location: "Ajax, ON", type: "Home Addition", color: "from-charcoal-700 to-charcoal-900" },
  { title: "Walkout Deck & Pergola", location: "Pickering, ON", type: "Deck Permit", color: "from-charcoal-600 to-charcoal-800" },
  { title: "Legal Basement Suite", location: "Toronto, ON", type: "Basement Renovation", color: "from-charcoal-700 to-charcoal-900" },
  { title: "Garage Conversion", location: "Whitby, ON", type: "Accessory Structure", color: "from-charcoal-600 to-charcoal-800" },
  { title: "Second Storey Addition", location: "Oshawa, ON", type: "Home Addition", color: "from-charcoal-700 to-charcoal-900" },
  { title: "Ground-Level Deck", location: "Markham, ON", type: "Deck Permit", color: "from-charcoal-600 to-charcoal-800" },
];

export default function HomePage() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="relative bg-charcoal-900 min-h-screen flex items-end pb-24 pt-40 overflow-hidden grid-overlay">
        {/* Decorative vertical lines */}
        <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
        <div className="absolute top-0 right-[30%] w-px h-full bg-gradient-to-b from-transparent via-gold/6 to-transparent" />

        {/* Background accent shape */}
        <div className="absolute top-1/3 right-10 lg:right-24 w-64 lg:w-96 h-64 lg:h-96 rounded-full bg-gold/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            {/* Left — Main headline */}
            <div className="lg:col-span-8 animate-fade-up">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-gold" />
                <span className="font-body text-[11px] tracking-[0.3em] uppercase text-gold">
                  BCIN Certified · Ontario
                </span>
              </div>
              <h1 className="font-display font-light text-display-xl text-cream-200 leading-[0.93] mb-8">
                Permit Drawings
                <br />
                <em className="text-gold not-italic">Built for</em>
                <br />
                Approval.
              </h1>
              <p className="font-body text-base text-slate-light max-w-lg leading-relaxed mb-10 font-light">
                Professional, AutoCAD-drafted building permit drawings for residential projects across Ontario.
                Every plan is BCIN-certified and fully compliant with the Ontario Building Code — ready for
                submission from day one.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-charcoal-900 font-body text-xs font-medium tracking-[0.15em] uppercase px-8 py-4 transition-all duration-200 hover:scale-[1.02]"
                >
                  Get a Free Quote
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-3 border border-white/20 text-cream-200 hover:border-gold hover:text-gold font-body text-xs font-medium tracking-[0.15em] uppercase px-8 py-4 transition-all duration-200"
                >
                  View Our Work
                </Link>
              </div>
            </div>

            {/* Right — Stats */}
            <div className="lg:col-span-4 animate-fade-up animate-delay-300">
              <div className="border border-white/10 bg-charcoal-800/60 backdrop-blur-sm p-8 space-y-8">
                <StatCard value="500+" label="Approved Permit Submissions" />
                <StatCard value="BCIN" label="Certified & Insured" />
                <StatCard value="GTA+" label="All Ontario Municipalities" />
                <StatCard value="5–7" label="Business Day Turnaround" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── SERVICES OVERVIEW ───────── */}
      <section className="py-section bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateOnScroll>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
              <div>
                <SectionTag>Our Services</SectionTag>
                <SectionHeading>What We Draft<br />For You</SectionHeading>
              </div>
              <p className="font-body text-sm text-slate-warm max-w-sm leading-relaxed lg:text-right">
                Every project is handled with the same precision and care — from a simple backyard deck to
                a complete home addition.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-px bg-white/5">
            {services.map((s, i) => (
              <AnimateOnScroll key={s.number} delay={i * 80}>
                <div className="bg-charcoal-800 p-10 group hover:bg-charcoal-700 transition-colors duration-300 card-lift cursor-default">
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-display text-5xl font-light text-gold/20 group-hover:text-gold/40 transition-colors">
                      {s.number}
                    </span>
                    {s.tag && (
                      <span className="font-body text-[10px] tracking-[0.2em] uppercase bg-gold/15 text-gold px-3 py-1">
                        {s.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-2xl text-cream-200 mb-3 font-light group-hover:text-gold transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="font-body text-sm text-slate-warm leading-relaxed">{s.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={200}>
            <div className="mt-10 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-body text-sm tracking-wider transition-colors group"
              >
                View all services
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ───────── TRUST BAND ───────── */}
      <section className="py-16 bg-gold">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-charcoal-900">
            {[
              { label: "BCIN Certified", desc: "Ontario legally certified" },
              { label: "AutoCAD Drafted", desc: "Precision-engineered plans" },
              { label: "Code Compliant", desc: "Ontario Building Code" },
              { label: "Fast Turnaround", desc: "5–7 business days" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <CheckCircle2 size={24} className="mx-auto mb-3 opacity-80" />
                <p className="font-body text-sm font-medium tracking-wide">{item.label}</p>
                <p className="font-body text-xs opacity-60 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── PORTFOLIO PREVIEW ───────── */}
      <section className="py-section bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateOnScroll>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
              <div>
                <SectionTag>Recent Work</SectionTag>
                <SectionHeading>Projects We've<br />Brought to Life</SectionHeading>
              </div>
              <Link
                href="/portfolio"
                className="self-start lg:self-end inline-flex items-center gap-2 text-gold hover:text-gold-light font-body text-sm tracking-wider transition-colors group"
              >
                View full portfolio
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 80}>
                <div className="group relative overflow-hidden bg-charcoal-700 card-lift cursor-pointer">
                  {/* Placeholder image area */}
                  <div className={`bg-gradient-to-br ${item.color} h-56 relative overflow-hidden`}>
                    <div className="absolute inset-0 grid-overlay opacity-50" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="font-body text-[10px] tracking-[0.2em] uppercase text-gold bg-charcoal-900/70 px-3 py-1">
                        {item.type}
                      </span>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 border-t border-white/5">
                    <h3 className="font-display text-lg text-cream-200 font-light group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs text-slate-warm mt-1 tracking-wider">{item.location}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── PROCESS PREVIEW ───────── */}
      <section className="py-section bg-cream-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <SectionTag light>How It Works</SectionTag>
              <SectionHeading light className="max-w-xl mx-auto">
                From Vision to<br />Approved Permit
              </SectionHeading>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <AnimateOnScroll key={step.step} delay={i * 100}>
                <div className="relative">
                  {/* Connector line */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gold/30 z-10" style={{ width: "calc(100% - 3rem)", left: "calc(100% - 1rem)" }} />
                  )}
                  <div className="relative z-20">
                    <div className="w-12 h-12 bg-charcoal-900 flex items-center justify-center mb-6">
                      <span className="font-display text-gold text-lg font-light">{step.step}</span>
                    </div>
                    <h3 className="font-display text-xl text-charcoal-900 font-light mb-3">{step.title}</h3>
                    <p className="font-body text-sm text-slate-mid leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={300}>
            <div className="text-center mt-14">
              <Link
                href="/process"
                className="inline-flex items-center gap-3 bg-charcoal-900 hover:bg-charcoal-700 text-cream-200 font-body text-xs font-medium tracking-[0.15em] uppercase px-8 py-4 transition-all duration-200 hover:scale-[1.02]"
              >
                See our full process
                <ArrowRight size={14} />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ───────── WHY CHOOSE US ───────── */}
      <section className="py-section bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll>
              <SectionTag>Why Sky Permit</SectionTag>
              <SectionHeading className="mb-6">Designed for Speed.<br />Built for Approval.</SectionHeading>
              <p className="font-body text-sm text-slate-warm leading-relaxed mb-10">
                We understand that permit delays cost you time and money. Our drawings are engineered
                to get approved on the first submission — precise, detailed, and aligned with every
                municipality's requirements across Ontario.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <CheckItem>BCIN-certified designer on every project</CheckItem>
                <CheckItem>Full Ontario Building Code compliance guaranteed</CheckItem>
                <CheckItem>5–7 business day turnaround, with rush options available</CheckItem>
                <CheckItem>Transparent flat-rate pricing — no hidden fees</CheckItem>
                <CheckItem>We handle municipalities from Ajax to Mississauga</CheckItem>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <div className="relative">
                <div className="bg-charcoal-700 border border-white/8 p-10 space-y-8">
                  <div className="font-display text-5xl text-gold font-light italic">
                    "Fast, accurate,<br />and city-approved."
                  </div>
                  <p className="font-body text-sm text-slate-warm leading-relaxed">
                    Our clients come back to us because our drawings get approved — not revised and resubmitted.
                    We invest the time upfront so you don't pay penalties or wait months for a permit.
                  </p>
                  <div className="divider-gold" />
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center">
                      <span className="font-display text-gold text-sm">S</span>
                    </div>
                    <div>
                      <p className="font-body text-sm text-cream-200">Sky Permit Team</p>
                      <p className="font-body text-xs text-slate-warm">Ontario BCIN Certified</p>
                    </div>
                  </div>
                </div>
                {/* Decorative corner */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/20 -z-0" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ───────── AREAS SERVED ───────── */}
      <section className="py-20 bg-charcoal-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateOnScroll>
            <div className="text-center mb-10">
              <SectionTag>Coverage</SectionTag>
              <p className="font-body text-sm text-slate-warm mt-2">Serving homeowners and contractors across the Greater Toronto Area and beyond</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {["Ajax", "Toronto", "Pickering", "Whitby", "Oshawa", "Markham", "Vaughan", "Mississauga", "Brampton", "Richmond Hill", "Newmarket"].map((city) => (
                <div key={city} className="font-body text-sm text-slate-light border border-white/10 px-5 py-2 hover:border-gold/40 hover:text-gold transition-all duration-200">
                  {city}
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="py-section bg-charcoal-800 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <AnimateOnScroll>
            <SectionTag>Ready to Start?</SectionTag>
            <h2 className="font-display text-display-lg text-cream-200 font-light mb-6 leading-tight">
              Your permit drawings,<br />
              <em className="text-gold not-italic">done right.</em>
            </h2>
            <p className="font-body text-sm text-slate-warm max-w-lg mx-auto leading-relaxed mb-10">
              Contact us today for a free, no-obligation quote. We'll review your project, confirm timelines,
              and provide a clear price — usually within the same business day.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-charcoal-900 font-body text-xs font-medium tracking-[0.15em] uppercase px-10 py-5 transition-all duration-200 hover:scale-[1.02]"
              >
                Request a Free Quote
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:9057411886"
                className="inline-flex items-center gap-3 border border-white/20 text-cream-200 hover:border-gold hover:text-gold font-body text-xs font-medium tracking-[0.15em] uppercase px-10 py-5 transition-all duration-200"
              >
                <Phone size={14} />
                905-741-1886
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
