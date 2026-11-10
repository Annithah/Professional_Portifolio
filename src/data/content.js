export { projects } from "./projects.js";

export const services = [
  { title: "Web Development", desc: "Responsive, full-stack web apps with React, Node.js, and admin workspaces that clients can actually run." },
  { title: "Mobile Application", desc: "Cross-platform apps with Expo and React Native — clean UI, real APIs, and features people use every day." },
  { title: "AI Features", desc: "Practical AI in products: natural-language task planning, grounded assistants, and confirm-before-save workflows." },
  { title: "API Development", desc: "Reliable server-side logic and REST APIs with Node.js, Express, NestJS, and Laravel." },
  { title: "Database Design", desc: "Clear data models in PostgreSQL, MySQL, SQLite, and MongoDB that stay maintainable as a product grows." },
  { title: "Operations Systems", desc: "Turning ministry, inventory, HR, and election workflows into dependable software instead of spreadsheets." },
];

/**
 * Skill groups. `icon` is a key from src/components/TechIcon.jsx.
 * `color` is the brand tint shown on hover (null = use the site's ink colour).
 */
export const skillGroups = [
  {
    label: "Frontend",
    items: [
      { name: "HTML5", icon: "html", color: "#E34F26" },
      { name: "CSS3", icon: "css", color: "#1572B6" },
      { name: "JavaScript", icon: "js", color: "#E8B500" },
      { name: "TypeScript", icon: "ts", color: "#3178C6" },
      { name: "React", icon: "react", color: "#149ECA" },
      { name: "Next.js", icon: "next", color: null },
      { name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", icon: "node", color: "#5FA04E" },
      { name: "Express", icon: "express", color: null },
      { name: "NestJS", icon: "nest", color: "#E0234E" },
      { name: "Laravel", icon: "laravel", color: "#FF2D20" },
      { name: "PHP", icon: "php", color: "#777BB4" },
      { name: "Django", icon: "django", color: "#44B78B" },
      { name: "Prisma", icon: "prisma", color: null },
    ],
  },
  {
    label: "Mobile",
    items: [
      { name: "React Native", icon: "react", color: "#149ECA" },
      { name: "Expo", icon: "expo", color: null },
      { name: "Flutter", icon: "flutter", color: "#02569B" },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "PostgreSQL", icon: "postgres", color: "#4169E1" },
      { name: "MySQL", icon: "mysql", color: "#4479A1" },
      { name: "MongoDB", icon: "mongo", color: "#47A248" },
      { name: "SQLite", icon: "sqlite", color: "#0F80CC" },
    ],
  },
  {
    label: "Data / AI",
    items: [
      { name: "Python", icon: "python", color: "#3776AB" },
      { name: "Gemini", icon: "gemini", color: "#8E75B2" },
      { name: "Grounded assistants", icon: "sparkles", color: "#E09B2D" },
      { name: "Voice → task", icon: "mic", color: "#E09B2D" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git", icon: "git", color: "#F05032" },
      { name: "GitHub", icon: "github", color: null },
      { name: "VS Code", icon: "vscode", color: "#007ACC" },
      { name: "Postman", icon: "postman", color: "#FF6C37" },
      { name: "Figma", icon: "figma", color: "#F24E1E" },
      { name: "npm", icon: "npm", color: "#CB3837" },
      { name: "Vite", icon: "vite", color: "#646CFF" },
    ],
  },
];

/** Journey timeline (About section). Newest first. */
export const timeline = [
  {
    when: "Jan 2027",
    badge: "Upcoming",
    title: "Bachelor's in Data Science",
    place: "Starting my degree",
    desc: "Adding data science to my engineering work, so the products I build can get smarter with data and AI.",
  },
  {
    when: "Now",
    badge: "Current role",
    title: "Junior Software Developer",
    place: "Enoveta · based at Norrsken",
    desc: "Building and shipping software as part of the Enoveta team.",
  },
  {
    when: "Hackathon",
    badge: "Team pitch",
    title: "Futuremakers Hackathon",
    place: "Westerwelle Startup Haus Kigali",
    desc: "Presented our solution on stage together with my team.",
  },
];

export const roles = ["Full-Stack Developer", "Mobile Apps", "AI Features", "APIs & Admin Systems"];

export const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

export const CONTACT = {
  email: "uwihirweanithah@gmail.com",
  phone: "+250 795 130 378",
  phoneHref: "tel:+250795130378",
  whatsapp: "https://wa.me/250795130378",
  whatsappNumber: "250795130378",
  github: "https://github.com/Annithah",
  linkedin: "https://www.linkedin.com/in/uwihirwe-anitha-06191043b/",
  // Put your CV PDF in public/ (e.g. public/Uwihirwe-Anitha-CV.pdf) and set the path here
  // to show the "Download CV" button in the hero.
  cv: null,
};
