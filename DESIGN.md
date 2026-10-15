# HackFest 2026 Design Rules

Use these rules for every public site change.

## Voice

- Welcoming first, then proud and professional.
- Short, active sentences. Speak to “you.”
- Use `Rutgers–Newark` or `Newark, New Jersey` only as factual location copy.
- Say “no experience needed.” Avoid jargon, campaign slogans, and hype.
- Publish confirmed facts only. Group pending logistics in one clear status note.

## Colors

| Name | Hex | Use | Text on it |
|---|---|---|---|
| Soot | `#141416` | Header, hero, dark sections | Limestone, Brass |
| Graphite | `#2B2D31` | Structural details on Soot | Limestone, Brass |
| Brick City Red | `#A3302A` | Register button and brick motif | Limestone |
| Oxblood | `#5E1A17` | Hover states and brick depth | Limestone, Brass |
| Brass Amber | `#D9A441` | Schedule rules and dates | Text only on Soot/Graphite |
| Limestone | `#F3F1EC` | Light sections and body | Soot, Brick City Red |
| Steel | `#8A8F96` | Dividers and metadata on dark | Decorative only on light |
| Passaic Blue | `#3B5B78` | Links and quiet accents | Limestone |

- Favor Soot/Graphite and Limestone; use red as the primary accent, with blue and brass sparingly.
- One dominant accent per section.
- No gradients, glows, rounded product-card styling, or drop shadows.

## Type

| Level | Font | Use |
|---|---|---|
| Headline | Space Grotesk Bold | Titles with tight spacing |
| Editorial accent | DM Serif Display Italic | Optional single-word accent |
| Body | Inter Regular/Medium | Paragraphs and interface copy |
| Technical label | Space Mono | Compact factual labels |

## Geometry and artwork

- Use hard rectangular geometry, thin borders, and square controls.
- Keep the brick grid as thin outlines with sparse Brick City Red fills. It must not become photo-real or cartoony.
- The hero artwork statically spells `HackFest` and `2026` in running-bond brick geometry. It is decorative and `aria-hidden`; never put essential event information only inside it.
- Retain one flat skyline silhouette at the bottom of the hero as location-oriented decoration.
- Schedule masonry is static decoration. Page content must not depend on JavaScript or animation to appear.
- Use real RU-N student photography only if approved. No stock photography.

## Identity

- Use the `HackFest 2026` wordmark with `gwc x csrun` organizer shorthand in the header.
- Use the expanded `Girls Who Code x ColorStack RU-N` attribution in public body or footer copy.
- Sponsor logos use original colors on Limestone or approved all-white assets on Soot. Never recolor logos.

## Hero

The first viewport must present:

- `HackFest 2026`
- `November 6–8, 2026`
- `Rutgers–Newark`
- the beginner-friendly description and `No experience needed`
- one primary `Register for HackFest` action
- the static brick lettering and restrained skyline decoration

Keep the desktop `h1` at `clamp(3.5rem, 6vw, 6rem)` and the mobile override at `clamp(2.8rem, 12vw, 4.5rem)`. The hero is event information, not a campaign statement.

## Layout and interaction

- Keep the sticky Soot header, desktop and mobile section navigation, and prominent registration action.
- Keep the content width and responsive 24–64px gutters defined in `app/globals.css`.
- Stack the hero, overview steps, schedule, FAQ, and registration introduction at the documented mobile breakpoint.
- Keep Typeform and all ancestors stationary. Always retain its accessible iframe title and direct fallback link.
- Use native anchors and native `<details>/<summary>` FAQ behavior.

## Accessibility and motion

- Maintain visible keyboard focus with sufficient contrast on light and dark surfaces.
- Keep the skip link and logical heading hierarchy.
- Interactive targets should remain at least 44px high where practical.
- Essential content must remain available with JavaScript disabled.
- `prefers-reduced-motion: reduce` must disable smooth scrolling and transitions.
