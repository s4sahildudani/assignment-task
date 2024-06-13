import React from 'react';
import './App.css';
import MyNavbar from './components/MyNavbar/MyNavbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from './components/Product/Products';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Header />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
