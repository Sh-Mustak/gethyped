import "./App.css";
import Hero from "./components/hero/Hero";
import IntroSection from "./components/IntroSection/IntroSection";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <IntroSection/>
    </>
  );
}

export default App;
