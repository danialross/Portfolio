import { forwardRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import PortfolioImg from "../assets/Portfolio.png";
import VibeVaultImg from "../assets/VibeVault.png";

const Works = forwardRef(({ setter }, ref) => {
  useEffect(() => {
    const handleResize = () => setter(ref.current.offsetHeight);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [ref, setter]);

  const sections = [
    {
      name: "Portfolio",
      img: PortfolioImg,
      github: [
        {
          url: "https://github.com/danialross/Portfolio",
          icon: faGithub,
        },
      ],
    },
    {
      name: "Vibe Vault",
      img: VibeVaultImg,
      link: "https://vibevaultmusic.vercel.app",
      icon: faGlobe,
      github: [
        {
          url: "https://github.com/danialross/VibeVault-Frontend",
          icon: faReact,
        },
        {
          url: "https://github.com/danialross/VibeVault-Backend",
          icon: faNode,
        },
      ],
    },
  ];

  return (
    <div
      ref={ref}
      className="w-full py-padY flex-col md:flex justify-center items-center font-racing text-darkTone bg-evenPageTone"
    >
      <div className="text-5xl mt-10 mb-8">Works</div>
      <div className="w-full flex justify-center items-start gap-24">
        {sections.map((item, index) => {
          return (
            <div
              className="flex flex-col justify-center items-center text-center text-xl w-1/4 h-1/4"
              key={index}
            >
              <div className="text-3xl mb-8">{item.name}</div>
              <img
                src={item.img}
                alt="website screenshot"
                className="rounded-xl border-2 border-darkTone mb-12"
              />
              <div className="text-xl mb-6">Source Code</div>

              <div className="flex justify-center items-center gap-4">
                {item.github.map((link, index) => {
                  return (
                    <div
                      className="flex justify-center items-center mx-2"
                      key={index}
                    >
                      <a
                        href={link.url}
                        className=" border-2 border-darkTone rounded-lg bg-white p-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={link.icon}
                          size="2x"
                          className="p-2"
                        />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default Works;
