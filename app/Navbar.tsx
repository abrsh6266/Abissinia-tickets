"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "/public/images/logo.png";
import Image from "next/image";
import { links } from "./data";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Navbar = () => {
  const { loading } = useGlobalContext();
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={loading ? " h-44" : ""}>
      {!loading && (
        <nav className="relative px-4 py-16 flex justify-between items-center bg-gradient-to-b from-gray-500 via-gray-700 to-black transition duration-300 ease-in-out">
          <Link className="font-bold leading-none" href="/">
            <Image
              style={{
                maxWidth: "4rem",
                height: "4rem",
              }}
              src={logo}
              alt="logo"
            />
          </Link>
          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6`}
          >
            {links.map((link, index) => {
              return (
                <li key={index} className={isMenuOpen ? "mt-6 hover:text-blue-500 text-white" : "hover:text-blue-500 text-white"}>
                  <Link
                    className={`${
                      link.href === currentPath
                        ? "text-blue-500  rounded-xl md:text-2xl text-2xl"
                        : "md:text-xl text-xl"
                    } duration-200 cursor-pointer`}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="grid grid-cols-3 lg:flex">
          <a
            className={
              isMenuOpen
                ? "hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-white hover:bg-gray-600 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
                : "lg:inline-block lg:ml-auto lg:mr-3 mr-2 py-2 px-6 bg-white hover:bg-gray-600 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
            }
            href="/login"
          >
            Sign In
          </a>
          <a
            className={
              isMenuOpen
                ? "hidden  py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
                : "py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
            }
            href="/signup"
          >
            Sign up
          </a>
          <div className="lg:hidden">
            <button
              className="text-2xl navbar-burger flex items-center text-[#ffffff] p-3"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FaTimes />
              ) : (
                <svg
                  className=" block h-4 w-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              )}
            </button>
          </div>
          </div>
          
        </nav>
      )}
    </div>
  );
};

export default Navbar;
