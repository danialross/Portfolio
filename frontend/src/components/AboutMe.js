import keyboard from "../assets/keyboard.jpg";

function AboutMe() {
  return (
    <div className="bg-lightTone">
      <div className="flex flex-col md:flex-row font-racing p-8 md:gap-8 max-w-screen-xl mx-auto">
        <div className="max-w-xl">
          <img className="rounded-3xl" src={keyboard} alt="keyboard" />
        </div>
        <div>
          <div className="flex justify-center text-3xl md:text-5xl pt-8 pb-6 md:px-8 md:pb-8 md:pt-2 text-darkTone">
            About Me
          </div>
          <div className="text-midTone text-md md:text-xl md:px-8 leading-8 md:leading-10 indent-12 ">
            I'm a recent Computer Science graduate from Carleton University,
            based in Ottawa, ON. I am keen to transition my academic knowledge
            into practical applications. Actively seeking roles in frontend,
            backend, and full-stack development, I aspire to join a team where
            innovation, collaboration, and making a tangible impact through
            technology are at the forefront. I'm excited about the opportunity
            to grow as a developer and contribute my skills to create meaningful
            projects.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
