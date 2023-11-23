import SearchBar from "../searchBar/SearchBar";
import FilterMenu from "../filterMenu/FilterMenu";
import { Link } from "react-router-dom";

function Pupilajes() {
    return (
    <nav className="flex justify-center space-x-4 ">
       <SearchBar/>
       <FilterMenu/>
       <Link>
       <button
          className=" mb-5 shadow appearance-none border rounded w-auto py-4 px-3 text-gray-100 bg-[#2F4D55] hover:bg-[#1F3A44]">
          Publicar Anuncio
        </button>
       </Link>
    </nav>
    );
}

export default Pupilajes;