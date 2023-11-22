import React from "react";
import "./App.css";
import NavigationComponent from "../components/navigation/navigation";
import BodyComponent from "../components/body/body";
import AddComponent from "../components/add/add";

function App() {
  return (
    <div className="app-container">
      <NavigationComponent />
      <BodyComponent />
    </div>
  );
}

export default App;
