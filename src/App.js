import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route ,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceAppointment from './pages/PlaceAppointment/PlaceAppointment';
const App = () => {
  return (
      <div className="app">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/PlaceAppointment" element={<PlaceAppointment/>}/>
        </Routes>
      </div>
    )
}
 
export default App;
