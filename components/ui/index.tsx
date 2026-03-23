import clsx from "clsx";

// SectionTag — small label above headings
export function SectionTag({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className={clsx("h-px w-8", light ? "bg-gold/60" : "bg-gold")} />
      <span className={clsx(
        "font-body text-[11px] tracking-[0.25em] uppercase font-medium",
        light ? "text-gold/80" : "text-gold"
      )}>
        {children}
      </span>
    </div>
  );
}

// SectionHeading — main section title
export function SectionHeading({
  children,
  className = "",
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <h2 className={clsx(
      "font-display font-light leading-tight",
      "text-display-md",
      light ? "text-charcoal-900" : "text-cream-200",
      className
    )}>
      {children}
    </h2>
  );
}

// Button variants
interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "primary" | "outline" | "ghost";
  children: React.ReactNode;
  className?: string;
}

export function Button({ href, variant = "primary", children, className = "", ...props }: ButtonProps) {
  const base = "inline-flex items-center gap-2 font-body text-xs font-medium tracking-[0.15em] uppercase transition-all duration-200 px-8 py-4";
  const variants = {
    primary: "bg-gold hover:bg-gold-light text-charcoal-900 hover:scale-[1.02]",
    outline: "border border-gold text-gold hover:bg-gold hover:text-charcoal-900",
    ghost: "text-cream-200 hover:text-gold border border-white/20 hover:border-gold",
  };

  return (
    <a href={href} className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}

// Stat card
export function StatCard({
  value,
  label,
  light = false,
}: {
  value: string;
  label: string;
  light?: boolean;
}) {
  return (
    <div className={clsx("border-l-2 border-gold pl-5 py-1", light ? "" : "")}>
      <p className={clsx("font-display text-3xl font-light", light ? "text-charcoal-900" : "text-cream-200")}>
        {value}
      </p>
      <p className={clsx("font-body text-xs tracking-wider mt-1", light ? "text-slate-mid" : "text-slate-warm")}>
        {label}
      </p>
    </div>
  );
}

// Feature check item
export function CheckItem({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center mt-0.5">
        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
      </div>
      <span className={clsx("font-body text-sm leading-relaxed", light ? "text-charcoal-700" : "text-slate-light")}>
        {children}
      </span>
    </div>
  );
}
