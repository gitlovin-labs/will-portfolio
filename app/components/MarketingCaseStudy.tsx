"use client";

import { useEffect, useRef, useState } from "react";

const views = {
  b2b: {
    label: "B2B demand engine",
    eyebrow: "Booster · Team leadership",
    headline: "Turning demand generation into contracted economics.",
    description: "Managed a 5+ person outsourced marketing team and connected campaign execution to CRM, sales, and financial outcomes.",
    stats: [
      { value: "$51K", label: "Google Ads investment" },
      { value: "748", label: "Leads generated" },
      { value: "44", label: "Customers signed" },
      { value: "$100K", label: "Contracted monthly recurring gross profit" },
    ],
    journey: ["Target", "Generate", "Convert", "Value"],
    ownership: "Set priorities and success measures, directed a 5+ person outsourced team, connected advertising to CRM and sales outcomes, evaluated channel performance, and translated results into investment recommendations for leadership.",
    result: "A $51K Google Ads investment generated 748 leads and contributed to 44 signed customers representing approximately $100K in contracted monthly recurring gross profit. Based on a 36-month expected customer lifetime, the cohort represented approximately $3.6M in projected lifetime gross profit.",
  },
  b2c: {
    label: "B2C growth engine",
    eyebrow: "Onward Hound · Direct ownership",
    headline: "Operating the complete customer-acquisition loop.",
    description: "Personally owned advertising strategy, marketplace conversion, keyword growth, customer retention, and commercial performance.",
    stats: [
      { value: "$134K+", label: "Amazon advertising spend" },
      { value: "$625K+", label: "Lifetime Amazon revenue" },
      { value: "32K+", label: "Units sold" },
      { value: "20", label: "SKU portfolio" },
    ],
    journey: ["Discover", "Convert", "Retain", "Compound"],
    ownership: "Built campaigns, developed positioning, analyzed keyword and funnel performance, directed creative and vendors, reallocated budgets, and connected advertising decisions to pricing, margin, inventory, organic rank, and customer value.",
    result: "Managed more than $134K in Amazon advertising while building Onward Hound beyond $625K in lifetime Amazon revenue and 32,000 units sold across a 20-SKU portfolio.",
  },
} as const;

const foundations = [
  { name: "Customer", b2b: "Operational and financial buyer", b2c: "Sensitive-stomach dog owner" },
  { name: "Intent", b2b: "Business pain and organizational need", b2c: "Search intent and product need" },
  { name: "Message", b2b: "Economic value and operational outcome", b2c: "Trust, suitability, and product benefit" },
  { name: "Conversion", b2b: "Lead qualification and sales follow-through", b2c: "Product-page conversion and purchase" },
  { name: "Economics", b2b: "Contracted recurring gross profit", b2c: "Contribution margin and customer value" },
] as const;

export default function MarketingCaseStudy() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeView, setActiveView] = useState<keyof typeof views>("b2b");
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const view = views[activeView];

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
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", handleKeys);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => dialogRef.current?.querySelector<HTMLElement>("button")?.focus());
    return () => {
      document.removeEventListener("keydown", handleKeys);
      document.body.style.overflow = "";
      trigger?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <article className="metric-card metric-card-marketing metric-card-interactive">
        <button ref={triggerRef} className="metric-card-button" onClick={() => setIsOpen(true)} aria-haspopup="dialog">
          <span className="marketing-card-kicker">Marketing operations · B2B + B2C</span>
          <span className="metric-value">$51K <i aria-hidden="true">→</i> $3.6M</span>
          <span className="metric-title">Marketing spend → projected lifetime gross profit</span>
          <span className="metric-detail">Led a 5+ person B2B marketing team and directly operated B2C performance marketing—building both around commercial outcomes.</span>
          <span className="metric-link">Explore the marketing system <span aria-hidden="true">↗</span></span>
        </button>
      </article>

      {isOpen && (
        <div className="case-overlay" role="presentation" onMouseDown={(event) => {
          if (event.currentTarget === event.target) setIsOpen(false);
        }}>
          <section ref={dialogRef} className="case-window marketing-case-window" role="dialog" aria-modal="true" aria-labelledby="marketing-case-title">
            <div className="case-window-bar">
              <div className="traffic-lights" aria-hidden="true"><i /><i /><i /></div>
              <span>marketing-system.app</span>
              <button className="case-close" onClick={() => setIsOpen(false)} aria-label="Close marketing case study">×</button>
            </div>
            <div className="case-content marketing-case-content">
              <div className="case-hero marketing-case-hero">
                <p className="section-kicker">Marketing operations</p>
                <h2 id="marketing-case-title">Same fundamentals. <span>Different buyers.</span></h2>
                <p>I have led marketing in two fundamentally different environments: managing a B2B demand-generation team and directly operating performance marketing for a consumer ecommerce brand.</p>
              </div>

              <div className="marketing-proof">
                <div><strong>$51K</strong><span>Marketing spend</span></div>
                <i aria-hidden="true">→</i>
                <div><strong>$100K</strong><span>Contracted monthly recurring gross profit</span></div>
                <i aria-hidden="true">→</i>
                <div><strong>$3.6M</strong><span>Projected lifetime gross profit</span></div>
              </div>

              <div className="marketing-view-toggle" role="tablist" aria-label="Marketing environment">
                {(Object.keys(views) as Array<keyof typeof views>).map((key) => (
                  <button key={key} role="tab" aria-selected={activeView === key} className={activeView === key ? "active" : ""} onClick={() => setActiveView(key)}>{views[key].label}</button>
                ))}
              </div>

              <section className="marketing-view-panel" role="tabpanel">
                <div className="marketing-view-heading">
                  <div><p>{view.eyebrow}</p><h3>{view.headline}</h3></div>
                  <p>{view.description}</p>
                </div>
                <div className="marketing-stat-grid">
                  {view.stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
                </div>
                <div className="case-flow" aria-label={`${view.label} customer journey`}>
                  {view.journey.map((step, index) => <span key={step}>{index > 0 && <i aria-hidden="true">→</i>}{step}</span>)}
                </div>
                <div className="case-ownership"><strong>My ownership</strong><p>{view.ownership}</p></div>
                <div className="marketing-result"><strong>Commercial result</strong><p>{view.result}</p></div>
              </section>

              <section className="marketing-foundations">
                <div><p className="section-kicker">Transferable operating model</p><h3>The execution changes. The system holds.</h3></div>
                <div className="foundation-grid">
                  {foundations.map((item) => (
                    <article key={item.name}><strong>{item.name}</strong><span>{activeView === "b2b" ? item.b2b : item.b2c}</span></article>
                  ))}
                </div>
              </section>

              <div className="case-note"><strong>Claim context:</strong> The $3.6M figure is projected gross profit based on approximately $100K in contracted monthly recurring gross profit and a 36-month expected customer lifetime—not realized profit. Onward Hound revenue represents total marketplace performance, not revenue attributed exclusively to advertising.</div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
