import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

function Navbar({ sectionInfo, children }) {
  const navRef = useRef(null);
  const buttonRef = useRef(null);
  const dropDownRef = useRef(null);
  const [isShowDropDown, setIsShowDropDown] = useState(false);
  const [opacity, setOpacity] = useState("opacity-0");

  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownRef.current &&
        buttonRef.current &&
        !dropDownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target) &&
        isShowDropDown
      ) {
        setIsShowDropDown(!isShowDropDown);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, [isShowDropDown, dropDownRef]);

  const toggleDropDown = () => {
    setIsShowDropDown((prevState) => !prevState);
  };

  //dropdown only visible when active
  useEffect(() => {
    if (isShowDropDown) {
      setOpacity("opacity-100");
    }
  }, [isShowDropDown]);

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
        "https://danialross-backend.vercel.app/get-resume/Danial_Ross_Resume.pdf",
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
    <div className="w-full overflow-x-hidden">
      <nav className={`fixed w-full bg-lightTone  z-50`} ref={navRef}>
        <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <button
            className="text-darkTone font-racing self-center text-4xl whitespace-nowrap opacity-100 hover:opacity-50 animation-opacity duration-200 pl-6"
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
              isShowDropDown ? `-translate-x-4` : `translate-x-full-vw`
            } 
            w-full block absolute ${opacity} md:opacity-100 translate-y-36 md:block md:static md:translate-x-0 md:translate-y-0 md:w-auto transition-transform duration-100`}
            id="navbar-solid-bg"
            //hide dropdown when not active
            onTransitionEnd={() => {
              if (!isShowDropDown) {
                setOpacity("opacity-0");
              }
            }}
          >
            <ul
              className="font-medium mt-4 rounded-xl bg-lightTone md:flex-row md:mt-0 p-6"
              ref={dropDownRef}
            >
              <li className="flex flex-col items-center md:flex-row text-darkTone gap-6 lg:gap-14 ">
                {sectionInfo.map((item, index) => {
                  if (index === 0) {
                    return null;
                  }
                  return (
                    <button
                      className="opacity-100 duration-200 hover:opacity-50"
                      onClick={() => {
                        if (isShowDropDown) {
                          setIsShowDropDown(false);
                        }
                        scrollTo(index);
                      }}
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
