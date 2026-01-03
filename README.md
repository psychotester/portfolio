# Portfolio (React)

A clean, production-friendly portfolio site.

## Quick start

```bash
npm install
npm start
```

Build:

```bash
npm run build
```

## Personalize

All key text is centralized in:

- `src/profile.js`

To switch between the included profiles:

```js
export const ACTIVE_PROFILE = "gheorghe"; // or "oskar"
```

Update links:

- `socials.github / socials.linkedin / socials.twitter / socials.instagram`
- `githubUsername` (optional; enables the GitHub contribution calendar)

## Resume

Replace the placeholder PDF:

- `src/Assets/resume.pdf`

## Background

The background PNG is here:

- `src/Assets/background.png`

It’s applied globally via `src/index.css`.

## Notes

- This project is intended to stay simple and maintainable.
- Keep project descriptions outcome-focused (what it’s used for, your role, the result).
