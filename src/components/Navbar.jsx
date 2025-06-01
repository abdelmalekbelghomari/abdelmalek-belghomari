import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-darkBlue text-white p-4 shadow-lg z-50">
      <nav>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-7xl mx-auto space-y-4 md:space-y-0">
          {/* Name */}
          <Link to="/" className="text-4xl font-signatra text-center md:text-left">
            Abdelmalek Belghomari
          </Link>

          {/* Menu Items */}
          <ul className="flex flex-row justify-between px-20 md:flex-row md:space-y-0 md:space-x-8">
            <li>
              <Link to="/" className="hover:text-lg">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-lg">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-lg">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export { Navbar };
