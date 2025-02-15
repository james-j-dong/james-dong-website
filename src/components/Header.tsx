"use client";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-tan-500 text-brown-500">
        <nav className="container mx-auto p-4 flex justify-between items-center">
            <div className="text-lg font-bold">
                <Link href="/" className="hover:text-brown-700 px-3 py-3">
                    James Dong
                </Link>
            </div>

            {/* Hamburger Menu Button (Hidden on larger screens) */}
            <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>

            {/* Navigation Menu */}
            <ul
            className={`${
                menuOpen ? "block" : "hidden"
            } absolute top-16 left-0 w-full bg-tan-500 p-4 md:flex md:relative md:top-0 md:w-auto md:p-0 md:space-x-4`}
            >
                <li><Link href="/" className="hover:text-brown-600 px-3 py-3 text-lg block">Home</Link></li>
                <li><Link href="/about" className="hover:text-brown-700 px-3 py-3 text-lg block">About</Link></li>
                <li><Link href="/portfolio" className="hover:text-brown-700 px-3 py-3 text-lg block">Portfolio</Link></li>
                <li><Link href="/contact" className="hover:text-brown-700 px-3 py-3 text-lg block">Contact</Link></li>
                <li><Link href="https://github.com/james-j-dong" className="hover:text-brown-700 px-3 py-3 text-lg block" target="_blank">Github</Link></li>
                <li><Link href="https://www.linkedin.com/in/james-dong-1024/" className="hover:text-deepBlue-600 px-3 py-3 text-lg block font-bold" target="_blank">Linkedin</Link></li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;
