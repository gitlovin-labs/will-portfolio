"use client";

import { useEffect, useId, useRef, useState } from "react";

const modes = {
  without: {
    label: "Without the system",
    title: "Recurring analysis starts over each week.",
    items: [
      "Reopen and reconcile multiple reports",
      "Reconstruct prior decisions from memory",
      "Manually identify active tests",
      "Interpret scattered keyword variations independently",
      "Generate a long list of possible actions",
      "Risk changing strategy before a test matures",
    ],
  },
  with: {
    label: "With the system",
    title: "Each review begins with persistent operating context.",
    items: [
      "Reuse persistent account state",
      "Surface open tests and unresolved opportunities",
      "Consolidate terms through n-grams and canonical concepts",
      "Apply consistent evidence thresholds",
      "Connect ads to TACoS, margin, rank, and total sales",
      "Produce one governed brief with one or two priorities",
    ],
  },
};

const stages = [
  { name: "Inputs", title: "Bring fragmented signals into one review.", text: "Combines Helium 10, Amazon bulk advertising reports, Search Query Performance, rank, sales, conversion, inventory, margin, and prior decisions." },
  { name: "State", title: "Normalize the current operating picture.", text: "Creates a consistent view of performance, active tests, strategic constraints, and recent changes before new recommendations are considered." },
  { name: "Memory", title: "Preserve decisions as institutional knowledge.", text: "Maintains action, test, opportunity, learning, strategy, concept, snapshot, and weekly-brief records so the system does not begin from zero." },
  { name: "Analysis", title: "Turn raw terms into durable evidence.", text: "Uses deterministic one- through four-gram aggregation, canonical concepts, evidence states, and pre/post test monitoring to identify meaningful signals." },
  { name: "Priority", title: "Rank opportunities against business value.", text: "Weights impact, confidence, effort, profitability, and strategic fit while limiting attention to no more than two priority families." },
  { name: "Decision", title: "Convert analysis into a governed weekly brief.", text: "The Sunday operator produces a persisted Monday brief with the context, tradeoffs, watchouts, and one or two recommended actions." },
  { name: "Execute", title: "Keep consequential changes under human control.", text: "Will reviews the evidence, applies commercial judgment, and manually approves or executes every advertising, listing, pricing, and inventory decision." },
];

const layers = [
  "Action & Decision Log",
  "Test Ledger",
  "Opportunity Queue",
  "Learnings",
  "Agent Rules",
  "Engine Spec",
  "Strategy Registry",
  "Concept Map",
  "SQP Snapshots",
  "Weekly Briefs",
];

const proof = [
  ["Sunday", "Weekly operator"],
  ["Monday", "Persisted brief"],
  ["2 max", "Priority families"],
  ["~5", "H10 calls / week"],
  ["1–4", "N-gram analysis"],
  ["3", "Evidence states"],
];

export default function AmazonOperatingSystem() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<keyof typeof modes>("with");
  const [activeStage, setActiveStage] = useState(0);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return;
    const trigger = triggerRef.current;
    const handleKeys = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>("button, a[href], [tabindex]:not([tabindex='-1'])"));
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
    requestAnimationFrame(() => dialogRef.current?.querySelector<HTMLElement>(".amazon-case-close")?.focus());
    return () => {
      document.removeEventListener("keydown", handleKeys);
      document.body.style.overflow = "";
      trigger?.focus();
    };
  }, [isOpen]);

  const selectedMode = modes[mode];
  const stage = stages[activeStage];

  return (
    <>
      <article className="build-card build-card-interactive amazon-build-card">
        <button ref={triggerRef} type="button" className="build-card-button" onClick={() => setIsOpen(true)} aria-haspopup="dialog">
          <div className="build-visual amazon-preview">
            <div className="amazon-preview-flow"><span>Signals</span><i>→</i><span>State</span><i>→</i><strong>Action</strong></div>
            <div className="amazon-preview-status"><i /> Weekly operator ready</div>
          </div>
          <div className="build-copy">
            <p className="build-eyebrow">Build 002 · Live · Human-in-the-loop</p>
            <h3>Amazon Growth Operating System</h3>
            <p>An AI-assisted operating system that turns fragmented marketplace, advertising, search, financial, and experiment data into persistent institutional knowledge, a governed weekly review, and one or two prioritized actions.</p>
            <span className="build-tag">Amazon · GTM Operations · AI Orchestration</span>
            <span className="build-open">Enter the operating system <span aria-hidden="true">↗</span></span>
          </div>
        </button>
      </article>

      {isOpen && (
        <div className="case-overlay build-case-overlay" role="presentation" onMouseDown={(event) => { if (event.currentTarget === event.target) setIsOpen(false); }}>
          <section ref={dialogRef} className="case-window build-case-window amazon-case-window" role="dialog" aria-modal="true" aria-labelledby={titleId}>
            <div className="case-window-bar">
              <div className="traffic-lights" aria-hidden="true"><i /><i /><i /></div>
              <span>amazon-growth-os.app</span>
              <button className="case-close amazon-case-close" onClick={() => setIsOpen(false)} aria-label="Close Amazon Growth Operating System case study">×</button>
            </div>

            <div className="case-content build-case-content amazon-case-content">
              <header className="build-case-hero amazon-case-hero">
                <p className="section-kicker">Amazon Growth OS · Build 002</p>
                <h2 id={titleId}>From recurring data pulls to <span>one governed decision cycle.</span></h2>
                <p>Built to solve a real operating constraint: Amazon creates more reports, signals, tests, and potential actions than one operator can consistently synthesize. The system preserves business context, monitors active work, and directs limited attention toward the highest-value next decisions.</p>
              </header>

              <section className="amazon-comparison" aria-labelledby={`${titleId}-comparison`}>
                <div className="build-section-heading">
                  <div><p className="section-kicker">Operating leverage</p><h3 id={`${titleId}-comparison`}>Change the operating mode.</h3></div>
                  <div className="amazon-mode-toggle" aria-label="Compare operating modes">
                    {(Object.keys(modes) as Array<keyof typeof modes>).map((key) => <button key={key} className={mode === key ? "active" : ""} onClick={() => setMode(key)}>{modes[key].label}</button>)}
                  </div>
                </div>
                <div className={`amazon-mode-panel ${mode}`}>
                  <div><span>{selectedMode.label}</span><h4>{selectedMode.title}</h4></div>
                  <ul>{selectedMode.items.map((item) => <li key={item}><i aria-hidden="true">{mode === "with" ? "✓" : "—"}</i>{item}</li>)}</ul>
                </div>
              </section>

              <section className="amazon-proof-strip" aria-label="System summary">
                <div><strong>10</strong><span>Operating layers</span></div><i>→</i>
                <div><strong>1</strong><span>Persistent control plane</span></div><i>→</i>
                <div><strong>1–2</strong><span>Weekly priorities</span></div>
              </section>

              <section className="amazon-cycle" aria-labelledby={`${titleId}-cycle`}>
                <div className="build-section-heading"><div><p className="section-kicker">Decision cycle</p><h3 id={`${titleId}-cycle`}>Follow the system.</h3></div><p>Select a stage to inspect how evidence becomes action.</p></div>
                <div className="amazon-stage-tabs" role="tablist" aria-label="Amazon operating stages">
                  {stages.map((item, index) => <button key={item.name} role="tab" aria-selected={activeStage === index} className={activeStage === index ? "active" : ""} onClick={() => setActiveStage(index)}><span>{String(index + 1).padStart(2, "0")}</span>{item.name}</button>)}
                </div>
                <div className="amazon-stage-panel" role="tabpanel">
                  <span>{String(activeStage + 1).padStart(2, "0")}</span>
                  <div><p>{stage.name}</p><h4>{stage.title}</h4><p>{stage.text}</p></div>
                </div>
              </section>

              <section className="amazon-control-plane">
                <div><p className="section-kicker">Persistent memory</p><h3>Ten layers. One control plane.</h3><p>The architecture keeps strategy, evidence, decisions, and learning connected instead of scattering them across one-off analyses.</p></div>
                <ol>{layers.map((layer, index) => <li key={layer}><span>{String(index + 1).padStart(2, "0")}</span>{layer}</li>)}</ol>
              </section>

              <section className="amazon-proof">
                <div className="build-section-heading"><div><p className="section-kicker">Operating rules</p><h3>Bounded by design.</h3></div><p>Constraints keep the system focused, economical, and evidence-led.</p></div>
                <div className="amazon-proof-grid">{proof.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
                <div className="amazon-evidence"><span>Emerging</span><i>→</i><span>Directional</span><i>→</i><strong>Actionable</strong><p>Evidence must persist and cross defined thresholds before it becomes a recommendation.</p></div>
              </section>

              <aside className="amazon-boundary">
                <p className="section-kicker">Human control boundary</p>
                <h3>AI analyzes and prioritizes. Will decides and executes.</h3>
                <p>Current constraint: Helium 10&apos;s advertising MCP does not expose campaign-level data for this account, so advertising state uses operator-supplied bulk reports. The system does not make unsupervised campaign, listing, pricing, or inventory changes.</p>
              </aside>

              <footer className="build-case-footer amazon-case-footer"><p>Designed and operated by Will as the decision layer for Onward Hound.</p><span>Amazon · GTM Operations · AI Orchestration</span></footer>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
