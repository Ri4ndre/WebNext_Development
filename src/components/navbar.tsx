import React, { useState } from "react";
import "@fontsource/ubuntu";
import "@fontsource-variable/cabin";
import "@fontsource/poppins";
import "../styles/global.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setButtonClicked(!buttonClicked);
    };

    return (
        <nav className="text-content dark:text-white p-4 dark:bg-black/40 bg-white/40 border-b-2 backdrop-filter
         backdrop-blur-md border-content border-opacity-10 dark:border-opacity-80 shadow sticky top-0
         left-0 w-full">
            <div className="container mx-auto max-w-screen-xl flex items-center justify-between">
                <a className="logo-svg flex items-center" href="/">
                    <img className="logo w-7" src="/logo.svg" alt="Logo" />
                    <div className="logo-text ml-2 font-ubuntu">
                        <span className="font-bold text-xl">Web</span>
                        <span className="text-xl font-light">Next</span>
                    </div>
                </a>

                <div className="flex justify-between items-center">
                    {/* Responsive menu */}
                    <ul className={`lg:flex space-x-24 font-sans-serif font-semibold text-sm ${menuOpen ? "block" : "hidden"}`}>
                        <li>
                            <a href="/">
                                <div className="flex items-center">
                                    Solutions
                                    <svg
                                        className="w-2 h-2 text-gray-800 ml-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="3"
                                            d="m1 1 4 4 4-4"
                                        />
                                    </svg>
                                </div>
                            </a>
                        </li>
                        <li><a href="/about">Pricing</a></li>
                        <li>
                            <a href="/contact">
                                <div className="flex items-center">
                                    Support
                                    <svg
                                        className="w-2 h-2 text-gray-800 ml-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="3"
                                            d="m1 1 4 4 4-4"
                                        />
                                    </svg>
                                </div>
                            </a>
                        </li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>

                    <button aria-label="Colour Toggler Button" className="ml-24 p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
