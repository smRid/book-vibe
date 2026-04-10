import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

    const links = (
        <>
            <li>
                <NavLink to={"/"} className={({ isActive }) => isActive ? "text-[#23BE0A] border border-[#23BE0A] bg-transparent" : "hover:text-[#23BE0A] hover:border hover:border-[#23BE0A] hover:bg-transparent"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/books"} className={({ isActive }) => isActive ? "text-[#23BE0A] border border-[#23BE0A] bg-transparent" : "hover:text-[#23BE0A] hover:border hover:border-[#23BE0A] hover:bg-transparent"}>Listed Books</NavLink>
            </li>
            <li>
                <NavLink to={"/pages-to-read"} className={({ isActive }) => isActive ? "text-[#23BE0A] border border-[#23BE0A] bg-transparent" : "hover:text-[#23BE0A] hover:border hover:border-[#23BE0A] hover:bg-transparent"}>Pages to Read</NavLink>
            </li>
            <li>
                <NavLink to={""} className={"block lg:hidden"}>Sign In</NavLink>
            </li>
            <li>
                <NavLink to={""} className={"block lg:hidden"}>Sign Up</NavLink>
            </li>
        </>
    );

    return (
        <div className='container mx-auto mt-5 mb-12'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg space-y-2">
                            {links}
                        </ul>
                    </div>
                    <NavLink to="/" className="text-2xl lg:text-3xl font-bold">Book Vibe</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg space-x-5">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-4 hidden lg:flex">
                    <a className="btn bg-[#23BE0A] text-white text-lg font-semibold px-5 py-7 rounded-lg hover:bg-transparent hover:text-[#23BE0A] hover:border hover:border-[#23BE0A]">Sign In</a>
                    <a className="btn bg-[#59C6D2] text-white text-lg font-semibold px-5 py-7 rounded-lg hover:bg-transparent hover:text-[#59C6D2] hover:border hover:border-[#59C6D2]">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;