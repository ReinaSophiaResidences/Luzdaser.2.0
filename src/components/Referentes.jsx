import React, { useEffect, useRef, useState } from "react";
import reinasophialogo from "../assets/reinasop.png";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import imgSlider1 from "../assets/complejo1.webp";
import imgSlider2 from "../assets/complejo2.webp";
import imgSlider3 from "../assets/complejo3.webp";
import imgSlider4 from "../assets/complejo4.webp";

const images = [imgSlider1, imgSlider2, imgSlider3, imgSlider4];

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
    <section className="max-w-6xl mx-5 lg:mx-auto py-20">
      {/* Título y logo */}
      <div className="xl:flex justify-center items-center w-full">
        <div className="xl:w-2/3 space-y-10">
          <h2 className="text-5xl font-semibold">
            Somos referentes con un proyecto interesante
          </h2>
          <p className="text-lg xl:pr-10 pb-10">
            Diseños modernos y funcionales que se adaptan a tu estilo de vida,
            encuentra la casa perfecta para ti.
          </p>
        </div>
        <picture className="xl:w-1/3">
          <img src={reinasophialogo} alt="reinasophialogo" />
        </picture>
      </div>

      {/* Carrusel de imágenes */}
      <div className="relative border-t-2 h-screen bg-[url('https://images.pexels.com/photos/1406837/pexels-photo-1406837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-center bg-cover py-10">
      <div className="w-full h-full absolute top-0 left-0 bg-gray-800/70 z-0"/>
        <h2 className="relative font-bold text-4xl text-white text-center my-5">
          Proyecto: RIENA SOPHIA RESIDENCE
        </h2>

        <div className="relative px-5 lg:px-0 mx-10 mb-10">
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
                  className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                    fade ? "opacity-0" : "opacity-100"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Botones de navegación */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full opacity-70 hover:scale-110 hover:opacity-100"
          >
            <FaCaretLeft />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full opacity-70 hover:scale-110 hover:opacity-100"
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
                  index === currentIndex ? "bg-white" : "bg-gray-400"
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
