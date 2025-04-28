import avatar from "../assets/avatar.png";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "./Link.jsx";
import { forwardRef, useEffect } from "react";

// eslint-disable-next-line react/prop-types,react/display-name
const Greetings = forwardRef(({ setter }, ref) => {
  useEffect(() => {
    const handleResize = () => setter(ref.current.offsetHeight);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [ref, setter]);

  const buttonHeight = "h-16";
  const buttonsData = [
    {
      link: "https://github.com/danialross",
      size: "2x",
      icon: faGithub,
      height: buttonHeight,
    },
    {
      link: "https://www.linkedin.com/in/danial-ross-842579214/",
      size: "2x",
      icon: faLinkedinIn,
      height: buttonHeight,
    },
  ];
  return (
    <div
      ref={ref}
      className="bg-white flex flex-col-reverse items-center justify-center  md:flex-row font-racing text-darkTone mx-auto pt-28 md:pt-44 md:pb-24 md:gap-16"
    >
      <div className="flex flex-col justify-center items-center md:items-start p-8 gap-0 md:gap-2 text-nowrap">
        <div className="text-3xl md:text-5xl">Hello, World!</div>
        <div className="text-2xl md:text-3xl text-midTone">
          I'm Danial Ross.
        </div>
        <div className="text-3xl md:text-5xl text-keyboardTone">Web Developer.</div>
        <div className="flex justify-center w-full p-8 gap-10">
          {buttonsData.map((item, index) => {
            return (
              <Link
                link={item.link}
                size={item.size}
                icon={item.icon}
                key={index}
                height={item.height}
              />
            );
          })}
        </div>
      </div>
      <div className="p-5 max-w-80 md:max-w-lg">
        <img
          className="bg-evenPageTone rounded-full"
          src={avatar}
          alt="avatar"
        ></img>
      </div>
    </div>
  );
});

export default Greetings;
