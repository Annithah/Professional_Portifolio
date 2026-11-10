import { skillGroups } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import TechIcon from "./TechIcon.jsx";

function LogoMarquee() {
  // unique brand logos only (no generic icons), duplicated for a seamless loop
  const seen = new Set();
  const logos = skillGroups
    .flatMap((g) => g.items)
    .filter((i) => !["sparkles", "mic"].includes(i.icon) && !seen.has(i.icon) && seen.add(i.icon));
  const loop = [...logos, ...logos];
  return (
    <div className="marquee marquee-fade overflow-hidden mt-14" aria-hidden="true">
      <div className="marquee-track flex w-max items-center gap-10 sm:gap-14 py-2">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-2.5 text-muted">
            <TechIcon name={t.icon} className="w-7 h-7" />
            <span className="font-display text-sm font-medium whitespace-nowrap">{t.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-cream py-20 sm:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <SectionHeading eyebrow="My Toolkit" center intro="The tools behind my work, grouped by where they sit in a product.">
          <span className="font-accent italic text-gold">Exploring</span> the Tools Behind My Work
        </SectionHeading>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-12">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.label} delay={(gi % 3) * 90} className="h-full">
              <div className="h-full bg-card rounded-3xl p-6 border border-line">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-display font-semibold text-greenFg">{group.label}</h3>
                  <span className="text-xs text-muted">{group.items.length}</span>
                </div>
                <ul className="grid grid-cols-4 gap-2.5">
                  {group.items.map((item, i) => (
                    <Reveal as="li" key={item.name} variant="pop" delay={(gi % 3) * 90 + 120 + i * 55}>
                      <span
                        tabIndex={0}
                        role="img"
                        className="tech-tile focus-ring relative flex flex-col items-center justify-center gap-1.5 aspect-square rounded-2xl bg-surface border border-line text-ink cursor-default"
                        style={item.color ? { "--brand": item.color } : undefined}
                        aria-label={item.name}
                      >
                        <TechIcon name={item.icon} className="w-6 h-6 sm:w-7 sm:h-7" />
                        <span className="tip absolute -top-9 left-1/2 whitespace-nowrap text-[11px] font-medium px-2.5 py-1 rounded-md bg-green text-white shadow-lg z-10" aria-hidden="true">
                          {item.name}
                        </span>
                      </span>
                    </Reveal>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-muted leading-relaxed">{group.items.map((i) => i.name).join(" · ")}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <LogoMarquee />
    </section>
  );
}
