import { HeartOutlined, MenuOutlined } from "@ant-design/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./style.css";
const Header = () => {
  return (
    <div className="container flex items-center justify-between h-[100px]">
      <div className="h-[80px] max-md:h-[70px]">
        <img src={logo} alt="Img" className="w-full h-full" />
      </div>
      <ul className="flex items-center gap-3 text-[16px] max-sm:hidden">
        <li>
          <NavLink className={"navActive font-medium duration-300"} to={"/"}>
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink
            className={"navActive font-medium duration-300"}
            to={"/comments"}
          >
            Comments
          </NavLink>
        </li>
        <li>
          <NavLink
            className={"navActive font-medium duration-300"}
            to={"/albums"}
          >
            Albums
          </NavLink>
        </li>
        <li>
          <NavLink
            className={"navActive font-medium duration-300"}
            to={"/todos"}
          >
            Todos
          </NavLink>
        </li>
        <li>
          <NavLink
            className={"navActive font-medium duration-300"}
            to={"/users"}
          >
            Users
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-10 text-[22px]">
        <NavLink
          className={"navActive font-medium duration-300"}
          to={"/wishlist"}
        >
          <HeartOutlined />
        </NavLink>

        <div className="hidden max-sm:block text-[252x] cursor-pointer duration-300 hover:text-gray-600">
          <MenuOutlined />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
