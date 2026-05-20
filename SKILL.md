---
name: kitotech-design
description: Use this skill to generate well-branded interfaces and assets for KITOTECH GROUP LTD — a Nigerian / East-African enterprise security technology company. Contains the official red + blue palette, brand-supplied Poppins font, the K-mark logo, voice in Kiswahili, and click-thru UI kits for the marketing site and the Sentinel operator product. Use it for production code or throwaway prototypes / mocks.
user-invocable: true
---

# Kitotech Design Skill

Read `README.md` first — it covers the brand at a glance, voice (Kiswahili-first), the two-tone color system (red `#E1141C` + blue `#1A37D5`), typography (Poppins · Space Grotesk · JetBrains Mono), the visual signature (red diagonal wedges via `clip-path`, light-dominant body, dark footer only), and layout rules.

Then explore:

- **`colors_and_type.css`** — the single token source. Import this in every artifact and wrap the root in `<div class="kt">` (or `<div class="kt kt-dark">`).
- **`assets/`** — the official **K mark** and full horizontal lockup in PNG + SVG, transparent / light-bg / dark-bg variants.
- **`fonts/`** — brand-supplied Poppins-Medium.ttf is self-hosted. Other weights still come from Google Fonts (flag substitution if it matters).
- **`preview/`** — atomic preview cards demonstrating each token / component.
- **`ui_kits/marketing/`** — public website kit. Light-dominant, heavy red diagonal wedges, Kiswahili copy.
- **`ui_kits/sentinel/`** — operator console (dark, dense, live).

## When to invoke

If the user invokes this skill without other guidance, ask:

1. What surface are you designing — marketing, operator console, internal tool, slide deck, social asset?
2. Light or dark surface?
3. Should copy be in **Kiswahili** (default for customer-facing) or English (for internal / technical docs)?
4. Is the K mark visible, or does the design sit inside an already-branded shell?
5. What's the deliverable — HTML artifact, code patch, exported image?

Then act as an expert designer who outputs HTML artifacts **or** production code, depending on the need.

## Rules of thumb

- **Light surface by default.** Black/ink is reserved for the footer, the Sentinel product, modals, and the right-hand cinematic side of hero compositions. Never blanket a marketing page in black.
- **One accent, two ways.** Red is *action* (CTAs, alerts, the K mark). Blue is *trust* (wordmark, links, info status). Using both in one composition is allowed only when the meaning differs.
- **Diagonal wedges are signature.** Skewed red banners (clip-path polygons at ~22°) and skewed button shapes (`clip-path: polygon(6% 0, 100% 0, 94% 100%, 0 100%)`) are part of the brand vocabulary. Use them — sparingly, with intent.
- **No emoji. No exclamation marks. No bouncy radii.** Sharp 2–8 px corners. The closest thing to a mascot is the pulsing red "LIVE" dot.
- **Numbers in mono.** Any stat, ID, timestamp, code, or technical value uses JetBrains Mono with tabular figures.
- **Kiswahili copy.** Translate UI strings; keep product names (Sentinel, Gate Vision, Access OS) and technical loan-words (AI, 4K, ms, RTSP) in English.

## File copy rules

If you are creating new visual artifacts (slides, mocks, throwaway prototypes), **copy** the assets you need out of `assets/` and into your output folder, and reference them with relative paths. Don't link to the design-system folder from outside — it makes the artifact fragile.

If you are working in production code, you can copy assets and read the rules here to become an expert in designing with this brand.

## Known caveats to surface

When using this skill, **always** disclose to the user:

- Only **Poppins Medium (500)** is brand-supplied. Other weights are Google Fonts placeholders.
- The marketing site copy was authored from the brand brief, not lifted from a real Kitotech site — translations are first-pass and should be reviewed by a native Kiswahili speaker before shipping.
- All cinematic imagery in the hero / product showcase is a **placeholder gradient** — replace with real Kitotech photography before launch.
- The K mark vector is a high-resolution rasterization of the source PNG (embedded inside the SVG). A fully editable, hand-redrawn vector path is out of scope here — request one from the design team if needed.
