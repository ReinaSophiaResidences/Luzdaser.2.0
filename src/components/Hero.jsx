import React from "react";
import StaggerText from "react-stagger-text";
import beachVideo from "../assets/headerAruba.mp4";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={beachVideo}
        autoPlay
        muted
        loop
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-blue-400/10 to-green-100/20 z-0">
        <div className="relative flex items-center h-full max-w-6xl mx-auto">
          <div className="ml-10 space-y-5 z-40">
            <h1 className="text-white tracking-tight font-serif font-bold text-5xl lg:text-7xl">
              <StaggerText
                staggerType="letter"
                staggerDuration={1}
                startDelay={500}
              >
                "Aruba te espera"
              </StaggerText>
            </h1>
            <p className="text-white text-2xl">
              <StaggerText
                staggerType="letter"
                staggerDuration={1}
                startDelay={500}
              >
                Vive donde siempre soñaste
              </StaggerText>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
