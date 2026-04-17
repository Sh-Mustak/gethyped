import VideoCard from "../hero/VideoCard";

export default function IntroSection() {
  return (
    <section id="intro-home" className="w-full mb-100">
      <div className="px-4 lg:px-10">
        <div className="md:max-w-[1500px] mx-auto">
          {/* Heading */}
          <div className="mb-16 sm:mt-32 sm:mb-20 lg:mt-40 lg:mb-24">
            <h2
              className="
                font-bold leading-[1.1]
                text-2xl 
                sm:text-3xl 
                md:text-4xl 
                lg:text-6xl 
                xl:text-7xl
                max-w-[95%] 
                sm:max-w-[90%] 
                md:max-w-4xl 
                lg:max-w-6xl 
                xl:max-w-7xl
              "
            >
              Wij maken content die opvalt. Die blijft hangen. Die jouw
              doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en
              energiek.
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10 items-end justify-between">
          {/* Image / Video */}
          <div className="flex items-end">
            <div className="w-full">
              {/* Mobile Video */}
            <div className="px-4 md:px-0">
                <div className="block md:hidden aspect-[4/5] rounded-xl overflow-hidden rotate-3 ">
                <VideoCard videoSrc="https://gethyped.b-cdn.net/New%20Reach/new-reach-loop.mp4" />
              </div>
            </div>

              {/* Desktop Image */}
              <div className="hidden md:block h-100 w-80">
                <img
                  src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril.webp"
                  alt=""
                  className="w-full h-full object-cover rounded-xl"
                  draggable="false"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-2xl mb-6">
              We stoppen niet bij mooie plaatjes en vette beelden. We maken het
              meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer
              content zonder strategie. Nooit meer content zonder resultaat.
            </p>

            {/* Button */}
            <a
              href="/about"
              className="inline-flex items-center gap-3 border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition"
            >
              Leer ons kennen →
            </a>
          </div>

          {/* Arrow Button */}
          <div className="hidden md:flex justify-center">
            <a
              href="#expertises"
              className="w-13 h-13 flex items-center justify-center border border-black rounded-[14px] hover:rounded-[10px] transition-all overflow-hidden group"
            >
              <div className="h-6 w-4 overflow-hidden relative">
                {/* Arrow 1 */}
                <div className="absolute top-0 left-0 transition-transform duration-500 ease-in-out group-hover:translate-y-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 26 27"
                    className="w-4 h-6 text-[#ff3000]"
                  >
                    <path
                      d="M0.876668 14.4267L3.42629 11.852L11.1376 19.5634L11.1376 0.828689L14.8621 0.828689L14.8621 19.5634L22.5609 11.852L25.123 14.4267L12.9999 26.5498L0.876668 14.4267Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                {/* Arrow 2 */}
                <div className="absolute top-0 left-0 -translate-y-6 transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 26 27"
                    className="w-4 h-6 text-[#ff3000]"
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
      </div>
    </section>
  );
}
