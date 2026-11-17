import './App.css'

// Ora landing page. Weekend 2 has this one screen only, no features yet.
// Brand rules: docs/brand-book.md
function App() {
  return (
    <main className="landing">
      <img
        className="landing__logo"
        src="/logo-light.svg"
        alt="Ora"
        width="330"
        height="200"
      />

      <h1 className="landing__tagline">Your salon, booked.</h1>

      <ul className="landing__translations">
        <li lang="sq">Sallonin tënd, i rezervuar.</li>
        <li lang="mk">Твојот салон, закажан.</li>
      </ul>

      <p className="landing__pitch">
        Ora gives every beauty salon its own branded online booking page, so
        clients book in 30 seconds and get a WhatsApp reminder, without the
        owner answering DMs all day.
      </p>

      {/* Placeholder only: the "Get Ora for your salon" form comes in a later weekend. */}
      <span className="landing__button" aria-disabled="true">
        Coming soon to your salon
      </span>

      <footer className="landing__footer">
        For hair, nails, lashes and barbers in Kosovo and North Macedonia.
      </footer>
    </main>
  )
}

export default App
