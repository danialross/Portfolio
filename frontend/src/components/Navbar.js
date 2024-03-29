import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect, useCallback } from "react";
import axios from "axios";

function Navbar({ sectionInfo, children }) {
  const navRef = useRef(null);
  const buttonRef = useRef(null);
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownRef.current &&
        buttonRef.current &&
        !dropDownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target) &&
        isActive
      ) {
        setIsActive(!isActive);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, [isActive, dropDownRef]);

  const toggleDropDown = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);

  const scrollTo = (index) => {
    let height = 0;
    for (let i = 0; i < index; i++) {
      height += sectionInfo[i].ref.current.offsetHeight;
    }
    height -= navRef.current.offsetHeight;

    window.scrollTo({
      top: height,
      left: 0,
      behavior: "smooth",
    });
  };

  const fetchResume = async () => {
    try {
      const response = await axios.get(
        "https://danialross-backend.vercel.app/api/files/Danial_Ross_Resume.pdf",
        { responseType: "blob" }
      );

      const pdfBlob = new Blob([response.data], { type: "application/pdf" });

      const fileUrl = URL.createObjectURL(pdfBlob);

      const link = document.createElement("a");
      link.href = fileUrl;
      link.setAttribute("download", "Danial_Ross_Resume.pdf");
      document.body.appendChild(link);
      link.click();

      URL.revokeObjectURL(link.href);
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error("Error downloading the PDF: ", error);
    }
  };

  return (
    <div className="w-screen overflow-x-hidden">
      <nav className={` w-full bg-lightTone  z-50`} ref={navRef}>
        <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <button
            className="text-darkTone font-racing self-center text-4xl whitespace-nowrap opacity-100 hover:opacity-50 animation-opacity duration-200"
            onClick={() => scrollTo(0)}
          >
            Danial Ross
          </button>

          <button
            ref={buttonRef}
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
            <ul
              className="font-medium mt-4 rounded-lg bg-lightTone md:flex-row md:mt-0"
              ref={dropDownRef}
            >
              <li className="flex flex-col items-center md:flex-row text-darkTone gap-6 md:gap-12 ">
                {sectionInfo.map((item, index) => {
                  if (index === 0) {
                    return null;
                  }
                  return (
                    <button
                      className="opacity-100 duration-200 hover:opacity-50"
                      onClick={() => scrollTo(index)}
                      key={index}
                    >
                      {item.buttonText}
                    </button>
                  );
                })}
                <button
                  className="text-darkTone opacity-100 duration-200 hover:opacity-50"
                  onClick={fetchResume}
                >
                  <FontAwesomeIcon className="px-2" icon={faCloudArrowDown} />
                  Resume
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}

export default Navbar;
