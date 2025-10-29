import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    const linkClasses = ({ isActive }) =>
        isActive
            ? "text-[#9F62F2] font-semibold underline underline-offset-4 mr-8"
            : "text-gray-200 hover:text-[#9F62F2] transition mr-8";

    const links = (
        <>
            <li><NavLink to="/" className={linkClasses}>Home</NavLink></li>
            <li><NavLink to="/apps" className={linkClasses}>Apps</NavLink></li>
            <li><NavLink to="/installation" className={linkClasses}>Installation</NavLink></li>
        </>
    );
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-4 font-bold text-[#9F62F2]"><img className='w-[40px]' src={logo} alt="" />HERO.IO</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-[#9F62F2] text-white"><FaGithub />Contribute</a>
            </div>
        </div>
    );
};

export default Navbar;