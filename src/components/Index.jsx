import React, { useState, useEffect } from "react";
import Header from "./Header/Index";
import EmpoweringBuissness from "./Empowering Buissness/Index";
import OnlineBuissness from "./Online Buissness/Index";
import ArtworkSection from "./Top Artworks/Index";
import SectionContainer from "./Section Container/Index";
import WebPackages from "./Web Packages/Index";
import Portfolio from "./Portfolio/Index";
import PricingCards from "./Pricing Cards/Index";
import ContactDetails from "./Contact Details/Index";
import Branding from "./Branding/Index";
import HelpSection from "./Help Section/Index";
import ContactUs from "./Contact Us/Index";
import Footer from "./Footer/Index";
import Members from "./members";

const Index = () => {
  const [mobileView, setMobileView] = useState(window.innerWidth <= 640);
  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth <= 640); // Adjust the screen width as needed
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <Header />
      <EmpoweringBuissness />
      <OnlineBuissness />
      <Members />
      <ArtworkSection />
      <SectionContainer />
      {mobileView ? <WebPackages /> : <PricingCards />}
      <Portfolio />
      <ContactDetails />
      <Branding />
      <HelpSection />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Index;
