import SelectedWorksCards from "./SelectedWorksCards";
import SelectedWorksText from "./SelectedWorksText";

export default function SelectedWork() {
  return (
    <section className="min-h-screen px-4 md:pt-32 pb-8">
      <SelectedWorksText />
      <SelectedWorksCards />
    </section>
  );
}
