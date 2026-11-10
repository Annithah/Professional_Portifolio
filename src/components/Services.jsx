import {
  HiOutlineComputerDesktop,
  HiOutlineDevicePhoneMobile,
  HiOutlineServerStack,
  HiOutlineCircleStack,
  HiOutlineCog6Tooth,
  HiOutlineSparkles,
} from "react-icons/hi2";
import { services } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const serviceIcons = [
  HiOutlineComputerDesktop,
  HiOutlineDevicePhoneMobile,
  HiOutlineSparkles,
  HiOutlineServerStack,
  HiOutlineCircleStack,
  HiOutlineCog6Tooth,
];

export function Marquee() {
  const items = ["Web Development", "Mobile Application", "AI Features", "API Development", "Database Design", "Operations Systems", "Full-Stack Products"];
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden py-2" aria-hidden="true">
      <div className="marquee bg-green py-3.5 -rotate-1 shadow-md">
        <div className="marquee-track flex w-max whitespace-nowrap">
          {loop.map((item, i) => (
            <span key={i} className="flex items-center font-display font-semibold text-white text-lg mx-6">
              {item} <span className="text-gold ml-6">✳</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-cream py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <SectionHeading eyebrow="Services">
            <span className="font-accent italic text-gold">Services</span> I Provide
          </SectionHeading>
          <Reveal>
            <a href="#contact" className="btn-press focus-ring flex items-center gap-3 pl-6 pr-2 py-2 bg-green text-white text-sm font-medium rounded-full hover:bg-greenDeep">
              Let's Talk
              <span className="btn-arrow w-8 h-8 rounded-full bg-gold flex items-center justify-center text-green" aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((s, index) => {
            const Icon = serviceIcons[index] || HiOutlineCog6Tooth;
            return (
              <Reveal key={s.title} delay={(index % 3) * 90}>
                <div className="group glow-card h-full bg-card rounded-2xl p-7 border border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgb(var(--shadow)/0.45)]">
                  <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center mb-6 shadow-sm transition-all duration-300 group-hover:bg-green group-hover:scale-110">
                    <Icon className="w-5 h-5 text-greenFg transition-colors duration-300 group-hover:text-gold" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-ink mb-2">{s.title}</h3>
                  <p className="font-body text-sm text-muted leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
