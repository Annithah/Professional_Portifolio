/**
 * All portfolio projects live here. To add one, copy an entry and edit it.
 *
 * category: "mobile" | "web" | "systems"   (drives the filter bar)
 * status:   "Live" | "In development" | "APK testing" | any short label
 * visual:   { type: "image", src, alt }   -> real logo/app icon (put files in public/assets/images/projects/)
 *           { type: "mark", mark: "<id>" } -> custom SVG mark from src/components/ProjectMarks.jsx
 * frame:    "phone" | "browser"            -> device frame drawn around the visual
 * links:    live / github / caseStudy — leave out any that don't exist.
 * visibility: "private" hides the GitHub button and shows a "Private repo" note instead.
 */
export const projects = [
  {
    id: "ordina",
    name: "ORDINA",
    tag: "AI · Mobile Productivity",
    category: "mobile",
    status: "In development",
    featured: true,
    value:
      "Tell ORDINA what you need to do — by text or voice — and it turns it into dated tasks, reminders and a schedule. Nothing is saved until you confirm.",
    stack: ["Expo", "React Native", "Express", "TypeScript", "Prisma", "PostgreSQL", "Gemini"],
    links: { github: "https://github.com/Annithah/ordina" },
    visibility: "public",
    frame: "phone",
    visual: { type: "image", src: "/assets/images/projects/ordina-icon.webp", alt: "ORDINA app logo" },
  },
  {
    id: "harmonyhub",
    name: "HarmonyHub",
    tag: "THE CHOSEN · Ministry Ops",
    category: "web",
    status: "Active",
    featured: true,
    value:
      "A worship ministry platform for THE CHOSEN: public team presence plus an admin workspace for members, attendance, songs, schedules, elections, reports and a grounded AI assistant.",
    stack: ["React", "NestJS", "PostgreSQL", "Prisma", "TypeScript", "PWA"],
    links: { github: "https://github.com/Annithah/HarmonyHub" },
    visibility: "private",
    frame: "browser",
    visual: { type: "mark", mark: "harmonyhub" },
  },
  {
    id: "mat77",
    name: "MAT77 Ltd. Website",
    tag: "Company Site · Admin + API",
    category: "web",
    status: "Active",
    featured: true,
    value:
      "Public website and staff admin for MAT77 Ltd. on one Node.js + PostgreSQL API — inquiries, website content and team access managed from the dashboard.",
    stack: ["React", "Node.js", "PostgreSQL", "TypeScript", "Vite"],
    links: { github: "https://github.com/Annithah/mat77-website" },
    visibility: "private",
    frame: "browser",
    visual: { type: "mark", mark: "mat77" },
  },
  {
    id: "medhub",
    name: "Medhub System",
    tag: "MSRwanda · DevBreak",
    category: "web",
    status: "Active",
    value: "A health management platform built for Rwanda's citizens to streamline patient records and hospital workflows.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    links: { github: "https://github.com/Annithah/DevBreak-MSRwanda" },
    visibility: "public",
    frame: "browser",
    visual: { type: "mark", mark: "medhub" },
  },
  {
    id: "xyshop",
    name: "XY Shop",
    tag: "E-Commerce Platform",
    category: "web",
    status: "Active",
    value: "A full-featured online store for browsing products, managing carts and processing orders end to end.",
    stack: ["JavaScript", "Full-Stack"],
    links: { github: "https://github.com/Annithah/XY--SHOP" },
    visibility: "public",
    frame: "browser",
    visual: { type: "mark", mark: "xyshop" },
  },
  {
    id: "stock",
    name: "Stock Management System",
    tag: "Inventory Control",
    category: "systems",
    status: "Active",
    value: "A PHP-based system for tracking stock levels, purchases and sales in real time across a business.",
    stack: ["PHP", "MySQL"],
    links: { github: "https://github.com/Annithah/StockManagement__PHP" },
    visibility: "public",
    frame: "browser",
    visual: { type: "mark", mark: "stock" },
  },
  {
    id: "voting",
    name: "Voting System",
    tag: "Digital Elections",
    category: "systems",
    status: "Active",
    value: "A Django-powered platform enabling secure, transparent online voting and results tracking.",
    stack: ["Python", "Django"],
    links: { github: "https://github.com/Annithah/VotingSystem_Django" },
    visibility: "public",
    frame: "browser",
    visual: { type: "mark", mark: "voting" },
  },
  {
    id: "employee",
    name: "Employee Management System",
    tag: "HR Operations",
    category: "systems",
    status: "Active",
    value: "A system for managing employee records, roles and day-to-day organizational data.",
    stack: ["Full-Stack"],
    links: { github: "https://github.com/Annithah/Employee_Management_System" },
    visibility: "public",
    frame: "browser",
    visual: { type: "mark", mark: "employee" },
  },
  {
    id: "password",
    name: "Password Generator",
    tag: "Security Utility",
    category: "web",
    status: "Stable",
    value: "A lightweight tool for instantly generating strong, randomized passwords.",
    stack: ["JavaScript"],
    links: { github: "https://github.com/Annithah/PasinNove_Projects" },
    visibility: "public",
    frame: "browser",
    visual: { type: "mark", mark: "password" },
  },
];

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "mobile", label: "Mobile" },
  { id: "web", label: "Web" },
  { id: "systems", label: "Systems" },
];
