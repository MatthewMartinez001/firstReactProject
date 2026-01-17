import { MdOutlineStarRate } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 text-white py-2 md:py-5 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h3> React Practice</h3>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <IoMdClose /> : <MdOutlineStarRate />}
          </button>          
        </div>

        <ul className="hidden md:flex space-x-3 md:space-x-6 ">
          <li> <Link to="/" className="hover:text-gray-700"> Home </Link> </li>
          <li> <Link to="/product" className="hover:text-gray-700"> Product </Link> </li>
          <li> <Link to="/blogs" className="hover:text-gray-700"> Blogs </Link> </li>
          <li> <Link to="/contact" className="hover:text-gray-700"> Contact </Link> </li>
          <li> <Link to="/about" className="hover:text-gray-700"> About </Link> </li>
        </ul>

        <button className="hidden md:block bg-blue-600 px-4 py-1 rounded-md hover:bg-blue-700 cursor-pointer"> Login </button>

        {/* Mobile menu collapsed */}
        <div className={`md:hidden w-full absolute bg-blue-400 top-full left-0 ${isOpen ? 'block' : 'hidden'}`}>
          <ul className=" flex flex-col items-center py-4">
              <li className=""> Home </li>
              <li> Product </li>
              <li> Blogs </li>
              <li> Contact </li>
              <li> About </li>
              <li>
                <button className=""> Login </button>
              </li>
          </ul>    
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
