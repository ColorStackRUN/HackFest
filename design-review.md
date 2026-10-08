# Engineering review — Building Newark, in motion

This records the initial designer/engineer agreement. Subsequent user-requested changes replaced the 41-brick skyline with masonry lettering, added boundary-only transitions, and introduced pausable idle motion and hover replay. The original 48-group and finite-only limits below describe that initial proposal, not the final implementation. Current behavior is documented in `design-plan.md` and `README.md`; these follow-ups were verified locally, not reviewed again by the two original agents.

Reviewed the product design proposal against the current Next.js page, CSS, event data, and Typeform component. The proposal is feasible with native SVG/CSS and a small client enhancement layer. The architectural brick assembly provides a distinctive visual centerpiece without requiring a 3D renderer or animation dependency.

## Agreed implementation boundaries

- Keep the page and meaningful content server-rendered. Hero replay and page motion enhancement are small client islands; the existing Typeform component remains separate.
- Build at most 48 hero brick groups. Animate transforms and opacity, with explicit SVG transform geometry. Delay by course and a short local stagger, so the final brick settles within about two seconds.
- The static artwork is the base state. First-load CSS animation exists only inside `prefers-reduced-motion: no-preference`. Hero text and registration actions stay visible and usable from first render; text entrances use a small transform rather than disappearing.
- Replay remounts only the decorative SVG subtree using a revision key. Its native button becomes available after hydration for motion-enabled users. It neither resets hero text nor changes focus or scrolling. It is absent as a tab stop with reduced motion or unavailable JavaScript.
- A single IntersectionObserver enhances already-visible section elements, then unobserves them. No hidden pending state. Text animation uses transform only or a mild opacity change with no zero-opacity starting state. Decorative rules and stacks may draw/assemble once. Clean up the observer and media-query listeners.
- Omit parallax and a scroll progress bar in this iteration. The finite entrance, replay, stage assembly, and interaction details deliver the intended motion vocabulary without a continuous scroll loop.
- Keep Typeform, its frame, and all ancestors stationary: no entrance, transform, or scroll effect. Preserve its reserved space, title, and always-visible direct link.
- Use native FAQ details/summary with immediate answers, decorative plus/minus motion, and visible focus. Informational cards receive no fake button semantics or added tab stops.
- Validate the headline at 320px with a smaller mobile clamp. Give navigation at least 44px targets and match anchor offsets to the actual responsive sticky-header height.
- Add no animation packages or new remote illustration assets. Bound schedule artwork to approximately 18 units, avoid per-scroll React state, and preserve a reserved hero artwork aspect ratio.

## Tradeoffs

The art is a dimensional construction diagram rather than a physically rendered 3D scene. Strong composition, staggered assembly, and meticulous typography provide the polish while keeping the initial page inexpensive to render. The restrained post-build stillness also keeps attention on the event invitation and registration.

Fail-open reveals prioritize readable server output over concealing content until an observer fires. This may make the entrance subtler; the hero artwork remains the main animated spectacle.

## Acceptance checks

1. Lint and production build pass.
2. Inspect desktop and 320px/390px/768px layouts for overflow, readable copy, balanced illustration, and header anchor placement.
3. Inspect the first hero assembly, replay, one-time section reveals, mobile navigation, keyboard focus, and FAQ toggling.
4. With reduced motion, artwork is settled, smooth scrolling and motion are disabled, and replay introduces no tab stop.
5. With JavaScript disabled or enhancement failure, navigation, text, FAQ, artwork, and the direct registration link remain useful. Typeform itself can require JavaScript; the permanent link covers that case.
6. Verify the form remains clickable and keyboard accessible after scrolling and effects; do not submit a registration during QA.
7. No invented dates, addresses, participant totals, prizes, policies, or map controls are introduced. Preliminary content stays clearly labeled.

## Agreement

The principal product designer and principal software engineer explicitly agreed to the refinements above. The matching final revision is saved in `design-plan.md`, and implementation may proceed. This review approves the design and implementation approach; final visual and behavioral verification follows implementation.
