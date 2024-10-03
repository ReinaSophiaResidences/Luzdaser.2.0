import React from "react";
import Logo from "../assets/Logo_negativ.png";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
// import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="flex w-full justify-between items-center h-28 px-4 absolute left-0 right-0 z-10 lg:max-w-7xl mx-auto">
      <div>
        <a href="/" className="block w-36 h-auto no-underline">
          <img src={Logo} alt="Logo Luzdaser" />
        </a>
      </div>
      {/*desktop navbar */}
      <Nav />
      <button className="hidden lg:flex bg-blue-900 text-white px-4 rounded-md font-bold hover:scale-105 transition ease-in-out ">
        Contactanos
      </button>
      {/* Mobile navbar */}
      <div className="lg:hidden">
        <MobileNav/>
      </div>
    </header>
  );
};

export default Header;
