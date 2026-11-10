import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { CONTACT } from "../data/content.js";

export const SOCIALS = [
  { id: "linkedin", label: "LinkedIn", href: CONTACT.linkedin, Icon: FaLinkedinIn, external: true },
  { id: "github", label: "GitHub", href: CONTACT.github, Icon: FaGithub, external: true },
  { id: "email", label: "Email", href: `mailto:${CONTACT.email}`, Icon: HiOutlineEnvelope, external: false },
  { id: "whatsapp", label: "WhatsApp", href: CONTACT.whatsapp, Icon: FaWhatsapp, external: true },
];

/** Row of round social buttons. `only` limits which ones show. */
export default function Socials({ only = ["linkedin", "github", "email"], className = "", buttonClass = "" }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {SOCIALS.filter((s) => only.includes(s.id)).map(({ id, label, href, Icon, external }) => (
        <li key={id}>
          <a
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            aria-label={label}
            title={label}
            className={`social-btn focus-ring w-10 h-10 rounded-full flex items-center justify-center ${buttonClass}`}
          >
            <Icon className="w-4 h-4" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
