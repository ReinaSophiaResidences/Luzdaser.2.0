import React from "react";
import Logo from "../assets/Luzdazer.png";
import { FaBars, FaTimes } from "react-icons/fa";
import Nav from "./Nav";
import video from "../assets/headerAruba.mp4";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-28 mx-auto">
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      /> */}
      <div>
        <a href="/" className="block w-32 h-auto no-underline">
          <img src={Logo} alt="Logo Luzdaser"/>
        </a>
      </div>
      <Nav />
      <div>
        <FaBars />
      </div>
      {/* <div className="navbar flex justify-between items-center max-w-screen-xl h-full py-0 px-4">
        <a href="" className="logo w-36 h-auto no-underline">
          <img src={Logo} alt="Logo Luzdaser" />
        </a>
        <div className="hamburger hidden">
          <FaBars />
        </div>
        <Nav />
      </div> */}
    </header>
  );
};

export default Header;
