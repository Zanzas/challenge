import './styles/App.css';
import './styles/color.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home'
import React from 'react';

function App() {
  return (
    <div className={`App`}>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
