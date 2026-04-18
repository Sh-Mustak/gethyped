import { useEffect, useRef, useState } from "react";
import VideoCard from "../hero/VideoCard";

const CARDS = [
  {
    id: "01",
    label: "Expertise",
    title: "Social strategy",
    subtitle: "Slimme strategie. Sterke start.",
    desc: "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken.",
    cta: "Meer over social strategie",
    href: "#",
    bg: "#ffffff",
    textColor: "#1a1a1a",
    numColor: "#eae6d8",
    chipBg: "#eae6d8",
    chipText: "#1a1a1a",
    btnBg: "#ff3d00",
    btnText: "#ffffff",
    mediaBorder: "#ff3d00",
    mediaGrad: "linear-gradient(135deg,#d4c4ac 0%,#9e7c58 100%)",
  },
  {
    id: "02",
    label: "Expertise",
    title: "Content creation",
    subtitle: "Content die opvalt en raakt.",
    desc: "We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt.",
    cta: "Meer over content creatie",
    href: "#",
    bg: "#ff9bf7ad",
    textColor: "#1a1a1a",
    numColor: "#ffbffc",
    chipBg: "#ffffff",
    chipText: "#1a1a1a",
    btnBg: "#1a1a1a",
    btnText: "#ffffff",
    mediaBorder: "rgba(255,255,255,0.5)",
    mediaGrad: "linear-gradient(135deg,#a855f7 0%,#3b0764 100%)",
  },
  {
    id: "03",
    label: "Expertise",
    title: "Activation",
    subtitle: "Zichtbaar waar en wanneer het telt.",
    desc: "De juiste content verdient het om gezien te worden.",
    cta: "Meer over activatie",
    href: "#",
    bg: "#00d798",
    textColor: "#1a1a1a",
    numColor: "#3af1bb",
    chipBg: "#ffffff",
    chipText: "#1a1a1a",
    btnBg: "#1a1a1a",
    btnText: "#ffffff",
    mediaBorder: "rgba(255,255,255,0.45)",
    mediaGrad: "linear-gradient(135deg,#5fffd8 0%,#007a55 100%)",
  },
  {
    id: "04",
    label: "Expertise",
    title: "Data",
    subtitle: "Inzichten die impact maken.",
    desc: "We duiken in de cijfers om te snappen wat écht werkt.",
    cta: "Meer over data",
    href: "#",
    bg: "#205ced",
    textColor: "#ffffff",
    numColor: "#0295ff",
    chipBg: "#ffffff",
    chipText: "#1a1a1a",
    btnBg: "#ffffff",
    btnText: "#1a4fff",
    mediaBorder: "rgba(255,255,255,0.30)",
    mediaGrad: "linear-gradient(135deg,#6ea8ff 0%,#002eaa 100%)",
  },
];

function CardFace({ card }) {
  return (
    <div
      className="w-full rounded-[40px] grid grid-cols-[1fr_auto]  px-15 py-15 overflow-hidden items-start"
      style={{ background: card.bg }}
    >
      {/* LEFT SIDE */}
      <div className="flex flex-col justify-between h-full">
        {/* chip */}
        <span
          className="inline-block text-2xl font-medium px-3 py-2 rounded-[10px] tracking-tight leading-none w-fit"
          style={{ background: card.chipBg, color: card.chipText }}
        >
          {card.label}
        </span>

        {/* title + content */}
        <div className="flex flex-col gap-6 mt-10">
          <h2
            className="text-[clamp(40px,5.5vw,100px)] font-black leading-[0.95] tracking-tight"
            style={{ color: card.textColor }}
          >
            {card.title}
          </h2>

          <div className="flex flex-col gap-3 max-w-[55ch]">
            <h3
              className="text-lg font-bold leading-tight"
              style={{ color: card.textColor }}
            >
              {card.subtitle}
            </h3>

            <p
              className="text-sm leading-relaxed"
              style={{ color: card.textColor }}
            >
              {card.desc}
            </p>

            <a
              href={card.href}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold w-fit mt-2"
              style={{ background: card.btnBg, color: card.btnText }}
            >
              {card.cta} →
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE (NUMBER + MEDIA) */}
      <div className="flex flex-col items-end ">
        {/* SMALL NUMBER (fixed position style) */}
        <div
          className="text-[8rem] font-semibold tracking-tighter leading-[0.35] pt-6"
          style={{ color: card.numColor }}
        >
          {card.id}
        </div>

        {/* MEDIA */}
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
              className="absolute w-full px-10 py-16"
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
