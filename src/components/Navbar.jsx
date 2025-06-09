import { Link } from "react-router-dom";
import { useTheme } from "../theme";
import NightModeSwitcher from "./NightModeSwitcher";

function Navbar() {

  const { theme } = useTheme();
  return (
    <div className={`${theme.textColor} p-4`}>
      <nav>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-7xl mx-auto space-y-4 md:space-y-0">
          <div className="flex items-center md:justify-start">
            <div className="flex-1 md:flex-none pl-14">
              <Link to="/" className="text-4xl font-signatra text-center md:text-left block ">
                Abdelmalek Belghomari
              </Link>
            </div>
            <div className="block md:hidden flex-shrink-0">
              <NightModeSwitcher />
            </div>
            
          </div>

          <ul className="flex flex-row justify-center space-x-4 md:flex-row md:space-y-0 px-10 md:space-x-8 items-center">
            <li>
              <Link to="/" className="">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" className="">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="">
                Contact
              </Link>
            </li>
            <li className="hidden md:block">
              <NightModeSwitcher />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export { Navbar };
