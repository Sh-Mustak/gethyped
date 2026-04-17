/**
 * StatCard
 * --------
 * Displays a large stat number with a title + subtitle below.
 *
 * Props:
 *   bg    {string}  Tailwind bg class, e.g. "bg-[#2263ff]"
 *   stat  {string}  e.g. "10M+"
 *   title {string}  e.g. "Organische views"
 *   sub   {string}  e.g. "Groei door slimme content"
 */
export default function StatCard({ bg, stat, title, sub }) {
  return (
    <div
      className={`w-full h-full ${bg} flex flex-col justify-between p-4 sm:p-6 md:p-8`}
    >
      {/* ── Stat number ── */}
      <span className="text-3xl sm:text-4xl md:text-[5.25rem] font-black text-black tracking-tight leading-none">
        {stat}
      </span>

      {/* ── Bottom label block ── */}
      <div>
        <p className="text-[12px] sm:text-[24px] md:text-[32px] font-bold leading-tight">
          {title}
        </p>
        <div className="w-full h-[1px] bg-black my-1 sm:my-2" />
        <p className="text-[11px] sm:text-[16px] md:text-[20px] text-black/70 leading-none font-medium">
          {sub}
        </p>
      </div>
    </div>
  );
}
