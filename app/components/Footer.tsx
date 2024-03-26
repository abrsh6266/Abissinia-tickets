"use client";
import Link from "next/link";
import { links, socials } from "../data";

const Footer = () => {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {links.map((link, index) => {
            return (
              <div key={index} className="px-5 py-2">
                <Link
                  href={link.href}
                  className="text-base leading-6 text-gray-500 hover:text-gray-900"
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
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{name}</span>
                <p
                  className="w-8 h-8"
                >
                  {icon}
                </p>
              </Link>
            );
          })}
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © {new Date().getFullYear()} Abissinia Tickets, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
