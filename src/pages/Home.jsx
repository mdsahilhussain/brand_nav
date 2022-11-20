import React from "react";
import {
  Navbar,
  Header,
  About,
  Features,
  Pricing,
  Testimonials,
  Help,
  Network,
  Footer,
} from "../components";

function Home() {
  return (
    <>
      <div className="container">
      <Navbar />
      <Header />
      <About />
      <Features />
      <Pricing />
      <Network />
      <Testimonials />
      </div>
      <Help />
      <Footer />
    </>
  );
}

export default Home;
