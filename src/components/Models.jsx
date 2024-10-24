import React from "react";
import Luca from "../assets/lucamodel1.avif";
import Oliver from "../assets/olivermodel1.avif";

const Models = () => {
  return (
    <section className="w-full h-full mx-auto bg-gray-200/20 mb-10">
      <div className="flex flex-col lg:flex-row-reverse max-w-6xl mx-auto justify-between items-center px-5 lg:px-0">
        {/* Contenedor de la imagen */}
        <div className="relative w-full lg:max-w-[50%] h-[400px] lg:h-[500px]">
          <img
            src={Luca}
            alt="aboutUs"
            className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
          />
        </div>
        {/* Contenedor del texto */}
        <div className="lg:w-1/2 space-y-5 mb-5 overflow-hidden">
          <h2 className="font-serif text-5xl text-center lg:text-left my-5">
            Casa Modelo Luca
          </h2>
          <p className="leading-snug lg:text-base lg:pr-5">
            Situada en el paraíso tropical de Aruba, esta acogedora casa es la
            opción ideal para quienes buscan una propiedad funcional y de fácil
            mantenimiento, sin renunciar a la comodidad ni al estilo. A solo
            unos minutos de las impresionantes playas de arena blanca, la
            vivienda ofrece un ambiente tranquilo y cálido durante todo el año.
            Diseñada de manera que cada rincón maximiza el uso del espacio,
            brindando una sensación de confort y modernidad. Su bajo costo de
            mantenimiento y la inversión inicial reducida la convierten en una
            excelente oportunidad tanto para quienes desean un hogar accesible
            como para inversores interesados en el rentable mercado de alquiler
            vacacional en la isla.
          </p>
          <button className="mx-auto flex bg-teal-500 text-white px-5 py-1 rounded-md font-serif font-medium hover:scale-105 transition ease-in-out hover:font-semibold">
            Ver Más
          </button>
        </div>
      </div>
      {/* seccion 2 */}
      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto justify-between items-center px-5 lg:px-0">
        {/* Contenedor de la imagen */}
        <div className="relative w-full lg:max-w-[50%] h-[400px] lg:h-[500px]">
          <img
            src={Oliver}
            alt="aboutUs2"
            className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
          />
        </div>
        {/* Contenedor del texto */}
        <div className="lg:w-1/2 space-y-10 mb-5">
          <h2 className="font-serif text-5xl text-center lg:text-right my-5">
            Modelo Casa Oliver
          </h2>
          <p className="leading-snug lg:text-base text-left xl:text-right lg:pl-5">
            En el idílico entorno tropical de Aruba, se encuentra esta magnífica
            casa que redefine el concepto de lujo y confort. A pocos minutos de
            las deslumbrantes playas, esta casa ofrece un refugio exclusivo y
            cálido durante todo el año, ideal para disfrutar en compañía de la
            familia o recibir a amigos. Su diseño contemporáneo cuenta con
            amplios espacios interiores que favorecen la luminosidad y la
            comodidad, creando un ambiente acogedor y relajante. Las áreas
            sociales invitan a compartir momentos memorables, mientras que el
            extenso patio y la zona exterior son perfectos para aprovechar el
            estilo de vida al aire libre típico de la isla. Sin duda, un hogar
            donde cada rincón está pensado para disfrutar del paraíso.
          </p>
          <button className="mx-auto flex bg-teal-500 text-white px-5 py-1 rounded-md font-serif font-medium hover:scale-105 transition ease-in-out hover:font-semibold">
            Ver Más
          </button>
        </div>
      </div>
    </section>
  );
};

export default Models;
