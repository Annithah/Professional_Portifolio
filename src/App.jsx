import { lazy, Suspense, useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Services, { Marquee } from "./components/Services.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

// Below-the-fold / on-demand code is split out so the first paint ships less JavaScript.
const Skills = lazy(() => import("./components/Skills.jsx"));
const Assistant = lazy(() => import("./components/Assistant.jsx"));

/**
 * Renders `fallback` on the server and during hydration, then the lazy children once mounted.
 * (Lazy components can't be rendered by renderToString, so they are client-only.)
 */
function Deferred({ fallback = null, children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? <Suspense fallback={fallback}>{children}</Suspense> : fallback;
}

/** After a lazy section mounts, honour a deep link like /#skills. */
function useHashScroll() {
  useEffect(() => {
    const { hash } = window.location;
    if (!hash || hash === "#top") return;
    let tries = 0;
    const id = setInterval(() => {
      const el = document.querySelector(hash);
      if (el || ++tries > 40) {
        clearInterval(id);
        el?.scrollIntoView();
      }
    }, 100);
    return () => clearInterval(id);
  }, []);
}

export default function App() {
  // Starts "light" so the server-rendered HTML and first client render match; the real theme
  // (already applied to <html> by the inline script in index.html) is read right after mount.
  const [dark, setDark] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
    setDark(next);
  };

  const openAssistant = () => setAssistantOpen(true);
  useHashScroll();

  return (
    <div className="bg-cream min-h-screen text-ink font-body overflow-x-hidden">
      <a href="#main" className="skip-link focus-ring px-4 py-2 rounded-full bg-gold text-green text-sm font-semibold">
        Skip to content
      </a>
      <Nav dark={dark} onToggleTheme={toggleTheme} onOpenAssistant={openAssistant} />
      <main id="main" tabIndex={-1} className="pt-16 outline-none">
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Projects onOpenAssistant={openAssistant} />
        <Deferred fallback={<section id="skills" className="min-h-[60rem] bg-cream" aria-busy="true" />}>
          <Skills />
        </Deferred>
        <Contact />
      </main>
      <Footer />
      <Deferred>
        <Assistant open={assistantOpen} onOpen={openAssistant} onClose={() => setAssistantOpen(false)} />
      </Deferred>
    </div>
  );
}
