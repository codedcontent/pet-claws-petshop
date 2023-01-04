import React from "react";

const ContactMethod = ({ contactMethod }) => {
  return (
    <div className="flex items-start justify-start w-full gap-3">
      {contactMethod.icon}

      <div className="space-y-1">
        <p className="font-header font-bold capitalize">
          {contactMethod.title}
        </p>

        <p className="font-description font-extralight text-gray-400 ">
          {contactMethod.description}
        </p>

        <p className="font-header font-extralight text-secondary ">
          {contactMethod.method}
        </p>
      </div>
    </div>
  );
};

export default ContactMethod;
