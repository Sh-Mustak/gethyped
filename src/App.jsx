import "./App.css";
import ExpertiseSection from "./components/ExpertiseSection/ExpertiseSection";
import Hero from "./components/hero/Hero";
import IntroSection from "./components/IntroSection/IntroSection";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <IntroSection/>
      <ExpertiseSection/>
    </>
  );
}

export default App;
