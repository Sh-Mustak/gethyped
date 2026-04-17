import HeroCard from "./HeroCard";

export default function Hero() {
  return (
    <section className="w-full mt-4 md:mt-19">
      <div className="px-4 md:px-10">
        <h1
          className="
          font-semibold text-black 
          leading-[0.95] tracking-tighter
          text-[clamp(2.9rem,7vw,8rem)]
          max-w-[14ch] md:max-w-[15ch]
        "
        >
          Get Hyped. Get Noticed. Get Results.
        </h1>

        <p
          className="
            mt-6 md:mt-8 
            text-[#161616] font-semibold 
            leading-[1.3] tracking-tight
            text-lg sm:text-xl md:text-2xl lg:text-[32px]
            md:max-w-[20ch]
          "
        >
          Klaar met gokken op content{" "}
          <span className="block sm:inline">die niets oplevert?</span>
        </p>
      </div>

      <HeroCard />
    </section>
  );
}
