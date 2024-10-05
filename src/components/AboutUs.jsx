import React from "react";
import aboutUsPhoto from "../assets/aboutUs.avif";

const AboutUs = () => {
  return (
    <div className="w-full h-full mx-auto bg-gray-200/40 my-20">
      <div className="flex flex-col lg:flex-row-reverse max-w-6xl mx-auto justify-center items-center px-5 lg:px-2">
        <div className="lg:w-1/2">
          <img src={aboutUsPhoto} alt="aboutUs" className="max-h-[400px]"/>
        </div>
        <div className="lg:w-1/2 space-y-5 mb-5">
          <h2 className="font-serif font-bold text-4xl text-center lg:text-left pt-4 lg:pt-0">Sobre nosotros</h2>
          <p className="leading-snug lg:text-lg lg:pr-2">
            A través de Eco Blog Real Estate & Construction VBA, creamos viviendas que combinan calidad, belleza y diseño innovador. Nuestro proyeco Reina Sofha en Paradera es un testimonio de nuestra visión: Lineas limpias, minimalismo elegante y una infraestructura de vanguardia
          </p>
          <p className="leading-snug lg:text-lg lg:pr-2">JBSS ECO Reac Estate te acompaña en la busqueda de tu hogar ideal en Aruba. Ya seas local o extrajero, nuestras oferta inmobiliaria se adapta a tus necesidades y estilo de vida.</p>
          <p className="leading-snug lg:text-lg lg:pr-2">Somos el referente que impulsa el desarrollo de Aruba, brindando oportunidades de vivienda excepcionales para todos.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
