import React from "react";
import Logo from "./icons_assets/Logo .svg";
const Nav = () => {
  return (
    <nav>
      <img src={Logo} alt="" />
      <ul>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Features">Menu</a>
        </li>
        <li>
          <a href="#Contact">Reservation</a>
        </li>
        <li>
          <a href="#Contact">Order Online</a>
        </li>
        <li>
          <a href="#Contact">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
