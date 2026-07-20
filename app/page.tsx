const outcomes = [
  { value: "$5.4M", label: "Projected customer-lifetime net profit impact", detail: "Led a pricing transformation across 300+ accounts with essentially zero regretted churn.", className: "metric-card metric-card-featured" },
  { value: "$625K+", label: "Ecommerce revenue", detail: "Built Onward Hound from zero across 20 SKUs and 32K+ units sold.", className: "metric-card" },
  { value: "46 → 1", label: "Reporting systems consolidated", detail: "Unified reporting supporting oversight of $800M in assets.", className: "metric-card" },
  { value: "32K+", label: "Consumer units sold", detail: "Hands-on marketplace operations, product development, sourcing, and growth.", className: "metric-card metric-card-wide" },
];

const missions = [
  { number: "01", title: "Build useful AI applications", text: "Turn real operating problems into practical, human-in-the-loop tools—and document what works.", status: "Building now" },
  { number: "02", title: "Grow Onward Hound", text: "Improve product, channel, supplier, and economic systems behind an established pet-products brand.", status: "Operating" },
  { number: "03", title: "Join the right operating team", text: "Apply pricing, commercial strategy, analytics, and founder judgment to consequential work.", status: "Exploring" },
];

const builds = [
  { eyebrow: "Build 001 · Live", title: "Will OS", text: "A public operating profile built to document outcomes, experiments, and the process of becoming a stronger AI-enabled builder.", tag: "Next.js · TypeScript · Vercel" },
  { eyebrow: "Build 002 · Next", title: "Customer Message Copilot", text: "A controlled workflow for classifying customer issues and drafting policy-aware responses for human approval.", tag: "AI workflow · Structured output" },
];

function ArrowIcon() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main>
      <nav className="site-nav">
        <div className="shell nav-inner">
          <a className="wordmark" href="#top" aria-label="Will McLaughlin home">W<span>.</span></a>
          <div className="nav-links">
            <a href="#outcomes">Outcomes</a><a href="#missions">Missions</a><a href="#builds">Builds</a><a href="#contact">Connect</a>
          </div>
          <div className="availability"><span className="status-dot" />Open to the right opportunity</div>
        </div>
      </nav>

      <section id="top" className="shell hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" />Commercial operator · Founder · AI builder</div>
          <h1>I turn complicated commercial problems into <span>practical systems.</span></h1>
          <p className="hero-lede">Pricing, revenue operations, analytics, and founder judgment—translated into measurable outcomes and increasingly, useful software.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#outcomes">Explore my work <ArrowIcon /></a>
            <a className="button button-secondary" href="#contact">Connect</a>
          </div>
        </div>

        <aside className="now-card">
          <div className="window-bar"><div className="traffic-lights"><i /><i /><i /></div><span>currently.app</span></div>
          <div className="now-content">
            <p className="now-label">Will McLaughlin</p><h2>Operator in build mode.</h2>
            <dl>
              <div><dt>Building</dt><dd>Useful AI applications</dd></div>
              <div><dt>Operating</dt><dd>Onward Hound</dd></div>
              <div><dt>Exploring</dt><dd>Strategy & operating roles</dd></div>
              <div><dt>Based in</dt><dd>Greenville, SC</dd></div>
            </dl>
            <div className="now-status"><span className="status-dot" />Available for the right fit</div>
          </div>
        </aside>
      </section>

      <section id="outcomes" className="shell section">
        <div className="section-heading">
          <div><p className="section-kicker">Selected outcomes</p><h2>Proof over positioning.</h2></div>
          <p>Representative results across pricing, business transformation, and ecommerce operations.</p>
        </div>
        <div className="metrics-grid">
          {outcomes.map((outcome) => (
            <article className={outcome.className} key={outcome.value}>
              <p className="metric-value">{outcome.value}</p><h3>{outcome.label}</h3><p>{outcome.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="missions" className="shell section">
        <div className="section-heading">
          <div><p className="section-kicker">Now</p><h2>Current missions.</h2></div>
          <p>Where I’m directing attention, learning, and operating energy today.</p>
        </div>
        <div className="mission-list">
          {missions.map((mission) => (
            <article className="mission-row" key={mission.number}>
              <span className="mission-number">{mission.number}</span>
              <div><h3>{mission.title}</h3><p>{mission.text}</p></div>
              <span className="mission-status">{mission.status}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="builds" className="shell section">
        <div className="section-heading">
          <div><p className="section-kicker">Lab</p><h2>Things I’m building.</h2></div>
          <p>The portfolio becomes more valuable as the work inside it compounds.</p>
        </div>
        <div className="build-grid">
          {builds.map((build) => (
            <article className="build-card" key={build.title}>
              <div className="build-visual"><span>{build.title.slice(0, 1)}</span></div>
              <div className="build-copy"><p className="build-eyebrow">{build.eyebrow}</p><h3>{build.title}</h3><p>{build.text}</p><span className="build-tag">{build.tag}</span></div>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="shell footer-inner">
          <div><p className="section-kicker">Open channel</p><h2>Let’s build something useful.</h2></div>
          <div className="footer-links">
            <a href="mailto:wmclaug96@gmail.com">Email <ArrowIcon /></a>
            <a href="https://github.com/gitlovin-labs" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}