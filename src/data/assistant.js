import { CONTACT } from "./content.js";
import { projects } from "./projects.js";

const featuredNames = projects.filter((p) => p.featured).map((p) => p.name).join(", ");

const TOPICS = [
  {
    id: "who",
    score: ["who are you", "who is anitha", "who is she", "about you", "about her", "about anitha", "tell me about", "introduce", "introduction", "bio", "background", "deeply", "who am i", "who i am", "profile", "yourself"],
    keywords: ["who", "anitha", "uwihirwe", "about", "story", "background", "introduce"],
    answer: `Uwihirwe Anitha is a full-stack developer based in Rwanda. She does not treat software as a demo — she turns messy, real operations into systems people can actually run.

She is strongest at owning both ends of a product: a public-facing interface, a staff or admin workspace, and a solid API and database behind them. Recent work shows that range clearly: ORDINA (an AI productivity app for Android and iOS), HarmonyHub (a worship ministry platform for THE CHOSEN), and the MAT77 Ltd. website (public site + staff admin on one Node.js and PostgreSQL API).

What defines her is how she builds. She cares about confirmation before destructive or important writes, role-based access, and data that stays scoped to the right people. She is comfortable in React, TypeScript, Node.js, NestJS, Expo, PostgreSQL, and practical AI features — not as a buzzword, but as something that plans tasks, answers from live data, or saves staff time.

She is open to full-stack roles, freelance work, and collaboration. If you want to work with her, write to ${CONTACT.email} or WhatsApp ${CONTACT.phone}.`,
  },
  {
    id: "values",
    score: ["why", "values", "how she works", "how do you work", "philosophy", "approach", "what kind of developer"],
    keywords: ["value", "why", "impact", "honest", "confirm", "trust", "quality"],
    answer: `Anitha builds because she wants technology to take friction out of everyday work — hospitals, shops, elections, ministries, and small companies. Her README and products say the same thing: understand the problem, design something useful, then ship it.

In ORDINA, nothing important is saved until the user confirms. In HarmonyHub, permissions follow real ministry roles. In MAT77, visitors never get a fake “register” flow — staff are invited from the dashboard. That pattern is who she is as an engineer: practical, careful with data, and honest about what is finished versus what still needs a real account or key.`,
  },
  {
    id: "ordina",
    score: ["ordina", "productivity", "expo", "gemini", "mobile app", "android", "ios"],
    keywords: ["ordina", "productivity", "gemini", "expo", "reminder", "schedule"],
    answer: `ORDINA is Anitha's AI-powered personal productivity app for Android and iOS (Expo + Express + Prisma + PostgreSQL).

You tell ORDINA what you need to do — in text or, optionally, voice — and it turns that into dated tasks, reminders, and a schedule. Example: “Tomorrow I need to finish my React project, study PostgreSQL for two hours, call John at 4 PM, and go to the gym.” ORDINA proposes four tasks. You tap Confirm & save.

The mobile app never holds the Gemini key; the API talks to Gemini. If Gemini is down, a built-in parser still plans multiple tasks and relative dates. Auth uses JWT, with optional Google/Apple sign-in, password reset, and an app PIN. Source: ${projects.find((p) => p.id === "ordina")?.links.github}.`,
  },
  {
    id: "dueora",
    score: ["dueora"],
    keywords: ["dueora"],
    answer: `Dueora is Anitha's newest mobile app. It is still in development, so the full story is not public yet — ask her directly at ${CONTACT.email} or on LinkedIn (${CONTACT.linkedin}) if you want to hear about it early.`,
  },
  {
    id: "harmony",
    score: ["harmony", "harmonyhub", "worship", "chosen", "ministry", "church"],
    keywords: ["harmony", "worship", "ministry", "chosen", "song", "attendance"],
    answer: `HarmonyHub is a worship ministry management system Anitha built for THE CHOSEN. It is a React (Vite) frontend, NestJS backend, and PostgreSQL with Prisma.

It covers the real work of a worship team: login with five roles, members and attendance, a song library, a full worship-schedule builder, committees, announcements, events, documents, elections with live results, Excel/PDF reports, and a PWA shell. There is also a Harmony Assistant designed to answer from live ministry data (next schedule, recent announcements, upcoming events).

The public GitHub listing is private client work — she can walk through the architecture on request. Repo: https://github.com/Annithah/HarmonyHub`,
  },
  {
    id: "mat77",
    score: ["mat77", "mat 77", "matty", "company website", "admin dashboard"],
    keywords: ["mat77", "matty", "inquiry", "staff admin", "company"],
    answer: `MAT77 Ltd. is a company website Anitha built with a staff admin dashboard, both talking to the same Node.js + PostgreSQL API.

Visitors use the public site (including Contact, which creates an inquiry in the database). Staff sign in at /admin to handle student inquiries, edit website content that then appears on the public site, and invite teammates from Team access. There is no public self-registration — that was an intentional product choice.

Stack: React, Vite, Node.js, PostgreSQL, TypeScript. Repo: https://github.com/Annithah/mat77-website (private; available to discuss).`,
  },
  {
    id: "projects",
    score: ["projects", "portfolio", "what has she built", "what did she build", "work samples", "case studies"],
    keywords: ["project", "built", "portfolio", "work"],
    answer: `Featured work right now: ${featuredNames}.

• ORDINA — AI productivity on Expo for Android and iOS.
• HarmonyHub — ministry operations for THE CHOSEN (members, schedules, elections, reports).
• MAT77 Ltd. — public website + staff admin + shared API.
• Dueora — her newest mobile app, currently in development.

Earlier systems include Medhub (health workflows for Rwanda), XY Shop (e-commerce), stock and employee management, and a Django voting platform. Together they show she can ship mobile, web, APIs, and admin tools — not only landing pages.

Ask about any one project by name and I will go deeper.`,
  },
  {
    id: "stack",
    score: ["stack", "technologies", "skills", "tech", "languages", "framework"],
    keywords: ["stack", "skill", "react", "node", "typescript", "nestjs", "prisma", "python", "php"],
    answer: `Anitha works across the stack.

Languages: JavaScript, TypeScript, PHP, Python.
Frontend: React, Next.js, React Native, Expo, Flutter, Tailwind CSS.
Backend: Node.js, Express, NestJS, Laravel, Prisma.
Data: PostgreSQL, MySQL, SQLite, MongoDB.
AI in product: Gemini behind ORDINA; grounded assistants (as in HarmonyHub) that answer from live data rather than a static script.

She picks the database and framework from the problem — SQLite where a light local store fits, PostgreSQL for multi-user company and ministry systems, MongoDB on some MERN work.`,
  },
  {
    id: "mobile",
    score: ["mobile", "react native", "flutter", "android", "ios"],
    keywords: ["mobile", "android", "ios", "expo", "flutter", "phone"],
    answer: `Yes — she builds mobile. ORDINA is a full Expo (React Native) app with an Express API: auth, tasks, projects, goals, reminders, calendar, search, light/dark theme, and optional device integrations (mic, notifications, contacts, calendar, location, camera).

She also has Flutter UI work on GitHub. If you need a cross-platform app with a real backend, that is a core part of how she works now, not a side experiment.`,
  },
  {
    id: "ai",
    score: ["artificial intelligence", "machine learning", "ai assistant", "llm"],
    keywords: ["ai", "ml", "gemini", "assistant", "machine learning"],
    answer: `Anitha uses AI as a product feature, not a sticker.

In ORDINA, Gemini (called only from the API) turns one instruction into several dated tasks. If the model is unavailable, a local parser still plans. Voice transcription and image-to-task exist as API routes, with confirm-before-save so the model never silently writes data.

HarmonyHub’s assistant is designed to be grounded in live ministry records. She is also studying data and machine learning in Python. If you ask “does she do AI?”, the honest answer is: she ships AI inside systems she also authenticates, stores, and tests.`,
  },
  {
    id: "location",
    score: ["where", "rwanda", "kigali", "based", "live"],
    keywords: ["rwanda", "kigali", "where", "based", "location"],
    answer: `Anitha is based in Rwanda. She builds for local and regional contexts — healthcare (Medhub / MSRwanda), ministry operations, and company sites — and she is comfortable collaborating remotely on full-stack and mobile work.`,
  },
  {
    id: "contact",
    score: ["contact", "email", "hire", "freelance", "available", "reach", "whatsapp", "phone", "github", "linkedin"],
    keywords: ["contact", "email", "hire", "whatsapp", "phone", "available", "freelance", "linkedin"],
    answer: `You can reach Anitha directly:

• Email: ${CONTACT.email}
• Phone / WhatsApp: ${CONTACT.phone}
• LinkedIn: ${CONTACT.linkedin}
• GitHub: ${CONTACT.github}

She is open to full-stack roles, freelance projects, and collaboration — especially products that need a web app, an admin side, a mobile client, or practical AI. Use the contact form on this page, or message her on WhatsApp.`,
  },
  {
    id: "experience",
    score: ["experience", "intern", "career", "journey", "education", "learning", "enoveta", "norrsken", "hackathon", "futuremakers", "data science", "degree", "university", "job", "work at"],
    keywords: ["experience", "intern", "career", "journey", "learn", "goal"],
    answer: `Right now Anitha is a Junior Software Developer at Enoveta, based at Norrsken. She also presented with her team at the Futuremakers Hackathon at Westerwelle Startup Haus Kigali, and she starts a bachelor's degree in Data Science in January 2027.

Her path is project-led. She has moved from PHP/MySQL operations tools and Django voting, through MERN healthcare work, into TypeScript systems with NestJS, Prisma, Expo, and AI.

Her longer-term direction is to keep growing as a software professional who also uses data and AI — not to abandon full-stack engineering, but to make products smarter. She learns by shipping: ORDINA, HarmonyHub, and MAT77 are the latest proof of that.`,
  },
];

function normalize(text) {
  return text.toLowerCase().replace(/[’']/g, "'").replace(/[^a-z0-9+#.\s-]/g, " ").replace(/\s+/g, " ").trim();
}

function scoreTopic(query, topic) {
  let score = 0;
  for (const phrase of topic.score) {
    if (query.includes(phrase)) score += 6;
  }
  for (const word of topic.keywords) {
    if (query.includes(word)) score += 2;
  }
  return score;
}

const GREETINGS = ["hi", "hello", "hey", "muraho", "good morning", "good afternoon", "good evening"];

export const suggestedQuestions = [
  "Who is Anitha, really?",
  "What is ORDINA?",
  "Tell me about HarmonyHub",
  "What is her tech stack?",
  "How can I contact her?",
];

export function answerQuestion(raw) {
  const query = normalize(raw);
  if (!query) {
    return "Ask me anything about Anitha — who she is, how she builds, or a specific project.";
  }

  const isGreeting = GREETINGS.some((g) => query === g || query.startsWith(`${g} `));
  const ranked = TOPICS
    .map((topic) => ({ topic, score: scoreTopic(query, topic) }))
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score);

  if (ranked.length === 0) {
    if (isGreeting) {
      return "Hello — I am Anitha’s portfolio assistant. I can explain who she is, walk through ORDINA, HarmonyHub, and MAT77, or share how to reach her. What would you like to know?";
    }
    return `I stay focused on Anitha’s work and background, so I may not have that specific detail. I can go deep on who she is, ${featuredNames}, her stack, or how to contact her. Try one of those, or ask a project by name.`;
  }

  const top = ranked.filter((row, index) => index === 0 || row.score >= ranked[0].score - 2).slice(0, 2);
  const parts = top.map((row) => row.topic.answer);
  if (isGreeting) {
    return `Hello. ${parts.join("\n\n")}`;
  }
  return parts.join("\n\n");
}
