import React, { useState } from "react";

import "./App.scss";
import MainContent from "./components/MainContent/MainContent";
import Navbar from "./components/Navbar/Navbar";
import SecondView from "./components/SecondView/SecondView";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="App">
      <Navbar showMenu={showMenu} handleShowMenu={handleShowMenu} />
      <MainContent />
      <SecondView />
    </div>
  );
}

export default App;
