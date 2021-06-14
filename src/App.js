import React from "react";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Testimonials from "./components/Testimonials";
import People from "./components/People";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Hero />
      <Features />
      <Section />
      <Testimonials />
      <People />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;
