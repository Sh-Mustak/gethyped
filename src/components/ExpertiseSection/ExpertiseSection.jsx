import { useRef } from "react";
import { EXPERTISE_CARDS } from "../../constants/expertiseCards";
import useExpertiseScrollAnimation from "../../hooks/useExpertiseScrollAnimation";
import AnimatedExpertiseCard from "./AnimatedExpertiseCard";

export default function ExpertiseSection() {
  const sectionRef = useRef(null);
  const { progress, ease } = useExpertiseScrollAnimation(sectionRef);
  const cardCount = EXPERTISE_CARDS.length;
  const slotSize = 1 / cardCount;

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${cardCount * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {EXPERTISE_CARDS.map((card, index) => (
          <AnimatedExpertiseCard
            key={card.id}
            card={card}
            index={index}
            cardCount={cardCount}
            progress={progress}
            ease={ease}
            slotSize={slotSize}
          />
        ))}
      </div>
    </section>
  );
}
