import html from "../assets/html5.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import nodeJs from "../assets/nodejs.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.svg";
import mongodb from "../assets/mongodb.png";
import express from "../assets/express.png";
import mysql from "../assets/mysql.png";

function TechStack() {
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
  ];

  return (
    <div className="bg-white">
      <div className="flex justify-center text-darkTone text-5xl font-racing w-full p-10">
        Tech Stack
      </div>
      <div className="flex flex-wrap justify-evenly max-w-screen-lg mx-auto">
        {logos.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col items-center border-2 border-lightTone p-5 mb-5 mx-4 rounded-xl">
              <div className="font-racing text-midTone text-xl pb-4 ">
                {item.name}
              </div>
              <img
                className="grayscale hover:grayscale-0 transition-all duration-300 w-44 h-44 object-contain "
                src={item.icon}
                alt={item.name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
