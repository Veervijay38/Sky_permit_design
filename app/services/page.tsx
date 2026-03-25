import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionTag, SectionHeading, CheckItem } from "@/components/ui";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Services | BCIN-Certified Permit Drawing Services in Ontario",
  description:
    "From deck permits to home additions — professional AutoCAD building permit drawings for residential projects across Ontario. BCIN-certified and Ontario Building Code compliant.",
};

const services = [
  {
    number: "01",
    title: "Deck Permit Drawings",
    description:
      "A permit-ready deck drawing is the foundation of every successful deck project in Ontario. Our drawings include all required structural details — foundation, framing, guardrails, connections, and dimensions — to meet your municipality&apos;s exact requirements.",
    includes: [
      "Site plan showing deck location and setbacks",
      "Framing plan and cross-section details",
      "Foundation type specification (footings / helical piles)",
      "Guardrail and stair detail drawings",
      "Ontario Building Code compliance notes",
    ],
    ideal: "Homeowners building new decks, expanding existing decks, or replacing older structures requiring permits.",
  },
  {
    number: "02",
    title: "Basement Renovation & Secondary Suite Plans",
    description:
      "Finishing a basement or creating a legal secondary suite requires precise drawings showing egress, ceiling heights, electrical rough-in zones, HVAC layout, and structural modifications. Our basement permit packages are designed to get city approval efficiently.",
    includes: [
      "Existing and proposed floor plans",
      "Egress window size and location documentation",
      "Ceiling height confirmation and clearances",
      "Smoke and CO detector placement",
      "Separation wall (fire rating) specifications for suites",
    ],
    ideal: "Homeowners finishing basements, adding rental suites, or converting existing spaces.",
  },
  {
    number: "03",
    title: "Home Addition Drawings",
    description:
      "Home additions — rear, side, or second storey — are among the most complex residential permit applications. We produce full architectural drawing sets with foundation details, structural framing, and elevation drawings so your addition moves from concept to approved with confidence.",
    includes: [
      "Site plan with addition footprint and setbacks",
      "Floor plan of new addition and impacted existing areas",
      "Structural framing plans and beam sizing",
      "Exterior elevation drawings (all affected sides)",
      "Cross-sections and construction details",
    ],
    ideal: "Homeowners expanding living space — rear additions, pop-tops, or master suite additions.",
  },
  {
    number: "04",
    title: "Garage & Accessory Structure Plans",
    description:
      "Whether you&apos;re building a detached garage, workshop, or converting an attached garage into living space, we prepare drawings to satisfy your municipality&apos;s zoning and structural requirements.",
    includes: [
      "Site plan with zoning setback compliance",
      "Foundation and floor slab details",
      "Structural framing and roof plan",
      "Door and window schedule",
      "Electrical layout (rough-in) if applicable",
    ],
    ideal: "Homeowners building or converting garages, garden sheds over 10m², and accessory structures.",
  },
  {
    number: "05",
    title: "Full Residential Permit Packages",
    description:
      "Some municipalities require a full drawing set even for modest projects. We offer comprehensive permit packages that include every document your city needs — drawing, site survey integration, zoning checklist, and application forms coordination.",
    includes: [
      "Complete drawing set as required by municipality",
      "Zoning compliance summary",
      "BCIN designer stamp and sign-off",
      "Revision support if city requests changes",
      "Direct guidance through the permit application process",
    ],
    ideal: "Contractors managing multiple residential projects, or homeowners who want full-service support.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-40 pb-24 bg-charcoal-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-3xl rounded-full" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl animate-fade-up">
            <SectionTag>What We Offer</SectionTag>
            <h1 className="font-display text-display-lg text-cream-200 font-light leading-tight mb-6">
              Permit Drawing<br />
              <em className="text-gold not-italic">Services</em>
            </h1>
            <p className="font-body text-base text-slate-light leading-relaxed font-light max-w-xl">
              Every service we provide is performed by a BCIN-certified designer using professional AutoCAD
              software — delivering drawings that meet the Ontario Building Code and your municipality&apos;s
              standards on the first submission.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-section bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-2">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.number} delay={i * 60}>
              <div className="group border border-white/8 bg-charcoal-800 hover:border-gold/20 transition-all duration-300">
                <div className="p-10 lg:p-14 grid lg:grid-cols-12 gap-10">
                  {/* Number + Title */}
                  <div className="lg:col-span-4">
                    <span className="font-display text-6xl font-light text-gold/15 group-hover:text-gold/30 transition-colors block mb-4">
                      {service.number}
                    </span>
                    <h2 className="font-display text-display-sm text-cream-200 font-light mb-4 group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h2>
                    <p className="font-body text-xs tracking-[0.15em] uppercase text-gold/60 border border-gold/20 inline-block px-3 py-1">
                      Ontario Permit Service
                    </p>
                  </div>

                  {/* Description + Includes */}
                  <div className="lg:col-span-8 space-y-8">
                    <p className="font-body text-sm text-slate-light leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-4 font-medium">
                          What&apos;s Included
                        </h4>
                        <div className="space-y-3">
                          {service.includes.map((item) => (
                            <CheckItem key={item}>{item}</CheckItem>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-4 font-medium">
                          Ideal For
                        </h4>
                        <p className="font-body text-sm text-slate-warm leading-relaxed">{service.ideal}</p>
                        <div className="mt-8">
                          <Link
                            href="/contact"
                            className="group/btn inline-flex items-center gap-2 text-cream-200 hover:text-gold font-body text-xs tracking-[0.15em] uppercase transition-colors"
                          >
                            Get a quote for this service
                            <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gold">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-display-md text-charcoal-900 font-light mb-4 leading-tight">
            Not sure which service fits your project?
          </h2>
          <p className="font-body text-sm text-charcoal-700 mb-8 leading-relaxed">
            Reach out for a free consultation. We&apos;ll review your project and recommend exactly what&apos;s
            needed for permit approval in your municipality.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-charcoal-900 hover:bg-charcoal-700 text-cream-200 font-body text-xs font-medium tracking-[0.15em] uppercase px-10 py-5 transition-all duration-200 hover:scale-[1.02]"
          >
            Get a Free Consultation
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
