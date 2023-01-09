import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { GlobalStateProvider } from "./components/GlobalStateProvider";
import Home from "./pages/Home";
import OffersActive from "./pages/Offers/OffersActive";
import Allowlist from "./pages/Whitelist";
import ShipmentActive from "./pages/Shipment/ShipmentActive";
import ShipmentPaused from "./pages/Shipment/ShipmentPaused";
import ShipmentFinished from "./pages/Shipment/ShipmentFinished";
import OffersFinished from "./pages/Offers/OffersFinished";
import OffersPaused from "./pages/Offers/OffersPaused";

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
            <Route path="/shipments/paused" element={<ShipmentPaused />} />
            <Route path="/shipments/finished" element={<ShipmentFinished />} />
            <Route path="/offers/active" element={<OffersActive />} />
            <Route path="/offers/paused" element={<OffersPaused />} />
            <Route path="/offers/finished" element={<OffersFinished />} />
          </Routes>
        </Navbar>
      </GlobalStateProvider>
    </BrowserRouter>
  );
}
