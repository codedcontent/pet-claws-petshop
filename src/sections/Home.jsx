import React from "react";
import heroImg from "../assets/dog-3.jpg";
import CustomButton from "../components/CustomButton";

const Home = () => {
  return (
    <div
      className="lg:px-20 md:px-10 px-4 min-h-[92vh] flex flex-col justify-center"
      id="#"
    >
      <div className="w-1/2 space-y-10">
        {/* Into text */}
        <div className="space-y-4">
          <p className="text-7xl font-black font-header">Paws & Claws Petshop</p>

          <p className="text-2xl font-description font-extralight">
            Give your precious pet the best product.
          </p>
        </div>

        <div className="w-max">
          <a href="#services">
            <CustomButton title={"Dive into our furry world"} />
          </a>
        </div>
      </div>

      <div className="w-1/2 h-screen absolute top-0 right-0 -z-10 overflow-hidden">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Home;
