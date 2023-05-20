import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import TestimonialsPage from "./Pages/TestimonialsPage";
import VehiclesPage from "./Pages/VehiclesPage";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index path="/car-rental" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/vehicles" element={<VehiclesPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
