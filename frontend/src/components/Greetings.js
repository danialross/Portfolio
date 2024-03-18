import avatar from "../assets/avatar.png";
function Greetings() {
  return (
    <div className="flex flex-col-reverse items-center justify-center  md:flex-row font-racing text-darkTone max-w-screen-xl mx-auto p-8">
      <div className="flex flex-col justify-center items-start p-8 gap-0 md:gap-2">
        <div className="text-3xl md:text-5xl">Hello, World!</div>
        <div className="text-2xl md:text-3xl text-black">I'm Danial Ross.</div>
        <div className="text-3xl md:text-5xl">Web Developer.</div>
        <div className="flex justify-center w-full p-4">
          <button
            type="button"
            class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
          >
            first
          </button>
          <div className="w-5"></div>
          <button
            type="button"
            class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
          >
            first
          </button>
        </div>
      </div>
      <div className="">
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
