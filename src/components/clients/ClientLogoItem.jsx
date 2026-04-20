export default function ClientLogoItem({ src, index }) {
  return (
    <div
      key={index}
      className="
        flex items-center justify-center shrink-0
        border border-[#bab7b0] rounded-2xl xs:rounded-xl
        w-[120px] h-[120px]
        xs:w-[180px] xs:h-[180px]
        sm:w-[260px] sm:h-[260px]
        md:w-[320px] md:h-[320px]
        lg:w-[370px] lg:h-[370px]
        px-6 xs:px-8 lg:px-10
      "
    >
      <img
        src={src}
        alt=""
        draggable="false"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
