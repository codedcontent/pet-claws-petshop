import React, { useState } from "react";
import ServicesCard from "../components/ServicesCard";
import grooming1 from "../assets/pet grooming -1.jpeg";
import grooming2 from "../assets/pet grooming - 2.jpeg";
import grooming3 from "../assets/pet grooming - 3.jpeg";
import petFood1 from "../assets/pet food - 1.jpg";
import petFood2 from "../assets/pet food - 2.jpg";
import petFood3 from "../assets/pet food - 3.jpeg";
import petAccessories3 from "../assets/pet accessories - 3.jpeg";
import petAccessories2 from "../assets/pet accessories - 2.jpg";
import petAccessories1 from "../assets/pet accessories - 1.jpg";
import useScreenState from "../hooks/useScreenState";

const services = [
  {
    title: "pet grooming",
    description:
      "We offer a range of grooming services, including bathing, brushing, and haircuts. Our team will use high-quality, gentle grooming products to ensure your pet's comfort and safety. We also offer specialized services like nail trimming and ear cleaning to help keep your pet healthy and happy.",
    servicesImages: [grooming1, grooming2, grooming3],
  },
  {
    title: "Pet Food",
    description:
      "Our pet food is specially formulated to provide your furry friend with all the essential nutrients they need to live a happy and healthy life. Our high-quality ingredients include real meat, fruits, and vegetables to ensure your pet is getting the best possible nutrition.",
    servicesImages: [petFood1, petFood2, petFood3],
  },
  {
    title: "Pet Accessories",
    description:
      "We have everything from stylish collars and leashes to cozy beds and blankets. Our selection of toys includes everything from chew toys to interactive puzzles, all designed to keep your pet entertained and engaged.No matter what your pet's needs are, we have something for everyone. Stop by and check out our wide selection of pet accessories today!",
    servicesImages: [petAccessories3, petAccessories2, petAccessories1],
  },
];

const Services = () => {
  const { screenWidth } = useScreenState();
  // screenWidth > 480 &&

  const [currentServiceOnHover, setCurrentServiceOnHover] = useState("");

  return (
    <div
      className="md:h-screen min-h-screen w-full lg:px-20 md:px-10 px-4 md:min-h-[92vh] flex flex-col justify-center space-y-4"
      id="services"
    >
      <div className="lg:space-y-3 md:w-1/2">
        <p className="lg:text-6xl md:text-4xl font-black font-header">
          Treat your pet{" "}
        </p>

        <p className="lg:text-xl  font-description font-extralight">
          To something wonderful today
        </p>
      </div>

      <div
        className={`w-full p-4 lg:gap-8 gap-3 h-max overflow-hidden ${
          screenWidth > 480 &&
          currentServiceOnHover &&
          currentServiceOnHover !== null
            ? "flex"
            : "md:grid md:grid-cols-3 flex flex-col"
        }`}
      >
        {services.map((serviceDetail, index) => (
          <ServicesCard
            key={index}
            serviceDetail={serviceDetail}
            currentServiceOnHover={currentServiceOnHover}
            setCurrentServiceOnHover={setCurrentServiceOnHover}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
