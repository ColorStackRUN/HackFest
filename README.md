# HackFest 2026 Website

**Building Newark.** Students building tech that builds up the city.
Hosted by GWC x CSRUN at Rutgers–Newark.

## Stack

This is a [Next.js](https://nextjs.org/) App Router site. It is designed to deploy directly to Vercel and leaves room for event integrations such as a registration form and a venue map.

```
hackfest-website/
├── app/
│   ├── layout.tsx       ← shared document layout and SEO metadata
│   ├── page.tsx         ← homepage content
│   ├── globals.css      ← layout and responsive styles
│   └── tokens.css       ← brand colors, fonts, and spacing
├── lib/event.ts         ← shared event facts, schedule, and FAQ
├── DESIGN.md            ← design rules for anyone editing the site
└── README.md            ← this file
```

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Making changes

1. Check `DESIGN.md` before adding anything new.
2. Update shared event facts, the preliminary schedule, and FAQs in `lib/event.ts`. Update section layout in `app/page.tsx`.
3. Keep brand tokens in `app/tokens.css` and layout/component styling in `app/globals.css`.
4. Test the production build before merging:

   ```bash
   npm run build
   ```

5. Commit with a short message that says what changed, e.g. `Add sponsor logos`.

## Motion and design

The agreed product design is in `design-plan.md`; engineering review and constraints are in `design-review.md`.

- `app/components/brick-city.tsx` builds mixed-case “HackFest” lettering with “2026” centered underneath. Adjacent glyph cells are joined into full-length bricks with staggered half-brick joints, thin outlines, signature-red fills, and a restrained 1.2-unit top/side edge. Brick runs stop at each glyph gap to preserve readability. CSS assembles the courses from bottom to top; the replay button remounts only the decorative SVG. Reduced-motion visitors receive the completed lettering.
- `app/components/motion-enhancer.tsx` uses one IntersectionObserver for visible, one-time section entrances. All content is readable before it runs.
- `app/components/architectural-art.tsx` contains the original line illustrations and schedule stacks.
- `app/components/brick-transition.tsx` provides a brief, three-course outline-brick seam only when a section boundary crosses 55% of the viewport. A finite 690ms CSS animation clears automatically, with a 900ms retrigger cooldown. One passive scroll listener batches boundary reads into animation frames; focused iframe interaction and reduced motion suppress the effect. No full-screen curtain, scroll locking, or scroll-driven React renders.
- Section entrances and rebuilds are finite. The hero lettering has a gentle 3px idle bob after assembly, a mouse-entry rebuild with a 2.3s retrigger cooldown, and explicit pause/resume and replay buttons. Pausing settles the lettering and suppresses hover rebuilds. Reduced motion disables animation and omits motion controls. No animation framework or 3D renderer is required. Registration and its frame stay stationary.

## Integrations

- Use environment variables for any map API key; do not commit keys into the repository.
- Registration uses the existing Typeform `kygPtOm3`, embedded through its official React library in `app/components/registration-form.tsx`. A direct link remains available above the form. Do not submit test registrations to the live form.
- Venue addresses are still unconfirmed. Add exact locations and Google Maps directions once approved; a campus-wide map should not imply a confirmed check-in location.
- Set `SITE_URL` to the final public URL for social-image links on non-Vercel hosting. On Vercel, the production/deployment URL environment variables provide the default automatically.
- Dates, cost, eligibility, overnight policies, sponsor assets, and organizer contacts still need approval. The three-day schedule is explicitly preliminary.

## Before launch (TODO)

- [ ] Final event dates (see Marketing Tracker)
- [ ] Final tagline (Open Decision, due before theme reveal)
- [ ] Registration form link in the Register buttons
- [ ] Real sponsor logos in `assets/images/`
- [ ] Final logo lockup (HackFest 2026 wordmark, "GWC x CSRUN" underneath)
- [ ] FAQ answers
- [ ] Real student photos (no stock photos)
