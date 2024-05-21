import keyboard from "../assets/keyboard.jpg";
import { forwardRef, useEffect } from "react";

const AboutMe = forwardRef(({ setter }, ref) => {
  useEffect(() => {
    const handleResize = () => setter(ref.current.offsetHeight);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [ref, setter]);

  return (
    <div ref={ref} className="bg-evenPageTone py-padY">
      <div className="flex flex-col items-center lg:flex-row font-racing px-8 max-w-screen-xl mx-auto gap-8 lg:gap-0">
        <div className="flex-shrink-0">
          <img
            className=" w-96 h-auto rounded-3xl object-cover"
            src={keyboard}
            alt="keyboard"
          />
        </div>
        <div>
          <div className="flex justify-center text-3xl lg:text-5xl pb-6 lg:px-8 lg:pb-8 lg:pt-2 text-darkTone">
            About Me
          </div>
          <div className="lg:w-auto text-midTone text-md md:text-xl md:px-20 leading-8 md:leading-10 indent-12 px-4">
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
});

export default AboutMe;
