import Link from "next/link";

import { links } from "../data";

  
  const NavLinks = () => {
    return (
      <>
        {links.map((link) => {
          const { id, href, label } = link;
          return (
            <li key={id}>
              <Link className='capitalize' href={href}>
                {label}
              </Link>
            </li>
          );
        })}
      </>
    );
  };
  export default NavLinks;