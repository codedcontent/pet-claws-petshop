import React from "react";
import ContactMethod from "../components/ContactMethod";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocalConvenienceStoreIcon from "@mui/icons-material/LocalConvenienceStore";

const ContactUs = () => {
  const contactMethods = [
    {
      title: "Chat with us",
      description: "Contact us via email",
      method: "pawsandclawspetshop.abuja@gmail.com",
      icon: (
        <MarkEmailUnreadIcon className="text-secondary" sx={{ fontSize: 35 }} />
      ),
    },
    {
      title: "Phone",
      description: "8am - 9am, Everyday",
      method: "08063732630",
      icon: (
        <PhoneInTalkIcon className="text-secondary" sx={{ fontSize: 35 }} />
      ),
    },
    {
      title: "Store Location",
      description: "Visit our store",
      method:
        "OD Plaza, FHA Estate. Phase 2 (Beside Lugbe Plaza), Lugbe, Abuja.",
      icon: (
        <LocalConvenienceStoreIcon
          className="text-secondary"
          sx={{ fontSize: 35 }}
        />
      ),
    },
  ];

  return (
    <div
      className="md:h-screen min-h-screen w-full lg:px-20 md:px-10 px-4 md:min-h-[92vh] flex flex-col justify-center bg-white"
      id="contact-us"
    >
      <div className="lg:space-y-3">
        <p className="lg:text-6xl md:text-4xl text-3xl font-black font-header">
          Contact Us
        </p>

        <p className="lg:text-xl  font-description font-extralight">
          We're available and ready to assist
        </p>
      </div>

      <div className="space-y-6 mt-6 md:w-1/2 w-full ">
        {contactMethods.map((contactMethod, index) => (
          <ContactMethod key={index} contactMethod={contactMethod} />
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
