import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import { FaLinkedin } from "react-icons/fa";
import Footer from "./components/footer/Footer"
import { IoLogoFacebook } from 'react-icons/io';
import Nav from "./components/navbar/Nav"
import Projects from "./components/projects/Projects"

const App = () => {
  return (
    <div className="font-poppins bg-[#fafaff] relative overflow-hidden" >
      <Nav />
      <Projects />
      <About />
      <Contact />
      <Footer />
      <div className=" absolute bottom-[100px] sm:bottom-[150px] left-[40%] md:fixed md:left-5 md:top-[40%] flex gap-5 md:flex-col" >
        <a href="https://www.linkedin.com/in/moaz-ali-9764662a3/" className="text-4xl cursor-pointer md:block text-dark  hover:text-btnColor duration-200  "><FaLinkedin /></a>
        <a href="https://www.facebook.com/moaz.programmer/" className="text-4xl cursor-pointer md:block text-dark  hover:text-btnColor duration-200  "><IoLogoFacebook /></a>
      </div>
    </div>
  )
}

export default App