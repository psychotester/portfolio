// Centralized profile configuration.
// Switch between profiles by changing ACTIVE_PROFILE below.
// Keeping it as a simple constant avoids build/env complexity.

export const ACTIVE_PROFILE = "gheorghe"; // "gheorghe" | "oskar"

export const PROFILES = {
  gheorghe: {
    brandMark: "GB.",
    showParticles: false,
    fullName: "Gheorghe Barbuta",
    titleLine: "Full-Stack Web Developer who ships and maintains real products",
    subtitleLine: "Focused on clarity, long-term maintainability, and calm problem-solving.",
    typewriter: [
      "Full-Stack Web Developer",
      "React / Node.js Engineer",
      "SaaS & Business Apps",
      "API Integrations",
    ],
    locationLine: "Moldova • Remote",
    aboutHeading: "Let me introduce myself",
    aboutBody: [
      "I build web applications that stay fast, stable, and maintainable after launch — not just demos.",
      "I care about clear architecture, predictable behavior under edge cases, and pragmatic performance.",
      "If you need someone who can take ownership, communicate clearly, and deliver production-ready results, I’m happy to talk.",
    ],
    focus: ["React", "Node.js", "APIs", "SaaS"],
    socials: {
      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/",
      twitter: "",
      instagram: "",
    },
    githubUsername: "", // optional: used in Github component
  },
  oskar: {
    brandMark: "OR.",
    showParticles: false,
    fullName: "Oskar Rubin",
    titleLine: "Full-Stack Web Developer who ships and maintains real products",
    subtitleLine: "Focused on clarity, long-term maintainability, and calm problem-solving.",
    typewriter: [
      "Full-Stack Web Developer",
      "React / Node.js Engineer",
      "SaaS & Business Apps",
      "API Integrations",
    ],
    locationLine: "Japan • Remote",
    aboutHeading: "Let me introduce myself",
    aboutBody: [
      "I build web applications that stay fast, stable, and maintainable after launch — not just demos.",
      "I care about clear architecture, predictable behavior under edge cases, and pragmatic performance.",
      "If you need someone who can take ownership, communicate clearly, and deliver production-ready results, I’m happy to talk.",
    ],
    focus: ["React", "Node.js", "APIs", "SaaS"],
    socials: {
      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/",
      twitter: "",
      instagram: "",
    },
    githubUsername: "",
  },
};

export const profile = PROFILES[ACTIVE_PROFILE];
