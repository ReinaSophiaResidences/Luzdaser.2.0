import React from "react";
import StaggerText from "react-stagger-text";
// import beachVideo from "../assets/headerAruba.mp4";
import bgimg from "../assets/HERO4.webp";

const Hero = () => {
  return (
    <div id="inicio" className="relative w-full h-screen">
      {/* <video
        className="w-full h-full object-cover absolute"
        src={beachVideo}
        autoPlay
        muted
        loop
      /> */}
      {/* <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-blue-400/10 to-green-100/20 z-0"> */}
      <img
        src={bgimg}
        alt="Aruba Beach"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Contenedor para el texto */}
      {/* <div className="absolute inset-0 bg-black/30 z-10"/> */}
      {/* Overlay para mejorar la visibilidad del texto */}
      <div className="relative flex items-center h-full max-w-6xl mx-auto z-20 space-y-10">
        <div className="ml-10">
          <h1 className="tracking-tight font-sans font-medium text-5xl lg:text-7xl text-primary">
            <StaggerText
              staggerType="letter"
              staggerDuration={1}
              startDelay={500}
            >
              "ARUBA TE ESPERA"
            </StaggerText>
          </h1>
          <p className="text-2xl text-white font-semibold">
            <StaggerText
              staggerType="letter"
              staggerDuration={1}
              startDelay={500}
            >
              VIVE DONDE SIEMPRE SOÑASTE
            </StaggerText>
          </p>
          <button className="flex bg-secondary text-primary p-2 font-serif font-medium  hover:scale-105 transition ease-in-out hover:font-semibold mt-10">
            <div className=" border-[1px] border-primary px-8">
            CONTÁCTANOS
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
