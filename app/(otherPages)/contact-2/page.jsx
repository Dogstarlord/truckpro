import Footer1 from "@/components/footers/Footer1";
import Header18 from "@/components/headers/Header18";
import ContactForm2 from "@/components/othersPages/contact/ContactForm2";
import Map2 from "@/components/othersPages/contact/Map2";
import React from "react";

export const metadata = {
  title: "Contact 2 || CLC",
  description: "CLC",
};
export default function Page() {
  return (
    <>
      <Header18 />
      <div className="tf-page-title style-2">
        <div className="container-full">
          <div className="heading text-center">Contact Us</div>
        </div>
      </div>
      <Map2 />
      <ContactForm2 />
      <Footer1 />
    </>
  );
}
