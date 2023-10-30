import React from "react";

import HeroSection from "./HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import  {useProductContext} from "../context/productcontex"
import FeatureProduct from "../components/FeatureProduct";
const Home = () => {
  const {myName} =useProductContext()
  const data = {
    name: "Home page",
  };
  return (
    <>
    {myName}
      <HeroSection data={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
