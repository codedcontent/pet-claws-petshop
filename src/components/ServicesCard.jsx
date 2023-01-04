import React, { useEffect } from "react";
import useScreenState from "../hooks/useScreenState";

const ServicesCard = ({
  serviceDetail,
  currentServiceOnHover,
  setCurrentServiceOnHover,
}) => {
  const { screenWidth } = useScreenState();

  const handleHover = () => {
    setCurrentServiceOnHover(serviceDetail.title);
  };

  const handleHoverAway = () => {
    setCurrentServiceOnHover(null);
  };

  useEffect(() => {
    const hoverTimeout = setTimeout(() => {
      setCurrentServiceOnHover(null);
    }, 3000);

    return () => clearTimeout(hoverTimeout);
  }, [currentServiceOnHover]);

  return (
    <div
      className={`w-full shadow-lg rounded-lg lg:max-h-[500px] cursor-pointer ${
        !currentServiceOnHover || screenWidth <= 480
          ? ""
          : currentServiceOnHover !== serviceDetail.title
          ? // hidden
            `shrink-cards-away`
          : "flex flex-row-reverse justify-center items-center"
      }`}
      onClick={handleHover}
      onMouseLeave={handleHoverAway}
    >
      {/* Service Images */}
      <div className="flex w-full">
        {currentServiceOnHover !== serviceDetail.title || screenWidth <= 480 ? (
          // User has not hovered on the card - Don't expand it.
          <img
            src={serviceDetail.servicesImages[0]}
            alt={serviceDetail.title}
            className="w-full lg:h-64 h-40 rounded-t-lg object-cover"
          />
        ) : (
          // User has hovered on the card - Expand it.
          <div className="md:grid md:grid-cols-4 w-full lg:gap-10 md:gap-2 h-full place-items-center">
            {/* Expanded text */}
            <div className="p-4 space-y-1">
              <p className="font-header lg:text-xl text-sm font-bold text-secondary capitalize">
                {serviceDetail.title}
              </p>

              <p className="font-description font-extralight lg:text-sm text-xs">
                {serviceDetail.description}
              </p>
            </div>

            {/* Services images - expanded */}
            {serviceDetail.servicesImages.map((serviceImg, index) => (
              <img
                key={index}
                src={serviceImg}
                alt={serviceImg}
                className={`lg:h-[500px] md:h-full hidden md:block rounded-t-lg object-cover`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Service Description */}
      {!currentServiceOnHover ||
        (screenWidth <= 480 && (
          <div className="p-4 space-y-1">
            <p className="font-header lg:text-xl text-sm font-bold text-secondary capitalize">
              {serviceDetail.title}
            </p>

            <p className="font-description font-extralight lg:text-sm text-xs">
              {serviceDetail.description}
            </p>
          </div>
        ))}
    </div>
  );
};

export default ServicesCard;
