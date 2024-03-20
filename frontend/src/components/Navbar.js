import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar({ children }) {
  const [isActive, setIsActive] = useState(false);

  const toggleDropDown = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <nav className="fixed w-full bg-lightTone border-b-2 border-darkTone z-50">
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
            <ul className="flex flex-col items-center font-medium mt-4 rounded-lg bg-lightTone md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <button className="text-darkTone border-2 border-darkTone p-2 rounded-xl  hover:text-hoverDarkTone hover:border-hoverDarkTone">
                  <FontAwesomeIcon icon={faDownload} /> Download Resume
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
