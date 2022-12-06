import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Pause from "./pages/Pause";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Whitelist from "./pages/Whitelist";
import ShipmentContainer from "./pages/Shipment";
import "./App.css";
import { GlobalStateProvider } from "./components/GlobalStateProvider";

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
            <Route path="/pause" element={<Pause />} />
          </Routes>
        </Navbar>
      </GlobalStateProvider>
    </BrowserRouter>
  );
}
