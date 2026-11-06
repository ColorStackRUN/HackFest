import Link from "next/link";
import { BrickMark } from "./components/architectural-art";

export default function Home() {
  return (
    <div className="announcement-page">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="announcement-header container">
        <Link className="wordmark" href="/" aria-label="HackFest home">
          <BrickMark />
          <span>HackFest<small>Rutgers–Newark</small></span>
        </Link>
        <span className="announcement-label">An event update</span>
      </header>

      <main id="main" className="announcement-main container" tabIndex={-1}>
        <article className="announcement" aria-labelledby="announcement-heading">
          <p className="hero-kicker">NEW SEASON. SAME COMMUNITY.</p>
          <h1 id="announcement-heading">HackFest is moving to <span>spring.</span></h1>
          <div className="announcement-copy">
            <p>
              We’ve made the difficult decision to postpone HackFest to the spring
              semester to give it the time and planning it deserves. We’re excited
              to bring everyone together and make the event worth the wait.
            </p>
            <p className="announcement-date">New date and details to come.</p>
          </div>

          <aside className="registrant-note" aria-labelledby="registrant-heading">
            <p className="announcement-label">To our early supporters</p>
            <h2 id="registrant-heading">Already registered? Check your inbox.</h2>
            <p>
              Registration for the spring event will open separately. Since you
              signed up early, we’ll send you an early link to re-register before
              it opens to everyone, and you’ll get something extra when we’re
              back. We’re keeping the details under wraps for now.
            </p>
          </aside>

          <div className="announcement-updates">
            <p>Follow along for the new date and details as soon as they’re confirmed.</p>
            <a
              className="btn btn-primary"
              href="https://www.instagram.com/hackfest2026/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @hackfest2026 on Instagram
              <span className="button-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="announcement-thanks">Thank you for your patience. We can’t wait to see you in the spring.</p>
        </article>
      </main>

      <footer className="announcement-footer container">
        <BrickMark />
        <p>ColorStack × Girls Who Code <span>@ Rutgers–Newark</span></p>
      </footer>
    </div>
  );
}
