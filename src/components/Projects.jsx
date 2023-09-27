import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "TechiesBio",
      description:
        "A full stack web app for sharing Bios and Stories of Techies and startups all over the world",
      photo: "/src/assets/projects/img1.jpg",
      link: "techiesbio.pythonanywhere.com",
    },
    {
      title: "Shoptinga",
      description:
        "A Digital products only market place that accepts both Crypto and Fiat  as mode of Payments",
      photo: "/src/assets/projects/img2.jpg",
      link: "shoptinga.online",
    },
    {
      title: "Grouby",
      description:
        "Grouby is a group buying platform, where users buy goods affordably through group buying",
      photo: "/src/assets/projects/Grouby.png",
      link: "grouby.com.ng",
    },
  ];
  return (
    <div className="md:px-10 px-7 my-8 w-4/5 mx-auto" id="projects">
      <h1 className="text-primary font-semibold text-3xl mt-16">
        Featured projects:
      </h1>
      <p className="my-3 text-white md:w-3/4 leading-[2]">
        I have worked on many projects over the course of being a Web Developer,
        here are a few of my live, real-world projects
      </p>
      {/* featured projects */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-6 items-center justify-center">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex flex-col shadow-sm bg-gray-800 p-4 py-6 rounded group"
            >
              <a
                href={`https://${project.link}`}
                target="_blank"
                rel="noreferrer"
                className="mb-4 aspect-video overflow-hidden flex justify-center place-items-center rounded relative shadow-md shadow-black"
              >
                <div className="w-full h-full absolute bg-opacity-40 bg-black group-hover:bg-opacity-20 transition-all duration-500 " />
                <img src={project.photo} alt={project.title} />
              </a>
              <h3 className="text-primary group-hover:text-white font-semibold text-xl transition-all duration-500 ">
                {project.title}
              </h3>
              <p className=" text-gray-200 mt-1">{project.description}.</p>
              <div className="mt-5">
                <a
                  href={`https://${project.link}`}
                  className="transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary"
                >
                  View Live
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
