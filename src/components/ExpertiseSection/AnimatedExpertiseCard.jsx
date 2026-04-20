import ExpertiseCardFace from "./ExpertiseCardFace";

export default function AnimatedExpertiseCard({
  card,
  index,
  cardCount,
  progress,
  ease,
  slotSize,
}) {
  const isLast = index === cardCount - 1;
  const slotStart = index * slotSize;

  const rawEnter =
    index === 0 ? 1 : (progress - (index - 1) * slotSize) / slotSize;
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
  const combinedOpacity = enterP < 1 ? enterP : Math.max(0, outgoingOpacity);

  return (
    <div
      className="absolute inset-0 px-3 xs:px-6 lg:px-10 py-8 xs:py-8 lg:py-16"
      style={{
        transform: `translateY(${combinedTranslateY}) scale(${outgoingScale})`,
        opacity: combinedOpacity,
      }}
    >
      <ExpertiseCardFace card={card} />
    </div>
  );
}
