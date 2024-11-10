import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const links = [
  {
    name: "Sobre Nosotros",
    path: "#we", // Cambiado a hash para desplazamiento interno
  },
  {
    name: "Servicios",
    path: "#services",
  },
  {
    name: "Proyectos",
    path: "#proyects",
  },
  {
    name: "Galería",
    path: "#gallery",
  },
];

const Nav = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex gap-8 list-none">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              smooth to={link.path}
              className="font-serif font-medium text-[white] text-lg"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
