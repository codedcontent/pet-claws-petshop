import React from "react";

const CustomButton = ({ title, variant }) => {
  const commonStyles = `font-description font-extralight lg:px-6 lg:py-3 md:px-4 md:py-1.5 py-2.5 px-6 md:text-sm flex justify-center items-center text-center py-1 px-2 cursor-pointer`;

  if (variant === "outlined") {
    return (
      <button
        className={`border-2 border-secondary text-secondary ${commonStyles}`}
      >
        <p className="w-max">{title}</p>
      </button>
    );
  } else {
    return (
      <button className={`bg-secondary text-white ${commonStyles}`}>
        <p className="w-max">{title}</p>
      </button>
    );
  }
};

export default CustomButton;
