import React from "react";
import "./App.css";
import NavigationComponent from "../components/navigation/navigation";
import BodyComponent from "../components/body/body";
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="app-container">
        <Toaster />
      <NavigationComponent />
      <BodyComponent />
    </div>
  );
}

export default App;
