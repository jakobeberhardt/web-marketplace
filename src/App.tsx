import * as React from "react";
import ShipmentContainer from "./components/Shipment/shipmentContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Pause from "./pages/Pause";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import "./App.css";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar title={"Navbar"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Shipments" element={<ShipmentContainer />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/Pause" element={<Pause />} />
        </Routes>
      </Navbar>
    </BrowserRouter>
  );
}
export default App;
