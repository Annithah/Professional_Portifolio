import { useEffect, useState } from "react";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { CONTACT, roles } from "../data/content.js";
import { prefersReducedMotion } from "../hooks.js";
import ProfilePicture from "./ProfilePicture.jsx";
import Socials from "./Socials.jsx";

/** Types each role, pauses, deletes, moves on. Static first role for reduced motion. */
function TypedRole() {
  const [text, setText] = useState(roles[0]);
  const [reduced] = useState(prefersReducedMotion);

  useEffect(() => {
    if (reduced) return;
    let i = 0;
    let len = roles[0].length;
    let phase = "delete";
    let timer;
    const tick = () => {
      let delay = 70;
      if (phase === "delete") {
        len -= 1;
        delay = 38;
        if (len === 0) {
          i = (i + 1) % roles.length;
          phase = "type";
          delay = 300;
        }
      } else {
        len += 1;
        if (len === roles[i].length) {
          phase = "delete";
          delay = 2200;
        }
      }
      setText(roles[i].slice(0, len));
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 2400);
    return () => clearTimeout(timer);
  }, [reduced]);

  return (
    <p className="font-display font-semibold text-lg sm:text-xl text-greenFg mb-5 h-8">
      <span className="sr-only">{roles.join(" · ")}</span>
      <span aria-hidden="true" className="caret">{text}</span>
    </p>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-12 sm:pt-16 pb-20 bg-cream overflow-hidden">
      {/* lightweight animated background: CSS only */}
      <div className="absolute inset-0 hero-grid" aria-hidden="true" />
      <div className="hero-blob w-72 h-72 sm:w-96 sm:h-96 bg-gold -top-16 right-[8%]" aria-hidden="true" />
      <div className="hero-blob w-80 h-80 sm:w-[28rem] sm:h-[28rem] bg-green -bottom-40 -left-24" style={{ animationDelay: "-6s", opacity: 0.14 }} aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 grid md:grid-cols-[1.1fr,0.9fr] gap-10 md:gap-12 items-center pt-8 text-center md:text-left">
        <div className="order-2 md:order-1">
          <span className="animate-rise inline-flex items-center gap-2 border-2 border-ink text-xs font-medium px-4 py-1.5 rounded-md mb-6 -rotate-2">
            <span className="relative flex w-2 h-2" aria-hidden="true">
              <span className="absolute inline-flex w-full h-full rounded-full bg-gold opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-gold" />
            </span>
            Hello There!
          </span>
          <h1 className="animate-rise font-display font-semibold text-[2rem] leading-[1.12] sm:text-5xl lg:text-[3.5rem] text-ink mb-4 tracking-tight" style={{ animationDelay: "80ms" }}>
            I'm <span className="font-accent italic text-gold">Anitha Uwihirwe,</span>
            <br />
            Full-Stack Developer
            <br />
            <span className="text-muted font-medium text-[0.8em]">Based in Rwanda.</span>
          </h1>
          <div className="animate-rise" style={{ animationDelay: "160ms" }}>
            <TypedRole />
          </div>
          <p className="animate-rise font-body text-muted max-w-md mx-auto md:mx-0 text-[15px] leading-relaxed mb-8" style={{ animationDelay: "220ms" }}>
            I build full-stack products people actually run — AI mobile apps, company websites
            with staff admin, and operations platforms for teams. Ask the assistant on this
            page if you want the deeper story.
          </p>
          <div className="animate-rise flex flex-wrap items-center gap-3 sm:gap-4 justify-center md:justify-start mb-8" style={{ animationDelay: "300ms" }}>
            <a href="#projects" className="btn-press focus-ring flex items-center gap-3 pl-6 pr-2 py-2 bg-green text-white text-sm font-medium rounded-full hover:bg-greenDeep">
              View Projects
              <span className="btn-arrow w-8 h-8 rounded-full bg-gold flex items-center justify-center text-green" aria-hidden="true">→</span>
            </a>
            {CONTACT.cv && (
              <a href={CONTACT.cv} download className="btn-press focus-ring flex items-center gap-2 px-6 py-3 bg-gold text-green text-sm font-semibold rounded-full hover:bg-goldDeep">
                <HiOutlineArrowDownTray className="w-4 h-4" aria-hidden="true" /> Download CV
              </a>
            )}
            <a href="#contact" className="btn-press focus-ring px-7 py-3 border-2 border-ink text-ink text-sm font-medium rounded-full hover:bg-ink hover:text-cream">
              Contact Me
            </a>
          </div>
          <div className="animate-rise flex items-center gap-4 justify-center md:justify-start" style={{ animationDelay: "380ms" }}>
            <span className="text-xs uppercase tracking-[0.2em] text-muted">Find me</span>
            <span className="h-px w-8 bg-line" aria-hidden="true" />
            <Socials buttonClass="bg-card border border-line text-ink hover:bg-green hover:text-gold hover:border-green" />
          </div>
        </div>

        <div className="relative justify-self-center order-1 md:order-2 animate-rise">
          {/* gold offset shape, as before */}
          <div className="absolute inset-0 translate-x-4 translate-y-4 bg-gold rounded-[42%_58%_55%_45%/45%_45%_55%_55%]" aria-hidden="true" />
          {/* slow animated gradient ring */}
          <div className="relative ring-spin p-[5px] rounded-[42%_58%_55%_45%/45%_45%_55%_55%] shadow-xl">
            <div className="w-48 sm:w-60 md:w-[18.75rem] lg:w-80 aspect-square rounded-[42%_58%_55%_45%/45%_45%_55%_55%] overflow-hidden bg-card border-4 border-cream">
              <ProfilePicture variant="square" eager sizes="(min-width: 1024px) 320px, (min-width: 768px) 300px, (min-width: 640px) 240px, 192px" />
            </div>
          </div>
          <span className="absolute -bottom-3 left-0 sm:left-2 bg-green text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg -rotate-3">
            Full-Stack Developer
          </span>
          <span className="absolute top-6 -right-3 bg-surface text-ink text-xs font-medium px-4 py-2 rounded-full shadow-lg rotate-2 hidden sm:block">
            Expo · NestJS · AI
          </span>
        </div>
      </div>
    </section>
  );
}
