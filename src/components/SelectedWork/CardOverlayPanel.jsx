export default function CardOverlayPanel({
  title,
  tagLabel,
  overlayColor = "bg-[#e63820]",
}) {
  return (
    <div
      className={`
        ${overlayColor}
        rounded-[20px] p-5
        flex flex-col gap-3
        w-full
      `}
    >
      <p className="text-white font-bold text-xl leading-snug">{title}</p>

      <button
        className="
          self-start
          bg-white/20 hover:bg-white/30
          text-white font-semibold text-sm
          px-4 py-1.5
          rounded-full
          transition-colors duration-200
        "
      >
        {tagLabel}
      </button>
    </div>
  );
}
