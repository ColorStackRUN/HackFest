// Confirm event logistics here before publishing them across the site.
export const event = {
  name: "HackFest 2026",
  datesLabel: "November 6–8, 2026",
  location: "Rutgers–Newark",
  city: "Newark, New Jersey",
  registrationUrl: "https://form.typeform.com/to/kygPtOm3",
  typeformId: "kygPtOm3",
  description:
    "A three-day, beginner-friendly hackathon at Rutgers–Newark. Meet a team, learn new skills, and create a project together. No experience needed.",
};

export const navigation = [
  ["overview", "Overview"],
  ["schedule", "Schedule"],
  ["faq", "FAQ"],
] as const;

export const schedule = [
  {
    day: "Day 1",
    date: "Friday, November 6",
    title: "Meet & get started",
    items: [
      "Check-in and opening",
      "Team formation",
      "Workshops and project kickoff",
    ],
  },
  {
    day: "Day 2",
    date: "Saturday, November 7",
    title: "Create & learn",
    items: ["Project work", "Mentor support", "Testing and refinement"],
  },
  {
    day: "Day 3",
    date: "Sunday, November 8",
    title: "Share your project",
    items: [
      "Final project time",
      "Demos, judging, and awards",
      "Closing and community wrap-up",
    ],
  },
];

export const faqs = [
  {
    question: "What is a hackathon?",
    answer:
      "A hackathon is an event where you work with a team to turn an idea into a project. HackFest gives you three days to learn, create, and share.",
  },
  {
    question: "Do I need coding experience?",
    answer:
      "No experience needed. Beginners are welcome, and workshops and mentors will help you get started.",
  },
  {
    question: "Do I need to bring a team?",
    answer:
      "No. You can register on your own or with teammates. Team formation is planned for Friday.",
  },
  {
    question: "When and where is HackFest?",
    answer:
      "HackFest runs November 6–8, 2026 at Rutgers–Newark in Newark, New Jersey. Exact building and arrival details are coming soon.",
  },
  {
    question: "How do I register?",
    answer: "Use the form on this page or open the Typeform in a new tab.",
  },
];
