import VideoCard from "../hero/VideoCard";
import Button from "../UI/Button";

export default function TabletExpertiseCard({ card }) {
  return (
    <div className="hidden xs:flex lg:hidden flex-col px-10 py-10 gap-0 min-h-[calc(100vh-5rem)]">
      {/* top: chip + number + title */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex flex-col gap-4">
          <span
            className="inline-block text-base font-medium px-3 py-2 rounded-[8px] tracking-tight leading-none w-fit"
            style={{ background: card.chipBg, color: card.chipText }}
          >
            {card.label}
          </span>
          <h2
            className="text-[clamp(40px,6vw,80px)] font-black leading-[0.95] tracking-tight"
            style={{ color: card.textColor }}
          >
            {card.title}
          </h2>
        </div>
        <div
          className="text-[5rem] font-semibold tracking-tighter leading-[0.35] pt-2"
          style={{ color: card.numColor }}
        >
          {card.id}
        </div>
      </div>

      {/* spacer */}
      <div className="flex-1" />

      {/* bottom: text + video side by side */}
      <div className="flex items-end justify-between gap-6">
        {/* text + button */}
        <div className="flex flex-col gap-3">
          <h3
            className="text-[clamp(18px,2.5vw,26px)] font-bold leading-snug tracking-tight"
            style={{ color: card.textColor }}
          >
            {card.subtitle}
          </h3>
          <p
            className="text-[clamp(14px,2vw,20px)] font-medium leading-snug tracking-tight max-w-[35ch]"
            style={{ color: card.textColor }}
          >
            {card.desc}
          </p>
          <div>
            <Button
              text={card.cta}
              card={card}
              bgColor={card.btnBg}
              textColor={card.btnText}
            />
          </div>
        </div>

        {/* video */}
        <div className="rotate-3 shrink-0">
          <div
            className={`w-[220px] h-[310px] ${
              card.id === "01" ? "bg-[#ff3000]" : "bg-[#ffffff]"
            } p-1.5 rounded-[20px]`}
          >
            <div className="w-full h-full rounded-[14px] overflow-hidden">
              <VideoCard videoSrc={card.videoSrc} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
