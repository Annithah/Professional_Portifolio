# Uwihirwe Anitha — Personal Portfolio

Welcome to my personal portfolio repository.

This portfolio introduces who I am, my background, skills, projects, experience, and my journey as a software developer. It also shows the technologies I work with and some of the digital solutions I have built while learning and growing in software development.

## About Me

I am a passionate software developer who enjoys learning new technologies and building practical digital solutions that solve real-world problems.

My journey in technology started with software development, and I continue to improve my skills through personal projects, professional experience, internships, and technology programs.

My long-term goal is to grow into a strong technology professional and use software and data-driven technologies to create solutions that have a positive impact.

## What You Will Find in This Portfolio

* 👩‍💻 About me and my career journey
* 🛠️ Technical skills and technologies
* 🚀 Projects I have worked on
* 💼 Work experience and internships
* 🎓 Education and achievements
* 📚 Learning journey and interests
* 📞 Contact information

## Technologies

Some of the technologies I have worked with include:

* HTML
* CSS
* JavaScript
* React.js
* React Native
* Node.js
* PHP
* Laravel
* Python
* MySQL
* PostgreSQL
* Git & GitHub
* Docker
* Figma

## Featured Projects

### ORDINA

An AI-powered productivity application designed to help users organize tasks, projects, goals, and reminders in a simple and intelligent way.

### MediHub Rwanda

A digital healthcare platform designed to make access to medical services easier by allowing users to interact with healthcare services online.

### IdukaSmart

A shop management solution designed to help small businesses manage stock, debts, sales, receipts, and reports more efficiently.

## Career Goals

I am interested in software development, problem-solving, data science, and artificial intelligence.

I am continuously learning and looking for opportunities to work on meaningful projects, collaborate with other developers, and grow through real-world experience.

## Why I Build

I believe technology can help solve everyday problems and make people's lives easier. My goal is not only to write code but to understand problems, design useful solutions, and build technology that creates real value.

## Portfolio Website

You can explore my complete portfolio here: **https://uwihirwe.enoveta.com/**

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This creates `dist/`: the Vite build, pre-rendered to static HTML (`scripts/prerender.mjs`) so the page paints before
JavaScript loads. `public/.htaccess` (caching, compression, SPA fallback) is copied into `dist/` for cPanel/Apache.
Upload the **contents** of `dist/` to the site's document root.

## Customize content

- **Projects**: `src/data/projects.js` — one entry per card (logo/visual, status, stack, links, filter category).
  Real logos go in `public/assets/images/projects/`; custom SVG marks live in `src/components/ProjectMarks.jsx`.
- **Skills / tools**: `skillGroups` in `src/data/content.js` (icons from `src/components/TechIcon.jsx`).
- **Timeline, roles, contact links, CV**: `src/data/content.js` (set `CONTACT.cv` to a PDF in `public/` to show "Download CV").
- **Assistant answers**: `src/data/assistant.js`.
- **Colors/fonts**: `tailwind.config.js`, `src/index.css`, and the Google Fonts link in `index.html`.

## Profile photo

The untouched original is `assets/images/profile/original.jpg`. All web versions (square 400/800, portrait 480x600/960x1200,
OG image 1200x630, favicons) are generated from it:

```bash
pip install pillow "opencv-python-headless<5"
npm run images
```

Crop boxes are documented at the top of `scripts/profile_images.py` if the framing ever needs adjusting.

## Contact

If you would like to connect, collaborate, or discuss a project, feel free to reach out through the contact information available on my portfolio.

---

⭐ Thank you for visiting my portfolio repository!
