import React from "react";

const Models = ({ imgModel, imgName, model, pp, p1, p2, p3, p4 }) => {
  return (
    <section
      id="proyects"
      className="relative min-h-fit mx-auto bg-[url('./assets/pergola.webp')] bg-center bg-cover mb-10 z-0"
    >
      <div className="absolute inset-0 bg-gray-800/80 z-10" />
      <div className="relative max-w-6xl lg:flex lg:items-start lg:mx-auto mx-5 py-20 z-20">
        <div className="w-full lg:w-1/2 h-auto ">
          <img
            src={imgModel}
            alt={`${imgName} Model House`}
            className="w-full h-full object-cover max-h-[400px]"
          />
        </div>
        <div className="textContainer w-full lg:w-1/2 lg:ml-10 lg:mr-5 space-y-5 text-white font-serif">
          <div className="flex">
            <h2 className="font-serif text-4xl lg:text-5xl text-center lg:text-left border-secondary border-b-[2px] pr-2 w-fit">
              <strong>{model}</strong>
            </h2>
            <h2 className="font-serif text-4xl lg:text-5xl text-center lg:text-left border-white/70 border-b-[2px] pl-2 w-fit">
              Model House
            </h2>
          </div>
          <div className="leading-normal">
            <p>{pp}</p>
          </div>

          <div className="grid grid-cols-2 gap-5 leading-tight">
            <div className="flex space-x-4 items-start">
              <p className="text-2xl font-bold text-secondary">1.</p>
              <p>{p1}</p>
            </div>

            <div className="flex space-x-4 items-start">
              <p className="text-2xl font-bold text-secondary">2.</p>
              <p>{p2}</p>
            </div>

            <div className="flex space-x-4 items-start">
              <p className="text-2xl font-bold text-secondary">3.</p>
              <p>{p3}</p>
            </div>

            <div className="flex space-x-4 items-start">
              <p className="text-2xl font-bold text-secondary">4.</p>
              <p>{p4}</p>
            </div>
          </div>
          <button className="flex mx-auto bg-secondary text-primary px-5 py-1 rounded-md font-serif font-medium hover:scale-105 transition ease-in-out hover:font-semibold">
            Conoce más del proyecto
          </button>
        </div>
      </div>
    </section>
  );
};

export default Models;
