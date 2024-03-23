import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DisplayButton({ icon, text, size }) {
  const [isExpanded, setIsExpanded] = useState(false);
  // const spacer =

  return (
    <button
      className={` font-medium text-md h-20 p-[1.4rem] flex justify-start items-center justify border-darkTone border-2 rounded-xl  transition-all duration-500 ease-in-out  ${
        isExpanded
          ? "w-80 bg-darkTone text-white"
          : "w-20 bg-none text-darkTone"
      }`}
      onClick={() => {
        setIsExpanded(!isExpanded);
      }}
    >
      <FontAwesomeIcon size={size} icon={icon} />
      <div
        className={` p-2 relative font-racing text-xl transition-opacity text-nowrap ${
          isExpanded
            ? "delay-300 opacity-100 ease-in duration-300 visible"
            : "opacity-0 ease-in duration-200 invisible"
        }`}
      >
        {text}
      </div>
    </button>
  );
}

export default DisplayButton;
