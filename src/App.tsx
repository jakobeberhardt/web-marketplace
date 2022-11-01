import * as React from 'react';
import ShipmentTable from './components/ShipmentTable';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return <div className='wrapper'>
    <nav>
      <ul>
        <li><a href="/Home">Home</a></li>
        <li><a href='/'>Shipments</a></li>
      </ul>
    </nav>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShipmentTable/>}/>
        <Route path='/Home' element={<h1>Home</h1>}/>
      </Routes>
    </BrowserRouter>
  </div>
}
export default App;
