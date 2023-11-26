import * as React from "react";
import "./index.css";
import TopNav from "./components/top-nav"
import Hero from "./components/hero"
import LandingPageInner from "./components/landing-page-inner"
import GroupContainer from "./components/group-container"
import FrameContainer from "./components/frame-container"
import LandingPageChild from "./components/landing-page-child"
import Footer from "./components/footer"


const LandingPage = () => {
  return (
   
    <div className="landing-page">
      <TopNav />
      <Hero />
      <LandingPageInner />
      <GroupContainer />
      <FrameContainer />
      <LandingPageChild />
      <Footer />
    </div>
    
  );
};

export default LandingPage;
