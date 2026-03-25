import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionTag, SectionHeading } from "@/components/ui";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Portfolio | Building Permit Drawing Projects Across Ontario",
  description:
    "Browse our portfolio of approved building permit drawings — decks, basements, home additions and more across the GTA and Ontario.",
};

const projects = [
  {
    id: 1,
    title: "Two-Storey Rear Addition",
    location: "Ajax, ON",
    type: "Home Addition",
    year: "2024",
    desc: "Full architectural permit set for a 600 sq ft rear addition expanding the main floor and adding a master suite above.",
    tags: ["Addition", "AutoCAD", "Ajax"],
    bg: "bg-gradient-to-br from-charcoal-600 to-charcoal-900",
  },
  {
    id: 2,
    title: "Walkout Deck with Pergola",
    location: "Pickering, ON",
    type: "Deck Permit",
    year: "2024",
    desc: "Elevated walkout deck at 8ft above grade requiring full structural drawings, guard rail details, and footing specifications.",
    tags: ["Deck", "Structural", "Pickering"],
    bg: "bg-gradient-to-br from-charcoal-500 to-charcoal-800",
  },
  {
    id: 3,
    title: "Legal Basement Suite",
    location: "Toronto, ON",
    type: "Secondary Suite",
    year: "2024",
    desc: "Complete secondary suite permit drawings for a two-bedroom legal basement apartment with egress compliance.",
    tags: ["Basement", "Secondary Suite", "Toronto"],
    bg: "bg-gradient-to-br from-charcoal-700 to-charcoal-900",
  },
  {
    id: 4,
    title: "Detached Garage Build",
    location: "Whitby, ON",
    type: "Accessory Structure",
    year: "2023",
    desc: "Two-car detached garage with full foundation, framing, and roofing drawings — approved on first submission.",
    tags: ["Garage", "Accessory", "Whitby"],
    bg: "bg-gradient-to-br from-charcoal-600 to-charcoal-800",
  },
  {
    id: 5,
    title: "Second Storey Pop-Top",
    location: "Oshawa, ON",
    type: "Home Addition",
    year: "2023",
    desc: "Full second-storey addition above an existing bungalow, including structural assessment integration and all elevation drawings.",
    tags: ["Addition", "Pop-top", "Oshawa"],
    bg: "bg-gradient-to-br from-charcoal-700 to-charcoal-900",
  },
  {
    id: 6,
    title: "Ground-Level Composite Deck",
    location: "Markham, ON",
    type: "Deck Permit",
    year: "2023",
    desc: "Ground-level deck permit drawings with helical pile foundation specification and detailed framing layout.",
    tags: ["Deck", "Ground Level", "Markham"],
    bg: "bg-gradient-to-br from-charcoal-500 to-charcoal-700",
  },
  {
    id: 7,
    title: "Garage-to-Office Conversion",
    location: "Mississauga, ON",
    type: "Conversion",
    year: "2023",
    desc: "Permitted conversion of attached single-car garage into a home office, including insulation, vapour barrier, and fire separation details.",
    tags: ["Conversion", "Garage", "Mississauga"],
    bg: "bg-gradient-to-br from-charcoal-600 to-charcoal-900",
  },
  {
    id: 8,
    title: "Multi-Level Deck Complex",
    location: "Ajax, ON",
    type: "Deck Permit",
    year: "2022",
    desc: "Three-level interconnected deck system with hot tub pad, stairs, and integrated lighting rough-in. Complex structural design.",
    tags: ["Deck", "Multi-Level", "Ajax"],
    bg: "bg-gradient-to-br from-charcoal-500 to-charcoal-800",
  },
  {
    id: 9,
    title: "Basement Underpinning",
    location: "Scarborough, ON",
    type: "Structural",
    year: "2022",
    desc: "Structural permit drawings for full perimeter underpinning to increase basement ceiling height from 6.5ft to 8ft.",
    tags: ["Basement", "Underpinning", "Structural"],
    bg: "bg-gradient-to-br from-charcoal-700 to-charcoal-900",
  },
];

const categories = ["All", "Deck Permit", "Home Addition", "Basement / Suite", "Accessory Structure"];

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 bg-charcoal-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gold/5 blur-3xl rounded-full" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl animate-fade-up">
            <SectionTag>Our Work</SectionTag>
            <h1 className="font-display text-display-lg text-cream-200 font-light leading-tight mb-6">
              Projects That Got<br />
              <em className="text-gold not-italic">Approved.</em>
            </h1>
            <p className="font-body text-base text-slate-light leading-relaxed font-light max-w-xl">
              Every project shown here was submitted to Ontario municipalities and received approval.
              Our drawings speak for themselves.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter (visual only — no JS filter for SSR) */}
      <section className="py-8 bg-charcoal-800 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`font-body text-xs tracking-[0.15em] uppercase px-5 py-2 transition-all duration-200 ${
                  i === 0
                    ? "bg-gold text-charcoal-900"
                    : "border border-white/15 text-slate-light hover:border-gold/40 hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-section bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <AnimateOnScroll key={project.id} delay={i * 60}>
                <div className="group relative flex flex-col bg-charcoal-800 border border-white/5 hover:border-gold/20 transition-all duration-300 card-lift overflow-hidden">
                  {/* Visual area */}
                  <div className={`${project.bg} h-52 relative overflow-hidden`}>
                    <div className="absolute inset-0 grid-overlay opacity-60" />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gold/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Type badge */}
                    <div className="absolute top-4 left-4">
                      <span className="font-body text-[10px] tracking-[0.2em] uppercase text-gold bg-charcoal-900/80 px-3 py-1">
                        {project.type}
                      </span>
                    </div>
                    {/* Year */}
                    <div className="absolute top-4 right-4">
                      <span className="font-body text-[10px] text-slate-warm">{project.year}</span>
                    </div>
                    {/* Decorative lines */}
                    <div className="absolute bottom-8 left-6 right-6 h-px bg-gold/20" />
                    <div className="absolute bottom-4 left-6 w-8 h-px bg-gold/40" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-xl text-cream-200 font-light mb-1 group-hover:text-gold transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="font-body text-xs text-gold/70 tracking-wider mb-3">{project.location}</p>
                    <p className="font-body text-sm text-slate-warm leading-relaxed flex-1">{project.desc}</p>
                    <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="font-body text-[10px] tracking-wider text-slate-mid border border-white/10 px-2 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-charcoal-800 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <AnimateOnScroll>
            <SectionTag>Start Your Project</SectionTag>
            <SectionHeading className="mb-6">Ready to Add Your<br />Project to This List?</SectionHeading>
            <p className="font-body text-sm text-slate-warm max-w-md mx-auto leading-relaxed mb-10">
              Tell us about your project and we&apos;ll provide a free quote, timeline estimate, and everything
              you need to move forward with confidence.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-charcoal-900 font-body text-xs font-medium tracking-[0.15em] uppercase px-10 py-5 transition-all duration-200 hover:scale-[1.02]"
            >
              Get a Free Quote
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
