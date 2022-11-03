import * as React from 'react';
import ShipmentTable from './components/ShipmentTable';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return <div className='wrapper'>
    <nav>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/Shipments'>Shipments</a></li>
      </ul>
    </nav>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<h1>Home</h1>}/>
        <Route path='/Shipments' element={<ShipmentTable/>}/>
      </Routes>
    </BrowserRouter>
  </div>
}
export default App;
