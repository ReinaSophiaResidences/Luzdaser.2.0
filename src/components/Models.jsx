import React from "react";
// import Luca from "../assets/lucamodel1.avif";
import Oliver from "../assets/olivermodel1.avif";

const Models = () => {
  return (
    <section className="relative w-full h-full mx-auto bg-[url('./assets/pergola.webp')] bg-center bg-cover mb-10 z-0">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800/80 z-10"/>
      <div className="relative max-w-6xl lg:flex lg:mx-auto mx-5 py-20 z-20">
        <div className="w-full lg:w-1/2 h-[400px]">
          <img
            src={Oliver}
            alt="Model House"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:ml-10 lg:mr-5 h-full space-y-5 text-white font-serif">
          <div className="flex">
            <h2 className="font-serif text-4xl lg:text-5xl text-center lg:text-left my-5 border-secondary border-b-[2px] pr-2 w-fit">
              <strong>Oliver</strong>
            </h2>
            <h2 className="font-serif text-4xl lg:text-5xl text-center lg:text-left my-5 border-white/70 border-b-[2px] pl-2 w-fit">
              Model House
            </h2>
          </div>
          <div className="leading-normal">
            <p>
              En el idílico entorno tropical de Aruba, se encuentra esta
              magnífica casa que redefine el concepto de lujo y confort.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 leading-tight">
            <div className="flex space-x-4 items-start">
              <p className="text-2xl font-bold text-secondary">1.</p>
              <p>A pocos minutos de las deslumbrantes playas.</p>
            </div>

            <div className="flex space-x-4 items-start">
              <p className="text-2xl font-bold text-secondary">2.</p>
              <p>
                Ideal para disfrutar en compañía de la familia o recibir a
                amigos.
              </p>
            </div>

            <div className="flex space-x-4 items-start">
              <p className="text-2xl font-bold text-secondary">3.</p>
              <p>
                Diseño contemporáneo con amplios espacios interiores que
                favorecen la luminosidad y la comodidad.
              </p>
            </div>

            <div className="flex space-x-4 items-start">
              <p className="text-2xl font-bold text-secondary">4.</p>
              <p>
                El extenso patio y la zona exterior son perfectos para
                aprovechar el estilo de vida al aire libre típico de la isla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Models;
