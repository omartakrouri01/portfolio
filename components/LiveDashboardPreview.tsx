import { Activity, Building2, Target, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const departmentRows = [
  ["Sales", "87%", 86],
  ["Maintenance", "74%", 74],
  ["Ops", "91%", 91],
  ["QC", "68%", 68]
];

const summaryCards: Array<[string, string, LucideIcon]> = [
  ["Vision KPI", "82%", Target],
  ["Functions", "5", Building2],
  ["Decision Cycle", "+34%", TrendingUp]
];

export function LiveDashboardPreview() {
  return (
    <div className="case-preview-scan relative overflow-hidden rounded-lg border border-slate-300 bg-[#f8fafb] p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-signal">Executive Office Display</p>
          <h4 className="mt-1 text-lg font-semibold text-ink">Strategic KPI Command View</h4>
        </div>
        <div className="flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-600">
          <Activity className="h-4 w-4 text-signal" />
          Live SVG UI
        </div>
      </div>

      <div className="grid gap-3 py-4 sm:grid-cols-3">
        {summaryCards.map(([label, value, Icon]) => (
          <div key={label} className="rounded-md border border-slate-200 bg-white p-3">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-semibold uppercase">{label}</span>
              <Icon className="h-4 w-4 text-action" />
            </div>
            <p className="mt-3 text-2xl font-bold text-ink">{value}</p>
          </div>
        ))}
      </div>

      <svg viewBox="0 0 680 230" className="h-auto w-full rounded-md border border-slate-200 bg-white" role="img" aria-label="Animated mock executive KPI dashboard">
        <defs>
          <linearGradient id="lineGradient" x1="0" x2="1">
            <stop offset="0%" stopColor="#0f766e" />
            <stop offset="100%" stopColor="#b42318" />
          </linearGradient>
        </defs>
        <rect x="24" y="22" width="190" height="170" rx="8" fill="#eef6f5" stroke="#b7d8d3" />
        <circle cx="119" cy="106" r="58" fill="none" stroke="#d7e0e5" strokeWidth="18" />
        <circle cx="119" cy="106" r="58" fill="none" stroke="#0f766e" strokeDasharray="282 365" strokeLinecap="round" strokeWidth="18">
          <animate attributeName="stroke-dasharray" values="210 365;282 365;240 365;282 365" dur="5s" repeatCount="indefinite" />
        </circle>
        <text x="119" y="100" textAnchor="middle" fill="#14212b" fontSize="34" fontWeight="700">82%</text>
        <text x="119" y="128" textAnchor="middle" fill="#55616d" fontSize="13">Vision KPI</text>

        <polyline points="250,160 310,126 370,142 430,84 490,104 550,58 626,78" fill="none" stroke="url(#lineGradient)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
          <animate attributeName="points" values="250,160 310,126 370,142 430,84 490,104 550,58 626,78;250,150 310,132 370,118 430,92 490,86 550,72 626,52;250,160 310,126 370,142 430,84 490,104 550,58 626,78" dur="6s" repeatCount="indefinite" />
        </polyline>
        {[250, 310, 370, 430, 490, 550, 626].map((x, index) => (
          <circle key={x} cx={x} cy={[160, 126, 142, 84, 104, 58, 78][index]} r="6" fill="#fff" stroke="#0f766e" strokeWidth="3" />
        ))}
        <text x="250" y="32" fill="#14212b" fontSize="14" fontWeight="700">Department Performance Trend</text>
        <text x="250" y="208" fill="#697684" fontSize="12">Mock Data</text>
      </svg>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {departmentRows.map(([name, value, width]) => (
          <div key={name as string} className="rounded-md border border-slate-200 bg-white p-3">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-semibold text-ink">{name}</span>
              <span className="text-slate-600">{value}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="animated-bar h-full rounded-full bg-signal" style={{ width: `${width}%`, animationDelay: `${Number(width) / 50}s` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
