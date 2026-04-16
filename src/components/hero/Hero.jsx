import HeroCard from "./HeroCard";

export default function Hero() {
  return (
    <section className="w-full px-4 md:px-10 mt-19">
      <div className="">
        {/* Content */}
        <h1 className="text-6xl md:text-[8rem] font-semibold text-black leading-[0.95] tracking-tighter ">
          Get Hyped. Get <br />
          Noticed. Get Results.
        </h1>

        <p className="mt-8 text-[#161616] font-semibold text-[32px] leading-[1.3] tracking-tight">
          Klaar met gokken op content <br />
          die niets oplevert?
        </p>

      <HeroCard />
      </div>
    </section>
  );
}
