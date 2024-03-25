import html from "../assets/html5.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import nodeJs from "../assets/nodejs.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.svg";
import mongodb from "../assets/mongodb.png";
import express from "../assets/express.png";
import mysql from "../assets/mysql.png";
import rails from "../assets/rails.png";
import { forwardRef, useEffect } from "react";

const TechStack = forwardRef(({ setter }, ref) => {
  useEffect(() => {
    const handleResize = () => setter(ref.current.offsetHeight);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [ref, setter]);

  const logos = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "Javascript", icon: js },
    { name: "Node.JS", icon: nodeJs },
    { name: "React", icon: react },
    { name: "TailwindCSS", icon: tailwind },
    { name: "MongoDB", icon: mongodb },
    { name: "Express", icon: express },
    { name: "MySQL", icon: mysql },
    { name: "Rails", icon: rails },
  ];

  return (
    <div ref={ref} className="bg-white py-padY">
      <div className="flex justify-center text-darkTone text-5xl font-racing w-full p-10 pb-16">
        Tech Stack
      </div>
      <div className="flex flex-wrap justify-evenly max-w-screen-xl mx-auto ">
        {logos.map((item, index) => (
          <div
            className="flex flex-col items-center justify-evenly border-2 border-lightTone p-5 mx-10 mb-16 rounded-xl grayscale hover:grayscale-0  hover:scale-125 w-52 h-64 transition-all duration-300 object-contain "
            key={index}
          >
            <div className="font-racing text-midTone text-xl pb-4 ">
              {item.name}
            </div>
            <img className="p-2" src={item.icon} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
});

export default TechStack;
