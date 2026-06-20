# Website UI Kit — Anna-Lena Czarnetzki Aromaberatung

A high-fidelity, click-thru recreation of the practice's marketing website (single-practitioner site). The original isn't built yet — these screens are an *informed proposal* derived from the postcard's content, the *Diplom* curriculum, and the brand's content fundamentals, rendered against the design system in `colors_and_type.css`.

## Files

- **`index.html`** — interactive single-page site (above-the-fold preview registers as a card; full page is a click-through prototype)
- **`SiteHeader.jsx`** — sticky slim header with logo and nav
- **`Hero.jsx`** — hero block with eyebrow, display headline, italic triplet, primary + secondary CTAs
- **`ValueProps.jsx`** — five-up benefit grid using the postcard's exact copy
- **`AboutAnnaLena.jsx`** — portrait + bio (placeholder image)
- **`OffersSection.jsx`** — three offer cards (Kennenlerngespräch, Einzelberatung, Begleitung)
- **`BookingCTA.jsx`** — full-bleed sage panel with the booking call
- **`SiteFooter.jsx`** — contact strip + secondary nav

## Screens (states the prototype lets you reach)

1. Landing (top of page)
2. Booking modal — opens on every "Termin"/"Kennenlerngespräch" CTA
3. Booking success state — shown after submitting the form

## Surface choices

- Background: `--cream-50`. Sections alternate cream and `--sage-50` for rhythm.
- All CTAs are pill `--sage-700` primaries; secondary is ghost-outline.
- Section headers use the eyebrow → display → optional italic triplet pattern.
- One botanical illustration appears (lavender stem in the hero), once.

## Caveats

- Anna-Lena's real photo is not provided — a soft cream placeholder with her initials is used. **Replace `assets/portrait-placeholder.svg` once a portrait is supplied.**
- Booking is a UI-only mock; submitting the form does not send anything.
