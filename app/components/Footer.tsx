"use client";
import Link from "next/link";
import { links, socials } from "../data";
import { useGlobalContext } from "../context";
import { usePathname } from "next/navigation";

const Footer = () => {
  const currentPath = usePathname();
  return (
    <>
      <section className="bg-gradient-to-t from-gray-500 via-gray-700 to-black mt-20">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            {links.map((link, index) => {
              return (
                <div key={index} className="px-5 py-2">
                  <Link
                    href={link.href}
                    className="text-base leading-6 text-gray-300 hover:text-blue-500"
                  >
                    {link.label}
                  </Link>
                </div>
              );
            })}
          </nav>
          <div className="flex justify-center mt-8 space-x-6">
            {socials.map((social) => {
              const { url, id, name, icon } = social;
              return (
                <Link
                  key={id}
                  href={url}
                  className="text-gray-100 hover:text-gray-200"
                >
                  <span className="sr-only">{name}</span>
                  <p className="w-8 h-8">{icon}</p>
                </Link>
              );
            })}
          </div>
          <p className="mt-8 text-base leading-6 text-center text-gray-100">
            © {new Date().getFullYear()} Abissinia Tickets, Inc. All rights
            reserved.
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
