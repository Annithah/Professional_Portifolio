import Reveal from "./Reveal.jsx";

/** Consistent eyebrow + H2 used by every section. */
export default function SectionHeading({ eyebrow, children, intro, dark = false, center = false, className = "" }) {
  return (
    <Reveal className={`${center ? "text-center mx-auto" : ""} ${className}`}>
      <p className={`inline-flex items-center gap-2 text-gold font-medium text-sm mb-3 ${center ? "justify-center" : ""}`}>
        <span className="h-px w-6 bg-gold" aria-hidden="true" /> {eyebrow}
      </p>
      <h2 className={`font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight ${dark ? "text-white" : "text-ink"}`}>
        {children}
      </h2>
      {intro && (
        <p className={`font-body max-w-2xl mt-4 leading-relaxed ${center ? "mx-auto" : ""} ${dark ? "text-white/70" : "text-muted"}`}>{intro}</p>
      )}
    </Reveal>
  );
}
