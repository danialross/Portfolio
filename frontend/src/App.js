import NavBar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Greetings from "./components/Greetings";
import TechStack from "./components/TechStack";

function App() {
  return (
    <NavBar>
      <Greetings />
      <AboutMe />
      <TechStack />
    </NavBar>
  );
}

export default App;
