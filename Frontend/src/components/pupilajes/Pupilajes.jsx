import SearchBar from "../searchBar/SearchBar";
import FilterMenu from "../filterMenu/FilterMenu";
import PupilajeAdd from "./pupilajeAdd/PupilajeAdd";
import { Link, NavLink } from "react-router-dom";
import CreateAddPupilajes from "./CreateAddPupilajes/CreateAddPupilajes";


function Pupilajes() {
   return (
      <div>
         <nav className="flex justify-center space-x-4 ">
            <SearchBar />
            <FilterMenu />
            <Link to="/CreateAddPupilajes">
       <button
          className=" mb-5 shadow appearance-none border rounded w-auto py-4 px-3 text-gray-100 bg-[#2F4D55] hover:bg-[#1F3A44]">
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