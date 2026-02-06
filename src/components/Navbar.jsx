import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white p-4">
      <ul className="flex gap-20 justify-center">
        <li>
          <Link 
            to="/" 
            className="hover:text-gray-400 transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className="hover:text-gray-400 transition-colors duration-200"
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/projects" 
            className="hover:text-gray-400 transition-colors duration-200"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
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
