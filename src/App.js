import React from "react";

import "./App.scss";
import Address from "./components/Address/Address";
import Credits from "./components/Credits/Credits";
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
      <Address />
      <Credits />
    </div>
  );
}

export default App;
