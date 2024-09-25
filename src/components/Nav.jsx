import React from "react";

const links = [
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
  {
    name: "Galería",
    path: "/galery",
  },
];

const Nav = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex gap-8 font-medium text-white text-lg list-none">
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
