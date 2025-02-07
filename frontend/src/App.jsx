import NavBar from "./components/Navbar.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Greetings from "./components/Greetings.jsx";
import TechStack from "./components/TechStack.jsx";
import Contact from "./components/Contact.jsx";
import Works from "./components/Works.jsx";
import { useState, useRef } from "react";

function App() {
    const greetingsRef = useRef(null);
    const aboutRef = useRef(null);
    const techStackRef = useRef(null);
    const contactRef = useRef(null);
    const worksRef = useRef(null);

    const [, setGreetingsHeight] = useState(0);
    const [, setAboutHeight] = useState(0);
    const [, setTechHeight] = useState(0);
    const [, setContactHeight] = useState(0);
    const [, setWorksHeight] = useState(0);

    const sectionInfo = [
        {
            buttonText: "Greetings",
            ref: greetingsRef,
            component: Greetings,
            setter: setGreetingsHeight,
        },
        {
            buttonText: "About Me",
            ref: aboutRef,
            component: AboutMe,
            setter: setAboutHeight,
        },
        {
            buttonText: "Tech Stack",
            ref: techStackRef,
            component: TechStack,
            setter: setTechHeight,
        },
        {
            buttonText: "Works",
            ref: worksRef,
            component: Works,
            setter: setWorksHeight,
        },
        {
            buttonText: "Contact",
            ref: contactRef,
            component: Contact,
            setter: setContactHeight,
        },
    ];

    return (
        <NavBar sectionInfo={sectionInfo}>
            {sectionInfo.map((item, index) => (
                <item.component ref={item.ref} setter={item.setter} key={index} />
            ))}
        </NavBar>
    );
}

export default App;
