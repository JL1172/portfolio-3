import { useContext } from "react";
import { GlobalContext } from "./contexts/GlobalContext";
import NavbarSection from "./layouts/Navbar";
import AboutSection from "./pages/About";
import ContactSection from "./pages/ContactForm";
import HomeSection from "./pages/Home";
import ProjectSection from "./pages/Projects";
import ResumeSection from "./pages/Resume";
import TechStackSection from "./pages/TechStack";

function App() {
  const {global_dim} = useContext(GlobalContext);
  return (
    <GlobalContext.Provider value = {{global_dim}}>
      <div className="text-white flex font-custom-main flex-col justify-evenly items-start h-auto m-h-600dvh bg-custom-black">
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
