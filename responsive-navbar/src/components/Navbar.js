import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'

const Navbar = () => {
    const [showNavbar, setShowNavbar] =useState(false)

    const handleShowNavbar= () => {
        setShowNavbar(!showNavbar);
    }

    return (
        <nav className="navbar relative h-[60px] bg-[#fef7e5]">
            <div className="container mw-[1100px] my-0 mx-auto py-0 px-6 flex justify-between items-center h-[100%]">

                <div>
                    <h3 className="logo font-['Oleo_Script'] text-3xl text-slate-900">Logo</h3>
                </div>

                <div className='menu-icon md:hidden sm:block cursor-pointer' onClick={handleShowNavbar}>
                    <i class="fa-solid fa-bars text-slate-900 text-xl"></i>
                </div>

                <div className={`nav-elements ${showNavbar && 'active'}`}>
                    <ul className='flex gap-10 text-sm text-[#7b6651] '>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/blog'>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to='/projects'>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;