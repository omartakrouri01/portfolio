export type CaseStudy = {
  id: string;
  eyebrow: string;
  title: string;
  systemType: string;
  problem: string;
  solution: string[];
  kpis: string[];
  data: string;
  users: string;
  impact: string[];
  outcome?: string[];
  ai: string;
  visuals: Array<{
    type: "image" | "live";
    src?: string;
    label: string;
  }>;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "hawk-ei",
    eyebrow: "Case 1",
    title: "Hawk-EI",
    systemType: "Maintenance Intelligence System",
    problem: "No real-time visibility of field engineers across location, schedule, workload, and active maintenance tickets.",
    solution: [
      "React-based live map integrated with ERP field operations data.",
      "Supervisor view for engineer location, active tickets, schedule status, and idle engineers.",
      "Performance dashboard that converts ticket history into downtime and completion KPIs."
    ],
    kpis: ["-20% downtime", "+18% completion rate"],
    data: "ERP only",
    users: "Maintenance supervisors, managers",
    impact: [
      "Reduced blind spots in daily engineer allocation.",
      "Made idle capacity visible before it became missed service time.",
      "Helped supervisors prioritize tickets by status, region, and engineer availability."
    ],
    ai: "AI-assisted development tools",
    visuals: [
      { type: "image", src: "/images/case-1-map.png", label: "Live field map visualization - Mock Data" },
      { type: "image", src: "/images/case-1-dashboard.png", label: "Engineer KPI dashboard - Mock Data" }
    ]
  },
  {
    id: "office-display",
    eyebrow: "Case 2",
    title: "Office Display",
    systemType: "Executive Visibility System",
    problem: "Company KPIs were fragmented across ERP reports, shadow systems, and spreadsheets, so executives lacked one visible operating picture.",
    solution: [
      "Company-wide performance display system for executive areas and department screens.",
      "Vision KPI dashboard, department performance slides, and animated SVG-based UI.",
      "Designed as a living performance board instead of a static report."
    ],
    kpis: ["+60% visibility on strategic KPIs"],
    data: "ERP + shadow systems + Excel",
    users: "Entire company",
    impact: [
      "Put strategic KPIs where leadership and teams could see them daily.",
      "Turned separate departmental updates into one shared performance rhythm.",
      "Reduced dependency on manual KPI status requests."
    ],
    ai: "AI-assisted development tools",
    visuals: [{ type: "live", label: "Animated executive KPI preview - Mock Data" }]
  },
  {
    id: "sales-bot",
    eyebrow: "Case 3",
    title: "Sales Bot",
    systemType: "Sales Execution Automation System",
    problem: "Sales leads were forgotten after initial contact, causing weak follow-up discipline and lower conversion.",
    solution: [
      "Telegram bot that sends daily 8 AM lead reminders.",
      "Inline buttons for marking contact, snoozing leads, adding notes, and updating expected close.",
      "ERP sync keeps lead status changes in the source system."
    ],
    kpis: ["+31% conversion rate"],
    data: "ERP only",
    users: "Sales reps, managers",
    impact: [
      "Raised follow-up consistency across high-priority leads.",
      "Kept sales actions close to the reps' daily communication channel.",
      "Created manager visibility into overdue and aging opportunities."
    ],
    ai: "AI-assisted development tools",
    visuals: [{ type: "image", src: "/images/case-3-telegram.jpeg", label: "Telegram lead workflow mock - Mock Data" }]
  },
  {
    id: "startup-growth",
    eyebrow: "Case 4",
    title: "Startup Growth Intelligence",
    systemType: "Customer Retention Intelligence System",
    problem: "A B2B cosmetics startup lacked visibility on retention versus acquisition strategy across wholesale and drop shipping.",
    solution: [
      "Shopify data analysis with Power BI retention dashboard.",
      "Churn, cohort, customer frequency, and repeat purchase modeling.",
      "Feasibility study of an educational content initiative with merchant interviews for qualitative validation."
    ],
    kpis: ["92% one-time buyers", "38% weekly retention", "22% returning customers"],
    data: "Shopify + Excel + SQL",
    users: "Founders, growth team",
    impact: [
      "Identified drop shipping as the strongest retention channel.",
      "Prevented high-risk educational content rollout before heavy investment.",
      "Shifted strategy toward retention-led growth and repeat customer targets."
    ],
    outcome: [
      "Target clarified: 10 customers/day with at least one order.",
      "Growth focus moved from broad acquisition to channel-specific retention."
    ],
    ai: "AI-assisted analysis + automation tools",
    visuals: [{ type: "image", src: "/images/case-4-dashboard.png", label: "Power BI retention dashboard - Mock Data" }]
  }
];

export const selectedSystems = [
  { title: "Installation Tracking", caseId: "office-display", detail: "Operational progress into visible executive KPI rhythm" },
  { title: "Maintenance Intelligence", caseId: "hawk-ei", detail: "Live field visibility for supervisor decisions" },
  { title: "Sales Automation", caseId: "sales-bot", detail: "Follow-up discipline inside daily sales workflow" }
];
