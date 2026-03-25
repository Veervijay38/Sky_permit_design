import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionTag, SectionHeading, StatCard, CheckItem } from "@/components/ui";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "About Us | Sky Permit Designs — BCIN-Certified Drafting in Ontario",
  description:
    "Learn about Sky Permit Designs — a professional BCIN-certified architectural drafting firm serving homeowners and contractors across Ontario.",
};

const values = [
  {
    title: "Precision First",
    desc: "Every drawing we produce is reviewed against the Ontario Building Code and your municipality&apos;s requirements before delivery. One missed dimension can delay a project by weeks — we don&apos;t allow that.",
  },
  {
    title: "Clarity & Transparency",
    desc: "No confusing pricing structures. No scope creep surprises. You receive a clear quote before we begin, and we stick to it. Our clients know exactly what they&apos;re getting and when.",
  },
  {
    title: "Fast Without Compromise",
    desc: "Speed matters when your contractor is scheduled and your permit is outstanding. Our 5–7 business day turnaround is standard — not a premium add-on. Rush options are available.",
  },
  {
    title: "Client Partnership",
    desc: "We treat every homeowner like our only client and every contractor like a long-term business partner. Clear communication, responsive support, and a team that genuinely cares about your approval.",
  },
];

const certifications = [
  "BCIN Registered Designer (Ministry of Municipal Affairs & Housing)",
  "Ontario Building Code Act Compliance",
  "AutoCAD Professional Drafting",
  "Serving all Ontario municipalities",
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 bg-charcoal-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/4 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7 animate-fade-up">
              <SectionTag>Who We Are</SectionTag>
              <h1 className="font-display text-display-lg text-cream-200 font-light leading-tight mb-6">
                A Drafting Firm<br />Built Around<br />
                <em className="text-gold not-italic">Your Approval.</em>
              </h1>
            </div>
            <div className="lg:col-span-5 animate-fade-up animate-delay-200">
              <p className="font-body text-base text-slate-light leading-relaxed font-light">
                Sky Permit Designs was founded with one purpose: to help Ontario homeowners and contractors
                navigate the building permit process with professional, accurate, and code-compliant
                drawings that get approved — not revised and resubmitted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Stats */}
      <section className="py-section bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimateOnScroll>
              <SectionTag>Our Mission</SectionTag>
              <SectionHeading className="mb-6">
                Making Permits<br />Less Painful.
              </SectionHeading>
              <div className="space-y-5 text-slate-light font-body text-sm leading-relaxed">
                <p>
                  Residential building permits in Ontario are a necessary step — but the process doesn&apos;t
                  have to be confusing, expensive, or slow. Too many homeowners start a project without
                  understanding what&apos;s required, and end up spending weeks navigating rejections and
                  resubmissions.
                </p>
                <p>
                  We started Sky Permit Designs to change that. Our team consists of BCIN-certified
                  designers who know Ontario&apos;s building code inside and out, and who approach every
                  project with the goal of getting your permit approved on the first attempt.
                </p>
                <p>
                  We serve homeowners planning their dream deck or basement suite, and contractors who
                  need reliable permit drawings delivered quickly across multiple sites.
                  Wherever you are in the GTA, we can help.
                </p>
              </div>

              <div className="mt-10 space-y-3">
                {certifications.map((c) => (
                  <CheckItem key={c}>{c}</CheckItem>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <StatCard value="500+" label="Approved Permits" />
                <StatCard value="BCIN" label="Certified & Registered" />
                <StatCard value="5–7" label="Day Standard Turnaround" />
                <StatCard value="GTA" label="& All Ontario Municipalities" />
              </div>

              <div className="bg-charcoal-900 border border-white/8 p-8">
                <h3 className="font-display text-xl text-cream-200 font-light mb-3">
                  Serving Ontario&apos;s Homeowners & Contractors
                </h3>
                <p className="font-body text-sm text-slate-warm leading-relaxed mb-4">
                  From Ajax to Mississauga, Whitby to Vaughan — we understand the specific requirements
                  of each municipality and tailor every drawing set accordingly.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Ajax", "Toronto", "Pickering", "Whitby", "Oshawa", "Markham", "Mississauga", "Brampton"].map((city) => (
                    <span key={city} className="font-body text-[10px] tracking-wider text-slate-mid border border-white/10 px-3 py-1">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-section bg-cream-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimateOnScroll>
            <div className="mb-14">
              <SectionTag light>How We Operate</SectionTag>
              <SectionHeading light className="max-w-md">
                The Values That Guide<br />Every Drawing
              </SectionHeading>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-px bg-charcoal-900/10">
            {values.map((v, i) => (
              <AnimateOnScroll key={v.title} delay={i * 80}>
                <div className="bg-cream-200 p-10 group hover:bg-cream-100 transition-colors">
                  <div className="w-8 h-px bg-gold mb-6 group-hover:w-16 transition-all duration-300" />
                  <h3 className="font-display text-2xl text-charcoal-900 font-light mb-4">{v.title}</h3>
                  <p className="font-body text-sm text-slate-mid leading-relaxed">{v.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-section bg-charcoal-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <AnimateOnScroll>
            <div className="font-display text-6xl text-gold/10 mb-6 italic font-light">
              "Get it right the first time."
            </div>
            <SectionHeading className="mb-6">Work With a Team<br />That Gets You Approved.</SectionHeading>
            <p className="font-body text-sm text-slate-warm max-w-md mx-auto mb-10 leading-relaxed">
              Ready to start your project? Reach out for a free, no-obligation quote.
              We respond within the same business day.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-charcoal-900 font-body text-xs font-medium tracking-[0.15em] uppercase px-10 py-5 transition-all duration-200 hover:scale-[1.02]"
            >
              Contact Us Today
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
