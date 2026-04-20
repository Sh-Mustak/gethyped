import VideoCard from "../hero/VideoCard";

export default function IntroMobileLayout() {
  return (
    <div className="flex xs:hidden flex-col gap-6">
      <div className="px-3">
        <div className="w-full aspect-[4/5] rounded-xl overflow-hidden rotate-3">
          <VideoCard videoSrc="https://gethyped.b-cdn.net/New%20Reach/new-reach-loop.mp4" />
        </div>
      </div>
      <div className="flex flex-col items-start">
        <p className="text-[16px] font-semibold mb-4 leading-[1.2] tracking-tight">
          We stoppen niet bij mooie plaatjes en vette beelden. We maken het
          meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer content
          zonder strategie. Nooit meer content zonder resultaat.
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 22 21"
              className="w-3.5 h-3.5"
              fill="white"
            >
              <path d="M11.2832 20.9176L9.14509 18.8002L15.5491 12.3962L-0.00939941 12.3962L-0.00939941 9.30322L15.5491 9.30322L9.14509 2.9096L11.2832 0.78186L21.3511 10.8497L11.2832 20.9176Z" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}
