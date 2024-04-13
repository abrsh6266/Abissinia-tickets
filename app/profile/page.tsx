import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import PublicProfile from "../components/profileComponents/PublicProfile.tsx/PublicProfile";
import Aside from "../components/profileComponents/Aside";

const Profile = () => {
  return (
    <div className=" w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row ">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost md:hidden">
          <GiHamburgerMenu className="text-4xl" />
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
        >
          <Aside />
        </ul>
      </div>
      <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
        <Aside />
      </aside>
      <PublicProfile />
    </div>
  );
};

export default Profile;
