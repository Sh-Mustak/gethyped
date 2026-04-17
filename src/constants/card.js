/**
 * CARDS — source of truth for HeroCard content.
 *
 * type: "stat"  → StatCard
 * type: "video" → VideoCard
 *
 * Add new cards here; HeroCard and CardWrapper handle the rest.
 */
export const CARDS = [
  {
    id: 1,
    type: "stat",
    bg: "bg-[#2263ff]",
    stat: "10M+",
    title: "Organische views",
    sub: "Groei door slimme content",
  },
  {
    id: 2,
    type: "video",
    videoSrc: "https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4",
  },
  {
    id: 3,
    type: "stat",
    bg: "bg-[#00d597]",
    stat: "30+",
    title: "Merken geholpen",
    sub: "Van start-up tot multinational",
  },
  {
    id: 4,
    type: "video",
    videoSrc: "https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4",
  },
];

/**
 * How many cards to show per breakpoint.
 * Slice is applied in HeroCard before rendering.
 */
export const VISIBLE_COUNT = {
  mobile: 2,
  tablet: 3,
  desktop: 4,
};
