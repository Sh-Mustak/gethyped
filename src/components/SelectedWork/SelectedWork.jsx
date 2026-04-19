import SelectedWorksCards from "./SelectedWorksCards";
import SelectedWorksText from "./SelectedWorksText";

export default function SelectedWork() {
  return (
    <section className="min-h-screen px-10 pt-16 pb-8">
      <SelectedWorksText />
      <SelectedWorksCards />
    </section>
  );
}
