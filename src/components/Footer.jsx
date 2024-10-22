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
    <footer className="relative w-full min-h-96 flex flex-col lg:justify-between text-white bg-[url('assets/footerbg.webp')] bg-cover bg-center z-0">
      <div className="w-full h-full absolute top-0 left-0 bg-gray-800/60 z-10"/>
      <div className="flex justify-center max-w-6xl w-full mx-auto mt-4 z-20">
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
      <div className="w-full mx-auto text-left border-t-[1px] z-20">
        <p className="text-center w-full">Derechos Reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
