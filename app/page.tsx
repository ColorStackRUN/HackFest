const schedule = [
  ["day 1 · tba", "Check-in, opening, team formation"],
  ["day 1 · tba", "Hacking starts. Workshops all afternoon"],
  ["day 2 · tba", "Mentor rounds and demos"],
  ["day 3 · tba", "Final demos, judging, winners, and closing"],
];

const faqs = [
  ["Do I need coding experience?", "No. Beginners are welcome, and we'll have workshops and mentors to help."],
  ["Who can join?", "Students. Add the exact eligibility rules here."],
  ["Does it cost anything?", "Add the answer here."],
];

function BrickGrid() {
  return (
    <svg className="brick-grid" aria-hidden="true" preserveAspectRatio="xMaxYMin slice" viewBox="0 0 1200 600">
      <defs>
        <pattern id="bricks" width="80" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 0H80M0 20H80M0 0V20M40 20V40" fill="none" stroke="#2B2D31" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="1200" height="600" fill="url(#bricks)" />
      <rect x="880" y="80" width="40" height="20" fill="#A3302A" />
      <rect x="960" y="120" width="40" height="20" fill="#A3302A" />
      <rect x="1040" y="60" width="40" height="20" fill="#A3302A" />
      <rect x="1000" y="180" width="40" height="20" fill="#5E1A17" />
    </svg>
  );
}

function Skyline() {
  return (
    <svg className="skyline" aria-hidden="true" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0 120V90h60V60h40v30h30V40h20V20h10v20h20v50h40V70h60v50h20V30h12V10h8v20h12v90h40V50h50v40h30V65h45v55h25V25h10V5h6v20h10v95h40V80h70V55h30v65h35V45h45v75h30V75h55V35h15V15h8v20h12v85h40V60h60v60H0z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#top">HackFest 2026<small>gwc x csrun</small></a>
          <nav className="nav" aria-label="Main">
            <a href="#about">About</a><a href="#schedule">Schedule</a><a href="#sponsors">Sponsors</a><a href="#faq">FAQ</a>
          </nav>
          <a className="btn btn-primary" href="#register">Register</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <BrickGrid />
          <div className="container hero-content">
            <span className="date">// dates tba · rutgers–newark</span>
            <h1>Building <span className="accent">Newark</span></h1>
            <p className="lede">Brick by brick, byte by byte. Build something for your city with students who are doing the same. No experience needed.</p>
            <div className="hero-actions"><a className="btn btn-primary" href="#register">Register</a><a className="btn btn-ghost" href="#about">Learn more</a></div>
          </div>
          <Skyline />
        </section>

        <section className="section section-light" id="about">
          <div className="container"><span className="label">// 01 / about</span><h2>You belong <span className="accent">here</span></h2>
            <p className="measure">HackFest is a three-day event for building tech that helps Newark. Come solo or bring a team. First hackathon? Good. We&apos;ll get you set up.</p>
            <div className="grid-3">
              <article className="card"><span className="label">// build</span><h3>Make something real</h3><p>Pick a problem in your city and build a working answer with your team.</p></article>
              <article className="card"><span className="label">// learn</span><h3>Start from zero</h3><p>Workshops and mentors walk you through it. You don&apos;t need to know how to code yet.</p></article>
              <article className="card"><span className="label">// meet</span><h3>Find your people</h3><p>Meet students, sponsors, and builders from across Rutgers–Newark.</p></article>
            </div>
          </div>
        </section>

        <section className="section section-dark" id="schedule"><div className="container"><span className="label">// 02 / schedule</span><hr className="rule-brass" /><h2>The weekend</h2>
          <ul className="schedule">{schedule.map(([when, item]) => <li key={`${when}-${item}`}><span className="when">{when}</span><span>{item}</span></li>)}</ul>
        </div></section>

        <section className="section section-light" id="sponsors"><div className="container"><span className="label">// 03 / sponsors</span><h2>Who&apos;s building with us</h2><p>Sponsor logos go here in their original colors. Never recolor a sponsor logo.</p>
          <div className="sponsors">{Array.from({ length: 4 }, (_, index) => <div className="sponsor-slot" key={index}>logo</div>)}</div>
        </div></section>

        <section className="section section-light faq-section" id="faq"><div className="container"><span className="label">// 04 / faq</span><h2>Questions</h2>
          {faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
        </div></section>

        <section className="register-band" id="register"><div className="container"><h2>Build something for your city</h2><p>Registration opens Sep 21.</p><a className="btn" href="#">Register</a></div></section>
      </main>
      <footer className="site-footer"><div className="container footer-inner"><span>HackFest 2026 · GWC x CSRUN · Rutgers–Newark</span><span>#HackFest2026 #BuildingNewark</span></div></footer>
    </>
  );
}
