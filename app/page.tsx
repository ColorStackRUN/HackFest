import { event, faqs, navigation, schedule } from "../lib/event";
import RegistrationForm from "./components/registration-form";
import BrickCity from "./components/brick-city";
import MotionEnhancer from "./components/motion-enhancer";
import BrickTransition from "./components/brick-transition";
import {
  BrickMark,
  CardArt,
  CourseStack,
  Skyline,
} from "./components/architectural-art";

const features = [
  {
    variant: "city",
    label: "build",
    title: "Start with your city",
    copy: "Think about a Newark problem you care about. Work with your team to explore an answer and build a prototype.",
  },
  {
    variant: "code",
    label: "learn",
    title: "Learn by doing",
    copy: "Workshops and mentors help you move from an idea to something you can show. No experience needed.",
  },
  {
    variant: "people",
    label: "meet",
    title: "Find your people",
    copy: "Meet other students, form a team, and share what you learn. You don’t have to arrive with everything figured out.",
  },
] as const;

export default function Home() {
  return (
    <>
      <MotionEnhancer />
      <BrickTransition />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#top">
            <BrickMark />
            <span>
              {event.name}
              <small>gwc x csrun</small>
            </span>
          </a>
          <nav className="nav" aria-label="Main">
            {navigation.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <a className="btn btn-primary header-register" href="#register">
            Register{" "}
            <span className="button-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
        <nav className="mobile-nav container" aria-label="Mobile sections">
          {navigation.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      </header>
      <main id="main" tabIndex={-1}>
        <section className="hero" id="top" aria-labelledby="hero-heading">
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="hero-kicker">
                <span className="status-square" aria-hidden="true" /> STUDENT
                BUILT. CITY INSPIRED.
              </div>
              <h1 id="hero-heading">
                Building
                <br />
                <span className="accent">Newark.</span>
              </h1>
              <p className="hero-tagline">{event.tagline}</p>
              <p className="lede">{event.description}</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#register">
                  Register for HackFest{" "}
                  <span className="button-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
                <a className="text-link" href="#about">
                  Explore the event <span aria-hidden="true">↓</span>
                </a>
              </div>
              <p className="date">
                {event.datesLabel} <span aria-hidden="true">/</span> 2026
              </p>
            </div>
            <BrickCity />
          </div>
          <div className="container">
            <dl className="event-facts">
              <div>
                <dt>01 / The experience</dt>
                <dd>
                  Three days.<small>Meet. Make. Share.</small>
                </dd>
              </div>
              <div>
                <dt>02 / Our home</dt>
                <dd>
                  {event.location}
                  <small>Building with your city.</small>
                </dd>
              </div>
              <div>
                <dt>03 / Your starting point</dt>
                <dd>
                  Everyone builds.<small>No experience needed.</small>
                </dd>
              </div>
            </dl>
          </div>
          <Skyline />
        </section>
        <section
          className="section section-light"
          id="about"
          aria-labelledby="about-heading"
        >
          <div className="container">
            <div className="section-intro" data-reveal>
              <div>
                <span className="label">{"// 01 / your first brick"}</span>
                <h2 id="about-heading">
                  You belong
                  <br />
                  <span className="accent">here.</span>
                </h2>
              </div>
              <div className="intro-copy">
                <p>
                  HackFest brings students together to build tech that helps
                  Newark. Come solo or bring a team. First hackathon? Good.
                  We&apos;ll get you set up.
                </p>
                <p>
                  A hackathon is a chance to turn an idea into a prototype with
                  other people. You learn as you go, try things out, and share
                  what you made.
                </p>
                <p className="organizer-line">
                  Girls Who Code x ColorStack RU-N
                </p>
              </div>
            </div>
            <div className="grid-3 feature-grid" data-reveal>
              {features.map(({ variant, label, title, copy }, index) => (
                <article className="card" key={variant}>
                  <div className="card-top">
                    <span className="card-number" aria-hidden="true">
                      0{index + 1}
                    </span>
                    <span className="label">{`// ${label}`}</span>
                  </div>
                  <CardArt variant={variant} />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          className="section section-dark"
          id="schedule"
          aria-labelledby="schedule-heading"
        >
          <div className="container">
            <div className="section-intro" data-reveal>
              <div>
                <span className="label">{"// 02 / the build"}</span>
                <h2 id="schedule-heading">
                  Three days.
                  <br />
                  One <span className="accent">community.</span>
                </h2>
              </div>
              <div className="intro-copy">
                <span className="schedule-status">Preliminary schedule</span>
                <p>
                  A first look at the event. Dates, times, and daily attendance
                  details will be announced here.
                </p>
              </div>
            </div>
            <div className="grid-3 schedule-grid" data-reveal>
              {schedule.map(({ day, title, items }, index) => (
                <article className="day-card" key={day}>
                  <div className="day-node" aria-hidden="true">
                    0{index + 1}
                  </div>
                  <CourseStack level={index + 1} />
                  <span className="when">{day}</span>
                  <h3>{title}</h3>
                  <ul>
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          className="section section-light"
          id="venue"
          aria-labelledby="venue-heading"
        >
          <div className="container venue-layout">
            <div data-reveal>
              <span className="label">{"// 03 / our home base"}</span>
              <h2 id="venue-heading">
                Built in
                <br />
                Brick <span className="accent">City.</span>
              </h2>
              <p className="measure">
                {event.location} is our home base. Exact venue locations and
                arrival instructions are coming soon.
              </p>
            </div>
            <aside
              className="info-panel"
              aria-label="Venue details"
              data-reveal
            >
              <div className="venue-card-top">
                <span className="label">newark, new jersey</span>
                <span aria-hidden="true">↗</span>
              </div>
              <Skyline venue />
              <h3>See you at Rutgers–Newark.</h3>
              <p>
                Building addresses, check-in entrances, transit and parking
                information, and accessibility details will be shared here once
                confirmed.
              </p>
              <div className="venue-status">
                <span className="status-square" aria-hidden="true" /> Venue
                details coming soon
              </div>
              <p className="small-copy">
                Check back before making travel plans.
              </p>
            </aside>
          </div>
        </section>
        <section
          className="section section-light faq-section"
          id="faq"
          aria-labelledby="faq-heading"
        >
          <div className="container faq-layout">
            <div data-reveal>
              <span className="label">{"// 04 / good questions"}</span>
              <h2 id="faq-heading">
                Before you
                <br />
                <span className="accent">build.</span>
              </h2>
              <p>First hackathon? Start here.</p>
            </div>
            <div className="faq-list">
              {faqs.map(({ question, answer }, index) => (
                <details key={question}>
                  <summary>
                    <span className="faq-number" aria-hidden="true">
                      0{index + 1}
                    </span>
                    <span>{question}</span>
                    <span className="faq-plus" aria-hidden="true" />
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section
          className="section register-section"
          id="register"
          aria-labelledby="register-heading"
        >
          <div className="container">
            <div className="registration-intro">
              <div>
                <span className="label">{"// 05 / add your brick"}</span>
                <h2 id="register-heading">
                  Your idea.
                  <br />
                  Your city.
                  <br />
                  Your <span className="accent">start.</span>
                </h2>
              </div>
              <div className="intro-copy">
                <p>
                  Build something for your city. Start with the HackFest
                  registration form below.
                </p>
                <p className="registration-fallback">
                  <a
                    href={event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open registration form in a new tab ↗
                  </a>
                </p>
                <BrickMark />
              </div>
            </div>
            <div className="registration-frame">
              <div className="form-frame-label">
                <span>HACKFEST / REGISTRATION</span>
                <span aria-hidden="true">01 — LET’S BUILD</span>
              </div>
              <RegistrationForm />
            </div>
            <p className="form-note">
              Registration is hosted by Typeform. If the embedded form
              doesn&apos;t load, use the link above.
            </p>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-head">
            <span className="footer-wordmark">Everyone builds.</span>
            <BrickMark />
          </div>
          <div className="footer-inner">
            <div>
              <p>
                {event.name} · GWC x CSRUN · {event.location}
              </p>
              <p>#HackFest2026 #BuildingNewark</p>
            </div>
            <div className="footer-links">
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Registration ↗
              </a>
              <a href="#top">Back to top ↑</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
