import "aos/dist/aos.css"

import { useEffect, useState } from "react";

import Aos from "aos";
import { FaRegCopy } from "react-icons/fa6";

const Contact = () => {
 
  useEffect(() => { Aos.init() }, [])

 const [showText, setShowText] = useState<boolean>(false)

 const handleSowText = () => {
  setShowText(true)
  setTimeout(() => { setShowText(false) }, 1000)
 }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("sherifahmed852002@gmail.com");
      handleSowText()
    } catch (error) { console.error('Error copying text:', error); }
  }

  return (
    <div id = "contact" >
        <div className="container m-auto pb-6">
            <h1 className="w-fit m-auto" data-aos="fade-right"  data-aos-duration="1500"  > Get In Touch </h1>
            <div className="p-5 shadow-lg flex flex-col w-[95%] sm:w-auto sm:flex-row justify-around mt-10 rounded-lg h-[150px] items-center bg-white lg:w-[950px] ml-auto mr-auto" data-aos="fade-right"  data-aos-duration="1500"  >
                <p className="text-dark text-md sm:text-xl flex sm:gap-5" >amoaz14109@gmail.com <span className="cursor-pointer relative w-12 h-6 flex items-center justify-center text-center " onClick={() => copyEmail()} >  {showText ? <span className="text-btnColor text-[10px] sm:text-[15px]" > Copied  </span> : <FaRegCopy/>}</span> </p>
                <div> <a className="no-underline bg-btnColor text-light cursor-pointer rounded-lg py-3 px-4 hover:bg-[#126ffa] duration-200 text-xl" href="mailto:sherifahmed852002@gmail.com"> Send Email </a> </div>
            </div>
        </div>
    </div>
  )
}

export default Contact