import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul className="flex space-x-7 p-4">
                <li>
                    <NavLink to="/Signin" className="hover:underline" >Sign In</NavLink>
                </li>
                <li>
                    <NavLink to="/login" className="hover:underline" >Log In</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;