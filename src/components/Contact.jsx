import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlinePaperAirplane } from "react-icons/hi2";
import { CONTACT } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const channels = [
  { label: "Email", value: <>{CONTACT.email.split("@")[0]}<wbr />@{CONTACT.email.split("@")[1]}</>, href: `mailto:${CONTACT.email}`, Icon: HiOutlineEnvelope, external: false },
  { label: "LinkedIn", value: "Uwihirwe Anitha", href: CONTACT.linkedin, Icon: FaLinkedinIn, external: true },
  { label: "WhatsApp", value: CONTACT.phone, href: CONTACT.whatsapp, Icon: FaWhatsapp, external: true },
  { label: "Phone", value: CONTACT.phone, href: CONTACT.phoneHref, Icon: HiOutlinePhone, external: false },
  { label: "GitHub", value: "github.com/Annithah", href: CONTACT.github, Icon: FaGithub, external: true },
];

const field =
  "w-full bg-white/10 border border-white/15 text-white placeholder:text-white/55 rounded-2xl px-5 py-3.5 transition-colors focus:outline-none focus:border-gold focus:bg-white/[0.14]";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [statusNote, setStatusNote] = useState("");

  const updateField = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));

  const emailSubject = `Portfolio message from ${form.name || "visitor"}`;
  const emailBody = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
  const whatsappHref = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    `Hi Anitha, I'm ${form.name} (${form.email}).\n\n${form.message}`
  )}`;
  const formReady = form.name.trim() && form.email.trim() && form.message.trim();

  return (
    <section id="contact" className="bg-cream pb-20 sm:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <Reveal>
          <div className="on-dark relative overflow-hidden bg-green rounded-[32px] px-5 py-12 sm:p-14 lg:p-16">
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gold/15 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-white/5 blur-3xl" aria-hidden="true" />

            <div className="relative">
              <SectionHeading
                eyebrow="Get In Touch"
                dark
                center
                intro="Open to full-stack roles, freelance work, and collaboration — especially products that need a web app, an admin side, a mobile client, or practical AI."
              >
                Let's build something <span className="font-accent italic text-gold">great together</span>
              </SectionHeading>

              <ul className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto text-sm mt-10">
                {channels.map(({ label, value, href, Icon, external }, i) => (
                  <Reveal as="li" key={label} delay={i * 70} className={i === channels.length - 1 ? "min-[420px]:col-span-2 lg:col-span-1" : ""}>
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group focus-ring h-full flex flex-col items-center text-center gap-1 bg-white/[0.08] border border-white/10 rounded-2xl px-4 py-5 transition-all duration-300 hover:bg-white/[0.14] hover:border-gold/50 hover:-translate-y-1"
                    >
                      <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-1 transition-all duration-300 group-hover:bg-gold group-hover:scale-110">
                        <Icon className="w-5 h-5 text-gold transition-colors group-hover:text-green" aria-hidden="true" />
                      </span>
                      <span className="text-white/65 text-xs">{label}</span>
                      <span className="text-white font-medium [overflow-wrap:anywhere] text-[13px]">{value}</span>
                    </a>
                  </Reveal>
                ))}
              </ul>

              <form
                action="https://mail.google.com/mail/u/0/"
                method="GET"
                target="_blank"
                onSubmit={() => setStatusNote("Gmail opened in a new tab with your message. Click Send in that tab and I will receive it.")}
                className="mt-12 max-w-2xl mx-auto text-left"
              >
                <p className="text-center text-white font-display font-semibold text-xl mb-2">Send me a message</p>
                <p className="text-center text-white/65 text-sm mb-6">
                  Send Message opens Gmail with your text filled in. Press Send in Gmail and I receive it.
                </p>
                <input type="hidden" name="view" value="cm" />
                <input type="hidden" name="fs" value="1" />
                <input type="hidden" name="tf" value="1" />
                <input type="hidden" name="to" value={CONTACT.email} />
                <input type="hidden" name="su" value={emailSubject} />
                <input type="hidden" name="body" value={emailBody} />
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <label className="block">
                    <span className="sr-only">Name</span>
                    <input type="text" required value={form.name} onChange={updateField("name")} placeholder="Your name" autoComplete="name" className={field} />
                  </label>
                  <label className="block">
                    <span className="sr-only">Email</span>
                    <input type="email" required value={form.email} onChange={updateField("email")} placeholder="Your email" autoComplete="email" className={field} />
                  </label>
                </div>
                <label className="block mb-5">
                  <span className="sr-only">Message</span>
                  <textarea required rows={5} value={form.message} onChange={updateField("message")} placeholder="Write your message..." className={`${field} resize-y min-h-[140px]`} />
                </label>
                <div className="flex flex-col items-center gap-3">
                  <button type="submit" className="btn-press focus-ring flex items-center gap-3 pl-6 pr-2 py-2 bg-white text-green text-sm font-medium rounded-full hover:bg-gold">
                    Send Message
                    <span className="btn-arrow w-8 h-8 rounded-full bg-green flex items-center justify-center text-white">
                      <HiOutlinePaperAirplane className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </button>
                  <a
                    href={formReady ? whatsappHref : "#contact"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => {
                      if (!formReady) {
                        event.preventDefault();
                        setStatusNote("Please fill in all fields first.");
                      }
                    }}
                    className="btn-press focus-ring inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm hover:bg-white/15"
                  >
                    <FaWhatsapp className="w-4 h-4 text-gold" aria-hidden="true" />
                    Or send with WhatsApp
                  </a>
                  <p className="text-sm text-gold text-center max-w-md min-h-[1.25rem]" aria-live="polite">{statusNote}</p>
                </div>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
