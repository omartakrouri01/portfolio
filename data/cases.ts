export type CaseCategory = "data" | "ai";

export type Kpi = {
  value: string;
  label: string;
};

export type CaseStudy = {
  id: string;
  category: CaseCategory;
  eyebrow: string;
  title: string;
  systemType: string;
  problem: string;
  flow: string;
  solution: string[];
  kpis: Kpi[];
  data: string;
  users: string;
  impact: string[];
  outcome?: string[];
  decisions?: string[];
  role?: string;
  status?: string;
  stack?: string[];
  ai: string;
  visuals: Array<{
    type: "image" | "live";
    src?: string;
    preview?: "office-display" | "complaints-board" | "al-jabi";
    label: string;
  }>;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "office-display",
    category: "data",
    eyebrow: "Data Project 1",
    title: "Office Display",
    systemType: "Executive Visibility System",
    problem: "Company KPIs were fragmented across ERP reports, shadow systems, and spreadsheets, so executives lacked one visible operating picture.",
    flow: "ERP → Shadow System → KPIs → Decision",
    solution: [
      "Company-wide performance display system for executive areas and department screens.",
      "Vision KPI dashboard, department performance slides, and animated SVG-based UI.",
      "Designed as a living performance board instead of a static report."
    ],
    kpis: [{ value: "+60%", label: "visibility on strategic KPIs" }],
    data: "ERP + shadow systems + Excel",
    users: "Entire company",
    impact: [
      "Put strategic KPIs where leadership and teams could see them daily.",
      "Turned separate departmental updates into one shared performance rhythm.",
      "Reduced dependency on manual KPI status requests."
    ],
    ai: "AI-assisted development tools",
    visuals: [{ type: "live", preview: "office-display", label: "Animated executive KPI preview - Mock Data" }]
  },
  {
    id: "sales-bot",
    category: "data",
    eyebrow: "Data Project 2",
    title: "Sales Bot",
    systemType: "Sales Execution Automation System",
    problem: "Sales leads were forgotten after initial contact, causing weak follow-up discipline and lower conversion.",
    flow: "ERP → Telegram Bot → Follow-up KPIs → Decision",
    solution: [
      "Telegram bot that sends daily 8 AM lead reminders.",
      "Inline buttons for marking contact, snoozing leads, adding notes, and updating expected close.",
      "ERP sync keeps lead status changes in the source system."
    ],
    kpis: [{ value: "+31%", label: "conversion rate" }],
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
    category: "data",
    eyebrow: "Data Project 3",
    title: "Startup Growth Intelligence",
    systemType: "Customer Retention Intelligence System",
    problem: "A B2B cosmetics startup lacked visibility on retention versus acquisition strategy across wholesale and drop shipping.",
    flow: "Shopify → SQL / Excel → Power BI → Strategy",
    solution: [
      "Shopify data analysis with Power BI retention dashboard.",
      "Churn, cohort, customer frequency, and repeat purchase modeling.",
      "Feasibility study of an educational content initiative with merchant interviews for qualitative validation."
    ],
    kpis: [
      { value: "92%", label: "one-time buyers found" },
      { value: "38%", label: "weekly retention" },
      { value: "22%", label: "returning customers" }
    ],
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
  },
  {
    id: "complaints-board",
    category: "ai",
    eyebrow: "AI Project 1",
    title: "Customer Complaints Board",
    systemType: "AI Complaint Intake & Tracking System",
    problem: "Field staff reported customer complaints in a WhatsApp group. Nobody owned them and there was no record, so no one could say how many came in, how long they stayed open, or whether they were ever fixed.",
    flow: "Email → AI Extraction → Owner & Status → Closed Ticket",
    solution: [
      "Intake: n8n watches a shared mailbox through Microsoft Graph. Each new email opens a ticket or joins its thread.",
      "Extraction: one model call pulls out site, unit, department, issue and a summary, with a confidence score per field.",
      "Learning: admin corrections are stored with an embedding and fed into the prompt for similar complaints.",
      "Routing: the owner comes from the email's recipients, then a code-checked model choice, then a department match. Disagreement goes to human review.",
      "Status from replies: a model reads each owner reply to decide resolved or in progress. A person's edit is never overwritten.",
      "Closure: the raiser rates the outcome 1–5. If a step fails, one email tells the admin what broke and which tickets were affected."
    ],
    kpis: [
      { value: "+30%", label: "complaints closed rate" },
      { value: "90%", label: "capture rate" },
      { value: "12", label: "automated workflows" },
      { value: "8 wks", label: "idea to production" }
    ],
    data: "Shared Outlook mailbox (Microsoft Graph) + Supabase Postgres",
    users: "Field staff, managers, Customer Excellence",
    impact: [
      "90% of complaints raised now become tracked tickets, including ones found later outside the system.",
      "Closed rate up 30% compared with before the board.",
      "Nobody learns a new tool: email stays the interface and the board is the record.",
      "Admins see closed rate and median days open live on a kanban board."
    ],
    decisions: [
      "The AI always shows its hand: every AI-written field is labelled, and the label changes the moment a person edits it.",
      "Colour means action: orange only where a person must act, light blue where the machine is speaking or unsure.",
      "Confidence scores stay with the admin. Raisers see plain status and plain words.",
      "A metric that can't be gamed: every correction is logged, so corrections per ticket fall only if extraction really improves.",
      "No server to run: a static app on Supabase with row-level security doing all access control."
    ],
    role: "Product owner, tech lead, builder",
    status: "In production since Oct 2026",
    stack: ["React 19", "TypeScript", "Supabase", "pgvector", "n8n", "OpenAI", "Microsoft Graph", "Entra ID"],
    ai: "LLM field extraction with confidence, owner routing and reply-based status; a correction-learning loop with embeddings. Built with Claude Code against a locked spec.",
    visuals: [{ type: "live", preview: "complaints-board", label: "Admin board with AI-extracted fields - Mock Data" }]
  },
  {
    id: "al-jabi",
    category: "ai",
    eyebrow: "AI Project 2",
    title: "Al Jabi (الجابي)",
    systemType: "Voice-First AI Collections Assistant",
    problem: "Debt collectors spend the day on calls and visits. Typing structured Arabic updates into Trello on a phone was slow and often skipped, so managers had cards with no recent comments, missing next-step dates and no view of who did what.",
    flow: "Voice Note → Transcript → AI Extraction → Confirmed Trello Update",
    solution: [
      "A collector sends a voice note in everyday Arabic to a Telegram bot.",
      "ElevenLabs Scribe v2 transcribes it, and an LLM extracts client, contact method, person, outcome and next due date.",
      "A custom fuzzy matcher finds the right Trello card. If the client has several invoices, the bot asks which one.",
      "A confirmation card shows each value next to the collector's own words. Nothing reaches Trello without a human tap.",
      "Around it: a morning digest per collector, a daily email report for finance and a live Excel mirror.",
      "Phase 2: every note is checked against finance's 8-point checklist, and each card is scored on 10 criteria with a suggested next step."
    ],
    kpis: [
      { value: "+25%", label: "cash collection health" },
      { value: "+60%", label: "clients contacted per collector per day" },
      { value: "53/54", label: "spoken queries matched first" },
      { value: "$0.001", label: "AI cost per note evaluated" }
    ],
    data: "Telegram voice notes + Trello boards + n8n Data Tables",
    users: "Field debt collectors, finance team",
    impact: [
      "Collectors log updates by voice in seconds instead of typing them in Trello.",
      "Finance gets a daily view of who contacted whom, and which updates were never sent.",
      "Each Trello action is credited to the collector who did it, not a shared bot account.",
      "Moved from regional boards to one board per collector, with no downtime."
    ],
    decisions: [
      "The AI reads, code decides: the model only extracts facts. Dates, matching, scoring and escalation are deterministic and explainable.",
      "Matching built from real data: IDF-weighted tokens, trigram similarity and an Arabic/Latin consonant-skeleton comparison.",
      "Cards move only on an explicit spoken order, enforced by parsing that handles negation and filler words, with 60+ tests.",
      "Rules live in data tables, so finance can change the checklist and thresholds without a redeploy.",
      "Score stability measured: changes between repeated runs fell from 15 of 25 notes to 4 of 25 after rule clarifications."
    ],
    role: "Sole designer and builder",
    status: "In production since Sep 2026",
    stack: ["n8n", "Telegram Bot API", "ElevenLabs Scribe v2", "OpenAI GPT", "Trello API", "Excel Online"],
    ai: "Arabic speech-to-text, LLM field extraction and collection-quality evaluation, with deterministic code for every decision. Built with Claude Code.",
    visuals: [{ type: "live", preview: "al-jabi", label: "Telegram voice-note flow - Mock Data" }]
  }
];

export const dataCases = caseStudies.filter((item) => item.category === "data");
export const aiCases = caseStudies.filter((item) => item.category === "ai");
