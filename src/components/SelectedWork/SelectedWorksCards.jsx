import { useEffect, useRef } from "react";
import VideoCard from "../hero/VideoCard";

const WORKS = [
  {
    videoSrc: "https://gethyped.b-cdn.net/Bullit/Bullit%20%7C%20Loop.mp4",
    title: "Van nul naar vol, binnen 3 weken",
    tagLabel: "Bullit",
    tagColor: "#ff9270",
    tagClassName: "bg-[#e63820]",
    borderClassName: "border-[#e63820]",
    overlayBg: "#ff3000",
  },
  {
    videoSrc: "https://gethyped.b-cdn.net/Roasta/roasta-loop.mp4",
    title: "Zacht in smaak, sterk in beeld",
    tagLabel: "Roasta",
    tagColor: "#0295ff",
    tagClassName: "bg-[#3b6be8]",
    borderClassName: "border-[#3b6be8]",
    overlayBg: "#0d8dff",
  },
  {
    videoSrc: "https://gethyped.b-cdn.net/Loco/loco-bites-loop.mp4",
    title: "Content die écht smaakt (en raakt)",
    tagLabel: "Loco",
    tagColor: "#3af1bb",
    tagClassName: "bg-[#00b87a]",
    borderClassName: "border-[#00d68f]",
    overlayBg: "#00d798",
  },
];

const PARALLAX_SPEEDS = [0.06, 0.1, 0.08];

export default function SelectedWorksCards() {
  const wrapperRef = useRef(null);
  const cardRefs = useRef([]);
  const sectionOffsetRef = useRef(null);

  useEffect(() => {
    const recordOffset = () => {
      if (wrapperRef.current) {
        sectionOffsetRef.current =
          wrapperRef.current.getBoundingClientRect().top + window.scrollY;
      }
    };

    recordOffset();
    window.addEventListener("resize", recordOffset);

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const scrolledPastSection =
          window.scrollY - (sectionOffsetRef.current ?? 0);

        cardRefs.current.forEach((el, i) => {
          if (!el) return;
          const lift = scrolledPastSection * PARALLAX_SPEEDS[i];
          el.style.transform = `translateY(${-lift}px)`;
        });

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", recordOffset);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="flex gap-8 max-w-[1600px] justify-between mx-auto pt-4 pb-8"
    >
      {WORKS.map((work, i) => (
        <div
          key={i}
          ref={(el) => (cardRefs.current[i] = el)}
          className={`
            w-[480px] h-[600px] rounded-[30px] shrink-0 p-2
            hover:-rotate-2 hover:scale-105 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            ${i === 0 ? "bg-[#ff3000] mt-15" : ""}
            ${i === 1 ? "bg-[#0d8dff] -mt-15" : ""}
            ${i === 2 ? "bg-[#00d798] -mt-40" : ""}
          `}
          style={{ willChange: "transform" }}
        >
          <div className="w-full h-full rounded-[18px] overflow-hidden">
            <VideoCard
              videoSrc={work.videoSrc}
              title={work.title}
              badge={work.badge}
              tagLabel={work.tagLabel}
              tagBg={work.tagColor}
              overlayBg={work.overlayBg}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
