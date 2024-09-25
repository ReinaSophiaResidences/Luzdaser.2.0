import React from "react";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Sobre Nosotros",
    path: "/we",
  },
  {
    name: "Proyectos",
    path: "/proyects",
  },
  {
    name: "Servicios",
    path: "/services",
  },
];

const Nav = () => {
  return (
    <nav className="hidden lg:flex ">
      <ul className="flex gap-10 font-medium list-none">
        {links.map((link, index) => {
          return (
            <li key={index} className="">
              <a href={link.path} className="">{link.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
