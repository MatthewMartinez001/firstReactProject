import { MdOutlineStarRate } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
    const[isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    }



  return (
    <nav className="bg-blue-500 text-white py-2 md:py-5">
        <div className="container mx-auto flex justify-between items-center p-4 ">
            <h3> React Practice</h3>

            {/* Mobile menu button */}
            <button onClick={toggleMenu}>
                {
                    isOpen ? <IoMdClose /> : <MdOutlineStarRate />
                }
                
                
            </button>

            <ul className="flex space-x-3 md:space-x-6">
                <li> Home </li>
                <li> Product </li>
                <li> Blogs </li>
                <li> Contact </li>
                <li> About </li>
            </ul>

            <button> Login </button>
        </div>
    </nav>
  )
}

export default Navbar
