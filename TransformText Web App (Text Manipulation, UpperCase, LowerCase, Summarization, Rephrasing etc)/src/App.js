import "./App.css";
import Navbar from "./components/Navbar";
import InputText from "./components/Inputtext";
import React, { useState, useEffect } from "react";

function App() {
  const [mode, setMode] = useState({
    backgroundColor: "white",
    color: "black",
  });

  const toggleMode = () => {
    if (mode.backgroundColor === "white") {
      setMode({ backgroundColor: "black", color: "white" });
    } else {
      setMode({ backgroundColor: "white", color: "black" });
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = mode.backgroundColor;
    document.body.style.backgroundColor = mode.backgroundColor;
    document.body.style.color = mode.color;
  }, [mode]);

  return (
    <>
      <Navbar toggleMode={toggleMode} />
      <InputText />
    </>
  );
}

export default App;
