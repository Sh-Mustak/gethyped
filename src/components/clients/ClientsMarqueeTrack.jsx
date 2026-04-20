import ClientLogoItem from "./ClientLogoItem";

export default function ClientsMarqueeTrack({ logos, trackRef, dragHandlers }) {
  return (
    <div
      className="overflow-hidden select-none"
      style={{ cursor: "grab" }}
      {...dragHandlers}
    >
      <div
        ref={trackRef}
        data-marquee-track
        className="flex gap-3 xs:gap-4 lg:gap-5 will-change-transform"
        style={{ width: "max-content" }}
      >
        {logos.map((src, i) => (
          <ClientLogoItem key={i} src={src} index={i} />
        ))}
      </div>
    </div>
  );
}
