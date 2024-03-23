import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Link({ icon, link, size }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-darkTone border-darkTone border-2 hover:bg-darkTone hover:text-white font-medium rounded-xl text-md px-7 py-2.5 me-2 mb-2"
    >
      <FontAwesomeIcon size={size} icon={icon} />
    </a>
  );
}

export default Link;
