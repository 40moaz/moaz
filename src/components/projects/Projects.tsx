import "aos/dist/aos.css"

import Aos from "aos";
import { FaArrowRight } from "react-icons/fa6";
import { ProjectsType } from "../Types";
import img1 from "../../assets/images/restaurant.png";
import img2 from "../../assets/images/pokedex-responsive.png";
import img3 from "../../assets/images/todo.png";
import img4 from "../../assets/images/password-generator.png";
import img5 from "../../assets/images/notes-app.png";
import img6 from "../../assets/images/tribbel.png";
import { useEffect } from "react";

const projects: ProjectsType = [
  {
    id: 1,
    title: "restaurant",
    description: "An App where you can order food.",
    img: img1,
    skills: ["HTML", "CSS", "JS",],
    link: "https://40moaz.github.io/food/"
  },
  {
    id: 2,
    title: "Book Store",
    description: "An app show you a list of beautiful books and you can searc about waht you need.",
    img: img2,
    skills: ['HTML', "SASS", "React"],
    link: "https://bookstore-five-xi.vercel.app/"
  },
  {
    id: 3,
    title: "To do list",
    description: "To-Do Pro is a professional task list application that offers a seamless interface and advanced features for organizing daily activities and boosting productivity.",
    img: img3,
    skills: ["HTML", "CSS", "Tailwind", "React", "Typescript", "react-redux"],
    link: "https://to-do-list-delta-black.vercel.app/"
  },
  {
    id: 4,
    title: "Password Generator",
    description: "An App where you can generate a strong password and you can copy it.",
    img: img4,
    skills: ["HTML", "CSS", "React"],
    link: "https://password-generator-moaz.surge.sh/"
  },
  {
    id: 5,
    title: "Notes App",
    description: "An App that allows users to easily and efficiently create their notes. The app comes with a set of useful features that help users organize and manage their notes conveniently",
    img: img5,
    skills: ["HTML", "CSS", "JS"],
    link: "https://40moaz.github.io/notes/"
  },
  {
    id: 6,
    title: "Tribbel",
    description: " The 'Tribbel' landing page is a modern and visually appealing web page designed to captivate visitors and introduce them to the Tribbel brand.",
    img: img6,
    skills: ["HTML", "CSS", "ٌBootstrap", "React"],
    link: "https://tribbel.surge.sh/"
  },
]

const Projects = () => {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className="pb-12" id="projects" >
      <div className="container ml-auto mr-auto">
        <h1 className="text-pColor ml-auto mr-auto mb-14 w-fit" data-aos="fade-right" data-aos-duration="1500">Projects</h1>
        <div className="lg:pl-14 lg:pr14 flex flex-col justify-center items-center gap-14" >
          {
            projects.map((project) => (
              <div key={project.id} className="flex gap-0 flex-col lg:flex-row w-[98%] md:w-auto" data-aos="fade-left" data-aos-duration="1500" >
                <div className=" h-[320px] sm:h-[320px] lg:w-[500px] " >
                  <img className="w-full h-full rounded-tl-xl lg:rounded-bl-xl rounded-tr-xl lg:rounded-tr-none shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]" src={project.img} alt="project_img" />
                </div>
                <div className="p-3 sm:p-10  sm:h-[320px] text-center lg:text-left lg:w-[500px] rounded-br-md lg:rounded-tr-md rounded-bl-xl lg:rounded-bl-none bord shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] pl-5 flex flex-col justify-center	" >
                  <h1 className="ms:text-3xl text-xl" > {project.title} </h1>
                  <p className="sm:mt-3 text-pColor text-dark text-base sm:text-base" > {project.description} </p>
                  <div className="flex flex-wrap my-2 ms:my-4 gap-2 sm:gap-5 justify-center lg:justify-start" >
                    {project.skills.map(skill => (<div className="bg-gray-200 shadow-md py-1 px-1 rounded-md text-dark" key={skill} data-aos="flip-left" data-aos-duration="1500" > {skill} </div>))}
                  </div>
                  <div className=" bg-btnColor w-fit text-light cursor-pointer hover:bg-[#126ffa] duration-200 rounded-md py-2 px-2 m-auto lg:m-0" data-aos="zoom-in" data-aos-duration="1500" >
                    <a target="_blank" href={project.link} className="no-underline text-light flex items-center gap-2" >
                      <div className=" text-base" > Demo</div>
                      <div className="mt-1"> <FaArrowRight />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects