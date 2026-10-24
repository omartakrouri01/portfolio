import { Inbox, Sparkles, UserRound } from "lucide-react";

const columns = [
  {
    name: "New",
    tickets: [
      { id: "CC-214", title: "Door stops between floors", site: "Riverside Tower", needsOwner: true },
      { id: "CC-213", title: "Noise in machine room", site: "Al Noor Mall", needsOwner: false }
    ]
  },
  {
    name: "In progress",
    tickets: [
      { id: "CC-209", title: "Escalator handrail slipping", site: "City Centre", needsOwner: false },
      { id: "CC-205", title: "Display panel not working", site: "Palm Residence", needsOwner: false }
    ]
  },
  {
    name: "Resolved",
    tickets: [{ id: "CC-198", title: "Lift button stuck on L3", site: "Harbor Offices", needsOwner: false }]
  }
];

const extractedFields = [
  ["Site", "Riverside Tower", "96%"],
  ["Unit", "Lift B2", "91%"],
  ["Department", "Maintenance", "88%"],
  ["Issue", "Door stops between floors", "94%"]
];

export function ComplaintsBoardPreview() {
  return (
    <div className="case-preview-scan relative overflow-hidden rounded-lg border border-slate-300 bg-[#f8fafb] p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1e3a5f]">Admin Board</p>
          <h4 className="mt-1 text-lg font-semibold text-ink">Customer Complaints</h4>
        </div>
        <div className="flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-600">
          <Inbox className="h-4 w-4 text-[#1e3a5f]" />
          complaints@ inbox
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 py-4">
        <div className="rounded-md border border-slate-200 bg-white p-3">
          <p className="text-xs font-semibold uppercase text-slate-500">Closed rate</p>
          <p className="mt-2 text-2xl font-bold text-[#1e3a5f]">78%</p>
        </div>
        <div className="rounded-md border border-slate-200 bg-white p-3">
          <p className="text-xs font-semibold uppercase text-slate-500">Median days open</p>
          <p className="mt-2 text-2xl font-bold text-[#1e3a5f]">2.5</p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {columns.map((column) => (
          <div key={column.name} className="rounded-md border border-slate-200 bg-slate-100/70 p-2">
            <p className="px-1 pb-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
              {column.name} · {column.tickets.length}
            </p>
            <div className="space-y-2">
              {column.tickets.map((ticket) => (
                <div key={ticket.id} className="rounded-md border border-slate-200 bg-white p-2.5 shadow-sm">
                  <p className="text-[11px] font-semibold text-slate-400">{ticket.id}</p>
                  <p className="mt-1 text-sm font-semibold leading-5 text-ink">{ticket.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{ticket.site}</p>
                  {ticket.needsOwner ? (
                    <span className="animated-pulse mt-2 inline-flex items-center gap-1 rounded bg-orange-100 px-2 py-0.5 text-[11px] font-bold text-orange-700">
                      <UserRound className="h-3 w-3" />
                      Needs owner
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-md border border-slate-200 bg-white p-3">
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-bold text-ink">CC-214 · Extracted from email</p>
          <span className="inline-flex items-center gap-1 rounded bg-sky-100 px-2 py-0.5 text-[11px] font-bold text-sky-700">
            <Sparkles className="h-3 w-3" />
            AI-generated
          </span>
        </div>
        <dl className="mt-3 grid gap-2 sm:grid-cols-2">
          {extractedFields.map(([label, value, confidence]) => (
            <div key={label} className="flex items-center justify-between gap-2 rounded border border-sky-100 bg-sky-50/60 px-2.5 py-1.5 text-xs">
              <div>
                <dt className="font-semibold text-slate-500">{label}</dt>
                <dd className="font-semibold text-ink">{value}</dd>
              </div>
              <span className="font-bold text-sky-700">{confidence}</span>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
