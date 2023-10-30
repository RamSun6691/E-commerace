import React from "react";
import HeroSection from "./HeroSection";

const About = () => {
  const data = {
    name: "About page",
  };
  return (
    <div>
      <HeroSection data={data} />
    </div>
  );
};

export default About;
