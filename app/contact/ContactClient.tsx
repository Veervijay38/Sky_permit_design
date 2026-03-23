"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionTag } from "@/components/ui";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const projectTypes = [
  "Deck Permit Drawings",
  "Basement Renovation Plans",
  "Home Addition Plans",
  "Garage / Accessory Structure",
  "Secondary Suite Permit",
  "Other / Not Sure",
];

export default function ContactClient() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 bg-charcoal-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/4 blur-3xl rounded-full" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl animate-fade-up">
            <SectionTag>Get In Touch</SectionTag>
            <h1 className="font-display text-display-lg text-cream-200 font-light leading-tight mb-6">
              Let&apos;s Talk<br />
              <em className="text-gold not-italic">About Your Project.</em>
            </h1>
            <p className="font-body text-base text-slate-light leading-relaxed font-light">
              Tell us what you&apos;re planning and we&apos;ll provide a free, same-day quote with a clear
              timeline. No pressure, no obligation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-section bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-16">

            {/* Left — Contact Info */}
            <div className="lg:col-span-4 space-y-10">
              <AnimateOnScroll>
                <div>
                  <h2 className="font-display text-2xl text-cream-200 font-light mb-6">
                    Contact Details
                  </h2>
                  <div className="space-y-5">
                    <a href="tel:9057411886" className="flex items-start gap-4 group">
                      <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                        <Phone size={16} className="text-gold" />
                      </div>
                      <div>
                        <p className="font-body text-xs tracking-wider text-gold uppercase mb-1">Phone</p>
                        <p className="font-body text-sm text-cream-200 group-hover:text-gold transition-colors">905-741-1886</p>
                      </div>
                    </a>

                    <a href="mailto:info@skypermitdesigns.com" className="flex items-start gap-4 group">
                      <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                        <Mail size={16} className="text-gold" />
                      </div>
                      <div>
                        <p className="font-body text-xs tracking-wider text-gold uppercase mb-1">Email</p>
                        <p className="font-body text-sm text-cream-200 group-hover:text-gold transition-colors break-all">
                          info@skypermitdesigns.com
                        </p>
                      </div>
                    </a>

                    <a
                      href="https://wa.me/19057411886"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                        <MessageCircle size={16} className="text-gold" />
                      </div>
                      <div>
                        <p className="font-body text-xs tracking-wider text-gold uppercase mb-1">WhatsApp</p>
                        <p className="font-body text-sm text-cream-200 group-hover:text-gold transition-colors">
                          Message us on WhatsApp
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                        <MapPin size={16} className="text-gold" />
                      </div>
                      <div>
                        <p className="font-body text-xs tracking-wider text-gold uppercase mb-1">Location</p>
                        <p className="font-body text-sm text-slate-light">Toronto, Ontario, Canada</p>
                        <p className="font-body text-xs text-slate-warm mt-1">Serving all Ontario municipalities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <div className="divider-gold" />
                <div className="mt-8">
                  <h3 className="font-display text-lg text-cream-200 font-light mb-4">Office Hours</h3>
                  <div className="space-y-2">
                    {[
                      { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
                      { day: "Saturday", hours: "10:00 AM – 3:00 PM" },
                      { day: "Sunday", hours: "Closed" },
                    ].map((item) => (
                      <div key={item.day} className="flex justify-between items-center py-2 border-b border-white/5">
                        <span className="font-body text-xs text-slate-warm">{item.day}</span>
                        <span className="font-body text-xs text-cream-200">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                  <p className="font-body text-xs text-slate-mid mt-4">
                    We typically respond to emails within 2–4 hours during business hours.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={150}>
                <div className="bg-charcoal-800 border border-white/8 p-6">
                  <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-4">What happens next?</h4>
                  <div className="space-y-3">
                    {[
                      "We review your project details",
                      "You receive a quote within the same business day",
                      "We confirm timeline and begin drafting",
                    ].map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="font-display text-gold text-sm flex-shrink-0 mt-0.5">{`0${i + 1}`}</span>
                        <span className="font-body text-xs text-slate-light leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-8">
              <AnimateOnScroll delay={100}>
                <div className="bg-charcoal-800 border border-white/8 p-10 lg:p-14">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                      <CheckCircle2 size={48} className="text-gold mb-6" />
                      <h2 className="font-display text-3xl text-cream-200 font-light mb-3">
                        Message Received!
                      </h2>
                      <p className="font-body text-sm text-slate-warm max-w-sm leading-relaxed">
                        Thank you for reaching out. We&apos;ll review your project details and get back to you
                        with a quote within the same business day.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-display text-2xl text-cream-200 font-light mb-2">
                        Request a Free Quote
                      </h2>
                      <p className="font-body text-sm text-slate-warm mb-10">
                        Fill in the details below and we&apos;ll respond with a clear quote and timeline.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className="font-body text-xs tracking-[0.15em] uppercase text-slate-warm block mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              required
                              value={formState.name}
                              onChange={handleChange}
                              className="w-full bg-charcoal-900 border border-white/10 text-cream-200 font-body text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-slate-mid"
                              placeholder="Your full name"
                            />
                          </div>
                          <div>
                            <label className="font-body text-xs tracking-[0.15em] uppercase text-slate-warm block mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="email"
                              required
                              value={formState.email}
                              onChange={handleChange}
                              className="w-full bg-charcoal-900 border border-white/10 text-cream-200 font-body text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-slate-mid"
                              placeholder="you@email.com"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className="font-body text-xs tracking-[0.15em] uppercase text-slate-warm block mb-2">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formState.phone}
                              onChange={handleChange}
                              className="w-full bg-charcoal-900 border border-white/10 text-cream-200 font-body text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-slate-mid"
                              placeholder="(905) 000-0000"
                            />
                          </div>
                          <div>
                            <label className="font-body text-xs tracking-[0.15em] uppercase text-slate-warm block mb-2">
                              City / Municipality *
                            </label>
                            <input
                              type="text"
                              name="city"
                              required
                              value={formState.city}
                              onChange={handleChange}
                              className="w-full bg-charcoal-900 border border-white/10 text-cream-200 font-body text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-slate-mid"
                              placeholder="e.g. Ajax, Toronto, Pickering"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="font-body text-xs tracking-[0.15em] uppercase text-slate-warm block mb-2">
                            Project Type *
                          </label>
                          <select
                            name="projectType"
                            required
                            value={formState.projectType}
                            onChange={handleChange}
                            className="w-full bg-charcoal-900 border border-white/10 text-cream-200 font-body text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors appearance-none cursor-pointer"
                          >
                            <option value="">Select project type</option>
                            {projectTypes.map((type) => (
                              <option key={type} value={type} className="bg-charcoal-900 text-cream-200">
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="font-body text-xs tracking-[0.15em] uppercase text-slate-warm block mb-2">
                            Project Description
                          </label>
                          <textarea
                            name="message"
                            rows={5}
                            value={formState.message}
                            onChange={handleChange}
                            className="w-full bg-charcoal-900 border border-white/10 text-cream-200 font-body text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors resize-none placeholder:text-slate-mid"
                            placeholder="Tell us about your project — size, scope, any existing drawings you have, your timeline, etc."
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full group flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-charcoal-900 font-body text-xs font-medium tracking-[0.15em] uppercase py-5 transition-all duration-200 hover:scale-[1.01] disabled:opacity-70 disabled:cursor-wait"
                        >
                          {loading ? (
                            <span>Sending...</span>
                          ) : (
                            <>
                              Send Free Quote Request
                              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </button>

                        <p className="font-body text-xs text-slate-mid text-center">
                          We typically respond within 2–4 business hours. No spam, no pressure.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </AnimateOnScroll>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
