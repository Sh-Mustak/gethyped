// HeroCard.jsx

import { useState, useEffect } from "react";

// ─── Screen Size Hook ─────────────────────────────────────────
function useScreenSize() {
  const [size, setSize] = useState("desktop");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) setSize("mobile");
      else if (window.innerWidth < 1024) setSize("tablet");
      else setSize("desktop");
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

// ─── Card Data ────────────────────────────────────────────────
const CARDS = [
  {
    id: 1,
    type: "stat",
    bg: "bg-gradient-to-b from-purple-600 to-indigo-700",
    stat: "10M+",
    title: "Organische views",
    sub: "Groei door slimme content",
  },
  {
    id: 2,
    type: "photo",
    imgSrc:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80",
    blur: true,
  },
  {
    id: 3,
    type: "stat",
    bg: "bg-[#00d085]",
    stat: "30+",
    title: "Merken geholpen",
    sub: "Van start-up tot multinational",
  },
  {
    id: 4,
    type: "photo",
    imgSrc:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80",
    overlayText: "HIGH PERFORMANCE",
  },
];

// ─── Transform Logic ───────────────────────────────────────────
function getTransform(index, hoveredIndex, total, screen) {
  const gap =
    screen === "mobile" ? 120 :
    screen === "tablet" ? 260 :
    400;

  const rotations = [5, 4, -4, -10];
  const offsetsY = [0, -40, 0, -30];

  const center = (total - 1) / 2;
  const baseX = (index - center) * gap;
  const baseRotate = rotations[index];
  const baseY = offsetsY[index];

  if (hoveredIndex === null) {
    return { x: baseX, y: baseY, r: baseRotate, scale: 1, z: index };
  }

  if (hoveredIndex === index) {
    return { x: baseX, y: baseY - 10, r: 0, scale: 1.05, z: 50 };
  }

  const direction = index < hoveredIndex ? -1 : 1;

  return {
    x: baseX + direction * (screen === "mobile" ? 40 : 80),
    y: baseY,
    r: baseRotate,
    scale: 0.95,
    z: index,
  };
}

// ─── Card Component ────────────────────────────────────────────
function Card({ card, index, hoveredIndex, setHovered, total, screen }) {
  const { x, y, r, scale, z } = getTransform(
    index,
    hoveredIndex,
    total,
    screen
  );

  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      onClick={() => setHovered(index)} // mobile tap support
      style={{
        transform: `
          translateX(${x}px)
          translateY(${y}px)
          rotate(${r}deg)
          scale(${scale})
        `,
        zIndex: z,
        transition:
          "transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease",
      
      }}
      className="
        absolute
        w-[180px] h-[250px]
        sm:w-[260px] sm:h-[360px]
        md:w-[300px] md:h-[420px]
        lg:w-[430px] lg:h-[560px]
        rounded-[60px]
        overflow-hidden
        cursor-pointer
      "
    >
      {/* STAT CARD */}
      {card.type === "stat" ? (
        <div className={`w-full h-full ${card.bg} flex flex-col justify-end p-4`}>
          <span className="absolute top-4 left-4 text-3xl sm:text-4xl font-black text-black">
            {card.stat}
          </span>

          <div className="border-t border-black/30 pt-2">
            <p className="text-xs sm:text-sm font-bold">{card.title}</p>
            <p className="text-[10px] sm:text-xs text-black/70 mt-1">
              {card.sub}
            </p>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full">
          <img
            src={card.imgSrc}
            alt=""
            className={`w-full h-full object-cover ${
              card.blur ? "scale-105 blur-[2px] saturate-125" : ""
            }`}
          />

          {card.overlayText && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white text-[10px] sm:text-xs font-extrabold tracking-widest text-center py-1.5">
              {card.overlayText}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────
export default function HeroCard() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const screen = useScreenSize();

  // responsive card count
  const visibleCards =
    screen === "mobile"
      ? CARDS.slice(0, 2)
      : screen === "tablet"
      ? CARDS.slice(0, 3)
      : CARDS;

  return (
    <div className="w-full flex items-center justify-center overflow-hidden">
      <div className="relative w-full mt-30 h-[600px] flex items-center justify-center">
        {visibleCards.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            index={index}
            hoveredIndex={hoveredIndex}
            setHovered={setHoveredIndex}
            total={visibleCards.length}
            screen={screen}
          />
        ))}
      </div>
    </div>
  );
}