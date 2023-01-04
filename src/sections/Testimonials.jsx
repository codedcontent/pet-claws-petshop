import React, { useEffect, useState } from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import personLogo from "../assets/hugging pet-unsplash.jpg";
import CustomButton from "../components/CustomButton";

const Testimonials = () => {
  const usersTestimonials = [
    {
      testimonial:
        "I recently visited the pet shop and was blown away by the variety of animals they had available. From cute little puppies to exotic reptiles, they had it all. The staff was knowledgeable and helpful, and I left feeling confident that I had made the right decision in choosing this shop for my new pet. I will definitely be returning in the future!",
      profilePic: personLogo,
    },
    {
      testimonial:
        "I have been a customer at this pet shop for years and have always had a great experience. The staff is friendly and helpful, and the animals are well-cared for. I always feel confident that I am getting top-quality products and services when I shop here. Thank you for always going above and beyond!",
      profilePic: personLogo,
    },
    {
      testimonial:
        "I am so grateful to have found this pet shop. The staff is so friendly and helpful, and they truly care about the well-being of the animals. I have never had any issues with the products or services I have received here, and I will definitely continue to shop here in the future. Thank you for everything!",
      profilePic: personLogo,
    },
    {
      testimonial:
        "I have been a customer of this pet shop for years and have always had an excellent experience. The staff is knowledgeable and helpful, and the animals are always well-cared for. I have purchased a number of pets from this shop and have never been disappointed. I highly recommend this shop to anyone looking for a new furry friend.",
      profilePic: personLogo,
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleTestimonialClick = (testimonialIndex) => {
    setCurrentTestimonial(testimonialIndex);
  };

  // Effect to change the shown testimonials
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      if (currentTestimonial === usersTestimonials.length - 1) {
        setCurrentTestimonial(0);
      } else {
        setCurrentTestimonial((prev) => (prev += 1));
      }
    }, 5000);

    return () => clearInterval(testimonialInterval);
  }, [currentTestimonial]);

  return (
    <div
      className="md:h-screen min-h-screen w-full lg:px-20 md:px-10 px-4 md:min-h-[92vh] flex flex-col justify-center bg-white"
      id="testimonials"
    >
      <div className="lg:space-y-3">
        <p className="lg:text-6xl md:text-4xl font-black font-header">
          Testimonials
        </p>

        <p className="lg:text-xl  font-description font-extralight">
          See what people are saying about us
        </p>
      </div>

      {usersTestimonials.map((testimonials, index) => (
        <div key={index} className="w-full">
          {currentTestimonial === index && (
            <div
              className="space-y-10 w-full mt-10 flex items-center justify-between"
              key={index}
            >
              <div className="block w-1/2 border-2 border-secondary p-6 relative slide-in">
                {/* Left-Quote */}
                <FormatQuoteIcon className="absolute top-0 left-0 rotate-180" />

                <p className="lg:text-xl font-description font-extralight">
                  {testimonials.testimonial}
                </p>

                {/* Right-Quote */}
                <FormatQuoteIcon className="absolute bottom-0 right-0" />
              </div>

              <img
                src={testimonials.profilePic}
                alt="paw logo"
                className="w-72 h-72 rounded-full slide-in border-2 border-secondary"
              />
            </div>
          )}
        </div>
      ))}

      {/* Testimonial count indicator */}
      <div className="flex gap-4 w-full mt-4 place-content-center">
        {usersTestimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              handleTestimonialClick(index);
            }}
            className={`h-2.5 w-2.5 rounded-full cursor-pointer ${
              currentTestimonial === index ? "bg-secondary" : "bg-gray-200"
            }`}
          ></div>
        ))}
      </div>

      <div className="w-max mt-10">
        <CustomButton title={"Be a part of the experience"} />
      </div>
    </div>
  );
};

export default Testimonials;
