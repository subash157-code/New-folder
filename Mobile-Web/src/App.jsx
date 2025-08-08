import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './Components/Header';
import Foot from './Components/Footer';
import Home from './Components/Home';
import Explore from './Components/Explore';
import MobileProduts from './Components/MobileProduts';
import Watch from './Components/Watch';
import EarBuds from './Components/EarBuds.Jsx';
import Laptop from './Components/Laptop';
import Cart from './Components/Cart';
import Contact from './Components/Contact';
import Samsung from './Components/Samsung';
import Acer from './Components/Acer';
import Asus from './Components/Asus';
import Dell from './Components/Dell';

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Router>
        <Header cart={cart} />
        <main style={{ paddingTop: '60px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/MobileProduts" element={<MobileProduts />} />
            <Route path="/Watch" element={<Watch />} />
            <Route path="/EarBuds" element={<EarBuds />} />
            <Route path="/Laptop" element={<Laptop />} />
            <Route path="/samsung" element={<Samsung />} />
            <Route path="/acer" element={<Acer />} />
            <Route path="/asus" element={<Asus />} />
            <Route path="/dell" element={<Dell />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Foot />
      </Router>
    </CartContext.Provider>
  );
}

export default App;
