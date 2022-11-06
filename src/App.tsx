import * as React from 'react';
import ShipmentTable from './components/ShipmentTable';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Pause from './pages/Pause';
import Home from './pages/Home';
import Offers from './pages/Offers'
import './App.css';

function App() {
    return(
    <BrowserRouter>
    <Navbar title={'Navbar'}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Shipments' element={<ShipmentTable/>}/>
        <Route path='/Offers' element={<Offers/>}/>
        <Route path='/Pause' element={<Pause/>}/>
      </Routes>
      </Navbar>
    </BrowserRouter>
    )
}
export default App;

