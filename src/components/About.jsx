import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineTrophy } from "react-icons/hi2";
import { CONTACT, timeline } from "../data/content.js";
import { projects } from "../data/projects.js";
import Reveal from "./Reveal.jsx";
import ProfilePicture from "./ProfilePicture.jsx";
import SectionHeading from "./SectionHeading.jsx";
import Socials from "./Socials.jsx";

const timelineIcons = [HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineTrophy];

function Timeline() {
  return (
    <Reveal as="ol" className="relative mt-2" aria-label="Journey">
      <span className="timeline-line absolute left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-gold via-gold/60 to-white/10" aria-hidden="true" />
      {timeline.map((item, i) => {
        const Icon = timelineIcons[i] || HiOutlineBriefcase;
        return (
          <Reveal as="li" key={item.title} variant="right" delay={200 + i * 160} className="relative pl-14 pb-7 last:pb-0">
            <span className={`timeline-dot absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center ${i === 1 ? "bg-gold text-green" : "bg-white/10 text-gold border border-white/15"}`} aria-hidden="true">
              <Icon className="w-5 h-5" />
            </span>
            <div className="group bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-gold/40 rounded-2xl p-5 transition-colors duration-300">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-gold">{item.when}</span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/10 text-white/75">{item.badge}</span>
              </div>
              <h3 className="font-display font-semibold text-white text-lg leading-snug">{item.title}</h3>
              <p className="text-sm text-white/70 mb-1.5">{item.place}</p>
              <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
            </div>
          </Reveal>
        );
      })}
    </Reveal>
  );
}

export default function About() {
  const featuredCount = projects.filter((p) => p.featured).length;
  return (
    <section id="about" className="on-dark relative bg-green py-20 sm:py-24 overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 grid lg:grid-cols-[0.8fr,1.2fr] gap-14 items-start">
        <Reveal variant="left" className="relative justify-self-center lg:sticky lg:top-28 w-full max-w-[300px] sm:max-w-[360px]">
          <div className="absolute inset-0 -translate-x-3 translate-y-3 bg-gold rounded-[28px]" aria-hidden="true" />
          <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden border-4 border-white/20 shadow-2xl">
            <ProfilePicture variant="portrait" sizes="(min-width: 640px) 360px, 300px" className="transition-transform duration-700 hover:scale-[1.03]" />
          </div>
          <span className="absolute top-4 -left-4 bg-white text-green text-xs font-medium px-4 py-1.5 rounded-full shadow-lg -rotate-6">
            Full-Stack Dev
          </span>
          <span className="absolute bottom-8 -right-4 bg-gold text-green text-xs font-medium px-4 py-1.5 rounded-full shadow-lg rotate-6">
            Expo · NestJS
          </span>
        </Reveal>

        <div className="text-center lg:text-left">
          <SectionHeading eyebrow="About Me" dark>
            Who is <span className="font-accent italic text-gold">Anitha Uwihirwe?</span>
          </SectionHeading>
          <Reveal delay={100}>
            <p className="font-body text-white/75 leading-relaxed max-w-xl mx-auto lg:mx-0 mt-5 mb-8">
              I'm a full-stack developer who turns operational problems into products staff
              and users can trust. Lately that means ORDINA, an AI productivity app for
              Android and iOS; HarmonyHub, a worship ministry platform for THE CHOSEN; and
              the MAT77 Ltd. website — a public site and staff admin on one API. I work in
              React, TypeScript, Expo, NestJS, Node.js, and PostgreSQL, and I keep important
              writes behind confirmation and real roles.
            </p>
          </Reveal>

          <Reveal delay={160} className="grid grid-cols-3 gap-3 sm:gap-6 mb-10 max-w-lg mx-auto lg:mx-0">
            {[
              ["9+", "Projects Shipped"],
              [`${featuredCount}`, "Featured Builds"],
              ["Full", "Stack + Mobile + AI"],
            ].map(([n, label]) => (
              <div key={label} className="rounded-2xl bg-white/[0.06] border border-white/10 px-3 py-4">
                <p className="font-display font-bold text-2xl sm:text-3xl text-gold">{n}</p>
                <p className="text-white/60 text-xs sm:text-sm mt-1 leading-snug">{label}</p>
              </div>
            ))}
          </Reveal>

          <div className="text-left max-w-xl mx-auto lg:mx-0">
            <h3 className="font-display font-semibold text-white text-xl mb-5">My journey</h3>
            <Timeline />
          </div>

          <Reveal delay={120} className="flex items-center gap-5 flex-wrap justify-center lg:justify-start mt-10">
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="btn-press focus-ring flex items-center gap-3 pl-6 pr-2 py-2 bg-white text-green text-sm font-medium rounded-full hover:bg-gold">
              Connect on LinkedIn
              <span className="btn-arrow w-8 h-8 rounded-full bg-green flex items-center justify-center text-white" aria-hidden="true">→</span>
            </a>
            <Socials only={["github", "email"]} buttonClass="bg-white/10 text-white hover:bg-gold hover:text-green" />
            <span className="font-script text-3xl text-gold">Anitha Uwihirwe</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
