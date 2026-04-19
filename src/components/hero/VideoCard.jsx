import Vector1 from "../../assets/Vector1";
import Arrow from "../../assets/image/Arrow.svg";

export default function VideoCard({
  videoSrc,
  title,
  tagLabel,
  tagBg,
  overlayBg,
}) {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden group">
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />

      {/* BOTTOM: Vector1 + text inside it + arrow button */}
      <div className="absolute bottom-0 left-0 right-4 z-10 w-full h-[50%] xs:h-[60%] sm:h-[55%] md:h-[55%] lg:h-[40%] px-1 xs:px-1.5 sm:px-1.5 md:px-3 pb-1 sm:pb-1.5 md:pb-3">
        {/* Vector1 SVG */}
        <Vector1 overlayBg={overlayBg} />

        {/* TEXT — sits inside the Vector1 shape */}
        <div className="absolute inset-0 flex flex-col justify-end px-3 pb-3 xs:px-4 xs:pb-3.5 sm:px-5 sm:pb-4 md:px-6 md:pb-8 max-w-[80%] xs:max-w-[75%] md:max-w-[70%]">
          <p className="text-[30px] xs:text-sm sm:text-base md:text-lg lg:text-3xl font-medium mb-1 leading-snug text-white">
            {title}
          </p>
          <p
            className="text-[14px] xs:text-xs sm:text-sm md:text-base lg:text-xl text-white inline rounded-md px-1.5 py-0.5 xs:px-2 xs:py-1 w-fit"
            style={{ backgroundColor: tagBg }}
          >
            {tagLabel}
          </p>
        </div>

        {/* ARROW BUTTON — top right inside Vector1 */}
        {overlayBg && (
          <div className="absolute top-[3%] right-[5%] xs:top-[3%] xs:right-[5%] sm:top-[2.5%] sm:right-[5%] md:top-[5%] md:right-[6.5%]">
            <button className="w-10 h-10 xs:w-7 xs:h-7 sm:w-8 sm:h-8 lg:w-12 lg:h-12 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden">
              <div className="relative w-3 h-3 xs:w-3 xs:h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6">
                <img
                  src={Arrow}
                  alt=""
                  className="absolute inset-0 w-full h-full rotate-[220deg]
                    transition-transform duration-[400ms] ease-in-out
                    group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"
                />
                <img
                  src={Arrow}
                  alt=""
                  className="absolute inset-0 w-full h-full rotate-[220deg]
                    -translate-x-[150%] translate-y-[150%]
                    transition-transform duration-[400ms] ease-in-out
                    group-hover:translate-x-0 group-hover:translate-y-0"
                />
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
