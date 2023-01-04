import React from "react";
import CustomButton from "../components/CustomButton";
import pawLogo from "../assets/paw logo.png";

const AboutUs = () => {
  return (
    <div
      className="md:h-screen min-h-screen w-full lg:px-20 md:px-10 px-4 md:min-h-[92vh] flex flex-col justify-center bg-white"
      id="about-us"
    >
      <div className="lg:space-y-3">
        <p className="lg:text-6xl md:text-4xl font-black font-header">
          Who or What
        </p>

        <p className="lg:text-xl  font-description font-extralight">
          Is Paws & Claws Petshop
        </p>
      </div>

      <div className="flex justify-between w-full items-center">
        <div className="space-y-10 md:w-1/2 mt-10">
          <p className="lg:text-xl  font-description font-extralight">
            Paws & Claws Petshop is a store that sells supplies and equipment
            for pet care, such as food, toys, leashes, collars, cages, tanks,
            and other necessary items. We also offer services such as wellness
            and grooming. We have a presence, both physical and online, so you
            can be sure to trust that Paws & Claws Petshop is the right store
            for your needs.
          </p>

          <CustomButton title={"Make an enquiry"} />
        </div>

        <img src={pawLogo} alt="paw logo" className="w-96" />
      </div>
    </div>
  );
};

export default AboutUs;
