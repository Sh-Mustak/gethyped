export default function IntroSection() {
  return (
    <section id="intro-home" className="w-full">
      <div className="px-4 lg:px-10">
        <div className=" ">
          <div className=" md:max-w-[1500px] mx-auto">
            {/* Heading */}
            <div className="mt-28 mb-16 sm:mt-32 sm:mb-20 lg:mt-40 lg:mb-24">
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
                doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig
                en energiek.
              </h2>
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-10 items-end">
            {/* Image / Video */}
            <div className="flex items-end">
              <div className="w-full">
                {/* Mobile Video */}
                <div className="block md:hidden">
                  <video
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="w-full rounded-xl"
                    src="https://gethyped.b-cdn.net/New%20Reach/new-reach-loop.mp4"
                  />
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
              <p className="text-2xl  mb-6 ">
                We stoppen niet bij mooie plaatjes en vette beelden. We maken
                het meetbaar. Zo weet je precies wat werkt en wat niet. Nooit
                meer content zonder strategie. Nooit meer content zonder
                resultaat.
              </p>

              {/* Button */}
              <a
                href="/about"
                className="inline-flex items-center gap-3 border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition"
              >
                Leer ons kennen →
              </a>
            </div>
            <div className="hidden md:flex justify-center mt-20">
              <a
                href="#expertises"
                className="w-12 h-12 flex items-center justify-center border border-black rounded-full hover:bg-black hover:text-white transition"
              >
                ↓
              </a>
            </div>
          </div>

          {/* Bottom Arrow Button (Desktop only) */}
        </div>
      </div>
    </section>
  );
}
