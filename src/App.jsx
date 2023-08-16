import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Menu from "./pages/Menu"
import Branches from "./pages/Branches"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Cart from "./pages/Cart"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path='/' element={< Menu />} /> */}
        <Route path='/branches' element={< Branches />} />
        <Route path='/about' element={< About />} />
        <Route path='/contacts' element={< Contacts />} />
        <Route path='/cart' element={< Cart />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;