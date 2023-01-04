import { useState } from "react";
import CustomAppBar from "./components/CustomAppBar";
import Home from "./sections/Home";
import Services from "./sections/Services";

function App() {
  return (
    <div className="max-w-screen min-h-screen relative">
      <CustomAppBar />

      <Home />

      <Services />
    </div>
  );
}

export default App;
