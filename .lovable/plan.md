# New Hero: "Find Your Dream Property"

Replace the current 5-frame scroll-slider hero on the home page with a single cinematic, parallax-reveal hero inspired by findrealestate.com but themed for Magic India.

## Concept

- Full-viewport hero, pinned during scroll.
- Background layers (back → front), each scrolling at a different speed:
  1. Soft Dehradun sky with drifting clouds (slowest, slight upward drift).
  2. Misty distant Himalayan ranges (slow).
  3. Rolling green meadows / foothills (medium).
  4. A luxury modern villa that starts hidden below the fold and **rises up** into view as the user scrolls (fastest).
- Centered, oversized serif headline **"Find Your Dream Property"** with a subtle gradient/blur-clip effect like findrealestate.com.
- Sub-headline + saffron CTA ("Explore Properties") + ghost CTA ("Watch Our Story").
- Scroll indicator at the bottom; floating socials remain on the left.
- No frame-by-frame slider, no rotating text — one powerful headline, one cinematic reveal.

## Files

- **Rewrite** `src/components/site/Hero.tsx` — remove `HERO_FRAMES` loop and frame timeline; build layered parallax with GSAP ScrollTrigger (pin + scrub). Each layer is an absolutely-positioned image whose `y` is tweened by a different multiplier. Villa layer animates from `y: 80%` → `y: 0%` and scales subtly.
- **Generate 4 assets** via `imagegen` into `src/assets/hero/`:
  - `sky.jpg` — wide pastel Dehradun sky with soft drifting clouds, warm sunrise tones at the horizon.
  - `mountains.png` (transparent) — misty layered Himalayan silhouette.
  - `meadows.png` (transparent) — rolling green foothills / meadow foreground.
  - `villa.png` (transparent) — single luxurious modern villa, front elevation, warm light, isolated on transparent bg.
- **Edit** `src/lib/site-data.ts` — remove `HERO_FRAMES` export (no longer used).
- **Edit** `src/styles.css` — add a `.hero-headline` utility for the giant serif headline with a sky-blended gradient text effect; tweak `warm-gradient-overlay` to be lighter so the sky reads bright (not dark).

## Technical Details

- GSAP `ScrollTrigger` with `pin: true`, `scrub: 1`, `end: "+=120%"`.
- Parallax via `gsap.to(layer, { yPercent: -X, ease: 'none' })` inside the timeline; villa uses positive `yPercent` start state set via `gsap.set`.
- Headline + sub fade/scale slightly as villa rises (e.g. headline `yPercent: -20, opacity: 0.85` near end).
- Responsive: villa scales to `min(120vw, 1400px)`; on mobile the headline drops to `text-5xl` and villa peeks less aggressively so text stays readable.
- Accessibility: respect `prefers-reduced-motion` — disable parallax tween, show villa at rest position.

## Out of Scope

- No changes to Navbar, Stats, About, Projects, Footer, or other routes.
- No changes to data, routing, or backend.
