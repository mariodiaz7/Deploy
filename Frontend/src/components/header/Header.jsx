import adssLogo from "../../img/ADDS.png";
import Navigation from "./navigation/Navigation";
import Blocks from "./navigation/blocks/Blocks";
import { NavLink } from "react-router-dom";

function Header() {
    return (
      <div className=" bg-[#F4CFCA] mb-10">
        <div className="flex items-center justify-between px-9">
          <NavLink to="/">
            <img
              alt="ADSS"
              src={adssLogo}
              className="w-20 h-auto"
            />
          </NavLink>
          <Blocks/>
          <Navigation/>
        </div>
      </div>
    );
  }
  

export default Header;