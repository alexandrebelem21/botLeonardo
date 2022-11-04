import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import DotContract from "./components/DotContract";
import Loading from "./components/Loading";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import Enjoy from "./pages/Enjoy";
import Simulation from "./pages/Simulation";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/enjoy" element={<Enjoy />}></Route>
        <Route path="/simulation" element={<Simulation />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/loading" element={<Loading />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/dotcontract" element={<DotContract />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
