import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DisplayButton({ icon, text, value, size, copy }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAlerting, setIsAlerting] = useState(false);

  const copyText = () => {
    navigator.clipboard.writeText(value);
  };

  const notifyUser = () => {
    setIsAlerting(true);
    setTimeout(() => {
      setIsAlerting(false);
    }, 2000);
  };

  return (
    <button
      className={`font-medium text-md h-20 p-[1.4rem] hover:bg-darkTone hover:text-white flex justify-start items-center justify border-darkTone border-2 rounded-xl  transition-all duration-500 ease-in-out  ${
        isExpanded
          ? "max-w-full bg-darkTone text-white"
          : "max-w-20 bg-none text-darkTone"
      }`}
      onClick={() => {
        setIsExpanded(!isExpanded);
      }}
    >
      <FontAwesomeIcon size={size} icon={icon} />
      <div
        className={` p-2 font-racing text-xl transition-opacity text-nowrap ${
          isExpanded
            ? "delay-300 opacity-100 ease-in duration-300 visible"
            : "opacity-0 ease-in duration-200 invisible"
        }`}
      >
        {text}
      </div>

      <FontAwesomeIcon
        className={` relative p-2 font-racing text-xl transition-opacity text-nowrap ${
          isExpanded
            ? "delay-300 opacity-100 ease-in duration-300 visible"
            : "opacity-0 ease-in duration-200 invisible"
        }`}
        onClick={(event) => {
          event.stopPropagation();
          copyText();
          notifyUser();
        }}
        size="1x"
        icon={copy}
      />

      <div
        className={`fixed flex justify-center items-center bg-white rounded-md text-darkTone transition-all duration-100 bottom-5 left-1/2 -translate-x-1/2 ${
          isAlerting ? "w-2/3 h-10 opacity-100" : "w-0 h-0 opacity-0"
        }`}
      >
        Copied
      </div>
    </button>
  );
}

export default DisplayButton;
