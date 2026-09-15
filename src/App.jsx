import { useEffect, useState } from "react";
import {
  HiOutlineComputerDesktop,
  HiOutlineDevicePhoneMobile,
  HiOutlineCpuChip,
  HiOutlineServerStack,
  HiOutlineCircleStack,
  HiOutlineCog6Tooth,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlinePaperAirplane,
} from "react-icons/hi2";
import { FaWhatsapp, FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Medhub System",
    tag: "MSRwanda · DevBreak",
    status: "Active",
    desc: "A health management platform built for Rwanda's citizens to streamline patient records and hospital workflows.",
    stack: ["MERN", "MERN-Stack"],
    link: "https://github.com/Annithah/DevBreak-MSRwanda",
  },
  {
    name: "XY Shop",
    tag: "E-Commerce Platform",
    status: "Active",
    desc: "A full-featured online store for browsing products, managing carts, and processing orders end to end.",
    stack: ["JavaScript", "Full-Stack"],
    link: "https://github.com/Annithah/XY--SHOP",
  },
  {
    name: "Stock Management System",
    tag: "Inventory Control",
    status: "Active",
    desc: "A PHP-based system for tracking stock levels, purchases, and sales in real time across a business.",
    stack: ["PHP", "MySQL"],
    link: "https://github.com/Annithah/StockManagement__PHP",
  },
  {
    name: "Voting System",
    tag: "Digital Elections",
    status: "Active",
    desc: "A Django powered platform enabling secure, transparent online voting and results tracking.",
    stack: ["Python", "Django"],
    link: "https://github.com/Annithah/VotingSystem_Django",
  },
  {
    name: "Employee Management System",
    tag: "HR Operations",
    status: "Active",
    desc: "A system for managing employee records, roles, and day-to-day organizational data.",
    stack: ["Full-Stack"],
    link: "https://github.com/Annithah/Employee_Management_System",
  },
  {
    name: "Password Generator",
    tag: "Security Utility",
    status: "Stable",
    desc: "A lightweight tool for instantly generating strong, randomized passwords.",
    stack: ["JavaScript"],
    link: "https://github.com/Annithah/PasinNove_Projects",
  },
];

const services = [
  { icon: HiOutlineComputerDesktop, title: "Web Development", desc: "Responsive, full-stack web apps built with React, Node.js, and modern tooling." },
  { icon: HiOutlineDevicePhoneMobile, title: "Mobile Application", desc: "Cross-platform mobile apps with clean UI, smooth performance, and real-world usability." },
  { icon: HiOutlineCpuChip, title: "Machine Learning", desc: "Practical ML features from data-driven insights to intelligent automation that strengthens a product." },
  { icon: HiOutlineServerStack, title: "API Development", desc: "Reliable server-side logic and RESTful APIs with Node.js, Express, and Laravel." },
  { icon: HiOutlineCircleStack, title: "Database Design", desc: "Clean, efficient data models in MySQL and MongoDB that scale with the product." },
  { icon: HiOutlineCog6Tooth, title: "System Automation", desc: "Turning manual processes — inventory, HR, elections — into dependable systems." },
];

const tools = ["JS", "PHP", "PY", "React", "Next.js", "Node", "Laravel", "Solidity", "React Native", "Flutter", "SQL", "SQLite", "PostgreSQL", "Mongo", "Git"];

const skills = [
  { label: "Languages", items: ["JavaScript", "PHP", "Python", "HTML5", "CSS3"] },
  { label: "Frontend", items: ["React.js", "Next.js", "React Native", "Flutter", "HTML5", "CSS3", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Express.js", "Laravel", "Solidity"] },
  { label: "Databases", items: ["MongoDB", "MySQL", "SQLite", "PostgreSQL"] },
  { label: "Tools", items: ["Git", "GitHub", "VS Code", "Postman", "Figma", "XAMPP", "npm", "Vite"] },
];

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
];

function Nav({ dark, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-green">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold text-lg text-white">
          Anitha<span className="text-gold">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gold transition-colors focus-ring">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="focus-ring w-10 h-10 rounded-full bg-white/10 text-gold hover:bg-white/20 transition-colors"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? "☀" : "☾"}
          </button>
          <a
            href="#contact"
            className="focus-ring px-6 py-2.5 bg-white text-green text-sm font-medium rounded-full hover:bg-gold hover:text-green transition-colors"
          >
            Contact Me
          </a>
        </div>
        <div className="md:hidden flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="focus-ring w-9 h-9 rounded-full bg-white/10 text-gold"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? "☀" : "☾"}
          </button>
          <button className="text-white focus-ring" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden px-6 pb-5 flex flex-col gap-3 text-sm text-white/85">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="text-gold font-medium">Contact Me</a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="pt-16 sm:pt-20 pb-16 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 grid md:grid-cols-[1.05fr,0.95fr] gap-12 items-center pt-10 text-center md:text-left">
        <div className="animate-rise order-2 md:order-1">
          <span className="inline-block border-2 border-ink text-xs font-medium px-4 py-1.5 rounded-md mb-6 -rotate-2">
            Hello There!
          </span>
          <h1 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.15] mb-5">
            I'm <span className="font-accent italic text-gold">Anitha Uwihirwe,</span>
            <br />
            Full-Stack Developer
            <br />
            Based in Rwanda.
          </h1>
          <p className="font-body text-muted max-w-md mx-auto md:mx-0 text-[15px] leading-relaxed mb-8">
            A software developer passionate about building smart, secure, and impactful
            digital solutions — from inventory systems to digital elections.
          </p>
          <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
            <a href="#projects" className="focus-ring flex items-center gap-3 pl-6 pr-2 py-2 bg-green text-white text-sm font-medium rounded-full hover:bg-greenDeep transition-colors">
              View My Work
              <span className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-green">→</span>
            </a>
            <a href="#contact" className="focus-ring px-7 py-3 border-2 border-ink text-ink text-sm font-medium rounded-full hover:bg-ink hover:text-cream transition-colors">
              Hire Me
            </a>
          </div>
        </div>

        <div className="relative justify-self-center animate-rise order-1 md:order-2">
          <div className="absolute inset-0 translate-x-4 translate-y-4 bg-gold rounded-[40%_60%_55%_45%/45%_45%_55%_55%]"></div>
          <div className="relative w-56 sm:w-72 md:w-80 aspect-[4/5] rounded-[40%_60%_55%_45%/45%_45%_55%_55%] overflow-hidden border-4 border-cream shadow-xl">
            <img src="/photo.jpg" alt="Uwihirwe Anitha" className="w-full h-full object-cover" />
          </div>
          <span className="absolute -bottom-2 left-2 bg-green text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg rotate-[-3deg] hidden xs:block">
            Full-Stack Developer
          </span>
          <span className="absolute top-6 -right-2 bg-surface text-ink text-xs font-medium px-4 py-2 rounded-full shadow-lg rotate-2 hidden sm:block">
            React &amp; Node.js
          </span>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Web Development", "Mobile Application", "Machine Learning", "API Development", "Database Design", "System Automation", "Full-Stack Systems"];
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className="bg-green py-3 -rotate-1 shadow-md">
        <div className="flex whitespace-nowrap animate-marquee">
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

function Services() {
  return (
    <section id="services" className="bg-cream py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-gold font-medium text-sm mb-2">— Services</p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink">
              <span className="font-accent italic text-gold">Services</span> I Provide
            </h2>
          </div>
          <a href="#contact" className="focus-ring flex items-center gap-3 pl-6 pr-2 py-2 bg-green text-white text-sm font-medium rounded-full hover:bg-greenDeep transition-colors">
            Let's Talk
            <span className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-green">→</span>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-card rounded-2xl p-7 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center mb-6 shadow-sm">
                <s.icon className="w-5 h-5 text-greenFg" />
              </div>
              <h3 className="font-display font-semibold text-lg text-ink mb-2">{s.title}</h3>
              <p className="font-body text-sm text-muted leading-relaxed mb-4">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-green py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 grid md:grid-cols-[0.85fr,1.15fr] gap-14 items-center text-center md:text-left">
        <div className="relative justify-self-center">
          <div className="absolute inset-0 -translate-x-3 translate-y-3 bg-gold rounded-full"></div>
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white/20">
            <img src="/photo.jpg" alt="Uwihirwe Anitha" className="w-full h-full object-cover" />
          </div>
          <span className="absolute top-2 -left-6 bg-white text-green text-xs font-medium px-4 py-1.5 rounded-full shadow-lg rotate-[-6deg] hidden sm:block">
            Full-Stack Dev
          </span>
          <span className="absolute bottom-6 -right-8 bg-gold text-green text-xs font-medium px-4 py-1.5 rounded-full shadow-lg rotate-6 hidden sm:block">
            React · Node
          </span>
        </div>

        <div>
          <p className="text-gold font-medium text-sm mb-2">— About Me</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-white mb-5">
            Who is <span className="font-accent italic text-gold">Anitha Uwihirwe?</span>
          </h2>
          <p className="font-body text-white/75 leading-relaxed max-w-xl mb-8">
            I'm a full-stack developer who enjoys turning real operational problems —
            tracking stock, managing staff, running elections — into systems that are
            reliable and easy to use. I work comfortably across the stack, from React
            and Tailwind CSS to Node.js, Laravel, and PHP, backed by MongoDB or MySQL
            depending on what the problem needs.
          </p>

          <div className="flex flex-wrap gap-10 mb-9 justify-center md:justify-start">
            <div>
              <p className="font-display font-bold text-3xl text-gold">6+</p>
              <p className="text-white/60 text-sm mt-1">Projects Completed</p>
            </div>
            <div>
              <p className="font-display font-bold text-3xl text-gold">8+</p>
              <p className="text-white/60 text-sm mt-1">Technologies Covered</p>
            </div>
            <div>
              <p className="font-display font-bold text-3xl text-gold">Full</p>
              <p className="text-white/60 text-sm mt-1">Stack Development</p>
            </div>
          </div>

          <div className="flex items-center gap-6 flex-wrap justify-center md:justify-start">
            <a href="https://github.com/Annithah" target="_blank" rel="noopener noreferrer" className="focus-ring flex items-center gap-3 pl-6 pr-2 py-2 bg-white text-green text-sm font-medium rounded-full hover:bg-gold transition-colors">
              View GitHub
              <span className="w-8 h-8 rounded-full bg-green flex items-center justify-center text-white">→</span>
            </a>
            <span className="font-script text-3xl text-gold">Anitha Uwihirwe</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tools() {
  return (
    <section className="bg-cream py-20 text-center">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <p className="text-gold font-medium text-sm mb-2">— My Toolkit</p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink mb-2">
          <span className="font-accent italic text-gold">Exploring</span> the Tools
        </h2>
        <p className="font-display font-semibold text-2xl text-ink mb-12">Behind My Work</p>

        <div className="flex flex-wrap justify-center gap-6">
          {tools.map((t) => (
            <div key={t} className="w-[4.5rem] h-[4.5rem] rounded-full bg-card flex items-center justify-center font-display font-semibold text-[10px] text-greenFg text-center leading-tight px-1 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-cream py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <p className="text-gold font-medium text-sm mb-2">— Portfolio</p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink mb-12">
          Featured <span className="font-accent italic text-gold">Projects</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group focus-ring block bg-card rounded-2xl p-7 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-muted">{p.tag}</span>
                <span className="text-xs px-3 py-1 rounded-full bg-green/10 text-greenFg font-medium">{p.status}</span>
              </div>
              <h3 className="font-display font-semibold text-lg text-ink mb-2 group-hover:text-gold transition-colors">
                {p.name}
              </h3>
              <p className="font-body text-sm text-muted leading-relaxed mb-5">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs px-3 py-1 rounded-full bg-surface text-muted">{s}</span>
                ))}
              </div>
              <p className="text-sm text-greenFg font-medium">Learn more →</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-cream pb-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <p className="text-gold font-medium text-sm mb-2">— Skill Set</p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink mb-12">
          Tools &amp; <span className="font-accent italic text-gold">Technologies</span>
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div key={group.label} className="bg-card rounded-2xl p-7">
              <p className="text-sm font-semibold text-greenFg mb-4">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="text-sm px-3 py-1.5 rounded-full bg-surface text-ink">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CONTACT_EMAIL = "uwihirweanithah@gmail.com";
const CONTACT_WHATSAPP = "250795130378";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [statusNote, setStatusNote] = useState("");

  function updateField(field) {
    return (event) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };
  }

  const emailSubject = `Portfolio message from ${form.name || "visitor"}`;
  const emailBody = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
  const whatsappHref = `https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent(
    `Hi Anitha, I'm ${form.name} (${form.email}).\n\n${form.message}`
  )}`;
  const formReady = form.name.trim() && form.email.trim() && form.message.trim();

  function handleEmailSubmit() {
    setStatusNote("Gmail opened in a new tab with your message. Click Send in that tab and I will receive it.");
  }

  return (
    <section id="contact" className="bg-cream pb-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="bg-green rounded-[32px] p-10 sm:p-16">
          <div className="text-center">
            <p className="text-gold font-medium text-sm mb-3">— Get In Touch</p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-white mb-5">
              Let's build something <span className="font-accent italic text-gold">great together</span>
            </h2>
            <p className="font-body text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
              Open to full-stack roles, freelance work, and collaboration on projects
              that need someone who can own both ends of the stack.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto text-sm">
            <a href="mailto:uwihirweanithah@gmail.com" className="focus-ring flex flex-col items-center gap-1 bg-white/10 rounded-2xl px-5 py-5 hover:bg-white/15 transition-colors">
              <HiOutlineEnvelope className="w-5 h-5 text-gold mb-1" />
              <span className="text-white/60 text-xs">Email</span>
              <span className="text-white font-medium break-all">uwihirweanithah@gmail.com</span>
            </a>
            <a href="tel:+250795130378" className="focus-ring flex flex-col items-center gap-1 bg-white/10 rounded-2xl px-5 py-5 hover:bg-white/15 transition-colors">
              <HiOutlinePhone className="w-5 h-5 text-gold mb-1" />
              <span className="text-white/60 text-xs">Phone</span>
              <span className="text-white font-medium">+250 795 130 378</span>
            </a>
            <a href="https://wa.me/250795130378" target="_blank" rel="noopener noreferrer" className="focus-ring flex flex-col items-center gap-1 bg-white/10 rounded-2xl px-5 py-5 hover:bg-white/15 transition-colors">
              <FaWhatsapp className="w-5 h-5 text-gold mb-1" />
              <span className="text-white/60 text-xs">WhatsApp</span>
              <span className="text-white font-medium">+250 795 130 378</span>
            </a>
            <a href="https://github.com/Annithah" target="_blank" rel="noopener noreferrer" className="focus-ring flex flex-col items-center gap-1 bg-white/10 rounded-2xl px-5 py-5 hover:bg-white/15 transition-colors">
              <FaGithub className="w-5 h-5 text-gold mb-1" />
              <span className="text-white/60 text-xs">GitHub</span>
              <span className="text-white font-medium">github.com/Annithah</span>
            </a>
          </div>

          <form
            action="https://mail.google.com/mail/u/0/"
            method="GET"
            target="_blank"
            onSubmit={handleEmailSubmit}
            className="mt-12 max-w-2xl mx-auto text-left"
          >
            <p className="text-center text-white font-display font-semibold text-xl mb-2">Send me a message</p>
            <p className="text-center text-white/60 text-sm mb-6">
              Send Message opens Gmail with your text filled in. Press Send in Gmail and I receive it.
            </p>
            <input type="hidden" name="view" value="cm" />
            <input type="hidden" name="fs" value="1" />
            <input type="hidden" name="tf" value="1" />
            <input type="hidden" name="to" value={CONTACT_EMAIL} />
            <input type="hidden" name="su" value={emailSubject} />
            <input type="hidden" name="body" value={emailBody} />
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <label className="block">
                <span className="sr-only">Name</span>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={updateField("name")}
                  placeholder="Your name"
                  autoComplete="name"
                  className="w-full bg-white/10 border border-white/15 text-white placeholder:text-white/40 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-gold"
                />
              </label>
              <label className="block">
                <span className="sr-only">Email</span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={updateField("email")}
                  placeholder="Your email"
                  autoComplete="email"
                  className="w-full bg-white/10 border border-white/15 text-white placeholder:text-white/40 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-gold"
                />
              </label>
            </div>
            <label className="block mb-5">
              <span className="sr-only">Message</span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={updateField("message")}
                placeholder="Write your message..."
                className="w-full bg-white/10 border border-white/15 text-white placeholder:text-white/40 rounded-2xl px-5 py-3.5 resize-y min-h-[140px] focus:outline-none focus:border-gold"
              />
            </label>
            <div className="flex flex-col items-center gap-3">
              <button
                type="submit"
                className="focus-ring flex items-center gap-3 pl-6 pr-2 py-2 bg-white text-green text-sm font-medium rounded-full hover:bg-gold transition-colors"
              >
                Send Message
                <span className="w-8 h-8 rounded-full bg-green flex items-center justify-center text-white">
                  <HiOutlinePaperAirplane className="w-4 h-4" />
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
                className="focus-ring inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm hover:bg-white/15"
              >
                <FaWhatsapp className="w-4 h-4 text-gold" />
                Or send with WhatsApp
              </a>
              {statusNote && (
                <p className="text-sm text-gold text-center max-w-md">{statusNote}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-cream pb-8">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-10 border-t border-line">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center md:items-start text-center md:text-left">
          <div>
            <p className="font-display font-semibold text-xl text-ink mb-2">
              Anitha<span className="text-gold">.</span>
            </p>
            <p className="text-sm text-muted max-w-xs">
              Full-stack developer building smart, secure, and impactful digital solutions.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-gold transition-colors focus-ring">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="hover:text-gold transition-colors focus-ring">Contact</a>
          </nav>
          <div className="flex items-center gap-3 text-muted">
            <a href="mailto:uwihirweanithah@gmail.com" className="focus-ring w-10 h-10 rounded-full bg-card flex items-center justify-center hover:text-gold hover:bg-surface transition-colors" aria-label="Email">
              <HiOutlineEnvelope className="w-4 h-4" />
            </a>
            <a href="https://github.com/Annithah" target="_blank" rel="noopener noreferrer" className="focus-ring w-10 h-10 rounded-full bg-card flex items-center justify-center hover:text-gold hover:bg-surface transition-colors" aria-label="GitHub">
              <FaGithub className="w-4 h-4" />
            </a>
            <a href="tel:+250795130378" className="focus-ring w-10 h-10 rounded-full bg-card flex items-center justify-center hover:text-gold hover:bg-surface transition-colors" aria-label="Call">
              <HiOutlinePhone className="w-4 h-4" />
            </a>
            <a href="https://wa.me/250795130378" target="_blank" rel="noopener noreferrer" className="focus-ring w-10 h-10 rounded-full bg-card flex items-center justify-center hover:text-gold hover:bg-surface transition-colors" aria-label="WhatsApp">
              <FaWhatsapp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [dark, setDark] = useState(() =>
    typeof document !== "undefined" && document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="bg-cream min-h-screen text-ink font-body selection:bg-gold selection:text-ink overflow-x-hidden">
      <Nav dark={dark} onToggleTheme={() => setDark((d) => !d)} />
      <main className="pt-16">
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Tools />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
