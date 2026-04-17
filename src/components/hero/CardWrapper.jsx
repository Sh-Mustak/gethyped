import { getCardTransform } from "../../utils/Cardtransform";

/**
 * CardWrapper
 * -----------
 * Handles all positioning, rotation, hover, and transition animation.
 * Renders whichever card UI is passed as `children`.
 *
 * Props:
 *   index        {number}       Card's position in the visible array
 *   hoveredIndex {number|null}  Currently hovered card index (or null)
 *   setHovered   {function}     Setter to update hoveredIndex
 *   total        {number}       Total visible card count
 *   screen       {string}       "mobile" | "tablet" | "desktop"
 *   children     {ReactNode}    The actual card UI (StatCard / VideoCard / etc.)
 */
export default function CardWrapper({
  index,
  hoveredIndex,
  setHovered,
  total,
  screen,
  children,
}) {
  const { x, y, r, scale, z } = getCardTransform(
    index,
    hoveredIndex,
    total,
    screen,
  );

  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      onClick={() => setHovered(index === hoveredIndex ? null : index)}
      style={{
        transform: `translateX(${x}px) translateY(${y}px) rotate(${r}deg) scale(${scale})`,
        zIndex: z,
        transition:
          "transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease",
      }}
      className="
        absolute cursor-pointer overflow-hidden
        w-[180px]  h-[250px]
        sm:w-[270px] sm:h-[360px]
        md:w-[300px] md:h-[420px]
        lg:w-[430px] lg:h-[560px]
        rounded-[20px] md:rounded-[60px]
      "
    >
      {children}
    </div>
  );
}
