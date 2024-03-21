import keyboard from "../assets/keyboard.jpg";

function AboutMe() {
  return (
    <div className="bg-lightTone p-16">
      <div className="flex flex-col items-center lg:flex-row font-racing p-8 lg:gap-8 max-w-screen-xl mx-auto">
        <div className="flex-shrink-0">
          <img
            className=" w-96 h-auto rounded-3xl object-cover"
            src={keyboard}
            alt="keyboard"
          />
        </div>
        <div>
          <div className="flex justify-center text-3xl lg:text-5xl pt-8 pb-6 lg:px-8 md:pb-8 lg:pt-2 text-darkTone">
            About Me
          </div>
          <div className="w-screen lg:w-auto text-midTone text-md sm:text-xl sm:px-8 leading-8 sm:leading-10 indent-12 px-10">
            I'm a recent
            <span className="text-keyboardTone"> Computer Science </span>
            graduate from
            <span className="text-keyboardTone"> Carleton University </span>,
            based in
            <span className="text-keyboardTone"> Ottawa </span>,
            <span className="text-keyboardTone"> ON</span>. I am keen to
            transition my academic knowledge into practical applications.
            Actively seeking roles in
            <span className="text-keyboardTone"> Frontend </span>,
            <span className="text-keyboardTone"> Backend </span>and
            <span className="text-keyboardTone"> Full-Stack </span>
            development, I aspire to join a team where
            <span className="text-keyboardTone"> innovation </span>,
            <span className="text-keyboardTone"> collaboration </span>, and
            making a tangible
            <span className="text-keyboardTone"> impact </span>
            through technology are at the forefront. I'm excited about the
            <span className="text-keyboardTone"> opportunity to grow </span>
            as a developer and contribute my skills to create meaningful
            projects.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
