/**
 * Calculates the CSS transform values for a card based on
 * its index, which card is hovered, total visible cards, and screen size.
 *
 * @param {number}      index         - Card's position in the visible list
 * @param {number|null} hoveredIndex  - Index of the currently hovered card (null = none)
 * @param {number}      total         - Total number of visible cards
 * @param {"mobile"|"tablet"|"desktop"} screen
 * @returns {{ x: number, y: number, r: number, scale: number, z: number }}
 */
export function getCardTransform(index, hoveredIndex, total, screen) {
  const gap = screen === "mobile" ? 90 : screen === "tablet" ? 260 : 400;

  const rotations = [5, 4, -4, -10];
  const offsetsY = [0, -40, 0, -30];

  const center = (total - 1) / 2;
  const baseX = (index - center) * gap;
  const baseR = rotations[index] ?? 0;
  const baseY = offsetsY[index] ?? 0;

  // No card hovered → default fanned state
  if (hoveredIndex === null) {
    return { x: baseX, y: baseY, r: baseR, scale: 1, z: index };
  }

  // This card is hovered → straighten and lift
  if (hoveredIndex === index) {
    return { x: baseX, y: baseY - 10, r: 0, scale: 1.05, z: 50 };
  }

  // Another card is hovered → spread away
  const direction = index < hoveredIndex ? -1 : 1;
  const spreadAmount = screen === "mobile" ? 30 : 80;

  return {
    x: baseX + direction * spreadAmount,
    y: baseY,
    r: baseR,
    scale: 0.95,
    z: index,
  };
}
