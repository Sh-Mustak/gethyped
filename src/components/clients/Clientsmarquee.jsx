import { useEffect, useRef } from "react";

const LOGOS = [
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69241146b4df63c4ca966552_Bullit%20Digital.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c194e6d1b186563459b107_morssinkhof.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d88f755388cc2c74ecff_salontopper.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d880bed5996600cbc586_seesing-flex.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d86cd6ba384af3c14e58_graafschap-college.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d85341bf0d7476e56a8c_fides.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d838fc5735f090bd9843_SRHK.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d81e72e08110e3fd1a17_knltb.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684b062ebc242028ca4b3ea1_tho.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684c05642bf8f5cea7384403_de-talententuin.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c1952f22281ee50d3620b5_zclv.svg",
];

// duplicate for seamless loop
const ALL_LOGOS = [...LOGOS, ...LOGOS];

export default function ClientsMarquee() {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartPos = useRef(0);
  const isPaused = useRef(false);
  const speed = 0.5; // px per frame

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const halfWidth = track.scrollWidth / 2;

    const animate = () => {
      if (!isPaused.current) {
        posRef.current += speed;
        if (posRef.current >= halfWidth) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(${-posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  // Mouse drag
  const onMouseDown = (e) => {
    isDragging.current = true;
    isPaused.current = true;
    dragStartX.current = e.clientX;
    dragStartPos.current = posRef.current;
    trackRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const delta = dragStartX.current - e.clientX;
    const track = trackRef.current;
    const halfWidth = track.scrollWidth / 2;
    let newPos = dragStartPos.current + delta;
    // wrap
    newPos = ((newPos % halfWidth) + halfWidth) % halfWidth;
    posRef.current = newPos;
    track.style.transform = `translateX(${-newPos}px)`;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    isPaused.current = false;
    trackRef.current.style.cursor = "grab";
  };

  // Touch drag
  const onTouchStart = (e) => {
    isPaused.current = true;
    dragStartX.current = e.touches[0].clientX;
    dragStartPos.current = posRef.current;
  };

  const onTouchMove = (e) => {
    const delta = dragStartX.current - e.touches[0].clientX;
    const track = trackRef.current;
    const halfWidth = track.scrollWidth / 2;
    let newPos = dragStartPos.current + delta;
    newPos = ((newPos % halfWidth) + halfWidth) % halfWidth;
    posRef.current = newPos;
    track.style.transform = `translateX(${-newPos}px)`;
  };

  const onTouchEnd = () => {
    isPaused.current = false;
  };

  return (
    <section className="py-16 xs:py-20 lg:py-32 overflow-hidden">
      <div className="px-4 lg:px-10 mb-10 xs:mb-14 lg:mb-20">
        <div className="max-w-[1512px] mx-auto">
          <h2
            className="font-black leading-[1.05] tracking-tight text-neutral-900
            text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
          >
            These brands
            <br />
            got hyped.
          </h2>
        </div>
      </div>

      {/* Marquee track */}
      <div
        className="overflow-hidden select-none"
        style={{ cursor: "grab" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          className="flex gap-3 xs:gap-4 lg:gap-5 will-change-transform"
          style={{ width: "max-content" }}
        >
          {ALL_LOGOS.map((src, i) => (
            <div
              key={i}
              className="
                flex items-center justify-center shrink-0
                bg-white border border-neutral-200 rounded-2xl xs:rounded-3xl
                w-[160px] h-[100px]
                xs:w-[220px] xs:h-[130px]
                sm:w-[260px] sm:h-[150px]
                md:w-[300px] md:h-[170px]
                lg:w-[340px] lg:h-[200px]
                px-6 xs:px-8 lg:px-10
              "
            >
              <img
                src={src}
                alt=""
                draggable="false"
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* divider */}
      <div className="px-4 lg:px-10 mt-16 xs:mt-20 lg:mt-28">
        <div className="max-w-[1512px] mx-auto border-t border-neutral-200" />
      </div>
    </section>
  );
}
