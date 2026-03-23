import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, FileText, CheckCircle, Phone } from "lucide-react";
import { SectionTag, SectionHeading } from "@/components/ui";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Our Process | How We Deliver Permit Drawings in Ontario",
  description:
    "From free consultation to approved permit — discover how Sky Permit Designs delivers BCIN-certified drawings in 5–7 business days.",
};

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Free Consultation",
    subtitle: "Day 1 — Same day response",
    description:
      "Every project starts with a conversation. Reach out by phone, email, or our contact form and tell us about your project — scope, location, and what you're looking to build. We'll let you know exactly what drawings are required for your municipality, our timeline, and a flat-rate quote.",
    details: [
      "No-obligation project assessment",
      "Municipality-specific requirements confirmed",
      "Clear timeline and pricing provided",
      "Questions answered by a BCIN-certified designer",
    ],
  },
  {
    number: "02",
    icon: FileText,
    title: "Measurements & Information",
    subtitle: "Day 1–2 — You provide existing info",
    description:
      "We work from what you already have. For most projects, you can provide existing floor plans, survey documents, and simple dimensions. For complex projects or where no existing drawings exist, we advise on a brief on-site measurement visit. Clear, accurate inputs mean accurate, approvable drawings.",
    details: [
      "Existing survey or site plan (if available)",
      "Rough sketches or dimensions of proposed work",
      "Existing floor plans (for additions/basements)",
      "We guide you through exactly what we need",
    ],
  },
  {
    number: "03",
    icon: FileText,
    title: "AutoCAD Drafting",
    subtitle: "Day 2–5 — We do the work",
    description:
      "Our BCIN-certified designers draft your complete permit drawing set using professional AutoCAD software. Every drawing is produced to meet your municipality's specific format, scale, and annotation requirements. We check every sheet against current Ontario Building Code standards before release.",
    details: [
      "Professional AutoCAD drafting by certified staff",
      "Full Ontario Building Code review",
      "Municipality format and scale requirements met",
      "BCIN designer seal applied to all drawings",
    ],
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Review & Delivery",
    subtitle: "Day 5–7 — Ready for submission",
    description:
      "Before your drawings are delivered, we perform a final internal review — checking setbacks, zoning compliance, structural references, and all drawing notes. You receive a complete PDF drawing package, organized and labelled for easy submission to your local building department.",
    details: [
      "Final quality check against local zoning requirements",
      "Clean, organized PDF package for submission",
      "Drawing index and sheet list included",
      "Electronic and print-ready format",
    ],
  },
  {
    number: "05",
    icon: Clock,
    title: "Permit Support",
    subtitle: "Ongoing — We're in your corner",
    description:
      "Your relationship with us doesn't end at delivery. If the city or municipality requests revisions, clarifications, or additional information, we handle those quickly and at no extra cost for minor adjustments. We want your permit approved as much as you do.",
    details: [
      "Minor revision support included",
      "City or inspector queries answered",
      "Resubmission support as needed",
      "Progress check-ins available",
    ],
  },
];

const faqs = [
  {
    q: "How long does the permit drawing process take?",
    a: "Most residential projects are completed in 5–7 business days. Rush turnaround (2–3 days) is available on request for an additional fee.",
  },
  {
    q: "Do I need to be home for measurements?",
    a: "For many projects, existing surveys and simple homeowner-provided measurements are sufficient. We'll let you know upfront if a site visit is necessary.",
  },
  {
    q: "What is a BCIN certification?",
    a: "BCIN stands for Building Code Identification Number. In Ontario, any person who provides design documents for permit applications must hold a BCIN number registered with the Ministry of Municipal Affairs and Housing. All our drawings are signed and sealed by a registered BCIN designer.",
  },
  {
    q: "Will my permit be approved on the first submission?",
    a: "We design our drawings to maximize first-submission approval rates by thoroughly checking against local zoning and OBC standards. In the rare event revisions are requested, we address them quickly.",
  },
  {
    q: "Do you work with contractors as well as homeowners?",
    a: "Yes. We work with both homeowners managing their own projects and professional contractors who need reliable permit drawing support for multiple sites.",
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 bg-charcoal-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-gold/4 blur-3xl rounded-full" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl animate-fade-up">
            <SectionTag>How We Work</SectionTag>
            <h1 className="font-display text-display-lg text-cream-200 font-light leading-tight mb-6">
              From First Call<br />
              <em className="text-gold not-italic">to Approved Permit.</em>
            </h1>
            <p className="font-body text-base text-slate-light leading-relaxed font-light max-w-xl">
              A clear, simple process designed to remove confusion and deliver your permit drawings
              with zero guesswork — in as little as 5 business days.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Steps */}
      <section className="py-section bg-charcoal-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="space-y-2">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimateOnScroll key={step.number} delay={i * 80}>
                  <div className="group border border-white/8 bg-charcoal-800 hover:border-gold/20 transition-all duration-300">
                    <div className="p-10 lg:p-12 grid lg:grid-cols-12 gap-8 items-start">
                      {/* Step number + icon */}
                      <div className="lg:col-span-3">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="font-display text-5xl font-light text-gold/20 group-hover:text-gold/40 transition-colors">
                            {step.number}
                          </span>
                          <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                            <Icon size={18} className="text-gold" />
                          </div>
                        </div>
                        <p className="font-body text-[11px] tracking-[0.15em] uppercase text-gold/60">
                          {step.subtitle}
                        </p>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-9">
                        <h2 className="font-display text-display-sm text-cream-200 font-light mb-4 group-hover:text-gold transition-colors duration-300">
                          {step.title}
                        </h2>
                        <p className="font-body text-sm text-slate-light leading-relaxed mb-6">
                          {step.description}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {step.details.map((detail) => (
                            <div key={detail} className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold mt-1.5" />
                              <span className="font-body text-xs text-slate-warm leading-relaxed">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Visual */}
      <section className="py-section bg-cream-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <SectionTag light>Typical Timeline</SectionTag>
              <SectionHeading light>Your Project, Week by Week</SectionHeading>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="grid grid-cols-5 gap-0 bg-charcoal-900 overflow-hidden">
              {[
                { day: "Day 1", label: "Consultation & Quote", color: "bg-gold/10" },
                { day: "Day 1–2", label: "Info Gathering", color: "bg-gold/15" },
                { day: "Day 2–5", label: "AutoCAD Drafting", color: "bg-gold/20" },
                { day: "Day 5–6", label: "Internal Review", color: "bg-gold/25" },
                { day: "Day 6–7", label: "Delivery", color: "bg-gold/30" },
              ].map((item) => (
                <div key={item.day} className={`${item.color} p-6 lg:p-8 border-r border-charcoal-900 last:border-r-0`}>
                  <p className="font-display text-gold text-lg font-light mb-2">{item.day}</p>
                  <p className="font-body text-xs text-slate-light leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section bg-charcoal-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <AnimateOnScroll>
            <div className="mb-14">
              <SectionTag>Common Questions</SectionTag>
              <SectionHeading>Things People Ask<br />Before Getting Started</SectionHeading>
            </div>
          </AnimateOnScroll>

          <div className="space-y-px">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <div className="bg-charcoal-900 border border-white/5 p-8 hover:border-white/10 transition-all group">
                  <h3 className="font-display text-xl text-cream-200 font-light mb-3 group-hover:text-gold transition-colors">
                    {faq.q}
                  </h3>
                  <p className="font-body text-sm text-slate-warm leading-relaxed">{faq.a}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-charcoal-900 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <AnimateOnScroll>
            <h2 className="font-display text-display-md text-cream-200 font-light mb-4">
              Ready to get started?
            </h2>
            <p className="font-body text-sm text-slate-warm max-w-md mx-auto mb-10 leading-relaxed">
              The whole process begins with one call or message. We'll take it from there.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-charcoal-900 font-body text-xs font-medium tracking-[0.15em] uppercase px-10 py-5 transition-all duration-200 hover:scale-[1.02]"
            >
              Start Your Project
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
