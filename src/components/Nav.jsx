import { useEffect, useRef, useState } from "react";
import { HiOutlineSun, HiOutlineMoon, HiOutlineBars3, HiOutlineXMark, HiOutlineSparkles } from "react-icons/hi2";
import { navLinks } from "../data/content.js";
import { useActiveSection, useScrolled } from "../hooks.js";
import Socials from "./Socials.jsx";

function ScrollProgress() {
  const bar = useRef(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <div className="absolute left-0 right-0 bottom-0 h-[3px] bg-transparent" aria-hidden="true">
      <div ref={bar} className="h-full origin-left bg-gradient-to-r from-gold via-goldDeep to-gold" style={{ transform: "scaleX(0)" }} />
    </div>
  );
}

const sectionIds = navLinks.map((l) => l.href.slice(1)).concat("contact"); // must be in page order

export default function Nav({ dark, onToggleTheme, onOpenAssistant }) {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(16);
  const active = useActiveSection(sectionIds);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    // wait a frame so the menu is visible (focusable) before moving focus into it
    const frame = requestAnimationFrame(() => menuRef.current?.querySelector("a")?.focus());
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const ThemeIcon = dark ? HiOutlineSun : HiOutlineMoon;
  const themeLabel = dark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <header
      className={`on-dark fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        open ? "bg-green shadow-[0_8px_30px_-12px_rgba(0,0,0,0.45)]" : scrolled ? "bg-green/85 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(0,0,0,0.45)]" : "bg-green"
      }`}
    >
      <div className={`max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`}>
        <a href="#top" className="font-display font-semibold text-lg text-white group">
          Anitha<span className="text-gold inline-block transition-transform duration-300 group-hover:scale-150">.</span>
        </a>

        <nav aria-label="Main" className="hidden md:flex items-center gap-7 text-sm text-white/80">
          {navLinks.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "true" : undefined}
                className={`link-underline focus-ring transition-colors ${isActive ? "text-gold" : "hover:text-white"}`}
              >
                {l.label}
              </a>
            );
          })}
          <button type="button" onClick={onOpenAssistant} className="link-underline focus-ring flex items-center gap-1.5 hover:text-white">
            <HiOutlineSparkles className="w-4 h-4 text-gold" aria-hidden="true" /> Ask Anitha
          </button>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="focus-ring w-10 h-10 rounded-full bg-white/10 text-gold hover:bg-white/20 transition-colors flex items-center justify-center"
            aria-label={themeLabel}
            title={themeLabel}
          >
            <ThemeIcon className="w-5 h-5 transition-transform duration-500 hover:rotate-45" aria-hidden="true" />
          </button>
          <a
            href="#contact"
            aria-current={active === "contact" ? "true" : undefined}
            className="btn-press focus-ring px-6 py-2.5 bg-white text-green text-sm font-medium rounded-full hover:bg-gold"
          >
            Contact Me
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="focus-ring w-10 h-10 rounded-full bg-white/10 text-gold flex items-center justify-center"
            aria-label={themeLabel}
          >
            <ThemeIcon className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            ref={toggleRef}
            type="button"
            className="focus-ring w-10 h-10 rounded-full text-white flex items-center justify-center hover:bg-white/10"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className="relative w-6 h-6">
              <HiOutlineBars3 className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${open ? "opacity-0 rotate-90 scale-50" : ""}`} aria-hidden="true" />
              <HiOutlineXMark className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${open ? "" : "opacity-0 -rotate-90 scale-50"}`} aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden grid duration-300 ease-out ${open ? "transition-[grid-template-rows,opacity] grid-rows-[1fr] opacity-100 visible" : "transition-[grid-template-rows,opacity,visibility] grid-rows-[0fr] opacity-0 invisible"}`}
      >
        <nav aria-label="Mobile" className="overflow-hidden">
          <div className="px-6 pb-6 pt-1 flex flex-col gap-1 text-base text-white/85">
            {navLinks.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`focus-ring py-2.5 border-b border-white/10 transition-[transform,opacity,color] duration-300 ${open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"} ${active === l.href.slice(1) ? "text-gold" : ""}`}
                style={{ transitionDelay: open ? `${60 + i * 45}ms` : "0ms" }}
              >
                {l.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => { setOpen(false); onOpenAssistant(); }}
              className="focus-ring text-left py-2.5 border-b border-white/10 flex items-center gap-2"
            >
              <HiOutlineSparkles className="w-4 h-4 text-gold" aria-hidden="true" /> Ask Anitha
            </button>
            <div className="flex items-center justify-between pt-4">
              <a href="#contact" onClick={() => setOpen(false)} className="btn-press focus-ring px-5 py-2.5 bg-gold text-green text-sm font-semibold rounded-full">
                Contact Me
              </a>
              <Socials buttonClass="bg-white/10 text-white hover:bg-gold hover:text-green" />
            </div>
          </div>
        </nav>
      </div>
      <ScrollProgress />
    </header>
  );
}
