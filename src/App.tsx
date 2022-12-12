import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { GlobalStateProvider } from "./components/GlobalStateProvider";

const Home = lazy(() => import("./pages/Home"));
const Offers = lazy(() => import("./pages/Offers"));
const ShipmentContainer = lazy(() => import("./pages/Shipment"));
const Whitelist = lazy(() => import("./pages/Whitelist"));
const Pause = lazy(() => import("./pages/Pause"));

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStateProvider>
        <Suspense fallback={<Pause />}>
          <Navbar title={"Navbar"}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/whitelist" element={<Whitelist />} />
              <Route path="/shipments" element={<ShipmentContainer />} />
              <Route path="/offers" element={<Offers />} />
            </Routes>
          </Navbar>
        </Suspense>
      </GlobalStateProvider>
    </BrowserRouter>
  );
}
