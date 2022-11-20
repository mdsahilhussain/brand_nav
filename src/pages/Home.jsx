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
} from "../components";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Features />
      <Pricing />
      <Network />
      <Testimonials />
      <Help />
    </>
  );
}

export default Home;
