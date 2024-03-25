import NavBar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Greetings from "./components/Greetings";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import { useState, useRef } from "react";

function App() {
  const greetingsRef = useRef(null);
  const aboutRef = useRef(null);
  const techStackRef = useRef(null);
  const contactRef = useRef(null);

  const [, setGreetingsHeight] = useState(0);
  const [, setAboutHeight] = useState(0);
  const [, setTechHeight] = useState(0);
  const [, setContactHeight] = useState(0);

  const sectionInfo = [greetingsRef, aboutRef, techStackRef, contactRef];

  return (
    <NavBar sectionInfo={sectionInfo}>
      <Greetings ref={greetingsRef} setter={setGreetingsHeight} />
      <AboutMe ref={aboutRef} setter={setAboutHeight} />
      <TechStack />
      <Contact />
    </NavBar>
  );
}

export default App;
