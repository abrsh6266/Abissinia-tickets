"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import logo from "/public/images/logo2.png";
import Image from "next/image";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoNotificationsSharp } from "react-icons/io5";
import { useGlobalContext } from "../context";
import NavLinks from "./NavLinks";
import { BiHeart } from "react-icons/bi";
const Navbar = () => {
  const { setShowNotification } = useGlobalContext();
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* Title */}
          <Link
            href="/"
            className="hidden btn mask mask-hexagon-2   lg:flex  h-full rounded-full text-3xl items-center "
          >
            <Image
              style={{
                maxWidth: "4rem",
                height: "4rem",
              }}
              src={logo}
              alt="logo"
            />
          </Link>
          {/* DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end space-x-8">
          <Link className="hover:text-gray-200" href="/bookmarks">
            <BiHeart className="text-2xl" />
          </Link>
          <button
            onClick={() => setShowNotification(true)}
            className="flex items-center hover:text-gray-200"
          >
            <IoNotificationsSharp className="text-2xl" />
            <span className="flex absolute -mt-5 ml-5">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
          </button>
          <Link href="/profile">
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
