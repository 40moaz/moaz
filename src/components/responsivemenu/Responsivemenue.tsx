import { LinksType } from "../Types";

interface Props { setControleMenu: React.Dispatch<React.SetStateAction<boolean>>}

const links: LinksType= [
    { id: 1, name: "Projects", link: "#projects" },
    { id: 2, name: "About", link: "#About" },
    { id: 3, name: "Contact", link: "#contact" }, ]

const Responsivemenue: React.FC<Props> = ({setControleMenu}) => {
  return (
    <div className="bg-stone-700 h-screen text-white w-[250px] text-center flex items-center justify-center" >
        <div>
             {links.map((item) => <div key = {item.id} className="my-10" onClick={() => setControleMenu(false)} > <a  className="no-underline text-white text-3xl" href={item.link}> {item.name} </a> </div>)}
             <div> <a href="#" className="bg-btnColor no-underline cursor-pointer text-light py-3 px-5 text-xl rounded-md hover:bg-[#126ffa]" > Resume</a> </div>
        </div>
    </div>
  )
}

export default Responsivemenue

