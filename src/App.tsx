import * as React from "react";
import { ShipmentContainer } from "./components/Shipment/ShipmentContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Pause from "./pages/Pause";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import "./App.css";
import { CssBaseline } from "@mui/material";
import userObject from "./components/user/UserSingleton";
import { GlobalStateProvider } from "./components/GlobalStateProvider";

export default function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <GlobalStateProvider>
        <Navbar title={"Navbar"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Shipments" element={<ShipmentContainer />} />
            <Route path="/Offers" element={<Offers />} />
            <Route path="/Pause" element={<Pause />} />
          </Routes>
        </Navbar>
      </GlobalStateProvider>
    </BrowserRouter>
  );
}
