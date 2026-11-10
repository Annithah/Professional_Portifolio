import { useReveal } from "../hooks.js";

/** Fades/slides children up when they scroll into view. `delay` is in ms (for staggering). */
export default function Reveal({ as: Tag = "div", delay = 0, variant = "up", className = "", style, children, ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${visible ? "is-visible" : ""} ${className}`}
      style={{ ...style, "--reveal-delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
