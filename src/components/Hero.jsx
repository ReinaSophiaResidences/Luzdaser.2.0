import React from "react";
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
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/50"></div>
    </div>
  );
};

export default Hero;
