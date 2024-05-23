import "aos/dist/aos.css";

import Aos from "aos";
import cssImg from "../../assets/images/css3-original.svg";
import gitImg from "../../assets/images/git-original.svg";
import htmlImg from "../../assets/images/html5-original.svg";
import img from "../../assets/images/man-svgrepo-com.svg";
import jsImg from "../../assets/images/javascript-original.svg";
import reactImg from "../../assets/images/react-original.svg";
import tsImg from "../../assets/images/typescript-original.svg";
import { useEffect } from "react";
import vscodeImg from "../../assets/images/vscode-original.svg";

const aboutData = [
  `Hello! I'm Moaz Ali, a passionate frontend developer dedicated to crafting seamless and intuitive user experiences. With a keen eye for design and a love for coding, I thrive on transforming creative concepts into functional, responsive websites and web applications.`,
  "My journey into the world of frontend development began with a curiosity for blending aesthetics with technology. Over the years, I've honed my skills in HTML, CSS, JavaScript, Typescript, and React, constantly staying updated with the latest trends and best practices in web development.",
  "What excites me most about frontend development is the opportunity to bridge the gap between design and functionality, turning static mockups into dynamic, interactive interfaces that users love to engage with. Whether it's optimizing performance, ensuring cross-browser compatibility, or implementing cutting-edge design techniques, I approach each project with enthusiasm and a commitment to excellence."
]

const myTools = [{ img: htmlImg, name: "HTML" }, { img: cssImg, name: "CSS" }, { img: jsImg, name: "Javascript" }, { img: tsImg, name: "Typescript" }, { img: reactImg, name: "ReactJS" }, { img: gitImg, name: "Git" }, { img: vscodeImg, name: "VS Code" }]

const About = () => {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className="pb-20" id="About" >
      <div className="container ml-auto mr-auto">
        <h1 className="w-fit ml-auto mr-auto my-7" data-aos="fade-right" data-aos-duration="1500" > About Me </h1>
        <div className="bg-white rounded-xl shadow-xl p-7 w-[95%] md:w-auto lg:w-[950px] ml-auto mr-auto " >
          <img className="w-44 m-auto block" data-aos="fade-right" data-aos-duration="1500" src={img} alt="Skill logo" />
          <div>
            {aboutData.map((data) => <div key={data} className=" my-10 sm:my-[80px] text-justify sm:text-left text-dark text-lg" data-aos="fade-right" data-aos-duration="1500"> {data} </div>)}
          </div>
          <div className="flex flex-wrap  justify-between" >
            {myTools.map((tool) => <div key={tool.name} className="w-20 text-center mb-5" data-aos="fade-right" data-aos-duration="1500" > <img className="" src={tool.img} alt="" /> <p> {tool.name} </p> </div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About