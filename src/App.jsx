import { useState } from "react";
import CustomAppBar from "./components/CustomAppBar";
import AboutUs from "./sections/AboutUs";
import ContactUs from "./sections/ContactUs";
import Home from "./sections/Home";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <div className="max-w-screen min-h-screen relative">
      <CustomAppBar />

      <Home />

      <AboutUs />

      <Services />

      <Testimonials />

      <ContactUs />
    </div>
  );
}

export default App;
