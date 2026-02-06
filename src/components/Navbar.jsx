import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="bg-black text-white shadow-md fixed top-0 left-0 w-full z-50">
      <ul className="flex gap-20 justify-center">
        <li>
          <Link 
            to="home"
            smooth={true}
            duration={500} 
            className="hover:text-gray-400 transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="about" 
            smooth={true}
            duration={500}
            className="hover:text-gray-400 transition-colors duration-200"
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="projects" 
            smooth={true}
            duration={500}
            className="hover:text-gray-400 transition-colors duration-200"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            to="contact" 
            smooth={true}
            duration={500}
            className="hover:text-gray-400 transition-colors duration-200"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
