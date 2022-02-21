import React from "react";

import "./App.scss";
import MainContent from "./components/MainContent/MainContent";
import MenuSlider from "./components/MenuSlider/MenuSlider";
import Navbar from "./components/Navbar/Navbar";
import SecondView from "./components/SecondView/SecondView";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <SecondView />
      <MenuSlider />
    </div>
  );
}

export default App;
