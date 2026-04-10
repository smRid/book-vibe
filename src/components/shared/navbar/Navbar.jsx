import React, { useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import { useEffect } from 'react';
import FloatingDropdown from '../../ui/FloatingDropdown';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navbarRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const desktopNavItemClass = ({ isActive }) =>
        `rounded-lg border px-4 py-2 font-medium transition-colors ${
            isActive
                ? "border-[#23BE0A] text-[#23BE0A] bg-transparent"
                : "border-transparent text-[#131313] hover:text-[#23BE0A] hover:border-[#23BE0A] bg-transparent"
        }`;

    const mobileNavItemClass = ({ isActive }) =>
        `block rounded-xl border px-4 py-3 text-base font-medium transition-colors ${
            isActive
                ? "border-[#23BE0A] text-[#23BE0A] bg-white"
                : "border-transparent text-[#131313] hover:text-[#23BE0A] hover:border-[#23BE0A] bg-white"
        }`;

    const navLinks = (
        <>
            <li>
                <NavLink to={"/"} end className={desktopNavItemClass}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/books"} className={desktopNavItemClass}>Listed Books</NavLink>
            </li>
            <li>
                <NavLink to={"/pages-to-read"} className={desktopNavItemClass}>Pages to Read</NavLink>
            </li>
        </>
    );

    const mobileNavLinks = (
        <>
            <li>
                <NavLink to={"/"} end className={mobileNavItemClass} onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/books"} className={mobileNavItemClass} onClick={() => setIsMobileMenuOpen(false)}>Listed Books</NavLink>
            </li>
            <li>
                <NavLink to={"/pages-to-read"} className={mobileNavItemClass} onClick={() => setIsMobileMenuOpen(false)}>Pages to Read</NavLink>
            </li>
        </>
    );

    return (
        <div className='container mx-auto mt-4 mb-8 px-4 sm:px-5 lg:mt-5 lg:mb-12 lg:px-0'>
            <div
                ref={navbarRef}
                className="rounded-2xl bg-white/95 shadow-sm backdrop-blur-sm lg:bg-transparent lg:shadow-none lg:backdrop-blur-none"
            >
                <div className="navbar min-h-[72px] px-3 sm:px-5 lg:px-0">
                    <div className="navbar-start gap-3">
                        <button
                            type="button"
                            className="btn btn-ghost btn-circle lg:hidden"
                            aria-label="Toggle navigation menu"
                            aria-expanded={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((open) => !open)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </button>
                        <NavLink to="/" className="whitespace-nowrap text-xl font-bold leading-none sm:text-2xl lg:text-3xl">Book Vibe</NavLink>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal items-center gap-4 px-1 text-lg">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button className="btn btn-sm bg-[#59C6D2] px-4 text-sm font-semibold text-white hover:border-[#59C6D2] hover:bg-transparent hover:text-[#59C6D2] sm:btn-md sm:px-5 sm:text-base lg:hidden">
                            Sign Up
                        </button>
                        <button className="hidden lg:inline-flex btn bg-[#59C6D2] text-white text-lg font-semibold px-5 py-7 rounded-lg hover:bg-transparent hover:text-[#59C6D2] hover:border hover:border-[#59C6D2]">
                            Sign Up
                        </button>
                    </div>
                </div>
                <FloatingDropdown
                    anchorRef={navbarRef}
                    open={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                    className="lg:hidden"
                >
                    <div className="rounded-2xl border border-[#131313]/10 bg-white p-3 shadow-2xl">
                        <ul className="flex flex-col gap-2">
                            {mobileNavLinks}
                        </ul>
                    </div>
                </FloatingDropdown>
            </div>
        </div>
    );
};

export default Navbar;
