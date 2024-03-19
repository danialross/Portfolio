import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import html from "../assets/html5.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import nodeJs from "../assets/nodejs.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.svg";
import mongodb from "../assets/mongodb.png";
import express from "../assets/express.png";
import mysql from "../assets/mysql.png";

function Skills() {
  const logos = [
    { name: "html", icon: html },
    { name: "css", icon: css },
    { name: "js", icon: js },
    { name: "node", icon: nodeJs },
    { name: "react", icon: react },
    { name: "tailwind", icon: tailwind },
    { name: "mongodb", icon: mongodb },
    { name: "express", icon: express },
    { name: "mysql", icon: mysql },
  ];

  return (
    <div className="bg-white">
      <div className="flex justify-center text-darkTone text-5xl font-racing w-full p-10">
        Tech Stack
      </div>
      <div className="flex flex-wrap justify-evenly max-w-screen-sm mx-auto">
        {logos.map((item, index) => (
          <div
            key={index}
            className="border-2 border-lightTone p-5 m-5 rounded-xl"
          >
            <img
              className="w-16 h-16 object-contain "
              src={item.icon}
              alt={item.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
