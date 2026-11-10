import { useLayoutEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowTopRightOnSquare, HiOutlineLockClosed, HiOutlineDocumentText, HiOutlineSparkles } from "react-icons/hi2";
import { projectFilters, projects } from "../data/projects.js";
import { prefersReducedMotion } from "../hooks.js";
import ProjectMark from "./ProjectMarks.jsx";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const statusStyles = {
  Live: "bg-white text-green",
  "In development": "bg-gold text-green",
  "APK testing": "bg-gold/90 text-green",
};

function Logo({ p, size }) {
  if (p.visual?.type === "image") {
    return (
      <img
        src={p.visual.src}
        alt={p.visual.alt || `${p.name} logo`}
        width="96"
        height="96"
        loading="lazy"
        decoding="async"
        className={`${size} rounded-[22%] object-cover shadow-md`}
      />
    );
  }
  return <ProjectMark mark={p.visual?.mark} className={`${size} block drop-shadow-md`} />;
}

function PhoneFrame({ p }) {
  return (
    <div className="relative w-[7.5rem] h-[14.5rem] rounded-[1.6rem] bg-[#0d1410] p-[5px] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
      <div className="relative w-full h-full rounded-[1.3rem] bg-cream overflow-hidden flex flex-col items-center justify-center gap-2.5 px-3">
        <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-3 rounded-full bg-[#0d1410]" aria-hidden="true" />
        <Logo p={p} size="w-14 h-14" />
        <span className="font-display font-semibold text-[13px] text-ink tracking-wide">{p.name}</span>
        <span className="w-14 h-1.5 rounded-full bg-line" aria-hidden="true" />
        <span className="w-10 h-1.5 rounded-full bg-line" aria-hidden="true" />
        <span className="absolute bottom-1.5 w-10 h-1 rounded-full bg-line" aria-hidden="true" />
      </div>
    </div>
  );
}

function BrowserFrame({ p }) {
  return (
    <div className="w-[82%] max-w-[17rem] rounded-xl bg-cream shadow-[0_20px_40px_-14px_rgba(0,0,0,0.6)] overflow-hidden ring-1 ring-white/10">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-card border-b border-line" aria-hidden="true">
        <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
        <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
        <span className="w-2 h-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 h-3 flex-1 rounded-full bg-line" />
      </div>
      <div className="flex items-center gap-3 p-4">
        <Logo p={p} size="w-14 h-14 shrink-0" />
        <div className="flex-1 min-w-0 space-y-1.5" aria-hidden="true">
          <span className="block font-display font-semibold text-[12px] text-ink truncate">{p.name}</span>
          <span className="block h-1.5 w-full rounded-full bg-line" />
          <span className="block h-1.5 w-3/4 rounded-full bg-line" />
          <span className="block h-4 w-14 rounded-full bg-gold/70 mt-2" />
        </div>
      </div>
    </div>
  );
}

function useTilt() {
  const ref = useRef(null);
  const enabled = typeof window !== "undefined" && window.matchMedia?.("(hover: hover) and (pointer: fine)").matches && !prefersReducedMotion();
  if (!enabled) return { ref };
  return {
    ref,
    onMouseMove: (e) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--ry", `${x * 6}deg`);
      el.style.setProperty("--rx", `${-y * 6}deg`);
    },
    onMouseLeave: () => {
      ref.current?.style.setProperty("--ry", "0deg");
      ref.current?.style.setProperty("--rx", "0deg");
    },
  };
}

function ProjectCard({ p, onAsk }) {
  const tilt = useTilt();
  const { live, github, caseStudy } = p.links || {};
  const isPrivate = p.visibility === "private";
  return (
    <article {...tilt} className="glow-card tilt-card group h-full flex flex-col bg-card rounded-3xl border border-line">
      <div className="relative aspect-[16/10] rounded-t-3xl overflow-hidden bg-gradient-to-br from-green via-green to-greenDeep">
        <div className="absolute inset-0 stage-dots" aria-hidden="true" />
        <div className="absolute -bottom-16 -right-10 w-48 h-48 rounded-full bg-gold/25 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-60" aria-hidden="true" />
        <div className="card-visual-inner absolute inset-0 flex items-center justify-center pt-2">
          {p.frame === "phone" ? <PhoneFrame p={p} /> : <BrowserFrame p={p} />}
        </div>
        <span className={`absolute top-3 left-3 inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-full shadow ${statusStyles[p.status] || "bg-white/90 text-green"}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${p.status === "Live" ? "bg-green" : "bg-green/70"}`} aria-hidden="true" />
          {p.status}
        </span>
        {p.featured && (
          <span className="absolute top-3 right-3 text-[11px] font-semibold px-3 py-1 rounded-full bg-black/25 text-white backdrop-blur-sm border border-white/20">
            ★ Featured
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6">
        <p className="text-xs text-muted mb-1.5">{p.tag}</p>
        <h3 className="font-display font-semibold text-xl text-ink mb-2 transition-colors group-hover:text-goldDeep">{p.name}</h3>
        <p className="font-body text-sm text-muted leading-relaxed mb-5">{p.value}</p>
        {p.stack.length > 0 && (
          <ul className="flex flex-wrap gap-1.5 mb-6" aria-label={`${p.name} tech stack`}>
            {p.stack.map((s) => (
              <li key={s} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-surface text-ink border border-line">{s}</li>
            ))}
          </ul>
        )}
        <div className="mt-auto flex flex-wrap items-center gap-2">
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className="btn-press focus-ring inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-green text-white text-xs font-medium hover:bg-greenDeep">
              <HiOutlineArrowTopRightOnSquare className="w-3.5 h-3.5" aria-hidden="true" /> Live<span className="sr-only"> site for {p.name}</span>
            </a>
          )}
          {github && !isPrivate && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="btn-press focus-ring inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink text-cream text-xs font-medium hover:bg-green hover:text-white">
              <FaGithub className="w-3.5 h-3.5" aria-hidden="true" /> GitHub<span className="sr-only"> repository for {p.name}</span>
            </a>
          )}
          {caseStudy && (
            <a href={caseStudy} className="btn-press focus-ring inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-line text-ink text-xs font-medium hover:border-gold">
              <HiOutlineDocumentText className="w-3.5 h-3.5" aria-hidden="true" /> Case study
            </a>
          )}
          {isPrivate && (
            <>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-surface border border-line text-muted text-xs">
                <HiOutlineLockClosed className="w-3.5 h-3.5" aria-hidden="true" /> Private repo
              </span>
              <button type="button" onClick={() => onAsk?.()} className="btn-press focus-ring inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-line text-ink text-xs font-medium hover:border-gold">
                <HiOutlineSparkles className="w-3.5 h-3.5 text-goldDeep" aria-hidden="true" /> Ask about it
              </button>
            </>
          )}
        </div>
      </div>
    </article>
  );
}

function FilterBar({ value, onChange }) {
  const wrap = useRef(null);
  const [pill, setPill] = useState({ left: 0, width: 0 });
  useLayoutEffect(() => {
    const measure = () => {
      const btn = wrap.current?.querySelector(`[data-filter="${value}"]`);
      if (btn) setPill({ left: btn.offsetLeft, width: btn.offsetWidth });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [value]);

  return (
    <div ref={wrap} role="group" aria-label="Filter projects" className="relative inline-flex flex-wrap gap-1 p-1 rounded-full bg-card border border-line">
      <span
        className="absolute top-1 bottom-1 rounded-full bg-green shadow transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ left: pill.left, width: pill.width }}
        aria-hidden="true"
      />
      {projectFilters.map((f) => {
        const count = f.id === "all" ? projects.length : projects.filter((p) => p.category === f.id).length;
        const on = value === f.id;
        return (
          <button
            key={f.id}
            type="button"
            data-filter={f.id}
            aria-pressed={on}
            onClick={() => onChange(f.id)}
            className={`focus-ring relative z-10 px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${on ? "text-white" : "text-muted hover:text-ink"}`}
          >
            {f.label}
            <span className={`ml-1.5 text-[11px] ${on ? "text-gold" : "text-muted"}`}>{count}</span>
          </button>
        );
      })}
    </div>
  );
}

export default function Projects({ onOpenAssistant }) {
  const [filter, setFilter] = useState("all");
  const list = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="bg-cream py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <SectionHeading
            eyebrow="Portfolio"
            intro="Recent systems first: AI mobile products, a ministry operations platform, and a company website with a live staff admin. Private repositories are client work — the architecture is available to discuss."
          >
            Featured <span className="font-accent italic text-gold">Projects</span>
          </SectionHeading>
          <Reveal delay={120}>
            <FilterBar value={filter} onChange={setFilter} />
          </Reveal>
        </div>

        <p className="sr-only" aria-live="polite">{`Showing ${list.length} projects`}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p, i) => (
            <Reveal key={`${filter}-${p.id}`} delay={(i % 3) * 110} className="h-full">
              <ProjectCard p={p} onAsk={onOpenAssistant} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
