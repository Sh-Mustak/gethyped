import "./App.css";
import ExpertiseSection from "./components/ExpertiseSection/ExpertiseSection";
import Hero from "./components/hero/Hero";
import IntroSection from "./components/IntroSection/IntroSection";
import Navbar from "./components/layout/Navbar";
import SelectedWork from "./components/SelectedWork/SelectedWork";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <IntroSection />
      <ExpertiseSection />
      <SelectedWork />
    </>
  );
}

export default App;
