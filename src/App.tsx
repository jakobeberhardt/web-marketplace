import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { GlobalStateProvider } from "./components/GlobalStateProvider";
import Home from "./pages/Home";
import Offers from "./pages/OffersActive";
import Allowlist from "./pages/Whitelist";
import ShipmentActive from "./pages/ShipmentActive";
import ShipmentRevoked from "./pages/ShipmentRevoked";
import ShipmentFinished from "./pages/ShipmentFinished";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStateProvider>
        <Navbar title={"Navbar"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/allowlist" element={<Allowlist />} />
            <Route path="/shipments/active" element={<ShipmentActive />} />
            <Route path="/shipments/revoked" element={<ShipmentRevoked />} />
            <Route path="/shipments/finished" element={<ShipmentFinished />} />
            <Route path="/offers/active" element={<Offers />} />
            <Route path="/offers/finished" element={<Offers />} />
          </Routes>
        </Navbar>
      </GlobalStateProvider>
    </BrowserRouter>
  );
}
