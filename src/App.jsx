import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import CodeSnippet from "./Components/CodeSnippet";
import CodeSnippetCarousel from "./Components/CodeSnippetCarousel";
import LogosBar from "./Components/LogosBar";
import MeetNylas from "./Components/MeetNylas";
import Accordion from "./Components/Accordion";
import Developers from "./Components/Developers";
import Customer from "./Components/Customer";
import Security from "./Components/Security";
import BuildingFuture from "./Components/BuildingFuture";
 
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CodeSnippet />
      <CodeSnippetCarousel/>
      <LogosBar/>
      <MeetNylas/>
      <Accordion />
      <Developers />
      <Customer />
      <Security />
      <BuildingFuture />
    </div>
  );
};

export default App;
