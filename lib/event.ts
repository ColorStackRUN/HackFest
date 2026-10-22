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
    latitude: 40.74233244122659,
    longitude: -74.17592093028567,
  },
] as const;

// Walking path traced from the supplied campus map, from check-in to the campus center.
// Coordinates use GeoJSON order: longitude, latitude.
export const venueWalkingPath: [number, number][] = [
  [venues[0].longitude, venues[0].latitude],
  [-74.1725610, 40.7404227],
  [-74.1724334, 40.7406854],
  [-74.1728551, 40.7407883],
  [-74.1731242, 40.7408744],
  [-74.1734738, 40.7409900],
  [-74.1736708, 40.7410446],
  [-74.1737069, 40.7410677],
  [-74.1739566, 40.7411244],
  [-74.1740148, 40.7411518],
  [-74.1739982, 40.7412484],
  [-74.1741175, 40.7412736],
  [-74.1741841, 40.7413177],
  [-74.1742867, 40.7413576],
  [-74.1746197, 40.7414480],
  [-74.1746807, 40.7414228],
  [-74.1747251, 40.7413786],
  [-74.1747640, 40.7413240],
  [-74.1748472, 40.7412610],
  [-74.1749637, 40.7412862],
  [-74.1750997, 40.7413156],
  [-74.1753605, 40.7414018],
  [-74.1754576, 40.7414480],
  [-74.1755158, 40.7414984],
  [-74.1755991, 40.7415404],
  [-74.1757767, 40.7415971],
  [-74.1757822, 40.7416476],
  [-74.1757683, 40.7417253],
  [-74.1757600, 40.7417694],
  [-74.1757212, 40.7418093],
  [-74.1757184, 40.7418534],
  [-74.1758016, 40.7418871],
  [-74.1758183, 40.7418639],
  [-74.1758571, 40.7418618],
  [-74.1758960, 40.7419165],
  [-74.1758099, 40.7420698],
  [-74.1757822, 40.7421371],
  [-74.1758460, 40.7421560],
  [venues[1].longitude, venues[1].latitude],
];

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
