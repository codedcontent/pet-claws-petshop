import React, { useEffect } from "react";

const ServicesCard = ({
  serviceDetail,
  currentServiceOnHover,
  setCurrentServiceOnHover,
}) => {
  const handleHover = () => {
    setCurrentServiceOnHover(serviceDetail.title);
  };

  const handleHoverAway = () => {
    setCurrentServiceOnHover(null);
  };

  //   useEffect(() => {
  //     const hoverTimeout = setTimeout(() => {
  //       setCurrentServiceOnHover(null);
  //     }, 3000);

  //     return () => clearTimeout(hoverTimeout);
  //   }, [currentServiceOnHover]);

  return (
    <div
      className={`w-full shadow-lg rounded-lg lg:max-h-[500px] cursor-pointer ${
        currentServiceOnHover !== null &&
        currentServiceOnHover !== serviceDetail.title
          ? "shrink-cards-away"
          : currentServiceOnHover === null
          ? ""
          : "flex flex-row-reverse justify-center items-center"
      }`}
      onClick={handleHover}
      onMouseLeave={handleHoverAway}
    >
      {/* Service Images */}
      <div className="flex w-full">
        {currentServiceOnHover !== serviceDetail.title ? (
          // User has not hovered on the card - Don't expand it.
          <img
            src={serviceDetail.servicesImages[0]}
            alt={serviceDetail.title}
            className="w-full lg:h-64 md:h-40 rounded-t-lg object-cover"
          />
        ) : (
          // User has hovered on the card - Expand it.
          <div className="grid grid-cols-4 w-full gap-10 h-full place-items-center">
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
                className={`h-[500px] rounded-t-lg object-cover`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Service Description */}
      {!currentServiceOnHover && (
        <div className="p-4 space-y-1">
          <p className="font-header lg:text-xl text-sm font-bold text-secondary capitalize">
            {serviceDetail.title}
          </p>

          <p className="font-description font-extralight lg:text-sm text-xs">
            {serviceDetail.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default ServicesCard;
