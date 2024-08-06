import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';

function App() {
  const showBar = () => {
    document.getElementById("navbar").style.width = "160px";
    document.getElementById("navbar").style.display = "block";
  }
  const closeBar = () => {
    document.getElementById("navbar").style.display = "none";
    document.getElementById("navbar").style.width = "0";
  }
  const [mode, setMode] = useState(true);
  const toggleMode = () => {
    console.log("toggling modes");
    setMode(!mode);
  }

  return (
    <div className={mode? "light-mode": "dark-mode"}>      
      <Navbar closeBar={closeBar} mode={mode}  />
      <Main showBar={showBar} toggleMode={toggleMode} mode={mode}/>
    </div>
  );
}

export default App;
