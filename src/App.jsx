import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import CodeSnippet from "./Components/CodeSnippet";
import CodeSnippetCarousel from "./Components/CodeSnippetCarousel";
import LogosBar from "./Components/LogosBar";
import MeetNylas from "./Components/MeetNylas";
import NylasApi from "./Components/NylasApi";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CodeSnippet />
      <CodeSnippetCarousel/>
      <LogosBar/>
      <MeetNylas/>
    </div>
  );
};

export default App;
