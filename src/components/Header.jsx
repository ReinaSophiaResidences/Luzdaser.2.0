import React from "react";
import Logo from "../assets/Logo_negativ.png";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
// import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="flex w-full justify-between items-center h-28 px-4 absolute left-0 right-0 z-10 lg:max-w-6xl mx-auto">
      <div>
        <a href="/" className="block w-44 h-auto no-underline">
          <img src={Logo} alt="Logo Luzdaser" />
        </a>
      </div>
      {/*desktop navbar */}
      <Nav />
      <button className="hidden lg:flex bg-teal-500 text-white px-5 py-1 rounded-md font-serif font-medium hover:scale-105 transition ease-in-out hover:font-semibold">
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
