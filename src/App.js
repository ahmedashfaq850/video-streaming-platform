import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
