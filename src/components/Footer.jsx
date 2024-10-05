import React from "react";
import mobileLogo from "../assets/Logo_negativ.png";

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
    path: "/gallery",
  },
];

const Footer = () => {
  return (
    <footer className="w-full min-h-80 bg-gradient-to-b bg-black flex flex-col lg:justify-between text-white">
      <div className="flex justify-center max-w-6xl w-full mx-auto mt-4">
        <div className="w-1/2">
          <img src={mobileLogo} alt="mobileLogo" className="w-32"/>
        </div>
        <div className="lg:flex w-1/2 justify-between">
          <div className="">
            <h2 className="text-2xl font-semibold">Menu</h2>
            <ul>
              {links.map((link, index) => {
                return (
                  <li key={index}>
                    <a href={link.path} className="">
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Legal</h2>
            <ul>
              <li>
                <a href="/" className="">
                  Políticas de Privacidad
                </a>
              </li>
              <li>
                <a href="/" className="">
                  Terminos y condiciones
                </a>
              </li>
            </ul>
          </div>
          <div>rss</div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto text-left">
        <p className="text-right w-full">Derechos Reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
