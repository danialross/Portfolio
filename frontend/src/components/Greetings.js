import avatar from "../assets/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

function Greetings() {
  return (
    <div className="bg-white flex flex-col-reverse items-center justify-center  md:flex-row font-racing text-darkTone max-w-screen-xl mx-auto pt-32 p-16 md:gap-16">
      <div className="flex flex-col justify-center items-center md:items-start p-8 gap-0 md:gap-2 text-nowrap">
        <div className="text-3xl md:text-5xl">Hello, World!</div>
        <div className="text-2xl md:text-3xl text-midTone">
          I'm Danial Ross.
        </div>
        <div className="text-3xl md:text-5xl">Web Developer.</div>
        <div className="flex justify-center w-full p-8">
          <a
            href="https://github.com/danialross"
            target="_blank"
            rel="noopener noreferrer"
            className="text-midTone border-midTone border-2 hover:bg-midTone hover:text-white font-medium rounded-xl text-md px-7 py-2.5 me-2 mb-2"
          >
            <FontAwesomeIcon size="2x" icon={faGithub} />
          </a>
          <div className="w-2"></div>
          <div className="w-5"></div>
          <a
            href="https://www.linkedin.com/in/danial-ross-842579214/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-midTone border-midTone border-2 hover:bg-midTone hover:text-white font-medium rounded-xl text-md px-7 py-2.5 me-2 mb-2"
          >
            <FontAwesomeIcon size="2x" icon={faLinkedinIn} />
          </a>
        </div>
      </div>
      <div>
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
