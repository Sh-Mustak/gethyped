export default function Button({
  text,
  bgColor = "black",
  textColor = "white",
  card,
}) {
  return (
    <a
      href="#"
      className={[
        "inline-flex items-center font-medium",
        "transition-transform duration-300",
        "ease-[cubic-bezier(0.34,1.56,0.64,1)]",
        "hover:-rotate-6 hover:scale-105 group",
        "text-[13px] gap-1.5 px-1 py-0.5 rounded-[9px]",
        "xs:text-[12px] xs:gap-1.5 xs:px-1 xs:py-0.5 xs:rounded-[9px]",
        "sm:text-[15px] sm:gap-2 sm:px-1.5 sm:py-1 sm:rounded-[11px]",
        "md:text-[18px] md:gap-3",
        "lg:text-xl lg:rounded-[13px]",
        "hover:rounded-[6px]",
        card?.id ? "border-none" : "border border-black",
      ].join(" ")}
      style={card?.id ? { background: bgColor, color: textColor } : {}}
    >
      {text}
      <span
        className="flex items-center justify-center w-7 h-7 rounded-[6px] xs:w-7 xs:h-7 xs:rounded-[6px] sm:w-9 sm:h-9 sm:rounded-[8px] md:w-10 md:h-10 md:rounded-[9px] lg:w-11 lg:h-11 lg:rounded-[10px]"
        style={{ background: card?.btnText || "black" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22 21"
          className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4"
          fill={card?.btnBg || "white"}
        >
          <path d="M11.2832 20.9176L9.14509 18.8002L15.5491 12.3962L-0.00939941 12.3962L-0.00939941 9.30322L15.5491 9.30322L9.14509 2.9096L11.2832 0.78186L21.3511 10.8497L11.2832 20.9176Z" />
        </svg>
      </span>
    </a>
  );
}