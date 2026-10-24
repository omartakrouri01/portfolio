import { Check, Mic, Pencil, Send } from "lucide-react";

const waveform = [6, 12, 18, 10, 22, 14, 8, 20, 26, 12, 16, 9, 21, 13, 7, 17, 24, 11, 15, 8];

const confirmFields = [
  ["Client", "شركة النور للتجارة", null],
  ["Method", "Phone call", null],
  ["Spoke to", "Accounts manager", null],
  ["Outcome", "Promised payment", null],
  ["Next due", "Tue 3 Nov", "الثلاثاء الجاي"]
];

const checklist = [
  ["Contact date", true],
  ["Method", true],
  ["Person", true],
  ["Outcome", true],
  ["Next step", true],
  ["Due date", true],
  ["Reason", true],
  ["Amount", false]
] as const;

export function AlJabiPreview() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-slate-300 bg-[#dfe7ee] p-4 shadow-sm">
      <div className="flex items-center gap-3 rounded-md bg-[#2b5278] px-3 py-2 text-white">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#5fa8d3] text-sm font-bold">ج</div>
        <div>
          <p className="text-sm font-semibold">Al Jabi</p>
          <p className="text-[11px] text-sky-100">bot</p>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <div className="ml-auto w-fit max-w-[85%] rounded-lg rounded-br-sm bg-[#e1f7c7] px-3 py-2 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4fae4e] text-white">
              <Mic className="h-4 w-4" />
            </span>
            <div className="flex h-7 items-center gap-[3px]">
              {waveform.map((height, index) => (
                <span
                  key={index}
                  className="wave-bar w-[3px] rounded-full bg-[#4fae4e]"
                  style={{ height: `${height}px`, animationDelay: `${index * 0.08}s` }}
                />
              ))}
            </div>
            <span className="text-xs text-slate-500">0:14</span>
          </div>
        </div>

        <div className="w-fit max-w-[90%] rounded-lg rounded-bl-sm bg-white px-3 py-2 text-sm shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">Transcript</p>
          <p className="mt-1 leading-6 text-ink" dir="rtl" lang="ar">
            اتصلت اليوم بمدير الحسابات بشركة النور، ووعد يدفع الثلاثاء الجاي
          </p>
        </div>

        <div className="w-full max-w-[95%] rounded-lg rounded-bl-sm bg-white p-3 text-sm shadow-sm">
          <p className="font-semibold text-ink">Check before sending to Trello</p>
          <dl className="mt-2 space-y-1.5">
            {confirmFields.map(([label, value, said]) => (
              <div key={label} className="flex flex-wrap items-baseline justify-between gap-x-3 border-b border-slate-100 pb-1.5 last:border-0">
                <dt className="text-xs font-semibold text-slate-500">{label}</dt>
                <dd className="text-right text-sm font-semibold text-ink">
                  {value}
                  {said ? (
                    <span className="block text-[11px] font-normal text-slate-500">
                      you said: <span lang="ar">{said}</span>
                    </span>
                  ) : null}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-semibold">
            <span className="inline-flex items-center justify-center gap-1 rounded-md bg-slate-100 py-2 text-[#2b5278]">
              <Pencil className="h-3.5 w-3.5" />
              Edit
            </span>
            <span className="animated-pulse inline-flex items-center justify-center gap-1 rounded-md bg-[#2b5278] py-2 text-white">
              <Send className="h-3.5 w-3.5" />
              Send to Trello
            </span>
          </div>
        </div>

        <div className="w-full max-w-[95%] rounded-lg rounded-bl-sm bg-white p-3 text-sm shadow-sm">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-ink">Follow-up quality</p>
            <span className="rounded bg-teal-50 px-2 py-0.5 text-xs font-bold text-signal">7 / 8 checks</span>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-4">
            {checklist.map(([label, passed]) => (
              <span
                key={label}
                className={`inline-flex items-center gap-1 rounded px-2 py-1 text-[11px] font-semibold ${
                  passed ? "bg-teal-50 text-signal" : "bg-amber-50 text-amber"
                }`}
              >
                {passed ? <Check className="h-3 w-3" /> : <span className="px-0.5">!</span>}
                {label}
              </span>
            ))}
          </div>
          <p className="mt-2 text-xs text-slate-500">Suggested next step: continue · follow up Tue 3 Nov</p>
        </div>
      </div>
    </div>
  );
}
