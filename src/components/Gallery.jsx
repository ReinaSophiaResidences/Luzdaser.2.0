import React, { useState } from "react";
import img1 from "../assets/gallery1.webp";
import img2 from "../assets/gallery2.webp";
import img3 from "../assets/gallery3.webp";
import img4 from "../assets/gallery4.webp";
import img5 from "../assets/gallery5.webp";
import img6 from "../assets/gallery6.webp";
import logoRS from "../assets/LogoReinaSophia4.png";

const images = [
  { src: img1, alt: "Aruba1" },
  { src: img2, alt: "Aruba2" },
  { src: img3, alt: "Aruba3" },
  { src: img4, alt: "Aruba4" },
  { src: img5, alt: "Aruba5" },
  { src: img6, alt: "Aruba6" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="lg:max-w-6xl mx-5 lg:mx-auto mt-20">
      <div>
        <div className="flex justify-center">
          <h2 className="font-serif text-3xl lg:text-5xl text-center lg:text-left my-5 border-secondary border-b-[2px] pr-2 w-fit">
            <strong>ARUBA</strong>
          </h2>
          <h2 className="font-serif text-3xl lg:text-5xl text-center lg:text-left my-5 border-primary/20 border-b-[2px] pl-2 w-fit">
            ONE HAPPY ISLAND
          </h2>
        </div>
        <div className="overflow-hidden flex justify-center">
          <img
            src={logoRS}
            alt="Logo Reina Sophia"
            className="w-1/4 h-[180px] object-cover"
          />
        </div>
        <div className="">
          <p className="font-serif text-center font-semibold text-lg text-primary">
            En Aruba no solo compras una casa; inviertes en un estilo de vida
            lleno de tranquilidad y belleza natural. ¡Haz de Aruba tu nuevo
            hogar y descubre lo mejor de la vida en el Caribe!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 my-8 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden w-full h-[250px] bg-gray-500 hover:scale-105 transition ease-in-out shadow-md hover:shadow-gray-500 rounded-lg cursor-pointer"
              onClick={() => openModal(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
        
        {/* Modal */}
        {selectedImage && (
          <div
            className="hidden fixed inset-0 md:flex items-center justify-center z-50 bg-black bg-opacity-70"
            onClick={closeModal}
          >
            <div className="relative w-3/4 md:w-1/2">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-xl font-bold bg-black bg-opacity-50 rounded-full px-[10px] hover:scale-105 hover:bg-black/70"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;