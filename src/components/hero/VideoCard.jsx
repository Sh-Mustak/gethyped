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

      {/* TEXT OVERLAY */}
      <div className="absolute bottom-12 left-5 z-20 text-white px-5 max-w-[32ch]">
        <p className="text-lg md:text-3xl font-medium mb-2">{title}</p>
        <p
          className="text-xl inline md:text-2xl rounded-md px-3 py-2"
          style={{ backgroundColor: tagBg }}
        >
          {tagLabel}
        </p>
      </div>

      <div className="absolute bottom-3 left-6 right-0 z-10">
        <Vector1 color="white" overlayBg={overlayBg} />

        {overlayBg && (
          <div className="absolute top-3 right-10">
            <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden">
              <div className="relative w-6 h-6">
                <img
                  src={Arrow}
                  alt=""
                  className="absolute inset-0 w-6 h-6 rotate-[220deg]
                  transition-transform duration-[400ms] ease-in-out
                  group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"
                />

                <img
                  src={Arrow}
                  alt=""
                  className="absolute inset-0 w-6 h-6 rotate-[220deg]
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
