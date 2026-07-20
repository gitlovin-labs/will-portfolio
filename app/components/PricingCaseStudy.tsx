"use client";

import { useEffect, useState } from "react";

export default function PricingCaseStudy() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <article className="metric-card metric-card-featured metric-card-interactive">
        <button className="metric-card-button" onClick={() => setIsOpen(true)} aria-haspopup="dialog">
          <span className="metric-value">$5.4M</span>
          <span className="metric-title">Projected customer-lifetime net profit impact</span>
          <span className="metric-detail">Led a pricing transformation across 300+ accounts with essentially zero regretted churn.</span>
          <span className="metric-link">View case study <span aria-hidden="true">↗</span></span>
        </button>
      </article>

      {isOpen && (
        <div className="case-overlay" role="presentation" onMouseDown={(event) => {
          if (event.currentTarget === event.target) setIsOpen(false);
        }}>
          <section className="case-window" role="dialog" aria-modal="true" aria-labelledby="pricing-case-title">
            <div className="case-window-bar">
              <div className="traffic-lights" aria-hidden="true"><i /><i /><i /></div>
              <span>case-study-001.app</span>
              <button className="case-close" onClick={() => setIsOpen(false)} aria-label="Close case study">×</button>
            </div>

            <div className="case-content">
              <div className="case-hero">
                <p className="section-kicker">Pricing transformation</p>
                <h2 id="pricing-case-title">Turning fragmented pricing into a controlled growth system.</h2>
                <p>Commercial strategy · Pricing operations · Change management</p>
              </div>

              <div className="case-stat-row">
                <div><strong>$5.4M</strong><span>Projected customer-lifetime net profit impact</span></div>
                <div><strong>300+</strong><span>Accounts migrated</span></div>
                <div><strong>~0</strong><span>Regretted churn</span></div>
              </div>

              <div className="case-grid">
                <article><span>01</span><h3>The problem</h3><p>Legacy account pricing was fragmented and inconsistently connected to profitability, cost to serve, customer value, contract terms, and retention risk.</p></article>
                <article><span>02</span><h3>The operating model</h3><p>Analyzed the account base, modeled gross and net profitability, reviewed contractual rights, established profitability floors, and segmented accounts by eligibility, risk, and selling approach.</p></article>
                <article><span>03</span><h3>The execution</h3><p>Aligned Sales, Customer Success, Finance, Legal, Product, Engineering, Operations, and executive leadership; translated the approved strategy into account-level changes and coached a five-person Customer Success team through rollout scenarios.</p></article>
                <article><span>04</span><h3>The result</h3><p>Migrated 300+ accounts and created $5.4M in projected customer-lifetime net profit impact while achieving essentially zero regretted churn.</p></article>
              </div>

              <div className="case-note"><strong>Claim context:</strong> The $5.4M figure is projected customer-lifetime net profit impact—not booked revenue or realized profit.</div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
