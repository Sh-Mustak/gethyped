import Button from "../UI/Button";

export default function IntroDesktopLayout() {
  return (
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
        <p
          className="
          font-semibold leading-[1.2] tracking-tight md:max-w-[29ch]
          xs:text-[15px] xs:mb-3 xs:max-w-[23ch]
          sm:text-[18px] sm:mb-4
          md:text-[24px] md:mb-5
          lg:text-[32px] lg:mb-6
        "
        >
          We stoppen niet bij mooie plaatjes en vette beelden. We maken het
          meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer content
          zonder strategie. Nooit meer content zonder resultaat.
        </p>

        <Button text="Leer ons kennen" />
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
              <svg
                viewBox="0 0 26 27"
                className="xs:w-2.5 xs:h-3.5 sm:w-3.5 sm:h-5 lg:w-4 lg:h-6 text-[#ff3000]"
              >
                <path
                  d="M0.876668 14.4267L3.42629 11.852L11.1376 19.5634L11.1376 0.828689L14.8621 0.828689L14.8621 19.5634L22.5609 11.852L25.123 14.4267L12.9999 26.5498L0.876668 14.4267Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="absolute top-0 left-0 -translate-y-6 transition-transform duration-500 group-hover:translate-y-0">
              <svg
                viewBox="0 0 26 27"
                className="xs:w-2.5 xs:h-3.5 sm:w-3.5 sm:h-5 lg:w-4 lg:h-6 text-[#ff3000]"
              >
                <path
                  d="M0.876668 14.4267L3.42629 11.852L11.1376 19.5634L11.1376 0.828689L14.8621 0.828689L14.8621 19.5634L22.5609 11.852L25.123 14.4267L12.9999 26.5498L0.876668 14.4267Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
