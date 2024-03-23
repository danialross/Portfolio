import avatar from "../assets/avatar.png";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import ButtonWithLink from "./ButtonWithLink";

function Greetings() {
  const buttonsData = [
    { link: "https://github.com/danialross", size: "2x", icon: faGithub },
    {
      link: "https://www.linkedin.com/in/danial-ross-842579214/",
      size: "2x",
      icon: faLinkedinIn,
    },
  ];
  return (
    <div className="bg-white flex flex-col-reverse items-center justify-center  md:flex-row font-racing text-darkTone max-w-screen-xl mx-auto pt-32 md:pt-44 md:pb-24 md:gap-16">
      <div className="flex flex-col justify-center items-center md:items-start p-8 gap-0 md:gap-2 text-nowrap">
        <div className="text-3xl md:text-5xl">Hello, World!</div>
        <div className="text-2xl md:text-3xl text-midTone">
          I'm Danial Ross.
        </div>
        <div className="text-3xl md:text-5xl">Web Developer.</div>
        <div className="flex justify-center w-full p-8 gap-10">
          {buttonsData.map((item, index) => {
            return (
              <ButtonWithLink
                link={item.link}
                size={item.size}
                icon={item.icon}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <div className="p-5">
        <img
          className="bg-lightTone rounded-full"
          src={avatar}
          alt="avatar"
        ></img>
      </div>
    </div>
  );
}

export default Greetings;
