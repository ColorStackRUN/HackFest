# HackFest 2026 website review and suggestions

Reviewed October 7, 2026, against the current local homepage and implementation.

## Overall assessment

The site has a clear identity: the Newark theme, brick motif, restrained palette, generous spacing, and welcoming language fit together well. Keep that foundation. The larger gap is content: visitors get a sense of the event's personality but cannot yet confidently plan attendance or complete registration.

The homepage should answer five questions quickly: What is HackFest? When and where is it? Can I participate? What will I get out of it? How do I sign up?

These are recommendations, not confirmed event policies. Organizers should approve dates, eligibility, benefits, prizes, and logistics before they appear publicly. Suggested tracks and copy below are proposals.

## Confirmed integration direction

- Registration already uses Typeform: [HackFest registration](https://form.typeform.com/to/kygPtOm3), form ID `kygPtOm3`.
- Prefer embedding that existing form in the registration section, with a permanently visible “Open registration form” link to the same URL. A direct link is also a suitable launch option if the embed has usability issues.
- Typeform supports inline and popup embeds, including a React library. Validate this particular form's availability and the full mobile/keyboard experience during implementation; its contents were not verified in this review. See the [official embed documentation](https://www.typeform.com/developers/embed/).
- Use Google Maps for venue locations. For a simple venue map, start with the [Maps Embed API](https://developers.google.com/maps/documentation/embed/get-started); only use a custom JavaScript map if multiple venue markers or interactions require it.
- Confirm exact venue addresses, check-in entrances, and which locations apply on each day before adding map pins. Keep written addresses and Google Maps directions links alongside each map.
- If using the Maps Embed API, configure the Google Cloud project and a domain/API-restricted key. An environment variable keeps the key out of source control, but a key delivered in an iframe URL is visible in the browser.

## Priority 1 — Resolve before promoting the site

### 1. Put essential event facts in the hero

- Identify HackFest explicitly as a three-day hackathon; “Building Newark” is a strong theme but does not explain the event by itself.
- Replace “dates tba” with the confirmed dates, including the year.
- Include the venue/building, Newark location, and in-person/online format once confirmed.
- Show participation cost and eligibility in a compact facts row when approved.
- Keep “No experience needed” prominent.
- Expand GWC and CSRUN somewhere near the introduction so newcomers understand who is hosting.

Suggested introductory copy: “A three-day hackathon at Rutgers–Newark. Meet a team, learn new skills, and build something for your city. No experience needed.”

### 2. Make registration a complete journey

The header and hero Register links lead to the registration section, but the final Register button uses `href="#"`, taking visitors back to the top. This is the most urgent functional issue.

- Connect the final button to the existing Typeform at `https://form.typeform.com/to/kygPtOm3`, and ensure every registration CTA has an intentional destination.
- Make the CTA match the process: “Register” for registration, “Apply” for an application with selection, or an accurate closed/waitlist state.
- Replace “Registration opens Sep 21.” That date is already past as of this review; confirm the current registration state.
- Publish the deadline, time zone, and what happens after submission: confirmation, acceptance timing if applicable, and next steps.
- If embedding Typeform, include a clearly labeled direct link as a fallback, reserve space for the embed, and check the experience on phones and with a keyboard.
- Explain any eligibility checks, team-registration steps, and information attendees need to prepare.
- Add an organizer contact for registration problems.

### 3. Remove public editing instructions and placeholders

- Replace “Sponsor logos go here in their original colors. Never recolor a sponsor logo.” with a short thank-you message and approved logos.
- Replace the four “logo” boxes, or temporarily omit them if sponsors are not confirmed.
- Replace “Students. Add the exact eligibility rules here.” with approved eligibility requirements.
- Replace “Add the answer here.” with the actual cost policy.
- Keep internal branding instructions in documentation rather than public page copy.
- Avoid announcing benefits or guests before organizers have confirmed them.

### 4. Add venue and attendance logistics

- Provide the full address, building name, check-in entrance, and room or floor if relevant.
- Include arrival instructions, transit options, parking guidance, and an accessible entrance/contact.
- Add an “Open directions” link; a map can supplement the written directions.
- Explain whether this is continuous overnight hacking or three separate daily sessions. Three days should not imply 72 hours of hacking unless that is actually the plan.
- State opening/closing hours, overnight access, and whether attendees may leave and return.
- Clarify travel reimbursement, lodging, meals, and dietary accommodations when known, including when support is unavailable.
- List what to bring, such as a laptop, charger, and any required identification.

## Priority 2 — Help students decide to attend

### 5. Explain the hackathon experience in concrete terms

“Make something real,” “Start from zero,” and “Find your people” are inviting, but broad. Add a short explanation of what participants actually do: form a team, pick a problem, attend workshops, work with mentors, and present a prototype.

- Explain what a hackathon is in plain language for first-time participants.
- Clarify whether design, research, presentation, and noncoding contributions are welcome.
- Explain how solo attendees find a team and how beginners receive support.
- Describe the expected final deliverable and whether unfinished prototypes can be presented.
- If confirmed, describe workshops, mentorship, social activities, meals, and participant benefits.

### 6. Make “Building Newark” actionable

Add a small set of locally relevant challenge areas, each with a sentence and an example problem. Possible organizer-reviewed directions include:

- **Getting around:** tools that help residents navigate transit or access nearby resources.
- **Learning and opportunity:** projects that connect students with learning, mentorship, or community opportunities.
- **Neighborhood life:** tools supporting local businesses, events, and community connections.
- **Environment and public spaces:** projects that help people understand or improve local conditions.

Clarify whether these are optional prompts or mandatory competition tracks, and whether teams may bring their own ideas. Avoid assuming access to city datasets or partnerships. Connect each approved prompt to a real Newark need where possible.

### 7. Publish a usable three-day schedule

The current four rows show a broad sequence, but not enough detail to plan attendance.

- Group events by the actual date and Day 1, Day 2, and Day 3.
- Include start/end times and a time zone; distinguish event hours from hacking hours.
- Identify mandatory milestones: check-in, kickoff, submission deadline, demos, judging, and closing.
- Add workshop, mentorship, meal, and social blocks when confirmed.
- Label a preliminary schedule clearly, and add a last-updated date if changes are expected.
- Once dates and times are final, add an event calendar download or link.
- Reconsider “The weekend” if the confirmed dates do not fit that description.

### 8. Expand the FAQ around real attendance decisions

Keep answers short and specific. Cover:

- What is a hackathon, and what will I make?
- Who is eligible, including students outside Rutgers, age requirements, and student status?
- Do I need experience, a team, or an idea beforehand?
- How large can teams be, and how does team formation work?
- Does it cost anything, and what is included?
- Must I attend all three days, and is overnight participation possible?
- What should I bring, and is any equipment provided?
- What accessibility and dietary accommodations are available, and how do I request them?
- What are the project/submission rules, including pre-existing work and AI tools?
- How do judging and prizes work, if applicable?
- Who should I contact with a question?

Do not leave unanswered FAQ entries on the public site. Use a contact route for details still being finalized.

### 9. Build confidence with real people and evidence

- Show authentic RU-N students and Newark locations, with permission to use the images.
- Add a brief previous-event recap, approved participant quote, or past project example if material is available.
- Identify the organizing clubs in full and link their official channels.
- Feature confirmed mentors, workshop leaders, or speakers with relevant expertise rather than empty profile cards.
- Use participant counts or prize totals only when verified; distinguish past attendance from a future target.

### 10. Give sponsors a useful path

- Display confirmed sponsor logos with descriptive names and links, respecting their approved treatments.
- Add a short explanation of how their support helps attendees, when accurate.
- Add “Sponsor HackFest” with an organizer email or approved sponsorship document.
- Provide a separate route for mentors or volunteers if recruitment is active.
- Keep the attendee registration action most prominent.

### 11. Add contact and community information

The footer currently has event attribution and hashtags but no actionable links.

- Add an official organizer email and verified social/community links.
- Include an applicable code of conduct and a way to report concerns; confirm the policy and responsible contact.
- Explain where registered participants receive announcements and schedule changes.
- Include an appropriate privacy notice for registration data and third-party embeds.
- Use descriptive link labels and only display affiliations that are confirmed.

## Suggested homepage order

1. Hero: event identity, three-day dates, location, registration status, primary CTA.
2. Quick facts: eligibility, format, cost, and what attendees can expect.
3. About: beginner-friendly explanation and the Newark mission.
4. Challenges: approved local prompts and project expectations.
5. Experience: confirmed workshops, mentors, community activities, and past-event evidence.
6. Three-day schedule.
7. Venue and getting there.
8. Sponsors and partnership contact.
9. FAQ.
10. Registration section with deadline, form, and next steps.
11. Footer with organizer contact, community links, and policies.

Combine short sections where useful. The goal is a page that answers questions, not a long page for its own sake.

## Priority 3 — Improve usability and presentation

### 12. Preserve the brand while improving readability

- Keep the palette, typography, skyline, and restrained editorial treatment.
- Reduce or mask the brick grid behind small hero copy; the design language specifically avoids bricks behind small text.
- Give the hero one dominant accent. It currently uses both red elements and a brass date, despite the one-accent direction.
- Increase contrast for Steel section labels on Limestone; the brand reserves Steel on light backgrounds for decoration.
- Reassess the large whitespace between sparse sections as real content is added. Space should support hierarchy rather than amplify placeholders.
- Use photos as evidence of the community, with the approved black-and-white/red treatment where appropriate.

### 13. Make navigation and interactions accessible

- Provide mobile section navigation: the current CSS hides the desktop nav below 720px without a replacement.
- Add section scroll offsets so the sticky header does not cover anchored headings.
- Add a skip-to-content link and visible keyboard focus indicators.
- Check narrow-screen header spacing, text wrapping, and touch targets.
- Keep the native expandable FAQs, and verify keyboard operation.
- Respect reduced-motion preferences; smooth scrolling is currently unconditional.
- Ensure logos and meaningful photos have useful alternative text while decorative motifs stay hidden from assistive technology.
- Verify map/form embeds remain usable and provide ordinary links when they fail.

### 14. Improve link previews and ongoing maintenance

- Add a branded share image, favicon, and social metadata before promotion.
- Include approved dates/location in search metadata after confirmation.
- Centralize event facts so the hero, schedule, FAQ, registration section, and metadata stay consistent.
- Separate schedule, FAQ, and sponsor content into readable data structures as they grow.
- Format the compressed CSS for collaborative editing and keep brand tokens in a clear dedicated section or file.
- Fix or remove the `lint` script's missing ESLint configuration before relying on it as a project check.
- Document environment variable names without committing credentials. For browser map keys, apply provider-supported domain/API restrictions; browser-delivered keys are visible to visitors.

## Recommended implementation sequence

**First:** confirm logistics and policies, fix registration, remove placeholders, complete essential FAQ answers, and add a contact route.

**Next:** add Newark challenge prompts, a usable schedule, venue directions, authentic community evidence, and confirmed sponsors.

**Then:** refine mobile navigation/accessibility, add share assets, embed the existing Typeform with a direct-link fallback, add Google Maps for confirmed venues, and organize shared event content for maintenance.

## Launch acceptance checklist

- [ ] A first-time visitor can identify the event, dates, location, eligibility, and cost quickly.
- [ ] Registration works from every CTA and explains what happens next.
- [ ] No stale registration date, public editing note, fake statistic, or placeholder logo remains.
- [ ] The schedule explains all three days and any overnight rules.
- [ ] Venue directions and organizer contact details are usable.
- [ ] FAQ answers and policies are approved and consistent with registration.
- [ ] Phone, keyboard, reduced-motion, and embed-fallback experiences have been checked.
- [ ] Shared links show the correct event title, description, and branded image.
