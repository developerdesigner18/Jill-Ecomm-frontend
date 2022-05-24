import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DropdownC from "./components/dropdown/Dropdown";
// import Dropdownc from "./components/dropdown/Dropdown";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dd" element={<DropdownC />} />

        {/* <Route exact path="/dd" element={<Dropdownc />} /> */}
      </Routes>
    </div>
  );
}

export default App;
