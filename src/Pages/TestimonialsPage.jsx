import React from "react";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Hero from "../components/Hero";

function TestimonialsPage() {
  return (
    <div className="h-full pb-20">
      <Hero name="Testimonials" />
      <div className="pt-24 lg:pt-0">
        <Testimonials />
      </div>
      <Banner />
      <Footer />
    </div>
  );
}

export default TestimonialsPage;
