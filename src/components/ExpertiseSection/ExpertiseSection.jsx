import { useEffect, useRef, useState } from "react";
import VideoCard from "../hero/VideoCard";
import Button from "../UI/Button";

const CARDS = [
  {
    id: "01",
    label: "Expertise",
    title: "Social strategy",
    subtitle: "Slimme strategie. Sterke start.",
    desc: "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
    cta: "Meer over social strategie",
    href: "#",
    bg: "#ffffff",
    textColor: "#1a1a1a",
    numColor: "#eae6d8",
    chipBg: "#",
    chipText: "#1a1a1a",
    btnBg: "#ff3000",
    btnText: "#ffffff",
    mediaBorder: "#ff3d00",
    mediaGrad: "linear-gradient(135deg,#d4c4ac 0%,#9e7c58 100%)",
  },
  {
    id: "02",
    label: "Expertise",
    title: "Content creation",
    subtitle: "Content die opvalt en raakt.",
    desc: "We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.",
    cta: "Meer over content creatie",
    href: "#",
    bg: "#ff9bf7ad",
    textColor: "#1a1a1a",
    numColor: "#ffbffc",
    chipBg: "#ffffff",
    chipText: "#1a1a1a",
    btnBg: "#ffffff",
    btnText: "#1a1a1a",
    mediaBorder: "rgba(255,255,255,0.5)",
    mediaGrad: "linear-gradient(135deg,#a855f7 0%,#3b0764 100%)",
  },
  {
    id: "03",
    label: "Expertise",
    title: "Activation",
    subtitle: "Zichtbaar waar en wanneer het telt.",
    desc: "De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.",
    cta: "Meer over activatie",
    href: "#",
    bg: "#00d798",
    textColor: "#1a1a1a",
    numColor: "#3af1bb",
    chipBg: "#ffffff",
    chipText: "#1a1a1a",
    btnBg: "#ffffff",
    btnText: "#1a1a1a",
    mediaBorder: "rgba(255,255,255,0.45)",
    mediaGrad: "linear-gradient(135deg,#5fffd8 0%,#007a55 100%)",
  },
  {
    id: "04",
    label: "Expertise",
    title: "Data",
    subtitle: "Inzichten die impact maken.",
    desc: "We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.",
    cta: "Meer over data",
    href: "#",
    bg: "#205ced",
    textColor: "#1a1a1a",
    numColor: "#0295ff",
    chipBg: "#ffffff",
    chipText: "#1a1a1a",
    btnBg: "#ffffff",
    btnText: "#1a1a1a",
    mediaBorder: "rgba(255,255,255,0.30)",
    mediaGrad: "linear-gradient(135deg,#6ea8ff 0%,#002eaa 100%)",
  },
];

function CardFace({ card }) {
  return (
    <div
      className="w-full rounded-[24px] xs:rounded-[32px] lg:rounded-[40px] overflow-hidden"
      style={{ background: card.bg }}
    >
      {/* ── MOBILE (<480px): single column stack, full height ── */}
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
          className="text-[42px] font-black leading-[1.5] tracking-tight"
          style={{ color: card.textColor }}
        >
          {card.title}
        </h2>

        {/* video — grows to fill space */}
        <div className="flex-1 -rotate-2 min-h-0">
          <div
            className={`w-[200px] h-[290px] ${
              card.id === "01" ? "bg-[#ff3000]" : "bg-[#ffffff]"
            } p-1.5 rounded-[20px]`}
          >
            <div className="w-full h-full rounded-[14px] overflow-hidden">
              <VideoCard videoSrc="https://gethyped.b-cdn.net/New%20Reach/new-reach-loop.mp4" />
            </div>
          </div>
        </div>

        {/* subtitle + desc + button */}
        <div className="flex flex-col gap-3">
          <h3
            className="text-[26px] font-bold leading-snug tracking-tight"
            style={{ color: card.textColor }}
          >
            {card.subtitle}
          </h3>
          <p
            className="text-[20px] max-w-[30.5ch] font-medium leading-snug tracking-tight"
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

      {/* ── TABLET (480px–1023px): 2-col, full height ── */}
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
          <VideoCard videoSrc="https://gethyped.b-cdn.net/New%20Reach/new-reach-loop.mp4" />
        </div>
      </div>
    </div>
  </div>
</div>

      {/* ── DESKTOP (≥1024px): original layout ── */}
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
                <VideoCard videoSrc="https://gethyped.b-cdn.net/New%20Reach/new-reach-loop.mp4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExpertiseSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const n = CARDS.length;

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollable = sectionRef.current.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      setProgress(Math.max(0, Math.min(1, -rect.top / scrollable)));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
  const slotSize = 1 / n;

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${n * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {CARDS.map((card, i) => {
          const isLast = i === n - 1;
          const slotStart = i * slotSize;

          const rawEnter =
            i === 0 ? 1 : (progress - (i - 1) * slotSize) / slotSize;
          const enterP = ease(Math.max(0, Math.min(1, rawEnter)));
          const incomingY = (1 - enterP) * 100;

          const rawExit = isLast ? 0 : (progress - slotStart) / slotSize;
          const exitP = ease(Math.max(0, Math.min(1, rawExit)));

          const outgoingScale = 1 - exitP * 0.12;
          const outgoingY = -exitP * 18;
          const outgoingOpacity = exitP < 0.2 ? 1 : 1 - (exitP - 0.2) / 0.8;

          const isGone = !isLast && exitP >= 1;
          if (isGone) return null;

          const combinedTranslateY = `calc(${incomingY}vh + ${outgoingY}%)`;
          const combinedOpacity =
            enterP < 1 ? enterP : Math.max(0, outgoingOpacity);

          return (
            <div
              key={card.id}
              className="absolute inset-0 px-3  xs:px-6 lg:px-10 py-8 xs:py-8 lg:py-16"
              style={{
                transform: `translateY(${combinedTranslateY}) scale(${outgoingScale})`,
                opacity: combinedOpacity,
              }}
            >
              <CardFace card={card} />
            </div>
          );
        })}
      </div>
    </section>
  );
}