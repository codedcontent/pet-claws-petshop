import React from "react";

const ContactMethod = ({ contactMethod }) => {
  return (
    <div className="flex items-start justify-start w-full gap-3">
      {contactMethod.icon}

      <div className="space-y-1 break-words">
        <p className="font-header text-sm md:text-base  font-bold capitalize">
          {contactMethod.title}
        </p>

        <p className="font-description text-sm md:text-base  font-extralight text-gray-400 ">
          {contactMethod.description}
        </p>

        <p className="font-header text-sm md:text-base  font-extralight text-secondary ">
          {contactMethod.method}
        </p>
      </div>
    </div>
  );
};

export default ContactMethod;
