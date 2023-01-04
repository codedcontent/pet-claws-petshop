import { useState } from "react";
import appLogo from "../assets/logo.png";
import CustomButton from "./CustomButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Modal } from "@mui/joy";
import ModalClose from "@mui/joy/ModalClose/ModalClose";

const navLinks = [
  {
    title: "Home",
    path: "#",
  },
  {
    title: "About Us",
    path: "#about-us",
  },
  {
    title: "Services",
    path: "#services",
  },
  {
    title: "Testimonials",
    path: "#testimonials",
  },
  {
    title: "Contact Us",
    path: "#contact-us",
  },
];

const CustomAppBar = () => {
  const [currentSection, setCurrentSection] = useState("#");
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="w-full z-50 sticky top-0 left-0">
      <div className="w-full  h-14 flex justify-between items-center m-auto lg:px-20 md:px-10 p-4">
        {/* Logo */}
        <img
          src={appLogo}
          alt="Paws & Claws Logo"
          className="lg:w-10 lg:h-10 w-8
          h-8 object-cover"
        />

        {/* Nav Links - Large Screens */}
        <div className="lg:gap-8 md:gap-6 md:flex hidden justify-center items-center">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className={`font-description font-extralight hover:text-secondary/90 md:text-sm ${
                currentSection === link.path && "text-secondary font-bold"
              }`}
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Get in touch button */}
        <div className="hidden md:block">
          <CustomButton title={"Get in touch"} variant="outlined" />
        </div>

        {/* Menu Icon */}
        <div className="md:hidden">
          <MenuIcon
            className="text-secondary"
            onClick={() => {
              setNavOpen(true);
            }}
          />
        </div>

        {/* Nav Links - small screens */}
        <div className="md:hidden absolute">
          <Modal
            open={navOpen}
            onClose={() => setNavOpen(false)}
            className="md:hidden text-secondary"
          >
            <div className="relative h-screen w-screen md:hidden">
              <ModalClose
                variant="outlined"
                sx={{
                  top: "5%",
                  right: "5%",
                }}
              />
              <div className="h-full md:hidden gap-10 flex flex-col justify-center items-center">
                <div className="gap-10 md:hidden flex flex-col justify-center items-center ">
                  {navLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.path}
                      className={`font-description font-extralight hover:text-secondary/90 md:text-sm ${
                        currentSection === link.path &&
                        "text-secondary font-bold"
                      }`}
                      onClick={() => setNavOpen(false)}
                    >
                      {link.title}
                    </a>
                  ))}
                </div>

                {/* Get in touch button */}
                <div className="w-max">
                  <CustomButton title={"Get in touch"} variant="outlined" />
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default CustomAppBar;
