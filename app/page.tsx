import { event, faqs, lastYear, navigation, schedule } from "../lib/event";
import RegistrationForm from "./components/registration-form";
import VenueMap from "./components/venue-map";
import RegistrationCountdown from "./components/registration-countdown";
import BrickCursor from "./components/brick-cursor";
import BrickCity from "./components/brick-city";
import {
  BrickMark,
  CourseStack,
  CursorSkyline,
} from "./components/architectural-art";

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
      <BrickCursor />
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
          <div className="hero-brick-field" aria-hidden="true">
            {Array.from({ length: 12 }, (_, index) => (
              <span key={index} />
            ))}
          </div>
          <CursorSkyline />
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="hero-kicker">NOVEMBER 6–8, 2026 · RUTGERS–NEWARK</p>
              <h1 id="hero-heading">
                HackFest <span>2026</span>
              </h1>
              <p className="lede">{event.description}</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#register">
                  Register for HackFest
                  <span className="button-arrow" aria-hidden="true">↗</span>
                </a>
              </div>
              <p className="hero-hosts">Girls Who Code × ColorStack RU-N</p>
            </div>
            <div className="hero-aside">
              <div className="hero-lockup" aria-hidden="true">
                <span className="lockup-note">THREE DAYS · ONE WEEKEND</span>
                <BrickCity />
              </div>
              <RegistrationCountdown
                closesAt={event.registrationClosesAt}
                closesLabel={event.registrationClosesLabel}
              />
            </div>
          </div>
          <div className="container hero-facts-wrap">
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
        </section>

        <section
          className="section section-light overview-section"
          id="overview"
          aria-labelledby="overview-heading"
        >
          <div className="container">
            <span className="section-label">01 / YOUR WEEKEND</span>
            <div className="section-intro">
              <h2 id="overview-heading">
                What to <span className="accent">expect</span>
              </h2>
              <p className="intro-copy">
                HackFest is a three-day student hackathon hosted by Girls Who
                Code x ColorStack RU-N. Come on your own or with teammates and
                turn an idea into a project with support along the way. Prizes
                include $3,500 in cash, swag, tech giveaways, and career
                opportunities.
              </p>
            </div>
            <div className="last-year">
              <figure>
                <img
                  src="/hackfest-2025-check-in.jpg"
                  alt="Students checking in together at HackFest 2025, beside a HackFest ’25 poster."
                  width={1600}
                  height={933}
                />
                <figcaption>Check-in at HackFest 2025</figcaption>
              </figure>
              <div className="last-year-copy">
                <p className="facts-kicker">From HackFest 2025</p>
                <dl className="event-facts last-year-facts">
                  {lastYear.map(([value, label]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
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
              <span className="status-mark" aria-hidden="true">
                i
              </span>
              <div>
                <h3 id="status-heading">Still being confirmed</h3>
                <p className="event-location">
                  {event.location} · {event.city}
                </p>
                <p>
                  Daily hours, transit, eligibility, cost, and the
                  overnight policy are still being finalized. The buildings are
                  on the map below.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section
          className="section section-light where-section"
          id="where"
          aria-labelledby="where-heading"
        >
          <div className="container">
            <span className="section-label">02 / WHERE TO GO</span>
            <div className="section-intro">
              <h2 id="where-heading">
                Two <span className="accent">stops</span>
              </h2>
              <p className="intro-copy">
                Check in at the Rutgers iHub. The rest of HackFest is in the
                Essex Room at the Paul Robeson Campus Center, a short walk
                across campus.
              </p>
            </div>
            <VenueMap />
          </div>
        </section>

        <section
          className="section section-dark schedule-section"
          id="schedule"
          aria-labelledby="schedule-heading"
        >
          <div className="container">
            <span className="section-label">03 / FRIDAY → SUNDAY</span>
            <div className="section-intro">
              <h2 id="schedule-heading">
                Three-day <span className="accent">schedule</span>
              </h2>
              <div className="intro-copy">
                <span className="schedule-status">● Preliminary</span>
                <p>
                  Session times and attendance details will be added when
                  confirmed.
                </p>
              </div>
            </div>
            <div className="schedule-grid">
              {schedule.map(({ day, date, title, items }, index) => (
                <article className="day-card" key={day}>
                  <div className="day-node" aria-hidden="true">
                    0{index + 1}
                  </div>
                  <CourseStack level={index + 1} />
                  <span className="when">{day}</span>
                  <p className="schedule-date">{date}</p>
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
          className="section section-light faq-section"
          id="faq"
          aria-labelledby="faq-heading"
        >
          <div className="container">
            <span className="section-label">04 / ASK AWAY</span>
            <div className="faq-layout">
              <div className="faq-heading-wrap">
                <h2 id="faq-heading">
                  Frequently asked <span className="accent">questions</span>
                </h2>
                <p>Everything confirmed so far, in one place.</p>
              </div>
              <div className="faq-list">
                {faqs.map(({ question, answer, link }, index) => (
                  <details key={question}>
                    <summary>
                      <span className="faq-number" aria-hidden="true">
                        0{index + 1}
                      </span>
                      <span>{question}</span>
                      <span className="faq-plus" aria-hidden="true" />
                    </summary>
                    <p>
                      {answer}
                      {link ? (
                        <>
                          {" "}
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {link.label}
                          </a>
                          .
                        </>
                      ) : null}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="section register-section"
          id="register"
          aria-labelledby="register-heading"
        >
          <div className="container">
            <span className="section-label">05 / SAVE YOUR SPOT</span>
            <div className="registration-intro">
              <h2 id="register-heading">
                Register for <span className="accent">HackFest</span>
              </h2>
              <div className="intro-copy">
                <p>
                  Use the form below to register for HackFest 2026. Registration
                  closes {event.registrationClosesLabel}.
                </p>
                <p>
                  After you submit, we’ll reach out ahead of the event with the
                  run of show and other details you need before you arrive.
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
              </div>
            </div>
            <div className="registration-frame">
              <div className="form-frame-label">
                <span>HACKFEST 2026 / REGISTRATION</span>
                <span aria-hidden="true">● LIVE FORM</span>
              </div>
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
        <div className="container footer-banner" aria-hidden="true">
          HACKFEST
        </div>
        <div className="container footer-inner">
          <p>HackFest 2026 · Girls Who Code x ColorStack RU-N · Rutgers–Newark</p>
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
      </footer>
    </>
  );
}
