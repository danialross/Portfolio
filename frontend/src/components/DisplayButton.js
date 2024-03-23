import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DisplayButton({ icon, text, size }) {
  const [isExpanded, setIsExpanded] = useState(false);
  // const spacer =

  return (
    <button
      className={`font-medium text-md h-20 flex justify-start items-center justify border-darkTone border-2 rounded-xl  transition-all duration-500 ease-in-out  ${
        isExpanded
          ? "w-80 bg-darkTone text-white"
          : "w-20 bg-none text-darkTone"
      }`}
      onClick={() => {
        setIsExpanded(!isExpanded);
      }}
    >
      <FontAwesomeIcon
        className={` transition-all ${
          isExpanded
            ? " ease-in duration-[700ms]   translate-x-[1.5rem]"
            : " ease-out duration-200}   translate-x-[1.4rem]"
        }`}
        size={size}
        icon={icon}
      />
      <div
        className={` font-racing text-xl transition-all text-nowrap ${
          isExpanded
            ? "opacity-100 ease-in duration-[500ms] visible  translate-x-[2rem]"
            : "opacity-0 ease-out duration-200 invisible  "
        }`}
      >
        {text}
      </div>
    </button>
  );
}

export default DisplayButton;
