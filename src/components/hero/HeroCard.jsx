// CardStack.jsx
// Drop this file into your React project's src/components/ folder
// Requires: Tailwind CSS v3+

import { useState } from "react";

// ─── Card data ────────────────────────────────────────────────
const CARDS = [
  {
    id: 1,
    type: "stat",
    bg: "bg-[#2563f6]",
    stat: "10M+",
    title: "Organische views",
    sub: "Groei door slimme content",
  },
  {
    id: 2,
    type: "photo",
    bg: "bg-green-400",
    imgSrc:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80",
    imgAlt: "green nature",
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
    bg: "bg-gray-300",
    imgSrc:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&q=80",
    imgAlt: "car",
    overlayText: "Voorzien van E...",
  },
];

// ─── Per-card transform config ─────────────────────────────────
// Each entry: { default, hoveredSelf, othersShift[cardIndex] }
// We use inline style for translateX/rotate because Tailwind can't
// generate arbitrary dynamic values at runtime.

function getTransform(cardIndex, hoveredIndex, totalVisible) {
  // Base fan positions (desktop = 4 cards)
  const fanConfigs = {
    4: [
      { x: -200, r: -8 },
      { x: -70, r: -3 },
      { x: 70, r: 3 },
      { x: 200, r: 8 },
    ],
    3: [
      { x: -160, r: -8 },
      { x: 0, r: 0 },
      { x: 160, r: 8 },
    ],
    2: [
      { x: -90, r: -8 },
      { x: 90, r: 8 },
    ],
  };

  const fans = fanConfigs[totalVisible] || fanConfigs[4];
  const base = fans[cardIndex] || { x: 0, r: 0 };

  if (hoveredIndex === null) {
    return { x: base.x, r: base.r, z: cardIndex + 1, shadow: false };
  }

  if (cardIndex === hoveredIndex) {
    // Straighten the hovered card and bring it forward
    return { x: base.x, r: 0, z: 10, shadow: true };
  }

  // Push non-hovered cards further away from center
  const direction = cardIndex < hoveredIndex ? -1 : 1;
  const push = 30 + Math.abs(cardIndex - hoveredIndex) * 15;
  return {
    x: base.x + direction * push,
    r: base.r * 1.2,
    z: cardIndex + 1,
    shadow: false,
  };
}

// ─── Single Card ───────────────────────────────────────────────
function Card({ card, cardIndex, hoveredIndex, setHovered, totalVisible }) {
  const { x, r, z, shadow } = getTransform(
    cardIndex,
    hoveredIndex,
    totalVisible,
  );

  return (
    <div
      onMouseEnter={() => setHovered(cardIndex)}
      onMouseLeave={() => setHovered(null)}
      style={{
        transform: `translateX(${x}px) rotate(${r}deg)`,
        zIndex: z,
        boxShadow: shadow
          ? "0 24px 64px rgba(0,0,0,0.28)"
          : "0 8px 28px rgba(0,0,0,0.12)",
        transition:
          "transform 0.45s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.45s ease",
      }}
      className="absolute w-full h-[260px] sm:w-[200px] sm:h-[280px] md:w-[220px] md:h-[300px] rounded-2xl overflow-hidden cursor-pointer"
    >
      {card.type === "stat" ? (
        <div
          className={`relative w-full h-full ${card.bg} flex flex-col justify-end p-5`}
        >
          <span className="absolute top-5 left-5 text-4xl md:text-5xl font-black tracking-tight leading-none text-black">
            {card.stat}
          </span>
          <div className="border-t border-black/30 pt-2">
            <p className="text-[13px] font-bold text-black">{card.title}</p>
            <p className="text-[11px] text-black/60 mt-0.5">{card.sub}</p>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={card.imgSrc}
            alt={card.imgAlt}
            className={`w-full h-full object-cover ${
              card.blur ? "scale-105 blur-[2px] saturate-125" : ""
            }`}
          />
          {card.overlayText && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/75 text-white text-[10px] font-extrabold tracking-widest uppercase text-center py-1.5 px-2">
              {card.overlayText}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Main CardStack component ──────────────────────────────────
export default function HeroCard() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Responsive: how many cards to show
  // We use JS to read window width (or you can use a resize hook)
  // Simple approach: render all 4 but hide extras via CSS class
  // Desktop ≥1024: show 4, Tablet 640–1023: show 3, Mobile <640: show 2

  return (
    <div className=" flex items-center justify-center px-4">
      {/* Desktop: 4 cards */}
      <div className="hidden lg:flex relative items-center justify-center w-[780px] h-[340px]">
        {CARDS.map((card, i) => (
          <Card
            key={card.id}
            card={card}
            cardIndex={i}
            hoveredIndex={hoveredIndex}
            setHovered={setHoveredIndex}
            totalVisible={4}
          />
        ))}
      </div>

      {/* Tablet: 3 cards (first 3) */}
      <div className="hidden sm:flex lg:hidden relative items-center justify-center w-[600px] h-[320px]">
        {CARDS.slice(0, 3).map((card, i) => (
          <Card
            key={card.id}
            card={card}
            cardIndex={i}
            hoveredIndex={hoveredIndex}
            setHovered={setHoveredIndex}
            totalVisible={3}
          />
        ))}
      </div>

      {/* Mobile: 2 cards (first 2) */}
      <div className="flex sm:hidden relative items-center justify-center w-[320px] h-[300px]">
        {CARDS.slice(0, 2).map((card, i) => (
          <Card
            key={card.id}
            card={card}
            cardIndex={i}
            hoveredIndex={hoveredIndex}
            setHovered={setHoveredIndex}
            totalVisible={2}
          />
        ))}
      </div>
    </div>
  );
}
