import VideoCard from "../hero/VideoCard";

export default function IntroSection() {
  return (
    <section id="intro-home" className="w-full mb-50">
      <div className="px-4 lg:px-10">
        <div className="md:max-w-[1500px] mx-auto">
          {/* Heading */}
          <div className="mb-16 sm:mt-32 sm:mb-20 lg:mt-40 lg:mb-24">
            <h2 className="font-bold leading-[1.1] text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl max-w-[95%] sm:max-w-[90%] md:max-w-4xl lg:max-w-6xl xl:max-w-7xl">
              Wij maken content die opvalt. Die blijft hangen. Die jouw
              doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en
              energiek.
            </h2>
          </div>
        </div>

        {/* ── <480px: Video stacked layout ── */}
        <div className="flex xs:hidden flex-col gap-6">
          <div className="px-3">
            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden rotate-3">
              <VideoCard videoSrc="https://gethyped.b-cdn.net/New%20Reach/new-reach-loop.mp4" />
            </div>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-[16px] font-semibold mb-4 leading-[1.2] tracking-tight">
              We stoppen niet bij mooie plaatjes en vette beelden. We maken het
              meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer
              content zonder strategie. Nooit meer content zonder resultaat.
            </p>
            <a
              href="/about"
              className="
                inline-flex items-center text-base font-medium gap-2
                border border-black px-1.5 py-1 rounded-[13px]
                hover:rounded-[9px] transition-transform duration-300
                ease-[cubic-bezier(0.34,1.56,0.64,1)]
                hover:-rotate-6 hover:scale-105 group
              "
            >
              Leer ons kennen
              <span className="bg-black w-9 h-9 flex items-center justify-center rounded-[8px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 21" className="w-3.5 h-3.5" fill="white">
                  <path d="M11.2832 20.9176L9.14509 18.8002L15.5491 12.3962L-0.00939941 12.3962L-0.00939941 9.30322L15.5491 9.30322L9.14509 2.9096L11.2832 0.78186L21.3511 10.8497L11.2832 20.9176Z" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* ── ≥480px: 3-col grid ── */}
        <div className="hidden xs:grid xs:grid-cols-[1fr_2fr_auto] sm:grid-cols-[1.2fr_2.5fr_auto] lg:grid-cols-[1.5fr_2.5fr_1fr] xs:gap-3 sm:gap-6 md:gap-8 lg:gap-10 items-end">

          {/* Col 1: Image */}
          <div className="flex items-end">
  <div className="w-full max-w-[300px] xs:max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[300px] aspect-[3/4]">
    <img
      src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril.webp"
      alt=""
      className="w-full h-full object-cover object-top rounded-xl"
      draggable="false"
    />
  </div>
</div>

          {/* Col 2: Text + Button */}
          <div className="flex flex-col items-start xs:px-3 sm:px-4 md:px-5 lg:px-6">
            <p className="
              font-semibold leading-[1.2] tracking-tight md:max-w-[29ch]
              xs:text-[15px] xs:mb-3 xs:max-w-[23ch]
              sm:text-[18px] sm:mb-4
              md:text-[24px] md:mb-5
              lg:text-[32px] lg:mb-6
            ">
              We stoppen niet bij mooie plaatjes en vette beelden. We maken het
              meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer
              content zonder strategie. Nooit meer content zonder resultaat.
            </p>

            <a
              href="/about"
              className="
                inline-flex items-center font-medium border border-black
                transition-transform duration-300
                ease-[cubic-bezier(0.34,1.56,0.64,1)]
                hover:-rotate-6 hover:scale-105 group
                xs:text-[12px] xs:gap-1.5 xs:px-1 xs:py-0.5 xs:rounded-[9px]
                sm:text-[15px] sm:gap-2 sm:px-1.5 sm:py-1 sm:rounded-[11px]
                md:text-[18px] md:gap-3
                lg:text-xl lg:rounded-[13px]
                hover:rounded-[6px]
              "
            >
              Leer ons kennen
              <span className="
                bg-black flex items-center justify-center
                xs:w-7 xs:h-7 xs:rounded-[6px]
                sm:w-9 sm:h-9 sm:rounded-[8px]
                md:w-10 md:h-10 md:rounded-[9px]
                lg:w-11 lg:h-11 lg:rounded-[10px]
              ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 22 21"
                  className="xs:w-2.5 xs:h-2.5 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4"
                  fill="white"
                >
                  <path d="M11.2832 20.9176L9.14509 18.8002L15.5491 12.3962L-0.00939941 12.3962L-0.00939941 9.30322L15.5491 9.30322L9.14509 2.9096L11.2832 0.78186L21.3511 10.8497L11.2832 20.9176Z" />
                </svg>
              </span>
            </a>
          </div>

          {/* Col 3: Arrow Button */}
          <div className="flex justify-center">
            <a
              href="#expertises"
              className="
                flex items-center justify-center
                border border-black transition-all overflow-hidden group
                xs:w-9 xs:h-9 xs:rounded-[9px]
                sm:w-11 sm:h-11 sm:rounded-[11px]
                md:w-12 md:h-12 md:rounded-[12px]
                lg:w-13 lg:h-13 lg:rounded-[14px]
                hover:rounded-[6px]
              "
            >
              <div className="overflow-hidden relative xs:h-3.5 xs:w-2.5 sm:h-5 sm:w-3.5 lg:h-6 lg:w-4">
                <div className="absolute top-0 left-0 transition-transform duration-500 group-hover:translate-y-6">
                  <svg viewBox="0 0 26 27" className="xs:w-2.5 xs:h-3.5 sm:w-3.5 sm:h-5 lg:w-4 lg:h-6 text-[#ff3000]">
                    <path d="M0.876668 14.4267L3.42629 11.852L11.1376 19.5634L11.1376 0.828689L14.8621 0.828689L14.8621 19.5634L22.5609 11.852L25.123 14.4267L12.9999 26.5498L0.876668 14.4267Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute top-0 left-0 -translate-y-6 transition-transform duration-500 group-hover:translate-y-0">
                  <svg viewBox="0 0 26 27" className="xs:w-2.5 xs:h-3.5 sm:w-3.5 sm:h-5 lg:w-4 lg:h-6 text-[#ff3000]">
                    <path d="M0.876668 14.4267L3.42629 11.852L11.1376 19.5634L11.1376 0.828689L14.8621 0.828689L14.8621 19.5634L22.5609 11.852L25.123 14.4267L12.9999 26.5498L0.876668 14.4267Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}