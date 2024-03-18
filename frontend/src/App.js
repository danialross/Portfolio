import NavBar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Greetings from "./components/Greetings";

function App() {
  return (
    <NavBar>
      <div className="bg-white">
        <Greetings />
        {/* <AboutMe /> */}
      </div>
    </NavBar>
  );
}

export default App;
