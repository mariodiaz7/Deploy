import { NavLink } from 'react-router-dom';

function Blocks() {
    return (
        <nav>
            <ul className="flex space-x-7 p-4">
                <li>
                    <NavLink to="/Pupilajes" className="hover:underline" >Pupilajes</NavLink>
                </li>
                <li>
                    <NavLink to="/Marketplace" className="hover:underline" >Marketplace</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Blocks;