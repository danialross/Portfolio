import NavBar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Greetings from "./components/Greetings";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";

function App() {
  return (
    <NavBar>
      <Greetings />
      <AboutMe />
      <TechStack />
      <Contact />
    </NavBar>
  );
}

export default App;
