import React from "react";
import { BsFillHouseGearFill } from "react-icons/bs";
import { HiMiniHomeModern } from "react-icons/hi2";
import { GiFamilyHouse } from "react-icons/gi";
import { FaSwimmingPool } from "react-icons/fa";

const Detalles = () => {
  return (
    <section className="w-full my-16 lg:my-28">
      <div className="max-w-6xl mx-auto text-center space-y-10 font-serif">
        <p className="font-semibold text-lg">Acerca de nuestros proyectos</p>
        <div className="flex justify-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-center lg:text-left my-5 border-secondary border-b-[2px] pr-2 w-fit">
            <strong>Descripción</strong>
          </h2>
          <h2 className="font-serif text-3xl lg:text-5xl text-center lg:text-left my-5 border-primary/20 border-b-[2px] pl-2 w-fit">
            de las Propiedades
          </h2>
        </div>
        <div className="lg:flex gap-10 space-y-8">
            <div className="flex flex-col items-center justify-center mx-auto lg:w-1/4">
                <BsFillHouseGearFill size={40} color="#F5831F"/>
                <p>Amplios espacios</p>
            </div>
            <div className="flex flex-col items-center justify-center mx-auto lg:w-1/4">
                <HiMiniHomeModern size={40} color="#F5831F"/>
                <p>Casas Unifamiliares y Multifamiliares.</p>
            </div>
            <div className="flex flex-col items-center justify-center mx-auto lg:w-1/4">
                <GiFamilyHouse size={40} color="#F5831F"/>
                <p>Casas personalizadas y estandar</p>
            </div>
            <div className="flex flex-col items-center justify-center mx-auto lg:w-1/4">
                <FaSwimmingPool size={40} color="#F5831F"/>
                <p>Accesorios de cocina, pergola, piscina y más</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Detalles;
