"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { CaseStudy } from "@/data/cases";
import { AlJabiPreview } from "./AlJabiPreview";
import { ComplaintsBoardPreview } from "./ComplaintsBoardPreview";
import { LiveDashboardPreview } from "./LiveDashboardPreview";

type CaseModalProps = {
  caseStudy: CaseStudy | null;
  onClose: () => void;
};

const previews = {
  "office-display": LiveDashboardPreview,
  "complaints-board": ComplaintsBoardPreview,
  "al-jabi": AlJabiPreview
};

export function CaseModal({ caseStudy, onClose }: CaseModalProps) {
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!caseStudy) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    closeButton.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus();
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  const isAi = caseStudy.category === "ai";

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/55 px-4 py-6 backdrop-blur-sm sm:py-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-modal-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-6xl rounded-lg bg-white shadow-modal">
        <div className="sticky -top-6 z-10 flex sm:-top-10 items-start justify-between gap-4 rounded-t-lg border-b border-line bg-white/95 p-5 backdrop-blur">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-action">{caseStudy.eyebrow}</p>
            <h3 id="case-modal-title" className="mt-1 text-2xl font-bold text-ink">
              {caseStudy.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-slate-600">{caseStudy.systemType}</p>
          </div>
          <button
            ref={closeButton}
            aria-label="Close case study"
            className="rounded-md border border-line p-2 text-slate-500 transition hover:border-slate-400 hover:text-ink"
            onClick={onClose}
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {isAi ? (
          <div className="grid gap-3 border-b border-line bg-panel p-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-7">
            {caseStudy.kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-md border border-teal-200 bg-white p-4">
                <p className="text-3xl font-bold text-signal">{kpi.value}</p>
                <p className="mt-1 text-sm font-semibold text-slate-600">{kpi.label}</p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="grid gap-6 p-5 lg:grid-cols-[0.9fr_1.35fr] lg:p-7">
          <div className="space-y-5">
            <section>
              <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Problem</h4>
              <p className="mt-2 text-base leading-7 text-slate-700">{caseStudy.problem}</p>
            </section>

            <section>
              <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">{isAi ? "How It Works" : "Solution Architecture"}</h4>
              <div className="mt-3 rounded-md border border-line bg-panel p-4">
                <p className="text-sm font-semibold text-ink">{caseStudy.flow}</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                  {caseStudy.solution.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Impact</h4>
              {isAi ? null : (
                <div className="mt-3 flex flex-wrap gap-2">
                  {caseStudy.kpis.map((kpi) => (
                    <span key={kpi.label} className="rounded-md border border-teal-200 bg-teal-50 px-3 py-2 text-sm font-bold text-signal">
                      {kpi.value} {kpi.label}
                    </span>
                  ))}
                </div>
              )}
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                {caseStudy.impact.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-action" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {caseStudy.outcome ? (
              <section>
                <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Outcome</h4>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                  {caseStudy.outcome.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {caseStudy.decisions ? (
              <section>
                <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Key Design Decisions</h4>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                  {caseStudy.decisions.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <dl className="grid gap-3 rounded-md border border-line bg-white p-4 text-sm sm:grid-cols-2">
              {caseStudy.role ? (
                <div>
                  <dt className="font-bold text-ink">Role</dt>
                  <dd className="mt-1 text-slate-600">{caseStudy.role}</dd>
                </div>
              ) : null}
              {caseStudy.status ? (
                <div>
                  <dt className="font-bold text-ink">Status</dt>
                  <dd className="mt-1 text-slate-600">{caseStudy.status}</dd>
                </div>
              ) : null}
              <div>
                <dt className="font-bold text-ink">Data</dt>
                <dd className="mt-1 text-slate-600">{caseStudy.data}</dd>
              </div>
              <div>
                <dt className="font-bold text-ink">Users</dt>
                <dd className="mt-1 text-slate-600">{caseStudy.users}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-bold text-ink">AI involvement</dt>
                <dd className="mt-1 text-slate-600">{caseStudy.ai}</dd>
              </div>
              {caseStudy.stack ? (
                <div className="sm:col-span-2">
                  <dt className="font-bold text-ink">Stack</dt>
                  <dd className="mt-2 flex flex-wrap gap-1.5">
                    {caseStudy.stack.map((tool) => (
                      <span key={tool} className="rounded bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
                        {tool}
                      </span>
                    ))}
                  </dd>
                </div>
              ) : null}
            </dl>
          </div>

          <section>
            <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Visuals</h4>
            <div className="mt-3 space-y-4">
              {caseStudy.visuals.map((visual) => {
                const Preview = visual.preview ? previews[visual.preview] : null;
                return (
                  <figure key={visual.label} className="overflow-hidden rounded-lg border border-line bg-panel">
                    {visual.type === "live" && Preview ? (
                      <div className="p-3">
                        <Preview />
                      </div>
                    ) : (
                      <div className="relative min-h-[220px] w-full sm:min-h-[340px]">
                        <Image src={visual.src ?? ""} alt={visual.label} fill className="object-contain" sizes="(max-width: 1024px) 100vw, 650px" />
                      </div>
                    )}
                    <figcaption className="border-t border-line bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      {visual.label}
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
