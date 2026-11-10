import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiNestjs, SiLaravel, SiPhp, SiDjango, SiPrisma,
  SiExpo, SiFlutter, SiPostgresql, SiMysql, SiMongodb, SiSqlite,
  SiPython, SiGooglegemini, SiGit, SiGithub, SiPostman, SiFigma, SiNpm, SiVite,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { HiOutlineSparkles, HiOutlineMicrophone } from "react-icons/hi2";

const ICONS = {
  html: SiHtml5, css: SiCss, js: SiJavascript, ts: SiTypescript, react: SiReact, next: SiNextdotjs,
  tailwind: SiTailwindcss, node: SiNodedotjs, express: SiExpress, nest: SiNestjs, laravel: SiLaravel,
  php: SiPhp, django: SiDjango, prisma: SiPrisma, expo: SiExpo, flutter: SiFlutter,
  postgres: SiPostgresql, mysql: SiMysql, mongo: SiMongodb, sqlite: SiSqlite, python: SiPython,
  gemini: SiGooglegemini, git: SiGit, github: SiGithub, postman: SiPostman, figma: SiFigma,
  npm: SiNpm, vite: SiVite, vscode: VscVscode, sparkles: HiOutlineSparkles, mic: HiOutlineMicrophone,
};

export default function TechIcon({ name, ...props }) {
  const Icon = ICONS[name] || HiOutlineSparkles;
  return <Icon aria-hidden="true" focusable="false" {...props} />;
}
