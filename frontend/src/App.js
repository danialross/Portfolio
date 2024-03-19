import NavBar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Greetings from "./components/Greetings";

function App() {
  return (
    <NavBar>
      <Greetings />
      <AboutMe />
    </NavBar>
  );
}

export default App;
