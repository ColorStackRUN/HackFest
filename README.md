# HackFest 2026 Website

A three-day, beginner-friendly hackathon at Rutgers–Newark, November 6–8, 2026.

Hosted by Girls Who Code x ColorStack RU-N.

## Stack

This is a [Next.js](https://nextjs.org/) App Router site designed for deployment to Vercel. Public event facts are server-rendered; only the Typeform embed requires client-side JavaScript.

```text
hackfest-website/
├── app/
│   ├── components/
│   │   ├── architectural-art.tsx  ← brick mark and schedule stacks
│   │   ├── brick-city.tsx         ← static decorative brick lettering
│   │   └── registration-form.tsx  ← Typeform client component
│   ├── globals.css                ← layout and responsive styles
│   ├── layout.tsx                 ← shared document layout and metadata
│   ├── opengraph-image.tsx        ← generated social image
│   ├── page.tsx                   ← content-first homepage
│   └── tokens.css                 ← brand colors and fonts
├── public/
│   └── brick-cursor.svg       ← desktop brick cursor
├── lib/event.ts                   ← shared event facts, schedule, and FAQ
├── DESIGN.md                      ← design rules for site changes
└── README.md                      ← this file
```

## Run locally

Use Node.js 20.9 or newer.

```bash
npm ci
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Making changes

1. Read `DESIGN.md` before changing presentation or voice.
2. Update confirmed facts, the preliminary schedule, and FAQs in `lib/event.ts`.
3. Update section structure in `app/page.tsx`, brand tokens in `app/tokens.css`, and layout styling in `app/globals.css`.
4. Keep the decorative `HackFest 2026` brick lettering static in the server output and optional motion CSS-only. Event facts must remain readable without decorative artwork.
5. Do not submit a test registration to the live Typeform.

## Verification

Run the repository contract before requesting review:

```bash
npm run lint
npm run typecheck
SITE_URL=http://127.0.0.1:3000 npm run build
SITE_URL=http://127.0.0.1:3000 npm run start -- -H 127.0.0.1 -p 3000
```

With the production server running, check the homepage, responsive layouts, keyboard focus, metadata, and generated Open Graph image. Confirm the direct Typeform link remains available when JavaScript is disabled.

## Integrations

- Registration uses Typeform `kygPtOm3` through `app/components/registration-form.tsx`, with a direct fallback link to `https://form.typeform.com/to/kygPtOm3`.
- Set `SITE_URL` to the public origin for correct absolute social-image URLs outside Vercel. Vercel deployment URL environment variables provide the default there.
- Exact location and arrival details must remain unpublished until confirmed.

## Launch checklist

Already present:

- [x] November 6–8, 2026 dates
- [x] Registration embed and direct link
- [x] Preliminary three-day schedule
- [x] Beginner welcome and FAQ

Still unconfirmed:

- [ ] Exact building, check-in entrance, and daily hours
- [ ] Eligibility, cost, overnight policy, and registration deadline
- [ ] Parking, transit, and accessibility details
- [ ] Organizer contact channel
- [ ] Sponsor assets and final logo lockup
