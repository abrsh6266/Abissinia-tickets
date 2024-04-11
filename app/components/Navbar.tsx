"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname,useRouter } from "next/navigation";
import logo from "/public/images/logo.png";
import Image from "next/image";
import { FaBarsStaggered } from "react-icons/fa6";
import { useGlobalContext } from "../context";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const { loading } = useGlobalContext();
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={loading ? "h-44" : ""}>
      {!(loading && "/" === currentPath) && (
        <div className="navbar align-element">
          <div className="navbar-start">
            {/* Title */}
            <Link
              href="/"
              className="hidden btn mask mask-hexagon-2 bg-gray-200 hover:bg-gray-400  lg:flex  h-full rounded-full text-3xl items-center "
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
            <ul className="menu menu-horizontal ">
              <NavLinks />
            </ul>
          </div>
          <div className="navbar-end">
            {/* THEME ICONS */}
            {/* CART LINK*/}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
