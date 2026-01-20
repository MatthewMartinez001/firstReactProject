import { MdOutlineStarRate } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname || '/');
  }, [location.pathname]);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav className="bg-blue-500 text-white py-2 md:py-5 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h3 className="text-xl font-bold"> React Pro01</h3>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <IoMdClose /> : <MdOutlineStarRate />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-3 md:space-x-6 ">
          <li>
            {" "}
            <Link to="/" onClick={() => handleLinkClick('/')} className={`${activeLink === '/' ? 'font-bold underline' : ''} hover:text-gray-700`}
            
            >
              {" "}
              Home{" "}
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/product" onClick={() => handleLinkClick('/product')} 
            className={`${activeLink === '/product' ? 'font-bold underline' : ''} hover:text-gray-700`}>
              {" "}
              Product{" "}
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/blogs" onClick={() => handleLinkClick('/blogs')} 
            className={`${activeLink === '/blogs' ? 'font-bold underline' : ''} hover:text-gray-700`}>
              {" "}
              Blogs{" "}
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/contact" onClick={() => handleLinkClick('/contact')} 
            className={`${activeLink === '/contact' ? 'font-bold underline' : ''} hover:text-gray-700`}>
              {" "}
              Contact{" "}
            </Link>{" "}
          </li>
          <li>
            {" "}
              <Link to="/about" onClick={() => handleLinkClick('/about')} 
              className={`${activeLink === '/about' ? 'font-bold underline' : ''} hover:text-gray-700`}>
                {" "}
                About{" "}
              </Link>{" "}
            </li>
          </ul>
        <button className="hidden md:block bg-blue-600 px-4 py-1 rounded-md hover:bg-blue-700 cursor-pointer">
          {" "}
          Login{" "}
        </button>

        {/* Mobile menu collapsed */}
        <div
          className={`md:hidden w-full absolute bg-blue-400 top-full left-0 ${isOpen ? "block" : "hidden"}`}
        >
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
