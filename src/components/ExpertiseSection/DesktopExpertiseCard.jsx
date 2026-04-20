import VideoCard from "../hero/VideoCard";
import Button from "../UI/Button";

export default function DesktopExpertiseCard({ card }) {
  return (
    <div className="hidden lg:grid grid-cols-[1fr_auto] px-15 py-15 gap-6 items-start min-h-[calc(100vh-8rem)]">
      {/* LEFT */}
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-6">
          <span
            className="inline-block text-2xl font-medium px-3 py-3 rounded-[8px] tracking-tight leading-none w-fit"
            style={{ background: card.chipBg, color: card.chipText }}
          >
            {card.label}
          </span>
          <h2
            className="text-[clamp(60px,5.5vw,120px)] font-black leading-[0.95] tracking-tight"
            style={{ color: card.textColor }}
          >
            {card.title}
          </h2>
        </div>
        <div className="flex flex-col gap-6 mt-10">
          <div className="flex flex-col gap-3 max-w-[55ch]">
            <h3
              className="text-[clamp(26px,4vw,32px)] font-bold leading-relaxed tracking-tight"
              style={{ color: card.textColor }}
            >
              {card.subtitle}
            </h3>
            <p
              className="text-[clamp(22px,3vw,26px)] max-w-[32ch] font-medium leading-snug tracking-tighter"
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
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col items-end">
        <div
          className="text-[8rem] font-semibold tracking-tighter leading-[0.35] pt-6"
          style={{ color: card.numColor }}
        >
          {card.id}
        </div>
        <div className="rotate-3">
          <div
            className={`w-[390px] h-[550px] ${
              card.id === "01" ? "bg-[#ff3000]" : "bg-[#ffffff]"
            } p-2 rounded-[30px]`}
          >
            <div className="w-full h-full rounded-[18px] overflow-hidden">
              <VideoCard videoSrc={card.videoSrc} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
