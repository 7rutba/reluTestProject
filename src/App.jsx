import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Ragister from "./components/Ragister";
import { Toaster } from "react-hot-toast";
import Login from "./components/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Ragister />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>{" "}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
