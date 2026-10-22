// Confirm event logistics here before publishing them across the site.
export const event = {
  name: "HackFest 2026",
  datesLabel: "November 6–8, 2026",
  location: "Rutgers–Newark",
  city: "Newark, New Jersey",
  registrationUrl: "https://form.typeform.com/to/kygPtOm3",
  typeformId: "kygPtOm3",
  registrationClosesAt: "2026-11-03T23:59:59-05:00",
  registrationClosesLabel: "November 3, 2026",
  description:
    "A three-day, beginner-friendly hackathon at Rutgers–Newark. Meet a team, learn new skills, and create a project together. No experience needed.",
};

export const lastYear = [
  ["150+", "Students"],
  ["13+", "Universities"],
  ["$3,500", "Cash prizes"],
] as const;

export const venues = [
  {
    id: "ihub",
    step: "01",
    role: "Check-in",
    name: "Rutgers iHub",
    address: "123 Washington Street",
    city: "Newark, NJ 07102",
    note: "Start here when you arrive.",
    latitude: 40.7403093,
    longitude: -74.1726026,
  },
  {
    id: "essex",
    step: "02",
    role: "The rest of the weekend",
    name: "Essex Room, Paul Robeson Campus Center",
    address: "350 Dr. Martin Luther King Jr. Blvd",
    city: "Newark, NJ 07102",
    note: "Come here after check-in.",
    latitude: 40.7413244,
    longitude: -74.1768739,
  },
] as const;

export function venueDirections(address: string, city: string) {
  const destination = encodeURIComponent(`${address}, ${city}`);
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
}

export const navigation = [
  ["overview", "Overview"],
  ["where", "Where"],
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
      "HackFest runs November 6–8, 2026 at Rutgers–Newark. Check in at the Rutgers iHub, 123 Washington Street. The rest of the weekend is in the Essex Room at the Paul Robeson Campus Center, 350 Dr. Martin Luther King Jr. Blvd. Daily hours and parking are still being confirmed.",
  },
  {
    question: "What are the prizes?",
    answer:
      "$3,500 in cash prizes, plus swag, tech giveaways, and career opportunities.",
  },
  {
    question: "How do I register?",
    answer: "Use the form on this page or open the Typeform in a new tab.",
  },
  {
    question: "What happens after I register?",
    answer:
      "We’ll reach out ahead of the event with the run of show and other details you need before you arrive.",
  },
];
