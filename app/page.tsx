import { event, faqs, navigation, schedule } from "../lib/event";
import RegistrationForm from "./components/registration-form";
import BrickCity from "./components/brick-city";
import { BrickMark, CourseStack, Skyline } from "./components/architectural-art";

const expectations = [
  {
    title: "Meet your team",
    copy: "Come with teammates or join team formation on Friday.",
  },
  {
    title: "Learn and create",
    copy: "Workshops and mentors will help you move from an idea to a project.",
  },
  {
    title: "Share your work",
    copy: "Present your project at the end of the weekend.",
  },
] as const;

export default function Home() {
  return (
    <>
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
            Register <span className="button-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
        <nav className="mobile-nav container" aria-label="Mobile sections">
          {navigation.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
          <a href="#register">Register</a>
        </nav>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero" id="top" aria-labelledby="hero-heading">
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="hero-kicker">NOVEMBER 6–8, 2026 · RUTGERS–NEWARK</p>
              <h1 id="hero-heading">HackFest 2026</h1>
              <p className="lede">{event.description}</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#register">
                  Register for HackFest
                  <span className="button-arrow" aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <BrickCity />
          </div>
          <div className="container">
            <dl className="event-facts">
              <div>
                <dt>Dates</dt>
                <dd>{event.datesLabel}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{event.location}</dd>
              </div>
              <div>
                <dt>Experience</dt>
                <dd>No experience needed</dd>
              </div>
            </dl>
          </div>
          <Skyline />
        </section>

        <section
          className="section section-light"
          id="overview"
          aria-labelledby="overview-heading"
        >
          <div className="container">
            <div className="section-intro">
              <h2 id="overview-heading">What to expect</h2>
              <p className="intro-copy">
                HackFest is a three-day student hackathon hosted by Girls Who
                Code x ColorStack RU-N. Come on your own or with teammates and
                turn an idea into a project with support along the way.
              </p>
            </div>
            <ol className="expect-list">
              {expectations.map(({ title, copy }) => (
                <li key={title}>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </li>
              ))}
            </ol>
            <aside className="event-status" aria-labelledby="status-heading">
              <h3 id="status-heading">Location and event details</h3>
              <p className="event-location">
                {event.location} · {event.city}
              </p>
              <p>
                The exact building, daily hours, eligibility, cost, overnight
                policy, parking, transit, and accessibility details are still
                being finalized. We’ll post confirmed information here.
              </p>
            </aside>
          </div>
        </section>

        <section
          className="section section-dark"
          id="schedule"
          aria-labelledby="schedule-heading"
        >
          <div className="container">
            <div className="section-intro">
              <h2 id="schedule-heading">Three-day schedule</h2>
              <div className="intro-copy">
                <span className="schedule-status">Preliminary</span>
                <p>
                  Session times and attendance details will be added when
                  confirmed.
                </p>
              </div>
            </div>
            <div className="schedule-grid">
              {schedule.map(({ day, date, title, items }, index) => (
                <article className="day-card" key={day}>
                  <div className="day-node" aria-hidden="true">0{index + 1}</div>
                  <CourseStack level={index + 1} />
                  <span className="when">{day}</span>
                  <p className="schedule-date">{date}</p>
                  <h3>{title}</h3>
                  <ul>
                    {items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section section-light faq-section"
          id="faq"
          aria-labelledby="faq-heading"
        >
          <div className="container faq-layout">
            <h2 id="faq-heading">Frequently asked questions</h2>
            <div className="faq-list">
              {faqs.map(({ question, answer }, index) => (
                <details key={question}>
                  <summary>
                    <span className="faq-number" aria-hidden="true">0{index + 1}</span>
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
              <h2 id="register-heading">Register for HackFest</h2>
              <div className="intro-copy">
                <p>Use the form below to register for HackFest 2026.</p>
                <p className="registration-fallback">
                  <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                    Open registration form in a new tab ↗
                  </a>
                </p>
              </div>
            </div>
            <div className="registration-frame">
              <div className="form-frame-label">HACKFEST 2026 / REGISTRATION</div>
              <RegistrationForm />
            </div>
            <p className="form-note">
              Registration is hosted by Typeform. If the embedded form doesn’t
              load, use the link above.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>HackFest 2026 · Girls Who Code x ColorStack RU-N · Rutgers–Newark</p>
          <div className="footer-links">
            <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
              Registration ↗
            </a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
