import NavBar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Greetings from "./components/Greetings";
import Skills from "./components/Skills";

function App() {
  return (
    <NavBar>
      <Greetings />
      <AboutMe />
      <Skills />
    </NavBar>
  );
}

export default App;
