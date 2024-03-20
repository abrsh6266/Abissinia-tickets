"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "/public/images/logo.png";
import Image from "next/image";

const Navbar = () => {
  const currentPath = usePathname();
  console.log(new Date().getFullYear());
  const links = [
    { label: "Home", href: "/" },
    { label: "Coming soon", href: "/movies" },
    { label: "Food and drinks", href: "#" },
    { label: "Tickets", href: "#" },
    { label: "Cinemas", href: "#" },
    { label: "Schedule", href: "#" },
  ];
  return (
    <div>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <a className="text-3xl font-bold leading-none" href="#">
         
            <Image
              style={{
                maxWidth: "5rem",
                height: "5rem",
              }}
              src={logo}
              alt="logo"
            />
        </a>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-blue-600 p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  className={`${
                    link.href === currentPath
                      ? "text-blue-500 text-2xl"
                      : "text-gray-400"
                  } text-lg hover:text-gray-500 transition duration-300 ease-in-out`}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <a
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
          href="/login"
        >
          Sign In
        </a>
        <a
          className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
          href="/signup"
        >
          Sign up
        </a>
      </nav>
      <div className="navbar-menu relative z-50 hidden">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        
      </div>
    </div>
  );
};

export default Navbar;