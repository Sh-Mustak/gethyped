import Button from "../UI/Button";

export default function SelectedWorksText() {
  return (
    <div className="max-w-[1512px] mx-auto">
      <h1 className="font-black leading-[0.80] md:leading-[1] tracking-tight text-neutral-900 mb-4 max-w-[7.5ch] md:max-w-[8ch]
        text-6xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
        Content dat scoort.
      </h1>

      <p className="font-semibold text-black leading-[1.3] tracking-tighter mb-6 max-w-[22ch]
        text-lg xs:text-xl sm:text-2xl md:text-3xl">
        Wij vertellen jouw verhaal. Op een manier die écht past bij jouw
        doelgroep. Met creatieve content die werkt en het verschil maakt.
      </p>

      <Button text="Bekijk al ons werk" />
    </div>
  );
}