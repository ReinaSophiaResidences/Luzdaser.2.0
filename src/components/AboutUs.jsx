import React, { useEffect, useRef, useState } from "react";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import imgSlider1 from "../assets/Us1.avif";
import imgSlider2 from "../assets/Us2.avif";
import imgSlider3 from "../assets/Us3.avif";
import imgSlider4 from "../assets/Us4.avif";

const images = [imgSlider1, imgSlider2, imgSlider3, imgSlider4];

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const delay = 5000; // 5 segundos
  const intervalRef = (useRef(null)) // Guardar referencia del intervalo

  const startInterval = () => {
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delay);
  };

  // Iniciar intervalo en el montaje del componente
  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current); // Limpiar intervalo al desmontar
  }, []);

  // Reiniciar el intervalo al hacer clic en 'Next' o 'Prev'
  const handleNext = () => {
    clearInterval(intervalRef.current); // Limpiar intervalo actual
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    startInterval(); // Reiniciar intervalo
  };

  const handlePrev = () => {
    clearInterval(intervalRef.current); // Limpiar intervalo actual
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    startInterval(); // Reiniciar intervalo
  };

  return (
    <div className="w-full h-full mx-auto bg-gray-200/20 mt-20">
      <div className="flex flex-col lg:flex-row-reverse max-w-6xl mx-auto justify-between items-center px-5 lg:px-0">
        {/* Contenedor de la imagen */}
        <div className="relative w-full lg:max-w-[50%] h-[400px] lg:h-[500px]">
          <img
            src={images[currentIndex]}
            alt="aboutUs"
            className="w-full h-full object-cover rounded-3xl transition-opacity duration-1000 ease-in-out"
          />
          {/* Botón Anterior */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full opacity-70 hover:scale-110 hover:opacity-100"
          >
            <FaCaretLeft/>
          </button>
          {/* Botón Siguiente */}
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full opacity-70 hover:scale-110 hover:opacity-100"
          >
            <FaCaretRight/>
          </button>
          {/* Indicadores de imágenes */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 opacity-70">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  clearInterval(intervalRef.current); // Limpiar el intervalo cuando se hace clic en un punto
                  setCurrentIndex(index);
                  startInterval(); // Reiniciar el intervalo
                }}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
        {/* Contenedor del texto */}
        <div className="lg:w-1/2 space-y-5 mb-5">
          <h2 className="font-serif text-6xl text-center lg:text-left my-5">
            Sobre nosotros
          </h2>
          <p className="leading-snug lg:text-base lg:pr-5">
            A través de Eco Blog Real Estate & Construction VBA, creamos
            viviendas que combinan calidad, belleza y diseño innovador. Nuestro
            proyeco Reina Sofha en Paradera es un testimonio de nuestra visión:
            Lineas limpias, minimalismo elegante y una infraestructura de
            vanguardia
          </p>
          <p className="leading-snug lg:text-base lg:pr-5">
            JBSS ECO Real Estate te acompaña en la busqueda de tu hogar ideal en
            Aruba. Ya seas local o extrajero, nuestras oferta inmobiliaria se
            adapta a tus necesidades y estilo de vida.
          </p>
          <p className="leading-snug lg:text-base lg:pr-5">
            Somos el referente que impulsa el desarrollo de Aruba, brindando
            oportunidades de vivienda excepcionales para todos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
