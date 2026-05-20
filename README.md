# Kitotech Design System

> The visual operating system for **KITOTECH GROUP LIMITED** — a modern redesign for an enterprise security technology company specializing in surveillance, access control, AI-powered monitoring and automation.

This pack is a **from-scratch design system** built from the brand brief alone (no incumbent codebase or Figma was provided). It establishes color, type, motion, components, and a click-thru UI kit covering both the marketing site and the operator product. The goal is **Apple-grade polish meets Hikvision/Tesla precision** — sharp, technical, dark-first, quietly cinematic.

---

## Sources & inputs

- **Brand brief** — supplied inline as the project prompt (audience, tone, motifs, color, competitive references: Apple / Hikvision / Tesla / modern SaaS).
- **No codebase** was attached.
- **No Figma** was attached.
- **No existing logo file** was supplied — a wordmark and mark are included as **proposals** in `assets/`. Easy to swap once the official mark is available.

> If the company has an existing official logo, brand book, photography, or prior site, **please attach it** and I will replace the placeholder marks and re-tune the palette/typography to match.

---

## Index

| File / folder | What's there |
| --- | --- |
| `colors_and_type.css` | Single source of truth — CSS variables for color, type, spacing, radii, shadows, motion. Import this in every artifact. |
| `assets/` | Logo marks (square + wordmark, dark + light), favicon, hero placeholder textures. |
| `fonts/` | Brand-supplied font files (Poppins-Medium.ttf) + notes on substitutes still pulled from Google Fonts. |
| `preview/` | One-off cards previewed in the Design System tab — type specimens, color swatches, component cards. |
| `ui_kits/marketing/` | The public website kit — homepage, product showcase, contact, footer. |
| `ui_kits/sentinel/` | The operator product kit — Sentinel, the live surveillance + access dashboard. |
| `SKILL.md` | Cross-compatible Agent Skill manifest for Claude Code download. Read this first if you're loading the system as a skill. |

---

## The brand at a glance

**Kitotech** is enterprise-grade security infrastructure — cameras, access control panels, AI alerting, and a unified web/cloud platform that ties them together. The audience is:

- **Facility & security directors** at hotels, factories, hospitals, government, retail chains.
- **Integrators & resellers** who install Kitotech hardware.
- **Operators** who watch dashboards 24/7.

Three product surfaces matter:

1. **Marketing website** — the front door. Sells trust, scale, and modernity.
2. **Sentinel** — the operator product (live cameras, events, access logs).
3. **Installer Tools** *(future)* — configuration & device management.

This kit covers (1) and (2) at high fidelity.

---

## Content Fundamentals

**Language.** **Kiswahili first.** All customer-facing copy in the marketing site and the Sentinel operator console is in **Kiswahili** — the brand serves East-African enterprise customers as well as Nigeria. Internal CSS tokens, code identifiers, and this design-system documentation stay in English (they're for designers/devs), but everything a user reads is Swahili.

**Voice.** Confident, precise, technical, respectful. Speak as the people running infrastructure — not as a consumer brand. Closer to **Stripe / Linear** than to a smart-home company. Never breathless. Never hype-forward.

**Pronouns.** Default to second-person *wewe / yako* when addressing the customer. Use *sisi / yetu* for company actions. Avoid first-person singular.

**Casing.**
- **Display headlines** are sentence case: *"Usalama wa kisasa, uliojengwa kwa ustadi."*
- **Product names** stay in their proper form: *Sentinel*, *Gate Vision*, *Access OS* — not translated.
- **Eyebrows / category labels** are UPPERCASE with wide tracking: `MWANZO`, `MATUKIO HAI`.
- **Buttons** are sentence case or short uppercase: *Omba Onyesho*, *Pata Bei*, *TUMA* — never *Bonyeza Hapa* or *Endelea →* with no verb.

**Numbers as evidence.** Lean on hard numbers: latency (ms), uptime (99.99%), event throughput (matukio/s), camera counts (1,240+). Always set numerals in the **mono** family so they line up; never spell numbers above ten.

**Tone examples — write like this:**
- ✅ *"Tahadhari za AI kwenye vituo 1,240 — chini ya milisekunde 80."*
- ✅ *"Imejengwa kwa vituo visivyoweza kuzimika."*
- ✅ *"Matukio ya ufikiaji, yanakaguliwa mara moja. Kila mlango, kila kitambulisho, kila baiti."*

**Tone examples — never write like this:**
- ❌ *"Gundua nguvu ya teknolojia ya kisasa! 🚀"*
- ❌ *"Karibu kwenye safari yako ya usalama..."*
- ❌ *"AI yetu ya kushangaza..."*

**Translation tips for designers.**
- *Camera* → **Kamera** · *Door* → **Mlango** · *Site* → **Eneo** · *Alert* → **Tahadhari** · *Live* → **Hai / Moja kwa moja** · *Event* → **Tukio** · *Operator* → **Mendeshaji** · *Site uptime* → **Wakati wa kazi** · *Latency* → **Ucheleweshaji** · *Demo* → **Onyesho** · *Quote* → **Bei** · *Contact us* → **Wasiliana nasi**.
- Loanwords like *Sentinel*, *AI*, *4K*, *PoE+* stay in English — they are technical proper nouns.
- Bilingual handling: where a Kiswahili word might be ambiguous, follow it with the English in italics in parentheses on first appearance: *Ucheleweshaji (latency)*.

**Emoji & exclamation.** None. Not in marketing copy, not in product UI. The only "punctuation accents" are red status dots and monospaced timestamps.

**Capitalization for status.** Status words are UPPERCASE mono: `TAYARI`, `HAI`, `WAZI`, `KIMEZIMA`, `TAHADHARI` — always paired with a colored dot.

---

## Visual Foundations

### Color

A **two-tone brand-with-mono-surface** system. **Signal Red (`#E1141C`)** and **Trust Blue (`#1A37D5`)** — both sampled from the official Kitotech logo — carry the brand. They are paired with a warm-neutral white family for daytime surfaces and a near-black "ink" family for cinematic / operator surfaces.

- **Red** is the energy color. The K mark, primary CTAs, live indicators, alerts, and any "act now" moment.
- **Blue** is the trust color. Wordmark, technical / data labeling, links, secondary CTAs, and informational status (`info`). On near-black surfaces, blue brightens to `--brand-blue-light` (`#A8B4FF`) for legibility.
- **Dark family** (`--ink-0` through `--ink-4`) is near-black, slightly cool. Used for: hero sections, operator product (Sentinel), modals, footer.
- **Light family** (`--paper-0` through `--paper-3`) is **warm-neutral**, not cold blue-white. Used for: product showcase, docs, dashboards in light mode.
- **Pair red with blue sparingly.** They are equal partners in the lockup, but in product UI default to red for action and blue for information — using both at once is reserved for the logo itself and the occasional "two-track" stat / status pair.

### Typography

Three families. All available on Google Fonts.

| Role | Family | Notes |
| --- | --- | --- |
| Display & UI headings | **Space Grotesk** (300–700) | Geometric, faintly technical. Tracked tight at display sizes (`-0.02em`). |
| Body & long-form | **Poppins** (400 / 500 / 600 / 700) — *brand-supplied* | Medium (500) is self-hosted from `/fonts/Poppins-Medium.ttf`. Other weights currently come from Google Fonts pending full upload. |
| Numerals, codes, status | **JetBrains Mono** (400–600) | Tabular figures (`tnum`) for stats. Used for timestamps, IDs, status pills. |

The display scale is **clamped fluid** — `clamp(56px, 7vw, 104px)` etc. — so hero type breathes on big screens without dwarfing mobile.

> **Brand font status.** Only `Poppins-Medium.ttf` has been provided so far — it's self-hosted from `/fonts/`. The remaining Poppins weights (400 / 600 / 700) and both other families (Space Grotesk, JetBrains Mono) are still Google Fonts substitutes. **Please upload the rest** (or confirm Google Fonts is fine for production) so we can fully self-host. To swap any family later, edit `--font-*` in `colors_and_type.css` — everything cascades.

### Spacing & Layout

- **4-px base unit.** Tokens go `4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128`.
- **Section rhythm:** marketing sections are `var(--s-32)` top/bottom on desktop, `var(--s-16)` on mobile.
- **Max content width** is `1280px`. Hero/full-bleed sections break out to 100%.
- **Mobile-first.** Breakpoints `640 / 960 / 1200`.

### Radii

**Sharp & technical.** No bouncy rounding.

- `2px` for chips and badges
- `4px` for buttons and inputs
- `8px` for cards
- `12px` for large panels
- `999px` only for status pills and the floating WhatsApp bubble

### Shadows & elevation

On **light surfaces** — four soft, low-spread shadows (`--shadow-1` → `--shadow-4`). Never multiple layered drop shadows.

On **dark surfaces** — shadows do nothing. Instead, elevation is signaled by:
- a `1px` hairline border (`--hair-d`), and
- an **inner top-edge highlight** (`inset 0 1px 0 rgba(255,255,255,.05)`) that catches imaginary light.

The **only chromatic glow** is `--glow-red` — reserved for live alerts and active focus on critical CTAs. Use it sparingly.

### Backgrounds & texture

- **Light is the default surface.** White (`--paper-0`) and warm-neutral (`--paper-1`) carry every page. **Black (`--ink-0` / `--ink-1`) lives almost exclusively in the footer** and inside the Sentinel operator product — never as a dominant fill on the marketing pages.
- **Diagonal red wedges** are the brand's signature shape. Use `clip-path: polygon(...)` to slice red blocks at a consistent **~22° angle** — hero banners, button skews, badge corners. The diagonal goes top-left to bottom-right by default.
- **No gradients** as primary surfaces. (No bluish-purple AI gradient backgrounds anywhere.)
- A subtle **48 px grid** texture (`bg-grid-dark` / `bg-grid-light`) for hero sections — barely visible, signals "engineered."
- **Full-bleed cinematic imagery** for the right half of the hero — preferred subject: facilities at night, city skylines, server rooms, telephoto camera lenses. Color-graded **cool, slightly desaturated**, with a red glow note overlaid.
- **Diagonal stripe motifs** (1–2 px hairlines at 22° angle, low opacity) decorate section transitions.
- For abstract / pattern fills: a **24 px dot grid** (`bg-dot-dark`) and an animated **scan-line** treatment for "live" affordances.

### Imagery direction

- **Mood:** cool, blue-shadow, low-key. Think cinematography from *Blade Runner 2049* or a Tesla industrial film.
- **Subjects:** infrastructure (not people-first). Operators are shown in silhouette or wide-shot, never grinning stock photography.
- **Grain:** very light film grain over photography (~3% noise overlay).

### Motion

- **Easing default** is `cubic-bezier(0.22, 1, 0.36, 1)` (`--ease-out`).
- **No bounce on UI controls.** A subtle spring (`--ease-spring`) is used **only** for the live-pulse status dot and the camera-tile load-in.
- **Durations** — `120ms` for press feedback, `220ms` for hover, `420ms` for scroll-triggered reveals, `680ms` for hero entrance.
- **Hover** on light buttons: background darkens by one paper step. On dark buttons: background lightens by one ink step. **No transform-up-on-hover.**
- **Press**: scale `0.98`, duration `120ms`.
- **Scroll reveal**: 16 px translate-up + fade, staggered 60 ms per child.

### Borders

- Hairlines are **always 1px**, never thicker.
- On dark: `--hair-d` for default, `--hair-d2` for emphasis.
- On light: `--hair-l` for default, `--hair-l2` for emphasis.
- **Dotted borders** are reserved for drag-and-drop / placeholder states inside the product.

### Cards

A card is, in priority order:
1. A `1px` hairline border (always).
2. `8px` corner radius.
3. On light: `--shadow-1` (whisper of a shadow).
4. On dark: `--inner-top` highlight, no shadow.

**No left-color-bar cards.** No drop-shadow-only cards. The hairline is the constant.

### Transparency & blur

Used **only** for:
- **Sticky navigation** — `backdrop-filter: blur(20px)` over a `rgba` panel, hairline bottom border.
- **Modals** — backdrop is `rgba(5,5,7,0.7)` with `blur(8px)`.
- **Glass info-strips** over cinematic imagery — `rgba(5,5,7,0.6)` + `blur(24px)`.

Never use glass for ordinary content cards.

### Layout rules (fixed elements)

- **Light is the default.** White / warm-neutral surfaces dominate the page. Dark surfaces are reserved for: the **footer**, the **right side of the hero** (cinematic image area), the **Sentinel operator product**, and **modals**. Anywhere else dark, ask twice.
- **Top nav** — sticky, 80 px tall, **white** with a thin hairline bottom border and a faint shadow. Active link gets a 2-px red underline.
- **Announcement bar** — optional very-thin strip above the nav, on `--paper-2`. Used for promos or service messages.
- **Hero CTA** — red, **skewed clip-path** rectangle. The skew is part of the brand vocabulary.
- **WhatsApp bubble** — bottom-right, 56 px, `position: fixed`, never overlaps the page footer.
- **AI assistant launcher** — bottom-right, 24 px above the WhatsApp bubble. When opened, slides a 360 px panel up from the bottom. Panel header is RED, body is dark.
- **Cookie bar** — bottom strip, dismissable, never modal.

### "Live" affordance

A signature interaction: anywhere live data is shown (camera feeds, event log, alert tickers), a small **red dot** pulses next to it with a `1.4s` ease-in-out — paired with the uppercase `LIVE` label in mono. This is the closest thing to a brand mascot.

---

## Iconography

The system uses **[Lucide icons](https://lucide.dev/)** — outline, 1.5 px stroke, square line caps — loaded from CDN:

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<script>lucide.createIcons();</script>
```

Rationale: Lucide's outline aesthetic matches the technical/precise voice of the brand. Hikvision's own UI uses a comparable outline set. If/when Kitotech commissions a custom set, drop the SVGs into `assets/icons/` and replace the CDN.

> *Substitution flag.* Lucide is a stand-in. **Please advise** if Kitotech already owns an icon set so it can be imported and used as the source of truth.

**Rules of use:**
- **Size**: 16 / 20 / 24 px. Never scale icons larger than 32 px — for large symbols, use illustration instead.
- **Color**: inherits `currentColor`. Default to `--fg-on-*-2` for secondary actions, `--fg-on-*-1` for primary, `--brand-red` only for genuine alerts.
- **Stroke**: keep Lucide default (1.5 px). Never restyle to filled.
- **No emoji.** Anywhere. Not in copy, not in marketing, not in product status.
- **No unicode glyphs** as icons (✓ ✗ ★ etc) — always use Lucide.

Custom marks that exist alongside Lucide:
- `assets/logo-mark.svg` — square mark (dark variant) — favicon, app icon.
- `assets/logo-mark-light.svg` — square mark (light variant).
- `assets/logo-wordmark-dark.svg` / `-light.svg` — horizontal lockup with `KITOTECH` + `GROUP`.

---

## Using this kit

1. Drop `colors_and_type.css` into your project.
2. Wrap your root in `<div class="kt">` (or `class="kt kt-dark"` for dark mode).
3. Use the utility classes (`.display-1`, `.body`, `.eyebrow`, …) or read variables directly.
4. Crib component patterns from `ui_kits/marketing/` and `ui_kits/sentinel/`.

See `SKILL.md` for usage as a Claude Code Skill.

---

## Caveats — known gaps to firm up with the team

- **K mark is a high-resolution raster wrapped in SVG.** The vector preserves the *exact* shape of the official source (it's the cleaned PNG embedded in `<image>`). If a fully hand-drawn editable vector is needed for very large-scale print, request one from the design team.
- **Fonts partially supplied.** Only `Poppins-Medium.ttf` was uploaded. Other Poppins weights (400 / 600 / 700), Space Grotesk (display), and JetBrains Mono (numerals) still load from Google Fonts. Please upload the remaining files, or confirm Google Fonts is fine for production.
- **Kiswahili copy is first-pass.** Translations are designed to be idiomatic but should be **proofread by a native speaker** before shipping. Confirm: regional preference (Tanzanian/Kenyan/East-African neutral?), product-name conventions (translate "Access OS" or keep in English?), formality register.
- **No real product photography** was supplied — placeholder cinematic gradients are used in hero positions and should be replaced.
- **AI assistant + WhatsApp bubble** behavior is mocked (UI only). Real wiring to Twilio/WhatsApp Business + the chosen LLM is out of scope here.
- **Accessibility audit** (color-contrast at all surface combinations, focus-visible patterns) — first pass meets AA on default pairings; deserves a dedicated pass before launch.
