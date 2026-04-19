import Button from "../UI/Button";

export default function SelectedWorksText() {
  return (
    <div className="max-w-[1512px] mx-auto">
      <h1 className="text-9xl font-black leading-[1.05] tracking-[-2px] text-neutral-900 mb-4 max-w-[8ch]">
        Content dat scoort.
      </h1>

      <p className="text-3xl text-black font-semibold max-w-[22ch] leading-[1.3] tracking-tighter mb-6">
        Wij vertellen jouw verhaal. Op een manier die écht past bij jouw
        doelgroep. Met creatieve content die werkt en het verschil maakt.
      </p>

      <Button text="Bekijk al ons werk" />
    </div>
  );
}
