import DesktopExpertiseCard from "./DesktopExpertiseCard";
import MobileExpertiseCard from "./MobileExpertiseCard";
import TabletExpertiseCard from "./TabletExpertiseCard";

export default function ExpertiseCardFace({ card }) {
  return (
    <div
      className="w-full rounded-[24px] xs:rounded-[32px] lg:rounded-[40px] overflow-hidden"
      style={{ background: card.bg }}
    >
      <MobileExpertiseCard card={card} />
      <TabletExpertiseCard card={card} />
      <DesktopExpertiseCard card={card} />
    </div>
  );
}
