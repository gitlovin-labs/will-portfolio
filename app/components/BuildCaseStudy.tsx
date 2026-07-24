"use client";

import { useEffect, useId, useRef, useState } from "react";

const stages = [
  {
    name: "Define",
    summary: "Turn an ambiguous portfolio goal into a product brief.",
    human: "Set the audience, objective, positioning, and standard for what belongs in public.",
    ai: "Challenge assumptions, organize requirements, and translate the objective into a buildable architecture.",
    evidence: "Outcome-led portfolio architecture",
  },
  {
    name: "Design",
    summary: "Make the experience communicate the positioning before a visitor reads every word.",
    human: "Choose the visual direction, judge tradeoffs, and approve the interaction language.",
    ai: "Generate and implement design options, responsive layouts, and reusable interface patterns.",
    evidence: "Will OS design system",
  },
  {
    name: "Build",
    summary: "Convert approved ideas into working, reusable product behavior.",
    human: "Prioritize features, approve public claims, and decide what the experience should make possible.",
    ai: "Produce components, interactions, responsive behavior, and implementation updates.",
    evidence: "Interactive case studies",
  },
  {
    name: "Verify",
    summary: "Treat generated work as a draft until it survives review.",
    human: "Validate facts, inspect the experience, and make the final quality judgment.",
    ai: "Run production checks, inspect behavior, surface defects, and implement corrections.",
    evidence: "Accessibility and mobile QA",
  },
  {
    name: "Ship",
    summary: "Move a verified release into a repeatable production workflow.",
    human: "Approve what becomes public and when the release is ready.",
    ai: "Prepare changes, resolve build failures, and support the deployment workflow.",
    evidence: "GitHub-to-Vercel release system",
  },
  {
    name: "Improve",
    summary: "Use real-world friction to make the product clearer and more useful.",
    human: "Identify what feels wrong, reprioritize, and decide which feedback matters.",
    ai: "Diagnose the cause, propose solutions, and implement focused iterations.",
    evidence: "Mobile polish and sharing fixes",
  },
];

const improvements = [
  {
    title: "Portfolio architecture",
    observation: "A traditional résumé site would repeat information without proving operating judgment.",
    decision: "Lead with outcomes and let visitors choose when to go deeper.",
    change: "Built an outcome-led homepage with layered case studies.",
    result: "The site works as both a fast scan and a deeper operating portfolio.",
  },
  {
    title: "Interactive case studies",
    observation: "Headline metrics were strong but could not explain the systems behind them.",
    decision: "Turn each result into an accessible, evidence-rich interaction.",
    change: "Added reusable dialogs with ownership, process, result, and claim context.",
    result: "Visitors can inspect the work without turning the homepage into a wall of text.",
  },
  {
    title: "Accessibility pass",
    observation: "Visual polish alone did not make modal interactions production-ready.",
    decision: "Treat keyboard and motion behavior as part of the product.",
    change: "Added focus trapping, focus restoration, Escape dismissal, and reduced-motion support.",
    result: "The core experience works beyond pointer-only navigation.",
  },
  {
    title: "Mobile refinement",
    observation: "Transparent surfaces and section transitions weakened visual boundaries on smaller screens.",
    decision: "Make mobile sections optically self-contained.",
    change: "Reworked surfaces, spacing, card boundaries, and the Will OS preview frame.",
    result: "The interface reads more clearly at phone width without becoming a separate design.",
  },
  {
    title: "Production debugging",
    observation: "A generated social image caused a successful interface release to fail during deployment.",
    decision: "Reproduce the production failure and isolate the smallest responsible component.",
    change: "Corrected the social-image layout rule and revalidated the full release.",
    result: "The blocked case-study release deployed successfully.",
  },
  {
    title: "Sharing system",
    observation: "A generic link card made the finished site look unfinished when shared.",
    decision: "Treat distribution surfaces as part of the product.",
    change: "Added metadata, a favicon, canonical identity, social preview, and a concise public URL.",
    result: "The portfolio now presents consistently on the site and when linked elsewhere.",
  },
];

const shipped = [
  "Responsive interface",
  "Outcome-led case studies",
  "Mobile navigation",
  "Accessible modal behavior",
  "Social-sharing system",
  "Production deployment workflow",
];

type BuildCaseStudyProps = {
  trigger?: "card" | "hero";
};

export default function BuildCaseStudy({ trigger = "card" }: BuildCaseStudyProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const [view, setView] = useState<"roles" | "system">("roles");
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return;
    const handleKeys = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            "button, a[href], [tabindex]:not([tabindex='-1'])",
          ),
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeys);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => dialogRef.current?.querySelector<HTMLElement>(".build-case-close")?.focus());
    return () => {
      document.removeEventListener("keydown", handleKeys);
      document.body.style.overflow = "";
      triggerRef.current?.focus();
    };
  }, [isOpen]);

  const stage = stages[activeStage];

  return (
    <>
      {trigger === "hero" ? (
        <button
          ref={triggerRef}
          type="button"
          className="button button-build"
          onClick={() => setIsOpen(true)}
          aria-haspopup="dialog"
        >
          Inside the build <span aria-hidden="true">↗</span>
        </button>
      ) : (
        <article className="build-card build-card-interactive">
          <button
            ref={triggerRef}
            type="button"
            className="build-card-button"
            onClick={() => setIsOpen(true)}
            aria-haspopup="dialog"
          >
            <div className="build-visual will-os-preview">
              <div className="mini-browser">
                <div className="mini-bar"><i /><i /><i /></div>
                <div className="mini-page"><b>Will OS</b><span /><span /><small>Proof over positioning.</small></div>
              </div>
            </div>
            <div className="build-copy">
              <p className="build-eyebrow">Build 001 · Live · AI-assisted</p>
              <h3>Will OS</h3>
              <p>A living portfolio designed, built, tested, and continuously improved through a human-directed AI workflow.</p>
              <span className="build-tag">Next.js · TypeScript · Vercel</span>
              <span className="build-open">Inside the build <span aria-hidden="true">↗</span></span>
            </div>
          </button>
        </article>
      )}

      {isOpen && (
        <div
          className="case-overlay build-case-overlay"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setIsOpen(false);
          }}
        >
          <section
            ref={dialogRef}
            className="case-window build-case-window"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <div className="case-window-bar">
              <div className="traffic-lights" aria-hidden="true"><i /><i /><i /></div>
              <span>inside-the-build.app</span>
              <button className="case-close build-case-close" onClick={() => setIsOpen(false)} aria-label="Close build case study">×</button>
            </div>

            <div className="case-content build-case-content">
              <header className="build-case-hero">
                <p className="section-kicker">Will OS · Build 001</p>
                <h2 id={titleId}>Built with AI.<br /><span>Directed with judgment.</span></h2>
                <p>This portfolio is also a working demonstration of how I use AI to turn ideas into shipped products—while retaining responsibility for strategy, truth, verification, and the finished result.</p>
              </header>

              <section className="build-lifecycle" aria-labelledby={`${titleId}-lifecycle`}>
                <div className="build-section-heading">
                  <div>
                    <p className="section-kicker">Operating model</p>
                    <h3 id={`${titleId}-lifecycle`}>Select a stage.</h3>
                  </div>
                  <div className="build-view-toggle" aria-label="Build detail view">
                    <button className={view === "roles" ? "active" : ""} onClick={() => setView("roles")}>Responsibilities</button>
                    <button className={view === "system" ? "active" : ""} onClick={() => setView("system")}>System view</button>
                  </div>
                </div>

                <div className="stage-tabs" role="tablist" aria-label="Build lifecycle">
                  {stages.map((item, index) => (
                    <button
                      key={item.name}
                      className={index === activeStage ? "active" : ""}
                      role="tab"
                      aria-selected={index === activeStage}
                      onClick={() => setActiveStage(index)}
                    >
                      <span>{String(index + 1).padStart(2, "0")}</span>{item.name}
                    </button>
                  ))}
                </div>

                <div className="stage-panel" role="tabpanel">
                  <div className="stage-summary">
                    <span>{String(activeStage + 1).padStart(2, "0")}</span>
                    <div><p>{stage.name}</p><h4>{stage.summary}</h4></div>
                  </div>
                  {view === "roles" ? (
                    <div className="responsibility-grid">
                      <article><span className="role-human">Human-directed</span><p>{stage.human}</p></article>
                      <article><span className="role-ai">AI-assisted</span><p>{stage.ai}</p></article>
                    </div>
                  ) : (
                    <div className="system-strip">
                      <div><span>Input</span><strong>Intent + evidence</strong></div><i>→</i>
                      <div><span>AI layer</span><strong>Options + execution</strong></div><i>→</i>
                      <div><span>Control</span><strong>Review + verification</strong></div><i>→</i>
                      <div><span>Output</span><strong>{stage.evidence}</strong></div>
                    </div>
                  )}
                  <p className="stage-evidence"><span>Evidence</span>{stage.evidence}</p>
                </div>
              </section>

              <section className="shipped-section">
                <div>
                  <p className="section-kicker">What shipped</p>
                  <h3>A real product, not an AI claim.</h3>
                </div>
                <div className="shipped-grid">
                  {shipped.map((item, index) => <span key={item}><i>{String(index + 1).padStart(2, "0")}</i>{item}</span>)}
                </div>
              </section>

              <section className="build-log">
                <div className="build-section-heading">
                  <div><p className="section-kicker">Continuous improvement</p><h3>Selected build log.</h3></div>
                  <p>Open any iteration to see the operating decision behind it.</p>
                </div>
                <div className="build-log-list">
                  {improvements.map((item, index) => (
                    <details key={item.title}>
                      <summary><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.title}</strong><i aria-hidden="true">+</i></summary>
                      <div className="build-log-detail">
                        <p><span>Observation</span>{item.observation}</p>
                        <p><span>Decision</span>{item.decision}</p>
                        <p><span>Change</span>{item.change}</p>
                        <p><span>Result</span>{item.result}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              <footer className="build-case-footer">
                <p>Designed, directed, and continuously improved by Will with AI-assisted development.</p>
                <div>
                  <a href="https://willmclaughlin.vercel.app" target="_blank" rel="noreferrer">View live site <span aria-hidden="true">↗</span></a>
                  <a href="https://github.com/gitlovin-labs/will-portfolio" target="_blank" rel="noreferrer">View source <span aria-hidden="true">↗</span></a>
                </div>
              </footer>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
