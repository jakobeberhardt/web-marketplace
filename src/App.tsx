import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { GlobalStateProvider } from "./components/GlobalStateProvider";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Whitelist from "./pages/Whitelist";
import ShipmentContainer from "./pages/Shipment";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStateProvider>
        <Navbar title={"Navbar"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/whitelist" element={<Whitelist />} />
            <Route path="/shipments" element={<ShipmentContainer />} />
            <Route path="/offers" element={<Offers />} />
          </Routes>
        </Navbar>
      </GlobalStateProvider>
    </BrowserRouter>
  );
}
