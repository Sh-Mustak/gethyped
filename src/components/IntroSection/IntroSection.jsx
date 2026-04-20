import IntroDesktopLayout from "./IntroDesktopLayout";
import IntroHeading from "./IntroHeading";
import IntroMobileLayout from "./IntroMobileLayout";

export default function IntroSection() {
  return (
    <section id="intro-home" className="w-full mb-50">
      <div className="px-4 lg:px-10">
        <div className="md:max-w-[1500px] mx-auto">
          <IntroHeading />
          <IntroMobileLayout />
          <IntroDesktopLayout />
        </div>
      </div>
    </section>
  );
}
