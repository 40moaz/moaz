import "aos/dist/aos.css"

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";

import Aos from "aos";
import { IoMdMenu } from "react-icons/io";
import { LinksType } from "../Types";
import Responsivemenue from "../responsivemenu/Responsivemenue";
import hero from "../../assets/images/man-svgrepo-com.svg"
import scrolldown from "../../assets/images/scroll-down.svg"

// const links: LinksType = [
//   { id: 1, name: "Projects", link: "#projects" },
//   { id: 2, name: "About", link: "#About" },
//   { id: 3, name: "Contact", link: "#contact" },
// ]

const Nav = () => {

  const [text] = useTypewriter({
    words: ["Front-end developer", "React developer"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 50
  });

  useEffect(() => { Aos.init() }, [])

  const handleScroll = () => { window.scroll({ top: 700, left: 0, behavior: 'smooth' }) }

  const [controleMenu, setControleMenu] = useState<boolean>(false)

  return (
    <>
      <div className="bg-hero-main bg-cover h-[700px] md:h-[550px] pt-4">
        <div className="container ml-auto mr-auto px-3">
          <div className="flex flex-row items-start justify-between py-3" data-aos="fade-right" data-aos-duration="1500" >
            <div><p className="text-light font-bold text-xl" >MOAZ.DEV</p></div>
            <div className="text-white text-4xl cursor-pointer block md:hidden" onClick={() => setControleMenu(true)} > <IoMdMenu /> </div>
            {/* <div className=" md:block" >
              <ul className="flex gap-10 list-none	" >
                {links.map(link => <li key={link.id}>  <a href={link.link} className="text-dark no-underline hover:text-light duration-300 text-xl" > {link.name} </a> </li>)}
              </ul>
            </div>
            <div className=" md:block" >
              <a href="#" target="_blank" className="bg-btnColor no-underline cursor-pointer text-light py-3 px-5 text-xl rounded-md hover:bg-[#126ffa]" > Resume </a>
            </div> */}
          </div>
          <div className="flex flex-col md:flex-row justify-center text-center gap-6 md:justify-between mt-[100px] lg:pl-[150px]  lg:pr-[200px]">
            <div data-aos="flip-left" data-aos-duration="1500" >
              <p className="text-light text-3xl sm:text-6xl mb-5" > Hi, I'm Moaz </p>
              <span className="text-dark font-normal text-xl sm:text-2xl"  > {text} </span>
              <span className="text-light" > <Cursor /> </span>
            </div>
            <div data-aos="fade-left" data-aos-duration="1500" > <img className=" w-[250px] sm:w-[300px]" src={hero} alt="" /> </div>
          </div>
          <div className="flex items-center gap-4 w-fit ml-auto mr-auto md:ml-0 md:mr-0 mt-10 md:mt-0 cursor-pointer animate-bounce" onClick={() => handleScroll()} > <span className="text-light text-xl" > Sroll down  </span> <img className="w-5" src={scrolldown} alt="" /> </div>
        </div>
      </div>
      <div style={{ transform: "rotate(180deg)", marginTop: "-10px" }} > <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(21, 20, 24)" fillOpacity="1" d="M0,256L48,256C96,256,192,256,288,245.3C384,235,480,213,576,197.3C672,181,768,171,864,176C960,181,1056,203,1152,213.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> </div>
      <div className={controleMenu ? "fixed top-0 right-0 h-screen duration-200 z-[9999999]" : "fixed top-0 right-[-250px] h-screen duration-200"} > <Responsivemenue setControleMenu={setControleMenu} /> </div>
    </>
  )
}

export default Nav