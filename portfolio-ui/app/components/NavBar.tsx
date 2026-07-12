import { useState } from "react";
import { FaLaptopCode, FaTimes, FaBars} from "react-icons/fa";
import { NavLink } from "react-router";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const active = 'text-blue-400 font-semibold';
    const base = 'transition hover:text-blue-400';

    return (
        <nav className="bg-gray-800 border-b border-gray-700 shadow-md sticky top-0 z-50 text-white ">
            <div className="flex justify-between items-center px-6 py-4">
                <NavLink to='/' className="flex items-center gap-2 text-lg font-bold text-blue-300">
                    <FaLaptopCode className="text-blue-400 text-xl" />
                    <span>Portfolio</span>
                </NavLink>
                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-6">
                    <div className="space-x-4 text-sm text-gray-300">
                        <NavLink className = {({isActive}) => isActive ? active : base} to='/'> Home </NavLink>
                        <NavLink className = {({isActive}) => isActive ? active : base} to='/about'> About </NavLink>
                        <NavLink className = {({isActive}) => isActive ? active : base} to='/projects'> Projects </NavLink>
                        <NavLink className = {({isActive}) => isActive ? active : base} to='/blog'> Blog </NavLink>
                        <NavLink className = {({isActive}) => isActive ? active : base} to='/contact'> Contact </NavLink>
                    </div>
                </div>
                {/* Mobile nav */}
                <div className="md:hidden flex items-center gap-4">
                    <button className="text-blue-400 text-xl cursor-pointer" title='Menu' onClick={()=>setMenuOpen(!menuOpen)}> 
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            {
                menuOpen && (
                    <div className="bg-gray-800 border-t border-gray-700 px-6 py-4 space-x-2 space-y-4 text-center md:hidden absolute w-full left-0 right-0 z-10">
                        <NavLink className = {({isActive}) => isActive ? active : base} to='/' onClick={()=>setMenuOpen(false)} > Home </NavLink>
                        <NavLink className = {({isActive}) => isActive ? active : base} to='/about' onClick={()=>setMenuOpen(false)}> About </NavLink>
                        <NavLink className = {({isActive}) => isActive ? active : base} to='/projects' onClick={()=>setMenuOpen(false)}> Projects </NavLink>
                        <NavLink className = {({isActive}) => isActive ? active : base} to='/blog' onClick={()=>setMenuOpen(false)}> Blog </NavLink>
                        <NavLink className = {({isActive}) => isActive ? active : base} to='/contact' onClick={()=>setMenuOpen(false)}> Contact </NavLink>
                    </div>
                )
            }
        </nav>
    )
}

export default NavBar;