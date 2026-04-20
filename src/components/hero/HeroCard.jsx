import { useState } from "react";

import { useScreenSize } from "../../hooks/Usescreensize";
import { CARDS, VISIBLE_COUNT } from "../../constants/card";

import CardWrapper from "./CardWrapper";
import StatCard from "./StatCard";
import VideoCard from "./VideoCard";

/**
 * Resolves which inner card component to render based on card.type.
 * Add new card types here as the project grows.
 */
function renderCardContent(card) {
  switch (card.type) {
    case "stat":
      return (
        <StatCard
          bg={card.bg}
          stat={card.stat}
          title={card.title}
          sub={card.sub}
        />
      );
    case "video":
      return <VideoCard videoSrc={card.videoSrc} />;
    default:
      return null;
  }
}

/**
 * HeroCard
 * --------
 * Orchestrates the fanned card layout.
 * Responsible for:
 *   - reading screen size
 *   - slicing the visible card list
 *   - tracking hover state
 *   - rendering CardWrapper + card content
 *
 * It does NOT contain any animation math or card UI — those live
 * in their own files.
 */
export default function HeroCard() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const screen = useScreenSize();

  const visibleCards = CARDS.slice(0, VISIBLE_COUNT[screen]);

  return (
    <div className="w-full flex items-center justify-center overflow-hidden">
      <div
        className="
          relative w-full
          mt-8 md:mt-20
          h-[320px] sm:h-[450px] md:h-[600px] lg:h-[620px]
          flex items-center justify-center
        "
      >
        {visibleCards.map((card, index) => (
          <CardWrapper
            key={card.id}
            index={index}
            hoveredIndex={hoveredIndex}
            setHovered={setHoveredIndex}
            total={visibleCards.length}
            screen={screen}
          >
            {renderCardContent(card)}
          </CardWrapper>
        ))}
      </div>
    </div>
  );
}
