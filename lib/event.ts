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

// OSRM walking-route geometry from routing.openstreetmap.de/routed-foot,
// via the campus courtyard to the campus center's south approach.
// Stored locally so displaying the route requires no live routing request.
// Coordinates use GeoJSON order: longitude, latitude.
export const venueWalkingPath: [number, number][] = [
  [venues[0].longitude, venues[0].latitude],
  [-74.17262, 40.740315],
  [-74.172424, 40.740665],
  [-74.172524, 40.740696],
  [-74.172634, 40.740731],
  [-74.172804, 40.740783],
  [-74.17301, 40.740847],
  [-74.173354, 40.740953],
  [-74.173402, 40.740968],
  [-74.173466, 40.740987],
  [-74.173695, 40.741058],
  [-74.173918, 40.741127],
  [-74.174024, 40.74116],
  [-74.173986, 40.741239],
  [-74.174076, 40.741264],
  [-74.174145, 40.741281],
  [-74.174265, 40.741316],
  [-74.174398, 40.741357],
  [-74.174539, 40.741408],
  [-74.174625, 40.741441],
  [-74.174644, 40.741448],
  [-74.174668, 40.74141],
  [-74.174727, 40.741339],
  [-74.174838, 40.741251],
  [-74.175462, 40.74147],
  [-74.175785, 40.741583],
  [-74.17578, 40.741598],
  [-74.175754, 40.74167],
  [-74.175746, 40.741727],
  [-74.175755, 40.741774],
  [-74.175773, 40.741773],
  [-74.175791, 40.741776],
  [-74.175806, 40.741783],
  [-74.175819, 40.741793],
  [-74.175827, 40.741807],
  [-74.175829, 40.741822],
  [-74.175824, 40.741837],
  [-74.175882, 40.741856],
  [-74.175921, 40.741868],
  [-74.175778, 40.742126],
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
