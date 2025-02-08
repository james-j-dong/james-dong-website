"use client";
import Link from 'next/link';
import { useState } from 'react';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-tan-500 text-brown-500">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/" className="hover:text-brown-700 px-3 py-3 flex">
            James Dong
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-brown-600 px-3 py-3 flex text-lg font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-brown-700 px-3 py-3 flex text-lg">
              About
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-brown-700 px-3 py-3 flex text-lg">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-brown-700 px-3 py-3 flex text-lg">
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/jamesjd210"
              className="hover:text-brown-700 px-3 py-3 flex text-lg"
              target="_blank"
            >
              Github
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/james-dong-1024/"
              className="hover:text-deepBlue-600 px-3 py-3 flex text-lg font-bold"
              target="_blank"
            >
              Linkedin
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
