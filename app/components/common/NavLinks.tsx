"use client";
import Link from "next/link";
import { links } from "../../data";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const currentPath = usePathname();
  return (
    <>
      {links.map((link) => {
        const { id, href, label } = link;
        return (
          <li
            className={
              href === currentPath
                ? "capitalize bg-blue-700 rounded-lg hover:bg-blue-500 mx-2"
                : "capitalize hover:bg-blue-500 hover:rounded-lg mx-2"
            }
            key={id}
          >
            <Link href={href}>{label}</Link>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;
