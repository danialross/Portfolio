import { faPhone, faEnvelope, faCopy } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import DisplayButton from "./DisplayButton";
import Link from "./Link";

function Contact() {
  const contacts = [
    {
      icon: faPhone,
      size: "2x",
      text: "+1 (514) 834-6110",
      value: "5148346110",
      button: DisplayButton,
      copy: faCopy,
    },
    {
      icon: faEnvelope,
      size: "2x",
      text: "Danialrossar@gmail.com",
      value: "danialrossar@gmail.com",
      button: DisplayButton,
      copy: faCopy,
    },
    {
      icon: faLinkedinIn,
      size: "2x",
      height: "h-20",
      link: "https://www.linkedin.com/in/danial-ross-842579214/",
      button: Link,
    },
  ];

  return (
    <div className="bg-evenPageTone py-padY">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center ">
        <div className="font-racing text-5xl pt-10 pb-4 text-darkTone">
          Get in Touch
        </div>
        <div className="flex flex-col items-center p-7 gap-10 pb-10">
          {contacts.map((item, index) => (
            <item.button
              key={index}
              icon={item.icon}
              size={item.size}
              text={item.text}
              value={item.value}
              link={item.link}
              height={item.height}
              copy={item.copy}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
