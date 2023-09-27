import Services from "./Services";

const About = () => {
  const skills = [
    { name: "WEB DEVELOPMENT", image: "/src/assets/icons/code.png" },
    { name: "Graphics DESIGNING", image: "/src/assets/icons/ruler-pen.png" },
    { name: "MOBILE DEVELOPMENT", image: "/src/assets/icons/android.png" },
    // {
    //   name: "WEB SCRAPING WITH PYTHON",
    //   image: "/src/assets/icons/python-svg.png",
    // },
  ];

  return (
    <div className="md:px-10 px-7 sm:-mt-24" id="about">
      <h1 className="text-primary font-semibold text-3xl mt-5">About me:</h1>
      <p className="my-3 text-white md:w-2/3 leading-[2]">
        Hi, my name is Tomilola Oluwafemi, I am a Software Engineer skilled in Fullstack web development, Graphics designing, and Mobile development. 
      </p>
      
      <div className="md:flex my-7 items-center">
        <div className="text-primary text-6xl font-bold">5+</div>
        <p className="text-white md:ml-5">
          Years of experience. Specialised in building web apps, while ensuring a
          seamless web experience for end users.
        </p>
      </div>

      {/* skills */}
      <div className="flex flex-col md:flex-row ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="md:w-[256px] md:h-[254px] bg-gray-800 hover:bg-primary flex flex-col items-baseline justify-end md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500 uppercase"
          >
            <img src={skill.image} alt={skill.name} />
            <p className="mt-3 text-2xl text-white font-semibold">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      {/* services section */}
      <Services />
    </div>
  );
};

export default About;
