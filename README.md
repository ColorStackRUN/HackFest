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
│   └── globals.css      ← visual system and responsive styles
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
2. Update page content in `app/page.tsx`.
3. Keep color, typography, layout, and component styling in `app/globals.css`.
4. Test the production build before merging:

   ```bash
   npm run build
   ```

5. Commit with a short message that says what changed, e.g. `Add sponsor logos`.

## Integrations

- Use environment variables for any map API key; do not commit keys into the repository.
- When the registration form is ready, replace the Register button's placeholder link in `app/page.tsx` with the hosted form URL.

## Before launch (TODO)

- [ ] Final event dates (see Marketing Tracker)
- [ ] Final tagline (Open Decision, due before theme reveal)
- [ ] Registration form link in the Register buttons
- [ ] Real sponsor logos in `assets/images/`
- [ ] Final logo lockup (HackFest 2026 wordmark, "GWC x CSRUN" underneath)
- [ ] FAQ answers
- [ ] Real student photos (no stock photos)
