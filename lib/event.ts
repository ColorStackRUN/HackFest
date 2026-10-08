// Confirm event logistics here before publishing them across the site.
export const event = {
  name: "HackFest 2026",
  theme: "Building Newark",
  tagline: "Brick by brick, byte by byte.",
  location: "Rutgers–Newark",
  datesLabel: "Dates to be announced",
  registrationUrl: "https://form.typeform.com/to/kygPtOm3",
  typeformId: "kygPtOm3",
  description:
    "A three-day hackathon at Rutgers–Newark. Meet a team, learn new skills, and build something for your city. No experience needed.",
};

export const navigation = [
  ["about", "About"],
  ["schedule", "Schedule"],
  ["venue", "Venue"],
  ["faq", "FAQ"],
] as const;

export const schedule = [
  {
    day: "Day 1",
    title: "Meet & get started",
    items: [
      "Check-in and opening",
      "Team formation",
      "Start building and explore workshops",
    ],
  },
  {
    day: "Day 2",
    title: "Build & learn",
    items: [
      "Continue your project",
      "Work with mentors",
      "Try, test, and refine your ideas",
    ],
  },
  {
    day: "Day 3",
    title: "Share what you built",
    items: [
      "Final demos",
      "Judging and awards",
      "Closing and community wrap-up",
    ],
  },
];

export const faqs = [
  {
    question: "What is a hackathon?",
    answer:
      "A hackathon is an event where you work with a team to turn an idea into a project. At HackFest, you have three days to learn, build, and share something that could help Newark.",
  },
  {
    question: "Do I need coding experience?",
    answer:
      "No experience needed. Beginners are welcome, and workshops and mentors will help you get started.",
  },
  {
    question: "Do I need to bring a team?",
    answer:
      "You can come solo or bring a team. Team formation is part of the preliminary Day 1 plan so you can meet other builders.",
  },
  {
    question: "Where do I register?",
    answer:
      "Use the Typeform in the registration section below. You can also open the same form in a separate tab.",
  },
  {
    question: "When and where will it happen?",
    answer:
      "HackFest 2026 is a three-day event at Rutgers–Newark. Exact dates, venue addresses, and arrival instructions will be announced here.",
  },
  {
    question: "Where can I find eligibility and attendance details?",
    answer:
      "Eligibility, participation cost, daily hours, and overnight arrangements are being finalized. Check back here for confirmed information before making travel plans.",
  },
];
