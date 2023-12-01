import SearchBar from "../searchBar/SearchBar";
import FilterMenu from "../filterMenu/FilterMenu";
import PupilajeAdd from "./pupilajeAdd/PupilajeAdd";
import { Link, NavLink } from "react-router-dom";

function Pupilajes() {
   return (
      <div>
         <nav className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center lg:justify-between space-y-4 lg:space-y-2 lg:space-x-4 p-4 lg:p-2">
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
               <SearchBar />
               <FilterMenu />
            </div>
            <Link to="/CreateAddPupilajes">
               <button className="mb-5 w-full lg:w-auto shadow appearance-none border rounded py-6 px-8 text-gray-100 bg-[#2F4D55] hover:bg-[#1F3A44] focus:outline-none focus:shadow-outline">
                  Publicar Anuncio
               </button>
            </Link>
         </nav>

         <div className="flex flex-col">
            <div className="flex justify-between px-10">

               <NavLink to="/pupilajeAddInfo">
                  <PupilajeAdd />
               </NavLink>
            </div>
         </div>
      </div>
   );
}

export default Pupilajes;

