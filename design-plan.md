# HackFest 2026 — Building Newark, in motion

## Follow-up: scroll section transitions

Final brand-aligned direction: use a brief three-course architectural seam, not a screen-covering wall. It plays only when a section boundary crosses 55% of the viewport, clears within 720ms regardless of scrolling, and has a 900ms retrigger cooldown. Thin Steel outlines and sparse Brick City Red fills replace bevels, grain, and off-palette clay colors. The hero also uses flat outline bricks, superseding the original extruded treatment. Headline tracking is −3%; serif accents are limited to a single word per section. Normal scrolling continues; reduced motion and focused iframe interaction suppress the effect. The Typeform and content remain stationary. One passive scroll listener batches boundary reads with requestAnimationFrame; finite CSS animations handle motion. The hero's “Build it again” button keeps the playfulness intentional and user-controlled.

## Design intent

Requested idle-motion follow-up: after the finite assembly, only the lettering group gently bobs by 3px over a five-second cycle; guides and annotations remain stationary. Entering the stable illustration wrapper with a mouse rebuilds it once, with a 2.3s cooldown to prevent rapid interruption. The user can pause/resume the hero (pausing settles all bricks and suppresses hover) or explicitly replay with a keyboard/touch-friendly button. Reduced motion keeps completed static lettering and hides these controls. This explicit follow-up supersedes the initial finite-only constraint for the idle lettering group, not other sections.

Hero lettering update: the building illustration now spells mixed-case **HackFest**, with **2026** centered directly underneath using actual ink bounds. Adjacent glyph cells form longer bricks with staggered half-brick joints and a restrained 1.2-unit top/side edge; bricks stop at glyph gaps. Limestone outlines and roughly one-third signature-red fills improve contrast, with padding inside the architectural guides. H/F use cap height and the remaining letters retain lowercase forms. Bottom-first course delays preserve the original assembly motion and replay behavior. Hairline strokes retain their screen thickness on mobile, and reduced motion shows the completed lettering. This supersedes the earlier flat-only and stepped-skyline descriptions.

Make the site feel like an invitation from a confident student creative studio: a large editorial headline, an architectural illustration assembled from bricks, and clear, generous sections that make participation feel approachable. The memorable moment is a wall becoming a city, not a generic collection of animated cards.

Preserve the supplied design language: Soot, Limestone, Brick City Red, Oxblood, Brass, Steel, and Passaic; Space Grotesk, DM Serif Display, Inter, and Space Mono. No gradients, glows, or drop shadows. No stock imagery, invented participant counts, invented prize totals, confirmed dates, or map pins. Keep all preliminary logistics clearly preliminary.

## Composition and visual system

- Expand the desktop content width to approximately 1280px with responsive 24–64px outer gutters. Use a consistent 12-column feeling, with a 7/5 hero split and simple two-column section introductions.
- Keep strong corners and thin architectural borders. Give interactive buttons a restrained 2px vertical lift and an arrow that advances 3px; avoid generic pill styling.
- Increase desktop headline scale to `clamp(4rem, 7.8vw, 7.5rem)` with line-height near 0.95. Two lines: “Building” in Space Grotesk and “Newark” in DM Serif Display italic. The accent remains one word. Mobile headline uses `clamp(2.8rem, 12vw, 4.5rem)`, validated against actual text width at 320px.
- Section headings near 3.5–4.5rem desktop and 2.5rem mobile. Body text stays around 1–1.125rem with readable line-height and 45–60ch measure.
- Add small architectural metadata around illustrations, not around every paragraph. Use mono labels for section numbers, assembly notation, and day labels. Hero artwork may say `// brick city, built together` and `01 / foundation` as conceptual labels, never fake progress or live event data.
- Alternate large Soot and Limestone surfaces. Red dominates hero and registration; Brass is restricted to the dark schedule section. Passaic is a quiet secondary accent in venue and readable links. Maintain the single dominant accent per section.

## 1. Header

Keep the recognizable HackFest wordmark with GWC x CSRUN beneath. Add a compact bracket/brick mark beside it, drawn with inline SVG. Desktop navigation becomes more spaced and calm; hover/focus draws a short underline from left to right in 160ms. Header CTA remains “Register” and targets the form section.

Retain a useful mobile section nav. Keep 44px minimum hit areas and account for the full mobile header in section anchor offsets. The sticky header is opaque Soot; no blur or shadow. Use a deliberate responsive header height and corresponding anchor offset, validating wrapping at 320px rather than assuming a desktop 80px offset. No continuous scroll-progress treatment is needed for this implementation.

## 2. Signature hero: a city assembled from bricks

### Layout

Desktop: tall editorial composition of about 720–840px including header, rather than a forced 100vh page. Left 55% contains small event descriptor, enormous two-line heading, tagline, short description, and two CTAs. Right 45% is a large contained architectural canvas. Supporting text never overlaps the artwork.

Use the existing honest content: three-day hackathon, Rutgers–Newark, no experience needed, Typeform registration, dates to be announced. Do not make the typographic tagline compete with the main heading. “Explore the event” can be a plain secondary link with a downward arrow rather than a second large filled button.

The hero ends in a horizontal facts ledger, with three equal columns: “Three days / Meet. Make. Share.”, “Rutgers–Newark / Building with your city.”, and “All experience levels / No experience needed.” The date status remains visibly stated near the event descriptor or in an adjacent small facts row. All statements derive from existing approved content.

### Architectural artwork

Create one original inline SVG, approximately 560 × 480 in viewBox coordinates, with a stepped assembly of thin rectangular bricks. It should read as a precise construction drawing, not a rustic brick wall or a toy. Build about 36–48 visible individual bricks in offset rows. Bottom rows form a broad foundation, middle rows become three different heights, and a narrow upper column hints at a Newark smokestack. Leave deliberate negative space between the rising towers. Arrange the mass diagonally upward from lower-left to upper-right.

Each brick is a crisp rectangular unit with a 1px Graphite/Steel outline. Most units remain transparent on Soot; approximately a quarter are filled Brick City Red or Oxblood. A few Limestone units provide crisp highlights. A small planar offset edge in Graphite may suggest depth, but no rendered 3D lighting, faux cast shadows, rounded blocks, or photographic textures. The result is a dimensional architectural diagram built from two-dimensional paths.

Behind the assembly use only several sparse construction guides and corner marks; do not mix a dense blueprint grid with a full brick pattern. Add one baseline, one vertical dimension line, and tiny mono annotations. These are decorative and `aria-hidden`. Connect the bottom edge to a quieter Newark skyline silhouette spanning the hero. Lower skyline contrast enough that it frames, rather than dominates, the content.

### Motion choreography

On first load, CSS assembles the artwork once from bottom to top, exclusively within `prefers-reduced-motion: no-preference`. Each brick moves approximately 14–28 SVG units into its settled position, beginning at zero opacity and ending at opacity 1. Use alternating small horizontal offsets only where useful. No rotation, elastic bounce, falling physics, or overshoot. Use `transform` and `opacity` with `cubic-bezier(.22, 1, .36, 1)`. Wrap each brick in an SVG `<g>` with `transform-box: fill-box` and an explicit `transform-origin`; the base style is the fully visible settled artwork.

Suggested sequence:

1. 0–350ms: foundation lines and annotation gently fade in.
2. 120–1700ms: bricks arrive in grouped courses with 30–45ms stagger, 600–700ms each, bottom first. Compute delay from course plus a local stagger index of 0–3, rather than a running index across every brick. The last brick finishes within 2 seconds.
3. 300–850ms: hero descriptor, heading, description, and actions enter in small 10–16px rises with 60ms spacing. Text stays fully visible and immediately interactive throughout; use transform-only entrances, never opacity-zero text gating. The CTA is available from initial render and never waits on the illustration.
4. Once settled, the artwork becomes still. No parallax, perpetual bobbing, flashing, spinning, or looping construction. The finite construction effect supplies the signature without a continuous listener.

Provide a “Replay build” native button below the diagram with a small circular arrow. A small client island wraps only the decorative illustration; replay remounts a keyed inner SVG or increments its animation revision, retriggering only artwork, not text or scrolling. Keep the button mounted and focus unchanged. Hide the control by default and expose it only after hydration and only for users without reduced motion; no unavailable control appears without JavaScript. The settled artwork must be the default HTML/CSS state. Animation classes can exist only under `prefers-reduced-motion: no-preference`; content and artwork must survive script errors and unavailable JavaScript.

### Mobile

Stack headline/copy/actions, then artwork. Use a reduced 260–320px tall architectural canvas, not a hidden hero graphic. Keep the hero small enough that students reach its meaning quickly. The facts ledger stacks or becomes a three-row table. Avoid lateral pointer effects entirely on touch devices. No giant extra blank space reserved for desktop proportions.

## 3. About: your first brick

Use a split introduction: section number and large “You belong here” headline on the left; beginner-friendly explanation and organizer attribution on the right. Below, three spacious outlined cards build a visual sequence: start with your city, learn by doing, find your people. Use existing copy, tightened only when meaning stays unchanged.

Each card receives an original small line-art SVG, using brick units consistently: a block forming a location marker, offset code brackets, and three connected blocks. Each illustration is decorative; the title supplies the meaning. Show large `01`, `02`, `03` course numbers as decorative typographic accents.

When the row enters the viewport, cards make one 12px rise, with 80ms between cards. Avoid text blinking: use transform-only entrances or at most opacity 0.7 to 1, never initial hidden text. Hover/focus-within draws or fills one red unit in the miniature illustration and moves a thin top rule. These informational cards are not clickable: no pointer cursor, fake buttons, or keyboard focus added just for animation. Hover embellishment also receives a settled default on touch.

## 4. Schedule: three courses, one build

Make the schedule feel like three architectural stages instead of repeated feature cards. Preserve all preliminary disclaimers and existing Day 1–3 content.

Dark Soot section with generous padding. Desktop: three equal columns connected by a Brass hairline rail, numbered `01`, `02`, `03`, with concise stage headings. Each column includes its existing bullet list and a small stepped brick stack (one course, two courses, three courses). The rail draws once when visible; each stack assembles with the same bottom-first vocabulary as the hero but finishes in under 900ms. Keep Brass exclusive to this section; use Graphite and Limestone for the stack itself.

Mobile: vertical rail and stacked days. No horizontal carousel and no hidden schedule tabs; students can scan the entire preliminary schedule. Label “Preliminary schedule” clearly near the section title.

## 5. Venue: Newark as the home base

Use a quiet Limestone section, split between location copy and a designed venue card. The card contains a simple original outline of skyline/buildings, the Rutgers–Newark label, and the truthful pending-address message. Use Passaic as its sole supporting accent. This is an illustration, not a functioning map: no fake controls, false location pin, or invented address.

Keep arrival, transit, parking, and accessibility details pending in readable copy. Position the illustration so a real map can replace it when exact venue locations are confirmed. One gentle reveal on entry is sufficient; venue information does not need an ambient animation.

## 6. FAQ: editorial clarity

Use a two-column layout: section label/headline/short welcome on left, full FAQ accordion on right. Stack on small screens. Keep native `<details>` and `<summary>` semantics. Add a plus symbol built from two hairlines; the vertical line rotates 90 degrees or scales away over 180ms when open, becoming a minus. Keep answers immediate and readable; do not depend on animated `height: auto` support.

Improve row hit areas and spacing. No competing illustration needed here. Focus treatment must remain plainly visible, and the icon is decorative.

## 7. Registration: add your brick

Create a distinct invitation at the top: oversized “Build something for your city” headline, warm existing registration copy, and an edge pattern of thin red brick outlines. Keep text outside the pattern.

Retain the existing inline Typeform, its accessible iframe title, fixed reserved space, and permanently visible direct link. Put the embed inside an architectural frame with a small label “HackFest registration” and an external-form arrow/link. The whole frame does not move, animate, transform, or participate in scroll effects: embedded forms must remain easy to click, focus, and complete.

Any form loading behavior remains graceful and the normal fallback link stays accessible. Neither the form nor any ancestor wrapper receives a reveal selector or transform. Do not submit a real registration as part of QA. End the section with “Everyone builds.” as a concise invitation, not a fabricated promise.

## 8. Footer

Use a large but quieter HackFest wordmark, organizer attribution, Rutgers–Newark, existing registration link, and hashtags. Add a small completed brick motif tying the footer to the hero. No fake contact channels, empty sponsor slots, or invented policies. Add a “Back to top” link with a simple arrow as a real navigation aid.

## Implementation boundaries

- Keep `app/page.tsx` server-rendered where practical. Use a small client component for the hero replay and a single motion enhancement/observer layer. CSS handles the visual transitions. Existing Typeform stays its own client component.
- Prefer inline SVG plus CSS and the platform IntersectionObserver over introducing a full animation framework, WebGL, canvas, 3D models, or a new asset pipeline. Original vector geometry is sufficient for the signature effect.
- Viewport reveals must be fail-open. Server-rendered text is visible without JavaScript. Exactly one IntersectionObserver adds a one-shot animation class to already-visible selected elements; never leave headings, CTAs, or bodies hidden while waiting. Trigger once per section, then unobserve. Only decorative schedule stacks/rails may use full opacity staging.
- No continuous scroll listeners, progress lines, parallax, animation render loop, React state update on every scroll, or offscreen motion loop in this implementation.
- Use transform/opacity for motion; SVG dash offset can draw a few short architectural rules. Do not animate expensive large layout properties or run dozens of observers.
- SVG IDs must be unique if definitions/masks are used. Decorative diagrams have `aria-hidden` and must not intercept pointer events. Keep meaningful section headings and all actual link labels in HTML.
- Clean up observers and motion preference listeners on unmount. Animations survive development Strict Mode without duplicate listeners or broken replay state. Render identical initial HTML on server and client; reveal/replay availability changes happen after hydration.
- Keep geometry bounded: at most 48 hero bricks and approximately 18 schedule units. No new dependencies or third-party animation bundles.

## Acceptance criteria

1. At desktop width, the first screen clearly communicates HackFest, Building Newark, three days, Rutgers–Newark, beginner welcome, date status, and registration; artwork feels equally intentional in its static and animated forms.
2. Check 320px, 390px, 768px, and approximately 1440px layouts: no horizontal overflow, clipped headings, hidden menu links, overlapping form controls, or excessive hero whitespace.
3. All page text, artwork, navigation, FAQ, registration link, and Typeform fallback remain accessible with JavaScript disabled or enhancement failure. Animation is decoration, never an access gate.
4. With reduced motion enabled, all visual elements appear settled, smooth scrolling is disabled, and there is no construction, reveal, or unnecessary replay tab stop. Parallax and continuous progress motion are omitted entirely.
5. Keyboard navigation reaches real actions in sensible order; informational cards never become fake controls. Focus styles, skip link, FAQ operation, and header anchor offsets continue to work.
6. Hero assembly completes in about 2 seconds, does not loop, and never delays registration. Reveal groups complete in under 700ms, with schedule stacks under 900ms.
7. Above-the-fold layout reserves artwork space. Registration frame reserves iframe space. There are no new third-party image/network dependencies or significant animation bundle additions.
8. Run lint and production build. Visually inspect first-load settled/animated views, replay, scroll reveals, mobile hero/nav, reduced motion, FAQ opening, and Typeform/fallback usability without submitting the form.

## Design review status

Principal product designer and principal software engineer agree on this plan. Engineering feedback has been incorporated: finite CSS/SVG choreography, static/fail-open defaults, no hidden text gating, hydrated motion-only replay, one cleaned-up observer, bounded geometry, responsive anchor offsets, and a stationary registration frame. No parallax or continuous scroll progress in this implementation. See `design-review.md` for the engineering review.
