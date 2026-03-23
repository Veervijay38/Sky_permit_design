import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-charcoal-900 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="relative text-center px-6">
        <p className="font-display text-[12rem] leading-none font-light text-gold/10 select-none">
          404
        </p>
        <div className="-mt-8">
          <h1 className="font-display text-4xl text-cream-200 font-light mb-4">Page Not Found</h1>
          <p className="font-body text-sm text-slate-warm max-w-sm mx-auto leading-relaxed mb-10">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-charcoal-900 font-body text-xs font-medium tracking-[0.15em] uppercase px-8 py-4 transition-all duration-200"
          >
            Back to Home
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
