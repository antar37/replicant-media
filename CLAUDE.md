# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Commands

- `pnpm build` - production build
- `pnpm start` - run the production build
- `pnpm lint` - ESLint with `eslint-config-next` flat config (`next/core-web-vitals`)
- Use `corepack pnpm ...` if `pnpm` is not on PATH.
- No test runner is configured.
- Package manager is pnpm, pinned via `packageManager` in `package.json`; `pnpm-lock.yaml` is committed.

## What this site is

Single-page Next.js marketing site for Replicant Media. The site should make the business concrete: websites, SEO, Google Ads, reporting, and practical automations for owner-led service businesses. Avoid vague “digital solutions” language.

The main product surface is `pages/index.js` plus the Telegram-backed contact API route in `pages/api/subscribe.js`.

## Design system

Brutalist aesthetic. Keep the strong grid, big type, cream/black/lime palette, and sharp edges.

- Palette: `bone` (#EAE6D8), `ink` (#080808), `acid` (#CCFF02), configured in `tailwind.config.js`.
- Type: `font-display` = Big Shoulders Display for massive uppercase headlines; `font-mono` / `font-sans` = Space Mono.
- Borders: 2px solid ink, no rounded corners.
- Hover: hard color flips on `.flip-card`; no soft agency gradients.
- Buttons: `.btn-ink` and `.btn-acid` in `globals.css`.
- Form fields: `.field` transparent inputs with 2px underline; toggle chips use `data-active="true"`.

## Interactive primitives

- `components/Cursor.js` mounts once in `Container.js`. It automatically disables itself on touch devices and reduced-motion contexts.
- `components/AsciiField.js` renders the passive hero/404 ASCII text field. Keep it decorative and non-blocking.
- Do not reintroduce the playable ASCII/Joust game. It was removed because it is not usable enough on mobile.
- `components/Magnetic.js` wraps CTA buttons.
- `lib/useReveal.js` powers scroll reveals with `.reveal-up` / `.is-visible`.
- `spotlight(e)` in `pages/index.js` drives the hover glow on cards.

## Architecture notes

- Pages Router: `pages/index.js` is the only main page.
- Layout shell: `components/Container.js` owns SEO/OG meta with canonical `https://replicant.media${asPath}`, header, footer, and cursor.
- Structured data lives in `pages/_document.js`.
- Markdown fallback for agents/curl lives in `proxy.js` and should mirror the homepage positioning.
- Subscribe flow: `components/Subscribe.js` posts to `/api/subscribe`; `pages/api/subscribe.js` sends the brief to Telegram using `TELEGRAM_BOT_KEY` and `TELEGRAM_CHAT_ID`.
- Absolute imports use `jsconfig.json` baseUrl `.`.
- Tailwind scans `pages/**/*.js` and `components/**/*.js` only.
