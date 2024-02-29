import "../node_modules/@popperjs/core/dist/umd/popper";

import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import React from "react"
// import LandingHeroSection from "./Componant/LandingHeroSection"
import "./App.css"
import AboutUsHeader from "./Componant/about-us-page/AboutUsHeader"
import AboutUsNav from "./Componant/about-us-page/AboutUsNav"
import AboutAccordion from "./Componant/about-us-page/AboutAccordion.jsx";
import OurVisionSection from "./Componant/about-us-page/OurVisionSection.jsx";
import OurImpact from "./Componant/about-us-page/OurImpact.jsx";
import BetterTomorrowSection from "./Componant/about-us-page/BetterTomorrowSection.jsx";
import OurCustomerSupport from "./Componant/about-us-page/OurCustomerSupport.jsx";

// import LandingBannerSection from "./Componant/LandingBannerSection"
// import LanddingAboutSection from "./Componant/LanddingAboutSection"
// import LandinngFooterSection from "./Componant/LandinngFooterSection"

function App() {

  return (
  
      <React.Fragment>
        {/* <LandingHeroSection/>
        <LandingBannerSection/>
        <LanddingAboutSection/>
        <LandinngFooterSection/> */}
        <AboutUsHeader/>
        <AboutUsNav/>
        <AboutAccordion/>
        <OurVisionSection/>
        <OurImpact/>
        <BetterTomorrowSection/>
        <OurCustomerSupport/>

      </React.Fragment>
    

  )
}

export default App
