import Footer1 from "@/components/footers/Footer1";
import Header18 from "@/components/headers/Header18";
import Header2 from "@/components/headers/Header2";
import About from "@/components/othersPages/about/About";
import Features from "@/components/othersPages/about/Features";
import FlatTitle from "@/components/othersPages/about/FlatTitle";
import Hero from "@/components/othersPages/about/Hero";
import ShopGram from "@/components/othersPages/about/ShopGram";
import Testimonials from "@/components/othersPages/about/Testimonials";
import React from "react";

export const metadata = {
  title: "About Us || Drogaria VivaMais",
  description: "Drogaria VivaMais",
};
export default function Page() {
  return (
    <>
      <Header18 />
      <Hero />
      <FlatTitle />
      <div className="container">
        <div className="line"></div>
      </div>
      <About />
      <Features />
      <Testimonials />
      <div className="container">
        <div className="line"></div>
      </div>
      <ShopGram />
      <Footer1 />
    </>
  );
}
