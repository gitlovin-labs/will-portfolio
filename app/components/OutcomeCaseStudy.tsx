"use client";

import { useEffect, useId, useRef, useState } from "react";

export type OutcomeCaseStudyProps = {
  value: string;
  label: string;
  detail: string;
  className: string;
  category: string;
  headline: string;
  capabilities: string;
  stats: { value: string; label: string }[];
  flow: string[];
  ownership: string;
  sections: { title: string; text: string }[];
  note?: string;
};

export default function OutcomeCaseStudy(props: OutcomeCaseStudyProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return;
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
      triggerRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <article className={`${props.className} metric-card-interactive`}>
        <button ref={triggerRef} className="metric-card-button" onClick={() => setIsOpen(true)} aria-haspopup="dialog">
          <span className="metric-value">{props.value}</span>
          <span className="metric-title">{props.label}</span>
          <span className="metric-detail">{props.detail}</span>
          <span className="metric-link">View case study <span aria-hidden="true">↗</span></span>
        </button>
      </article>

      {isOpen && (
        <div className="case-overlay" role="presentation" onMouseDown={(event) => {
          if (event.currentTarget === event.target) setIsOpen(false);
        }}>
          <section ref={dialogRef} className="case-window" role="dialog" aria-modal="true" aria-labelledby={titleId}>
            <div className="case-window-bar">
              <div className="traffic-lights" aria-hidden="true"><i /><i /><i /></div>
              <span>case-study.app</span>
              <button className="case-close" onClick={() => setIsOpen(false)} aria-label="Close case study">×</button>
            </div>
            <div className="case-content">
              <div className="case-hero">
                <p className="section-kicker">{props.category}</p>
                <h2 id={titleId}>{props.headline}</h2>
                <p>{props.capabilities}</p>
              </div>
              <div className="case-stat-row">
                {props.stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
              </div>
              <div className="case-flow" aria-label="Operating process">
                {props.flow.map((step, index) => <span key={step}>{index > 0 && <i aria-hidden="true">→</i>}{step}</span>)}
              </div>
              <div className="case-ownership"><strong>My ownership</strong><p>{props.ownership}</p></div>
              <div className="case-grid">
                {props.sections.map((section, index) => (
                  <article key={section.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{section.title}</h3><p>{section.text}</p></article>
                ))}
              </div>
              {props.note && <div className="case-note"><strong>Claim context:</strong> {props.note}</div>}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
