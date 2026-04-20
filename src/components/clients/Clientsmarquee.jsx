import { LOGOS } from "../../utils/Logo";
import ClientsMarqueeDivider from "./ClientsMarqueeDivider";
import ClientsMarqueeTrack from "./ClientsMarqueeTrack";
import SectionHeader from "./SectionHeader";
import { useClientsMarqueeAnimation } from "./useClientsMarqueeAnimation";
import { useClientsMarqueeDrag } from "./useClientsMarqueeDrag";

// duplicate for seamless loop
const ALL_LOGOS = [...LOGOS, ...LOGOS];

export default function ClientsMarquee() {
  const { trackRef, posRef, pause, resume, setPosition } =
    useClientsMarqueeAnimation();
  const dragHandlers = useClientsMarqueeDrag(
    posRef,
    pause,
    resume,
    setPosition,
  );

  return (
    <section className="py-16 xs:py-20 lg:py-32 overflow-hidden">
      <div className="px-4 lg:px-10 mb-10 xs:mb-14 lg:mb-20">
        <SectionHeader />
      </div>

      <ClientsMarqueeTrack
        logos={ALL_LOGOS}
        trackRef={trackRef}
        dragHandlers={dragHandlers}
      />

      <ClientsMarqueeDivider />
    </section>
  );
}
