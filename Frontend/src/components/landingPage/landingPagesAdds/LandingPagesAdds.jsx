import { NavLink } from "react-router-dom";
import Add from "../../add/Add";

function LandingPageAdds() {
    return (
        <div className="flex flex-col">
            <h3 className="text-lg mb-2">Ultimos anuncios</h3>
           <div className="flex justify-between px-10">

           <NavLink to="/AddInfo">
            <Add/>
           </NavLink>
           

           <NavLink to="/AddInfo">
            <Add/>
           </NavLink>

           <NavLink to="/AddInfo">
            <Add/>
           </NavLink>

           <NavLink to="/AddInfo">
            <Add/>
           </NavLink>
           </div>
        </div>
    );
}

export default LandingPageAdds;