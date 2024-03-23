import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Link({ icon, link, size, height }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex justify-center items-center text-darkTone border-darkTone border-2 hover:bg-darkTone hover:text-white font-medium rounded-xl text-md h-${height} w-20`}
    >
      <FontAwesomeIcon size={size} icon={icon} />
    </a>
  );
}

export default Link;
