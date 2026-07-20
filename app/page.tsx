import PricingCaseStudy from "./components/PricingCaseStudy";

const outcomes = [
  { value: "$5.4M", label: "Projected customer-lifetime net profit impact", detail: "Led a pricing transformation across 300+ accounts with essentially zero regretted churn.", className: "metric-card metric-card-featured" },
  { value: "$625K+", label: "Ecommerce revenue", detail: "Built Onward Hound from zero across 20 SKUs and 32K+ units sold.", className: "metric-card" },
  { value: "46 → 1", label: "Reporting systems consolidated", detail: "Unified reporting supporting oversight of $800M in assets.", className: "metric-card" },
  { value: "0 → 90%", label: "Profitability-aligned incentives", detail: "Redesigned commission economics, improving profitability alignment from near zero to approximately 90%.", className: "metric-card metric-card-wide" },
];

const missions = [
  { number: "01", title: "Build useful AI applications", text: "Turn real operating problems into practical, human-in-the-loop tools—and document what works.", status: "Building now" },
  { number: "02", title: "Grow Onward Hound", text: "Improve product, channel, supplier, and economic systems behind an established pet-products brand.", status: "Operating" },
  { number: "03", title: "Join the right operating team", text: "Apply pricing, commercial strategy, analytics, and founder judgment to consequential work.", status: "Exploring" },
];

const experience = [
  { company: "Deloitte", role: "Business Technology Consultant", period: "Sep 2019–Sep 2021", mandate: "Business transformation and executive reporting for U.S. Government programs.", proof: "Consolidated 46 reporting systems into one environment supporting oversight of $800M in assets.", tags: ["Transformation", "Power BI", "Executive reporting"] },
  { company: "Deposco", role: "Solutions Consultant", period: "Sep 2021–Jul 2022", mandate: "Enterprise SaaS implementation and operational workflow translation.", proof: "Configured data, reporting, and warehouse workflows for a $100M+ cold chain logistics provider.", tags: ["SaaS", "SQL", "Implementation"] },
  { company: "Booster", role: "Senior Manager, Revenue Operations", period: "Jul 2022–Jan 2026", mandate: "Pricing, revenue operations, and commercial operating-system ownership.", proof: "Led pricing transformation, incentive redesign, CRM migration, planning, and executive operating cadence.", tags: ["Pricing", "RevOps", "Commercial strategy"] },
  { company: "Onward Hound", role: "Founder & Operator", period: "Feb 2022–Present", mandate: "Founder/operator proof across product, economics, sourcing, and ecommerce.", proof: "Built the brand from zero to $625K+ in Amazon revenue and 32K+ units sold.", tags: ["Ecommerce", "Amazon", "Founder"] },
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
            <a href="#outcomes">Outcomes</a><a href="#missions">Missions</a><a href="#experience">Experience</a><a href="#builds">Builds</a><a href="#contact">Connect</a>
          </div>
          <div className="availability"><span className="status-dot" />Open to the right opportunity</div>
          <details className="mobile-menu">
            <summary aria-label="Open navigation">Menu</summary>
            <div><a href="#outcomes">Outcomes</a><a href="#missions">Missions</a><a href="#experience">Experience</a><a href="#builds">Builds</a><a href="#contact">Connect</a></div>
          </details>
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
          <PricingCaseStudy />
          {outcomes.slice(1).map((outcome) => (
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

      <section id="experience" className="shell section">
        <div className="section-heading">
          <div><p className="section-kicker">Operating history</p><h2>Built across the stack.</h2></div>
          <p>A progression from transformation and implementation into commercial ownership and founder judgment.</p>
        </div>
        <div className="timeline">
          {experience.map((item, index) => (
            <article className="timeline-row" key={item.company}>
              <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
              <div className="timeline-main">
                <div className="timeline-title"><div><h3>{item.company}</h3><p>{item.role}</p></div><span>{item.period}</span></div>
                <p className="timeline-mandate">{item.mandate}</p>
                <p className="timeline-proof">{item.proof}</p>
                <div className="timeline-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
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
              <div className={build.title === "Will OS" ? "build-visual will-os-preview" : "build-visual workflow-preview"}>
                {build.title === "Will OS" ? (
                  <div className="mini-browser"><div className="mini-bar"><i /><i /><i /></div><div className="mini-page"><b>Will OS</b><span /><span /><small>Proof over positioning.</small></div></div>
                ) : (
                  <div className="workflow-diagram"><span>Message</span><i>→</i><span>Classify</span><i>→</i><span>Review</span></div>
                )}
              </div>
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