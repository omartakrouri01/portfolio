"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ArrowDown,
  BriefcaseBusiness,
  Check,
  Download,
  Eye,
  Gauge,
  Linkedin,
  Mail,
  MonitorCog,
  Phone,
  ShieldCheck,
  X
} from "lucide-react";
import { CaseModal } from "@/components/CaseModal";
import { caseStudies, selectedSystems, type CaseStudy } from "@/data/cases";

const approach = ["Business Understanding", "Data", "Shadow Systems", "KPI Design", "Decision Enablement"];

const capabilities = [
  "KPI Design & Governance",
  "Business Analysis",
  "Power BI / DAX / SQL",
  "Dashboard Design",
  "Shadow Systems Design",
  "AI-Assisted Product Development",
  "Workflow Automation",
  "Internal Business Applications"
];

export default function Home() {
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);
  const caseMap = useMemo(() => new Map(caseStudies.map((item) => [item.id, item])), []);

  const openCase = (id: string) => {
    setActiveCase(caseMap.get(id) ?? null);
  };

  return (
    <main className="min-h-screen">
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-14">
        <div className="flex min-h-[560px] flex-col justify-center">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-md border border-line bg-white px-3 py-2 text-sm font-semibold text-slate-600 shadow-sm">
            <ShieldCheck className="h-4 w-4 text-signal" />
            Business Impact Case Study System
          </div>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-lg border border-line bg-white shadow-sm">
              <Image src="/images/omar-photo.jpg" alt="Omar Takrouri" fill className="object-cover" priority />
            </div>
            <div>
              <h1 className="text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">Omar Takrouri</h1>
              <p className="mt-3 text-2xl font-semibold text-action">Data & AI Specialist</p>
            </div>
          </div>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            Turning operational data into business decisions through KPI systems, internal platforms, and AI-enabled workflows.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium text-slate-700">
            <a className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-3 py-2" href="mailto:omartakroury@gmail.com">
              <Mail className="h-4 w-4 text-signal" />
              omartakroury@gmail.com
            </a>
            <a className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-3 py-2" href="tel:+963994548586">
              <Phone className="h-4 w-4 text-signal" />
              +963994548586
            </a>
            <a className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-3 py-2" href="https://www.linkedin.com/in/omar-takrouri/">
              <Linkedin className="h-4 w-4 text-signal" />
              LinkedIn
            </a>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#impact" className="inline-flex items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800">
              See Business Impact
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="/omar-takrouri-cv.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-ink transition hover:border-slate-500"
            >
              Download CV
              <Download className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-full rounded-lg border border-line bg-white p-4 shadow-sm sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Operating Profile</p>
                <h2 className="mt-1 text-xl font-bold text-ink">Decision Systems Built From Real Operations</h2>
              </div>
              <Gauge className="h-6 w-6 text-signal" />
            </div>
            <div className="grid gap-4">
              {[
                ["KPI Systems Built", "10+", "Dashboards, scorecards, executive displays"],
                ["Business Functions", "Sales / Maintenance / Ops / QC / Safety", "Cross-functional operational visibility"],
                ["Shadow Systems", "3+", "ERP extensions that close workflow gaps"]
              ].map(([label, value, detail]) => (
                <div key={label} className="rounded-md border border-line bg-panel p-4">
                  <p className="text-sm font-semibold text-slate-500">{label}</p>
                  <p className="mt-2 text-2xl font-bold text-ink">{value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white/78">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-action">Professional Summary</p>
            <h2 className="mt-3 text-3xl font-bold text-ink">Business analytics, KPI architecture, and AI-enabled internal products</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Data & AI Specialist with 2+ years of experience in construction-related operations across elevators, escalators, and moving walkways. Focused on translating business challenges into measurable frameworks through KPI ecosystems, ERP-adjacent shadow systems, and decision support across sales, installation, planning, quality control, safety, and maintenance operations.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div key={item} className="rounded-md border border-line bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="bg-white/78">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-action">Business Impact</p>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Systems that turned operational problems into measurable decisions</h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {caseStudies.map((item) => (
              <button
                key={item.id}
                className="group rounded-lg border border-line bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-slate-400 hover:shadow-md"
                onClick={() => setActiveCase(item)}
                type="button"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{item.eyebrow}</p>
                    <h3 className="mt-2 text-xl font-bold text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-signal">{item.systemType}</p>
                  </div>
                  <Eye className="h-5 w-5 shrink-0 text-slate-400 transition group-hover:text-action" />
                </div>
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">{item.problem}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.kpis.map((kpi) => (
                    <span key={kpi} className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-bold text-ink">
                      {kpi}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {selectedSystems.map((system) => (
            <button
              key={system.title}
              className="rounded-lg border border-line bg-white p-5 text-left shadow-sm transition hover:border-signal"
              onClick={() => openCase(system.caseId)}
              type="button"
            >
              <MonitorCog className="h-5 w-5 text-action" />
              <h3 className="mt-4 text-lg font-bold text-ink">{system.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{system.detail}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-200">Approach</p>
          <div className="mt-8 grid gap-3 md:grid-cols-5">
            {approach.map((step, index) => (
              <div key={step} className="rounded-lg border border-white/15 bg-white/8 p-4">
                <p className="text-sm font-bold text-teal-200">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-bold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-action">Positioning</p>
            <h2 className="mt-3 text-3xl font-bold text-ink">What I do and do not do</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Boundary title="No" icon="no" items={["ERP development", "ML model training", "academic research"]} />
            <Boundary title="Yes" icon="yes" items={["operational intelligence systems", "KPI systems", "internal tools", "AI-enabled workflows"]} />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-10 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="rounded-lg border border-line bg-panel p-5">
            <BriefcaseBusiness className="h-5 w-5 text-action" />
            <h3 className="mt-4 text-xl font-bold text-ink">Current Role</h3>
            <p className="mt-2 font-semibold text-slate-700">Data & AI Specialist - KNE (Remote, Iraq)</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">Jan 2026 - Present</p>
          </div>
          <div className="rounded-lg border border-line bg-panel p-5">
            <BriefcaseBusiness className="h-5 w-5 text-action" />
            <h3 className="mt-4 text-xl font-bold text-ink">Previous Role</h3>
            <p className="mt-2 font-semibold text-slate-700">Data Analyst - KNE (Remote, Iraq)</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">Jan 2025 - Dec 2025</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-line bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>Omar Takrouri - Data & AI Specialist</span>
          <span>Mock data only - Built for recruiter review</span>
        </div>
      </footer>

      <CaseModal caseStudy={activeCase} onClose={() => setActiveCase(null)} />
    </main>
  );
}

function Boundary({ title, icon, items }: { title: string; icon: "yes" | "no"; items: string[] }) {
  const Icon = icon === "yes" ? Check : X;
  return (
    <div className="rounded-lg border border-line bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <span className={icon === "yes" ? "rounded-md bg-teal-50 p-2 text-signal" : "rounded-md bg-red-50 p-2 text-action"}>
          <Icon className="h-4 w-4" />
        </span>
        <h3 className="text-lg font-bold uppercase text-ink">{title}</h3>
      </div>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
