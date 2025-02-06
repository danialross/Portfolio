import { forwardRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faNode, faReact } from "@fortawesome/free-brands-svg-icons";
import PortfolioImg from "../assets/Portfolio.png";
import VibeVaultImg from "../assets/VibeVault.png";
import AgoraImg from "../assets/theAgora.png";

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
      url: "https://vibevaultmusic.vercel.app",
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
    ]
    },
    {
      name: "The Agora",
      img: AgoraImg,
      url: "https://the-agora.vercel.app",
      icon: faGlobe,
      github: [
        {
          url: "https://github.com/danialross/Art-Gallery",
          icon: faReact,
        }
      ],
    }
  ];

  return (
    <div
      ref={ref}
      className="w-full py-padY flex flex-col  justify-center items-center font-racing text-darkTone bg-evenPageTone"
    >
      <div className="text-5xl mb-12">Works</div>
      <div className="w-full flex flex-col flex-wrap md:flex-row justify-start items-center md:justify-center md:items-start gap-20 md:gap-24">
        {sections.map((item, index) => {
          return (
            <div
              className="flex flex-col justify-center items-center text-center text-xl w-64 gap-6 md:gap-8"
              key={index}
            >
              <div className="text-3xl">{item.name}</div>
              <img
                src={item.img}
                alt="website screenshot"
                className="rounded-xl border-2 border-darkTone"
              />
              {item.url && (
                <>
                  Link
                  <a
                    href={item.url}
                    className=" border-2 border-darkTone rounded-lg bg-white p-2   duration-200 ease-in-out hover:bg-darkTone hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      size="2x"
                      className="p-2"
                    />
                  </a>
                </>
              )}
              <div className="text-xl">Source Code</div>
              <div className="flex justify-center items-center gap-8">
                {item.github.map((link, index) => {
                  return (
                    <a
                      key={index}
                      href={link.url}
                      className=" border-2 border-darkTone rounded-lg bg-white p-2 transition-colors duration-200 ease-in-out hover:bg-darkTone hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={link.icon}
                        size="2x"
                        className="p-2"
                      />
                    </a>
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
