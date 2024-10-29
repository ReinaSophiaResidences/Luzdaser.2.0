import React, { useEffect, useRef, useState } from "react";
import reinasophialogo from "../assets/LogoReinaSophia.png";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import { TbBeach } from "react-icons/tb";
import { BiBuildingHouse } from "react-icons/bi";
import { RiContractLine } from "react-icons/ri";
import imgSlider1 from "../assets/complejo1.webp";
import imgSlider2 from "../assets/complejo2.webp";
import imgSlider3 from "../assets/complejo3.webp";
import imgSlider4 from "../assets/complejo4.webp";
import imgSlider5 from "../assets/complejo5.webp";

const images = [imgSlider1, imgSlider2, imgSlider3, imgSlider4, imgSlider5];

const Referentes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const delay = 5000; // 5 segundos
  const intervalRef = useRef(null); // Referencia del intervalo

  const startInterval = () => {
    // Limpia cualquier intervalo existente antes de crear uno nuevo
    clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      handleNext();
    }, delay);
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current); // Limpiar intervalo al desmontar
  }, []);

  const handleNext = () => {
    setFade(true); // Activar animación
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(false); // Desactivar animación después del cambio
    }, 500);
    startInterval(); // Reiniciar el intervalo
  };

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFade(false);
    }, 500);
    startInterval(); // Reiniciar el intervalo
  };

  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % images.length;
      visibleImages.push(images[index]);
    }
    return visibleImages;
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    startInterval(); // Reiniciar el intervalo al seleccionar un punto
  };

  return (
    <section className="mx-5 lg:mx-auto font-serif">
      {/* Título y logo */}
      <div className="xl:flex justify-center items-center w-full xl:max-w-6xl mx-auto my-28">
        <div className="xl:w-2/3">
          <h2 className="text-5xl font-semibold text-center font-serif">
            Somos referentes con un proyecto interesante
          </h2>
          <div className="md:w-1/3 mx-auto">
            <img
              src={reinasophialogo}
              alt="reinasophialogo"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-lg text-center xl:pr-10">
            Diseños modernos y funcionales que se adaptan a tu estilo de vida,
            encuentra la casa perfecta para ti.
          </p>
          <div className="flex justify-center gap-32 pt-10">
            <BiBuildingHouse size={40} color="#201751" />
            <RiContractLine size={40} color="#201751" />
            <TbBeach size={40} color="#201751" />
          </div>
        </div>
      </div>
      {/* Carrusel de imágenes */}
      <div className="w-full bg-[url('./assets/10.webp')] bg-center] py-20 bg-fixed bg-cover">
        <div className="flex justify-center text-white mb-10">
          <h2 className="font-serif font-semibold text-4xl lg:text-5xl text-center lg:text-left my-5 border-primary/20 border-b-[2px] pl-2 w-fit">
            REINA SOFIA RESIDENCE
          </h2>
        </div>

        <div className="relative px-5 lg:px-0 mb-10 xl:max-w-6xl mx-auto">
          {/* Contenedor Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {getVisibleImages().map((image, index) => (
              <div
                key={index}
                className={`relative w-full h-[300px] lg:h-[400px] overflow-hidden ${
                  index === 0 ? "block" : "hidden md:block"
                }`}
              >
                <img
                  src={image}
                  alt={`slide-${index}`}
                  className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out rounded-lg hover:scale-105 ${
                    fade ? "opacity-0" : "opacity-100"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Botones de navegación */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full opacity-70 hover:scale-110 hover:opacity-100"
          >
            <FaCaretLeft />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full opacity-70 hover:scale-110 hover:opacity-100"
          >
            <FaCaretRight />
          </button>

          {/* Indicadores de control */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-gray-500"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referentes;
