# PrepSt Homepage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the old AI-slop homepage with the approved “study desk” landing page focused on the free SAT tutor.

**Architecture:** Keep the homepage route and external CTA intact. Replace the current V2 composition with one focused client leaf for Peppa, ThinkingOrb, FAQ state, and entry motion, while keeping page structure in `app/page.tsx` and styling in `app/globals.css`.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, Motion, `@bible-strong/avatar-react`, `thinking-orbs`, Geist.

---

### Task 1: Install and verify visual dependencies

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`

- [ ] **Step 1: Install the requested packages**

Run:

```bash
npm install @bible-strong/avatar-react thinking-orbs react react-dom
```

Expected: npm updates the manifest and lockfile without peer-dependency errors.

- [ ] **Step 2: Confirm package entry points**

Run:

```bash
node -e "const p=require('./node_modules/@bible-strong/avatar-react/package.json'); console.log(p.name, p.version)"
node -e "const p=require('./node_modules/thinking-orbs/package.json'); console.log(p.name, p.version)"
```

Expected: both package names and installed versions print.

### Task 2: Add the portable Peppa definition

**Files:**
- Create: `public/strobi.avatar.json`

- [ ] **Step 1: Copy the supplied JSON definition**

Copy `/Users/buyan/Downloads/Bible Strong Avatar.json` to `public/strobi.avatar.json` without changing the schema or expression names. The page imports this file from the app so the avatar stays portable in the repository.

- [ ] **Step 2: Verify the definition shape**

Run:

```bash
node -e "const fs=require('fs'); const v=JSON.parse(fs.readFileSync('public/strobi.avatar.json')); if(v.name!=='Peppa'||!v.animations||!v.expressions) process.exit(1); console.log(v.name, Object.keys(v.animations).length, Object.keys(v.expressions).length)"
```

Expected: prints `Peppa` and non-zero animation/expression counts.

### Task 3: Build the homepage client leaf

**Files:**
- Create: `components/homepage-client.tsx`

- [ ] **Step 1: Add the client component with direct package integration**

Use this structure:

```tsx
"use client"

import { createAvatar } from "@bible-strong/avatar-react"
import "@bible-strong/avatar-react/styles.css"
import { ThinkingOrb } from "thinking-orbs"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useState } from "react"
import definition from "@/public/strobi.avatar.json"
```

Create `const Peppa = createAvatar(definition)`. Render the avatar with `animation="idle"`, `size="100%"`, and `ariaLabel="Peppa, your SAT study guide"`. Render a monochrome orb with `state="working"`, `size={64}`, and an explicit accessible label. The package provides tuned `20` and `64` size presets, so use the supported `64` preset in the hero panel.

- [ ] **Step 2: Implement the page sections**

The component must render:

1. one-line desktop navigation with `Start studying` as the only primary intent;
2. split hero with headline `Study with momentum.` and short copy, with Peppa/orb panel on the right;
3. problem section with one focused message;
4. three-step `#features` narrative using `Diagnose`, `Practice`, and `Review`;
5. feature overview for adaptive practice, targeted review, and exam insight;
6. short proof section with no invented statistics;
7. `#faq` accordion with `aria-expanded` and `aria-controls`;
8. final CTA linking to `https://sat.prepst.com/` and footer.

Avoid old mascot images, emoji, decorative glows, gradient text, and duplicate CTA labels. Do not use em-dashes in visible copy.

- [ ] **Step 3: Add the smallest interactive state surface**

Use `useState<number | null>(0)` only for the FAQ open item. Use `useReducedMotion()` to remove hero entrance transforms when reduced motion is requested. Do not use scroll listeners or continuous React state updates.

### Task 4: Replace the page composition and tokens

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Modify: `app/layout.tsx` only if metadata needs the new homepage title/description

- [ ] **Step 1: Compose the new page**

Make `app/page.tsx` render the new `HomepageClient` as the only homepage implementation. Preserve `min-h-[100dvh]` and the `#features` / `#faq` anchors.

- [ ] **Step 2: Replace the old design tokens**

Set one light page theme with:

```css
--page-paper: #f7f9fc;
--page-ink: #182235;
--page-muted: #5d6879;
--page-line: #d9e0eb;
--page-accent: #5b7fe5;
```

Use consistent 16px section surfaces and 10px controls. Remove old mint, coral, lavender, yellow, gradient hero, glow, blob, floating mascot, and score animation classes from the active page path. Add focus-visible styles and a reduced-motion media query.

- [ ] **Step 3: Verify content and responsive constraints**

Check that the hero headline is no more than two lines on desktop, the CTA is visible in the initial viewport, navigation stays on one line at desktop, and every multi-column section explicitly collapses below 768px.

### Task 5: Verify the complete homepage

**Files:**
- Test: `app/page.tsx`, `components/homepage-client.tsx`, `app/globals.css`

- [ ] **Step 1: Run static checks**

Run:

```bash
npm run lint
npm run build
```

Expected: both exit with code 0.

- [ ] **Step 2: Inspect the rendered page**

Start the app with `npm run dev`, inspect desktop and mobile widths, and verify:

```text
Peppa renders and animates.
ThinkingOrb renders in the status panel.
Start studying links to https://sat.prepst.com/.
The #features and #faq anchors resolve.
FAQ keyboard interaction updates aria-expanded.
No old mascot, purple glow, or emoji UI remains on the homepage.
```

- [ ] **Step 3: Run the final diff audit**

Run:

```bash
git diff --check
git status --short
```

Expected: no whitespace errors; only the intentional homepage, dependency, avatar, and documentation changes are present.
