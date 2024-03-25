import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";

function Navbar({ sectionInfo, children }) {
  const buttons = ["About Me", "Tech Stack", "Contact"];
  const navRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const toggleDropDown = () => {
    setIsActive(!isActive);
  };

  const scrollTo = (index) => {
    let height = 0;
    for (let i = 0; i < index; i++) {
      height += sectionInfo[i].current.offsetHeight;
    }
    height -= navRef.current.offsetHeight;

    window.scrollTo({
      top: height,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <nav className={`fixed w-full bg-lightTone  z-50`} ref={navRef}>
        <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="text-darkTone font-racing self-center text-4xl whitespace-nowrap">
            Danial Ross
          </span>

          <button
            onClick={toggleDropDown}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className={`${
              isActive ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-solid-bg"
          >
            <ul className="font-medium mt-4 rounded-lg bg-lightTone md:flex-row md:mt-0 font-racing">
              <li className="flex flex-col items-center md:flex-row text-darkTone gap-4 md:gap-10 ">
                {buttons.map((item, index) => (
                  <button
                    className="hover:text-hoverDarkTone"
                    onClick={() => scrollTo(index + 1)}
                  >
                    {item}
                  </button>
                ))}
                <button className="text-darkTone hover:text-hoverDarkTone hover:border-hoverDarkTone">
                  <FontAwesomeIcon className="px-2" icon={faCloudArrowDown} />
                  Resume
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
}

export default Navbar;
