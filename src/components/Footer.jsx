import React from "react";
import mobileLogo from "../assets/Logo_negativ.png";
import { HashLink as Link } from "react-router-hash-link";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

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

const Footer = () => {
  return (
    <footer className="relative w-full min-h-96 flex flex-col lg:justify-between text-white bg-[url('assets/footerbg.webp')] bg-cover bg-center z-0">
      <div className="w-full h-full absolute top-0 left-0 bg-gray-800/60 z-10" />
      <div className="flex justify-center max-w-6xl w-full mx-auto mt-4 z-20">
        <div className="w-1/2">
          <img src={mobileLogo} alt="mobileLogo" className="w-48" />
        </div>
        <div className="lg:flex w-1/2 justify-between">
          <div className="">
            <h2 className="text-2xl font-semibold">Menu</h2>
            <ul className="gap-8 list-none">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    smooth
                    to={link.path}
                    className="font-serif font-medium text-[white] text-lg"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* <ul>
              {links.map((link, index) => {
                return (
                  <li key={index}>
                    <a href={link.path} className="text-lg">
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul> */}
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Legal</h2>
            <ul>
              <li>
                <a href="/" className="font-serif font-medium">
                  Políticas de Privacidad
                </a>
              </li>
              <li>
                <a href="/" className="font-serif font-medium">
                  Terminos y condiciones
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4 pb-5">
            <FaInstagram size={30} />
            <FaWhatsapp size={30} />
          </div>
        </div>
      </div>
      <div className="w-full mx-auto text-left border-t-[1px] z-20">
        <p className="text-center w-full">Derechos Reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
