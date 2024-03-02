import { useState } from "react";
import { GlobalContext } from "./contexts/GlobalContext";
import NavbarSection from "./layouts/Navbar";
import AboutSection from "./pages/About";
import ContactSection from "./pages/ContactForm";
import HomeSection from "./pages/Home";
import ProjectSection from "./pages/Projects";
import ResumeSection from "./pages/Resume";
import TechStackSection from "./pages/TechStack";

function App() {
  const [isDim, setIsDim] = useState<boolean>(false);
  const changeBrightness = () => {
    setIsDim(!isDim);
  };
  return (
    <GlobalContext.Provider value={{ changeBrightness, isDim }}>
      <div className="text-white flex flex-col justify-evenly items-start h-auto m-h-600dvh bg-custom-black ">
        <NavbarSection />
        <HomeSection />
        <AboutSection />
        <TechStackSection />
        <ProjectSection />
        <ResumeSection />
        <ContactSection />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
