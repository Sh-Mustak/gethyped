import "./App.css";
import ClientsMarquee from "./components/clients/Clientsmarquee";
import ExpertiseSection from "./components/ExpertiseSection/ExpertiseSection";
import Hero from "./components/hero/Hero";
import IntroSection from "./components/IntroSection/IntroSection";
import Footer from "./components/layout/Footer";
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
      <ClientsMarquee />
      <Footer />
    </>
  );
}

export default App;
