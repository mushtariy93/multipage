import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { FaArrowRightLong } from "react-icons/fa6";


const Header = () => {
  return (
    <header className="h-20 bg-[#232536]">
      <nav className="container flex justify-between items-center h-full">
        <div className=" h-full flex col justify-center items-center">
          <img src={logo} alt="logo" />
        </div>
        <ul className="text-slate-300 flex gap-8 items-center justify-center h-full">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/service"}>Service</NavLink>
          <NavLink to={"/company"}>Company</NavLink>
          <NavLink to={"/career"}>Career</NavLink>
          <NavLink to={"/blog"}>Blog</NavLink>
          <NavLink to={"/contact-us"}>Contact us</NavLink>
          <div className="relative mr-8">
            <FaArrowRightLong className="absolute top-[5px] left-[104px]" />
            <NavLink to={"/clone-project"}>Clone project </NavLink>
          </div>

          <NavLink
            className={
              "py-2 px-8 rounded-lg bg-green-700 shadow-lg hover:opacity-80"
            }
            to={"/login"}
          >
            Login{" "}
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
