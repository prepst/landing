# PrepSt homepage redesign

## Design read

Reading this as: a student-facing SAT prep landing page for mobile-first students, with an editorial product language, leaning toward an asymmetric split layout, restrained cobalt accents, and purposeful motion.

Design dials: `DESIGN_VARIANCE 8`, `MOTION_INTENSITY 6`, `VISUAL_DENSITY 4`.

## Approved direction

Direction A, “The study desk,” is approved. The page should feel like a focused study tool, not an AI demo or a collection of decorative gradients. The visual system is an ink / paper base with one cobalt accent (`#5b7fe5`) inherited from Peppa. No purple glow system, floating mascot gallery, emoji badges, or decorative icon cloud.

## Information architecture

Keep the existing homepage route and the existing external conversion path to `https://sat.prepst.com/`. The homepage sections are:

1. Navigation with one primary CTA: `Start studying`.
2. Split hero: concise value proposition on the left, Peppa avatar and a live thinking-orb status panel on the right.
3. Problem / positioning: most prep creates more noise; PrepSt focuses the next useful action.
4. Product flow: diagnose, practice, review, presented as a narrative sequence rather than equal feature cards.
5. Feature overview: adaptive practice, targeted review, and exam insight with varied visual treatments.
6. Social proof / trust: brief student-oriented proof without invented precision.
7. FAQ accordion.
8. Final CTA and footer.

Existing anchors such as `#features` and `#faq` remain stable where practical. SDK and docs routes are not changed by this work.

## Visual and motion system

- Theme: one light theme across the page, using cool paper (`#f7f9fc`), ink (`#182235`), muted ink (`#5d6879`), hairline (`#d9e0eb`), and Peppa cobalt (`#5b7fe5`).
- Shape: 16px section surfaces and 10px controls. Pills are reserved for compact status treatments only.
- Type: existing Geist setup, with tight display tracking and short copy. No mixed serif treatment.
- Avatar: import the local Peppa definition via `createAvatar` from `@bible-strong/avatar-react`; use the exported `animation="idle"` or `animation="thinking"` behavior in a client leaf.
- Thinking orb: import `ThinkingOrb` from `thinking-orbs`; use `state="thinking"` or the closest supported state (`working`) in the live status panel. The orb remains monochrome so cobalt stays the only accent.
- Motion: hero content enters in sequence, Peppa uses its provided animation, and the orb communicates an active reasoning state. Scroll reveals use opacity and transform only. All motion has a `prefers-reduced-motion` fallback.

## Component boundaries

- `app/page.tsx`: page composition and stable section IDs.
- `components/homepage-client.tsx`: client-only motion and avatar/orb integration.
- `app/globals.css`: page tokens, background treatment, responsive layout helpers, and reduced-motion rules.
- `public/strobi.avatar.json`: copied from the supplied avatar definition so the build is portable.

The client component owns only presentation state such as the FAQ open item. There is no network data flow on the landing page. The CTA is a normal external link, and no form is introduced in this pass.

## Responsive behavior

Desktop uses a 7/5 split hero and a wide narrative grid. Below 768px, the page collapses to one column, with the hero copy first and Peppa panel second. Navigation collapses to a compact menu row. Decorative motion and secondary detail are reduced, while the CTA remains visible without requiring a scroll hunt.

## Accessibility and failure behavior

- Peppa has a meaningful accessible label.
- The thinking orb keeps its default accessible role and label, with explicit `aria-label` when wrapped by supporting copy.
- All CTA text meets contrast against its fill; keyboard focus is visible.
- FAQ buttons expose `aria-expanded` and `aria-controls`.
- `prefers-reduced-motion` disables entrance transforms and relies on the avatar/orb static frame behavior.
- If the avatar package cannot render during SSR, the component is isolated as a client-only leaf and the page still renders its text and CTA.

## Verification

Run `npm run lint` and `npm run build`. Inspect the homepage at desktop and mobile widths. Verify that the external CTA resolves to the free SAT tutor, `#features` and `#faq` work, the Peppa animation renders, the thinking orb renders, and reduced-motion CSS is present.
