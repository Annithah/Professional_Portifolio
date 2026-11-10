import { HiOutlineArrowUp } from "react-icons/hi2";
import { CONTACT, navLinks } from "../data/content.js";
import Socials from "./Socials.jsx";

export default function Footer() {
  const year = new Date().getFullYear();
  const toTop = () => {
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
    document.getElementById("top")?.focus({ preventScroll: true });
  };

  return (
    <footer className="on-dark relative bg-greenDeep text-white overflow-hidden">
      <div className="h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" aria-hidden="true" />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[40rem] h-72 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 pt-14 pb-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr,1fr,1fr] text-center md:text-left">
          <div>
            <a href="#top" className="focus-ring font-display font-semibold text-2xl text-white">
              Anitha<span className="text-gold">.</span>
            </a>
            <p className="text-sm text-white/65 max-w-xs mt-3 mx-auto md:mx-0 leading-relaxed">
              Full-stack developer building smart, secure, and impactful digital solutions — web, mobile and practical AI.
            </p>
            <p className="font-script text-2xl text-gold mt-4">Uwihirwe Anitha</p>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Quick links</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-white/75 max-w-[14rem] mx-auto md:mx-0">
              {[...navLinks, { href: "#contact", label: "Contact" }].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-underline focus-ring hover:text-white">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Let's connect</p>
            <Socials
              only={["linkedin", "github", "email", "whatsapp"]}
              className="justify-center md:justify-start"
              buttonClass="bg-white/10 text-white hover:bg-gold hover:text-green"
            />
            <a href={`mailto:${CONTACT.email}`} className="link-underline focus-ring inline-block text-sm text-white/75 hover:text-white mt-4 break-all">
              {CONTACT.email}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {year} Uwihirwe Anitha. All rights reserved.</p>
          <button
            type="button"
            onClick={toTop}
            className="group btn-press focus-ring inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-white/10 text-white hover:bg-gold hover:text-green"
          >
            Back to top
            <span className="w-7 h-7 rounded-full bg-gold text-green flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:bg-green group-hover:text-gold">
              <HiOutlineArrowUp className="w-4 h-4" aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
