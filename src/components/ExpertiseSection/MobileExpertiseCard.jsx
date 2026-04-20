import VideoCard from "../hero/VideoCard";
import Button from "../UI/Button";

export default function MobileExpertiseCard({ card }) {
  return (
    <div className="flex xs:hidden flex-col px-6 pt-6 pb-8 gap-5 min-h-[calc(100vh-10rem)]">
      {/* top row: chip + number */}
      <div className="flex items-start justify-between">
        <span
          className="inline-block text-sm font-medium px-3 py-2 rounded-[8px] tracking-tight leading-none w-fit"
          style={{ background: card.chipBg, color: card.chipText }}
        >
          {card.label}
        </span>
        <div
          className="text-[4rem] font-semibold tracking-tighter leading-[0.5]"
          style={{ color: card.numColor }}
        >
          {card.id}
        </div>
      </div>

      {/* title */}
      <h2
        className="text-[38px] font-black leading-[1.5] tracking-tighter"
        style={{ color: card.textColor }}
      >
        {card.title}
      </h2>

      {/* video — grows to fill space */}
      <div className="flex-1 -rotate-2 min-h-0">
        <div
          className={`w-[150px] h-[200px] ${
            card.id === "01" ? "bg-[#ff3000]" : "bg-[#ffffff]"
          } p-1.5 rounded-[20px]`}
        >
          <div className="w-full h-full rounded-[14px] overflow-hidden">
            <VideoCard videoSrc={card.videoSrc} />
          </div>
        </div>
      </div>

      {/* subtitle + desc + button */}
      <div className="flex flex-col gap-3">
        <h3
          className="text-[20px] font-bold leading-snug tracking-tight"
          style={{ color: card.textColor }}
        >
          {card.subtitle}
        </h3>
        <p
          className="text-[18px] max-w-[30.5ch] font-medium leading-snug tracking-tight"
          style={{ color: card.textColor }}
        >
          {card.desc}
        </p>
        <div className="mt-1">
          <Button
            text={card.cta}
            card={card}
            bgColor={card.btnBg}
            textColor={card.btnText}
          />
        </div>
      </div>
    </div>
  );
}
